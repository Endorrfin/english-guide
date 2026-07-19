// CHANGED (S4): ★ Deduction Lab — m21's signature sim. Turn the certainty dial (certain it's true →
// certain it's false) and pick a time (present / past); get the modal(s) that carry exactly that much
// confidence, with US-English examples (+ UA), notes, and the classic trap (mustn't ✕ for "certainly
// not"). Engine: src/lib/deduction.ts (pure, golden-tested); content: src/data/deductionLab.ts.
// A11y mirrors ModalNavigator: two radiogroups, a polite live region, full keyboard operation; no
// animation beyond token transitions (reduced-motion safe).
import { useId, useState } from 'react';
import { useLang } from '../../i18n/lang';
import { ui } from '../../i18n/ui';
import { CERTAINTIES, DED_TIMES, getVerdict, listLevels } from '../../lib/deduction';
import type { Certainty, DedTime } from '../../lib/deduction';
import { useTts } from '../../lib/tts';
import { cx } from '../../lib/utils';
import { MdInline } from '../module/Md';
import type { Localized } from '../../data/types';

const TIME_LABEL: Record<DedTime, Localized> = {
  present: { en: 'Now (present)', uk: 'Зараз (present)' },
  past: { en: 'Past (+ have + V3)', uk: 'Минуле (+ have + V3)' },
};

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

export function DeductionLab() {
  const { t } = useLang();
  const [certainty, setCertainty] = useState<Certainty>('certain-yes');
  const [time, setTime] = useState<DedTime>('present');
  const liveId = useId();

  const levels = listLevels();
  const current = levels.find((l) => l.id === certainty);
  const verdict = getVerdict(certainty, time);

  const onLevelKey = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      setCertainty(CERTAINTIES[(idx + 1) % CERTAINTIES.length]);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      setCertainty(CERTAINTIES[(idx - 1 + CERTAINTIES.length) % CERTAINTIES.length]);
    }
  };
  const onTimeKey = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      setTime(DED_TIMES[(idx + 1) % DED_TIMES.length]);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      setTime(DED_TIMES[(idx - 1 + DED_TIMES.length) % DED_TIMES.length]);
    }
  };

  const summary = verdict
    ? t({
        en: `${verdict.answers.length} way(s) to say it${verdict.trap ? ', plus one trap.' : '.'}`,
        uk: `Способів сказати: ${verdict.answers.length}${verdict.trap ? '; плюс одна пастка.' : '.'}`,
      })
    : '';

  return (
    <div className="mn" role="group" aria-label="Deduction Lab">
      <div className="mn-head">
        <span className="mn-title">★ Deduction Lab</span>
        <span className="mn-sub">
          {t({
            en: 'How sure are you? Turn the dial and pick a time — get the modal that carries exactly that much confidence.',
            uk: 'Наскільки ви впевнені? Крутіть регулятор і оберіть час — отримайте modal, що несе саме стільки впевненості.',
          })}
        </span>
      </div>

      <div className="mn-grid">
        <div>
          <p className="mn-col-label" id={`${liveId}-lvl`}>
            {t({ en: 'Certainty — how sure am I?', uk: 'Впевненість — наскільки я певен?' })}
          </p>
          <div className="mn-funcs" role="radiogroup" aria-labelledby={`${liveId}-lvl`}>
            {levels.map((l, i) => (
              <button
                key={l.id}
                role="radio"
                aria-checked={certainty === l.id}
                tabIndex={certainty === l.id ? 0 : -1}
                className="mn-func dl-level"
                onClick={() => setCertainty(l.id)}
                onKeyDown={(e) => onLevelKey(e, i)}
                title={t(l.gloss)}
              >
                <span className="dl-pct" aria-hidden="true">
                  {l.pct}%
                </span>
                {t(l.label)}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="mn-col-label" id={`${liveId}-time`}>
            {t({ en: 'Time', uk: 'Час' })}
          </p>
          <div className="mn-times" role="radiogroup" aria-labelledby={`${liveId}-time`}>
            {DED_TIMES.map((tm, i) => (
              <button
                key={tm}
                role="radio"
                aria-checked={time === tm}
                tabIndex={time === tm ? 0 : -1}
                className="mn-time"
                onClick={() => setTime(tm)}
                onKeyDown={(e) => onTimeKey(e, i)}
              >
                {t(TIME_LABEL[tm])}
              </button>
            ))}
          </div>

          <div className="mn-result" aria-live="polite">
            <p className="sr-only">{summary}</p>
            {current && (
              <>
                <p className="mn-why">
                  {t(current.label)} · {t(TIME_LABEL[time])}
                </p>
                <div className="dl-meter" aria-hidden="true">
                  <span className="dl-meter-fill" style={{ width: `${current.pct}%` }} />
                </div>
                <p className="dl-gloss">{t(current.gloss)}</p>
              </>
            )}
            {verdict?.answers.map((a, i) => (
              <div key={a.modal} className={cx(i > 0 && 'mn-alt')}>
                <div className="mn-answer-row">
                  <span className="mn-modal">{a.modal}</span>
                  <span className="mn-form">{a.pattern}</span>
                </div>
                {a.note && (
                  <p className="mn-why">
                    <MdInline text={t(a.note)} />
                  </p>
                )}
                <div className="mn-example">
                  <p className="mn-example-en">
                    {a.example.en} <SpeakButton text={a.example.en} />
                  </p>
                  <p className="mn-example-uk">{a.example.uk}</p>
                </div>
              </div>
            ))}
            {verdict?.trap && (
              <div className="mn-near">
                <p className="mn-col-label">
                  {t({ en: 'Tempting — but wrong here', uk: 'Спокусливо — але тут неправильно' })}
                </p>
                <p className="mn-near-item">
                  <span className="mn-near-modal">✕ {verdict.trap.modal}</span>
                  <MdInline className="muted" text={t(verdict.trap.why)} />
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
