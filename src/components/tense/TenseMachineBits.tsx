// CHANGED (TM1+TM2): shared presentational bits of ★ The Tense Machine (#/tenses). They live in
// components/tense/ (NOT sims/ or figures/) because smoke.ts asserts those two dirs 1:1 against
// registry keys — the same reason TenseTimeline's core lives here (T2 note). MiniTimeline redraws
// the sims' shared notation (● 〜 ⤺ 〜⤺, NOW axis, X reference point) with the exact geometry of
// the TenseNavigator/SentenceMorpher originals, so the Machine reads as one system with the m6
// sims; the sims themselves stay untouched (spec §5 — two lenses, same SSOT).
import { Fragment } from 'react';
import { useLang } from '../../i18n/lang';
import { ui } from '../../i18n/ui';
import type { Conjugation } from '../../lib/conjugator';
import { TIME_COLOR_VAR } from '../../lib/tenses';
import type { Aspect, TenseTime } from '../../lib/tenses';
import { useTts } from '../../lib/tts';
import { cx } from '../../lib/utils';

/** Mini-timeline in the shared notation — same geometry as the m6 sims' (decorative). */
export function MiniTimeline({ time, aspect }: { time: TenseTime; aspect: Aspect }) {
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
          <path d={`M ${x - 8} ${y - 10} Q ${(x + backX) / 2} ${y - 26} ${backX + 4} ${y - 10}`} fill="none" stroke={color} strokeWidth="1.75" />
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

/** One live sentence, token by token: auxiliaries tinted by the TIME hue, the head form
 *  underlined (the aspect machinery), `not` flagged, the complement muted. Real spaces between
 *  tokens keep the text selectable/wrappable; `title` carries the assembled sentence (it also
 *  makes the engine output greppable in SSR markup — the smoke canaries rely on that).
 *  CHANGED (TM3): glue-aware — a clitic token (’ll ’s …) joins the previous one with no space,
 *  so the short render reads “She’ll write code.” while the clitic keeps its aux tint. */
export function SentenceTokens({ conj, color }: { conj: Conjugation; color: string }) {
  return (
    <span className="tm-sent" title={conj.full}>
      {conj.tokens.map((tok, i) => (
        <Fragment key={`${i}-${tok.text}`}>
          {i > 0 && !tok.glue && ' '}
          <span
            className={cx('tm-tok', `tm-tok--${tok.kind}`)}
            style={tok.kind === 'aux' ? { color } : tok.kind === 'head' ? { borderColor: color } : undefined}
          >
            {tok.text}
          </span>
        </Fragment>
      ))}
      <span className="tm-tok tm-tok--end">{conj.full.endsWith('?') ? '?' : '.'}</span>
    </span>
  );
}

/** TTS button — the house pattern the sims use (feature-detected, keyboard-operable). */
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
