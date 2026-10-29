// CHANGED (A1): golden tests for the ★ Counterfactual Rewind engine + content (m23).
// Run: tsx scripts/test-counterfactual.ts. Auto-discovered by run-tests.ts. Mirrors test-conditionals.
import { WHENS, clauses, getCell, listCells, listWishes, tokensOf } from '../src/lib/counterfactual';
import { textOf } from '../src/lib/tokenMorph';
import type { Localized } from '../src/data/types';

let failures = 0;
function ok(cond: boolean, msg: string): void {
  if (!cond) {
    failures++;
    console.error('  ✖ ' + msg);
  }
}
const loc = (v: Localized | undefined, where: string) =>
  ok(!!v && !!v.en?.trim() && !!v.uk?.trim(), `bilingual value missing at ${where}`);

// THE rule of every if-clause (Cambridge, British Council): no will / would in the condition.
const WOULD = /\b(would|wouldn’t|wouldn't|will|won’t|won't)\b|’d\b|'d\b/i;
const PAST_PERFECT = /\b(had|hadn’t|hadn't) [a-z]+/i;
const WOULD_HAVE = /\b(would|wouldn’t|wouldn't) have [a-z]+/i;
const WOULD_V1 = /\b(would|wouldn’t|wouldn't) (?!have\b)[a-z]+/i;

const cells = listCells();
ok(cells.length === 4, `4 cells expected, got ${cells.length}`);
for (const cond of WHENS)
  for (const result of WHENS) {
    const c = getCell(cond, result);
    const where = `${cond}-${result}`;
    ok(c.cond === cond && c.result === result, `${where}: lookup returns the right cell`);
    loc(c.meaning, `${where}.meaning`);
    loc(c.trap.why, `${where}.trap.why`);
    ok(c.scenarios.length === 2, `${where}: 2 scenarios`);
    ok(new Set(c.scenarios.map((s) => s.id)).size === 2, `${where}: scenario ids unique`);
    for (const s of c.scenarios) {
      const w = `${where}/${s.id}`;
      ok(s.frames.length === 3, `${w}: 3 frames`);
      s.frames.forEach((f, i) => {
        ok(!!f.src.trim() && !!f.uk.trim(), `${w}#${i}: en and uk required`);
        ok(textOf(tokensOf(f)) === f.src, `${w}#${i}: tokens round-trip`);
        ok(tokensOf(f) === tokensOf(f), `${w}#${i}: tokens are cached (stable identity for TokenMorph)`);
      });
      const [fact, rewind, full] = s.frames.map((f) => f.src);
      ok(!/^If\b/.test(fact), `${w}: the fact is not a conditional — “${fact}”`);
      ok(rewind.endsWith(', …'), `${w}: the rewind frame ends with “, …”`);
      ok(full.startsWith(rewind.slice(0, -2)), `${w}: the rewind is a prefix of the full sentence`);
      const [ifc, main] = clauses(full);
      ok(/^If\b/.test(ifc) && !!main, `${w}: “If …, main” shape — “${full}”`);
      ok(!WOULD.test(ifc), `${w}: no will/would in the if-clause — “${ifc}”`);
      if (cond === 'past') ok(PAST_PERFECT.test(ifc), `${w}: a past condition takes had + V3 — “${ifc}”`);
      else ok(!/\b(had been|hadn’t|hadn't)\b/.test(ifc), `${w}: a now-state condition is not Past Perfect — “${ifc}”`);
      if (result === 'past') ok(WOULD_HAVE.test(main), `${w}: a past result takes would have + V3 — “${main}”`);
      else ok(WOULD_V1.test(main) && !WOULD_HAVE.test(main), `${w}: a now result takes would + V1 — “${main}”`);
      // (no \b here: it is ASCII-only in JS and never matches after Cyrillic)
      ok(/^Якби /.test(s.frames[2].uk), `${w}: UA uses «якби» in every cell (the time-blind lesson)`);
      ok(!s.frames.some((f) => f.src === c.trap.wrong), `${w}: the trap is not an accepted frame`);
    }
    ok(!!c.trap.wrong.trim(), `${where}: trap present`);
  }
// The classic labels sit where theory puts them.
ok(getCell('past', 'past').label.startsWith('Type 3'), 'past × past = Type 3');
ok(getCell('now', 'now').label.startsWith('Type 2'), 'now × now = Type 2');
ok(getCell('past', 'now').label.startsWith('Mixed') && getCell('now', 'past').label.startsWith('Mixed'), 'the off-diagonal cells are mixed');

const wishes = listWishes();
ok(wishes.length === 4, `4 wishes expected, got ${wishes.length}`);
ok(new Set(wishes.map((w) => w.kind)).size === 4, 'wish kinds are unique');
for (const w of wishes) {
  const where = `wish:${w.kind}`;
  loc(w.meaning, `${where}.meaning`);
  loc(w.trap.why, `${where}.trap.why`);
  const [fact, wish, only] = w.frames.map((f) => f.src);
  w.frames.forEach((f, i) => ok(textOf(tokensOf(f)) === f.src && !!f.uk.trim(), `${where}#${i}: round-trip + uk`));
  ok(!/\bwish\b|^If only/.test(fact), `${where}: the fact is plain`);
  ok(/^I wish /.test(wish), `${where}: frame 2 starts “I wish”`);
  ok(/^If only /.test(only) && only.endsWith('!'), `${where}: frame 3 is “If only …!”`);
  ok(only.slice('If only '.length, -1) === wish.slice('I wish '.length, -1), `${where}: wish and if only share the clause`);
  const clause = wish.slice('I wish '.length);
  if (w.kind === 'now') ok(!/\b(would|had|could)\b/.test(clause), `${where}: plain past form — “${clause}”`);
  if (w.kind === 'past') ok(PAST_PERFECT.test(clause) && !/\bwould\b/.test(clause), `${where}: had + V3, no would — “${clause}”`);
  if (w.kind === 'would') ok(/\bwould\b/.test(clause) && !/^I\b/.test(clause), `${where}: would + someone else — “${clause}”`);
  if (w.kind === 'could') ok(/\bcould\b/.test(clause), `${where}: could — “${clause}”`);
  ok(!w.frames.some((f) => f.src === w.trap.wrong), `${where}: the trap is not an accepted frame`);
}
ok(/^I wish I would\b/.test(wishes.find((w) => w.kind === 'would')!.trap.wrong), 'the would-trap is the “I wish I would” error');

// The regexes themselves are honest (CLAUDE.md §12: a gate that never fails is untested).
ok(WOULD.test('If we would have run it') && WOULD.test('If I’d known'), 'would regex catches violations');
ok(!WOULD.test('If we had run the migration on staging'), 'would regex has no false positive');
ok(WOULD_V1.test('we would deploy every hour') && !WOULD_V1.test('we would have deployed'), 'would + V1 regex is honest');

if (failures > 0) {
  console.error(`\n✖ test-counterfactual: ${failures} failure(s).`);
  process.exit(1);
}
console.log('✓ test-counterfactual: 4 cells × 2 stories × 3 frames + 4 wishes; no would in any if-clause; past = had + V3, past result = would have + V3.');
