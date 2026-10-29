// CHANGED (A1): ★ Counterfactual Rewind — m23's signature sim, the first of the Section V TokenMorph
// family. Pick WHEN the imagined change sits (a past event · a now/always state) and WHEN its result
// lands (past · now); the 2 × 2 gives Type 3, the two mixed conditionals and Type 2. Each pick REPLAYS
// a three-frame rewind: the fact → the condition pushed one tense back → the full imagined sentence —
// words fly to their new places (had slides in before left, would have arrives) while a two-lane
// timeline grows an "imagined" branch off the real one. A Wishes track walks fact → I wish … → If only.
// Engine: src/lib/counterfactual.ts (pure, golden-tested); content: src/data/counterfactualRewind.ts.
// A11y: radiogroups with roving tabindex; the SVG is decorative (aria-hidden); one polite live region
// speaks the current frame. Reduced motion: no auto-play, no flight — the last frame shows at once.
import { useState } from 'react';
import { useLang } from '../../i18n/lang';
import { CF_FRAME_LABELS, WHENS, WISH_FRAME_LABELS, getCell, listWishes, tokensOf } from '../../lib/counterfactual';
import type { CfFrame, When } from '../../lib/counterfactual';
import { usePlayback, useReducedMotion } from '../../lib/motion';
import { textOf } from '../../lib/tokenMorph';
import { cx } from '../../lib/utils';
import type { Localized } from '../../data/types';
import { TokenMorph } from '../motion/TokenMorph';
import { MorphControls, Radios, SpeakButton } from '../motion/MorphBits';

type Mode = 'cond' | 'wish';
const MODES: readonly Mode[] = ['cond', 'wish'];
const MODE_LABEL: Record<Mode, Localized> = {
  cond: { en: 'Conditionals', uk: 'Conditionals' },
  wish: { en: 'Wishes', uk: 'Wishes' },
};
const COND_LABEL: Record<When, Localized> = {
  past: { en: 'A past event', uk: 'Подія в минулому' },
  now: { en: 'A now / always state', uk: 'Стан зараз / завжди' },
};
const RESULT_LABEL: Record<When, Localized> = {
  past: { en: 'In the past', uk: 'У минулому' },
  now: { en: 'Now', uk: 'Зараз' },
};

const NOW_X = 400;
const REAL_Y = 112;
const IMAG_Y = 44;
const X_OF: Record<'cond' | 'result', Record<When, number>> = {
  cond: { past: 140, now: NOW_X },
  result: { past: 250, now: 480 },
};
const HUE: Record<When, string> = { past: 'var(--time-past)', now: 'var(--time-present)' };

/** Two lanes — REAL below, IMAGINED above — and the branch that grows between them per frame. */
function RewindTimeline({ cond, result, step }: { cond: When; result: When; step: number }) {
  const { t } = useLang();
  const cx0 = X_OF.cond[cond];
  const rx = X_OF.result[result];
  const dir = rx >= cx0 ? 1 : -1;
  const condMark = (y: number, color: string, on: boolean) =>
    cond === 'now' ? (
      <line className={cx('cfr-el', on && 'on')} x1={cx0 - 60} y1={y} x2={cx0 + 60} y2={y} stroke={color} strokeWidth="7" strokeLinecap="round" />
    ) : (
      <circle className={cx('cfr-el', on && 'on')} cx={cx0} cy={y} r="7" fill={color} />
    );
  return (
    <svg className="cfr-tl" viewBox="0 0 560 150" aria-hidden="true" focusable="false">
      <text x="8" y={REAL_Y + 4} fill="var(--tx3)" fontSize="10" fontWeight="700" letterSpacing="1">
        {t({ en: 'REAL', uk: 'РЕАЛЬНЕ' })}
      </text>
      <text x="8" y={IMAG_Y + 4} fill="var(--time-future)" fontSize="10" fontWeight="700" letterSpacing="1">
        {t({ en: 'IMAGINED', uk: 'УЯВНЕ' })}
      </text>
      <line x1="80" y1={REAL_Y} x2="552" y2={REAL_Y} stroke="var(--line2)" strokeWidth="1.5" />
      <line className={cx('cfr-el', step >= 1 && 'on')} x1="80" y1={IMAG_Y} x2="552" y2={IMAG_Y} stroke="var(--time-future)" strokeWidth="1" strokeDasharray="4 5" opacity="0.5" />
      <line x1={NOW_X} y1="14" x2={NOW_X} y2="140" stroke="var(--tx3)" strokeWidth="1.5" strokeDasharray="3 3" />
      <text x={NOW_X} y="11" textAnchor="middle" fill="var(--tx3)" fontSize="9" fontFamily="var(--font-mono)">
        NOW
      </text>

      {/* the facts on the real lane */}
      {condMark(REAL_Y, HUE[cond], true)}
      <circle cx={rx} cy={REAL_Y} r="6" fill="none" stroke={HUE[result]} strokeWidth="2.5" />
      <text x={cx0} y={REAL_Y + 24} textAnchor="middle" fill="var(--tx2)" fontSize="10">
        {t({ en: 'cause', uk: 'причина' })}
      </text>
      <text x={rx} y={REAL_Y + 24} textAnchor="middle" fill="var(--tx2)" fontSize="10">
        {t({ en: 'result', uk: 'результат' })}
      </text>

      {/* frame 2: the rewind — the cause lifts into the imagined lane */}
      <path
        className={cx('cfr-draw', 'cfr-el', step >= 1 && 'on')}
        pathLength={1}
        d={`M ${cx0} ${REAL_Y - 10} C ${cx0 - 18} ${REAL_Y - 34}, ${cx0 - 18} ${IMAG_Y + 30}, ${cx0} ${IMAG_Y + 10}`}
        fill="none"
        stroke="var(--time-future)"
        strokeWidth="2"
      />
      {condMark(IMAG_Y, 'var(--time-future)', step >= 1)}

      {/* frame 3: the imagined consequence travels to the result point */}
      <path
        className={cx('cfr-draw', 'cfr-el', 'cfr-late', step >= 2 && 'on')}
        pathLength={1}
        d={`M ${cx0 + dir * (cond === 'now' ? 64 : 12)} ${IMAG_Y} L ${rx - dir * 12} ${IMAG_Y}`}
        fill="none"
        stroke="var(--time-future)"
        strokeWidth="2.5"
        markerEnd="url(#cfr-head)"
      />
      <circle className={cx('cfr-el', 'cfr-late', step >= 2 && 'on')} cx={rx} cy={IMAG_Y} r="7" fill="var(--time-future)" />
      <defs>
        <marker id="cfr-head" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="var(--time-future)" />
        </marker>
      </defs>
    </svg>
  );
}

function FramePanel({ frames, step, labels, reduced }: { frames: readonly CfFrame[]; step: number; labels: Localized[]; reduced: boolean }) {
  const { t } = useLang();
  const frame = frames[step];
  const tokens = tokensOf(frame);
  return (
    <>
      <p className="sr-only" aria-live="polite">
        {`${t(labels[step])}: ${textOf(tokens)}`}
      </p>
      <p className="tkm-line">
        <TokenMorph tokens={tokens} reduced={reduced} baseline={tokensOf(frames[0])} /> <SpeakButton text={textOf(tokens)} />
      </p>
      <p className="mn-example-uk tkm-uk">{frame.uk}</p>
    </>
  );
}

export function CounterfactualRewind() {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const pb = usePlayback(2, 1900, 2);
  const [mode, setModeState] = useState<Mode>('cond');
  const [cond, setCondState] = useState<When>('past');
  const [result, setResultState] = useState<When>('past');
  const [scen, setScenState] = useState(0);
  const [wish, setWishState] = useState(0);

  // Every pick replays the rewind from the fact (that is the whole point: watch it move).
  const pick = <T,>(set: (v: T) => void) => (v: T) => {
    set(v);
    pb.replay(reduced);
  };
  const setMode = pick(setModeState);
  const setCond = pick(setCondState);
  const setResult = pick(setResultState);
  const setScen = pick(setScenState);
  const setWish = pick(setWishState);

  const cell = getCell(cond, result);
  const wishes = listWishes();
  const w = wishes[wish];

  return (
    <div className="mn cm adv cfr" role="group" aria-label="Counterfactual Rewind">
      <div className="mn-head">
        <span className="mn-title">★ Counterfactual Rewind</span>
        <span className="mn-sub">
          {t({
            en: 'Rewind reality: change a cause, choose when its result lands, and watch the sentence rebuild itself one tense back.',
            uk: 'Перемотайте реальність: змініть причину, оберіть, коли настає результат, і дивіться, як речення перебудовується на крок назад у часі.',
          })}
        </span>
      </div>

      <div className="mn-grid">
        <div>
          <Radios
            label={t({ en: 'Track', uk: 'Режим' })}
            items={MODES}
            value={mode}
            onPick={setMode}
            render={(m) => t(MODE_LABEL[m])}
          />
          {mode === 'cond' ? (
            <>
              <Radios
                label={t({ en: 'What do you change?', uk: 'Що змінюєте?' })}
                items={WHENS}
                value={cond}
                onPick={setCond}
                render={(v) => t(COND_LABEL[v])}
              />
              <Radios
                label={t({ en: 'When does the result land?', uk: 'Коли настає результат?' })}
                items={WHENS}
                value={result}
                onPick={setResult}
                render={(v) => t(RESULT_LABEL[v])}
              />
              <Radios
                label={t({ en: 'Story', uk: 'Історія' })}
                items={[0, 1]}
                value={scen}
                onPick={setScen}
                render={(i) => <span className="cfr-story">{cell.scenarios[i].frames[0].src}</span>}
              />
            </>
          ) : (
            <Radios
              label={t({ en: 'What kind of wish?', uk: 'Яке бажання?' })}
              items={wishes.map((_, i) => i)}
              value={wish}
              onPick={setWish}
              render={(i) => (
                <>
                  <span className="mono">{wishes[i].form}</span>
                  <span className="cm-gloss">{wishes[i].frames[0].src}</span>
                </>
              )}
            />
          )}
        </div>

        <div className="mn-result">
          {mode === 'cond' ? (
            <>
              <div className="mn-answer-row">
                <span className="mn-modal cm-type">{cell.label}</span>
              </div>
              <div className="cm-forms">
                <span>
                  <span className="cm-forms-k">if</span> <code>{cell.ifForm}</code>
                </span>
                <span>
                  <span className="cm-forms-k">{t({ en: 'main', uk: 'головна' })}</span> <code>{cell.mainForm}</code>
                </span>
              </div>
              <RewindTimeline cond={cond} result={result} step={pb.step} />
              <FramePanel frames={cell.scenarios[scen].frames} step={pb.step} labels={CF_FRAME_LABELS} reduced={reduced} />
              <MorphControls pb={pb} labels={CF_FRAME_LABELS} reduced={reduced} />
              <p className="mn-why">{t(cell.meaning)}</p>
              <p className="cfr-ua muted">
                {t({
                  en: 'Ukrainian says «якби» in all four cells — English tells WHEN by the verb form alone.',
                  uk: 'Українська каже «якби» в усіх чотирьох клітинках — англійська показує КОЛИ лише формою дієслова.',
                })}
              </p>
              <div className="mn-near">
                <p className="mn-col-label">{t({ en: 'The typical UA-speaker trap', uk: 'Типова пастка UA-мовця' })}</p>
                <p className="cm-trap">
                  <span className="cm-wrong">✕ {cell.trap.wrong}</span>
                  <span className="muted">{t(cell.trap.why)}</span>
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="mn-answer-row">
                <span className="mn-modal cm-type">{w.form}</span>
              </div>
              <FramePanel frames={w.frames} step={pb.step} labels={WISH_FRAME_LABELS} reduced={reduced} />
              <MorphControls pb={pb} labels={WISH_FRAME_LABELS} reduced={reduced} />
              <p className="mn-why">{t(w.meaning)}</p>
              <p className="cfr-ua muted">
                {t({
                  en: 'Ukrainian «шкода, що я НЕ…» flips the polarity — the English wish says what you WANT: I wish I spoke…',
                  uk: 'Українське «шкода, що я НЕ…» перевертає полярність — англійське wish каже, чого ви ХОЧЕТЕ: I wish I spoke…',
                })}
              </p>
              <div className="mn-near">
                <p className="mn-col-label">{t({ en: 'The typical UA-speaker trap', uk: 'Типова пастка UA-мовця' })}</p>
                <p className="cm-trap">
                  <span className="cm-wrong">✕ {w.trap.wrong}</span>
                  <span className="muted">{t(w.trap.why)}</span>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
