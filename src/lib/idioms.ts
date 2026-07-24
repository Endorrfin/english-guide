// CHANGED (V2): pure helpers for the Idioms hub page (#/idioms). No React, no side effects —
// golden-tested via scripts/test-idioms.ts. Everything the page needs but that can be reasoned about
// in isolation lives here: kind grouping, theme collection, the Guess-mode blank, a deterministic
// shuffle, and Match-round construction (the randomness is injected so tests can pin the order).
import type { IdiomEntry, IdiomKind } from '../data/types';

export const IDIOM_KINDS: readonly IdiomKind[] = ['idiom', 'phrasal', 'collocation'];

/** Sorted, de-duplicated theme tags across a list — drives the theme filter. */
export function allThemes(list: readonly IdiomEntry[]): string[] {
  return [...new Set(list.flatMap((i) => i.themes))].sort();
}

/** Group entries by kind (canonical order), each bucket alphabetized by phrase; empty kinds dropped. */
export function groupByKind(list: readonly IdiomEntry[]): { kind: IdiomKind; items: IdiomEntry[] }[] {
  return IDIOM_KINDS.map((kind) => ({
    kind,
    items: list.filter((i) => i.kind === kind).sort((a, b) => a.phrase.localeCompare(b.phrase)),
  })).filter((g) => g.items.length > 0);
}

function esc(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Blank the phrase inside one of its example sentences (the Guess-mode gap). If the phrase does not
 * appear literally (e.g. an inflected phrasal), the raw sentence is returned with the phrase as the
 * answer. Null only when the entry carries no examples.
 */
export function blankInExample(
  entry: IdiomEntry,
  exampleIndex = 0,
): { masked: string; answer: string } | null {
  const ex = entry.examples[exampleIndex] ?? entry.examples[0];
  if (!ex) return null;
  const sentence = ex.text.en;
  const re = new RegExp(`\\b${esc(entry.phrase)}\\b`, 'i');
  const m = re.exec(sentence);
  if (!m) return { masked: sentence, answer: entry.phrase };
  return {
    masked: sentence.slice(0, m.index) + '____' + sentence.slice(m.index + m[0].length),
    answer: m[0],
  };
}

/** Fisher–Yates using an injected [0,1) generator, so tests can pin the order (Math.random in-app). */
export function shuffle<T>(arr: readonly T[], rand: () => number): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export type MatchRound = {
  left: { id: string; phrase: string }[]; // phrases (given order)
  right: { id: string; meaning: string }[]; // the SAME entries' meanings, shuffled
};

/**
 * Build a Match round of 2..min(size, list) entries. `left` keeps the chosen order; `right` carries
 * the same entries' meanings, shuffled — a correct pairing links left[i] to the right item whose id
 * equals left[i].id. Pure: pass `rand` for deterministic tests.
 */
export function buildMatchRound(
  list: readonly IdiomEntry[],
  size: number,
  rand: () => number,
  lang: 'en' | 'uk' = 'en',
): MatchRound {
  const n = Math.max(2, Math.min(size, list.length));
  const chosen = shuffle(list, rand).slice(0, n);
  const left = chosen.map((e) => ({ id: e.id, phrase: e.phrase }));
  const right = shuffle(chosen, rand).map((e) => ({
    id: e.id,
    meaning: lang === 'uk' ? e.meaning.uk : e.meaning.en,
  }));
  return { left, right };
}
