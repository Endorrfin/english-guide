// CHANGED (V3): pure helpers for the Irregular-verbs trainer (#/irregular). No React, no side effects
// — golden-tested via scripts/test-irregular.ts. Pattern classification (the memorable A-A-A / A-B-A /
// A-B-B / A-B-C shapes), pattern grouping for the table, and accepted-spelling expansion for the drill.
import type { IrregularVerb } from '../data/types';

export type IrregularPattern = 'aaa' | 'aba' | 'abb' | 'abc';
export const IRREGULAR_PATTERNS: readonly IrregularPattern[] = ['aaa', 'aba', 'abb', 'abc'];

const firstAlt = (s: string): string => s.split('/')[0].trim().toLowerCase();

/** Classify a verb by the equality shape of base · past · participle (slash variants normalized). */
export function classify(v: IrregularVerb): IrregularPattern {
  const b = firstAlt(v.base);
  const p = firstAlt(v.past);
  const pp = firstAlt(v.pastParticiple);
  if (b === p && p === pp) return 'aaa'; // cut · cut · cut
  if (b === pp && b !== p) return 'aba'; // come · came · come
  if (p === pp && b !== p) return 'abb'; // buy · bought · bought
  return 'abc'; // go · went · gone
}

/** Group verbs by pattern (canonical order), each bucket alphabetized by base; empty groups dropped. */
export function groupByPattern(
  list: readonly IrregularVerb[],
): { pattern: IrregularPattern; items: IrregularVerb[] }[] {
  return IRREGULAR_PATTERNS.map((pattern) => ({
    pattern,
    items: list.filter((v) => classify(v) === pattern).sort((a, b) => a.base.localeCompare(b.base)),
  })).filter((g) => g.items.length > 0);
}

/** Accepted spellings for a form string: 'got/gotten' → ['got', 'gotten']; 'was/were' → ['was','were']. */
export function acceptedForms(form: string): string[] {
  return form
    .split('/')
    .map((s) => s.trim())
    .filter(Boolean);
}
