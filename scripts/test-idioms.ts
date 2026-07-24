// CHANGED (V2): golden tests for the pure Idioms helpers + the idioms corpus invariants.
// Run: tsx scripts/test-idioms.ts — exits non-zero on any failure. Auto-discovered by run-tests.
import { allThemes, blankInExample, buildMatchRound, groupByKind, IDIOM_KINDS, shuffle } from '../src/lib/idioms';
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
}

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
console.log(`✓ test-idioms: all checks passed (kind grouping, themes, guess-blank, deterministic match on ${IDIOMS.length} entries).`);
