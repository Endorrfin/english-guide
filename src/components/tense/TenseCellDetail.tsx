// CHANGED (TM1+TM2): the selected-cell panel of ★ The Tense Machine — everything the SSOT knows
// about one cell (meaning · the LIVE + − ? trio for the current verb/subject · the abstract form
// patterns · authored EN/UA examples with TTS · signal words · near-miss traps) plus the doors
// deeper: the cell's home module (m7–m10), the m6 system overview and the #/practice drills.
// Reuses the TenseNavigator's .tn-* / .mn-* look so the Machine and the m6 sims read as one.
// CHANGED (TM3): + the SHADES chips (uses[], spec §4.3) — a radiogroup of the cell's structured
// uses; the active chip swaps the annotation, the example pair and its signal words. + the
// she+write showcase UA lines under the live trio (spec §11.3) and the contractions style prop.
import { useEffect, useState } from 'react';
import { getModule } from '../../data/concepts';
import { SHOWCASE_UA, getUses } from '../../data/tenseMachine';
import type { MachineVerb } from '../../data/tenseMachine';
import { useLang } from '../../i18n/lang';
import { conjugate, POLARITIES, POLARITY_SIGN } from '../../lib/conjugator';
import type { ConjStyle, MachineSubject } from '../../lib/conjugator';
import { hrefModule, hrefPractice } from '../../lib/hashRouter';
import { ASPECT_GLYPH, TIME_COLOR_VAR, getTense } from '../../lib/tenses';
import type { Aspect, TenseTime } from '../../lib/tenses';
import { cx } from '../../lib/utils';
import { MdInline } from '../module/Md';
import { MiniTimeline, SentenceTokens, SpeakButton } from './TenseMachineBits';

/** The cell's home module: perfect family → m10; otherwise by time (m7 · m8 · m9). */
function cellModuleId(time: TenseTime, aspect: Aspect): string {
  if (aspect === 'perfect' || aspect === 'perfect-continuous') return 'm10-perfect-family';
  if (time === 'past') return 'm8-past-simple-continuous';
  if (time === 'future') return 'm9-future-forms';
  return 'm7-present-simple-continuous';
}

export function TenseCellDetail({
  time,
  aspect,
  verb,
  subject,
  style,
}: {
  time: TenseTime;
  aspect: Aspect;
  verb: MachineVerb;
  subject: MachineSubject;
  /** CHANGED (TM3): the contractions toggle state — 'full' or 'short'. */
  style: ConjStyle;
}) {
  const { t } = useLang();
  // CHANGED (TM3): the active shade chip — reset to the first use when the cell changes.
  const [useIdx, setUseIdx] = useState(0);
  useEffect(() => {
    setUseIdx(0);
  }, [time, aspect]);

  const cell = getTense(time, aspect);
  if (!cell) return null;

  const uses = getUses(time, aspect);
  const activeUse = uses[Math.min(useIdx, uses.length - 1)];
  // CHANGED (TM3): the §11.3 showcase — authored UA only for she + write; gloss-only otherwise.
  const showcase = verb.id === 'write' && subject === 'she' ? SHOWCASE_UA[`${time}/${aspect}`] : undefined;

  const color = TIME_COLOR_VAR[time];
  const moduleId = cellModuleId(time, aspect);
  const home = getModule(moduleId);
  const system = getModule('m6-tense-system');

  return (
    <div className="mn-result tn-result tm-detail" aria-live="polite" style={{ ['--time' as string]: color }}>
      <div className="tn-name-row">
        <span className="tn-name" style={{ color }}>
          <span aria-hidden="true">{ASPECT_GLYPH[aspect]} </span>
          {cell.name}
        </span>
        {cell.freqPct !== undefined ? (
          <span
            className="tn-freq"
            title={t({ en: 'share of spoken English (corpus studies)', uk: 'частка в усній англійській (корпусні дослідження)' })}
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

      {/* The LIVE trio — the current verb + subject through + − ?, straight from the engine.
          CHANGED (TM3): rendered in the chosen style; she + write adds the showcase UA line. */}
      <div className="tm-trio" aria-label={t({ en: 'Live forms', uk: 'Живі форми' })}>
        {POLARITIES.map((p) => {
          const conj = conjugate(time, aspect, subject, p, verb, style);
          return (
            <div className="tm-trio-item" key={p}>
              <div className="tm-trio-row">
                <span className={`tn-form-sign${p === 'aff' ? ' tn-form-sign--aff' : p === 'neg' ? ' tn-form-sign--neg' : ''}`} aria-hidden="true">
                  {POLARITY_SIGN[p]}
                </span>
                <SentenceTokens conj={conj} color={color} />
                <SpeakButton text={conj.full} />
              </div>
              {showcase && <p className="tm-trio-uk">{showcase[p]}</p>}
            </div>
          );
        })}
      </div>

      {/* The abstract patterns behind the trio (the SSOT's forms strings). */}
      <div className="tn-forms tm-patterns">
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

      {/* CHANGED (TM3): the SHADES — one chip per structured use; the active chip swaps the
          annotation, the example pair and the shade's own signal words (spec §4.3). */}
      {uses.length > 0 && activeUse && (
        <div className="tm-uses">
          <p className="mn-col-label" id={`tm-uses-${time}-${aspect}`}>
            {t({ en: 'Shades of use', uk: 'Відтінки вживання' })}
          </p>
          <div
            className="mn-times tm-pills tm-uses-chips"
            role="radiogroup"
            aria-labelledby={`tm-uses-${time}-${aspect}`}
          >
            {uses.map((u, i) => (
              <button
                key={u.id}
                type="button"
                role="radio"
                aria-checked={i === useIdx}
                tabIndex={i === useIdx ? 0 : -1}
                className={cx('mn-time tm-pill tm-use-chip', i === useIdx && 'on')}
                onClick={() => setUseIdx(i)}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                    e.preventDefault();
                    setUseIdx((i + 1) % uses.length);
                  } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                    e.preventDefault();
                    setUseIdx((i - 1 + uses.length) % uses.length);
                  }
                }}
              >
                {t(u.label)}
              </button>
            ))}
          </div>
          <div className="tm-use">
            <p className="mn-why tm-use-meaning">
              <MdInline text={t(activeUse.meaning)} />
            </p>
            <div className="mn-example">
              <p className="mn-example-en">
                {activeUse.example.text.en} <SpeakButton text={activeUse.example.text.en} />
              </p>
              <p className="mn-example-uk">{activeUse.example.text.uk}</p>
            </div>
            {activeUse.signals && activeUse.signals.length > 0 && (
              <p className="tn-signals">
                <span className="mn-col-label">{t({ en: 'Signal words', uk: 'Слова-сигнали' })}</span>
                {activeUse.signals.map((s) => (
                  <span className="tn-signal mono" key={s}>
                    {s}
                  </span>
                ))}
              </p>
            )}
          </div>
        </div>
      )}

      {/* CHANGED (TM3): when shades render above, label the SSOT examples so the active shade's
          example and the cell's authored pair read as two lists, not one. */}
      {uses.length > 0 && (
        <p className="mn-col-label tm-more-label">{t({ en: 'More examples', uk: 'Ще приклади' })}</p>
      )}
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
          <p className="mn-col-label">{t({ en: 'Tempting — but wrong here', uk: 'Спокусливо — але тут неправильно' })}</p>
          {cell.nearMisses.map((nm) => (
            <p className="mn-near-item" key={nm.name}>
              <span className="mn-near-modal">✕ {nm.name}</span>
              <MdInline className="muted" text={t(nm.why)} />
            </p>
          ))}
        </div>
      )}

      <p className="tm-links">
        <span className="mn-col-label">{t({ en: 'Go deeper', uk: 'Глибше' })}</span>
        {home && (
          <a className="chip" href={hrefModule(moduleId)}>
            📘 {t(home.title)}
          </a>
        )}
        {system && (
          <a className="chip" href={hrefModule('m6-tense-system')}>
            ✈️ {t(system.title)}
          </a>
        )}
        <a className="chip" href={hrefPractice()}>
          ✍️ {t({ en: 'Drill it', uk: 'Тренувати' })}
        </a>
      </p>
    </div>
  );
}
