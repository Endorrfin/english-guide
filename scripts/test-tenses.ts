// CHANGED (T1): golden tests for the Tense Navigator engine + data integrity of the 3 × 4
// time × aspect matrix. Run: tsx scripts/test-tenses.ts (auto-discovered by run-tests.ts) —
// exits non-zero on any failure. Mirrors scripts/test-modals.ts.
import {
  ASPECTS,
  ASPECT_GLYPH,
  ASPECT_LABEL,
  ASPECT_MEANING,
  TENSE_TIMES,
  getTense,
  listTenses,
} from '../src/lib/tenses';
import type { Aspect, TenseTime } from '../src/lib/tenses';
import type { Localized } from '../src/data/types';

let failures = 0;
function ok(cond: boolean, msg: string): void {
  if (!cond) {
    failures++;
    console.error('  ✖ ' + msg);
  }
}

const loc = (v: Localized | undefined, where: string) => {
  ok(!!v && !!v.en?.trim() && !!v.uk?.trim(), `bilingual value missing at ${where}`);
};

// The shared TenseGlyphs vocabulary is complete.
for (const a of ASPECTS) {
  ok(!!ASPECT_GLYPH[a], `glyph missing for aspect ${a}`);
  loc(ASPECT_LABEL[a], `ASPECT_LABEL.${a}`);
  loc(ASPECT_MEANING[a], `ASPECT_MEANING.${a}`);
}
ok(TENSE_TIMES.length === 3 && ASPECTS.length === 4, '3 times × 4 aspects');

// Every English tense name must match its coordinates.
const TIME_WORD: Record<TenseTime, string> = { past: 'Past', present: 'Present', future: 'Future' };
const ASPECT_WORD: Record<Aspect, RegExp> = {
  simple: /Simple/,
  continuous: /(?<!Perfect )Continuous/,
  perfect: /Perfect(?! Continuous)/,
  'perfect-continuous': /Perfect Continuous/,
};
// Aspect grammar signature that must appear in the affirmative pattern.
const ASPECT_AFF: Record<Aspect, RegExp> = {
  simple: /V1|V2|will \+ V1/,
  continuous: /V-ing/,
  perfect: /V3/,
  'perfect-continuous': /been \+ V-ing/,
};

let cells = 0;
let pctSum = 0;
let withPct = 0;

for (const time of TENSE_TIMES) {
  for (const aspect of ASPECTS) {
    const cell = getTense(time, aspect);
    ok(!!cell, `cell missing: ${time} × ${aspect}`);
    if (!cell) continue;
    cells++;
    const at = `${time}/${aspect}`;

    ok(cell.time === time && cell.aspect === aspect, `${at}: coordinates mismatch`);
    ok(cell.name.includes(TIME_WORD[time]), `${at}: name '${cell.name}' lacks '${TIME_WORD[time]}'`);
    ok(ASPECT_WORD[aspect].test(cell.name) || (aspect === 'simple' && /will/.test(cell.name)),
      `${at}: name '${cell.name}' does not match aspect '${aspect}'`);
    loc(cell.meaning, `${at}.meaning`);

    ok(!!cell.forms.aff.trim() && !!cell.forms.neg.trim() && !!cell.forms.q.trim(), `${at}: empty form pattern`);
    ok(ASPECT_AFF[aspect].test(cell.forms.aff), `${at}: affirmative '${cell.forms.aff}' lacks the ${aspect} signature`);
    ok(cell.forms.q.trim().endsWith('?'), `${at}: question pattern should end with '?'`);

    ok(cell.examples.length >= 2, `${at}: needs ≥2 examples, has ${cell.examples.length}`);
    for (const ex of cell.examples) loc(ex.text, `${at}.example`);

    ok(cell.signals.length > 0 && cell.signals.every((s) => s.trim()), `${at}: empty signal words`);

    ok(cell.nearMisses.length >= 1, `${at}: needs ≥1 near-miss`);
    for (const nm of cell.nearMisses) {
      ok(!!nm.name.trim() && nm.name !== cell.name, `${at}: near-miss must name a DIFFERENT tense`);
      loc(nm.why, `${at}/nearMiss:${nm.name}.why`);
    }

    // A cell carries a % badge XOR a rarity note — never both, never neither.
    ok((cell.freqPct !== undefined) !== (cell.freqNote !== undefined),
      `${at}: exactly one of freqPct / freqNote required`);
    if (cell.freqPct !== undefined) {
      withPct++;
      pctSum += cell.freqPct;
      ok(cell.freqPct > 0 && cell.freqPct < 100, `${at}: freqPct out of range`);
    } else if (cell.freqNote) {
      loc(cell.freqNote, `${at}.freqNote`);
    }
  }
}

ok(cells === 12, `12 cells expected (3 × 4), got ${cells}`);
// The corpus finding the whole section is built on: the big five ≈ 96% of spoken English
// (Krámský 1969 / Alzuhairy 2016 — Present Simple 57.5 + Past Simple 19.7 + Future 8.5 +
// Present Perfect 6 + Present Continuous 5.1 = 96.8).
ok(withPct === 5, `exactly 5 cells carry a % badge (the big five), got ${withPct}`);
ok(Math.abs(pctSum - 96.8) < 0.11, `big-five percentages must sum to ≈96.8, got ${pctSum.toFixed(1)}`);

// listTenses covers the full matrix; lookups are deterministic (pure data, no recomputation).
ok(listTenses().length === 12, 'listTenses returns all 12 cells');
ok(getTense('present', 'perfect') === getTense('present', 'perfect'), 'lookup is deterministic');

if (failures > 0) {
  console.error(`\n✖ test-tenses: ${failures} failure(s).`);
  process.exit(1);
}
console.log(`✓ test-tenses: ${cells} cells (big five = ${pctSum.toFixed(1)}% of speech), all bilingual, all consistent.`);
