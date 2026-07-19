// CHANGED (D1): pure helpers for the Definitions study page (#/definitions). No React, no side
// effects — golden-tested via scripts/test-definitions.ts. All logic that the page needs but that
// can be reasoned about in isolation lives here: A–Z grouping, the 4+3 example split, cloze
// generation (blank the headword in one of its own sentences), and the describe-it scaffold.
import type { Pos, WordEntry, WordExample } from '../data/types';

export const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

/** First letter of a headword, uppercased; anything non-alphabetic buckets under '#'. */
export function firstLetter(word: string): string {
  const c = word.trim().charAt(0).toUpperCase();
  return c >= 'A' && c <= 'Z' ? c : '#';
}

/** The set of first letters that actually have at least one word (drives the A–Z rail). */
export function availableLetters(words: readonly WordEntry[]): Set<string> {
  return new Set(words.map((w) => firstLetter(w.word)));
}

/** Words grouped by first letter, each bucket alphabetized by headword. */
export function groupByLetter(words: readonly WordEntry[]): Map<string, WordEntry[]> {
  const map = new Map<string, WordEntry[]>();
  const sorted = [...words].sort((a, b) => a.word.localeCompare(b.word));
  for (const w of sorted) {
    const l = firstLetter(w.word);
    const bucket = map.get(l);
    if (bucket) bucket.push(w);
    else map.set(l, [w]);
  }
  return map;
}

/** Split a word's 7 examples into the 4 general + the 3 professional (business · office · dev). */
export function splitExamples(w: WordEntry): { general: WordExample[]; professional: WordExample[] } {
  const general = w.examples.filter((e) => e.tag === 'general');
  const order: Record<WordExample['tag'], number> = { general: 0, business: 1, office: 2, dev: 3 };
  const professional = w.examples
    .filter((e) => e.tag !== 'general')
    .sort((a, b) => order[a.tag] - order[b.tag]);
  return { general, professional };
}

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Best-effort surface forms of a headword (single words only), so a cloze can blank the word even
 * when the sentence inflects it. Explicit irregular `forms` are included; regular -s/-ed/-ing (and
 * the drop-e / y→ies rules) are added heuristically. Matching is whole-word + case-insensitive, and
 * candidates are consumed longest-first, so a base form never masks half of an inflected one.
 */
export function surfaceForms(w: WordEntry): string[] {
  const set = new Set<string>();
  const base = w.word;
  if (base.includes(' ')) return [base]; // phrases: match verbatim only
  set.add(base);
  if (w.forms) {
    for (const v of Object.values(w.forms)) {
      if (v && !v.includes(' ')) set.add(v);
    }
  }
  if (/[^aeiou]y$/i.test(base)) {
    set.add(base.slice(0, -1) + 'ies');
    set.add(base.slice(0, -1) + 'ied');
  }
  set.add(base + 's');
  set.add(base + 'es');
  set.add(base + 'ed');
  set.add(base + 'ing');
  if (/e$/i.test(base)) {
    set.add(base.slice(0, -1) + 'ing'); // accommodate → accommodating
    set.add(base + 'd'); // accommodate → accommodated
  }
  return [...set];
}

/** Blank the FIRST occurrence of any surface form in a sentence. Returns null if none appears. */
export function buildCloze(sentence: string, forms: readonly string[]): { masked: string; answer: string } | null {
  const ordered = [...forms]
    .filter((f) => f && !f.includes(' '))
    .sort((a, b) => b.length - a.length);
  for (const form of ordered) {
    const re = new RegExp(`\\b${escapeRegExp(form)}\\b`, 'i');
    const m = re.exec(sentence);
    if (m) {
      return { masked: sentence.slice(0, m.index) + '____' + sentence.slice(m.index + m[0].length), answer: m[0] };
    }
  }
  return null;
}

/**
 * Pick a cloze for a word: a general example first (most approachable), then any example. Returns
 * the masked EN sentence, the accepted answer (checked case/contraction-insensitively upstream via
 * lib/exercise), and the UA translation for context. Null if no example contains the headword.
 */
export function pickCloze(w: WordEntry): { masked: string; answer: string; uk: string } | null {
  const forms = surfaceForms(w);
  const ordered = [...w.examples].sort(
    (a, b) => (a.tag === 'general' ? 0 : 1) - (b.tag === 'general' ? 0 : 1),
  );
  for (const ex of ordered) {
    const c = buildCloze(ex.text.en, forms);
    if (c) return { ...c, uk: ex.text.uk };
  }
  return null;
}

/**
 * The describe-it scaffold: what the learner may lean on when defining the word WITHOUT naming it,
 * plus the `taboo` list (the headword and its forms) they must avoid. Derived entirely from the
 * card — no per-word authoring, so it works for every word in the corpus.
 */
export type DescribeScaffold = {
  pos: Pos[];
  synonyms: string[];
  antonyms: string[];
  collocations: string[];
  taboo: string[];
};

export function describeScaffold(w: WordEntry): DescribeScaffold {
  const taboo = new Set<string>([w.word.toLowerCase()]);
  if (w.forms) {
    for (const v of Object.values(w.forms)) {
      if (v) taboo.add(v.toLowerCase());
    }
  }
  return {
    pos: w.pos,
    synonyms: w.synonyms ?? [],
    antonyms: w.antonyms ?? [],
    collocations: w.collocations ?? [],
    taboo: [...taboo],
  };
}
