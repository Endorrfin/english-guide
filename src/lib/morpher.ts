// CHANGED (T4): the ★ Sentence Morpher engine (m6) — a pure, deterministic walk of ONE sentence
// through all 12 time × aspect cells (CLAUDE.md §6: animated timeline + form highlight + synced UA
// translation). The step ORDER is aspect-major — each aspect row slides past → present → future
// along the axis — because that is the m6 dive-3 insight made visible: rows share machinery
// (be + V-ing, have + V3), only the auxiliary changes its time. Content lives in
// src/data/sentenceMorpher.ts (SSOT rule); tense names + form patterns are reused from the shared
// matrix (lib/tenses — never restated here). Golden-tested via scripts/test-morpher.ts.
// Mirrors src/lib/modals.ts / src/lib/deduction.ts / src/lib/tenses.ts.
import type { Aspect, TenseTime } from './tenses';
import { ASPECTS, TENSE_TIMES, getTense } from './tenses';
import { MORPH_CELLS, MORPH_FRAME } from '../data/sentenceMorpher';

/** One cell's morph content: the verb phrase (highlighted), the time cue, the UA translation. */
export type MorphCell = {
  vp: string;  // the morphed verb phrase — what lights up in the sentence
  cue: string; // the time cue appended to the sentence (part of the studied EN sentence)
  uk: string;  // full natural UA translation of the assembled sentence
};

/** One resolved step of the morph walk (cell content + the shared matrix name/pattern). */
export type MorphStep = {
  time: TenseTime;
  aspect: Aspect;
  name: string;     // 'Past Simple' — from lib/tenses (grammar terms stay English)
  pattern: string;  // affirmative form pattern from the matrix ('had been + V-ing')
  vp: string;
  cue: string;
  sentence: string; // the assembled EN sentence
  uk: string;
};

/** Aspect-major order: ● past→present→future, then 〜, then ⤺, then 〜⤺. */
export const MORPH_ORDER: readonly { time: TenseTime; aspect: Aspect }[] = ASPECTS.flatMap(
  (aspect) => TENSE_TIMES.map((time) => ({ time, aspect })),
);

export const MORPH_STEPS = MORPH_ORDER.length; // 12

export function morphKey(time: TenseTime, aspect: Aspect): string {
  return `${time}-${aspect}`;
}

/** Assemble the studied sentence: subject + verb phrase + rest + time cue. */
export function assembleSentence(vp: string, cue: string): string {
  return `${MORPH_FRAME.subject} ${vp} ${MORPH_FRAME.rest} ${cue}.`;
}

export function getMorphStep(i: number): MorphStep | undefined {
  const at = MORPH_ORDER[i];
  if (!at) return undefined;
  const cell = MORPH_CELLS[morphKey(at.time, at.aspect)];
  const tense = getTense(at.time, at.aspect);
  if (!cell || !tense) return undefined;
  return {
    time: at.time,
    aspect: at.aspect,
    name: tense.name,
    pattern: tense.forms.aff,
    vp: cell.vp,
    cue: cell.cue,
    sentence: assembleSentence(cell.vp, cell.cue),
    uk: cell.uk,
  };
}

/** Index of a cell in the walk — powers the jump-anywhere grid. */
export function stepIndexOf(time: TenseTime, aspect: Aspect): number {
  return MORPH_ORDER.findIndex((s) => s.time === time && s.aspect === aspect);
}
