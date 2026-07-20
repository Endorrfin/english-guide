// CHANGED (T4): golden tests for the ★ Sentence Morpher engine (m6) — the 12-step aspect-major
// walk of ONE sentence through the full time × aspect matrix. Run: tsx scripts/test-morpher.ts
// (auto-discovered by run-tests.ts) — exits non-zero on any failure. Mirrors scripts/test-tenses.ts.
import {
  MORPH_ORDER,
  MORPH_STEPS,
  assembleSentence,
  getMorphStep,
  morphKey,
  stepIndexOf,
} from '../src/lib/morpher';
import { MORPH_CELLS, MORPH_FRAME } from '../src/data/sentenceMorpher';
import { ASPECTS, TENSE_TIMES, getTense } from '../src/lib/tenses';
import type { Aspect } from '../src/lib/tenses';

let failures = 0;
function ok(cond: boolean, msg: string): void {
  if (!cond) {
    failures++;
    console.error('  ✖ ' + msg);
  }
}

// The walk covers the full matrix, each cell exactly once.
ok(MORPH_STEPS === 12, `12 steps expected, got ${MORPH_STEPS}`);
const seen = new Set(MORPH_ORDER.map((s) => morphKey(s.time, s.aspect)));
ok(seen.size === 12, `12 unique cells expected, got ${seen.size}`);
for (const time of TENSE_TIMES) {
  for (const aspect of ASPECTS) {
    ok(seen.has(morphKey(time, aspect)), `cell missing from the walk: ${time} × ${aspect}`);
  }
}

// Aspect-major order: each aspect owns 3 consecutive steps, times sliding past → present → future.
ASPECTS.forEach((aspect, a) => {
  TENSE_TIMES.forEach((time, ti) => {
    const i = a * 3 + ti;
    const at = MORPH_ORDER[i];
    ok(at.aspect === aspect && at.time === time, `step ${i}: expected ${time} × ${aspect}, got ${at.time} × ${at.aspect}`);
    ok(stepIndexOf(time, aspect) === i, `stepIndexOf(${time}, ${aspect}) !== ${i}`);
  });
});

// The verb-phrase signature of each aspect (the shared machinery made testable).
const VP_SIGNATURE: Record<Aspect, RegExp> = {
  simple: /^(works|worked|will work)$/,
  continuous: /^(was|is|will be) working$/,
  perfect: /^(had|has|will have) worked$/,
  'perfect-continuous': /^(had|has|will have) been working$/,
};

for (let i = 0; i < MORPH_STEPS; i++) {
  const step = getMorphStep(i);
  ok(!!step, `step ${i} missing`);
  if (!step) continue;
  const at = `${step.time}/${step.aspect}`;

  // Names + patterns come from the shared matrix — never restated in the morph data.
  const tense = getTense(step.time, step.aspect);
  ok(step.name === tense?.name, `${at}: name '${step.name}' != matrix name '${tense?.name}'`);
  ok(step.pattern === tense?.forms.aff, `${at}: pattern diverges from the matrix affirmative`);

  ok(VP_SIGNATURE[step.aspect].test(step.vp), `${at}: vp '${step.vp}' lacks the ${step.aspect} signature`);
  ok(step.cue.trim().length > 0, `${at}: empty cue`);
  ok(step.uk.trim().length > 0, `${at}: empty UA translation`);
  ok(step.sentence === assembleSentence(step.vp, step.cue), `${at}: sentence not assembled from vp + cue`);
  ok(step.sentence.includes(step.vp), `${at}: sentence does not contain the vp`);
  ok(step.sentence.startsWith(`${MORPH_FRAME.subject} `), `${at}: sentence lost the subject`);
  ok(step.sentence.endsWith('.'), `${at}: sentence should end with '.'`);
}

// Every data cell is reachable (no orphan keys) and the frame is stable.
ok(Object.keys(MORPH_CELLS).length === 12, `MORPH_CELLS must hold exactly 12 cells, got ${Object.keys(MORPH_CELLS).length}`);
for (const key of Object.keys(MORPH_CELLS)) ok(seen.has(key), `orphan MORPH_CELLS key '${key}'`);

// Golden anchor + determinism (pure data, no recomputation).
ok(getMorphStep(stepIndexOf('present', 'simple'))?.sentence === 'Maya works on the payment service every day.',
  'golden sentence for present × simple diverged');
ok(getMorphStep(3) === getMorphStep(3) || JSON.stringify(getMorphStep(3)) === JSON.stringify(getMorphStep(3)),
  'lookup is deterministic');

if (failures > 0) {
  console.error(`\n✖ test-morpher: ${failures} failure(s).`);
  process.exit(1);
}
console.log(`✓ test-morpher: ${MORPH_STEPS} steps cover the 3 × 4 matrix in aspect-major order, all bilingual, matrix-consistent.`);
