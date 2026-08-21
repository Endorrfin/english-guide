/*
 * check-bundle.ts — enforces the SCALE GUARD (PROJECT-BRIEF §6) on the built output. M1.
 * Run: `npm run check:bundle` (chained into `verify` AFTER build, since it reads dist/).
 *
 * The meta-split is easy to undo by accident: one `import { WORDS }` in an eagerly-reached module
 * (a footer count, a nav badge, a search tweak) silently puts a whole corpus back on the critical
 * path. That regression is invisible in code review and invisible to `check:data`.
 *
 * WHAT "EAGER" MEANS HERE — and why the naive check fails.
 * `vite.config` manualChunks pins each corpus into its own file, so a regression does NOT inline
 * corpus text into `index-*.js`; instead the entry chunk gains a **static import** of
 * `words-*.js`, which the browser then fetches and executes before first paint. A grep for
 * sentences inside the entry chunk therefore passes while the bug is fully present (verified: that
 * exact false-negative was caught by testing this gate against a deliberate regression, M1).
 *
 * So the gate walks the real thing: the TRANSITIVE STATIC import graph from the entry chunk. A
 * `import("./x.js")` (dynamic, route-lazy) is not an edge; `import "./x.js"` / `from "./x.js"` is.
 * Everything reachable that way is downloaded up front and counts against the budget.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { COLLOCATIONS } from '../src/data/collocations';
import { IDIOMS } from '../src/data/idioms';
import { modules } from '../src/data/modules/all';
import { READING_TEXTS } from '../src/data/reading';
import { a1Words } from '../src/data/words/a1';
import { customWords } from '../src/data/words/custom';

/**
 * Ceiling on the whole eager payload (entry chunk + everything it statically imports, incl. the
 * ~190 kB React vendor chunk) in kB. **Only ever lower this.**
 *
 * History: 1.39 MB before any split → 745 kB after the dictionary split (M1) → 326 kB after the
 * module split (M2). The headroom left here covers nav meta growing as the remaining 22 modules get
 * authored (~+50 kB of `meta.generated.ts`). If a build breaks this, split something out — do not
 * raise the number.
 */
const EAGER_BUDGET_KB = 420;

/** Corpus chunk names from vite.config manualChunks — none of these may be eager. */
const CORPUS_CHUNKS = ['words', 'reading', 'idioms', 'collocations']; // CHANGED (V12)

const here = dirname(fileURLToPath(import.meta.url));
const assets = resolve(here, '../dist/assets');
const errors: string[] = [];

let files: string[] = [];
try {
  files = readdirSync(assets);
} catch {
  errors.push('dist/assets is missing — run `npm run build` first.');
}

/**
 * Static import specifiers only — `import"./x.js"`, `import{a}from"./x.js"`, `import*as n from…`.
 * Deliberately NOT `import("./x.js")` (dynamic = route-lazy = not on the critical path).
 *
 * The clause `[^;"'`()]*?` is what separates the two: it forbids `(`, so a dynamic import can
 * never be mistaken for a static one, and forbids quotes so a match cannot run past its statement.
 * An earlier version required whitespace before `from` and silently matched NOTHING in minified
 * output (`}from"./x.js"`), which made this whole gate a no-op — caught by testing the gate against
 * a deliberate regression. If you touch this regex, re-run that test (see §14 M1).
 */
function staticImports(source: string): string[] {
  const out: string[] = [];
  const re = /(?:^|[;}\n])\s*import(?:[^;"'`()]*?from)?\s*["'`]\.\/([^"'`]+)["'`]/g;
  for (const m of source.matchAll(re)) out.push(m[1]);
  return out;
}

/** Transitive closure of static imports from `start` (inclusive). */
function eagerClosure(start: string, read: (n: string) => string | undefined): Set<string> {
  const seen = new Set<string>();
  const queue = [start];
  while (queue.length) {
    const name = queue.shift()!;
    if (seen.has(name)) continue;
    seen.add(name);
    const src = read(name);
    if (src === undefined) continue;
    for (const spec of staticImports(src)) if (spec.endsWith('.js')) queue.push(spec);
  }
  return seen;
}

const entryName = files.find((f) => /^index-.*\.js$/.test(f));
if (!entryName && files.length) errors.push('no entry chunk (index-*.js) found in dist/assets');

if (entryName) {
  // ── walk the transitive static graph ────────────────────────────────────────────────────────
  const read = (n: string): string | undefined => {
    try {
      return readFileSync(join(assets, n), 'utf8');
    } catch {
      errors.push(`chunk '${n}' is referenced but missing from dist/assets`);
      return undefined;
    }
  };
  const eager = eagerClosure(entryName, read);

  const sizeOf = (n: string): number => {
    try {
      return statSync(join(assets, n)).size;
    } catch {
      return 0;
    }
  };
  const totalKb = [...eager].reduce((s, n) => s + sizeOf(n), 0) / 1024;

  // ── 1. no corpus chunk may be reachable statically ─────────────────────────────────────────
  for (const chunk of CORPUS_CHUNKS) {
    const hit = [...eager].find((n) => new RegExp(`^${chunk}-.*\\.js$`).test(n));
    if (hit) {
      errors.push(
        `the '${chunk}' corpus chunk (${hit}, ${(sizeOf(hit) / 1024).toFixed(1)} kB) is STATICALLY ` +
          'reachable from the entry chunk — the meta-split regressed.\n' +
          '      cause: something the eager shell imports pulls the corpus in directly.\n' +
          '      fix:   import the generated slim index (src/data/*/index.generated.ts) instead,\n' +
          '             or move the consumer behind a lazy route.',
      );
    }
    if (!files.some((f) => new RegExp(`^${chunk}-.*\\.js$`).test(f))) {
      errors.push(`expected a '${chunk}-*.js' chunk (vite.config manualChunks) — none found`);
    }
  }

  // ── 1b. the DEFAULT route must not pull a corpus either ────────────────────────────────────
  // `#/map` is what opens on load. LandscapeMap is a lazy chunk, so an eager-corpus import there
  // does NOT show up in the entry graph above — yet it still costs the user the whole corpus on the
  // first screen. That was the real M1 bug (READING_COUNTS pulled all 141 texts for 3 numbers), so
  // it gets its own assertion instead of relying on the entry-chunk rule to catch it.
  const mapChunk = files.find((f) => /^LandscapeMap-.*\.js$/.test(f));
  if (!mapChunk) {
    errors.push('no LandscapeMap-*.js chunk found — cannot verify the default route');
  } else {
    const mapEager = eagerClosure(mapChunk, read);
    for (const chunk of CORPUS_CHUNKS) {
      const hit = [...mapEager].find((n) => new RegExp(`^${chunk}-.*\\.js$`).test(n));
      if (hit) {
        errors.push(
          `the DEFAULT route (#/map) statically pulls the '${chunk}' corpus (${hit}, ` +
            `${(sizeOf(hit) / 1024).toFixed(1)} kB) — the first screen pays for the whole dataset.\n` +
            '      fix: import the generated slim index (src/data/*/index.generated.ts) instead.',
        );
      }
    }
  }


  // ── 1c. ROUTE ISOLATION: a Words tab may reach its OWN corpus and no other ─────────────────
  // CHANGED (V12). The V12 split gave collocations their own chunk — but every Words page renders
  // VocabTabs, and VocabTabs used to import WORDS + IDIOMS + IRREGULAR for its five count badges.
  // That made opening #/dictionary download the whole idioms corpus, and would have made the new
  // collocations chunk load on all five tabs: the split would have been PURELY COSMETIC.
  //
  // Rules 1 and 1b cannot see this. Both walk from an EAGER root (the entry chunk, the default
  // route), and every Words page is behind React.lazy — so the regression is invisible to them,
  // invisible in review, and invisible in the build log (each chunk is still its own file; the page
  // chunk simply gains a static import of it). Hence a rule that walks from each route instead.
  //
  // The fix this protects: counts come from src/data/phrases.generated.ts (+ words/index.generated),
  // never from a corpus. If a badge ever needs more than a number, generate that too.
  const ROUTE_CORPORA: Record<string, readonly string[]> = {
    DictionaryPage: ['words'],
    DefinitionsPage: ['words'],
    IdiomsPage: ['idioms'],
    CollocationsPage: ['collocations'],
    IrregularPage: [],
    ReviewPage: ['words', 'idioms', 'collocations'], // the SRS decks legitimately span every corpus
  };
  for (const [page, allowed] of Object.entries(ROUTE_CORPORA)) {
    const chunk = files.find((f) => new RegExp(`^${page}-.*\\.js$`).test(f));
    if (!chunk) {
      errors.push(`no ${page}-*.js chunk found — cannot verify route isolation`);
      continue;
    }
    const reach = eagerClosure(chunk, read);
    for (const corpus of CORPUS_CHUNKS) {
      if (allowed.includes(corpus)) continue;
      const hit = [...reach].find((n) => new RegExp(`^${corpus}-.*\\.js$`).test(n));
      if (hit) {
        errors.push(
          `${page} statically pulls the '${corpus}' corpus (${hit}, ${(sizeOf(hit) / 1024).toFixed(1)} kB), ` +
            `which it does not use.\n` +
            '      cause: usually a shared component importing a corpus for a count or a label\n' +
            '             (VocabTabs did exactly this before V12).\n' +
            '      fix:   import the generated slim module instead — src/data/phrases.generated.ts\n' +
            '             or src/data/words/index.generated.ts.',
        );
      }
    }
  }

  // ── 2. belt and braces: no corpus TEXT anywhere in the eager set ───────────────────────────
  // Guards the other failure mode — manualChunks changing so a corpus gets inlined instead.
  // Samples come from the live data at check time, so they can never go stale like fixed probes.
  const eagerSource = [...eager].map((n) => readFileSync(join(assets, n), 'utf8')).join('\n');
  const clean = (s: string): boolean => !/["'\\`$]/.test(s) && s.length > 30;
  const probe = (label: string, candidates: string[]): void => {
    const probes = candidates.filter(clean).slice(0, 3);
    if (probes.length === 0) {
      errors.push(`${label}: no quote-free sample available to probe with (widen the candidates)`);
      return;
    }
    const found = probes.find((p) => eagerSource.includes(p));
    if (found) {
      errors.push(
        `${label} content is INLINED into the eager payload — the meta-split regressed.\n` +
          `      found: ${JSON.stringify(found.slice(0, 60))}…`,
      );
    }
  };
  probe('word cards (a1)', a1Words.flatMap((w) => [w.def.en, ...w.examples.map((e) => e.text.en)]));
  probe('word cards (custom)', customWords.flatMap((w) => [w.def.en, ...w.examples.map((e) => e.text.en)]));
  probe('idioms', IDIOMS.flatMap((e) => [e.meaning.en, ...e.examples.map((x) => x.text.en)]));
  // CHANGED (V12): the collocations corpus is its own chunk now — guard it the same way.
  probe('collocations', COLLOCATIONS.flatMap((e) => [e.meaning.en, ...e.examples.map((x) => x.text.en)]));
  probe('reading texts', READING_TEXTS.map((t) => t.body.en.slice(0, 120)));
  // CHANGED (M2): module BODIES must stay in their per-module lazy chunks. The classic way to break
  // this is importing `data/modules/all.ts` (or a module file) from anywhere the shell reaches.
  probe(
    'module bodies',
    modules.flatMap((m) =>
      m.topics.flatMap((tp) =>
        tp.blocks.flatMap((b) => (b.kind === 'prose' ? [b.md.en] : b.kind === 'callout' ? [b.md.en] : [])),
      ),
    ),
  );
  // …and no per-module chunk may be statically reachable either.
  const eagerModuleChunk = [...eager].find((n) => /^m\d+-.*\.js$/.test(n));
  if (eagerModuleChunk) {
    errors.push(
      `module chunk '${eagerModuleChunk}' is STATICALLY reachable from the entry chunk — module ` +
        'bodies must load lazily via concepts.loadModule().',
    );
  }

  // ── 3. budget ──────────────────────────────────────────────────────────────────────────────
  if (totalKb > EAGER_BUDGET_KB) {
    errors.push(
      `eager payload ${totalKb.toFixed(1)} kB exceeds the ${EAGER_BUDGET_KB} kB budget ` +
        `(${eager.size} chunks). Do not raise the budget — split something out (reading's per-text ` +
        'slim index is the next candidate; see CURRICULUM §G).',
    );
  }

  if (errors.length === 0) {
    console.log(
      `✓ check:bundle — eager payload ${totalKb.toFixed(1)} kB / ${EAGER_BUDGET_KB} kB budget ` +
        `across ${eager.size} statically-imported chunk(s); word, reading, idiom and collocation ` +
        'corpora plus all module bodies are lazy, none of their content is inlined, and every Words\n  tab reaches only its own corpus.',
    );
  }
}

if (errors.length) {
  console.error(`✗ check:bundle — ${errors.length} problem(s):`);
  for (const e of errors) console.error('  - ' + e);
  process.exit(1);
}
