// CHANGED (V12): pure helpers for the Collocations hub page (#/collocations). Moved out of
// lib/idioms.ts when collocations got their own dataset (data/collocations.ts), page and lazy chunk.
// No React, no side effects, no data imports — golden-tested via scripts/test-collocations.ts.
// The generic phrase engine (shuffle · Match rounds · Guess blanks) lives in lib/phrases.ts.
import type { IdiomEntry } from '../data/types';
import { shuffle } from './phrases';

// CHANGED (V10/V12): the collocation categories, in canonical display order. `id` matches
// IdiomEntry.group; the bilingual labels live in i18n/ui.ts (collGroup*). Drives the category bar +
// the grouped Learn view. **Append, never rename** — the id is a stored filter value.
//
// The bar deliberately mixes two axes: grammatical PATTERN (make-do · verb-noun · adjective-noun ·
// adverb-adjective) and semantic DOMAIN (business · workplace · soft-skills · everyday). V10 shipped
// that mix; V12 extends it. Because a phrase can plausibly fit both axes, assignment follows a fixed
// precedence — see COLLOCATION_GROUP_RULE below — so the same phrase always lands in the same bucket.
export const COLLOCATION_GROUP_IDS = [
  'make-do',
  'verb-noun',
  'adjective-noun',
  'adverb-adjective',
  'business',
  'workplace',
  // CHANGED (V12): two new categories the V10 six could not house.
  'soft-skills',
  'everyday',
] as const;
export type CollocationGroupId = (typeof COLLOCATION_GROUP_IDS)[number];

/**
 * The assignment rule, in precedence order — apply the FIRST that matches:
 *   1. `make` / `do` head                                   → make-do
 *   2. CV / interview / soft-skill register                 → soft-skills
 *   3. meetings · contracts · deals · funding · targets     → business
 *   4. tech · office process · engineering                  → workplace
 *   5. home · leisure · daily routine · health · weather    → everyday
 *   6. otherwise fall through to the grammatical pattern    → verb-noun | adjective-noun |
 *                                                             adverb-adjective
 * Documented (not executable) on purpose: authoring is a human judgement call, but it must be a
 * REPEATABLE one — check:data only enforces that the group exists, not that it is the right one.
 */
export const COLLOCATION_GROUP_RULE =
  'make-do → soft-skills → business → workplace → everyday → grammatical pattern';

/** True if `g` is one of the known collocation category ids (used by check:data + the page). */
export function isCollocationGroup(g: string | undefined): g is CollocationGroupId {
  return g !== undefined && (COLLOCATION_GROUP_IDS as readonly string[]).includes(g);
}

/**
 * Group a list by `group` in canonical order, each bucket alphabetized by phrase; empty groups are
 * dropped. Non-collocations are ignored. Anything with a missing or unknown group lands in a
 * trailing 'other' bucket, so nothing is ever silently hidden.
 */
export function groupCollocations(list: readonly IdiomEntry[]): { group: string; items: IdiomEntry[] }[] {
  const buckets = new Map<string, IdiomEntry[]>();
  for (const id of COLLOCATION_GROUP_IDS) buckets.set(id, []);
  for (const e of list) {
    if (e.kind !== 'collocation') continue;
    const key = isCollocationGroup(e.group) ? e.group : 'other';
    if (!buckets.has(key)) buckets.set(key, []);
    buckets.get(key)!.push(e);
  }
  return [...buckets.entries()]
    .map(([group, items]) => ({ group, items: [...items].sort((a, b) => a.phrase.localeCompare(b.phrase)) }))
    .filter((g) => g.items.length > 0);
}

// ─────────────────────── The "Which word?" drill (V12) ───────────────────────
// The exercise a collocation trainer exists for: the BASE is given, you supply the COLLOCATE.
// Standard ELT practice — in verb+noun the noun is the base and the verb is chosen (`___ a
// decision`); in adjective+noun and adverb+adjective the first word is likewise the chosen one
// (`___ rain`, `___ different`). So: blank word 1, and draw the distractors from the first words of
// OTHER entries.
//
// WHY DISTRACTORS ARE CLASS-FILTERED. Same-category distractors alone are not enough. The category
// bar mixes grammatical patterns with semantic domains, so inside `workplace` the heads are a mix of
// verbs and adjectives: "___ deadline" would offer tight · ground · peak · state, and three of those
// are rejectable without knowing any English. `headClassIndex` recovers the missing signal from the
// data already present — a head that appears in `make-do`/`verb-noun` is a verb, one that appears in
// `adjective-noun`/`adverb-adjective` is a modifier — so "tight deadline" (whose head also heads
// "tight schedule") draws tight · strong · heavy · quick instead. Same-category candidates are still
// preferred within the class; the wider corpus is only the fallback.
//
// HONEST LIMITATION: English tolerates more than one collocate for some bases ("deeply concerned" is
// the target, but "seriously concerned" is attested too). The engine removes distractors that form a
// real corpus phrase or that the entry itself lists as a synonym; beyond that, a near-miss distractor
// is possible. That is why a wrong answer REVEALS the entry's `note` and meaning rather than just
// scoring — the drill is meant to teach on failure. Do not add a distractor source that is not
// filtered through `avoid`.

/** Phrases that begin with an article are noun phrases — the first word carries no teaching value. */
const LEADING_ARTICLE = /^(a|an|the)\s/i;

/** Which slot the head word fills. See the note above for why the drill needs to know. */
export type HeadClass = 'verb' | 'modifier';
const VERB_GROUPS: ReadonlySet<string> = new Set(['make-do', 'verb-noun']);
const MODIFIER_GROUPS: ReadonlySet<string> = new Set(['adjective-noun', 'adverb-adjective']);

/**
 * The class of THIS entry's head slot.
 *
 * Two signals, in order. The four GRAMMATICAL categories state it outright — a `verb-noun` head is a
 * verb, an `adverb-adjective` head is a modifier. The four SEMANTIC ones (business · workplace ·
 * soft-skills · everyday) do not, so we fall back to the shape of the definition: house style writes
 * a verb phrase as “To …” (“To bring people together for a discussion”) and a noun phrase as
 * anything else (“The times of day when demand is highest”). Measured against the 127 entries whose
 * category already answers the question, that fallback agrees 97.6% of the time — and every
 * disagreement is a phrase whose head is genuinely ambiguous, which is exactly why this is decided
 * PER ENTRY and not per head.
 *
 * The coupling is real: if a future wave stops writing verb meanings as “To …”, the drill quietly
 * gets easier. scripts/test-collocations.ts asserts the resulting rounds stay class-pure, so the
 * drift shows up as a test failure rather than as a worse exercise.
 */
export function entryHeadClass(e: IdiomEntry): HeadClass {
  const group = e.group ?? '';
  if (VERB_GROUPS.has(group)) return 'verb';
  if (MODIFIER_GROUPS.has(group)) return 'modifier';
  return /^to\s/i.test(e.meaning.en.trim()) ? 'verb' : 'modifier';
}

export type PickRound = {
  entryId: string;
  masked: string; // 'make a decision' → '___ a decision'
  answer: string; // 'make'
  options: string[]; // shuffled; always contains `answer`
};

export type PickOptions = {
  /**
   * Normalized (lower-cased) phrases that already exist in the corpus. A distractor `d` is rejected
   * when `d + rest` is one of them — otherwise the drill would offer a second CORRECT answer
   * ('take a decision' is valid BrE next to 'make a decision').
   */
  avoid?: ReadonlySet<string>;
  /**
   * head → the classes it can fill, from `headClassIndex`. Omit to fall back to category-only
   * distractors.
   */
  classOf?: ReadonlyMap<string, ReadonlySet<HeadClass>>;
  optionCount?: number;
};

/** The head word of a phrase, or '' when the phrase cannot be drilled this way. */
function headOf(phrase: string): string {
  if (LEADING_ARTICLE.test(phrase)) return '';
  const parts = phrase.trim().split(/\s+/);
  return parts.length >= 2 ? parts[0] : '';
}

/**
 * head (lower-cased) → the SET of classes that head can fill across the corpus. A set, not a single
 * value, because English reuses words across classes: `close` heads both “close a deal” (verb) and
 * “close friend” (modifier), so it is a fair distractor in either slot.
 */
export function headClassIndex(list: readonly IdiomEntry[]): Map<string, Set<HeadClass>> {
  const out = new Map<string, Set<HeadClass>>();
  for (const e of list) {
    const head = headOf(e.phrase).toLowerCase();
    if (!head) continue;
    const bucket = out.get(head);
    if (bucket) bucket.add(entryHeadClass(e));
    else out.set(head, new Set([entryHeadClass(e)]));
  }
  return out;
}

/** Entries this drill can actually use — ≥2 words and not article-led. */
export function pickableCollocations(list: readonly IdiomEntry[]): IdiomEntry[] {
  return list.filter((e) => headOf(e.phrase) !== '');
}

/**
 * Build one round for `entry`, drawing distractors from `pool` (pass the whole corpus — the engine
 * prefers same-category candidates itself). Returns null when the entry is not drillable or when no
 * distractor survives filtering: the caller skips it rather than showing a one-button question.
 */
export function buildPickRound(
  entry: IdiomEntry,
  pool: readonly IdiomEntry[],
  rand: () => number,
  opts: PickOptions = {},
): PickRound | null {
  const { avoid = new Set<string>(), classOf, optionCount = 4 } = opts;
  const answer = headOf(entry.phrase);
  if (!answer) return null;

  const rest = entry.phrase.trim().split(/\s+/).slice(1).join(' ');
  const answerLc = answer.toLowerCase();
  // The ANSWER's class comes from the entry itself, never from the shared index — the index is a
  // union across every phrase that head appears in, which is too loose to define this slot.
  const answerClass = classOf ? entryHeadClass(entry) : undefined;
  const synonymHeads = new Set((entry.synonyms ?? []).map((s) => headOf(s).toLowerCase()).filter(Boolean));

  const seen = new Set<string>([answerLc]);
  let candidates: { head: string; group: string | undefined }[] = [];
  for (const other of pool) {
    const head = headOf(other.phrase);
    if (!head) continue;
    const lc = head.toLowerCase();
    if (seen.has(lc)) continue;
    // Never offer a distractor that is itself a correct collocate of this base.
    if (avoid.has(`${lc} ${rest}`.toLowerCase())) continue;
    if (synonymHeads.has(lc)) continue;
    seen.add(lc);
    candidates.push({ head, group: other.group });
  }

  // Keep only the same slot class when we know it — a verb offered for an adjective slot is not a
  // distractor, it is a giveaway. Fall back to the unfiltered set rather than losing the question.
  if (answerClass) {
    const sameClass = candidates.filter((c) => classOf?.get(c.head.toLowerCase())?.has(answerClass));
    if (sameClass.length > 0) candidates = sameClass;
  }
  if (candidates.length === 0) return null;

  // Same category first (closest confusion), then the rest of the corpus.
  const sameGroup = candidates.filter((c) => c.group === entry.group);
  const otherGroup = candidates.filter((c) => c.group !== entry.group);
  const ordered = [...shuffle(sameGroup, rand), ...shuffle(otherGroup, rand)];
  const distractors = ordered.slice(0, Math.max(1, optionCount - 1)).map((c) => c.head);

  return {
    entryId: entry.id,
    masked: rest ? `___ ${rest}` : '___',
    answer,
    options: shuffle([answer, ...distractors], rand),
  };
}
