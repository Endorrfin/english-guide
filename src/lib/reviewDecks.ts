/*
 * reviewDecks.ts — the four SRS decks of #/review (R1), built from the EXISTING corpora.
 *
 * No new dataset: this module is a projection of the SSOT (`data/words`, `data/idioms`,
 * `data/collocations`,
 * `data/irregular`) into flat recall cards. Owner decision (R1): four decks by corpus, mutually
 * disjoint, with CEFR level as a FILTER on top (like #/practice) rather than five level decks —
 * CURRICULUM §B's "per level · My words · irregular verbs" is satisfied without 8 toggles, and
 * `dict` (Oxford seed) vs `mine` (the owner's own additions) never double-count a word.
 *
 * PURE + DATA-ONLY: no React, no localStorage, no route helpers (the page maps deck → href), so
 * scripts/test-srs.ts can import it under tsconfig.node.json. Card ids are the localStorage
 * progress keys — deck-PREFIXED so `srsDueCount()` can attribute a stored state to its deck from
 * the id alone (the nav badge never loads a content chunk). Prefixes and the underlying data ids
 * are permanent: append, never rename (PROJECT-BRIEF §10).
 */
import { COLLOCATIONS } from '../data/collocations'; // CHANGED (V12)
import { IDIOMS } from '../data/idioms';
import { IRREGULAR } from '../data/irregular';
import type { IdiomEntry, IrregularVerb, Level, Localized, WordEntry } from '../data/types';
import { a1Words } from '../data/words/a1';
import { customWords } from '../data/words/custom';
// The deck ids + id prefixes live in srsStore (which imports NO data) so the nav badge can attribute
// a stored state to its deck without pulling a corpus into the eager shell — see that file's header.
import { DECK_PREFIX } from './srsStore';
import type { SrsDeckId } from './srsStore';

export type ReviewDeckId = SrsDeckId;

/**
 * One recall card. `front` is always the ENGLISH study object (headword / phrase / base verb), so it
 * is stable across the EN/UA toggle — the surrounding chrome translates, the object of study doesn't.
 */
export type ReviewCard = {
  id: string; // deck-prefixed progress key: 'wd:abandon'
  deck: ReviewDeckId;
  refId: string; // the underlying data id (word id · idiom id · verb base) — the page builds the href
  level: Level;
  front: string;
  ipa?: string;
  answer?: string; // English answer line (irregular verbs: 'went · gone')
  meaning?: Localized; // bilingual definition / meaning
  uaEquivalent?: string; // idioms: the matching Ukrainian expression — the "aha" hook
  translations?: string[]; // UA translations
  example?: Localized; // one context sentence
};

function wordCard(w: WordEntry, deck: ReviewDeckId): ReviewCard {
  // Prefer a `general` example — the professional ones (business/office/dev) are narrower contexts.
  const ex = w.examples.find((e) => e.tag === 'general') ?? w.examples[0];
  return {
    id: DECK_PREFIX[deck] + w.id,
    deck,
    refId: w.id,
    level: w.level,
    front: w.word,
    ipa: w.ipa,
    meaning: w.def,
    translations: w.translations,
    example: ex?.text,
  };
}

function idiomCard(e: IdiomEntry): ReviewCard {
  return {
    id: DECK_PREFIX.idioms + e.id,
    deck: 'idioms',
    refId: e.id,
    level: e.level,
    front: e.phrase,
    meaning: e.meaning,
    uaEquivalent: e.uaEquivalent,
    example: e.examples[0]?.text,
  };
}

function irregularCard(v: IrregularVerb): ReviewCard {
  return {
    id: DECK_PREFIX.irregular + v.base.toLowerCase(),
    deck: 'irregular',
    refId: v.base,
    level: v.level,
    front: v.base,
    answer: `${v.past} · ${v.pastParticiple}`,
    translations: v.translations,
    example: v.note,
  };
}

/**
 * All cards, in deck order (`dict` → `mine` → `idioms` → `irregular`) and corpus order within a
 * deck — which is also the order new cards are introduced by `buildQueue`.
 * Module-level constant: the corpora are static imports, so this is computed once per chunk load.
 */
export const REVIEW_CARDS: readonly ReviewCard[] = [
  ...a1Words.map((w) => wordCard(w, 'dict')),
  ...customWords.map((w) => wordCard(w, 'mine')),
  // CHANGED (V12): collocations moved to their own file but stay in the SAME deck under the SAME
  // `DECK_PREFIX.idioms` key — re-prefixing them would reset 117 cards of the owner's progress.
  ...IDIOMS.map(idiomCard),
  ...COLLOCATIONS.map(idiomCard),
  ...IRREGULAR.map(irregularCard),
];

const OXFORD_WORD_IDS = new Set(a1Words.map((w) => w.id));
const CUSTOM_WORD_IDS = new Set(customWords.map((w) => w.id));
const IDIOM_IDS = new Set([...IDIOMS, ...COLLOCATIONS].map((e) => e.id)); // CHANGED (V12)

/**
 * word/idiom id → its SRS card id, for the #/definitions mastery import.
 * `masteryStore` keys words bare (`circumstances`) and idioms namespaced (`idiom:<id>`, V2), so this
 * accepts either shape and returns undefined for anything with no card (nothing to import).
 */
export function cardIdForMasteryKey(key: string): string | undefined {
  if (key.startsWith('idiom:')) {
    const id = key.slice('idiom:'.length);
    return IDIOM_IDS.has(id) ? DECK_PREFIX.idioms + id : undefined;
  }
  if (OXFORD_WORD_IDS.has(key)) return DECK_PREFIX.dict + key;
  if (CUSTOM_WORD_IDS.has(key)) return DECK_PREFIX.mine + key;
  return undefined;
}
