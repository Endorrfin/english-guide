// CHANGED (T4): golden tests for the ★ Tense Chooser engine (m11) — the 3-question decision tree
// (3 times × 4 meaning branches × 2–3 context leaves = 30 paths). Run: tsx scripts/test-chooser.ts
// (auto-discovered by run-tests.ts) — exits non-zero on any failure. Mirrors scripts/test-tenses.ts.
// Beyond shape/bilinguality, this pins the section's cross-time overrides: the dated-time override
// (present → Past Simple), the result-now re-anchor (past → Present Perfect), the arrangement
// (future → Present Continuous) and the no-will-in-time-clauses near-miss.
import { chooseTense, countLeaves, getBranches } from '../src/lib/chooser';
import { ASPECTS, TENSE_TIMES, getTense, listTenses } from '../src/lib/tenses';
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

const KEBAB = /^[a-z0-9]+(-[a-z0-9]+)*$/;

// Verdicts may name a matrix tense or one of the sanctioned extras (m9's future rivals + m8's habit form).
const ALLOWED_NAMES = new Set<string>([...listTenses().map((c) => c.name), 'will', 'be going to', 'used to']);

let leaves = 0;
for (const time of TENSE_TIMES) {
  const branches = getBranches(time);
  ok(branches.length === 4, `${time}: expected 4 Q2 branches, got ${branches.length}`);
  const branchIds = new Set<string>();
  for (const b of branches) {
    const at = `${time}/${b.id}`;
    ok(KEBAB.test(b.id), `${at}: branch id not kebab-case`);
    ok(!branchIds.has(b.id), `${at}: duplicate branch id`);
    branchIds.add(b.id);
    loc(b.label, `${at}.label`);

    ok(b.leaves.length >= 2 && b.leaves.length <= 3, `${at}: expected 2–3 Q3 leaves, got ${b.leaves.length}`);
    const leafIds = new Set<string>();
    for (const l of b.leaves) {
      leaves++;
      const lat = `${at}/${l.id}`;
      ok(KEBAB.test(l.id), `${lat}: leaf id not kebab-case`);
      ok(!leafIds.has(l.id), `${lat}: duplicate leaf id`);
      leafIds.add(l.id);
      loc(l.label, `${lat}.label`);

      const v = l.verdict;
      ok(ALLOWED_NAMES.has(v.name), `${lat}: verdict name '${v.name}' not in the allowed set`);
      ok(TENSE_TIMES.includes(v.time), `${lat}: bad verdict time '${v.time}'`);
      ok(ASPECTS.includes(v.aspect), `${lat}: bad verdict aspect '${v.aspect}'`);
      ok(v.pattern.trim().length > 0, `${lat}: empty pattern`);
      loc(v.why, `${lat}.why`);
      loc(v.example.text, `${lat}.example`);
      // A matrix-named verdict must sit in ITS matrix cell (hue/glyph honesty); the sanctioned
      // extras (will · be going to · used to) are all ● simple forms.
      const cell = getTense(v.time, v.aspect);
      const isExtra = ['will', 'be going to', 'used to'].includes(v.name);
      ok(isExtra || v.name === cell?.name,
        `${lat}: '${v.name}' does not match the ${v.time} × ${v.aspect} matrix cell '${cell?.name}'`);
      ok(!isExtra || v.aspect === 'simple', `${lat}: extra form '${v.name}' must carry the ● simple aspect`);
      for (const nm of v.nearMisses ?? []) {
        ok(!!nm.name.trim() && nm.name !== v.name, `${lat}: near-miss must name a DIFFERENT form`);
        loc(nm.why, `${lat}/nearMiss:${nm.name}.why`);
      }
      // The lookup resolves and is deterministic.
      ok(chooseTense(time, b.id, l.id) === v, `${lat}: chooseTense does not resolve to this verdict`);
    }
  }
}

ok(leaves === 30, `30 Q1→Q2→Q3 paths expected, got ${leaves}`);
ok(countLeaves() === leaves, `countLeaves() (${countLeaves()}) != walked total (${leaves})`);

// ── The section's cross-time overrides, pinned ──────────────────────────────────────────────────
const dated = chooseTense('present', 'touches-now', 'dated');
ok(dated?.name === 'Past Simple' && dated.time === 'past',
  'the dated-time override must force Past Simple (present/touches-now/dated)');
const resultNow = chooseTense('past', 'whole-event', 'result-now');
ok(resultNow?.name === 'Present Perfect' && resultNow.time === 'present',
  'the result-now path must re-anchor to Present Perfect (past/whole-event/result-now)');
const arranged = chooseTense('future', 'already-planned', 'arranged');
ok(arranged?.name === 'Present Continuous' && arranged.time === 'present',
  'the arrangement path must recommend Present Continuous (future/already-planned/arranged)');
const stateNow = chooseTense('present', 'around-now', 'state-verb');
ok(stateNow?.name === 'Present Simple',
  'the state-verb path must keep Present Simple (present/around-now/state-verb)');
const decision = chooseTense('future', 'on-the-spot', 'decision');
ok(!!decision?.nearMisses?.some((nm) => /when/.test(nm.why.en)),
  'the will verdict must carry the no-will-after-when/if near-miss');
// The deductive backbone never leaks: no verdict recommends a form for the wrong meaning of "since".
const sinceState = chooseTense('present', 'since-now', 'state-result');
ok(sinceState?.name === 'Present Perfect',
  'state verbs under since-now must take Present Perfect, not the Continuous');

if (failures > 0) {
  console.error(`\n✖ test-chooser: ${failures} failure(s).`);
  process.exit(1);
}
console.log(`✓ test-chooser: ${leaves} paths (3 × 4 × 2–3), all bilingual, overrides pinned, lookup deterministic.`);
