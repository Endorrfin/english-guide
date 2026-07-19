// CHANGED (T1): ★ Tense Navigator — the golden sim of Section II Tenses. Pick a TIME (triad hue)
// and an ASPECT (glyph) → the tense: meaning, forms +/−/?, a mini-timeline in the shared notation
// (● 〜 ⤺ 〜⤺, X = reference point, vertical NOW axis), US-English examples (+ UA) with TTS,
// near-misses (the tempting rival tense + why), and a corpus-frequency badge (5 forms = 96% of
// speech). Engine + shared TenseGlyphs vocabulary: src/lib/tenses.ts (pure, golden-tested);
// content: src/data/tenseNavigator.ts. A11y mirrors ModalNavigator: two radiogroups, a polite
// live region, full keyboard operation; the timeline is aria-hidden decoration (the forms table
// and meaning carry the information) — no animation, reduced-motion safe.
import { useId, useState } from 'react';
import { useLang } from '../../i18n/lang';
import { ui } from '../../i18n/ui';
import {
  ASPECTS,
  ASPECT_GLYPH,
  ASPECT_LABEL,
  ASPECT_MEANING,
  TENSE_TIMES,
  TIME_COLOR_VAR,
  TIME_LABEL,
  TIME_SOFT_VAR,
  getTense,
} from '../../lib/tenses';
import type { Aspect, TenseTime } from '../../lib/tenses';
import { useTts } from '../../lib/tts';
import { cx } from '../../lib/utils';
import { MdInline } from '../module/Md';

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

/** Mini-timeline in the shared notation: a NOW axis, the event mark placed by time, drawn by
 *  aspect (● dot · 〜 wave · ⤺ arc back to X · 〜⤺ wave + arc). Pure SVG, no animation. */
function MiniTimeline({ time, aspect }: { time: TenseTime; aspect: Aspect }) {
  const color = TIME_COLOR_VAR[time];
  // Horizontal anchor of the event on the 260-wide axis (NOW is the vertical line at 130).
  const x = time === 'past' ? 62 : time === 'present' ? 130 : 198;
  const y = 34;
  // The reference point X sits at the event anchor for perfect forms; the linked-back action
  // is drawn 44px earlier.
  const backX = x - 44;
  const wave = (cx0: number) =>
    `M ${cx0 - 22} ${y} q 5.5 -9 11 0 t 11 0 t 11 0 t 11 0`;
  return (
    <svg className="tn-timeline" viewBox="0 0 260 56" role="img" aria-hidden="true" focusable="false">
      {/* axis + NOW */}
      <line x1="8" y1={y} x2="252" y2={y} stroke="var(--line2)" strokeWidth="1.5" />
      <line x1="130" y1="10" x2="130" y2="48" stroke="var(--tx3)" strokeWidth="1.5" strokeDasharray="3 3" />
      <text x="130" y="8" textAnchor="middle" fill="var(--tx3)" fontSize="8" fontFamily="var(--font-mono)">
        NOW
      </text>
      {/* the event, by aspect */}
      {aspect === 'simple' && <circle cx={x} cy={y} r="5.5" fill={color} />}
      {aspect === 'continuous' && (
        <path d={wave(x)} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      )}
      {(aspect === 'perfect' || aspect === 'perfect-continuous') && (
        <>
          {/* X = the reference point the form links back from */}
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
            markerEnd="none"
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

export function TenseNavigator() {
  const { t } = useLang();
  const [time, setTime] = useState<TenseTime>('present');
  const [aspect, setAspect] = useState<Aspect>('simple');
  const liveId = useId();

  const cell = getTense(time, aspect);

  const onTimeKey = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      setTime(TENSE_TIMES[(idx + 1) % TENSE_TIMES.length]);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      setTime(TENSE_TIMES[(idx - 1 + TENSE_TIMES.length) % TENSE_TIMES.length]);
    }
  };
  const onAspectKey = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      setAspect(ASPECTS[(idx + 1) % ASPECTS.length]);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      setAspect(ASPECTS[(idx - 1 + ASPECTS.length) % ASPECTS.length]);
    }
  };

  return (
    <div className="mn tn" role="group" aria-label="Tense Navigator">
      <div className="mn-head">
        <span className="mn-title">★ Tense Navigator</span>
        <span className="mn-sub">
          {t({
            en: 'Pick WHEN (time) and WHAT KIND of statement (aspect) — get the tense.',
            uk: 'Оберіть КОЛИ (час) і ЯКИЙ ТИП твердження (aspect) — отримайте tense.',
          })}
        </span>
      </div>

      <div className="tn-pickers">
        <div>
          <p className="mn-col-label" id={`${liveId}-time`}>
            {t({ en: 'Time — the hue', uk: 'Час — колір' })}
          </p>
          <div className="mn-times tn-times" role="radiogroup" aria-labelledby={`${liveId}-time`}>
            {TENSE_TIMES.map((tm, i) => (
              <button
                key={tm}
                role="radio"
                aria-checked={time === tm}
                tabIndex={time === tm ? 0 : -1}
                className="mn-time tn-time"
                data-time={tm}
                style={time === tm ? { borderColor: TIME_COLOR_VAR[tm], background: TIME_SOFT_VAR[tm] } : undefined}
                onClick={() => setTime(tm)}
                onKeyDown={(e) => onTimeKey(e, i)}
              >
                <span className="tn-dot" style={{ background: TIME_COLOR_VAR[tm] }} aria-hidden="true" />
                {t(TIME_LABEL[tm])}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="mn-col-label" id={`${liveId}-aspect`}>
            {t({ en: 'Aspect — the glyph', uk: 'Aspect — гліф' })}
          </p>
          <div className="mn-times tn-aspects" role="radiogroup" aria-labelledby={`${liveId}-aspect`}>
            {ASPECTS.map((a, i) => (
              <button
                key={a}
                role="radio"
                aria-checked={aspect === a}
                tabIndex={aspect === a ? 0 : -1}
                className="mn-time tn-aspect"
                onClick={() => setAspect(a)}
                onKeyDown={(e) => onAspectKey(e, i)}
                title={t(ASPECT_MEANING[a])}
              >
                <span className="tn-glyph" aria-hidden="true">
                  {ASPECT_GLYPH[a]}
                </span>
                {t(ASPECT_LABEL[a])}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mn-result tn-result" aria-live="polite" style={{ ['--time' as string]: TIME_COLOR_VAR[time] }}>
        {cell && (
          <>
            <div className="tn-name-row">
              <span className="tn-name" style={{ color: TIME_COLOR_VAR[time] }}>
                <span aria-hidden="true">{ASPECT_GLYPH[aspect]} </span>
                {cell.name}
              </span>
              {cell.freqPct !== undefined ? (
                <span
                  className="tn-freq"
                  title={t({
                    en: 'share of spoken English (corpus studies)',
                    uk: 'частка в усній англійській (корпусні дослідження)',
                  })}
                >
                  {cell.freqPct}% {t({ en: 'of speech', uk: 'мовлення' })}
                </span>
              ) : (
                cell.freqNote && <span className="tn-freq tn-freq--rare">{t(cell.freqNote)}</span>
              )}
            </div>
            <p className="mn-why">
              <MdInline text={t(cell.meaning)} />
            </p>

            <MiniTimeline time={time} aspect={aspect} />

            <div className="tn-forms">
              <div className="tn-form">
                <span className="tn-form-sign tn-form-sign--aff" aria-hidden="true">+</span>
                <span className="mn-form">{cell.forms.aff}</span>
              </div>
              <div className="tn-form">
                <span className="tn-form-sign tn-form-sign--neg" aria-hidden="true">−</span>
                <span className="mn-form">{cell.forms.neg}</span>
              </div>
              <div className="tn-form">
                <span className="tn-form-sign" aria-hidden="true">?</span>
                <span className="mn-form">{cell.forms.q}</span>
              </div>
            </div>

            {cell.examples.map((ex) => (
              <div className="mn-example" key={ex.text.en}>
                <p className="mn-example-en">
                  {ex.text.en} <SpeakButton text={ex.text.en} />
                </p>
                <p className="mn-example-uk">{ex.text.uk}</p>
              </div>
            ))}

            {cell.signals.length > 0 && (
              <p className="tn-signals">
                <span className="mn-col-label">{t({ en: 'Signal words', uk: 'Слова-сигнали' })}</span>
                {cell.signals.map((s) => (
                  <span className="tn-signal mono" key={s}>
                    {s}
                  </span>
                ))}
              </p>
            )}

            {cell.nearMisses.length > 0 && (
              <div className="mn-near">
                <p className="mn-col-label">
                  {t({ en: 'Tempting — but wrong here', uk: 'Спокусливо — але тут неправильно' })}
                </p>
                {cell.nearMisses.map((nm) => (
                  <p className="mn-near-item" key={nm.name}>
                    <span className="mn-near-modal">✕ {nm.name}</span>
                    <MdInline className="muted" text={t(nm.why)} />
                  </p>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
