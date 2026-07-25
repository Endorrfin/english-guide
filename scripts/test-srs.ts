/*
 * test-srs.ts — golden tests for the SRS engine, the four review decks and the progress backup (R1).
 * Run: tsx scripts/test-srs.ts — exits non-zero on any failure. Auto-discovered by run-tests.
 *
 * Three layers:
 *   1. lib/srs.ts — the SM-2-lite transitions, queue policy and previews (pure, `now` injected);
 *   2. lib/reviewDecks.ts — the card projection over the real corpora + the mastery-key mapping;
 *   3. lib/srsStore.ts + lib/backup.ts — persistence behaviour that a bug would make silently
 *      destructive (import idempotency, deck filtering in the badge count, backup validation).
 *      Those two touch localStorage, so the test installs a Map-backed shim BEFORE calling them
 *      (module import is safe: neither reads storage at import time).
 */
import { IDIOMS } from '../src/data/idioms';
import { IRREGULAR } from '../src/data/irregular';
import { a1Words } from '../src/data/words/a1';
import { customWords } from '../src/data/words/custom';
import { backupFileName, parseBackup, restoreProgress, serializeProgress } from '../src/lib/backup';
import { REVIEW_CARDS, cardIdForMasteryKey } from '../src/lib/reviewDecks';
import {
  AGAIN_DELAY_MS,
  DAY_MS,
  MAX_EASE,
  MAX_INTERVAL_DAYS,
  MIN_EASE,
  NEW_PER_DAY,
  START_EASE,
  buildQueue,
  dayKey,
  dueSummary,
  gradeCard,
  isDue,
  isNew,
  nextDueAt,
  previewIntervals,
  seedState,
} from '../src/lib/srs';
import type { SrsCardState, SrsStates } from '../src/lib/srs';
import {
  DECK_PREFIX,
  SRS_DECKS,
  deckOfCard,
  getSrsData,
  gradeSrsCard,
  importMastery,
  newAllowance,
  resetSrs,
  setSrsDeckOn,
  srsDueCount,
} from '../src/lib/srsStore';

// ── localStorage shim ───────────────────────────────────────────────────────────────────
// Static imports are hoisted above this, which is safe: neither srsStore nor backup reads
// storage at import time (both go through a lazy `load()`), so the shim only has to be in
// place before the first store CALL — and every call below happens after this point.
const mem = new Map<string, string>();
(globalThis as Record<string, unknown>).localStorage = {
  getItem: (k: string) => mem.get(k) ?? null,
  setItem: (k: string, v: string) => void mem.set(k, String(v)),
  removeItem: (k: string) => void mem.delete(k),
  clear: () => mem.clear(),
};

let failures = 0;
function ok(cond: boolean, msg: string): void {
  if (!cond) {
    failures++;
    console.error('  ✖ ' + msg);
  }
}
function eq(actual: unknown, expected: unknown, msg: string): void {
  ok(
    JSON.stringify(actual) === JSON.stringify(expected),
    `${msg} — got ${JSON.stringify(actual)}, want ${JSON.stringify(expected)}`,
  );
}
/**
 * Ease is accumulated float arithmetic (2.8 + 0.15 === 2.9499999999999997), so ease assertions
 * compare within an epsilon. This is the ported engine's real behaviour and it is harmless —
 * intervals are rounded to whole days before they ever reach a schedule — so the test bends, not
 * the engine (the SM-2 math is a locked 1:1 port, PROJECT-BRIEF §5).
 */
function near(actual: number, expected: number, msg: string, eps = 1e-9): void {
  ok(Math.abs(actual - expected) < eps, `${msg} — got ${actual}, want ≈${expected}`);
}
/** Fixed clock — every assertion is deterministic (no Date.now() in the engine). */
const T0 = 1_760_000_000_000;

// ═══ 1. the SM-2-lite transitions ══════════════════════════════════════════════════════
// A new card graded 'good' walks 1 d → 3 d → ×ease, ease untouched.
const g1 = gradeCard(undefined, 'good', T0);
eq([g1.reps, g1.ease, g1.intervalDays, g1.dueAt - T0, g1.lapses], [1, START_EASE, 1, DAY_MS, 0], 'good #1 → 1 day');
const g2 = gradeCard(g1, 'good', T0);
eq([g2.reps, g2.ease, g2.intervalDays], [2, START_EASE, 3], 'good #2 → 3 days, ease unchanged');
const g3 = gradeCard(g2, 'good', T0);
eq([g3.reps, g3.intervalDays], [3, 8], 'good #3 → round(3 × 2.5) = 8 days');
eq(g3.dueAt - T0, 8 * DAY_MS, 'good #3 dueAt matches its interval');

// 'easy' is more generous and raises ease; note it multiplies by the PREVIOUS ease.
const e1 = gradeCard(undefined, 'easy', T0);
eq([e1.reps, e1.ease, e1.intervalDays], [1, 2.65, 2], 'easy #1 → 2 days, ease +0.15');
const e2 = gradeCard(e1, 'easy', T0);
eq([e2.reps, e2.ease, e2.intervalDays], [2, 2.8, 5], 'easy #2 → 5 days');
const e3 = gradeCard(e2, 'easy', T0);
eq(e3.intervalDays, 18, 'easy #3 → round(5 × 2.8 × 1.3) = 18 days');
near(e3.ease, 2.95, 'easy #3 ease climbs to ≈2.95');

// 'hard' shrinks ease and grows the interval slowly.
const h1 = gradeCard(undefined, 'hard', T0);
eq([h1.reps, h1.ease, h1.intervalDays], [1, 2.35, 1], 'hard #1 → 1 day, ease −0.15');
const h2 = gradeCard(h1, 'hard', T0);
eq([h2.reps, h2.ease, h2.intervalDays], [2, 2.2, 1], 'hard #2 → round(1 × 1.2) = 1 day');

// 'again' resets reps, returns in 10 minutes, and only counts a LAPSE if the card was learned.
const a0 = gradeCard(undefined, 'again', T0);
eq([a0.reps, a0.ease, a0.intervalDays, a0.dueAt - T0, a0.lapses], [0, 2.3, 0, AGAIN_DELAY_MS, 0], 'again on a NEW card → no lapse');
const aAfterGood = gradeCard(g1, 'again', T0);
eq([aAfterGood.reps, aAfterGood.lapses], [0, 1], 'again on a LEARNED card → lapse counted');

// Clamps: ease floor, ease cap, interval cap.
const floorState: SrsCardState = { reps: 3, ease: MIN_EASE, intervalDays: 10, dueAt: T0, lapses: 4 };
eq(gradeCard(floorState, 'again', T0).ease, MIN_EASE, `ease never drops below ${MIN_EASE}`);
eq(gradeCard(floorState, 'hard', T0).ease, MIN_EASE, 'hard also respects the ease floor');
const capState: SrsCardState = { reps: 4, ease: MAX_EASE, intervalDays: 20, dueAt: T0, lapses: 0 };
eq(gradeCard(capState, 'easy', T0).ease, MAX_EASE, `ease never exceeds ${MAX_EASE}`);
const longState: SrsCardState = { reps: 6, ease: 3, intervalDays: 300, dueAt: T0, lapses: 0 };
eq(gradeCard(longState, 'good', T0).intervalDays, MAX_INTERVAL_DAYS, `interval caps at ${MAX_INTERVAL_DAYS} days`);
ok(gradeCard(longState, 'good', T0).dueAt - T0 === MAX_INTERVAL_DAYS * DAY_MS, 'capped interval also caps dueAt');

// ── due / new predicates ───────────────────────────────────────────────────────────────
ok(isNew(undefined), 'no state = new');
ok(!isNew(g1), 'a graded card is not new');
ok(!isDue(undefined, T0), 'a NEW card is never "due" (the badge relies on this)');
ok(isDue({ ...g1, dueAt: T0 - 1 }, T0), 'past dueAt = due');
ok(isDue({ ...g1, dueAt: T0 }, T0), 'dueAt exactly now = due');
ok(!isDue({ ...g1, dueAt: T0 + 1 }, T0), 'future dueAt = not due');

// ── dueSummary partitions the card list ────────────────────────────────────────────────
const cards = [{ id: 'a' }, { id: 'b' }, { id: 'c' }, { id: 'd' }];
const states: SrsStates = {
  a: { ...g1, dueAt: T0 - 5 * DAY_MS },
  b: { ...g1, dueAt: T0 - DAY_MS },
  c: { ...g1, dueAt: T0 + 5 * DAY_MS },
};
const sum = dueSummary(cards, states, T0);
eq(sum, { due: 2, fresh: 1, later: 1, total: 4 }, 'dueSummary: 2 due · 1 fresh · 1 later of 4');
eq(sum.due + sum.fresh + sum.later, sum.total, 'dueSummary buckets partition the list');

// ── buildQueue: due first (oldest first), then new, capped by the allowance ─────────────
eq(buildQueue(cards, states, T0, 10).map((c) => c.id), ['a', 'b', 'd'], 'queue = oldest due, newer due, then new');
eq(buildQueue(cards, states, T0, 0).map((c) => c.id), ['a', 'b'], 'allowance 0 → no new cards, due still shown');
eq(buildQueue(cards, states, T0, -3).map((c) => c.id), ['a', 'b'], 'negative allowance is treated as 0');
eq(buildQueue([{ id: 'x' }, { id: 'y' }], {}, T0, 1).map((c) => c.id), ['x'], 'new cards enter in deck order');
eq(buildQueue([], states, T0, 10), [], 'empty card list → empty queue');

// ── nextDueAt: the earliest FUTURE dueAt only ─────────────────────────────────────────
eq(nextDueAt(states, T0), T0 + 5 * DAY_MS, 'nextDueAt ignores already-due cards');
eq(nextDueAt({ a: states.a }, T0), undefined, 'nextDueAt is undefined when nothing is scheduled ahead');

// ── previewIntervals labels ────────────────────────────────────────────────────────────
eq(previewIntervals(undefined, T0), { again: '10 min', hard: '1 d', good: '1 d', easy: '2 d' }, 'previews for a new card');
eq(previewIntervals({ reps: 3, ease: 2.5, intervalDays: 12, dueAt: T0, lapses: 0 }, T0).good, '1 mo', '30 days renders as "1 mo"');
eq(previewIntervals({ reps: 3, ease: 2.5, intervalDays: 18, dueAt: T0, lapses: 0 }, T0).good, '1.5 mo', '45 days renders as "1.5 mo"');

// ── dayKey: stable within a day, TZ-agnostic assertions ────────────────────────────────
ok(/^\d{4}-\d{2}-\d{2}$/.test(dayKey(T0)), 'dayKey is YYYY-MM-DD');
eq(dayKey(T0), dayKey(T0 + 1000), 'dayKey is stable across a second');
ok(dayKey(T0) !== dayKey(T0 + 2 * DAY_MS), 'dayKey changes across 48 h');

// ── seedState (R1 mastery bridge) ─────────────────────────────────────────────────────
const seedLearning = seedState('learning', T0);
eq([seedLearning.reps, seedLearning.ease, seedLearning.dueAt - T0], [0, START_EASE, 0], "'learning' seeds due NOW at start ease");
ok(isDue(seedLearning, T0), "a 'learning' seed is immediately due");
const seedKnown = seedState('known', T0);
eq([seedKnown.reps, seedKnown.ease, seedKnown.intervalDays, seedKnown.dueAt - T0], [2, START_EASE, 3, 3 * DAY_MS], "'known' seeds as two clean 'good' grades");
ok(!isDue(seedKnown, T0), "a 'known' seed is not due today");
eq(seedKnown.lapses, 0, 'a seed never invents a lapse history');

// ═══ 2. the four decks over the REAL corpora ═══════════════════════════════════════════
const EXPECTED_TOTAL = a1Words.length + customWords.length + IDIOMS.length + IRREGULAR.length;
eq(REVIEW_CARDS.length, EXPECTED_TOTAL, 'one card per corpus entry, no duplication across decks');

const ids = new Set<string>();
for (const c of REVIEW_CARDS) {
  ok(!ids.has(c.id), `duplicate review card id ${c.id}`);
  ids.add(c.id);
  eq(deckOfCard(c.id), c.deck, `${c.id}: prefix maps back to deck '${c.deck}'`);
  ok(c.front.trim().length > 0, `${c.id}: empty front`);
  ok(c.refId.trim().length > 0, `${c.id}: empty refId`);
  ok(['a1', 'a2', 'b1', 'b2', 'c1'].includes(c.level), `${c.id}: bad level '${c.level}'`);
  // Every card must expose SOMETHING to recall, or the reveal shows an empty answer.
  ok(!!c.answer || !!c.meaning, `${c.id}: card reveals neither an answer nor a meaning`);
}

const byDeck = (d: string) => REVIEW_CARDS.filter((c) => c.deck === d);
eq(byDeck('dict').length, a1Words.length, 'dict deck = the Oxford seed');
eq(byDeck('mine').length, customWords.length, 'mine deck = the custom words');
eq(byDeck('idioms').length, IDIOMS.length, 'idioms deck = the idiom corpus');
eq(byDeck('irregular').length, IRREGULAR.length, 'irregular deck = the verb table');
ok(byDeck('irregular').every((c) => !!c.answer), 'every irregular card carries its two forms');
ok(byDeck('dict').every((c) => !!c.meaning && !!c.translations?.length), 'every word card carries a definition + UA translations');
ok(byDeck('idioms').every((c) => !!c.meaning), 'every idiom card carries its meaning');

// Deck order = the order new cards are introduced: dict → mine → idioms → irregular.
eq([...new Set(REVIEW_CARDS.map((c) => c.deck))], ['dict', 'mine', 'idioms', 'irregular'], 'cards are laid out in deck order');
eq([...SRS_DECKS], ['dict', 'mine', 'idioms', 'irregular'], 'SRS_DECKS matches the card layout order');

// No prefix may be a prefix of another, or deckOfCard would be ambiguous.
const prefixes = SRS_DECKS.map((d) => DECK_PREFIX[d]);
for (const p of prefixes) {
  for (const q of prefixes) {
    if (p !== q) ok(!p.startsWith(q), `prefix '${p}' must not start with '${q}'`);
  }
}
eq(deckOfCard('nope:whatever'), undefined, 'an unknown prefix maps to no deck');

// ── mastery key → card id ─────────────────────────────────────────────────────────────
eq(cardIdForMasteryKey(a1Words[0].id), DECK_PREFIX.dict + a1Words[0].id, 'an Oxford word maps into the dict deck');
eq(cardIdForMasteryKey(customWords[0].id), DECK_PREFIX.mine + customWords[0].id, 'a custom word maps into the mine deck');
eq(cardIdForMasteryKey(`idiom:${IDIOMS[0].id}`), DECK_PREFIX.idioms + IDIOMS[0].id, 'a namespaced idiom key maps into the idioms deck');
eq(cardIdForMasteryKey('definitely-not-a-word-id'), undefined, 'an unknown mastery key maps to nothing');
eq(cardIdForMasteryKey('idiom:not-an-idiom'), undefined, 'an unknown idiom key maps to nothing');
ok(REVIEW_CARDS.some((c) => c.id === cardIdForMasteryKey(a1Words[0].id)), 'the mapped card id actually exists in the deck');

// ═══ 3. store behaviour that a bug would make destructive ══════════════════════════════
mem.clear();
eq(newAllowance(T0), NEW_PER_DAY, 'a fresh store offers the full daily new-card budget');
eq(srsDueCount(T0), 0, 'a fresh store has nothing due');

const wordCard = byDeck('dict')[0].id;
gradeSrsCard(wordCard, 'again', T0); // 'again' → due in 10 minutes, and spends one new-card slot
eq(newAllowance(T0), NEW_PER_DAY - 1, 'grading a NEW card spends one slot of the daily budget');
eq(srsDueCount(T0), 0, 'a card scheduled 10 minutes out is not due yet');
eq(srsDueCount(T0 + AGAIN_DELAY_MS), 1, 'it becomes due once the 10 minutes pass');
gradeSrsCard(wordCard, 'good', T0); // regrading the SAME card must not spend a second slot
eq(newAllowance(T0), NEW_PER_DAY - 1, 'regrading an existing card does not spend another new slot');
eq(newAllowance(T0 + 2 * DAY_MS), NEW_PER_DAY, 'the budget resets on a new local day');

// The badge respects deck toggles through the id prefix alone.
setSrsDeckOn('dict', false);
eq(srsDueCount(T0 + 400 * DAY_MS), 0, 'a disabled deck is excluded from the due count');
setSrsDeckOn('dict', true);
eq(srsDueCount(T0 + 400 * DAY_MS), 1, 're-enabling the deck brings its due card back');

// ── importMastery: idempotent, never rewinds, skips 'new' ─────────────────────────────
mem.clear();
const idiomKey = `idiom:${IDIOMS[0].id}`;
const mastery: [string, 'new' | 'learning' | 'known'][] = [
  [a1Words[0].id, 'known'],
  [a1Words[1].id, 'learning'],
  [customWords[0].id, 'known'],
  [idiomKey, 'learning'],
  [a1Words[2].id, 'new'], // untouched words must not be scheduled
  ['garbage-key', 'known'], // unmappable keys are ignored
];
eq(importMastery(mastery, cardIdForMasteryKey, T0), 4, 'import seeds only the mappable, non-new entries');
eq(importMastery(mastery, cardIdForMasteryKey, T0), 0, 'a second import is a no-op (idempotent)');
const afterImport = getSrsData();
eq(Object.keys(afterImport.states).length, 4, 'exactly the 4 seeded cards have a schedule');
eq(afterImport.states[DECK_PREFIX.dict + a1Words[0].id].intervalDays, 3, "'known' imported at a 3-day interval");
eq(afterImport.states[DECK_PREFIX.dict + a1Words[1].id].dueAt, T0, "'learning' imported as due now");
ok(afterImport.states[DECK_PREFIX.idioms + IDIOMS[0].id] !== undefined, 'idiom mastery lands in the idioms deck');
ok(afterImport.states[DECK_PREFIX.dict + a1Words[2].id] === undefined, "a 'new' word gets no schedule");
eq(newAllowance(T0), NEW_PER_DAY, 'importing does NOT spend the daily new-card budget');

// A card already in review must survive an import unchanged (the anti-rewind guarantee).
const seeded = DECK_PREFIX.dict + a1Words[0].id;
gradeSrsCard(seeded, 'good', T0 + 3 * DAY_MS); // reps 3 → a long interval
const longInterval = getSrsData().states[seeded].intervalDays;
ok(longInterval > 3, 'the reviewed card advanced past the seeded interval');
eq(importMastery(mastery, cardIdForMasteryKey, T0 + 4 * DAY_MS), 0, 'import skips cards that already have a schedule');
eq(getSrsData().states[seeded].intervalDays, longInterval, 'import never rewinds a card in review');

// ── resetSrs wipes the schedule and the daily counter, keeps deck toggles ─────────────
setSrsDeckOn('idioms', false);
resetSrs();
eq(Object.keys(getSrsData().states).length, 0, 'resetSrs clears every card state');
eq(getSrsData().decks.idioms, false, 'resetSrs keeps the deck toggles');
eq(newAllowance(T0), NEW_PER_DAY, 'resetSrs restores the full daily budget');
setSrsDeckOn('idioms', true);

// ── corrupt storage degrades to a fresh store instead of throwing ─────────────────────
mem.set('englishguide.srs', '{not json');
eq(Object.keys(getSrsData().states).length, 0, 'unparseable storage → fresh store');
mem.set('englishguide.srs', JSON.stringify({ v: 99, states: { x: 1 } }));
eq(Object.keys(getSrsData().states).length, 0, 'a future schema version is ignored, not half-read');

// ═══ 4. progress backup / restore ══════════════════════════════════════════════════════
mem.clear();
mem.set('englishguide.srs', JSON.stringify({ v: 1, states: { 'wd:x': seedKnown }, decks: {}, newDay: '', newUsed: 0 }));
mem.set('englishguide.mastery.v1', JSON.stringify({ abandon: 'known' }));
mem.set('englishguide.lang', 'uk'); // a UI preference — must NOT travel in the backup
const dump = serializeProgress('2026-07-25T09:00:00.000Z');
const parsed = parseBackup(dump);
ok(parsed !== undefined, 'a freshly serialized backup parses back');
eq(Object.keys(parsed?.data ?? {}).sort(), ['englishguide.mastery.v1', 'englishguide.srs'], 'only PROGRESS keys are exported (no lang)');
eq(backupFileName('2026-07-25T09:00:00.000Z'), 'english-guide-progress-2026-07-25.json', 'backup file name carries the date');

eq(parseBackup('{}'), undefined, 'a payload with no app marker is rejected');
eq(parseBackup('not json at all'), undefined, 'unparseable JSON is rejected');
eq(parseBackup(JSON.stringify({ app: 'english-guide', v: 2, data: {} })), undefined, 'a future backup version is rejected');
eq(parseBackup(JSON.stringify({ app: 'other-guide', v: 1, data: { 'englishguide.srs': '{}' } })), undefined, "another app's backup is rejected");
eq(parseBackup(JSON.stringify({ app: 'english-guide', v: 1, data: { 'evil.key': 'x' } })), undefined, 'a backup with only unknown keys is rejected');
eq(
  Object.keys(parseBackup(JSON.stringify({ app: 'english-guide', v: 1, data: { 'englishguide.srs': '{}', 'evil.key': 'x' } }))?.data ?? {}),
  ['englishguide.srs'],
  'unknown keys are dropped, known ones kept',
);

mem.clear();
eq(restoreProgress(dump), 2, 'restore writes both progress keys');
eq(mem.get('englishguide.mastery.v1'), JSON.stringify({ abandon: 'known' }), 'restored value is byte-identical');
eq(restoreProgress('garbage'), undefined, 'restoring an invalid file reports failure and writes nothing');
eq(mem.size, 2, 'a rejected restore left storage untouched');

if (failures > 0) {
  console.error(`\n✖ test-srs: ${failures} failure(s).`);
  process.exit(1);
}
console.log(
  `✓ test-srs: all checks passed (SM-2 transitions + queue policy + ${REVIEW_CARDS.length} cards across ` +
    `${SRS_DECKS.length} decks + mastery import idempotency + backup validation).`,
);
