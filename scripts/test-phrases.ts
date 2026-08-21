// CHANGED (V12): golden tests for the SHARED phrase engine (lib/phrases.ts) + the invariants that
// must hold across BOTH expression corpora at once.
// Run: tsx scripts/test-phrases.ts — exits non-zero on any failure. Auto-discovered by run-tests.
//
// WHY THE UNION MATTERS: V12 split one array into data/idioms.ts + data/collocations.ts. Per-file
// uniqueness is not enough — an id collision across the two files would give two cards the SAME
// mastery/SRS key (`idiom:<id>`), and a phrase collision would teach the same expression twice on
// two tabs. Neither is visible from inside one file, so it is checked here, once, over the union.
import { COLLOCATIONS } from '../src/data/collocations';
import { IDIOMS } from '../src/data/idioms';
import type { IdiomEntry } from '../src/data/types';
import {
  allThemes, blankInExample, buildMatchRound, groupByKind, IDIOM_KINDS, phraseOfDay, shuffle,
} from '../src/lib/phrases';

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

// ── the union contract: every expression, whichever file it lives in ──────────
const ALL: readonly IdiomEntry[] = [...IDIOMS, ...COLLOCATIONS];
ok(ALL.length >= 20, `expected ≥20 expressions, got ${ALL.length}`);

const idHome = new Map<string, string>();
const phraseHome = new Map<string, string>();
const home = (e: IdiomEntry) => (e.kind === 'collocation' ? 'data/collocations.ts' : 'data/idioms.ts');
for (const e of ALL) {
  const where = home(e);
  ok(KEBAB.test(e.id), `${e.id}: id not kebab-case`);
  ok(!idHome.has(e.id), `duplicate id '${e.id}' — in ${idHome.get(e.id)} and ${where}`);
  idHome.set(e.id, where);
  const pk = e.phrase.trim().toLowerCase();
  ok(!phraseHome.has(pk), `duplicate phrase '${e.phrase}' — in ${phraseHome.get(pk)} and ${where}`);
  phraseHome.set(pk, where);
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
  if (e.note) ok(!!e.note.en?.trim() && !!e.note.uk?.trim(), `${e.id}: note must be bilingual`);
}

// The split is only honest if each file holds exactly one side of it.
ok(IDIOMS.every((e) => e.kind !== 'collocation'), 'data/idioms.ts must hold NO collocations after V12');
ok(COLLOCATIONS.every((e) => e.kind === 'collocation'), 'data/collocations.ts must hold ONLY collocations');

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

// ── phraseOfDay ───────────────────────────────────────────────────────────────
eq(phraseOfDay([], 3), null, 'phraseOfDay on an empty list is null');
eq(phraseOfDay(mini, 0)!.id, 'b', 'phraseOfDay indexes from 0');
eq(phraseOfDay(mini, 3)!.id, 'b', 'phraseOfDay wraps');
eq(phraseOfDay(mini, -1)!.id, 'c', 'phraseOfDay handles a negative day index');

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
const round = buildMatchRound(ALL, 5, mkRand(), 'en');
eq(round.left.length, 5, 'match round left size respected');
eq(new Set(round.left.map((l) => l.id)).size, 5, 'match round left ids unique');
eq([...round.left.map((l) => l.id)].sort(), [...round.right.map((r) => r.id)].sort(), 'left and right cover the SAME ids');

if (failures > 0) {
  console.error(`\n✖ test-phrases: ${failures} failure(s).`);
  process.exit(1);
}
console.log(
  `✓ test-phrases: all checks passed (union contract over ${ALL.length} expressions = ${IDIOMS.length} idioms/phrasals + ` +
    `${COLLOCATIONS.length} collocations, kind grouping, themes, guess-blank, deterministic match).`,
);
