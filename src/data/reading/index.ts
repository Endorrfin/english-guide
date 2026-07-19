// src/data/reading/index.ts — the Reading aggregator (S3).
// CHANGED (S3): thin SSOT aggregator over the per-category files + the taxonomy. Eager for the
// golden batch; at scale this becomes a slim generated index + lazy per-category chunks
// (standard §4.4 meta-split, like the dictionary's W2) — the per-category file split is already in place.
import type { ReadingCategory, ReadingText } from '../types';
import { readingCategories } from './categories';
import { studyTexts } from './study';
import { valuesTexts } from './values';
import { familyTexts } from './family';
// CHANGED (Wave R2): more categories.
import { everydayTexts } from './everyday';
import { workTexts } from './work';
import { disciplineTexts } from './discipline';
import { lifeTexts } from './life';
import { upbringingTexts } from './upbringing';

export const READING_CATEGORIES: readonly ReadingCategory[] = [...readingCategories].sort(
  (a, b) => a.order - b.order,
);

export const READING_TEXTS: readonly ReadingText[] = [
  ...studyTexts,
  ...valuesTexts,
  ...familyTexts,
  ...everydayTexts,
  ...workTexts,
  ...disciplineTexts,
  ...lifeTexts,
  ...upbringingTexts,
];

const textById = new Map(READING_TEXTS.map((t) => [t.id, t]));
const catById = new Map(READING_CATEGORIES.map((c) => [c.id, c]));

export function getReadingText(id: string): ReadingText | undefined {
  return textById.get(id);
}

export function getReadingCategory(id: string): ReadingCategory | undefined {
  return catById.get(id);
}

/** Texts in a category, in input order. */
export function readingByCategory(catId: string): ReadingText[] {
  return READING_TEXTS.filter((t) => t.category === catId);
}

/** Categories that actually have ≥1 text, in display order — what the accordion renders. */
export function nonEmptyReadingCategories(): ReadingCategory[] {
  return READING_CATEGORIES.filter((c) => READING_TEXTS.some((t) => t.category === c.id));
}

/** Prev/next within the SAME category by input order — powers the reader footer nav. */
export function adjacentInCategory(id: string): { prev?: ReadingText; next?: ReadingText } {
  const t = textById.get(id);
  if (!t) return {};
  const sibs = readingByCategory(t.category);
  const i = sibs.findIndex((x) => x.id === id);
  return { prev: sibs[i - 1], next: sibs[i + 1] };
}

export const READING_COUNTS = {
  categories: READING_CATEGORIES.length,
  categoriesWithTexts: nonEmptyReadingCategories().length,
  texts: READING_TEXTS.length,
} as const;
