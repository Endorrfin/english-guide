// CHANGED (S1): golden tests for the Modal Navigator engine + data integrity of the
// function × time grid. Run: tsx scripts/test-modals.ts — exits non-zero on any failure.
import { canonical } from '../src/lib/exercise';
import { TIMES, getCell, getFunction, listFunctions } from '../src/lib/modals';
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

const fns = listFunctions();
ok(fns.length === 10, `10 functions expected, got ${fns.length}`);
ok(new Set(fns.map((f) => f.id)).size === fns.length, 'function ids unique');

let cells = 0;
let answers = 0;
let unavailable = 0;

for (const f of fns) {
  loc(f.label, `${f.id}.label`);
  loc(f.hint, `${f.id}.hint`);
  ok(getFunction(f.id) === f, `getFunction resolves ${f.id}`);

  for (const time of TIMES) {
    const cell = getCell(f.id, time);
    ok(!!cell, `cell missing: ${f.id} × ${time}`);
    if (!cell) continue;
    cells++;

    if (cell.unavailable) {
      unavailable++;
      loc(cell.unavailable, `${f.id}/${time}.unavailable`);
      continue;
    }

    ok(cell.answers.length >= 1, `${f.id}/${time}: at least one answer`);
    const modalsInCell = new Set<string>();
    for (const a of cell.answers) {
      answers++;
      ok(!!a.modal.trim(), `${f.id}/${time}: empty modal`);
      ok(!!a.pattern.trim(), `${f.id}/${time}/${a.modal}: empty pattern`);
      loc(a.example, `${f.id}/${time}/${a.modal}.example`);
      if (a.note) loc(a.note, `${f.id}/${time}/${a.modal}.note`);
      ok(!modalsInCell.has(a.modal), `${f.id}/${time}: duplicate answer modal '${a.modal}'`);
      modalsInCell.add(a.modal);
      // The studied sentence must actually contain its modal (contraction-insensitive via the
      // exercise engine's canonical form), so examples and answers can never drift apart.
      // Be-phrases ('be allowed to') conjugate, so the leading 'be ' is dropped before matching.
      const ex = canonical(a.example.en);
      const m = canonical(a.modal);
      const candidates = [m, m.replace(/^be /, ''), m.split(' ')[0]];
      ok(
        candidates.some((c) => c !== '' && ex.includes(c)),
        `${f.id}/${time}/${a.modal}: example does not contain the modal`,
      );
    }
    for (const nm of cell.nearMisses) {
      loc(nm.why, `${f.id}/${time}/nearMiss:${nm.modal}.why`);
      ok(!modalsInCell.has(nm.modal), `${f.id}/${time}: near-miss '${nm.modal}' duplicates an answer`);
    }
  }
}

ok(cells === 30, `30 cells expected (10 functions × 3 times), got ${cells}`);
ok(unavailable <= 3, `at most 3 explicit N/A cells expected, got ${unavailable}`);

// Determinism: two lookups return the same object (pure data, no recomputation).
ok(getCell('deduction', 'past') === getCell('deduction', 'past'), 'lookup is deterministic');

if (failures > 0) {
  console.error(`\n✖ test-modals: ${failures} failure(s).`);
  process.exit(1);
}
console.log(`✓ test-modals: ${cells} cells (${answers} answers, ${unavailable} explicit N/A), all bilingual, all consistent.`);
