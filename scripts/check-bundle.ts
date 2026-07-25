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
import { IDIOMS } from '../src/data/idioms';
import { READING_TEXTS } from '../src/data/reading';
import { a1Words } from '../src/data/words/a1';
import { customWords } from '../src/data/words/custom';

/**
 * Ceiling on the whole eager payload (entry chunk + everything it statically imports, incl. the
 * React vendor chunk) in kB. Only ever lower this. The next planned step — the MODULE meta-split
 * (standard §4.4) — takes ~450 kB of topic bodies + exercises off this path; when it lands, lower
 * the budget rather than banking the slack.
 */
const EAGER_BUDGET_KB = 800;

/** Corpus chunk names from vite.config manualChunks — none of these may be eager. */
const CORPUS_CHUNKS = ['words', 'reading', 'idioms'];

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
  probe('reading texts', READING_TEXTS.map((t) => t.body.en.slice(0, 120)));

  // ── 3. budget ──────────────────────────────────────────────────────────────────────────────
  if (totalKb > EAGER_BUDGET_KB) {
    errors.push(
      `eager payload ${totalKb.toFixed(1)} kB exceeds the ${EAGER_BUDGET_KB} kB budget ` +
        `(${eager.size} chunks). Do not raise the budget — split something out; the module ` +
        'meta-split is the planned next step.',
    );
  }

  if (errors.length === 0) {
    console.log(
      `✓ check:bundle — eager payload ${totalKb.toFixed(1)} kB / ${EAGER_BUDGET_KB} kB budget ` +
        `across ${eager.size} statically-imported chunk(s); word, reading and idiom corpora are all ` +
        'lazy and none of their content is inlined.',
    );
  }
}

if (errors.length) {
  console.error(`✗ check:bundle — ${errors.length} problem(s):`);
  for (const e of errors) console.error('  - ' + e);
  process.exit(1);
}
