// CHANGED (T4): ★ Sentence Morpher (m6) — ONE sentence morphed through all 12 time × aspect
// cells: the mini-timeline, the highlighted verb phrase and the synced UA translation move
// together. Engine: src/lib/morpher.ts (pure, golden-tested); content: src/data/sentenceMorpher.ts;
// names/patterns reused from the shared matrix (lib/tenses). The walk is aspect-major (● slides
// past → present → future, then 〜, ⤺, 〜⤺) — the "rows share machinery" insight animated.
// Controls mirror TenseTimeline: ◀/▶ step, ▶ auto-play (withheld under prefers-reduced-motion),
// ↺ reset, plus a 4 × 3 grid radiogroup to jump to any cell. A11y: the SVG is decorative
// (aria-hidden) — the tense name, sentence and translation live in an aria-live region; the grid
// is a labelled radiogroup with arrow-key stepping. SSR-safe: renders step 0 (Past Simple).
import { useEffect, useState } from 'react';
import { useLang } from '../../i18n/lang';
import { ui } from '../../i18n/ui';
import {
  ASPECTS,
  ASPECT_GLYPH,
  ASPECT_LABEL,
  TENSE_TIMES,
  TIME_COLOR_VAR,
  TIME_LABEL,
  TIME_SOFT_VAR,
} from '../../lib/tenses';
import type { Aspect, TenseTime } from '../../lib/tenses';
import { MORPH_STEPS, getMorphStep, stepIndexOf } from '../../lib/morpher';
import { useTts } from '../../lib/tts';
import { cx } from '../../lib/utils';

function SpeakButton({ text }: { text: string }) {
  const { supported, speaking, speak } = useTts();
  const { t } = useLang();
  return (
    <button
      type="button"
      className={cx('tts-btn', speaking && 'speaking')}
      onClick={() => speak(text)}
      disabled={!supported}
      title={supported ? t(ui.listen) : t(ui.ttsUnavailable)}
      aria-label={`${t(ui.listen)}: ${text}`}
    >
      <span aria-hidden="true">🔊</span>
    </button>
  );
}

/** The cell's picture in the shared notation (● 〜 ⤺ 〜⤺, NOW axis, X reference point) —
 *  the same geometry as the Tense Navigator's mini-timeline, so the two m6 sims read as one. */
function MorphTimeline({ time, aspect }: { time: TenseTime; aspect: Aspect }) {
  const color = TIME_COLOR_VAR[time];
  const x = time === 'past' ? 62 : time === 'present' ? 130 : 198;
  const y = 34;
  const backX = x - 44;
  const wave = (cx0: number) => `M ${cx0 - 22} ${y} q 5.5 -9 11 0 t 11 0 t 11 0 t 11 0`;
  return (
    <svg className="tn-timeline" viewBox="0 0 260 56" role="img" aria-hidden="true" focusable="false">
      <line x1="8" y1={y} x2="252" y2={y} stroke="var(--line2)" strokeWidth="1.5" />
      <line x1="130" y1="10" x2="130" y2="48" stroke="var(--tx3)" strokeWidth="1.5" strokeDasharray="3 3" />
      <text x="130" y="8" textAnchor="middle" fill="var(--tx3)" fontSize="8" fontFamily="var(--font-mono)">
        NOW
      </text>
      {aspect === 'simple' && <circle cx={x} cy={y} r="5.5" fill={color} />}
      {aspect === 'continuous' && (
        <path d={wave(x)} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      )}
      {(aspect === 'perfect' || aspect === 'perfect-continuous') && (
        <>
          <text x={x} y={y + 4} textAnchor="middle" fill={color} fontSize="12" fontWeight="700">
            ✕
          </text>
          {aspect === 'perfect' ? (
            <circle cx={backX} cy={y} r="4.5" fill={color} opacity="0.85" />
          ) : (
            <path d={wave(backX + 12)} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" opacity="0.85" />
          )}
          <path
            d={`M ${x - 8} ${y - 10} Q ${(x + backX) / 2} ${y - 26} ${backX + 4} ${y - 10}`}
            fill="none"
            stroke={color}
            strokeWidth="1.75"
          />
          <path
            d={`M ${backX + 9} ${y - 15} L ${backX + 4} ${y - 10} L ${backX + 11} ${y - 8}`}
            fill="none"
            stroke={color}
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  );
}

const LAST = MORPH_STEPS - 1;

export function SentenceMorpher() {
  const { t } = useLang();
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [reduced, setReduced] = useState(false);

  // Client-only: honor prefers-reduced-motion (the SSR shim reports matches:false → step 0 renders).
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  // Auto-play advances one cell at a time and stops at the last.
  useEffect(() => {
    if (!playing) return;
    if (step >= LAST) {
      setPlaying(false);
      return;
    }
    const id = setTimeout(() => setStep((s) => Math.min(LAST, s + 1)), 2400);
    return () => clearTimeout(id);
  }, [playing, step]);

  const cur = getMorphStep(step);

  const goto = (s: number) => {
    setPlaying(false);
    setStep(Math.max(0, Math.min(LAST, s)));
  };
  const togglePlay = () => {
    if (playing) {
      setPlaying(false);
      return;
    }
    setStep((s) => (s >= LAST ? 0 : s));
    setPlaying(true);
  };
  const onCellKey = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      goto(step + 1 > LAST ? 0 : step + 1);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      goto(step - 1 < 0 ? LAST : step - 1);
    }
  };

  if (!cur) return null;
  const color = TIME_COLOR_VAR[cur.time];

  return (
    <div className="mn sm" role="group" aria-label="Sentence Morpher">
      <div className="mn-head">
        <span className="mn-title">★ Sentence Morpher</span>
        <span className="mn-sub">
          {t({
            en: 'One sentence, twelve cells — watch each aspect slide along the time axis.',
            uk: 'Одне речення, дванадцять клітинок — дивіться, як кожен aspect ковзає віссю часу.',
          })}
        </span>
      </div>

      <div className="mn-result sm-result" aria-live="polite" style={{ ['--time' as string]: color }}>
        <div className="tn-name-row">
          <span className="tn-name" style={{ color }}>
            <span aria-hidden="true">{ASPECT_GLYPH[cur.aspect]} </span>
            {cur.name}
          </span>
          <span className="sm-pattern mono">{cur.pattern}</span>
        </div>

        <p className="sm-sentence">
          {'Maya '}
          <mark className="sm-vp" style={{ ['--time' as string]: color }}>
            {cur.vp}
          </mark>
          {' on the payment service '}
          <span className="sm-cue">{cur.cue}</span>
          {'.'}
          <SpeakButton text={cur.sentence} />
        </p>
        <p className="mn-example-uk sm-uk">{cur.uk}</p>

        <MorphTimeline time={cur.time} aspect={cur.aspect} />
      </div>

      <div className="ttl-controls" role="group" aria-label={t({ en: 'Morph playback', uk: 'Відтворення трансформацій' })}>
        <button type="button" className="ttl-btn" onClick={() => goto(step - 1)} disabled={step === 0} aria-label={t({ en: 'Step back', uk: 'Крок назад' })}>
          <span aria-hidden="true">◀</span>
        </button>
        {!reduced && (
          <button
            type="button"
            className={cx('ttl-btn', 'ttl-btn--play', playing && 'on')}
            onClick={togglePlay}
            aria-label={playing ? t({ en: 'Pause', uk: 'Пауза' }) : t({ en: 'Play all 12', uk: 'Відтворити всі 12' })}
          >
            <span aria-hidden="true">{playing ? '⏸' : '▶'}</span>
          </button>
        )}
        <button type="button" className="ttl-btn" onClick={() => goto(step + 1)} disabled={step === LAST} aria-label={t({ en: 'Step forward', uk: 'Крок уперед' })}>
          <span aria-hidden="true">▶</span>
        </button>
        <button type="button" className="ttl-btn" onClick={() => goto(0)} disabled={step === 0} aria-label={t({ en: 'Reset', uk: 'Спочатку' })}>
          <span aria-hidden="true">↺</span>
        </button>
        <span className="ttl-count mono" aria-hidden="true">
          {step + 1} / {MORPH_STEPS}
        </span>
      </div>

      <div className="sm-grid" role="radiogroup" aria-label={t({ en: 'Jump to a cell', uk: 'Перейти до клітинки' })}>
        <span className="sm-corner" aria-hidden="true" />
        {TENSE_TIMES.map((tm) => (
          <span key={tm} className="sm-col" style={{ color: TIME_COLOR_VAR[tm] }} aria-hidden="true">
            {t(TIME_LABEL[tm])}
          </span>
        ))}
        {ASPECTS.map((a) => (
          <div className="sm-row" key={a}>
            <span className="sm-glyph" title={t(ASPECT_LABEL[a])} aria-hidden="true">
              {ASPECT_GLYPH[a]}
            </span>
            {TENSE_TIMES.map((tm) => {
              const i = stepIndexOf(tm, a);
              const on = i === step;
              const name = getMorphStep(i)?.name ?? '';
              return (
                <button
                  key={tm}
                  type="button"
                  role="radio"
                  aria-checked={on}
                  tabIndex={on ? 0 : -1}
                  className={cx('sm-cell', on && 'on')}
                  style={on ? { borderColor: TIME_COLOR_VAR[tm], background: TIME_SOFT_VAR[tm], color: TIME_COLOR_VAR[tm] } : undefined}
                  onClick={() => goto(i)}
                  onKeyDown={onCellKey}
                  aria-label={name}
                  title={name}
                >
                  <span aria-hidden="true">{ASPECT_GLYPH[a]}</span>
                </button>
              );
            })}
          </div>
        ))}
      </div>
      <p className="sm-hint muted">
        {t({
          en: 'Same machinery in every row — only the auxiliary changes its time.',
          uk: 'У кожному рядку та сама механіка — час змінює лише допоміжне дієслово.',
        })}
      </p>
    </div>
  );
}
