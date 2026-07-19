// CHANGED (T1): the DiveSwitcher + dive-gated block rendering (S5 mechanic, piloted in Section II
// Tenses; generic — ANY module whose blocks carry `dive` tags gets the switcher automatically).
// [🚂 Core | 🚶 Full | 🔬 Deep] + a ✈️ Overview button → the section overview module (m6).
// Blocks deeper than the persisted setting collapse into thin expandable <details> stubs — the
// reader SEES that more depth exists and can open any single block in place without changing the
// global depth. A11y: the switcher is a labelled radiogroup with arrow-key operation; stubs are
// native <details>, keyboard-operable for free. No animation — reduced-motion safe.
import type { Block, DiveLevel } from '../../data/types';
import { useLang } from '../../i18n/lang';
import { ui } from '../../i18n/ui';
import { hrefModule } from '../../lib/hashRouter';
import { cx } from '../../lib/utils';
import { BlockView } from './blocks';

/** The ✈️ level-1 target: the section overview module (CURRICULUM.md §B). */
const OVERVIEW_MODULE = 'm6-tense-system';

const DIVE_ORDER: readonly DiveLevel[] = [2, 3, 4];
const DIVE_ICON: Record<DiveLevel, string> = { 2: '🚂', 3: '🚶', 4: '🔬' };

export function DiveSwitcher({
  moduleId,
  dive,
  setDive,
}: {
  moduleId: string;
  dive: DiveLevel;
  setDive: (d: DiveLevel) => void;
}) {
  const { t } = useLang();
  const labels: Record<DiveLevel, string> = {
    2: t(ui.diveCore),
    3: t(ui.diveFull),
    4: t(ui.diveDeep),
  };
  const onKey = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      setDive(DIVE_ORDER[(idx + 1) % DIVE_ORDER.length]);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      setDive(DIVE_ORDER[(idx - 1 + DIVE_ORDER.length) % DIVE_ORDER.length]);
    }
  };
  return (
    <div className="dive-bar">
      <div className="dive-seg" role="radiogroup" aria-label={t(ui.diveLabel)}>
        {DIVE_ORDER.map((d, i) => (
          <button
            key={d}
            role="radio"
            aria-checked={dive === d}
            tabIndex={dive === d ? 0 : -1}
            className={cx('dive-btn', dive === d && 'on')}
            onClick={() => setDive(d)}
            onKeyDown={(e) => onKey(e, i)}
            title={t(ui.diveHint)}
          >
            <span aria-hidden="true">{DIVE_ICON[d]}</span> {labels[d]}
          </button>
        ))}
      </div>
      {moduleId !== OVERVIEW_MODULE && (
        <a className="dive-map" href={hrefModule(OVERVIEW_MODULE)} title={t(ui.diveOverviewHint)}>
          <span aria-hidden="true">✈️</span> {t(ui.diveOverview)}
        </a>
      )}
    </div>
  );
}

/** Renders a block honoring the current depth: deeper blocks become thin expandable stubs. */
export function DiveBlock({ block, dive }: { block: Block; dive: DiveLevel }) {
  const { t } = useLang();
  const blockDive = block.dive ?? 2;
  if (blockDive <= dive) return <BlockView block={block} />;
  return (
    <details className="dive-stub" data-dive={blockDive}>
      <summary>
        <span aria-hidden="true">{DIVE_ICON[blockDive]}</span>{' '}
        {t(blockDive === 3 ? ui.diveStubFull : ui.diveStubDeep)}
      </summary>
      <BlockView block={block} />
    </details>
  );
}
