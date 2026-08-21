// CHANGED (V2): golden tests for the pure Idioms helpers + the idioms corpus invariants.
// CHANGED (V12): slimmed to IDIOM-specific concerns. The shared engine + the cross-file union
// contract live in scripts/test-phrases.ts; the collocation taxonomy + drill in
// scripts/test-collocations.ts.
// Run: tsx scripts/test-idioms.ts — exits non-zero on any failure. Auto-discovered by run-tests.
import { IDIOMS } from '../src/data/idioms';
import type { IdiomEntry } from '../src/data/types';
import { groupIdiomsByCategory, IDIOM_CATEGORY_IDS, isIdiomCategory } from '../src/lib/idioms';

let failures = 0;
function ok(cond: boolean, msg: string): void {
  if (!cond) {
    failures++;
    console.error('  ✖ ' + msg);
  }
}
function eq(actual: unknown, expected: unknown, msg: string): void {
  ok(JSON.stringify(actual) === JSON.stringify(expected), `${msg} — got ${JSON.stringify(actual)}, want ${JSON.stringify(expected)}`);
}

// ── corpus invariants ───────────────────────────────────────────────────────
ok(IDIOMS.length >= 20, `expected ≥20 idioms, got ${IDIOMS.length}`);
for (const e of IDIOMS) {
  // CHANGED (V11): idioms carry a known category; other kinds must not.
  if (e.kind === 'idiom') ok(isIdiomCategory(e.category), `${e.id}: idiom needs a known category (got '${e.category}')`);
  else ok(e.category === undefined, `${e.id}: only idioms may have a category`);
  // CHANGED (V12): `group` belongs to collocations, which no longer live in this file at all.
  ok(e.group === undefined, `${e.id}: only collocations may have a group, and they live in data/collocations.ts`);
}
// CHANGED (V11): every idiom category is actually populated (guards against a dead nav chip).
const idiomCatsPresent = new Set(IDIOMS.filter((e) => e.kind === 'idiom').map((e) => e.category));
for (const c of IDIOM_CATEGORY_IDS) ok(idiomCatsPresent.has(c), `idiom category '${c}' has no entries`);

// ── groupIdiomsByCategory (V11) ─────────────────────────────────────────────────
const idiomMini = [
  { id: 'i1', phrase: 'zeta phrase', kind: 'idiom', category: 'emotions', themes: ['x'] },
  { id: 'i2', phrase: 'alpha phrase', kind: 'idiom', category: 'communication', themes: ['x'] },
  { id: 'i3', phrase: 'beta phrase', kind: 'idiom', category: 'emotions', themes: ['x'] },
  { id: 'i4', phrase: 'gamma phrase', kind: 'idiom', category: 'nope', themes: ['x'] }, // unknown → 'other'
  { id: 'p1', phrase: 'set up', kind: 'phrasal', themes: ['x'] }, // ignored (not an idiom)
] as unknown as IdiomEntry[];
const ig = groupIdiomsByCategory(idiomMini);
eq(ig.map((g) => g.category), ['communication', 'emotions', 'other'], 'groupIdiomsByCategory keeps canonical order + trailing other, drops empty');
eq(ig.find((g) => g.category === 'emotions')!.items.map((i) => i.phrase), ['beta phrase', 'zeta phrase'], 'idiom category bucket alphabetized');
ok(isIdiomCategory('emotions') && !isIdiomCategory('nope') && !isIdiomCategory(undefined), 'isIdiomCategory guards the known set');

if (failures > 0) {
  console.error(`\n✖ test-idioms: ${failures} failure(s).`);
  process.exit(1);
}
const idiomCount = IDIOMS.filter((e) => e.kind === 'idiom').length;
const phrasalCount = IDIOMS.filter((e) => e.kind === 'phrasal').length;
console.log(
  `✓ test-idioms: all checks passed (${IDIOMS.length} entries = ${idiomCount} idioms in ` +
    `${IDIOM_CATEGORY_IDS.length} categories + ${phrasalCount} phrasal verbs).`,
);
