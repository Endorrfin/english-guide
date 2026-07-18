// CHANGED (S1): the exercise engine — pure, deterministic answer checking for gap-fill + MCQ
// (CLAUDE.md §2). No React, no side effects; golden-tested via scripts/test-exercise.ts.
//
// Normalization contract (CLAUDE.md §12): case-insensitive, whitespace-insensitive, typographic
// apostrophes unified, and CONTRACTION-EQUIVALENT — "mustn't" === "must not", "won't" === "will not",
// "can't" === "cannot" === "can not". The learner must never be marked wrong for a legitimate
// contracted/expanded variant of the same answer.

/**
 * Contraction → expansion map. Applied word-by-word after apostrophe unification.
 * Ambiguous clitics ('s = is/has/possessive, 'd = would/had) are deliberately NOT expanded —
 * expanding them would guess the meaning; authors list such variants in `answers` explicitly.
 */
const CONTRACTIONS: Record<string, string> = {
  // modals + auxiliaries (the guide's core)
  "mustn't": 'must not',
  "can't": 'cannot',
  "shan't": 'shall not',
  "won't": 'will not',
  "shouldn't": 'should not',
  "couldn't": 'could not',
  "wouldn't": 'would not',
  "mightn't": 'might not',
  "mayn't": 'may not',
  "needn't": 'need not',
  "oughtn't": 'ought not',
  "daren't": 'dare not',
  // do / be / have
  "don't": 'do not',
  "doesn't": 'does not',
  "didn't": 'did not',
  "isn't": 'is not',
  "aren't": 'are not',
  "wasn't": 'was not',
  "weren't": 'were not',
  "haven't": 'have not',
  "hasn't": 'has not',
  "hadn't": 'had not',
  "ain't": 'am not', // nonstandard, but never mark it "wrong spelling of a different word"
};

/** Unify typographic apostrophes/quotes to ASCII ' — users type either. */
function unifyApostrophes(s: string): string {
  return s.replace(/[‘’ʼ`´]/g, "'");
}

/** Lowercase, trim, collapse whitespace, strip terminal punctuation. */
export function normalize(s: string): string {
  return unifyApostrophes(s)
    .toLowerCase()
    .replace(/[.,!?;:]+$/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Canonical form for comparison: normalized + contractions expanded + "can not" folded into
 * "cannot" (so can't / cannot / can not are one equivalence class). Unambiguous clitics are
 * expanded too ('ll → will, 've → have, 're → are, 'm → am, 'd better → had better); the
 * genuinely ambiguous 's and bare 'd are left alone.
 */
export function canonical(s: string): string {
  const clitics = normalize(s)
    .replace(/'d better\b/g, ' had better') // the one 'd that is never ambiguous
    .replace(/(\p{L})'ll\b/gu, '$1 will')
    .replace(/(\p{L})'ve\b/gu, '$1 have')
    .replace(/(\p{L})'re\b/gu, '$1 are')
    .replace(/\bi'm\b/g, 'i am')
    .replace(/\s+/g, ' ')
    .trim();
  const words = clitics
    .split(' ')
    .map((w) => CONTRACTIONS[w] ?? w)
    .join(' ');
  return words.replace(/\bcan not\b/g, 'cannot');
}

/** True when the user's gap answer matches ANY accepted answer under the canonical form. */
export function checkGap(input: string, answers: readonly string[]): boolean {
  const c = canonical(input);
  if (c === '') return false;
  return answers.some((a) => canonical(a) === c);
}

/** MCQ check — index equality (kept in the engine so ALL verdicts flow through one tested module). */
export function checkMcq(chosen: number, correct: number): boolean {
  return Number.isInteger(chosen) && chosen === correct;
}

/** Split a gap sentence on its FIRST blank (one or more underscores) for rendering. */
export function gapParts(sentence: string): { before: string; after: string } {
  const m = sentence.match(/_{2,}/);
  if (!m || m.index === undefined) return { before: sentence, after: '' };
  return { before: sentence.slice(0, m.index), after: sentence.slice(m.index + m[0].length) };
}
