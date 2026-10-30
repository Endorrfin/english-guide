// CHANGED (A4): ★ Register Dial — m29's sim (Section V TokenMorph family). DIAL track: one message on four
// stops (chat → email → report → official). Words swap, contractions open up and structures rebuild:
// a mandative subjunctive (It is essential that the deployment be postponed) or a conditional inversion
// (Should you require…) at the official stop. The needle is placed by the SCORE the engine computes from
// the markers it finds (listed as ± chips); the BrE chip (should + base) is built by the engine wherever
// a mandative subjunctive appears. TRAPS track: four register mismatches (a legal notice in Slack,
// is notified after essential that, «Pursuant to …, we’re gonna …», chat style in a policy) walk to two
// fixes each, judged against the message's declared context. Engine: src/lib/register.ts; content:
// src/data/registerDial.ts.
// A11y: radiogroups with roving tabindex; the gauge is aria-hidden and its score, band and verdict are
// mirrored in the polite live region. Reduced motion: no auto-play, no flight, the needle jumps.
import { useState } from 'react';
import { useLang } from '../../i18n/lang';
import {
  BAND_MIN, ISSUE_TEXT, MARKER_LABEL, MARKER_WEIGHT, RD_TRACKS, STOPS, STOP_LABEL, STOP_NOTE, TRAP_LABEL,
  bandOf, breVariant, diagnose, diagnoseIn, markersOf, scenariosOf, scoreOf, tokensOf,
} from '../../lib/register';
import type { Marker, RdIssue, RdTrack, Stop, TrapKind } from '../../lib/register';
import { usePlayback, useReducedMotion } from '../../lib/motion';
import { textOf } from '../../lib/tokenMorph';
import { cx } from '../../lib/utils';
import type { Localized } from '../../data/types';
import { TokenMorph } from '../motion/TokenMorph';
import { MorphControls, Radios, SpeakButton } from '../motion/MorphBits';

const TRACK_LABEL: Record<RdTrack, Localized> = {
  dial: { en: 'One message, four registers', uk: 'Одне повідомлення, чотири регістри' },
  traps: { en: 'Fix the mismatches', uk: 'Виправити невідповідності' },
};

function verdictText(issues: RdIssue[]): Localized {
  if (issues.length === 0) return { en: '✓ One register, and it fits.', uk: '✓ Один регістр, і він доречний.' };
  return {
    en: issues.map((i) => `✕ ${ISSUE_TEXT[i].en}`).join(' '),
    uk: issues.map((i) => `✕ ${ISSUE_TEXT[i].uk}`).join(' '),
  };
}

// The gauge: a half circle from −6 (left) to +8 (right); band edges sit halfway between integer scores.
const MIN = -6;
const MAX = 8;
const angleOf = (s: number) => 180 - ((Math.max(MIN, Math.min(MAX, s)) - MIN) / (MAX - MIN)) * 180;
const polar = (deg: number, r: number) => {
  const rad = (deg * Math.PI) / 180;
  return { x: 100 + r * Math.cos(rad), y: 100 - r * Math.sin(rad) };
};
function arc(a0: number, a1: number, r: number): string {
  const p0 = polar(a0, r);
  const p1 = polar(a1, r);
  return `M ${p0.x.toFixed(2)} ${p0.y.toFixed(2)} A ${r} ${r} 0 0 1 ${p1.x.toFixed(2)} ${p1.y.toFixed(2)}`;
}

function Gauge({ score, band, reduced }: { score: number; band: Stop; reduced: boolean }) {
  const { t } = useLang();
  const edges = STOPS.map((s) => (s === 'chat' ? MIN : BAND_MIN[s] - 0.5));
  return (
    <svg className="rd-gauge" viewBox="0 0 200 116" aria-hidden="true">
      {STOPS.map((s, i) => {
        const from = angleOf(edges[i]);
        const to = angleOf(i + 1 < STOPS.length ? edges[i + 1] : MAX);
        const mid = polar((from + to) / 2, 64);
        return (
          <g key={s}>
            <path d={arc(from, to, 84)} className={cx('rd-band', `rd-band--${s}`, s === band && 'on')} />
            <text x={mid.x} y={mid.y} className={cx('rd-band-label', s === band && 'on')} textAnchor="middle" dominantBaseline="middle">
              {t(STOP_LABEL[s])}
            </text>
          </g>
        );
      })}
      <g className={cx('rd-needle', reduced && 'rd-needle--still')} style={{ transform: `rotate(${90 - angleOf(score)}deg)` }}>
        <line x1="100" y1="100" x2="100" y2="30" />
      </g>
      <circle cx="100" cy="100" r="5" className="rd-hub" />
    </svg>
  );
}

function MarkerChips({ markers }: { markers: Marker[] }) {
  const { t } = useLang();
  if (markers.length === 0) return <p className="rd-none muted">{t({ en: 'No register markers: a neutral sentence.', uk: 'Маркерів регістру немає: нейтральне речення.' })}</p>;
  return (
    <ul className="rd-markers">
      {markers.map((m, i) => {
        const w = MARKER_WEIGHT[m.kind];
        return (
          <li key={i} className={cx('rd-marker', w > 0 ? 'rd-marker--up' : 'rd-marker--down')}>
            <span className="rd-w">{w > 0 ? `+${w}` : `−${-w}`}</span>
            <span className="rd-kind">{t(MARKER_LABEL[m.kind])}</span>
            <span className="rd-text">{m.text}</span>
          </li>
        );
      })}
    </ul>
  );
}

export function RegisterDial() {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const [track, setTrackState] = useState<RdTrack>('dial');
  const [scenId, setScenId] = useState<string>(scenariosOf('dial')[0].id);

  const scenarios = scenariosOf(track);
  const sc = scenarios.find((s) => s.id === scenId) ?? scenarios[0];
  const last = sc.frames.length - 1;
  const pb = usePlayback(last, 2300, last);
  const step = Math.min(pb.step, last);
  const frame = sc.frames[step];
  const tokens = tokensOf(frame);
  const markers = markersOf(tokens);
  const score = scoreOf(markers);
  const band = bandOf(score);
  const issues = track === 'traps' && sc.context ? diagnoseIn(tokens, sc.context) : diagnose(tokens, markers);
  const bre = breVariant(tokens);
  const labels: Localized[] = track === 'traps' ? (['error', 'fix1', 'fix2'] as TrapKind[]).map((k) => TRAP_LABEL[k]) : STOPS.map((s) => STOP_LABEL[s]);

  const setTrack = (tr: RdTrack) => {
    setTrackState(tr);
    setScenId(scenariosOf(tr)[0].id);
    pb.replay(reduced);
  };
  const setScen = (id: string) => {
    setScenId(id);
    pb.replay(reduced);
  };
  const scoreText = `${score > 0 ? '+' : score < 0 ? '−' : ''}${Math.abs(score)}`;

  return (
    <div className="mn cm adv rd" role="group" aria-label="Register Dial">
      <div className="mn-head">
        <span className="mn-title">★ Register Dial</span>
        <span className="mn-sub">
          {t({
            en: 'Turn one message from a Slack line into an official notice: words swap, contractions open up, the structure rebuilds, and the needle follows the markers the engine counts.',
            uk: 'Перетворіть одне повідомлення з рядка в Slack на офіційне: слова замінюються, скорочення розгортаються, структура перебудовується, а стрілка йде за маркерами, які рахує рушій.',
          })}
        </span>
      </div>

      <div className="mn-grid">
        <div>
          <Radios label={t({ en: 'Track', uk: 'Режим' })} items={RD_TRACKS} value={track} onPick={setTrack} render={(x) => t(TRACK_LABEL[x])} />
          <Radios
            label={t({ en: 'Message', uk: 'Повідомлення' })}
            items={scenarios.map((s) => s.id)}
            value={sc.id}
            onPick={setScen}
            render={(id) => t(scenarios.find((s) => s.id === id)!.title)}
          />
          {track === 'traps' && sc.context && (
            <p className="rd-context">
              <span className="mn-col-label">{t({ en: 'Where it is going', uk: 'Куди йде' })}</span>
              <span className="rd-context-stop">{t(STOP_LABEL[sc.context])}</span>
              <span className="muted">{t(STOP_NOTE[sc.context])}</span>
            </p>
          )}
        </div>

        <div className="mn-result">
          <p className="sr-only" aria-live="polite">
            {`${t(labels[step])}: ${textOf(tokens)} ${t({ en: 'Score', uk: 'Бал' })} ${scoreText} → ${t(STOP_LABEL[band])}. ${t(verdictText(issues))}`}
          </p>
          <div className="mn-answer-row">
            <span className="mn-modal cm-type">{t(labels[step])}</span>
          </div>
          <p className="tkm-line">
            {/* Highlight what changed from the PREVIOUS stop (the frame itself on stop 1), so switching
                message or track never lights up every word (the A3 "extra highlight" lesson). */}
            <TokenMorph tokens={tokens} reduced={reduced} baseline={tokensOf(sc.frames[Math.max(0, step - 1)])} />{' '}
            <SpeakButton text={textOf(tokens)} />
          </p>
          <p className="mn-example-uk tkm-uk">{frame.uk}</p>
          {bre && (
            <p className="at-variant">
              <span className="at-variant-tag">BrE</span>
              <span>{bre}</span>
              <span className="muted">{t({ en: '— British English often uses should + base here.', uk: '— британська англійська тут часто вживає should + базова форма.' })}</span>
            </p>
          )}
          <div className={cx('rd-scene', issues.length ? 'rd-scene--bad' : 'rd-scene--ok')}>
            <div className="rd-top">
              <Gauge score={score} band={band} reduced={reduced} />
              <p className="rd-score">
                <span className="rd-score-n">{scoreText}</span>
                <span>{t(STOP_LABEL[band])}</span>
                <span className="muted">{t(STOP_NOTE[band])}</span>
              </p>
            </div>
            <MarkerChips markers={markers} />
            <p className="rd-verdict">{t(verdictText(issues))}</p>
          </div>
          <MorphControls pb={pb} labels={labels} reduced={reduced} />
          {track === 'traps' && sc.why && (
            <div className="mn-near">
              <p className="mn-col-label">{t({ en: 'Why UA speakers write it', uk: 'Чому україномовні так пишуть' })}</p>
              <p className="cm-trap">
                <span className="muted">{t(sc.why)}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
