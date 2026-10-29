// CHANGED (A1): shared UI bits for the TokenMorph sims — the 🔊 button and the frame controls
// (◀ step · ▶ auto-play · ▶ step · ↺ reset, the TenseTimeline/Sentence Morpher control row), plus
// clickable frame chips so every frame is one tap away. Auto-play is withheld under reduced motion.
import { useId } from 'react';
import type { KeyboardEvent, ReactNode } from 'react';
import { useLang } from '../../i18n/lang';
import { ui } from '../../i18n/ui';
import { useTts } from '../../lib/tts';
import { cx } from '../../lib/utils';
import type { Localized } from '../../data/types';
import type { Playback } from '../../lib/motion';

export function SpeakButton({ text }: { text: string }) {
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

function arrowNav<T>(items: readonly T[], idx: number, set: (v: T) => void) {
  return (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      set(items[(idx + 1) % items.length]);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      set(items[(idx - 1 + items.length) % items.length]);
    }
  };
}

/** A labelled radiogroup with roving tabindex + arrow keys (the ConditionalsMachine pattern). */
export function Radios<T extends string | number>({
  label,
  items,
  value,
  onPick,
  render,
}: {
  label: string;
  items: readonly T[];
  value: T;
  onPick: (v: T) => void;
  render: (v: T) => ReactNode;
}) {
  const id = useId();
  return (
    <div>
      <p className="mn-col-label cm-gap" id={id}>
        {label}
      </p>
      <div className="mn-funcs" role="radiogroup" aria-labelledby={id}>
        {items.map((v, i) => (
          <button
            key={String(v)}
            type="button"
            role="radio"
            aria-checked={value === v}
            tabIndex={value === v ? 0 : -1}
            className="mn-func cm-reality"
            onClick={() => onPick(v)}
            onKeyDown={arrowNav(items, i, onPick)}
          >
            {render(v)}
          </button>
        ))}
      </div>
    </div>
  );
}

/** ◀ ▶ ↺ + the frame chips. `labels` names each frame (shown on the chips). */
export function MorphControls({
  pb,
  labels,
  reduced,
  extra,
}: {
  pb: Playback;
  labels: Localized[];
  reduced: boolean;
  extra?: ReactNode;
}) {
  const { t } = useLang();
  const last = labels.length - 1;
  return (
    <div className="tkm-controls">
      <div className="ttl-controls" role="group" aria-label={t({ en: 'Transformation playback', uk: 'Відтворення трансформації' })}>
        <button type="button" className="ttl-btn" onClick={() => pb.goto(pb.step - 1)} disabled={pb.step === 0} aria-label={t({ en: 'Step back', uk: 'Крок назад' })}>
          <span aria-hidden="true">◀</span>
        </button>
        {!reduced && (
          <button
            type="button"
            className={cx('ttl-btn', 'ttl-btn--play', pb.playing && 'on')}
            onClick={pb.toggle}
            aria-label={pb.playing ? t({ en: 'Pause', uk: 'Пауза' }) : t({ en: 'Play the transformation', uk: 'Відтворити трансформацію' })}
          >
            <span aria-hidden="true">{pb.playing ? '⏸' : '▶'}</span>
          </button>
        )}
        <button type="button" className="ttl-btn" onClick={() => pb.goto(pb.step + 1)} disabled={pb.step === last} aria-label={t({ en: 'Step forward', uk: 'Крок уперед' })}>
          <span aria-hidden="true">▶</span>
        </button>
        <button type="button" className="ttl-btn" onClick={() => pb.goto(0)} disabled={pb.step === 0} aria-label={t({ en: 'Reset', uk: 'Спочатку' })}>
          <span aria-hidden="true">↺</span>
        </button>
        {extra}
      </div>
      <ol className="tkm-steps">
        {labels.map((l, i) => (
          <li key={i}>
            <button
              type="button"
              className={cx('tkm-step', i === pb.step && 'on', i < pb.step && 'done')}
              aria-current={i === pb.step ? 'step' : undefined}
              onClick={() => pb.goto(i)}
            >
              <span className="tkm-step-n" aria-hidden="true">
                {i + 1}
              </span>
              {t(l)}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
