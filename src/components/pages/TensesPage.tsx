// CHANGED (TM1+TM2): ★ The Tense Machine — the standalone home of the whole tense system at
// #/tenses (spec: TENSE-MACHINE-SPEC.md). One page, three ways in: the WALL (all 12 time × aspect
// cells alive at once, every sentence produced live by lib/conjugator for the chosen verb /
// subject / polarity), the EMULATION layer (a draggable event on the master time axis, aspect
// glyphs, and a 12-step aspect-major Tour — withheld under prefers-reduced-motion), and the
// DECIDE tab (the existing m11 ★ Tense Chooser embedded as-is — two lenses, same SSOT; the sims
// in m6/m11 stay untouched). Deep-links: #/tenses/<time>/<aspect>?v=<verb>&s=<subject>&p=<+−?>,
// written via history.replaceState (no history spam) and restored on load with invalid values
// falling back to defaults. A11y mirrors the m6 sims: every control is a labelled radiogroup (or
// a native select) with arrow-key stepping, the detail panel is a polite live region, SVGs are
// decorative — the axis drag is a pointer-only enhancement bound to the SAME state as the time
// radiogroup. SSR-safe: renders the default state (present × simple · write · she · aff); no
// window access at module scope (the Morpher precedent).
import { Suspense, lazy, useEffect, useId, useMemo, useRef, useState } from 'react';
import { MACHINE_VERBS, getMachineVerb } from '../../data/tenseMachine';
import { useLang } from '../../i18n/lang';
// CHANGED (TM3): + the contractions toggle (CONJ_STYLES) — an engine style, not a UI patch.
import { CONJ_STYLES, MACHINE_SUBJECTS, POLARITIES, POLARITY_SIGN } from '../../lib/conjugator';
import type { ConjStyle, MachineSubject, Polarity } from '../../lib/conjugator';
import { hrefModule, hrefPractice } from '../../lib/hashRouter';
import {
  ASPECTS,
  ASPECT_GLYPH,
  ASPECT_LABEL,
  ASPECT_MEANING,
  TENSE_TIMES,
  TIME_COLOR_VAR,
  TIME_LABEL,
  TIME_SOFT_VAR,
} from '../../lib/tenses';
import type { Aspect, TenseTime } from '../../lib/tenses';
import { cx } from '../../lib/utils';
import { TenseCellDetail } from '../tense/TenseCellDetail';
import { TenseSatellites } from '../tense/TenseSatellites'; // CHANGED (TM3)
import { TenseWall } from '../tense/TenseWall';

const TenseChooser = lazy(() => import('../sims/TenseChooser').then((m) => ({ default: m.TenseChooser })));

/** The Tour walk — aspect-major, the Morpher's teaching order (● past→present→future, then 〜 ⤺ 〜⤺). */
const TOUR: { time: TenseTime; aspect: Aspect }[] = ASPECTS.flatMap((a) =>
  TENSE_TIMES.map((time) => ({ time, aspect: a })),
);
const tourIndex = (time: TenseTime, aspect: Aspect): number =>
  TOUR.findIndex((s) => s.time === time && s.aspect === aspect);

type EmuParams = { v?: string; s?: MachineSubject; p?: Polarity; f?: ConjStyle };

/** Restore the emulator share-state from the hash query; invalid values silently fall back.
 *  CHANGED (TM3): + `f` — the forms style ('full' | 'short'), so a listening-practice link
 *  can share the contracted render. */
function readEmuParams(): EmuParams {
  if (typeof window === 'undefined') return {};
  const q = String(window.location?.hash ?? '').split('?')[1];
  if (!q) return {};
  const sp = new URLSearchParams(q);
  const v = sp.get('v') ?? undefined;
  const s = sp.get('s') ?? undefined;
  const p = sp.get('p') ?? undefined;
  const f = sp.get('f') ?? undefined;
  return {
    v: v && getMachineVerb(v) ? v : undefined,
    s: s && (MACHINE_SUBJECTS as readonly string[]).includes(s) ? (s as MachineSubject) : undefined,
    p: p && (POLARITIES as readonly string[]).includes(p) ? (p as Polarity) : undefined,
    f: f && (CONJ_STYLES as readonly string[]).includes(f) ? (f as ConjStyle) : undefined,
  };
}

/** The master time axis — decorative-but-draggable: pointer input binds to the SAME state as the
 *  time radiogroup below it (which stays the canonical, keyboard-operable control). */
function MachineAxis({ time, aspect, onTime }: { time: TenseTime; aspect: Aspect; onTime: (tm: TenseTime) => void }) {
  const { t } = useLang();
  const dragging = useRef(false);
  const X: Record<TenseTime, number> = { past: 110, present: 320, future: 530 };
  const x = X[time];
  const y = 42;
  const color = TIME_COLOR_VAR[time];
  const pick = (clientX: number, el: SVGSVGElement) => {
    const r = el.getBoundingClientRect();
    if (r.width === 0) return;
    const vx = ((clientX - r.left) / r.width) * 640;
    onTime(vx < 215 ? 'past' : vx < 425 ? 'present' : 'future');
  };
  return (
    <svg
      className="tm-axis"
      viewBox="0 0 640 86"
      aria-hidden="true"
      focusable="false"
      onPointerDown={(e) => {
        dragging.current = true;
        e.currentTarget.setPointerCapture?.(e.pointerId);
        pick(e.clientX, e.currentTarget);
      }}
      onPointerMove={(e) => {
        if (dragging.current) pick(e.clientX, e.currentTarget);
      }}
      onPointerUp={() => {
        dragging.current = false;
      }}
      onPointerLeave={() => {
        dragging.current = false;
      }}
    >
      <line x1="16" y1={y} x2="618" y2={y} stroke="var(--line2)" strokeWidth="2" />
      <path d={`M 630 ${y} l -11 -5.5 v 11 z`} fill="var(--line2)" />
      <line x1="320" y1="14" x2="320" y2="70" stroke="var(--tx3)" strokeWidth="1.5" strokeDasharray="4 4" />
      <text x="320" y="10" textAnchor="middle" fill="var(--tx3)" fontSize="9" fontFamily="var(--font-mono)">
        NOW
      </text>
      {TENSE_TIMES.map((tm) => (
        <text
          key={tm}
          x={X[tm]}
          y={82}
          textAnchor="middle"
          fontSize="10"
          fontWeight={tm === time ? 700 : 400}
          fill={tm === time ? TIME_COLOR_VAR[tm] : 'var(--tx3)'}
        >
          {t(TIME_LABEL[tm])}
        </text>
      ))}
      <circle cx={x} cy={y} r="12" fill={color} opacity="0.2" />
      <circle className="tm-axis-token" cx={x} cy={y} r="6.5" fill={color} />
      <text x={x} y={y - 17} textAnchor="middle" fontSize="14" fill={color}>
        {ASPECT_GLYPH[aspect]}
      </text>
    </svg>
  );
}

export function TensesPage({ time: routeTime, aspect: routeAspect }: { time?: TenseTime; aspect?: Aspect }) {
  const { t } = useLang();
  const ids = useId();
  const [tab, setTab] = useState<'machine' | 'decide'>('machine');
  const [time, setTime] = useState<TenseTime>(routeTime ?? 'present');
  const [aspect, setAspect] = useState<Aspect>(routeAspect ?? 'simple');
  const emu = useMemo(readEmuParams, []);
  const [verbId, setVerbId] = useState<string>(emu.v ?? 'write');
  const [subject, setSubject] = useState<MachineSubject>(emu.s ?? 'she');
  const [polarity, setPolarity] = useState<Polarity>(emu.p ?? 'aff');
  const [style, setStyle] = useState<ConjStyle>(emu.f ?? 'full'); // CHANGED (TM3)
  const [playing, setPlaying] = useState(false);
  const [reduced, setReduced] = useState(false);

  const verb = getMachineVerb(verbId) ?? MACHINE_VERBS[0];
  const step = tourIndex(time, aspect);

  // A deep-link navigation (#/tenses/<time>/<aspect>) selects that cell; a bare #/tenses keeps state.
  useEffect(() => {
    if (routeTime) setTime(routeTime);
    if (routeAspect) setAspect(routeAspect);
  }, [routeTime, routeAspect]);

  // Client-only: honor prefers-reduced-motion (SSR shim reports matches:false → Tour hidden there anyway).
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  // The Tour advances one cell at a time and stops at the last (the Morpher cadence).
  useEffect(() => {
    if (!playing) return;
    if (step >= TOUR.length - 1) {
      setPlaying(false);
      return;
    }
    const id = setTimeout(() => {
      const next = TOUR[step + 1];
      setTime(next.time);
      setAspect(next.aspect);
    }, 2400);
    return () => clearTimeout(id);
  }, [playing, step]);

  // Share-URL: keep the hash in sync (replaceState — no history spam, no hashchange loop).
  // CHANGED (TM3): + the forms style, so contracted-mode links round-trip.
  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.history?.replaceState !== 'function') return;
    const next = `#/tenses/${time}/${aspect}?v=${verbId}&s=${subject}&p=${polarity}&f=${style}`;
    if (window.location.hash !== next) window.history.replaceState(null, '', next);
  }, [time, aspect, verbId, subject, polarity, style]);

  const select = (tm: TenseTime, a: Aspect) => {
    setPlaying(false);
    setTime(tm);
    setAspect(a);
  };
  const gotoStep = (i: number) => {
    const s = TOUR[Math.max(0, Math.min(TOUR.length - 1, i))];
    select(s.time, s.aspect);
  };
  const togglePlay = () => {
    if (playing) {
      setPlaying(false);
      return;
    }
    if (step >= TOUR.length - 1) {
      setTime(TOUR[0].time);
      setAspect(TOUR[0].aspect);
    }
    setPlaying(true);
  };
  const keyCycle =
    <T,>(items: readonly T[], cur: T, set: (v: T) => void) =>
    (e: React.KeyboardEvent) => {
      const i = items.indexOf(cur);
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        set(items[(i + 1) % items.length]);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        set(items[(i - 1 + items.length) % items.length]);
      }
    };

  return (
    <div className="content tm-page">
      <section className="tm-hero">
        <h1 className="tm-title">★ The Tense Machine</h1>
        <p className="tm-lede muted">
          {t({
            en: 'Touch every tense — live. Pick a verb, a subject and a polarity: all 12 cells rebuild as you watch. Drag the event along the time axis, or take the 12-step tour.',
            uk: 'Торкніться кожного tense — наживо. Оберіть дієслово, підмет і полярність: усі 12 клітинок перебудуються на ваших очах. Тягніть подію віссю часу або пройдіть тур на 12 кроків.',
          })}
        </p>
        <p className="tm-ctas">
          <a className="chip" href={hrefModule('m6-tense-system')}>
            ✈️ {t({ en: 'The course: The Tense System (m6)', uk: 'Курс: The Tense System (m6)' })}
          </a>
          <a className="chip" href={hrefPractice()}>
            ✍️ {t({ en: 'Drill tenses', uk: 'Тренувати tenses' })}
          </a>
        </p>
        <div className="tm-tabs" role="radiogroup" aria-label={t({ en: 'Mode', uk: 'Режим' })}>
          {(['machine', 'decide'] as const).map((tb) => (
            <button
              key={tb}
              type="button"
              role="radio"
              aria-checked={tab === tb}
              tabIndex={tab === tb ? 0 : -1}
              className={cx('tm-tab', tab === tb && 'on')}
              onClick={() => setTab(tb)}
              onKeyDown={keyCycle(['machine', 'decide'] as const, tab, setTab)}
            >
              {tb === 'machine'
                ? `⚙ ${t({ en: 'Machine', uk: 'Machine' })}`
                : `🧭 ${t({ en: 'Decide — which tense?', uk: 'Decide — який tense?' })}`}
            </button>
          ))}
        </div>
      </section>

      {tab === 'decide' ? (
        <section className="tm-decide">
          <p className="muted">
            {t({
              en: 'The same ★ Tense Chooser that lives in m11 — answer three meaning questions, get the tense (two lenses, same data).',
              uk: 'Той самий ★ Tense Chooser, що живе в m11 — три питання про зміст, і ви отримуєте tense (дві лінзи, ті самі дані).',
            })}
          </p>
          <Suspense fallback={<div className="muted" style={{ padding: '1.5rem' }}>Loading…</div>}>
            <TenseChooser />
          </Suspense>
          <p className="tm-decide-note">
            <a className="chip" href={hrefModule('m11-choosing-narrative')}>
              📘 {t({ en: 'Its home: Choosing Tenses & Narrative (m11)', uk: 'Його дім: Choosing Tenses & Narrative (m11)' })}
            </a>
          </p>
        </section>
      ) : (
        <>
          <section className="tm-controls" aria-label={t({ en: 'Sentence emulator', uk: 'Емулятор речення' })}>
            <div className="tm-control">
              <label className="mn-col-label" htmlFor={`${ids}-verb`}>
                {t({ en: 'Verb', uk: 'Дієслово' })}
              </label>
              <select id={`${ids}-verb`} className="tm-select" value={verbId} onChange={(e) => setVerbId(e.target.value)}>
                {MACHINE_VERBS.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.base} · {t(v.gloss)}
                  </option>
                ))}
              </select>
            </div>
            <div className="tm-control">
              <p className="mn-col-label" id={`${ids}-subj`}>
                {t({ en: 'Subject', uk: 'Підмет' })}
              </p>
              <div className="mn-times tm-pills" role="radiogroup" aria-labelledby={`${ids}-subj`}>
                {MACHINE_SUBJECTS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    role="radio"
                    aria-checked={subject === s}
                    tabIndex={subject === s ? 0 : -1}
                    className={cx('mn-time tm-pill', subject === s && 'on')}
                    onClick={() => setSubject(s)}
                    onKeyDown={keyCycle(MACHINE_SUBJECTS, subject, setSubject)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div className="tm-control">
              <p className="mn-col-label" id={`${ids}-pol`}>
                {t({ en: 'Polarity', uk: 'Полярність' })}
              </p>
              <div className="mn-times tm-pills" role="radiogroup" aria-labelledby={`${ids}-pol`}>
                {POLARITIES.map((p) => (
                  <button
                    key={p}
                    type="button"
                    role="radio"
                    aria-checked={polarity === p}
                    tabIndex={polarity === p ? 0 : -1}
                    className={cx('mn-time tm-pill tm-pill--sign', polarity === p && 'on')}
                    onClick={() => setPolarity(p)}
                    onKeyDown={keyCycle(POLARITIES, polarity, setPolarity)}
                    title={p === 'aff' ? t({ en: 'affirmative', uk: 'стверджувальна' }) : p === 'neg' ? t({ en: 'negative', uk: 'заперечна' }) : t({ en: 'question', uk: 'питальна' })}
                  >
                    {POLARITY_SIGN[p]}
                  </button>
                ))}
              </div>
            </div>
            {/* CHANGED (TM3): the contractions toggle — an engine render style (conjugate()'s
                `style` arg), golden-tested in both positions; questions never contract. */}
            <div className="tm-control">
              <p className="mn-col-label" id={`${ids}-forms`}>
                {t({ en: 'Forms', uk: 'Форми' })}
              </p>
              <div className="mn-times tm-pills" role="radiogroup" aria-labelledby={`${ids}-forms`}>
                {CONJ_STYLES.map((f) => (
                  <button
                    key={f}
                    type="button"
                    role="radio"
                    aria-checked={style === f}
                    tabIndex={style === f ? 0 : -1}
                    className={cx('mn-time tm-pill', style === f && 'on')}
                    onClick={() => setStyle(f)}
                    onKeyDown={keyCycle(CONJ_STYLES, style, setStyle)}
                    title={
                      f === 'full'
                        ? t({ en: 'the full machinery: do not / will not', uk: 'повна механіка: do not / will not' })
                        : t({ en: 'natural speech: don’t / won’t / she’s', uk: 'природне мовлення: don’t / won’t / she’s' })
                    }
                  >
                    {f === 'full'
                      ? t({ en: 'full · do not', uk: 'повні · do not' })
                      : t({ en: 'short · don’t', uk: 'скорочені · don’t' })}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="tm-axis-card">
            <MachineAxis time={time} aspect={aspect} onTime={(tm) => select(tm, aspect)} />
            <div className="tm-axis-row">
              <div className="mn-times tn-times" role="radiogroup" aria-label={t({ en: 'Time — the hue', uk: 'Час — колір' })}>
                {TENSE_TIMES.map((tm) => (
                  <button
                    key={tm}
                    type="button"
                    role="radio"
                    aria-checked={time === tm}
                    tabIndex={time === tm ? 0 : -1}
                    className="mn-time tn-time"
                    data-time={tm}
                    style={time === tm ? { borderColor: TIME_COLOR_VAR[tm], background: TIME_SOFT_VAR[tm] } : undefined}
                    onClick={() => select(tm, aspect)}
                    onKeyDown={keyCycle(TENSE_TIMES, time, (v) => select(v, aspect))}
                  >
                    <span className="tn-dot" style={{ background: TIME_COLOR_VAR[tm] }} aria-hidden="true" />
                    {t(TIME_LABEL[tm])}
                  </button>
                ))}
              </div>
              <div className="mn-times tn-aspects" role="radiogroup" aria-label={t({ en: 'Aspect — the glyph', uk: 'Aspect — гліф' })}>
                {ASPECTS.map((a) => (
                  <button
                    key={a}
                    type="button"
                    role="radio"
                    aria-checked={aspect === a}
                    tabIndex={aspect === a ? 0 : -1}
                    className="mn-time tn-aspect"
                    onClick={() => select(time, a)}
                    onKeyDown={keyCycle(ASPECTS, aspect, (v) => select(time, v))}
                    title={t(ASPECT_MEANING[a])}
                  >
                    <span className="tn-glyph" aria-hidden="true">
                      {ASPECT_GLYPH[a]}
                    </span>
                    {t(ASPECT_LABEL[a])}
                  </button>
                ))}
              </div>
              <div className="ttl-controls tm-tour" role="group" aria-label={t({ en: 'The 12-step tour', uk: 'Тур на 12 кроків' })}>
                <button type="button" className="ttl-btn" onClick={() => gotoStep(step - 1)} disabled={step === 0} aria-label={t({ en: 'Step back', uk: 'Крок назад' })}>
                  <span aria-hidden="true">◀</span>
                </button>
                {!reduced && (
                  <button
                    type="button"
                    className={cx('ttl-btn', 'ttl-btn--play', playing && 'on')}
                    onClick={togglePlay}
                    aria-label={playing ? t({ en: 'Pause the tour', uk: 'Пауза туру' }) : t({ en: 'Play the 12-step tour', uk: 'Запустити тур на 12 кроків' })}
                  >
                    <span aria-hidden="true">{playing ? '⏸' : '▶'}</span>
                  </button>
                )}
                <button type="button" className="ttl-btn" onClick={() => gotoStep(step + 1)} disabled={step === TOUR.length - 1} aria-label={t({ en: 'Step forward', uk: 'Крок уперед' })}>
                  <span aria-hidden="true">▶</span>
                </button>
                <button type="button" className="ttl-btn" onClick={() => gotoStep(0)} disabled={step === 0} aria-label={t({ en: 'Reset', uk: 'Спочатку' })}>
                  <span aria-hidden="true">↺</span>
                </button>
                <span className="ttl-count mono" aria-hidden="true">
                  {step + 1} / {TOUR.length}
                </span>
              </div>
            </div>
          </section>

          <TenseWall time={time} aspect={aspect} verb={verb} subject={subject} polarity={polarity} style={style} onSelect={select} />

          {/* CHANGED (TM3): the satellites row — chips under their Wall time column (spec §4.4). */}
          <TenseSatellites />

          <TenseCellDetail time={time} aspect={aspect} verb={verb} subject={subject} style={style} />
        </>
      )}
    </div>
  );
}
