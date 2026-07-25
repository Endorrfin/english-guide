// CHANGED (V2): golden tests for the pure Idioms helpers + the idioms corpus invariants.
// Run: tsx scripts/test-idioms.ts — exits non-zero on any failure. Auto-discovered by run-tests.
import {
  allThemes, blankInExample, buildMatchRound, COLLOCATION_GROUP_IDS, groupByKind, groupCollocations,
  IDIOM_KINDS, isCollocationGroup, shuffle,
} from '../src/lib/idioms';
import { IDIOMS } from '../src/data/idioms';
import type { IdiomEntry } from '../src/data/types';

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

const KEBAB = /^[a-z0-9]+(-[a-z0-9]+)*$/;
const KINDS = new Set(IDIOM_KINDS);
const REGISTERS = new Set(['neutral', 'informal', 'formal', 'business']);
const LEVELS = new Set(['a1', 'a2', 'b1', 'b2', 'c1']);

// ── corpus invariants ───────────────────────────────────────────────────────
ok(IDIOMS.length >= 20, `expected ≥20 idioms, got ${IDIOMS.length}`);
const ids = new Set<string>();
const phrases = new Set<string>();
for (const e of IDIOMS) {
  ok(KEBAB.test(e.id), `${e.id}: id not kebab-case`);
  ok(!ids.has(e.id), `duplicate idiom id ${e.id}`); ids.add(e.id);
  ok(!phrases.has(e.phrase.toLowerCase()), `duplicate phrase '${e.phrase}'`); phrases.add(e.phrase.toLowerCase());
  ok(KINDS.has(e.kind), `${e.id}: bad kind '${e.kind}'`);
  ok(REGISTERS.has(e.register), `${e.id}: bad register '${e.register}'`);
  ok(LEVELS.has(e.level), `${e.id}: bad level '${e.level}'`);
  ok(!!e.meaning.en?.trim() && !!e.meaning.uk?.trim(), `${e.id}: meaning must be bilingual`);
  ok(e.themes.length > 0, `${e.id}: needs ≥1 theme`);
  ok(e.examples.length >= 2, `${e.id}: needs ≥2 examples`);
  for (const [i, ex] of e.examples.entries()) {
    ok(!!ex.text.en?.trim() && !!ex.text.uk?.trim(), `${e.id}.examples[${i}]: must be bilingual`);
  }
  if (e.literal) ok(!!e.literal.en?.trim() && !!e.literal.uk?.trim(), `${e.id}: literal must be bilingual`);
  if (e.origin) ok(!!e.origin.en?.trim() && !!e.origin.uk?.trim(), `${e.id}: origin must be bilingual`);
  // CHANGED (V10): collocations carry a known category group; notes (if present) are bilingual.
  if (e.kind === 'collocation') ok(isCollocationGroup(e.group), `${e.id}: collocation needs a known group (got '${e.group}')`);
  else ok(e.group === undefined, `${e.id}: only collocations may have a group`);
  if (e.note) ok(!!e.note.en?.trim() && !!e.note.uk?.trim(), `${e.id}: note must be bilingual`);
}
// CHANGED (V10): every collocation category is actually populated (guards against a dead nav chip).
const collGroupsPresent = new Set(IDIOMS.filter((e) => e.kind === 'collocation').map((e) => e.group));
for (const g of COLLOCATION_GROUP_IDS) ok(collGroupsPresent.has(g), `collocation group '${g}' has no entries`);

// ── grouping + themes ─────────────────────────────────────────────────────────
const mini = [
  { id: 'b', phrase: 'beta', kind: 'phrasal', themes: ['x'] },
  { id: 'a', phrase: 'alpha', kind: 'idiom', themes: ['y', 'x'] },
  { id: 'c', phrase: 'carry', kind: 'phrasal', themes: ['y'] },
] as unknown as IdiomEntry[];
const groups = groupByKind(mini);
eq(groups.map((g) => g.kind), ['idiom', 'phrasal'], 'groupByKind keeps canonical order, drops empty');
eq(groups[0].items.map((i) => i.phrase), ['alpha'], 'idiom bucket');
eq(groups[1].items.map((i) => i.phrase), ['beta', 'carry'], 'phrasal bucket alphabetized');
eq(allThemes(mini), ['x', 'y'], 'allThemes is sorted + unique');

// ── groupCollocations (V10) ────────────────────────────────────────────────────
const collMini = [
  { id: 'c1', phrase: 'take a break', kind: 'collocation', group: 'verb-noun', themes: ['x'] },
  { id: 'c2', phrase: 'heavy rain', kind: 'collocation', group: 'adjective-noun', themes: ['x'] },
  { id: 'c3', phrase: 'do homework', kind: 'collocation', group: 'make-do', themes: ['x'] },
  { id: 'c4', phrase: 'ask a question', kind: 'collocation', group: 'verb-noun', themes: ['x'] },
  { id: 'c5', phrase: 'weird one', kind: 'collocation', group: 'nope', themes: ['x'] }, // unknown → 'other'
  { id: 'i1', phrase: 'spot on', kind: 'idiom', themes: ['x'] }, // ignored (not a collocation)
] as unknown as IdiomEntry[];
const cg = groupCollocations(collMini);
eq(cg.map((g) => g.group), ['make-do', 'verb-noun', 'adjective-noun', 'other'], 'groupCollocations keeps canonical order + trailing other, drops empty');
eq(cg.find((g) => g.group === 'verb-noun')!.items.map((i) => i.phrase), ['ask a question', 'take a break'], 'collocation bucket alphabetized');
ok(isCollocationGroup('business') && !isCollocationGroup('nope') && !isCollocationGroup(undefined), 'isCollocationGroup guards the known set');

// ── blankInExample ────────────────────────────────────────────────────────────
const spot = IDIOMS.find((i) => i.id === 'spot-on')!;
const gap = blankInExample(spot);
ok(!!gap && gap.masked.includes('____'), 'blankInExample inserts a blank');
ok(!!gap && gap.answer.toLowerCase() === 'spot on', 'blankInExample answer is the phrase');
const noHit = blankInExample({ phrase: 'zzz qqq', examples: [{ text: { en: 'nothing here', uk: '—' } }] } as unknown as IdiomEntry);
eq(noHit, { masked: 'nothing here', answer: 'zzz qqq' }, 'no literal match → raw sentence + phrase answer');

// ── deterministic shuffle + match round ────────────────────────────────────────
const seq = [0.9, 0.1, 0.8, 0.2, 0.7, 0.3, 0.6, 0.4, 0.5, 0.15];
const mkRand = () => { let j = 0; return () => seq[j++ % seq.length]; };
eq(shuffle([1, 2, 3, 4], mkRand()), shuffle([1, 2, 3, 4], mkRand()), 'shuffle is deterministic for a fixed rand');
const round = buildMatchRound(IDIOMS, 5, mkRand(), 'en');
eq(round.left.length, 5, 'match round left size respected');
eq(new Set(round.left.map((l) => l.id)).size, 5, 'match round left ids unique');
eq([...round.left.map((l) => l.id)].sort(), [...round.right.map((r) => r.id)].sort(), 'left and right cover the SAME ids');

if (failures > 0) {
  console.error(`\n✖ test-idioms: ${failures} failure(s).`);
  process.exit(1);
}
console.log(`✓ test-idioms: all checks passed (kind + collocation grouping, themes, guess-blank, deterministic match on ${IDIOMS.length} entries).`);
