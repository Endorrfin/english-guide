// src/data/words/custom.ts — the owner's personal dictionary (add-words protocol, CLAUDE.md §10).
// CHANGED (S1): empty seed. Weekly sessions append golden cards here with source:'custom'.
// Card ids are stable forever (SRS progress keys) — append, never rename.
import type { WordEntry } from '../types';

export const customWords: WordEntry[] = [];
