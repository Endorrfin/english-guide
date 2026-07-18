// CHANGED (S1): the Modal Navigator engine — pure, deterministic lookup over the function × time
// grid (CLAUDE.md §6: pick a communicative function and a time → the right modal, with examples
// and near-misses). Content lives in src/data/modalNavigator.ts (SSOT rule); this module owns the
// types and the lookup, and is golden-tested via scripts/test-modals.ts.
import type { Localized } from '../data/types';
import { CELLS, FUNCTIONS } from '../data/modalNavigator';

export type ModalTime = 'past' | 'present' | 'future';

export type ModalFunctionId =
  | 'ability'
  | 'permission'
  | 'request'
  | 'offer'
  | 'advice'
  | 'obligation'
  | 'prohibition'
  | 'no-necessity'
  | 'possibility'
  | 'deduction';

export type ModalFunctionDef = {
  id: ModalFunctionId;
  icon: string; // decorative glyph (aria-hidden in the UI)
  label: Localized;
  hint: Localized; // one-line description of the function
};

/** One recommended way to express the function at that time. */
export type ModalAnswer = {
  modal: string; // display form: 'must', 'have to', 'was able to'
  pattern: string; // grammar pattern: 'must + V1', 'must have + V3'
  example: Localized; // example.en is the studied sentence (US English), .uk its translation
  note?: Localized; // register / nuance note
};

/** A tempting WRONG choice for this cell, with the reason it fails. */
export type NearMiss = {
  modal: string;
  why: Localized;
};

export type ModalCell =
  | { answers: ModalAnswer[]; nearMisses: NearMiss[]; unavailable?: undefined }
  | { unavailable: Localized; answers?: undefined; nearMisses?: undefined };

export const TIMES: readonly ModalTime[] = ['past', 'present', 'future'];

export function listFunctions(): readonly ModalFunctionDef[] {
  return FUNCTIONS;
}

export function getFunction(id: ModalFunctionId): ModalFunctionDef | undefined {
  return FUNCTIONS.find((f) => f.id === id);
}

/** The core lookup: every (function, time) combination resolves to a cell (or an explicit N/A). */
export function getCell(fn: ModalFunctionId, time: ModalTime): ModalCell | undefined {
  return CELLS[fn]?.[time];
}
