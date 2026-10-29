// CHANGED (A1): the ★ Counterfactual Rewind engine (m23) — a pure lookup over a 2 × 2 grid:
// WHEN is the changed condition (a past event · a now/always state) × WHEN is the imagined result
// (past · now). The four cells are Type 3, the two mixed conditionals and Type 2 — the British Council
// "Conditionals: third and mixed" map. Every scenario walks three authored FRAMES that the TokenMorph
// engine animates: the FACT (what really happened) → the CONDITION rewound one tense back → the full
// imagined sentence. A parallel WISHES track walks fact → I wish … → If only …!
// Content lives in src/data/counterfactualRewind.ts (SSOT); golden test: scripts/test-counterfactual.ts.
import type { Localized } from '../data/types';
import { CELLS, WISHES } from '../data/counterfactualRewind';
import { parseLine } from './tokenMorph';
import type { MorphToken } from './tokenMorph';

export type When = 'past' | 'now';
export const WHENS: readonly When[] = ['past', 'now'];

export type CfFrame = { src: string; uk: string };
export type CfScenario = { id: string; frames: [CfFrame, CfFrame, CfFrame] };

export type CfCell = {
  cond: When;
  result: When;
  /** e.g. "Type 3 — third conditional" (grammar labels stay English). */
  label: string;
  ifForm: string;
  mainForm: string;
  meaning: Localized;
  scenarios: [CfScenario, CfScenario];
  trap: { wrong: string; why: Localized };
};

export type WishKind = 'now' | 'past' | 'would' | 'could';
export type WishItem = {
  kind: WishKind;
  form: string;
  meaning: Localized;
  frames: [CfFrame, CfFrame, CfFrame];
  trap: { wrong: string; why: Localized };
};

/** The three frame names of a conditional walk. */
export const CF_FRAME_LABELS: [Localized, Localized, Localized] = [
  { en: 'What really happened', uk: 'Що було насправді' },
  { en: 'Rewind the condition', uk: 'Перемотати умову' },
  { en: 'Imagine the result', uk: 'Уявити результат' },
];
export const WISH_FRAME_LABELS: [Localized, Localized, Localized] = [
  { en: 'The fact', uk: 'Факт' },
  { en: 'I wish … (one step back)', uk: 'I wish … (крок назад)' },
  { en: 'If only … (stronger)', uk: 'If only … (сильніше)' },
];

export function listCells(): readonly CfCell[] {
  return CELLS;
}

export function getCell(cond: When, result: When): CfCell {
  const c = CELLS.find((x) => x.cond === cond && x.result === result);
  if (!c) throw new Error(`counterfactual: no cell ${cond}-${result}`);
  return c;
}

export function listWishes(): readonly WishItem[] {
  return WISHES;
}

const cache = new Map<string, MorphToken[]>();
/** Parsed tokens of a frame — cached so TokenMorph receives a referentially stable array. */
export function tokensOf(frame: CfFrame): MorphToken[] {
  let t = cache.get(frame.src);
  if (!t) {
    t = parseLine(frame.src);
    cache.set(frame.src, t);
  }
  return t;
}

/** Split a full conditional at its first comma: [if-clause, main clause]. */
export function clauses(sentence: string): [string, string] {
  const i = sentence.indexOf(', ');
  return i < 0 ? [sentence, ''] : [sentence.slice(0, i), sentence.slice(i + 2)];
}
