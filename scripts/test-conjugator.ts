// CHANGED (TM1+TM2): golden tests for the Tense Machine engine (lib/conjugator.ts) + data
// integrity of the emulator verb set (data/tenseMachine.ts). Run: tsx scripts/test-conjugator.ts
// (auto-discovered by run-tests.ts) — exits non-zero on any failure. Mirrors scripts/test-tenses.ts.
//
// Three layers, per the spec (TENSE-MACHINE-SPEC.md §10):
//   1. GOLDEN TABLE — hand-checked sentences for `write` × {I, she} × all 12 cells × {+ − ?}
//      (72 exact strings — the heart of the gate).
//   2. MORPHOLOGY SPOTS — the spelling machinery across other verbs (doubling, y→ies/ied,
//      -es after o/x, silent-e drop, unchanged `read`, irregular V2/V3).
//   3. PROPERTY SWEEP — every verb × subject × cell × polarity (2,592 combos): terminal
//      punctuation, token/full agreement, do-support placement, -s3 scope, head-form-by-aspect,
//      `not` iff negative, fronted-aux capitalization, determinism.
import { MACHINE_VERBS } from '../src/data/tenseMachine';
import type { MachineVerb } from '../src/data/tenseMachine';
import {
  MACHINE_SUBJECTS,
  POLARITIES,
  conjugate,
} from '../src/lib/conjugator';
import type { MachineSubject, Polarity } from '../src/lib/conjugator';
import { ASPECTS, TENSE_TIMES } from '../src/lib/tenses';
import type { Aspect, TenseTime } from '../src/lib/tenses';

let failures = 0;
function ok(cond: boolean, msg: string): void {
  if (!cond) {
    failures++;
    console.error('  ✖ ' + msg);
  }
}

const verbById = new Map(MACHINE_VERBS.map((v) => [v.id, v]));
const need = (id: string): MachineVerb => {
  const v = verbById.get(id);
  if (!v) throw new Error(`test setup: verb '${id}' missing from MACHINE_VERBS`);
  return v;
};

// ── Layer 0: emulator data integrity ─────────────────────────────────────────────────────────────
ok(MACHINE_VERBS.length === 12, `12 curated verbs expected (spec guardrail), got ${MACHINE_VERBS.length}`);
ok(MACHINE_SUBJECTS.length === 6 && POLARITIES.length === 3, '6 subjects × 3 polarities');
ok(MACHINE_VERBS[0]?.id === 'write', "the default verb 'write' is first");
{
  const ids = new Set(MACHINE_VERBS.map((v) => v.id));
  const bases = new Set(MACHINE_VERBS.map((v) => v.base));
  ok(ids.size === MACHINE_VERBS.length, 'verb ids are unique');
  ok(bases.size === MACHINE_VERBS.length, 'verb bases are unique');
}
for (const v of MACHINE_VERBS) {
  ok(!!v.base && !!v.s3 && !!v.past && !!v.part && !!v.ing, `${v.id}: a form is empty`);
  ok(v.ing.endsWith('ing'), `${v.id}: ing form '${v.ing}' must end in -ing`);
  ok(v.s3 !== v.base, `${v.id}: s3 must differ from base`);
  ok(!!v.comp.trim(), `${v.id}: complement is empty`);
  ok(!!v.gloss.en.trim() && !!v.gloss.uk.trim(), `${v.id}: gloss must be bilingual`);
}

// ── Layer 1: the golden table — write × {I, she} × 12 cells × {aff, neg, q} ──────────────────────
type Trio = [aff: string, neg: string, q: string];
const GOLDEN: Record<`${TenseTime}/${Aspect}`, Record<'I' | 'she', Trio>> = {
  'past/simple': {
    I: ['I wrote code.', 'I did not write code.', 'Did I write code?'],
    she: ['She wrote code.', 'She did not write code.', 'Did she write code?'],
  },
  'present/simple': {
    I: ['I write code.', 'I do not write code.', 'Do I write code?'],
    she: ['She writes code.', 'She does not write code.', 'Does she write code?'],
  },
  'future/simple': {
    I: ['I will write code.', 'I will not write code.', 'Will I write code?'],
    she: ['She will write code.', 'She will not write code.', 'Will she write code?'],
  },
  'past/continuous': {
    I: ['I was writing code.', 'I was not writing code.', 'Was I writing code?'],
    she: ['She was writing code.', 'She was not writing code.', 'Was she writing code?'],
  },
  'present/continuous': {
    I: ['I am writing code.', 'I am not writing code.', 'Am I writing code?'],
    she: ['She is writing code.', 'She is not writing code.', 'Is she writing code?'],
  },
  'future/continuous': {
    I: ['I will be writing code.', 'I will not be writing code.', 'Will I be writing code?'],
    she: ['She will be writing code.', 'She will not be writing code.', 'Will she be writing code?'],
  },
  'past/perfect': {
    I: ['I had written code.', 'I had not written code.', 'Had I written code?'],
    she: ['She had written code.', 'She had not written code.', 'Had she written code?'],
  },
  'present/perfect': {
    I: ['I have written code.', 'I have not written code.', 'Have I written code?'],
    she: ['She has written code.', 'She has not written code.', 'Has she written code?'],
  },
  'future/perfect': {
    I: ['I will have written code.', 'I will not have written code.', 'Will I have written code?'],
    she: ['She will have written code.', 'She will not have written code.', 'Will she have written code?'],
  },
  'past/perfect-continuous': {
    I: ['I had been writing code.', 'I had not been writing code.', 'Had I been writing code?'],
    she: ['She had been writing code.', 'She had not been writing code.', 'Had she been writing code?'],
  },
  'present/perfect-continuous': {
    I: ['I have been writing code.', 'I have not been writing code.', 'Have I been writing code?'],
    she: ['She has been writing code.', 'She has not been writing code.', 'Has she been writing code?'],
  },
  'future/perfect-continuous': {
    I: ['I will have been writing code.', 'I will not have been writing code.', 'Will I have been writing code?'],
    she: ['She will have been writing code.', 'She will not have been writing code.', 'Will she have been writing code?'],
  },
};

const write = need('write');
let goldens = 0;
for (const time of TENSE_TIMES) {
  for (const aspect of ASPECTS) {
    const cell = GOLDEN[`${time}/${aspect}`];
    ok(!!cell, `golden table missing cell ${time}/${aspect}`);
    if (!cell) continue;
    for (const subject of ['I', 'she'] as const) {
      const [aff, neg, q] = cell[subject];
      for (const [polarity, expected] of [['aff', aff], ['neg', neg], ['q', q]] as [Polarity, string][]) {
        goldens++;
        const got = conjugate(time, aspect, subject, polarity, write).full;
        ok(got === expected, `${time}/${aspect} ${subject} ${polarity}: got '${got}', want '${expected}'`);
      }
    }
  }
}
ok(goldens === 72, `72 golden assertions expected, ran ${goldens}`);

// ── Layer 2: morphology spots across the rest of the set ────────────────────────────────────────
const SPOTS: [TenseTime, Aspect, MachineSubject, Polarity, string, string][] = [
  // doubling: stop → stopped / stopping; -s3
  ['present', 'simple', 'he', 'aff', 'stop', 'He stops the recording.'],
  ['past', 'simple', 'they', 'aff', 'stop', 'They stopped the recording.'],
  ['present', 'continuous', 'he', 'aff', 'stop', 'He is stopping the recording.'],
  // y → ies / ied, but studying keeps the y
  ['present', 'simple', 'she', 'aff', 'study', 'She studies English.'],
  ['past', 'simple', 'she', 'aff', 'study', 'She studied English.'],
  ['present', 'simple', 'she', 'q', 'study', 'Does she study English?'],
  ['present', 'continuous', 'she', 'aff', 'study', 'She is studying English.'],
  // -es after o / x; irregular go
  ['present', 'simple', 'he', 'aff', 'go', 'He goes to the gym.'],
  ['past', 'simple', 'he', 'aff', 'go', 'He went to the gym.'],
  ['present', 'perfect', 'he', 'aff', 'go', 'He has gone to the gym.'],
  ['present', 'simple', 'he', 'aff', 'fix', 'He fixes the bug.'],
  // run: doubling + A-B-A pattern
  ['present', 'continuous', 'we', 'aff', 'run', 'We are running the tests.'],
  ['past', 'simple', 'we', 'aff', 'run', 'We ran the tests.'],
  ['present', 'perfect', 'we', 'aff', 'run', 'We have run the tests.'],
  // silent-e drop; unchanged-spelling read; eaten; baseline regulars
  ['present', 'continuous', 'she', 'aff', 'make', 'She is making coffee.'],
  ['present', 'perfect', 'she', 'aff', 'make', 'She has made coffee.'],
  ['past', 'simple', 'you', 'aff', 'read', 'You read the docs.'],
  ['present', 'perfect', 'you', 'aff', 'eat', 'You have eaten lunch.'],
  ['past', 'continuous', 'I', 'aff', 'work', 'I was working at the office.'],
  ['present', 'simple', 'they', 'aff', 'play', 'They play chess.'],
  ['future', 'simple', 'we', 'neg', 'build', 'We will not build the app.'],
];
for (const [time, aspect, subject, polarity, verbId, expected] of SPOTS) {
  const got = conjugate(time, aspect, subject, polarity, need(verbId)).full;
  ok(got === expected, `spot ${verbId} ${time}/${aspect} ${subject} ${polarity}: got '${got}', want '${expected}'`);
}

// ── Layer 3: property sweep over every combination ───────────────────────────────────────────────
let combos = 0;
for (const verb of MACHINE_VERBS) {
  for (const time of TENSE_TIMES) {
    for (const aspect of ASPECTS) {
      for (const subject of MACHINE_SUBJECTS) {
        for (const polarity of POLARITIES) {
          combos++;
          const c = conjugate(time, aspect, subject, polarity, verb);
          const at = `${verb.id} ${time}/${aspect} ${subject} ${polarity}`;

          // Determinism + token/full agreement + terminal punctuation.
          ok(c.full === conjugate(time, aspect, subject, polarity, verb).full, `${at}: not deterministic`);
          const terminal = polarity === 'q' ? '?' : '.';
          ok(c.full.endsWith(terminal), `${at}: '${c.full}' must end with '${terminal}'`);
          ok(
            c.tokens.map((t) => t.text).join(' ') + terminal === c.full,
            `${at}: tokens do not reassemble to full`,
          );

          // `not` appears exactly in negatives.
          const hasNot = c.tokens.some((t) => t.kind === 'not');
          ok(hasNot === (polarity === 'neg'), `${at}: 'not' presence wrong`);

          // Questions front a capitalized auxiliary; the subject follows in its plain case.
          if (polarity === 'q') {
            ok(c.tokens[0]?.kind === 'aux' && /^[A-Z]/.test(c.tokens[0].text), `${at}: question must front a capitalized aux`);
            ok(c.tokens[1]?.kind === 'subject' && c.tokens[1].text === (subject === 'I' ? 'I' : subject), `${at}: question subject casing`);
          }

          // Head form follows the aspect machinery; do-support returns simple heads to base.
          const head = c.tokens.find((t) => t.kind === 'head')?.text ?? '';
          if (aspect === 'continuous' || aspect === 'perfect-continuous') {
            ok(head === verb.ing, `${at}: head '${head}' must be V-ing`);
          } else if (aspect === 'perfect') {
            ok(head === verb.part, `${at}: head '${head}' must be V3`);
          } else {
            const expected =
              polarity !== 'aff' || time === 'future'
                ? verb.base
                : time === 'past'
                  ? verb.past
                  : subject === 'he' || subject === 'she'
                    ? verb.s3
                    : verb.base;
            ok(head === expected, `${at}: simple head '${head}', want '${expected}'`);
          }

          // do-support exists exactly where the affirmative skeleton has no auxiliary.
          const auxTexts = c.tokens.filter((t) => t.kind === 'aux').map((t) => t.text.toLowerCase());
          const hasDo = auxTexts.some((a) => a === 'do' || a === 'does' || a === 'did');
          const wantsDo = aspect === 'simple' && time !== 'future' && polarity !== 'aff';
          ok(hasDo === wantsDo, `${at}: do-support wrong (aux: ${auxTexts.join(' ') || '—'})`);

          // The -s3 form never leaks outside present-simple affirmative he/she.
          if (!(aspect === 'simple' && time === 'present' && polarity === 'aff' && (subject === 'he' || subject === 'she'))) {
            ok(head !== verb.s3, `${at}: -s form leaked into '${c.full}'`);
          }
        }
      }
    }
  }
}
ok(combos === 12 * 3 * 4 * 6 * 3, `full sweep expected 2592 combos, ran ${combos}`);

if (failures > 0) {
  console.error(`\n✖ test-conjugator: ${failures} failure(s).`);
  process.exit(1);
}
console.log(`✓ test-conjugator: ${goldens} goldens + ${SPOTS.length} morphology spots + ${combos} property combos hold.`);
