// CHANGED (S1): ★ Modal Navigator — the golden sim. Pick a communicative function × a time and
// get the right modal(s): ranked answers with patterns, US-English examples (+ UA translations),
// register notes, and near-misses (tempting wrong modals + why). Engine: src/lib/modals.ts (pure,
// golden-tested); content: src/data/modalNavigator.ts. A11y: two radiogroups, a polite live region,
// full keyboard operation; no animation beyond token transitions (reduced-motion safe).
import { useId, useState } from 'react';
import { useLang } from '../../i18n/lang';
import { ui } from '../../i18n/ui';
import { TIMES, getCell, listFunctions } from '../../lib/modals';
import type { ModalFunctionId, ModalTime } from '../../lib/modals';
import { useTts } from '../../lib/tts';
import { cx } from '../../lib/utils';
import { MdInline } from '../module/Md';
import type { Localized } from '../../data/types';

const TIME_LABEL: Record<ModalTime, Localized> = {
  past: { en: 'Past', uk: 'Минуле' },
  present: { en: 'Present', uk: 'Теперішнє' },
  future: { en: 'Future', uk: 'Майбутнє' },
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

export function ModalNavigator() {
  const { t } = useLang();
  const [fn, setFn] = useState<ModalFunctionId>('obligation');
  const [time, setTime] = useState<ModalTime>('present');
  const liveId = useId();

  const functions = listFunctions();
  const current = functions.find((f) => f.id === fn);
  const cell = getCell(fn, time);

  // Radiogroup keyboard behavior: arrows move the selection.
  const onFuncKey = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      setFn(functions[(idx + 1) % functions.length].id);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      setFn(functions[(idx - 1 + functions.length) % functions.length].id);
    }
  };
  const onTimeKey = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      setTime(TIMES[(idx + 1) % TIMES.length]);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      setTime(TIMES[(idx - 1 + TIMES.length) % TIMES.length]);
    }
  };

  const summary = cell
    ? cell.unavailable
      ? t({ en: 'No modal form for this combination — see the explanation.', uk: 'Для цієї комбінації немає modal-форми — див. пояснення.' })
      : t({
          en: `${cell.answers.length} way(s) to say it, ${cell.nearMisses.length} near-miss(es).`,
          uk: `Способів сказати: ${cell.answers.length}; пасток поруч: ${cell.nearMisses.length}.`,
        })
    : '';

  return (
    <div className="mn" role="group" aria-label="Modal Navigator">
      <div className="mn-head">
        <span className="mn-title">★ Modal Navigator</span>
        <span className="mn-sub">
          {t({
            en: 'Pick what you want to say and when — get the right modal.',
            uk: 'Оберіть, що хочете сказати і про який час — отримайте правильний modal.',
          })}
        </span>
      </div>

      <div className="mn-grid">
        <div>
          <p className="mn-col-label" id={`${liveId}-fn`}>
            {t({ en: 'Function — what you mean', uk: 'Функція — що ви хочете сказати' })}
          </p>
          <div className="mn-funcs" role="radiogroup" aria-labelledby={`${liveId}-fn`}>
            {functions.map((f, i) => (
              <button
                key={f.id}
                role="radio"
                aria-checked={fn === f.id}
                tabIndex={fn === f.id ? 0 : -1}
                className="mn-func"
                onClick={() => setFn(f.id)}
                onKeyDown={(e) => onFuncKey(e, i)}
                title={t(f.hint)}
              >
                <span className="mn-func-ic" aria-hidden="true">
                  {f.icon}
                </span>
                {t(f.label)}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="mn-col-label" id={`${liveId}-time`}>
            {t({ en: 'Time', uk: 'Час' })}
          </p>
          <div className="mn-times" role="radiogroup" aria-labelledby={`${liveId}-time`}>
            {TIMES.map((tm, i) => (
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
              <p className="mn-why">
                <span aria-hidden="true">{current.icon} </span>
                {t(current.hint)} · {t(TIME_LABEL[time])}
              </p>
            )}
            {!cell ? null : cell.unavailable ? (
              <div className="mn-empty">
                <p>
                  <MdInline text={t(cell.unavailable)} />
                </p>
              </div>
            ) : (
              <>
                {cell.answers.map((a, i) => (
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
                {cell.nearMisses.length > 0 && (
                  <div className="mn-near">
                    <p className="mn-col-label">
                      {t({ en: 'Tempting — but wrong here', uk: 'Спокусливо — але тут неправильно' })}
                    </p>
                    {cell.nearMisses.map((nm) => (
                      <p className="mn-near-item" key={nm.modal}>
                        <span className="mn-near-modal">✕ {nm.modal}</span>
                        <MdInline className="muted" text={t(nm.why)} />
                      </p>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
