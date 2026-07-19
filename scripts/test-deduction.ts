// CHANGED (S4): golden tests for the Deduction Lab engine + integrity of the certainty × time grid.
// Run: tsx scripts/test-deduction.ts — exits non-zero on any failure. Auto-discovered by run-tests.ts.
import { canonical } from '../src/lib/exercise';
import { CERTAINTIES, DED_TIMES, getLevel, getVerdict, listLevels } from '../src/lib/deduction';
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

// --- the scale ---------------------------------------------------------------
const levels = listLevels();
ok(levels.length === 5, `5 certainty levels expected, got ${levels.length}`);
ok(new Set(levels.map((l) => l.id)).size === levels.length, 'level ids unique');
ok(
  levels.map((l) => l.id).join(',') === CERTAINTIES.join(','),
  'LEVELS order matches CERTAINTIES (strongest → weakest)',
);
let prevPct = 101;
for (const l of levels) {
  loc(l.label, `${l.id}.label`);
  loc(l.gloss, `${l.id}.gloss`);
  ok(l.pct >= 0 && l.pct <= 100, `${l.id}: pct out of range (${l.pct})`);
  ok(l.pct < prevPct, `${l.id}: pct must strictly decrease down the scale`);
  prevPct = l.pct;
  ok(getLevel(l.id) === l, `getLevel resolves ${l.id}`);
}

// --- the grid ----------------------------------------------------------------
let cells = 0;
let answers = 0;
for (const c of CERTAINTIES) {
  for (const time of DED_TIMES) {
    const v = getVerdict(c, time);
    ok(!!v, `verdict missing: ${c} × ${time}`);
    if (!v) continue;
    cells++;
    ok(v.answers.length >= 1, `${c}/${time}: at least one answer`);

    const modalsInCell = new Set<string>();
    for (const a of v.answers) {
      answers++;
      ok(!!a.modal.trim(), `${c}/${time}: empty modal`);
      ok(!!a.pattern.trim(), `${c}/${time}/${a.modal}: empty pattern`);
      loc(a.example, `${c}/${time}/${a.modal}.example`);
      if (a.note) loc(a.note, `${c}/${time}/${a.modal}.note`);
      ok(!modalsInCell.has(a.modal), `${c}/${time}: duplicate answer modal '${a.modal}'`);
      modalsInCell.add(a.modal);

      // The studied sentence must actually contain its modal (contraction-insensitive via the
      // exercise engine's canonical form), so examples and answers can never drift apart.
      const ex = canonical(a.example.en);
      const m = canonical(a.modal);
      const candidates = [m, m.replace(/^be /, ''), m.split(' ')[0]];
      ok(
        candidates.some((cand) => cand !== '' && ex.includes(cand)),
        `${c}/${time}/${a.modal}: example does not contain the modal`,
      );

      // Spine correctness: a "certainly not" verdict is NEVER mustn't (that's prohibition).
      // Negative deduction = can't / couldn't (+ have + V3). British Council / Cambridge.
      if (c === 'certain-no') {
        ok(
          !/mustn'?t/i.test(canonical(a.modal)) && !/must not/i.test(canonical(a.modal)),
          `${c}/${time}: '${a.modal}' — negative deduction must not use mustn't`,
        );
      }
    }

    if (v.trap) {
      ok(!!v.trap.modal.trim(), `${c}/${time}: empty trap modal`);
      loc(v.trap.why, `${c}/${time}/trap:${v.trap.modal}.why`);
      ok(!modalsInCell.has(v.trap.modal), `${c}/${time}: trap '${v.trap.modal}' duplicates an answer`);
    }
  }
}

ok(cells === 10, `10 cells expected (5 certainties × 2 times), got ${cells}`);
// Determinism: two lookups return the same object (pure data, no recomputation).
ok(getVerdict('certain-no', 'past') === getVerdict('certain-no', 'past'), 'lookup is deterministic');

if (failures > 0) {
  console.error(`\n✖ test-deduction: ${failures} failure(s).`);
  process.exit(1);
}
console.log(`✓ test-deduction: ${cells} cells (${answers} answers), all bilingual, all consistent, no mustn't in negatives.`);
