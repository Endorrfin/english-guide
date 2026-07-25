/*
 * srs.ts — spaced-repetition (SM-2-lite) engine for the Review hub (#/review, R1).
 *
 * PORTED 1:1 from `../database guide` src/lib/srs.ts (PROJECT-BRIEF §5, locked decision).
 * The scheduling math below is byte-for-byte the same model; the only english-guide addition is
 * `seedState()` at the bottom (marked CHANGED (R1)) so the #/definitions mastery import can create
 * honest SM-2 states without hand-rolling the numbers in the store.
 *
 * PURE MODULE: deterministic functions over plain data, `now` is always injected — imported by BOTH
 * the browser store (srsStore.ts) and the Node golden test (scripts/test-srs.ts). No React, no
 * localStorage, no Date.now() here. Erasable syntax only (tsconfig.node.json typechecks the test).
 *
 * The model (a deliberately small SM-2):
 *   · a card is born "new" (no state). Grading it for the first time creates state.
 *   · again → lapse: reps reset, ease −0.20 (floor 1.3), card returns in 10 minutes;
 *   · hard  → reps++, ease −0.15 (floor 1.3), interval ×1.2 (first: 1 day);
 *   · good  → reps++, ease unchanged, interval 1 d → 3 d → ×ease;
 *   · easy  → reps++, ease +0.15 (cap 3.0), interval 2 d → 5 d → ×ease×1.3.
 *   Intervals cap at 365 days; fractional days round to the nearest whole day.
 *
 * Queue policy: due cards first (oldest due first), then NEW cards in deck order, capped by a daily
 * allowance (NEW_PER_DAY = 10) so the 769-card corpus (515 words + 179 idioms + 75 irregular verbs)
 * never floods the first session. The nav badge counts only DUE cards (new cards are never "due"),
 * so it can run off stored states alone — no content import needed in the eager shell.
 */

export type SrsGrade = 'again' | 'hard' | 'good' | 'easy';

/** Scheduling state for one graded card (absent state = the card is new). */
export type SrsCardState = {
  reps: number; // successful recalls in a row (0 = learning / lapsed)
  ease: number; // SM-2 ease factor, 1.3 … 3.0
  intervalDays: number; // last scheduled interval in days (0 = re-learning)
  dueAt: number; // epoch ms when the card is due again
  lapses: number; // times a previously-learned card fell back to "again"
};

/** Map card id → state. Only graded cards have entries. */
export type SrsStates = Readonly<Record<string, SrsCardState>>;

export const DAY_MS = 24 * 60 * 60 * 1000;
export const AGAIN_DELAY_MS = 10 * 60 * 1000; // "again" comes back in 10 minutes
export const MAX_INTERVAL_DAYS = 365;
export const MIN_EASE = 1.3;
export const MAX_EASE = 3.0;
export const START_EASE = 2.5;
export const NEW_PER_DAY = 10; // daily allowance of new cards

function clampEase(e: number): number {
  return Math.min(MAX_EASE, Math.max(MIN_EASE, e));
}
function clampInterval(d: number): number {
  return Math.min(MAX_INTERVAL_DAYS, Math.max(1, Math.round(d)));
}

/** Grade a card (undefined state = first ever grade) → its next state. Pure. */
export function gradeCard(
  state: SrsCardState | undefined,
  grade: SrsGrade,
  now: number,
): SrsCardState {
  const s: SrsCardState = state ?? {
    reps: 0,
    ease: START_EASE,
    intervalDays: 0,
    dueAt: now,
    lapses: 0,
  };

  if (grade === 'again') {
    return {
      reps: 0,
      ease: clampEase(s.ease - 0.2),
      intervalDays: 0,
      dueAt: now + AGAIN_DELAY_MS,
      lapses: s.lapses + (s.reps > 0 ? 1 : 0), // a lapse only if it had been learned
    };
  }

  const reps = s.reps + 1;
  let ease = s.ease;
  let interval: number;
  if (grade === 'hard') {
    ease = clampEase(s.ease - 0.15);
    interval = reps === 1 ? 1 : clampInterval(s.intervalDays * 1.2);
  } else if (grade === 'good') {
    interval = reps === 1 ? 1 : reps === 2 ? 3 : clampInterval(s.intervalDays * s.ease);
  } else {
    // easy
    ease = clampEase(s.ease + 0.15);
    interval = reps === 1 ? 2 : reps === 2 ? 5 : clampInterval(s.intervalDays * s.ease * 1.3);
  }
  return { reps, ease, intervalDays: interval, dueAt: now + interval * DAY_MS, lapses: s.lapses };
}

export function isDue(state: SrsCardState | undefined, now: number): boolean {
  return state !== undefined && state.dueAt <= now;
}
export function isNew(state: SrsCardState | undefined): boolean {
  return state === undefined;
}

export type DueSummary = { due: number; fresh: number; later: number; total: number };

/** Counts over a card-id list: due now / never graded / scheduled later. */
export function dueSummary(
  cards: readonly { id: string }[],
  states: SrsStates,
  now: number,
): DueSummary {
  let due = 0;
  let fresh = 0;
  let later = 0;
  for (const c of cards) {
    const s = states[c.id];
    if (s === undefined) fresh++;
    else if (s.dueAt <= now) due++;
    else later++;
  }
  return { due, fresh, later, total: cards.length };
}

/**
 * The review queue: due cards first (oldest due first, stable), then new cards in
 * deck order, capped by `newAllowance` (how many new cards today's budget still permits).
 */
export function buildQueue<C extends { id: string }>(
  cards: readonly C[],
  states: SrsStates,
  now: number,
  newAllowance: number,
): C[] {
  const due = cards
    .filter((c) => isDue(states[c.id], now))
    .sort((a, b) => (states[a.id]?.dueAt ?? 0) - (states[b.id]?.dueAt ?? 0));
  const fresh = cards.filter((c) => isNew(states[c.id])).slice(0, Math.max(0, newAllowance));
  return [...due, ...fresh];
}

/** Earliest future dueAt across states (for "next card due …" when nothing is due). */
export function nextDueAt(states: SrsStates, now: number): number | undefined {
  let min: number | undefined;
  for (const s of Object.values(states)) {
    if (s.dueAt > now && (min === undefined || s.dueAt < min)) min = s.dueAt;
  }
  return min;
}

/** Human label for the interval each grade would schedule ("10 min" · "3 d" · "1.2 mo"). */
export function previewIntervals(
  state: SrsCardState | undefined,
  now: number,
): Record<SrsGrade, string> {
  const label = (g: SrsGrade): string => {
    const ms = gradeCard(state, g, now).dueAt - now;
    if (ms < DAY_MS) return `${Math.round(ms / 60000)} min`;
    const d = Math.round(ms / DAY_MS);
    return d >= 30 ? `${(d / 30).toFixed(d % 30 === 0 ? 0 : 1)} mo` : `${d} d`;
  };
  return { again: label('again'), hard: label('hard'), good: label('good'), easy: label('easy') };
}

/** Local calendar day key ("2026-07-10") — the daily new-card counter resets when it changes. */
export function dayKey(now: number): string {
  const d = new Date(now);
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${mm}-${dd}`;
}

// CHANGED (R1): english-guide addition — the #/definitions mastery bridge.
// `lib/masteryStore` has tracked new/learning/known per word id since D1 ("SRS-compatible by
// design"); the owner can import that progress into the schedule (explicit button, never silent).
// Mapping keeps all SM-2 numbers in this module instead of hand-rolled literals in the store:
//   · 'learning' → a fresh learning state, due NOW (the word is in flight, review it today);
//   · 'known'    → equivalent to two clean 'good' grades: reps 2, 3-day interval, start ease.
// Ease always starts at START_EASE — an import must never fabricate a difficulty signal.
export function seedState(mastery: 'learning' | 'known', now: number): SrsCardState {
  if (mastery === 'learning') {
    return { reps: 0, ease: START_EASE, intervalDays: 0, dueAt: now, lapses: 0 };
  }
  return { reps: 2, ease: START_EASE, intervalDays: 3, dueAt: now + 3 * DAY_MS, lapses: 0 };
}
