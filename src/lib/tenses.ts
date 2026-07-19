// CHANGED (T1): the Tense Navigator engine + the shared TenseGlyphs vocabulary — pure,
// deterministic lookup over the 3 × 4 time × aspect matrix (CLAUDE.md §6: pick WHEN and WHAT KIND
// of statement → the tense, with meaning, forms +/−/?, examples, near-misses and a corpus-frequency
// badge). Content lives in src/data/tenseNavigator.ts (SSOT rule); this module owns the types, the
// lookup and the ONE shared visual vocabulary every tense figure/table/sim must reuse (S5 decision):
// TIME = hue (--time-past rose · --time-present cyan · --time-future violet), ASPECT = timeline
// notation (● simple fact · 〜 continuous process · ⤺ perfect link-back · 〜⤺ perfect continuous).
// Golden-tested via scripts/test-tenses.ts. Mirrors src/lib/modals.ts / src/lib/deduction.ts.
import type { Localized } from '../data/types';
import { TENSES } from '../data/tenseNavigator';

export type TenseTime = 'past' | 'present' | 'future';
export type Aspect = 'simple' | 'continuous' | 'perfect' | 'perfect-continuous';

export const TENSE_TIMES: readonly TenseTime[] = ['past', 'present', 'future'];
export const ASPECTS: readonly Aspect[] = ['simple', 'continuous', 'perfect', 'perfect-continuous'];

// ── The shared TenseGlyphs vocabulary (use THESE everywhere — never restyle per component) ──────
export const ASPECT_GLYPH: Record<Aspect, string> = {
  simple: '●',
  continuous: '〜',
  perfect: '⤺',
  'perfect-continuous': '〜⤺',
};

export const ASPECT_LABEL: Record<Aspect, Localized> = {
  simple: { en: 'Simple', uk: 'Simple' },
  continuous: { en: 'Continuous', uk: 'Continuous' },
  perfect: { en: 'Perfect', uk: 'Perfect' },
  'perfect-continuous': { en: 'Perfect Continuous', uk: 'Perfect Continuous' },
};

/** One-line meaning of each aspect — the 4 ideas that replace ~50 tense rules (m6 topic 2). */
export const ASPECT_MEANING: Record<Aspect, Localized> = {
  simple: { en: 'a fact / whole event', uk: 'факт / ціла подія' },
  continuous: { en: 'a process in progress', uk: 'процес у розгортанні' },
  perfect: { en: 'a link back from a reference point', uk: 'звʼязок назад від точки відліку' },
  'perfect-continuous': { en: 'a process running up to a reference point', uk: 'процес аж до точки відліку' },
};

export const TIME_LABEL: Record<TenseTime, Localized> = {
  past: { en: 'Past', uk: 'Минуле' },
  present: { en: 'Present', uk: 'Теперішнє' },
  future: { en: 'Future', uk: 'Майбутнє' },
};

/** CSS custom-property per time — the triad hues live in theme/tokens.css only. */
export const TIME_COLOR_VAR: Record<TenseTime, string> = {
  past: 'var(--time-past)',
  present: 'var(--time-present)',
  future: 'var(--time-future)',
};
export const TIME_SOFT_VAR: Record<TenseTime, string> = {
  past: 'var(--time-past-soft)',
  present: 'var(--time-present-soft)',
  future: 'var(--time-future-soft)',
};

// ── The cell contract ───────────────────────────────────────────────────────────────────────────
export type TenseForms = {
  aff: string; // '+  have/has + V3'-style pattern (EN pattern strings stay English in both langs)
  neg: string;
  q: string;
};

export type TenseExample = {
  text: Localized; // .en is the studied sentence (US English), .uk its natural translation
};

/** A tempting WRONG neighbor for this cell, with the reason it fails. */
export type TenseNearMiss = {
  name: string; // the rival tense (display name, stays English)
  why: Localized;
};

export type TenseCell = {
  time: TenseTime;
  aspect: Aspect;
  name: string; // 'Present Perfect' — grammar terms stay English in both languages
  meaning: Localized; // what the form MEANS (one sentence)
  forms: TenseForms;
  examples: TenseExample[]; // ≥2: one everyday, one office/dev-flavored
  signals: string[]; // typical signal words ('already', 'yesterday', …) — traps handled in m11
  nearMisses: TenseNearMiss[];
  /** Corpus share of spoken English (Krámský 1969 / Alzuhairy 2016) for the big five; the other
   *  seven forms carry `freqNote` instead — together they are ≈4% of speech. */
  freqPct?: number;
  freqNote?: Localized;
};

// ── Lookup (pure, deterministic — golden-tested) ────────────────────────────────────────────────
export function getTense(time: TenseTime, aspect: Aspect): TenseCell | undefined {
  return TENSES[time]?.[aspect];
}

export function listTenses(): TenseCell[] {
  return TENSE_TIMES.flatMap((tm) => ASPECTS.map((a) => TENSES[tm][a]));
}
