// CHANGED (C1): golden tests for the ★ Conditionals Machine engine + integrity of the reality × time
// grid and its connector lens. Run: tsx scripts/test-conditionals.ts — exits non-zero on any failure.
// Auto-discovered by run-tests.ts. Mirrors scripts/test-deduction.ts.
import {
  COND_TIMES,
  LENS_CONNECTORS,
  REALITIES,
  applyConnector,
  cellKey,
  getCell,
  getCellByKey,
  getMixedPreview,
  parseCellKey,
  splitCond,
} from '../src/lib/conditionals';
import type { CellKey, CondExample, ContentCell } from '../src/lib/conditionals';
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

// THE spine rule of Types 0/1/2 (Cambridge “Conditionals: typical errors”): no will / would in the
// condition clause. Covers full forms and both apostrophe styles of the contractions (’ll · ’d · won’t).
const WILL_WOULD = /\b(will|would|won['’]t|wouldn['’]t)\b|['’](ll|d)\b/i;

function checkExample(ex: CondExample, where: string): void {
  ok(!!ex.en.trim() && !!ex.uk.trim() && !!ex.cond.trim(), `${where}: example needs en, cond and uk`);
  ok(ex.en.includes(ex.cond), `${where}: cond “${ex.cond}” is not a substring of “${ex.en}”`);
  ok(!WILL_WOULD.test(ex.cond), `${where}: will/would in the condition clause — “${ex.cond}”`);
  ok(/[.!?]$/.test(ex.en), `${where}: sentence must end with terminal punctuation`);
  const [pre, mid, post] = splitCond(ex);
  ok(pre + mid + post === ex.en && mid === ex.cond, `${where}: splitCond round-trips`);
}

const allKeys = new Set<CellKey>();
for (const r of REALITIES) for (const t of COND_TIMES) allKeys.add(cellKey(r, t));

let content = 0;
let na = 0;
let preview = 0;
let examples = 0;
let takes = 0;
const contentKeys = new Set<CellKey>();

for (const key of allKeys) {
  const { reality, time } = parseCellKey(key);
  ok(cellKey(reality, time) === key, `${key}: parseCellKey round-trips`);
  const cell = getCell(reality, time);
  ok(!!cell, `cell missing: ${key}`);
  if (!cell) continue;
  ok(getCellByKey(key) === cell, `${key}: getCellByKey agrees with getCell`);

  if (cell.kind === 'content') {
    content++;
    contentKeys.add(key);
    loc(cell.label, `${key}.label`);
    loc(cell.meaning, `${key}.meaning`);
    ok(!!cell.ifForm.trim() && !!cell.mainForm.trim(), `${key}: ifForm and mainForm required`);
    ok(!/\bwill\b|\bwould\b/i.test(cell.ifForm), `${key}: ifForm must not contain will/would`);
    ok(cell.examples.length === 2, `${key}: exactly 2 examples`);
    cell.examples.forEach((ex, i) => {
      examples++;
      checkExample(ex, `${key}.examples[${i}]`);
    });
    ok(!!cell.trap.wrong.trim(), `${key}: trap.wrong required`);
    loc(cell.trap.why, `${key}.trap.why`);
    ok(cell.nearMisses.length >= 2, `${key}: at least 2 near-misses`);
    for (const nm of cell.nearMisses) {
      loc(nm.why, `${key}.nearMiss→${nm.cell}`);
      ok(allKeys.has(nm.cell), `${key}: near-miss points at unknown cell ${nm.cell}`);
      ok(nm.cell !== key, `${key}: near-miss points at itself`);
      const target = getCellByKey(nm.cell);
      ok(!!target && target.kind !== 'na', `${key}: near-miss → ${nm.cell} must be content or preview, not N/A`);
    }
    // The lens: every connector authored for every content cell.
    for (const c of LENS_CONNECTORS) {
      const take = applyConnector(cell, c);
      ok(!!take, `${key}: connector '${c}' not authored`);
      if (!take) continue;
      takes++;
      if (take.ok) {
        checkExample(take.example, `${key}/${c}`);
        loc(take.note, `${key}/${c}.note`);
        // The connector word must actually open the condition clause.
        const word = c === 'in-case' ? 'in case' : c === 'as-long-as' ? 'as long as' : c;
        ok(take.example.cond.toLowerCase().startsWith(word), `${key}/${c}: cond must start with “${word}”`);
        // in case is a PRECAUTION, never a synonym of if (Cambridge “In case (of)”).
        if (c === 'in-case') ok(take.shift === 'shifted', `${key}/in-case: in case can never mean the same as if`);
      } else {
        loc(take.why, `${key}/${c}.why`);
      }
    }
    ok(applyConnector(cell, 'if') === undefined, `${key}: the 'if' lens shows the cell's own examples`);
    // The if-clause of the cell's own examples starts with if (or when for the habit cells).
    for (const ex of cell.examples) ok(/^(if|when) /i.test(ex.cond), `${key}: own example cond must start with if`);
  } else if (cell.kind === 'na') {
    na++;
    loc(cell.why, `${key}.why`);
    ok(cell.redirect.length >= 1, `${key}: N/A cell must redirect somewhere`);
    for (const r of cell.redirect) ok(getCellByKey(r)?.kind === 'content', `${key}: redirect → ${r} must be a content cell`);
  } else {
    preview++;
    loc(cell.label, `${key}.label`);
    loc(cell.teaser, `${key}.teaser`);
    ok(cell.moduleId === 'm23-conditionals-3-mixed', `${key}: preview must point at m23`);
    ok(!!cell.sample.trim(), `${key}: preview sample required`);
  }
}

ok(allKeys.size === 9, `9 cells expected (3 realities × 3 times), got ${allKeys.size}`);
ok(content === 7 && na === 1 && preview === 1, `7 content + 1 N/A + 1 preview expected, got ${content}/${na}/${preview}`);

// The three classic types sit where the theory puts them.
const typeAt = (k: CellKey) => (getCellByKey(k) as ContentCell | undefined)?.type;
ok(typeAt('always/present') === 'zero', 'always/present = Type 0');
ok(typeAt('real/future') === 'first', 'real/future = Type 1');
ok(typeAt('unreal/present') === 'second', 'unreal/present = Type 2');
ok(typeAt('unreal/future') === 'second', 'unreal/future = Type 2 (unlikely future)');
ok(getCellByKey('unreal/past')?.kind === 'preview', 'unreal/past = Type 3 preview (m23), not content');
ok(getCellByKey('always/future')?.kind === 'na', 'always/future = N/A');

// The two unreal content cells use would in the main clause (would / ’d), the real ones never do —
// the main clause is where reality is signalled.
for (const k of contentKeys) {
  const cell = getCellByKey(k) as ContentCell;
  for (const ex of cell.examples) {
    const main = ex.en.replace(ex.cond, '');
    const hasWould = /\bwould\b|['’]d\b/i.test(main);
    if (cell.type === 'second') ok(hasWould, `${k}: Type 2 main clause must use would — “${ex.en}”`);
    if (cell.type === 'zero' || cell.type === 'first' || cell.type === 'open-past')
      ok(!hasWould, `${k}: a real conditional must not use would — “${ex.en}”`);
  }
}

// Mixed preview.
const mixed = getMixedPreview();
loc(mixed.label, 'mixed.label');
loc(mixed.teaser, 'mixed.teaser');
ok(mixed.moduleId === 'm23-conditionals-3-mixed', 'mixed preview → m23');

// Determinism: lookups return the same object.
ok(getCell('real', 'future') === getCell('real', 'future'), 'lookup is deterministic');

// The regex itself is honest (guards the guard — a gate that never fails is untested, CLAUDE.md §12).
ok(WILL_WOULD.test('If it will rain') && WILL_WOULD.test('If you’d like') && WILL_WOULD.test("if it'll help"), 'will/would regex catches violations');
ok(!WILL_WOULD.test('If the build failed') && !WILL_WOULD.test('If you’re ready'), 'will/would regex has no false positives');

if (failures > 0) {
  console.error(`\n✖ test-conditionals: ${failures} failure(s).`);
  process.exit(1);
}
console.log(
  `✓ test-conditionals: 9 cells (${content} content · ${na} N/A · ${preview} preview), ${examples} examples + ${takes} connector takes, all bilingual, no will/would in any if-clause.`,
);
