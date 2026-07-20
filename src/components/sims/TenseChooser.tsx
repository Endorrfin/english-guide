// CHANGED (T4): ★ Tense Chooser (m11) — answer three meaning questions, get the tense.
// Q1 = WHEN (the time buttons, triad hues) · Q2 = WHAT you are saying about it (the meaning
// branch) · Q3 = the context check. The verdict shows the recommended form in ITS matrix hue —
// which sometimes jumps time on purpose (dated past → Past Simple under a "present" start;
// arrangement → Present Continuous under "future"): the jump is the lesson. Engine:
// src/lib/chooser.ts (pure, golden-tested via scripts/test-chooser.ts); content:
// src/data/tenseChooser.ts. A11y mirrors TenseNavigator: three labelled radiogroups, arrow-key
// stepping, a polite live region on the verdict, TTS on the example; no animation
// (CSS transitions only), so it is reduced-motion safe. SSR renders the Q1 step.
import { useId, useState } from 'react';
import { useLang } from '../../i18n/lang';
import { ui } from '../../i18n/ui';
import { CHOOSER_Q1 } from '../../data/tenseChooser';
import { chooseTense, getBranch, getBranches } from '../../lib/chooser';
import {
  ASPECT_GLYPH,
  TENSE_TIMES,
  TIME_COLOR_VAR,
  TIME_SOFT_VAR,
} from '../../lib/tenses';
import type { TenseTime } from '../../lib/tenses';
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

/** Generic arrow-key cycling for a radiogroup rendered from a list of ids. */
function cycle<T>(items: readonly T[], idx: number, delta: number): T {
  return items[(idx + delta + items.length) % items.length];
}

export function TenseChooser() {
  const { t } = useLang();
  const [time, setTime] = useState<TenseTime | null>(null);
  const [branchId, setBranchId] = useState<string | null>(null);
  const [leafId, setLeafId] = useState<string | null>(null);
  const liveId = useId();

  const branches = time ? getBranches(time) : [];
  const branch = time && branchId ? getBranch(time, branchId) : undefined;
  const verdict = time && branchId && leafId ? chooseTense(time, branchId, leafId) : undefined;

  const pickTime = (tm: TenseTime) => {
    setTime(tm);
    setBranchId(null);
    setLeafId(null);
  };
  const pickBranch = (id: string) => {
    setBranchId(id);
    setLeafId(null);
  };
  const reset = () => {
    setTime(null);
    setBranchId(null);
    setLeafId(null);
  };

  const onTimeKey = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      pickTime(cycle(TENSE_TIMES, idx, 1));
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      pickTime(cycle(TENSE_TIMES, idx, -1));
    }
  };
  const onBranchKey = (e: React.KeyboardEvent, idx: number) => {
    const ids = branches.map((b) => b.id);
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      pickBranch(cycle(ids, idx, 1));
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      pickBranch(cycle(ids, idx, -1));
    }
  };
  const onLeafKey = (e: React.KeyboardEvent, idx: number) => {
    const ids = (branch?.leaves ?? []).map((l) => l.id);
    if (ids.length === 0) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      setLeafId(cycle(ids, idx, 1));
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      setLeafId(cycle(ids, idx, -1));
    }
  };

  return (
    <div className="mn tc" role="group" aria-label="Tense Chooser">
      <div className="mn-head">
        <span className="mn-title">★ Tense Chooser</span>
        <span className="mn-sub">
          {t({
            en: 'Answer three meaning questions — get the tense (and the traps next door).',
            uk: 'Дайте відповідь на три питання про зміст — отримайте tense (і сусідні пастки).',
          })}
        </span>
      </div>

      <div className="tc-q">
        <p className="mn-col-label" id={`${liveId}-q1`}>
          {t({ en: 'Q1 — WHEN is your sentence anchored?', uk: 'Q1 — КОЛИ закріплене ваше речення?' })}
        </p>
        <div className="mn-times tn-times" role="radiogroup" aria-labelledby={`${liveId}-q1`}>
          {TENSE_TIMES.map((tm, i) => (
            <button
              key={tm}
              role="radio"
              aria-checked={time === tm}
              tabIndex={time === tm || (time === null && i === 0) ? 0 : -1}
              className="mn-time tn-time"
              data-time={tm}
              style={time === tm ? { borderColor: TIME_COLOR_VAR[tm], background: TIME_SOFT_VAR[tm] } : undefined}
              onClick={() => pickTime(tm)}
              onKeyDown={(e) => onTimeKey(e, i)}
            >
              <span className="tn-dot" style={{ background: TIME_COLOR_VAR[tm] }} aria-hidden="true" />
              {t(CHOOSER_Q1[tm])}
            </button>
          ))}
        </div>
      </div>

      {time && (
        <div className="tc-q">
          <p className="mn-col-label" id={`${liveId}-q2`}>
            {t({ en: 'Q2 — WHAT are you saying about it?', uk: 'Q2 — ЩО саме ви про це кажете?' })}
          </p>
          <div className="tc-opts" role="radiogroup" aria-labelledby={`${liveId}-q2`}>
            {branches.map((b, i) => (
              <button
                key={b.id}
                role="radio"
                aria-checked={branchId === b.id}
                tabIndex={branchId === b.id || (branchId === null && i === 0) ? 0 : -1}
                className={cx('tc-opt', branchId === b.id && 'on')}
                onClick={() => pickBranch(b.id)}
                onKeyDown={(e) => onBranchKey(e, i)}
              >
                {t(b.label)}
              </button>
            ))}
          </div>
        </div>
      )}

      {branch && (
        <div className="tc-q">
          <p className="mn-col-label" id={`${liveId}-q3`}>
            {t({ en: 'Q3 — check the context', uk: 'Q3 — перевірте контекст' })}
          </p>
          <div className="tc-opts" role="radiogroup" aria-labelledby={`${liveId}-q3`}>
            {branch.leaves.map((l, i) => (
              <button
                key={l.id}
                role="radio"
                aria-checked={leafId === l.id}
                tabIndex={leafId === l.id || (leafId === null && i === 0) ? 0 : -1}
                className={cx('tc-opt', leafId === l.id && 'on')}
                onClick={() => setLeafId(l.id)}
                onKeyDown={(e) => onLeafKey(e, i)}
              >
                {t(l.label)}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="mn-result tn-result tc-result" aria-live="polite" style={verdict ? { ['--time' as string]: TIME_COLOR_VAR[verdict.time] } : undefined}>
        {verdict ? (
          <>
            <div className="tn-name-row">
              <span className="tn-name" style={{ color: TIME_COLOR_VAR[verdict.time] }}>
                <span aria-hidden="true">{ASPECT_GLYPH[verdict.aspect]} </span>
                {verdict.name}
              </span>
              <span className="sm-pattern mono">{verdict.pattern}</span>
            </div>
            <p className="mn-why">
              <MdInline text={t(verdict.why)} />
            </p>
            <div className="mn-example">
              <p className="mn-example-en">
                {verdict.example.text.en} <SpeakButton text={verdict.example.text.en} />
              </p>
              <p className="mn-example-uk">{verdict.example.text.uk}</p>
            </div>
            {verdict.nearMisses && verdict.nearMisses.length > 0 && (
              <div className="mn-near">
                <p className="mn-col-label">
                  {t({ en: 'Tempting — but check first', uk: 'Спокусливо — але спершу перевірте' })}
                </p>
                {verdict.nearMisses.map((nm) => (
                  <p className="mn-near-item" key={nm.name}>
                    <span className="mn-near-modal">✕ {nm.name}</span>
                    <MdInline className="muted" text={t(nm.why)} />
                  </p>
                ))}
              </div>
            )}
            <button type="button" className="ttl-btn tc-reset" onClick={reset}>
              ↺ {t({ en: 'Start over', uk: 'Почати заново' })}
            </button>
          </>
        ) : (
          <p className="mn-why muted">
            {t({
              en: 'Answer the three questions above — the verdict appears here, with the near-miss traps.',
              uk: 'Дайте відповіді на три питання вище — тут зʼявиться вердикт із сусідніми пастками.',
            })}
          </p>
        )}
      </div>
    </div>
  );
}
