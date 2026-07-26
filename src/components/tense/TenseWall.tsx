// CHANGED (TM1+TM2): the Wall of ★ The Tense Machine — all 12 time × aspect cells ALIVE at once:
// every cell shows its tense name, its LIVE sentence (conjugated for the current verb / subject /
// polarity by lib/conjugator), its mini-timeline in the shared notation, and the corpus-frequency
// badge from the TenseCell SSOT. One 12-cell radiogroup: Left/Right walk the time axis, Up/Down
// walk the aspects (grid keyboard model); the active cell carries the time hue. Zero hand-written
// sentences — everything on the Wall is engine output (spec §12).
import { useLang } from '../../i18n/lang';
import type { MachineVerb } from '../../data/tenseMachine';
import { conjugate } from '../../lib/conjugator';
// CHANGED (TM3): + ConjStyle — the Wall renders in the page's full/short toggle state.
import type { ConjStyle, MachineSubject, Polarity } from '../../lib/conjugator';
import {
  ASPECTS,
  ASPECT_GLYPH,
  ASPECT_LABEL,
  TENSE_TIMES,
  TIME_COLOR_VAR,
  TIME_LABEL,
  TIME_SOFT_VAR,
  getTense,
} from '../../lib/tenses';
import type { Aspect, TenseTime } from '../../lib/tenses';
import { cx } from '../../lib/utils';
import { MiniTimeline, SentenceTokens } from './TenseMachineBits';

const cycle = <T,>(items: readonly T[], cur: T, delta: number): T =>
  items[(items.indexOf(cur) + delta + items.length) % items.length];

export function TenseWall({
  time,
  aspect,
  verb,
  subject,
  polarity,
  style,
  onSelect,
}: {
  time: TenseTime;
  aspect: Aspect;
  verb: MachineVerb;
  subject: MachineSubject;
  polarity: Polarity;
  /** CHANGED (TM3): the contractions toggle state — 'full' or 'short'. */
  style: ConjStyle;
  onSelect: (time: TenseTime, aspect: Aspect) => void;
}) {
  const { t } = useLang();

  const onCellKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') onSelect(cycle(TENSE_TIMES, time, 1), aspect);
    else if (e.key === 'ArrowLeft') onSelect(cycle(TENSE_TIMES, time, -1), aspect);
    else if (e.key === 'ArrowDown') onSelect(time, cycle(ASPECTS, aspect, 1));
    else if (e.key === 'ArrowUp') onSelect(time, cycle(ASPECTS, aspect, -1));
    else return;
    e.preventDefault();
  };

  return (
    <div
      className="tm-wall"
      role="radiogroup"
      aria-label={t({ en: 'The 12 tense cells — pick one', uk: '12 клітинок tenses — оберіть одну' })}
    >
      <span className="tm-wall-corner" aria-hidden="true" />
      {TENSE_TIMES.map((tm) => (
        <span key={tm} className="tm-wall-col" style={{ color: TIME_COLOR_VAR[tm] }} aria-hidden="true">
          {t(TIME_LABEL[tm])}
        </span>
      ))}
      {ASPECTS.map((a) => (
        <div className="tm-wall-row" key={a}>
          <span className="tm-wall-glyph" title={t(ASPECT_LABEL[a])} aria-hidden="true">
            {ASPECT_GLYPH[a]}
          </span>
          {TENSE_TIMES.map((tm) => {
            const cell = getTense(tm, a);
            if (!cell) return <span key={tm} />;
            const on = tm === time && a === aspect;
            const color = TIME_COLOR_VAR[tm];
            return (
              <button
                key={tm}
                type="button"
                role="radio"
                aria-checked={on}
                tabIndex={on ? 0 : -1}
                className={cx('tm-cell', on && 'on')}
                style={on ? { borderColor: color, background: TIME_SOFT_VAR[tm] } : undefined}
                onClick={() => onSelect(tm, a)}
                onKeyDown={onCellKey}
                aria-label={cell.name}
              >
                <span className="tm-cell-head">
                  <span className="tm-cell-name" style={{ color }}>
                    {cell.name}
                  </span>
                  {cell.freqPct !== undefined && (
                    <span className="tm-cell-freq mono" aria-hidden="true">
                      {cell.freqPct}%
                    </span>
                  )}
                </span>
                <span className="tm-cell-sent">
                  <SentenceTokens conj={conjugate(tm, a, subject, polarity, verb, style)} color={color} />
                </span>
                <MiniTimeline time={tm} aspect={a} />
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
