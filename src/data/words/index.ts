// src/data/words/index.ts — the dictionary aggregator.
// CHANGED (S1): W1 ships ~150 A1 cards, imported eagerly (search + dictionary + counts).
// S4 (dictionary v2) replaces this with per-level lazy chunks + a slim generated search index
// (standard §4.4 applied to words) — the meta-split arrives with the first big wave, W2.
import type { WordEntry } from '../types';
import { a1Words } from './a1';
import { customWords } from './custom';

export const WORDS: readonly WordEntry[] = [...a1Words, ...customWords];

const byId = new Map(WORDS.map((w) => [w.id, w]));

export function getWord(id: string): WordEntry | undefined {
  return byId.get(id);
}
