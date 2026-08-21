// CHANGED (V12): golden tests for lib/collocations.ts — the category taxonomy, the grouped Learn
// view, and the ★ "Which word?" drill engine. Run: tsx scripts/test-collocations.ts.
// The shared engine + the union corpus contract are covered by scripts/test-phrases.ts.
import { COLLOCATIONS } from '../src/data/collocations';
import { IDIOMS } from '../src/data/idioms';
import type { IdiomEntry } from '../src/data/types';
import {
  buildPickRound, COLLOCATION_GROUP_IDS, entryHeadClass, groupCollocations, headClassIndex,
  isCollocationGroup, pickableCollocations,
} from '../src/lib/collocations';

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

// ── corpus invariants ─────────────────────────────────────────────────────────
ok(COLLOCATIONS.length >= 100, `expected ≥100 collocations, got ${COLLOCATIONS.length}`);
for (const e of COLLOCATIONS) {
  ok(isCollocationGroup(e.group), `${e.id}: collocation needs a known group (got '${e.group}')`);
  ok(e.category === undefined, `${e.id}: a collocation must NOT carry an idiom category`);
}
// Every category is actually populated — guards against a dead nav chip.
const present = new Set(COLLOCATIONS.map((e) => e.group));
for (const g of COLLOCATION_GROUP_IDS) ok(present.has(g), `collocation group '${g}' has no entries`);

// ── groupCollocations ─────────────────────────────────────────────────────────
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
ok(isCollocationGroup('business') && isCollocationGroup('soft-skills') && isCollocationGroup('everyday'), 'the V12 categories are known');
ok(!isCollocationGroup('nope') && !isCollocationGroup(undefined), 'isCollocationGroup guards the known set');

// ── the "Which word?" drill ───────────────────────────────────────────────────
const seq = [0.9, 0.1, 0.8, 0.2, 0.7, 0.3, 0.6, 0.4, 0.5, 0.15];
const mkRand = () => { let j = 0; return () => seq[j++ % seq.length]; };

const pool = [
  { id: 'p1', phrase: 'make a decision', kind: 'collocation', group: 'make-do', themes: ['x'] },
  { id: 'p2', phrase: 'do homework', kind: 'collocation', group: 'make-do', themes: ['x'] },
  { id: 'p3', phrase: 'have a break', kind: 'collocation', group: 'make-do', themes: ['x'] },
  { id: 'p4', phrase: 'pay attention', kind: 'collocation', group: 'make-do', themes: ['x'] },
  { id: 'p5', phrase: 'take a decision', kind: 'collocation', group: 'make-do', themes: ['x'] },
] as unknown as IdiomEntry[];

const r = buildPickRound(pool[0], pool, mkRand(), { avoid: new Set(pool.map((p) => p.phrase.toLowerCase())) })!;
ok(r !== null, 'buildPickRound returns a round for a two-word phrase');
eq(r.masked, '___ a decision', 'the head word is blanked, the base is kept');
eq(r.answer, 'make', 'the answer is the head word');
ok(r.options.includes('make'), 'options always contain the answer');
eq(new Set(r.options).size, r.options.length, 'options are unique');
ok(r.options.length >= 2 && r.options.length <= 4, `options stay in 2..4, got ${r.options.length}`);
// The critical one: 'take a decision' IS in the corpus, so 'take' must never be offered as a wrong
// answer to 'make a decision' — the drill would be marking a correct answer wrong.
ok(!r.options.includes('take'), 'a distractor that forms a REAL corpus phrase is rejected');

// Determinism: same rand → same round.
const r2 = buildPickRound(pool[0], pool, mkRand(), { avoid: new Set(pool.map((p) => p.phrase.toLowerCase())) })!;
eq(r2, r, 'buildPickRound is deterministic for a fixed rand');

// Synonyms are not offered as distractors either.
const withSyn = { ...pool[0], synonyms: ['have a decision'] } as unknown as IdiomEntry;
const r3 = buildPickRound(withSyn, pool, mkRand(), {})!;
ok(!r3.options.includes('have'), 'a distractor listed in the entry synonyms is rejected');

// Non-drillable shapes return null instead of a broken question.
eq(buildPickRound({ id: 'x', phrase: 'buy-in', kind: 'collocation', themes: [] } as unknown as IdiomEntry, pool, mkRand(), {}), null, 'a single-word phrase is not drillable');
eq(buildPickRound({ id: 'x', phrase: 'a game plan', kind: 'collocation', themes: [] } as unknown as IdiomEntry, pool, mkRand(), {}), null, 'an article-led phrase is not drillable (the first word teaches nothing)');
eq(buildPickRound(pool[0], [pool[0]], mkRand(), {}), null, 'no distractors available → null, never a one-button question');

// ── head class inference (what makes the distractors non-trivial) ─────────────
const classOf = headClassIndex(COLLOCATIONS);
const cls = (p: string) => entryHeadClass(COLLOCATIONS.find((e) => e.phrase === p)!);
eq(cls('make a decision'), 'verb', 'a make-do head is a verb slot');
eq(cls('heavy rain'), 'modifier', 'an adjective-noun head is a modifier slot');
eq(cls('totally agree'), 'modifier', 'an adverb-adjective head is a modifier slot even before a verb');
eq(cls('hold a meeting'), 'verb', 'a semantic-category verb phrase is read off its “To …” meaning');
eq(cls('peak hours'), 'modifier', 'a semantic-category noun phrase is a modifier slot');
eq(cls('tight deadline'), 'modifier', 'tight deadline is a modifier slot');
// A head that serves both classes must stay usable in both — this is why the index holds a SET.
ok(!!classOf.get('close')?.has('verb') && !!classOf.get('close')?.has('modifier'), "'close' fills both slots (close a deal / close friend)");
ok([...classOf.values()].every((v) => v.size > 0), 'every head has at least one class');

// The regression this filter exists for: before class filtering, '___ deadline' offered
// verb-headed nonsense from the same semantic category (ground · peak · state).
const tight = COLLOCATIONS.find((e) => e.phrase === 'tight deadline')!;
const avoidAll = new Set([...COLLOCATIONS, ...IDIOMS].map((e) => e.phrase.toLowerCase()));
const tightRound = buildPickRound(tight, COLLOCATIONS, mkRand(), { avoid: avoidAll, classOf })!;
ok(tightRound !== null, 'a workplace entry still produces a round');
for (const opt of tightRound.options) {
  ok(!!classOf.get(opt.toLowerCase())?.has('modifier'), `'${opt}' cannot fill the adjective slot in '${tightRound.masked}'`);
}

// ── the real corpus is actually drillable ─────────────────────────────────────
const drillable = pickableCollocations(COLLOCATIONS);
ok(drillable.length >= COLLOCATIONS.length * 0.9, `≥90% of collocations should be drillable, got ${drillable.length}/${COLLOCATIONS.length}`);
let built = 0;
let classPure = 0;
for (const e of drillable) {
  const round = buildPickRound(e, COLLOCATIONS, mkRand(), { avoid: avoidAll, classOf });
  if (!round) continue;
  built++;
  ok(round.options.includes(round.answer), `${e.id}: options must contain the answer`);
  ok(new Set(round.options).size === round.options.length, `${e.id}: options must be unique`);
  ok(round.options.length >= 2, `${e.id}: never a one-button question`);
  // No option may turn the masked phrase into a different REAL expression.
  const rest = round.masked.replace(/^___\s*/, '');
  for (const opt of round.options) {
    if (opt === round.answer) continue;
    ok(!avoidAll.has(`${opt} ${rest}`.toLowerCase()), `${e.id}: distractor '${opt}' forms the real phrase '${opt} ${rest}'`);
  }
  const want = entryHeadClass(e);
  if (round.options.every((o) => classOf.get(o.toLowerCase())?.has(want))) classPure++;
}
ok(built >= drillable.length * 0.9, `≥90% of drillable entries should produce a round, got ${built}/${drillable.length}`);
// Every round must be class-pure now: every entry gets a class, so there is no unknown to excuse.
eq(classPure, built, 'every round offers only same-class options');

if (failures > 0) {
  console.error(`\n✖ test-collocations: ${failures} failure(s).`);
  process.exit(1);
}
console.log(
  `✓ test-collocations: all checks passed (${COLLOCATIONS.length} entries in ${COLLOCATION_GROUP_IDS.length} categories, ` +
    `grouping, and ${built} "Which word?" rounds — no self-defeating distractor, ${classPure} class-pure).`,
);
