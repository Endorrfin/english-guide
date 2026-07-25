/*
 * srsStore.ts — localStorage persistence + subscription for the SRS engine (#/review, R1).
 * Ported from `../database guide` src/lib/srsStore.ts (PROJECT-BRIEF §5) and adapted to the
 * english-guide's four corpus decks.
 *
 * One versioned key (`englishguide.srs`, separate from `englishguide.mastery.v1` and
 * `englishguide.practice.v1` — Review owns its SCHEDULE, the other two own their own progress
 * models): card states by id, per-deck on/off toggles, and the daily new-card counter (NEW_PER_DAY
 * budget, resets when the local day changes).
 *
 * WHY THE DECK CONTRACT LIVES HERE (and not in lib/reviewDecks.ts, which builds the cards):
 * the nav due-badge must count due cards WITHOUT importing any corpus — this module has zero data
 * imports, so `srsDueCount()` attributes a stored state to its deck from the id PREFIX alone. That
 * keeps the eager shell content-free (and stays correct after the planned dictionary meta-split).
 * Prefixes are permanent progress keys: append a deck, never rename one.
 *
 * All storage access is try/catch-guarded (SSR smoke shims localStorage; private mode may throw).
 */
import { useEffect, useState } from 'react';
import type { SrsCardState, SrsGrade } from './srs';
import { NEW_PER_DAY, dayKey, gradeCard, isNew, seedState } from './srs';

export const SRS_KEY = 'englishguide.srs';

export type SrsDeckId = 'dict' | 'mine' | 'idioms' | 'irregular';
export const SRS_DECKS: readonly SrsDeckId[] = ['dict', 'mine', 'idioms', 'irregular'];

/** Deck → card-id prefix. PERMANENT (progress keys) — never change an existing one. */
export const DECK_PREFIX: Record<SrsDeckId, string> = {
  dict: 'wd:',
  mine: 'mw:',
  idioms: 'im:',
  irregular: 'ir:',
};

/** Card id → its deck, from the prefix alone (no corpus import needed — used by the nav badge). */
export function deckOfCard(id: string): SrsDeckId | undefined {
  for (const deck of SRS_DECKS) if (id.startsWith(DECK_PREFIX[deck])) return deck;
  return undefined;
}

export type SrsData = {
  v: 1;
  states: Record<string, SrsCardState>;
  decks: Record<SrsDeckId, boolean>; // deck toggles (all on by default)
  newDay: string; // local day the counter below belongs to
  newUsed: number; // new cards already introduced that day
};

const DEFAULT_DECKS: Record<SrsDeckId, boolean> = {
  dict: true,
  mine: true,
  idioms: true,
  irregular: true,
};

function freshData(): SrsData {
  return { v: 1, states: {}, decks: { ...DEFAULT_DECKS }, newDay: '', newUsed: 0 };
}

function load(): SrsData {
  try {
    const raw = localStorage.getItem(SRS_KEY);
    if (raw) {
      const p = JSON.parse(raw) as Partial<SrsData>;
      if (p && p.v === 1 && typeof p.states === 'object' && p.states !== null) {
        return {
          v: 1,
          states: p.states as Record<string, SrsCardState>,
          decks: { ...DEFAULT_DECKS, ...(p.decks ?? {}) },
          newDay: typeof p.newDay === 'string' ? p.newDay : '',
          newUsed: typeof p.newUsed === 'number' ? p.newUsed : 0,
        };
      }
    }
  } catch {
    /* corrupt or unavailable storage → start fresh */
  }
  return freshData();
}

function save(d: SrsData): void {
  try {
    localStorage.setItem(SRS_KEY, JSON.stringify(d));
  } catch {
    /* ignore persistence failures */
  }
}

// ── Subscription (same-tab listeners + cross-tab via the storage event) ─────────────────
const listeners = new Set<() => void>();
export function notifySrs(): void {
  listeners.forEach((fn) => fn());
}
export function subscribeSrs(fn: () => void): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
  window.addEventListener('storage', (e: StorageEvent) => {
    if (e.key === SRS_KEY) notifySrs();
  });
}

// ── Store API (each call re-reads storage — cheap at this size, always fresh) ───────────
export function getSrsData(): SrsData {
  return load();
}

/** New-card budget still available today (resets when the local day changes). */
export function newAllowance(now: number): number {
  const d = load();
  return d.newDay === dayKey(now) ? Math.max(0, NEW_PER_DAY - d.newUsed) : NEW_PER_DAY;
}

/** Grade a card: applies the pure SM-2 transition and spends the daily budget if it was new. */
export function gradeSrsCard(cardId: string, grade: SrsGrade, now: number): void {
  const d = load();
  const wasNew = isNew(d.states[cardId]);
  d.states = { ...d.states, [cardId]: gradeCard(d.states[cardId], grade, now) };
  const today = dayKey(now);
  if (d.newDay !== today) {
    d.newDay = today;
    d.newUsed = 0;
  }
  if (wasNew) d.newUsed += 1;
  save(d);
  notifySrs();
}

export function setSrsDeckOn(deck: SrsDeckId, on: boolean): void {
  const d = load();
  d.decks = { ...d.decks, [deck]: on };
  save(d);
  notifySrs();
}

/** Wipe the schedule (deck toggles kept). The page confirms first — this is destructive. */
export function resetSrs(): void {
  const d = load();
  save({ ...d, states: {}, newDay: '', newUsed: 0 });
  notifySrs();
}

/**
 * Import #/definitions mastery into the schedule (owner decision R1: explicit button, never silent).
 * Idempotent: a card that already HAS a schedule is left alone, so pressing it twice — or after
 * weeks of reviewing — can only ever add cards, never rewind one. `toCardId` is injected
 * (lib/reviewDecks.cardIdForMasteryKey) so this module keeps its zero-data-import guarantee.
 * Returns how many cards were seeded.
 */
export function importMastery(
  mastery: Iterable<readonly [string, 'new' | 'learning' | 'known']>,
  toCardId: (masteryKey: string) => string | undefined,
  now: number,
): number {
  const d = load();
  const states = { ...d.states };
  let imported = 0;
  for (const [key, state] of mastery) {
    if (state === 'new') continue; // nothing learned yet — nothing to schedule
    const cardId = toCardId(key);
    if (!cardId || states[cardId] !== undefined) continue;
    states[cardId] = seedState(state, now);
    imported++;
  }
  if (imported > 0) {
    save({ ...d, states });
    notifySrs();
  }
  return imported;
}

/**
 * Due count for the nav badge — counts stored states that are due now, restricted to enabled decks
 * via the id namespace. New (never-graded) cards are not "due", so this needs NO card list and NO
 * content chunk: safe to call from the eager shell.
 */
export function srsDueCount(now: number): number {
  const d = load();
  let n = 0;
  for (const [id, s] of Object.entries(d.states)) {
    const deck = deckOfCard(id);
    if (deck && !d.decks[deck]) continue;
    if (s.dueAt <= now) n++;
  }
  return n;
}

/** Live due-count for the badge: updates on grade/toggle, cross-tab, focus and a 60 s tick. */
export function useSrsDueCount(): number {
  const [n, setN] = useState<number>(() => srsDueCount(Date.now()));
  useEffect(() => {
    const update = () => setN(srsDueCount(Date.now()));
    const unsub = subscribeSrs(update);
    const tick = window.setInterval(update, 60_000);
    window.addEventListener('focus', update);
    update();
    return () => {
      unsub();
      window.clearInterval(tick);
      window.removeEventListener('focus', update);
    };
  }, []);
  return n;
}
