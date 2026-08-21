// CHANGED (V2): pure helpers for the Idioms hub page (#/idioms). No React, no side effects —
// golden-tested via scripts/test-idioms.ts.
// CHANGED (V12): slimmed to IDIOM-specific concerns only. The generic phrase engine (kind grouping ·
// theme collection · Guess blanks · deterministic shuffle · Match rounds) moved to lib/phrases.ts so
// the Collocations tab can share it; the collocation categories moved to lib/collocations.ts.
import type { IdiomEntry } from '../data/types';

// CHANGED (V11): the idiom categories, in canonical display order. `id` matches IdiomEntry.category;
// the bilingual labels live in i18n/ui.ts (idiomCat*). Drives the category bar + the grouped Learn
// view shown when the 'idiom' kind is active. Append, never rename.
export const IDIOM_CATEGORY_IDS = [
  'communication',
  'work-business',
  'success-failure',
  'effort-difficulty',
  'problems-risk',
  'decisions-uncertainty',
  'emotions',
  'people-relationships',
  'time-chance',
  'money-value',
  'everyday-life',
] as const;
export type IdiomCategoryId = (typeof IDIOM_CATEGORY_IDS)[number];

/** True if `c` is one of the known idiom category ids (used by check:data + the page). */
export function isIdiomCategory(c: string | undefined): c is IdiomCategoryId {
  return c !== undefined && (IDIOM_CATEGORY_IDS as readonly string[]).includes(c);
}

/**
 * Group the idioms of a list by `category` in canonical order, each bucket alphabetized by phrase;
 * empty categories are dropped. Non-idioms are ignored. Any idiom with a missing or unknown category
 * lands in a trailing 'other' bucket, so nothing is ever silently hidden.
 */
export function groupIdiomsByCategory(list: readonly IdiomEntry[]): { category: string; items: IdiomEntry[] }[] {
  const buckets = new Map<string, IdiomEntry[]>();
  for (const id of IDIOM_CATEGORY_IDS) buckets.set(id, []);
  for (const e of list) {
    if (e.kind !== 'idiom') continue;
    const key = isIdiomCategory(e.category) ? e.category : 'other';
    if (!buckets.has(key)) buckets.set(key, []);
    buckets.get(key)!.push(e);
  }
  return [...buckets.entries()]
    .map(([category, items]) => ({ category, items: [...items].sort((a, b) => a.phrase.localeCompare(b.phrase)) }))
    .filter((g) => g.items.length > 0);
}
