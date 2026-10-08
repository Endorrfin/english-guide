// CHANGED (V12): golden tests for lib/collocations.ts — the category taxonomy, the grouped Learn
// view, and the ★ "Which word?" drill engine. Run: tsx scripts/test-collocations.ts.
// The shared engine + the union corpus contract are covered by scripts/test-phrases.ts.
import { COLLOCATIONS } from '../src/data/collocations';
import { IDIOMS } from '../src/data/idioms';
import type { IdiomEntry } from '../src/data/types';
import {
  buildAvoidSet, buildPickRound, COLLOCATION_GROUP_IDS, entryHeadClass, groupCollocations, headClassIndex,
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
// CHANGED (V13): the meetings category exists, is populated, and holds the anchor phrases.
ok(isCollocationGroup('meetings'), 'the V13 meetings category is known');
const meetings = COLLOCATIONS.filter((e) => e.group === 'meetings').map((e) => e.id);
ok(meetings.length >= 15, `meetings should hold ≥15 entries, got ${meetings.length}`);
for (const id of ['hold-a-meeting', 'take-minutes', 'action-items', 'give-a-presentation', 'visual-aid']) {
  ok(meetings.includes(id), `'${id}' belongs in meetings`);
}
// Rule 1 (make/do wins) still holds for every make/do-headed entry except the one documented exception.
for (const e of COLLOCATIONS) {
  if (/^(make|do)\s/i.test(e.phrase) && e.id !== 'make-a-pitch') ok(e.group === 'make-do', `${e.id}: a make/do head belongs in make-do (got '${e.group}')`);
}

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

// CHANGED (V13): a synonym recorded on a DIFFERENT card. 'improve cohesion' lives only on the
// 'boost team cohesion' card, yet 'improve' is a perfectly valid head elsewhere in the pool — so with a
// phrase-only `avoid` it is offered as a WRONG answer to '___ cohesion'. buildAvoidSet closes that.
const synPool = [
  { id: 's1', phrase: 'strengthen cohesion', kind: 'collocation', group: 'verb-noun', themes: ['x'] },
  { id: 's2', phrase: 'boost morale', kind: 'collocation', group: 'verb-noun', themes: ['x'], synonyms: ['Improve  Cohesion'] },
  { id: 's3', phrase: 'improve skills', kind: 'collocation', group: 'verb-noun', themes: ['x'] },
] as unknown as IdiomEntry[];
const avoidSyn = buildAvoidSet(synPool);
ok(avoidSyn.has('improve cohesion'), 'buildAvoidSet includes other cards’ synonyms, normalized (case + whitespace)');
ok(avoidSyn.has('strengthen cohesion') && avoidSyn.size === 4, `buildAvoidSet = phrases ∪ synonyms, got ${[...avoidSyn].join(' | ')}`);
const phraseOnly = new Set(synPool.map((p) => p.phrase.toLowerCase()));
const leaky = buildPickRound(synPool[0], synPool, mkRand(), { avoid: phraseOnly })!;
ok(leaky.options.includes('improve'), 'fixture bites: a phrase-only avoid DOES offer the cross-card synonym head');
const sealed = buildPickRound(synPool[0], synPool, mkRand(), { avoid: avoidSyn })!;
ok(sealed !== null && !sealed.options.includes('improve'), `buildAvoidSet rejects the cross-card synonym head, got ${sealed?.options}`);
ok(sealed.options.includes('boost'), 'an unrelated head is still offered');

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
// CHANGED (V13): the corpus checks now use EXACTLY the set the page builds (buildAvoidSet over
// COLLOCATIONS — the page cannot load the idioms chunk), and are judged against a WIDER reference:
// phrases ∪ synonyms of every collocation AND every idiom/phrasal card.
const pageAvoid = buildAvoidSet(COLLOCATIONS);
const reference = buildAvoidSet([...COLLOCATIONS, ...IDIOMS]);
const tightRound = buildPickRound(tight, COLLOCATIONS, mkRand(), { avoid: pageAvoid, classOf })!;
ok(tightRound !== null, 'a workplace entry still produces a round');
for (const opt of tightRound.options) {
  ok(!!classOf.get(opt.toLowerCase())?.has('modifier'), `'${opt}' cannot fill the adjective slot in '${tightRound.masked}'`);
}

// ── the real corpus is actually drillable ─────────────────────────────────────
const drillable = pickableCollocations(COLLOCATIONS);
ok(drillable.length >= COLLOCATIONS.length * 0.9, `≥90% of collocations should be drillable, got ${drillable.length}/${COLLOCATIONS.length}`);
let built = 0;
let classPure = 0;
// CHANGED (V13): distractors are drawn at random, so one fixed sequence samples only a few of them.
// Sweep several rand streams — the same seeds every run, so a failure is reproducible.
const SEEDS = [0.05, 0.21, 0.37, 0.53, 0.69, 0.85, 0.97, 0.13];
const seeded = (seed: number) => { let k = seed; return () => (k = (k * 9301 + 0.49297) % 1); };
let roundsSwept = 0;
for (const e of drillable) {
  for (const seed of SEEDS) {
    const r = buildPickRound(e, COLLOCATIONS, seeded(seed), { avoid: pageAvoid, classOf });
    if (!r) continue;
    roundsSwept++;
    const rest = r.masked.replace(/^___\s*/, '');
    for (const opt of r.options) {
      if (opt === r.answer) continue;
      ok(!reference.has(`${opt} ${rest}`.toLowerCase()), `${e.id}: distractor '${opt}' forms '${opt} ${rest}', a phrase or synonym of some card`);
    }
  }
  const round = buildPickRound(e, COLLOCATIONS, mkRand(), { avoid: pageAvoid, classOf });
  if (!round) continue;
  built++;
  ok(round.options.includes(round.answer), `${e.id}: options must contain the answer`);
  ok(new Set(round.options).size === round.options.length, `${e.id}: options must be unique`);
  ok(round.options.length >= 2, `${e.id}: never a one-button question`);
  // No option may turn the masked phrase into a different REAL expression.
  const rest = round.masked.replace(/^___\s*/, '');
  for (const opt of round.options) {
    if (opt === round.answer) continue;
    ok(!reference.has(`${opt} ${rest}`.toLowerCase()), `${e.id}: distractor '${opt}' forms the real phrase '${opt} ${rest}'`);
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
    `grouping, and ${built} "Which word?" rounds — no self-defeating distractor across ${roundsSwept} swept rounds ` +
    `(phrases ∪ synonyms), ${classPure} class-pure).`,
);
