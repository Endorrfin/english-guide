// CHANGED (V12): the non-component exports of the shared phrase UI, split out of PhraseCard.tsx so
// that file exports components only (eslint react-refresh/only-export-components — a file mixing the
// two breaks Fast Refresh in dev).
import type { IdiomKind } from '../../data/types';
import { ui } from '../../i18n/ui';

/**
 * The shared mastery key for EVERY multi-word expression, idiom and collocation alike.
 *
 * The `idiom:` prefix is a permanent localStorage progress key: `lib/reviewDecks` maps it into the
 * `idioms` SRS deck, and V12 kept it when collocations moved to their own file and tab precisely so
 * the owner's existing progress on those 117 cards survived the split. Never re-prefix it.
 */
export const mkey = (id: string) => `idiom:${id}`;

export const KIND_LABEL: Record<IdiomKind, typeof ui.idiomTypeIdiom> = {
  idiom: ui.idiomTypeIdiom,
  phrasal: ui.idiomTypePhrasal,
  collocation: ui.idiomTypeCollocation,
};
