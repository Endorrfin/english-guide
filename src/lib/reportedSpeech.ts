// CHANGED (C2): the ★ Reported Speech Lab engine (m15) — a pure, deterministic lookup over a
// SPEECH KIND × FRAME grid (statement · yes/no question · wh-question · request) × (she says… ·
// she said… · she said… but it's still true). Content lives in src/data/reportedSpeechLab.ts (SSOT
// rule); this module owns the types and the lookups, and is golden-tested via
// scripts/test-reported-speech.ts. Mirrors src/lib/conditionals.ts.
//
// Why every render is AUTHORED and never generated: backshift is not a string replacement. Whether
// a tense moves depends on the frame (still true? present reporting verb?), pronouns depend on who
// reports to whom, and a question loses its inversion AND its do-support at once. A generator would
// happily produce "she asked where was the server". So each item carries all three renders, written
// by hand, plus the SHIFTS that turn the direct sentence into each one — exact substrings, so the
// UI can highlight them and the test can verify them.
import type { Localized } from '../data/types';
import { ITEMS } from '../data/reportedSpeechLab';

/** What kind of utterance is being reported. */
export type SpeechKind = 'statement' | 'yes-no' | 'wh' | 'request';
/** The reporting situation: present reporting verb · past, time has passed · past, still true. */
export type Frame = 'says' | 'said' | 'still-true';
/** What changed between the direct sentence and the report. */
export type ShiftKind = 'tense' | 'pronoun' | 'time' | 'place' | 'order' | 'connector' | 'infinitive';

/**
 * One highlighted change. `text` is an EXACT substring of the render's `en`; highlights appear in
 * sentence order and never overlap. `from` (optional) is the substring of the DIRECT sentence it
 * replaces — absent for something with no source, like the `if` of a reported yes/no question.
 */
export type Shift = { text: string; kinds: ShiftKind[]; from?: string };

export type Render = {
  en: string;
  uk: string;
  shifts: Shift[];
  /** Why this frame renders this way (shown under the sentence). */
  note: Localized;
};

/** A frame that does not change anything for this kind (a request has no tense to shift). */
export type NaRender = { na: Localized };

export type Item = {
  id: string;
  kind: SpeechKind;
  /** The direct sentence (the study object) + its UA translation. */
  direct: { en: string; uk: string };
  renders: { says: Render; said: Render; 'still-true': Render | NaRender };
  /** The typical UA-speaker mistake when reporting this sentence. */
  trap: { wrong: string; why: Localized };
};

export const SPEECH_KINDS: readonly SpeechKind[] = ['statement', 'yes-no', 'wh', 'request'];
export const FRAMES: readonly Frame[] = ['says', 'said', 'still-true'];
export const SHIFT_KINDS: readonly ShiftKind[] = ['tense', 'pronoun', 'time', 'place', 'order', 'connector', 'infinitive'];

export function itemsOfKind(kind: SpeechKind): Item[] {
  return ITEMS.filter((it) => it.kind === kind);
}

export function getItem(id: string): Item | undefined {
  return ITEMS.find((it) => it.id === id);
}

export function listItems(): readonly Item[] {
  return ITEMS;
}

export function isNa(r: Render | NaRender): r is NaRender {
  return 'na' in r;
}

/** The core lookup: an item seen through a frame. */
export function renderFor(item: Item, frame: Frame): Render | NaRender {
  return item.renders[frame];
}

export type Segment = { text: string; shift?: Shift };

/**
 * Split a render into plain and highlighted segments. Shifts are searched in order, each one after
 * the end of the previous, so a short highlight ("she") cannot match inside an earlier word. Returns
 * null if a shift is missing or out of order — the golden test asserts this never happens.
 */
export function segments(r: Render): Segment[] | null {
  const out: Segment[] = [];
  let pos = 0;
  for (const s of r.shifts) {
    const i = r.en.indexOf(s.text, pos);
    if (i < 0) return null;
    if (i > pos) out.push({ text: r.en.slice(pos, i) });
    out.push({ text: s.text, shift: s });
    pos = i + s.text.length;
  }
  if (pos < r.en.length) out.push({ text: r.en.slice(pos) });
  return out;
}
