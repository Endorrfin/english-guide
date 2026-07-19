// src/data/types.ts — the canonical content contract (standard §4.2).
// Tier-1 shape reused across guides, with ONE deliberate deviation (documented in CLAUDE.md §2):
// CHANGED (S0): `Level` is the CEFR scale ('a1'…'c1') — the natural axis of a language guide —
// instead of the tech-guide ladder (beginner/middle/senior/staff). Everything else is verbatim.

export type Lang = 'en' | 'uk';
export type Localized = { en: string; uk: string };

// CHANGED (S0): CEFR levels. Order matters for filters/sorting: a1 < a2 < b1 < b2 < c1.
export type Level = 'a1' | 'a2' | 'b1' | 'b2' | 'c1';

// The 7 content block kinds. Figures/sims are referenced by kebab `key` (resolved in lib/registry.tsx).
export type Block =
  | { kind: 'prose';   md: Localized }
  | { kind: 'figure';  fig: string; caption?: Localized }
  | { kind: 'sim';     sim: string; caption?: Localized }
  | { kind: 'table';   head: Localized[]; rows: Localized[][]; caption?: Localized }
  | { kind: 'code';    lang: string; code: string; note?: Localized }
  | { kind: 'callout'; tone: 'tip' | 'warn' | 'senior' | 'security'; title: Localized; md: Localized }
  | { kind: 'compare'; a: Localized; b: Localized; rows: [Localized, Localized, Localized][] };

export type Topic = { id: string; title: Localized; blocks: Block[] };

export type Module = {
  id: string;            // `m<N>-<kebab>`, e.g. 'm17-modal-system'
  num: number;           // global display number, contiguous 1..N
  section: string;       // section id, e.g. 's3-modal-verbs'
  order: number;         // order within the section (unique per section)
  level: Level;
  signature?: boolean;   // true if it carries a hero sim
  title: Localized;
  tagline: Localized;
  readMins: number;
  mentalModel: Localized;
  topics: Topic[];
  keyPoints: Localized[];
  pitfalls: { title: Localized; body: Localized }[];
  interview?: { q: Localized; a: Localized; level?: Level }[];
  // CHANGED (S0): per-module practice, rendered after pitfalls (like interview Q&A);
  // the #/practice hub aggregates these across modules by `tags`.
  exercises?: Exercise[];
  seeAlso: string[];     // module ids
  sources: { title: string; url: string }[];
};

export type Section = {
  id: string;            // `s<n>-<kebab>`
  roman?: string;        // 'I', 'II', … (optional display)
  title: Localized;
  accent?: string;       // CSS var or hex within the locked palette
};

// ─────────────────────── English-guide extensions (S0) ───────────────────────
// The dictionary, exercises and the irregular-verbs trainer are first-class DATA,
// under the same rules as modules: SSOT in src/data/*, bilingual Localized wherever
// a human reads prose, kebab-case ids, check:data enforces integrity.

/** Part of speech. Grammar terminology stays English in both languages (standard §3.2). */
export type Pos =
  | 'noun' | 'verb' | 'adjective' | 'adverb' | 'pronoun' | 'preposition'
  | 'conjunction' | 'determiner' | 'modal' | 'number' | 'exclamation' | 'phrase';

/** Dictionary entries cover single words, phrasal verbs and idioms — all searchable cards. */
export type EntryKind = 'word' | 'phrasal' | 'idiom';

/**
 * One example sentence with its register tag.
 * Locked decision (PROJECT-BRIEF §5): a full word card carries 7 examples —
 * 4 `general` + 3 professional (one each of `business` / `office` / `dev`).
 * `text.en` is the sentence being studied; `text.uk` is its translation.
 */
export type WordExample = { text: Localized; tag: 'general' | 'business' | 'office' | 'dev' };

export type WordEntry = {
  id: string;              // kebab of the headword, unique across ALL levels: 'abandon', 'give-up'
  word: string;            // headword as displayed: 'abandon', 'give up', 'a piece of cake'
  kind: EntryKind;
  ipa?: string;            // IPA transcription ('əˈbændən'); omit for multi-word phrases
  pos: Pos[];
  level: Level;
  translations: string[];  // UA translations, most common first
  def: Localized;          // one-sentence meaning: EN definition + UA тлумачення
  examples: WordExample[]; // words: 7 (see WordExample); phrasals/idioms: ≥3
  forms?: {                // only where irregular or non-obvious
    past?: string; pastParticiple?: string; ing?: string;
    plural?: string; comparative?: string; superlative?: string;
  };
  collocations?: string[]; // 'abandon a plan', 'abandon ship'
  synonyms?: string[];     // dictionary ids where possible; plain words otherwise
  antonyms?: string[];
  seeAlso?: string[];      // WordEntry ids — cross-link navigation, glossary-style
  topics?: string[];       // kebab topic tags: 'work', 'travel', 'emotions', 'food', …
  source: 'oxford' | 'custom'; // Oxford-3000 seed vs owner's weekly additions
};

/**
 * One practice item. Lives on its module (`Module.exercises`); the #/practice hub and
 * per-section drills aggregate by `tags` (e.g. 'modals', 'deduction', 'conditionals').
 * `id` is the stable progress key in localStorage — never renumber, only append.
 */
export type Exercise =
  | {
      id: string;          // `ex-<module-kebab>-<n>`, e.g. 'ex-modal-system-3'
      kind: 'gap';
      sentence: string;    // EN sentence with a `___` blank: 'You ___ smoke here.'
      answers: string[];   // accepted answers, first is canonical: ['must not', "mustn't"]
      hint?: Localized;
      explain: Localized;  // why this answer — shown after checking
      level: Level;
      tags: string[];
    }
  | {
      id: string;
      kind: 'mcq';
      prompt: Localized;   // question or instruction (may embed the EN sentence)
      options: string[];   // EN options, order fixed
      correct: number;     // index into options
      explain: Localized;
      level: Level;
      tags: string[];
    };

/** Irregular verb row for the #/irregular table + 3-forms drill. */
export type IrregularVerb = {
  base: string;            // go
  past: string;            // went
  pastParticiple: string;  // gone
  translations: string[];  // UA
  level: Level;
  note?: Localized;        // e.g. lie/lay confusion, BrE/AmE variants
};

// ─────────────────────── Reading section (S3) ───────────────────────
// CHANGED (S3): the Reading library — a page-based content system (like the Dictionary), NOT
// modules. SSOT in src/data/reading/*: one file per category (lazy-splittable at scale, standard
// §4.4) + a thin aggregator. Rendered by #/reading (accordion index) and #/reading/<id> (reader).
// Bilingual: `body` carries EN (the study object) AND a full UA translation, toggled at runtime.

/** A reading category — the accordion buckets on #/reading (health, work, values, …). */
export type ReadingCategory = {
  id: string;            // kebab: 'values', 'work', 'family'
  title: Localized;
  order: number;         // display order in the accordion
  blurb?: Localized;     // optional one-line description under the category header
};

/**
 * One comprehension question shown after a text. Locked decision (S3): a MIX per text —
 * 2–3 auto-checkable `mcq` (through the golden-tested lib/exercise engine) + 1–2 `open`
 * questions with a revealable model answer. Everything human-readable is bilingual.
 */
export type ReadingQuestion =
  | {
      kind: 'mcq';
      q: Localized;
      options: Localized[];  // bilingual options, order fixed
      correct: number;       // index into options
      explain?: Localized;   // why — shown after answering
    }
  | {
      kind: 'open';
      q: Localized;
      sample: Localized;     // a model answer, revealed on demand
    };

/**
 * A reading text. `id` is a stable kebab slug, unique across ALL reading files — it is the
 * progress key (read / question-solved) in localStorage, so never rename, only append.
 * `source` is per-text attribution (the screenshots come from several creators).
 */
export type ReadingText = {
  id: string;              // 'the-habit-of-reading-daily'
  title: Localized;
  category: string;        // ReadingCategory id
  level: Level;            // CEFR estimate — drives the level filter + badge
  minutes: number;         // estimated reading time (whole minutes, ≥1)
  body: Localized;         // full text: en = the English study object, uk = full translation
  questions: ReadingQuestion[]; // 3–5, a mix of mcq + open (S3 decision)
  source?: { author: string; handle?: string; url?: string }; // attribution credit
  topics?: string[];       // free tags for future cross-linking
  seeAlso?: string[];      // other ReadingText ids
};
