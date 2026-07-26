// CHANGED (TM3): the SATELLITES row of ★ The Tense Machine (spec §4.4) — going to · used to ·
// would (past habit) · be about to as chips sitting UNDER their Wall time column (the .tm-sats
// grid mirrors the Wall's `30px repeat(3, 1fr)` template, so the chips align with the columns
// without ever entering the matrix geometry). A chip opens the satellite card: meaning, forms
// + − ?, two EN/UA examples with TTS, the near-miss against its matrix neighbour, and an
// optional usage note. Lives in components/tense/ (NOT sims|figures/ — the smoke files==keys
// constraint). A11y: toggle buttons with aria-expanded; the card is a polite live region;
// no animations, so the reduced-motion path is the only path.
import { useState } from 'react';
import { SATELLITES } from '../../data/tenseMachine';
import { useLang } from '../../i18n/lang';
import { TENSE_TIMES, TIME_COLOR_VAR, TIME_SOFT_VAR } from '../../lib/tenses';
import { cx } from '../../lib/utils';
import { SpeakButton } from './TenseMachineBits';

export function TenseSatellites() {
  const { t } = useLang();
  const [openId, setOpenId] = useState<string | null>(null);
  const open = SATELLITES.find((s) => s.id === openId);

  return (
    <section
      className="tm-sats"
      aria-label={t({ en: 'Satellites — forms that orbit the matrix', uk: 'Сателіти — форми на орбіті матриці' })}
    >
      <div className="tm-sats-row">
        <span className="tm-wall-glyph tm-sats-glyph" title={t({ en: 'Satellites', uk: 'Сателіти' })} aria-hidden="true">
          ☄
        </span>
        {TENSE_TIMES.map((tm) => (
          <div className="tm-sats-col" key={tm}>
            {SATELLITES.filter((s) => s.time === tm).map((s) => (
              <button
                key={s.id}
                type="button"
                className={cx('chip tm-sat-chip', openId === s.id && 'on')}
                aria-expanded={openId === s.id}
                style={openId === s.id ? { borderColor: TIME_COLOR_VAR[s.time], background: TIME_SOFT_VAR[s.time] } : undefined}
                onClick={() => setOpenId(openId === s.id ? null : s.id)}
              >
                {s.name}
              </button>
            ))}
          </div>
        ))}
      </div>

      <div aria-live="polite">
        {open && (
          <div className="tm-sat-card" style={{ ['--time' as string]: TIME_COLOR_VAR[open.time] }}>
            <div className="tn-name-row">
              <span className="tn-name" style={{ color: TIME_COLOR_VAR[open.time] }}>
                ☄ {open.name}
              </span>
              <button
                type="button"
                className="chip tm-sat-close"
                onClick={() => setOpenId(null)}
                aria-label={t({ en: 'Close the satellite card', uk: 'Закрити картку сателіта' })}
              >
                ✕
              </button>
            </div>

            <p className="mn-why">{t(open.meaning)}</p>

            <div className="tn-forms tm-patterns">
              <div className="tn-form">
                <span className="tn-form-sign tn-form-sign--aff" aria-hidden="true">+</span>
                <span className="mn-form">{open.forms.aff}</span>
              </div>
              <div className="tn-form">
                <span className="tn-form-sign tn-form-sign--neg" aria-hidden="true">−</span>
                <span className="mn-form">{open.forms.neg}</span>
              </div>
              <div className="tn-form">
                <span className="tn-form-sign" aria-hidden="true">?</span>
                <span className="mn-form">{open.forms.q}</span>
              </div>
            </div>

            {open.examples.map((ex) => (
              <div className="mn-example" key={ex.text.en}>
                <p className="mn-example-en">
                  {ex.text.en} <SpeakButton text={ex.text.en} />
                </p>
                <p className="mn-example-uk">{ex.text.uk}</p>
              </div>
            ))}

            <div className="mn-near">
              <p className="mn-col-label">{t({ en: 'Tempting — but a different tool', uk: 'Спокусливо — але це інший інструмент' })}</p>
              <p className="mn-near-item">
                <span className="mn-near-modal">✕ {open.nearMiss.name}</span>
                <span className="muted">{t(open.nearMiss.why)}</span>
              </p>
            </div>

            {open.freqNote && <p className="tm-sat-note muted">{t(open.freqNote)}</p>}
          </div>
        )}
      </div>
    </section>
  );
}
