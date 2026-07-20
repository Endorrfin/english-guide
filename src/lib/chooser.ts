// CHANGED (T4): the ★ Tense Chooser engine (m11) — three meaning questions → the right tense +
// near-miss explanations (CLAUDE.md §6). Q1 = WHEN is the sentence anchored (time), Q2 = WHAT are
// you saying about it (the meaning branch), Q3 = the context check that disambiguates rivals —
// including the cross-time overrides the section drills (a finished-time word forces Past Simple
// even when "the result matters now"; a present result re-anchors a past event to NOW). Pure,
// deterministic lookup over a typed decision tree; content lives in src/data/tenseChooser.ts
// (SSOT rule). Golden-tested via scripts/test-chooser.ts. Mirrors lib/modals.ts / lib/deduction.ts.
import type { Localized } from '../data/types';
import type { Aspect, TenseNearMiss, TenseTime } from './tenses';
import { CHOOSER_TREE } from '../data/tenseChooser';

/** The recommendation a completed Q1→Q2→Q3 path resolves to. */
export type ChooserVerdict = {
  /** Display name — a matrix tense or one of the sanctioned extras (will · be going to · used to). */
  name: string;
  /** The matrix column of the recommended FORM (drives the hue) — may differ from Q1's time:
   *  that mismatch IS the lesson (dated past → Past Simple; arrangement → Present Continuous). */
  time: TenseTime;
  aspect: Aspect; // the glyph
  pattern: string; // 'have/has + V3' — EN pattern strings stay English in both languages
  why: Localized;
  example: { text: Localized }; // .en is the studied sentence (US English), .uk its translation
  nearMisses?: TenseNearMiss[];
};

/** A Q3 option under one Q2 branch. */
export type ChooserLeaf = { id: string; label: Localized; verdict: ChooserVerdict };

/** A Q2 option under one time, carrying its Q3 leaves. */
export type ChooserBranch = { id: string; label: Localized; leaves: ChooserLeaf[] };

// ── Lookup (pure, deterministic — golden-tested) ────────────────────────────────────────────────
export function getBranches(time: TenseTime): ChooserBranch[] {
  return CHOOSER_TREE[time];
}

export function getBranch(time: TenseTime, branchId: string): ChooserBranch | undefined {
  return CHOOSER_TREE[time].find((b) => b.id === branchId);
}

export function chooseTense(time: TenseTime, branchId: string, leafId: string): ChooserVerdict | undefined {
  return getBranch(time, branchId)?.leaves.find((l) => l.id === leafId)?.verdict;
}

/** Total number of Q1→Q2→Q3 paths — the golden test pins this. */
export function countLeaves(): number {
  return (Object.values(CHOOSER_TREE) as ChooserBranch[][]).reduce(
    (n, branches) => n + branches.reduce((m, b) => m + b.leaves.length, 0),
    0,
  );
}
