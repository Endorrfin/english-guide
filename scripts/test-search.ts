/*
 * test-search.ts — golden tests for the meta-split search contract (M1).
 * Run: tsx scripts/test-search.ts — exits non-zero on any failure. Auto-discovered by run-tests.
 *
 * The point of these assertions is the SPLIT, not the ranking algorithm (that came over verbatim
 * with the S1 port). Two invariants matter and both are easy to break by accident:
 *
 *   1. the SLIM index carries no definition text — if someone adds `def` to
 *      gen-data-index.ts "for convenience", the eager bundle triples and the scale guard fails
 *      quietly (52 kB → 152 kB now, ~890 kB at the 3,000-word target);
 *   2. definition matching still WORKS once the corpus is primed — i.e. the deferral is a deferral
 *      and not a silent feature removal.
 */
import { WORDS } from '../src/data/words';
import { WORD_COUNTS, WORD_INDEX } from '../src/data/words/index.generated';
import { __resetSearchIndex, __setWordCorpus, isDeepSearchReady, search } from '../src/lib/search';

let failures = 0;
function ok(cond: boolean, msg: string): void {
  if (!cond) {
    failures++;
    console.error('  ✖ ' + msg);
  }
}
function eq(actual: unknown, expected: unknown, msg: string): void {
  ok(
    JSON.stringify(actual) === JSON.stringify(expected),
    `${msg} — got ${JSON.stringify(actual)}, want ${JSON.stringify(expected)}`,
  );
}

// ── the slim index ─────────────────────────────────────────────────────────────────────────────
eq(WORD_INDEX.length, WORDS.length, 'the slim index covers every word');
eq(WORD_COUNTS.total, WORDS.length, 'WORD_COUNTS.total matches the corpus');
const indexIds = new Set(WORD_INDEX.map((w) => w.id));
ok(WORDS.every((w) => indexIds.has(w.id)), 'every corpus id is present in the slim index');
ok(
  WORD_INDEX.every((w) => typeof w.translations === 'string' && w.translations.length > 0),
  'translations are pre-joined non-empty strings',
);
// The size guarantee, asserted structurally: no entry may carry a definition-sized field.
const KEYS = ['id', 'word', 'level', 'translations'];
ok(
  WORD_INDEX.every((w) => Object.keys(w).every((k) => KEYS.includes(k))),
  `slim index entries must carry ONLY ${KEYS.join(' · ')} — a new field here costs eager bytes on ` +
    'every page load; measure before adding one (see scripts/gen-data-index.ts)',
);
const indexBytes = Buffer.byteLength(JSON.stringify(WORD_INDEX));
const corpusBytes = Buffer.byteLength(JSON.stringify(WORDS));
ok(
  indexBytes * 4 < corpusBytes,
  `the slim index (${(indexBytes / 1024).toFixed(1)} kB) must stay far smaller than the corpus ` +
    `(${(corpusBytes / 1024).toFixed(1)} kB) — it is ${(corpusBytes / indexBytes).toFixed(1)}× now`,
);

// ── pick a probe that ONLY definition text can match ───────────────────────────────────────────
// Derived from the live corpus so it can never go stale: a phrase inside exactly one `def.en` that
// appears in no headword and no translation.
function definitionOnlyProbe(): { phrase: string; word: string } | undefined {
  for (const w of WORDS) {
    const toks = w.def.en.toLowerCase().replace(/[^a-z ]/g, ' ').split(/\s+/).filter((t) => t.length > 3);
    for (let i = 0; i + 2 < toks.length; i++) {
      const phrase = toks.slice(i, i + 3).join(' ');
      if (phrase.length < 14) continue;
      const inDefs = WORDS.filter((x) => x.def.en.toLowerCase().includes(phrase)).length;
      const inWords = WORDS.some(
        (x) => x.word.toLowerCase().includes(phrase) || x.translations.join(' ').toLowerCase().includes(phrase),
      );
      if (inDefs === 1 && !inWords) return { phrase, word: w.word };
    }
  }
  return undefined;
}
const probe = definitionOnlyProbe();
ok(!!probe, 'found a definition-only probe phrase in the corpus');

// ── slim mode: headwords + translations hit, definitions do not ────────────────────────────────
__resetSearchIndex();
ok(!isDeepSearchReady(), 'search starts in slim mode (no corpus loaded)');

const first = WORD_INDEX[0];
ok(
  search(first.word, 'en', 8).some((r) => r.kind === 'word' && r.title === first.word),
  `slim mode finds a headword ('${first.word}')`,
);
const trProbe = first.translations.split(', ')[0];
ok(
  search(trProbe, 'uk', 8).some((r) => r.kind === 'word'),
  `slim mode finds a word by its UA translation ('${trProbe}')`,
);
ok(
  search('modal', 'en', 8).some((r) => r.kind === 'module' || r.kind === 'topic'),
  'slim mode still searches modules and topics',
);
if (probe) {
  eq(search(probe.phrase, 'en', 8).length, 0, `slim mode does NOT match definition text ('${probe.phrase}')`);
}

// ── primed mode: definition text matches too ───────────────────────────────────────────────────
__setWordCorpus(WORDS);
ok(isDeepSearchReady(), 'the corpus upgrade flips the deep-search flag');
if (probe) {
  const deep = search(probe.phrase, 'en', 8);
  ok(deep.length > 0, `primed mode matches definition text ('${probe.phrase}')`);
  ok(
    deep.some((r) => r.title === probe.word),
    `primed mode returns the right word for its definition ('${probe.phrase}' → '${probe.word}')`,
  );
}
// The upgrade must ADD matches, never change what slim already found.
ok(
  search(first.word, 'en', 8).some((r) => r.title === first.word),
  'primed mode still finds headwords (the upgrade is additive)',
);

__resetSearchIndex();
ok(!isDeepSearchReady(), 'the reset hook returns search to slim mode');

if (failures > 0) {
  console.error(`\n✖ test-search: ${failures} failure(s).`);
  process.exit(1);
}
console.log(
  `✓ test-search: all checks passed (slim index ${(indexBytes / 1024).toFixed(1)} kB vs corpus ` +
    `${(corpusBytes / 1024).toFixed(1)} kB, ${(corpusBytes / indexBytes).toFixed(1)}× smaller; ` +
    'headword + translation hits in slim mode, definition hits after priming).',
);
