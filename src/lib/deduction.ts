// CHANGED (S4): the Deduction Lab engine — pure, deterministic lookup over a certainty × time grid
// (CLAUDE.md §6: turn the "how sure am I?" dial and get the modal that carries exactly that much
// confidence). Content lives in src/data/deductionLab.ts (SSOT rule); this module owns the types and
// the lookup, and is golden-tested via scripts/test-deduction.ts. Mirrors src/lib/modals.ts.
import type { Localized } from '../data/types';
import { LEVELS, VERDICTS } from '../data/deductionLab';

/** Five rungs of confidence, high → low. `must` (yes) … `can't` (no). */
export type Certainty = 'certain-yes' | 'probable' | 'possible' | 'improbable' | 'certain-no';

/** Deduction has two time frames only: about now, or about the past (+ have + V3). */
export type DedTime = 'present' | 'past';

/** One rung on the certainty scale (drives the sim's radiogroup + the CertaintyScale figure order). */
export type CertaintyLevel = {
  id: Certainty;
  pct: number; // scale position 0..100 (display only)
  label: Localized;
  gloss: Localized; // "I'm sure it's true", …
};

/** One correct way to voice that much certainty at that time. */
export type DeductionAnswer = {
  modal: string; // display form: 'must', "can't", 'might have'
  pattern: string; // 'must + V1', "can't have + V3"
  example: Localized; // example.en is the studied sentence (US English), .uk its translation
  note?: Localized; // nuance / register
};

/** A tempting WRONG modal for this cell, with the reason it fails (e.g. mustn't for "certainly not"). */
export type DeductionTrap = { modal: string; why: Localized };

export type DeductionVerdict = {
  answers: DeductionAnswer[];
  trap?: DeductionTrap;
};

export const CERTAINTIES: readonly Certainty[] = [
  'certain-yes',
  'probable',
  'possible',
  'improbable',
  'certain-no',
];
export const DED_TIMES: readonly DedTime[] = ['present', 'past'];

export function listLevels(): readonly CertaintyLevel[] {
  return LEVELS;
}

export function getLevel(id: Certainty): CertaintyLevel | undefined {
  return LEVELS.find((l) => l.id === id);
}

/** The core lookup: every (certainty, time) pair resolves to a verdict. */
export function getVerdict(certainty: Certainty, time: DedTime): DeductionVerdict | undefined {
  return VERDICTS[certainty]?.[time];
}
