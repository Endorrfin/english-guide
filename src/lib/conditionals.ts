// CHANGED (C1): the ★ Conditionals Machine engine (m13) — a pure, deterministic lookup over a
// REALITY × TIME grid (how real is the condition? × what time is it about?), plus a CONNECTOR lens
// (unless · in case · as long as · when) applied on top of the chosen cell. Content lives in
// src/data/conditionalsMachine.ts (SSOT rule); this module owns the types and the lookups, and is
// golden-tested via scripts/test-conditionals.ts. Mirrors src/lib/deduction.ts.
//
// Why the connector is a LENS and not a third axis: connectors are not orthogonal to the types.
// `in case` is not a condition at all (it's a precaution), `when` presupposes the event happens, and
// `unless` covers "except if" but not every "if … not". So each content cell carries an AUTHORED
// take per connector — a rewritten example + how the meaning shifts, or `notUsed` + why — instead of
// a generator that would happily produce ungrammatical or meaning-changing sentences.
import type { Localized } from '../data/types';
import { CELLS, MIXED_PREVIEW } from '../data/conditionalsMachine';

/** How real is the condition? */
export type Reality = 'always' | 'real' | 'unreal';
/** What time is the condition ABOUT (not the verb form — Type 2 uses a past form about now). */
export type CondTime = 'past' | 'present' | 'future';
/** The lens over the if-clause. `if` = the cell's own examples. */
export type Connector = 'if' | 'unless' | 'in-case' | 'as-long-as' | 'when';
export type LensConnector = Exclude<Connector, 'if'>;

export type CellKey = `${Reality}/${CondTime}`;

/** The conditional "type" a content cell teaches. `past-habit` / `open-past` are the real-past fine print. */
export type CondType = 'zero' | 'first' | 'second' | 'past-habit' | 'open-past';

/**
 * One studied sentence. `en` is the full sentence (US English); `cond` is the EXACT substring of `en`
 * that is the condition clause (connector included) — the UI highlights it and the golden test
 * checks it never contains will/would.
 */
export type CondExample = { en: string; cond: string; uk: string };

export type NearMiss = { cell: CellKey; why: Localized };

/** A connector applied to a cell: either a rewritten example + the meaning shift, or why it doesn't fit. */
export type ConnectorTake =
  | { ok: true; example: CondExample; shift: 'same' | 'shifted'; note: Localized }
  | { ok: false; why: Localized };

export type ContentCell = {
  kind: 'content';
  type: CondType;
  label: Localized; // 'Type 0 — zero conditional'
  ifForm: string; // 'if + Present Simple'
  mainForm: string; // 'Present Simple'
  meaning: Localized;
  examples: [CondExample, CondExample];
  trap: { wrong: string; why: Localized }; // the typical UA-speaker mistake for this cell
  nearMisses: NearMiss[];
  connectors: Record<LensConnector, ConnectorTake>;
  finePrint?: boolean; // a dive-3 cell (real past) — shown with a "fine print" badge
};

/** A combination that has no conditional of its own — explain and point at the right cells. */
export type NaCell = { kind: 'na'; why: Localized; redirect: CellKey[] };

/** A cell taught later (m23) — rendered as a preview link, not as content. */
export type PreviewCell = {
  kind: 'preview';
  label: Localized;
  teaser: Localized;
  sample: string; // one EN sentence, display only
  moduleId: string;
};

export type Cell = ContentCell | NaCell | PreviewCell;

export const REALITIES: readonly Reality[] = ['always', 'real', 'unreal'];
export const COND_TIMES: readonly CondTime[] = ['past', 'present', 'future'];
export const CONNECTORS: readonly Connector[] = ['if', 'unless', 'in-case', 'as-long-as', 'when'];
export const LENS_CONNECTORS: readonly LensConnector[] = ['unless', 'in-case', 'as-long-as', 'when'];

export function cellKey(reality: Reality, time: CondTime): CellKey {
  return `${reality}/${time}`;
}

export function parseCellKey(key: CellKey): { reality: Reality; time: CondTime } {
  const [reality, time] = key.split('/') as [Reality, CondTime];
  return { reality, time };
}

/** The core lookup: every (reality, time) pair resolves to exactly one cell. */
export function getCell(reality: Reality, time: CondTime): Cell {
  return CELLS[cellKey(reality, time)];
}

export function getCellByKey(key: CellKey): Cell | undefined {
  return CELLS[key];
}

/** The connector lens: `if` shows the cell's own examples (undefined here); the others an authored take. */
export function applyConnector(cell: ContentCell, connector: Connector): ConnectorTake | undefined {
  return connector === 'if' ? undefined : cell.connectors[connector];
}

/** Mixed conditionals cut across the grid (past condition → present result) — a preview link to m23. */
export function getMixedPreview(): PreviewCell {
  return MIXED_PREVIEW;
}

/** Split a sentence around its condition clause, for highlighting. Falls back to no highlight. */
export function splitCond(ex: CondExample): [string, string, string] {
  const i = ex.en.indexOf(ex.cond);
  if (i < 0) return [ex.en, '', ''];
  return [ex.en.slice(0, i), ex.cond, ex.en.slice(i + ex.cond.length)];
}
