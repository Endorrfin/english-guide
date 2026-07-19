// CHANGED (T2): the parametric TenseTimeline figure core (CLAUDE.md §6) — ONE component, per-zone
// data, play/step. It supersedes the old standalone `tense-timeline` sim and is the signature visual
// of Section II modules m7–m10: each zone contrasts the two aspects of one time on the SHARED
// notation (lib/tenses.ts / m6): TIME = hue (--time-past rose · --time-present cyan · --time-future
// violet), ● Simple = a whole fact, 〜 Continuous = a process, dashed vertical line = NOW. A small
// stepper reveals the aspects one beat at a time with a bilingual narration; ▶ auto-plays.
//
// This core lives OUTSIDE src/components/figures/ on purpose: smoke.ts asserts
// (figure .tsx files) === (figure registry keys), so the per-zone entries are thin one-export
// wrapper files in figures/ (TenseTimelinePresent.tsx, TenseTimelinePast.tsx) that render this.
// A11y: the SVG is decorative (aria-hidden) — the meaning lives in the DOM legend + an aria-live
// narration line. Reduced-motion: auto-play is withheld; stepping is instant, so it stays usable.
// SSR-safe: effects never run on the server, so it renders beat 0 (both lane names present for the
// smoke canaries). Bilingual strings inline, as in every other figure (AbilityTimeline, …).
import { useEffect, useId, useState } from 'react';
import type { Localized } from '../../data/types';
import { useLang } from '../../i18n/lang';
import { cx } from '../../lib/utils';

// CHANGED (T3): zones extended to future + perfect (m9, m10). The perfect zone is not "two aspects
// of one time" like the others — it contrasts Present Perfect ⤺ vs Past Simple ● (the flagship line
// of m10): one past event, shown twice, differing only in whether an arrow links it forward to NOW.
type Zone = 'present' | 'past' | 'future' | 'perfect';
type AspectKind = 'simple' | 'continuous' | 'perfect';

type Mark =
  | { kind: 'dot'; x: number }
  | { kind: 'wave'; cx: number; hw: number }
  | { kind: 'tick'; x: number } // an interrupting event that cuts into a background process
  // CHANGED (T3): the ⤺ perfect link — a past dot at `from` with an arc reaching forward to `to`
  // (the reference point, e.g. NOW). This is the visual heart of the perfect aspect (m10).
  | { kind: 'link'; from: number; to: number };

type Lane = {
  aspect: AspectKind;
  glyph: string;      // ● or 〜 — from the shared TenseGlyphs vocabulary
  name: string;       // 'Present Simple' — grammar terms stay English in both languages
  gloss: Localized;   // what this aspect claims
  example: Localized; // .en = the studied sentence (US English), .uk = its translation
  revealAt: number;   // the beat at which this lane switches from dim to active
  marks: Mark[];
};

type ZoneSpec = {
  colorVar: string;   // the time hue
  nowX: number;       // x of the NOW axis in the 620-wide viewBox
  lanes: [Lane, Lane];
  beats: Localized[]; // narration per beat (beat 0 = empty axis; last = the contrast takeaway)
};

const VB_W = 620;
const SIMPLE_Y = 82;
const CONT_Y = 176;
const AXIS_X0 = 42;
const AXIS_X1 = 582;
const LAST = 3; // beats 0..3

/** A wave of alternating bumps across [cx-hw, cx+hw] — the 〜 "process" glyph, drawn large. */
function wavePath(cx0: number, hw: number, y: number): string {
  const step = 13;
  const n = Math.max(3, Math.round((hw * 2) / step));
  let d = `M ${cx0 - hw} ${y} q ${step / 2} -8 ${step} 0`;
  for (let i = 1; i < n; i++) d += ` t ${step} 0`;
  return d;
}

const SPECS: Record<Zone, ZoneSpec> = {
  present: {
    colorVar: 'var(--time-present)',
    nowX: 312,
    lanes: [
      {
        aspect: 'simple',
        glyph: '●',
        name: 'Present Simple',
        gloss: {
          en: 'a general truth or habit — true across time, not only at this moment',
          uk: 'загальна істина або звичка — чинна в часі, а не лише цієї миті',
        },
        example: { en: 'She works from home on Fridays.', uk: 'По пʼятницях вона працює з дому.' },
        revealAt: 1,
        marks: [
          { kind: 'dot', x: 96 },
          { kind: 'dot', x: 168 },
          { kind: 'dot', x: 240 },
          { kind: 'dot', x: 312 },
          { kind: 'dot', x: 384 },
          { kind: 'dot', x: 456 },
          { kind: 'dot', x: 528 },
        ],
      },
      {
        aspect: 'continuous',
        glyph: '〜',
        name: 'Present Continuous',
        gloss: {
          en: 'a process in progress around now — started, not finished, temporary',
          uk: 'процес у розгортанні довкола «зараз» — почався, не завершився, тимчасовий',
        },
        example: { en: "She's working on the report right now.", uk: 'Саме зараз вона працює над звітом.' },
        revealAt: 2,
        marks: [{ kind: 'wave', cx: 312, hw: 104 }],
      },
    ],
    beats: [
      {
        en: 'One timeline, two present tenses. The dashed line is NOW — the moment of speaking.',
        uk: 'Один таймлайн, два теперішні tenses. Пунктир — це NOW, момент мовлення.',
      },
      {
        en: '● Present Simple: dots along the whole line — a fact or habit that is generally true, not tied to this instant. “She works from home.”',
        uk: '● Present Simple: крапки по всій лінії — факт чи звичка, що чинні взагалі, а не цієї миті. «She works from home.»',
      },
      {
        en: '〜 Present Continuous: a wave wrapped around NOW — a process in progress this very moment. “She’s working right now.”',
        uk: '〜 Present Continuous: хвиля довкола NOW — процес у розгортанні саме цієї миті. «She’s working right now.»',
      },
      {
        en: 'Same verb, two claims: the whole habit ● vs the live process at NOW 〜. Ukrainian uses one present for both — English makes you choose.',
        uk: 'Те саме дієслово, два твердження: ціла звичка ● vs живий процес у NOW 〜. Українська має один теперішній на обидва — англійська змушує обирати.',
      },
    ],
  },
  past: {
    colorVar: 'var(--time-past)',
    nowX: 520,
    lanes: [
      {
        aspect: 'simple',
        glyph: '●',
        name: 'Past Simple',
        gloss: {
          en: 'a whole, finished event at a known point in the past',
          uk: 'ціла завершена подія у відомій точці минулого',
        },
        example: { en: 'The alert fired at 2 a.m.', uk: 'Алерт спрацював о 2:00.' },
        revealAt: 1,
        marks: [{ kind: 'dot', x: 250 }],
      },
      {
        aspect: 'continuous',
        glyph: '〜',
        name: 'Past Continuous',
        gloss: {
          en: 'a process already in progress — the background a shorter event interrupts (when / while)',
          uk: 'процес, що вже тривав — тло, яке перериває коротша подія (when / while)',
        },
        example: { en: 'I was deploying when the alert fired.', uk: 'Я саме деплоїв, коли спрацював алерт.' },
        revealAt: 2,
        marks: [
          { kind: 'wave', cx: 236, hw: 128 },
          { kind: 'tick', x: 250 },
        ],
      },
    ],
    beats: [
      {
        en: 'One timeline for the past. NOW is on the right; everything here happened before it.',
        uk: 'Один таймлайн для минулого. NOW праворуч; усе тут сталося до нього.',
      },
      {
        en: '● Past Simple: one dot in the past — a whole, finished event at a known time. “The alert fired at 2 a.m.”',
        uk: '● Past Simple: одна крапка в минулому — ціла завершена подія у відомий час. «The alert fired at 2 a.m.»',
      },
      {
        en: '〜 Past Continuous: a wave already running in the past — the background in progress. “I was deploying…”',
        uk: '〜 Past Continuous: хвиля, що вже тривала в минулому — тло в розгортанні. «I was deploying…»',
      },
      {
        en: 'Put them together: the long background 〜 was already running when the short event ● cut in — “I was deploying WHEN the alert fired.”',
        uk: 'Складіть разом: довге тло 〜 вже тривало, коли врізалася коротка подія ● — «I was deploying WHEN the alert fired.»',
      },
    ],
  },
  // CHANGED (T3): the future zone (m9) — NOW is on the LEFT; everything is still to come. ● will /
  // going to names a whole future event; 〜 Future Continuous is a process running at a chosen future
  // moment (the tick marks that moment X, lit at the contrast beat, like the past interruption).
  future: {
    colorVar: 'var(--time-future)',
    nowX: 100,
    lanes: [
      {
        aspect: 'simple',
        glyph: '●',
        name: 'will / going to',
        gloss: {
          en: 'a whole future event — a prediction, plan or promise',
          uk: 'ціла майбутня подія — прогноз, план чи обіцянка',
        },
        example: { en: 'The migration will take about an hour.', uk: 'Ця міграція займе близько години.' },
        revealAt: 1,
        marks: [
          { kind: 'dot', x: 250 },
          { kind: 'dot', x: 430 },
        ],
      },
      {
        aspect: 'continuous',
        glyph: '〜',
        name: 'Future Continuous',
        gloss: {
          en: 'a process already in progress at a chosen future moment',
          uk: 'процес, що вже триває в обраний майбутній момент',
        },
        example: { en: "This time tomorrow I'll be presenting the demo.", uk: 'Завтра о цій порі я презентуватиму демо.' },
        revealAt: 2,
        marks: [
          { kind: 'wave', cx: 360, hw: 128 },
          { kind: 'tick', x: 360 },
        ],
      },
    ],
    beats: [
      {
        en: 'One timeline for the future. NOW is on the left; everything here is still to come.',
        uk: 'Один таймлайн для майбутнього. NOW ліворуч; усе тут ще попереду.',
      },
      {
        en: '● will / going to: a whole future event — a prediction, plan or promise. “The migration will take an hour.”',
        uk: '● will / going to: ціла майбутня подія — прогноз, план чи обіцянка. «The migration will take an hour.»',
      },
      {
        en: '〜 Future Continuous: a process that will already be running at a future moment. “This time tomorrow I’ll be presenting.”',
        uk: '〜 Future Continuous: процес, що вже триватиме в майбутній момент. «This time tomorrow I’ll be presenting.»',
      },
      {
        en: 'Put them together: will names the whole event ●; will be + V-ing drops you INSIDE it at a chosen future moment X — “At nine we’ll be interviewing.”',
        uk: 'Складіть разом: will називає цілу подію ●; will be + V-ing ставить тебе ВСЕРЕДИНІ неї в обраний майбутній момент X — «At nine we’ll be interviewing.»',
      },
    ],
  },
  // CHANGED (T3): the perfect zone (m10) — the flagship Present Perfect vs Past Simple line. One past
  // event, shown twice: ● Past Simple is a closed dot cut off in the past; ⤺ Present Perfect is the
  // same dot with an arc linking it forward to NOW. Colored with the PRESENT hue on purpose: the
  // Present Perfect's reference point IS now, so the whole contrast is anchored at the NOW axis.
  perfect: {
    colorVar: 'var(--time-present)',
    nowX: 500,
    lanes: [
      {
        aspect: 'simple',
        glyph: '●',
        name: 'Past Simple',
        gloss: {
          en: 'a finished event at a known past time — done, and cut off from now',
          uk: 'завершена подія у відомий минулий час — зроблено й відрізано від тепер',
        },
        example: { en: 'I lost my keys yesterday.', uk: 'Я загубив ключі вчора.' },
        revealAt: 1,
        marks: [{ kind: 'dot', x: 236 }],
      },
      {
        aspect: 'perfect',
        glyph: '⤺',
        name: 'Present Perfect',
        gloss: {
          en: 'a past action linked forward to now — the result still matters',
          uk: 'минула дія, зв’язана вперед із тепер — результат досі важить',
        },
        example: { en: "I've lost my keys — they're still lost.", uk: 'Я загубив ключі — вони досі загублені.' },
        revealAt: 2,
        marks: [{ kind: 'link', from: 236, to: 500 }],
      },
    ],
    beats: [
      {
        en: 'Two ways to view one past event. The dashed line on the right is NOW.',
        uk: 'Два погляди на одну минулу подію. Пунктир праворуч — це NOW.',
      },
      {
        en: '● Past Simple: a finished event at a known past time — a closed dot, cut off from now. “I lost my keys yesterday.”',
        uk: '● Past Simple: завершена подія у відомий минулий час — закрита крапка, відрізана від тепер. «I lost my keys yesterday.»',
      },
      {
        en: '⤺ Present Perfect: the same past action, but an arrow links it forward to NOW — the result still matters. “I’ve lost my keys” (still lost).',
        uk: '⤺ Present Perfect: та сама минула дія, але стрілка в’яже її вперед до NOW — результат досі важить. «I’ve lost my keys» (досі загублені).',
      },
      {
        en: 'Same event, two views: Past Simple ● leaves it in the past; Present Perfect ⤺ pulls it up to NOW. A finished-time word (yesterday) forces the Simple — and Ukrainian has no perfect, so this link is the thing to build.',
        uk: 'Та сама подія, два погляди: Past Simple ● лишає її в минулому; Present Perfect ⤺ підтягує до NOW. Слово завершеного часу (yesterday) вимагає Simple — а в українській perfect немає, тож саме цей зв’язок і треба збудувати.',
      },
    ],
  },
};

function LaneMarks({ lane, color, active, beat, zone }: { lane: Lane; color: string; active: boolean; beat: number; zone: Zone }) {
  const y = lane.aspect === 'simple' ? SIMPLE_Y : CONT_Y;
  const op = active ? 1 : 0.16;
  return (
    <g className="ttl-fade" opacity={op}>
      {lane.marks.map((m, i) => {
        if (m.kind === 'dot') return <circle key={i} cx={m.x} cy={y} r={6.5} fill={color} />;
        if (m.kind === 'wave')
          return (
            <path key={i} d={wavePath(m.cx, m.hw, y)} fill="none" stroke={color} strokeWidth={3} strokeLinecap="round" />
          );
        // CHANGED (T3): the ⤺ perfect link — a past dot with an arc reaching forward to the reference
        // point (NOW). Lit whenever the perfect lane is active, not gated to the final beat like tick.
        if (m.kind === 'link') {
          const midX = (m.from + m.to) / 2;
          return (
            <g key={i}>
              <circle cx={m.from} cy={y} r={6.5} fill={color} />
              <path
                d={`M ${m.from} ${y} Q ${midX} ${y - 54} ${m.to} ${y}`}
                fill="none"
                stroke={color}
                strokeWidth={2.5}
                markerEnd={`url(#ttl-link-${zone})`}
              />
            </g>
          );
        }
        // tick: the interrupting event / the chosen future moment — only lit at the final "contrast" beat
        const lit = beat >= LAST;
        return (
          <g key={i} className="ttl-fade" opacity={lit ? 1 : 0.001}>
            <line x1={m.x} y1={y - 26} x2={m.x} y2={y + 26} stroke={color} strokeWidth={1.5} strokeDasharray="4 3" />
            <circle cx={m.x} cy={y} r={6.5} fill="var(--bg)" stroke={color} strokeWidth={2} />
          </g>
        );
      })}
    </g>
  );
}

export function TenseTimeline({ zone }: { zone: Zone }) {
  const { t } = useLang();
  const spec = SPECS[zone];
  const [beat, setBeat] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [reduced, setReduced] = useState(false);
  const liveId = useId();

  // Client-only: honor prefers-reduced-motion (SSR shim reports matches:false, so beat 0 renders).
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener?.('change', onChange);
    return () => mq.removeEventListener?.('change', onChange);
  }, []);

  // Auto-play advances one beat at a time and stops at the last.
  useEffect(() => {
    if (!playing) return;
    if (beat >= LAST) {
      setPlaying(false);
      return;
    }
    const id = setTimeout(() => setBeat((b) => Math.min(LAST, b + 1)), 1700);
    return () => clearTimeout(id);
  }, [playing, beat]);

  const color = spec.colorVar;
  const goto = (b: number) => {
    setPlaying(false);
    setBeat(Math.max(0, Math.min(LAST, b)));
  };
  const togglePlay = () => {
    if (playing) {
      setPlaying(false);
      return;
    }
    setBeat((b) => (b >= LAST ? 0 : b));
    setPlaying(true);
  };

  return (
    <div className="ttl" role="group" aria-labelledby={`${liveId}-cap`}>
      <svg className="ttl-svg" viewBox={`0 0 ${VB_W} 232`} role="img" aria-hidden="true" focusable="false">
        <defs>
          <marker id={`ttl-arrow-${zone}`} viewBox="0 0 8 8" refX="7" refY="4" markerWidth={7} markerHeight={7} orient="auto">
            <path d="M0 0 L8 4 L0 8 z" fill="var(--line2)" />
          </marker>
          {/* CHANGED (T3): the perfect link-back arrowhead, in the time hue (m10 perfect zone). */}
          <marker id={`ttl-link-${zone}`} viewBox="0 0 8 8" refX="6" refY="4" markerWidth={6} markerHeight={6} orient="auto">
            <path d="M0 0 L8 4 L0 8 z" fill={color} />
          </marker>
        </defs>

        {/* per-lane axis */}
        {[SIMPLE_Y, CONT_Y].map((y) => (
          <line key={y} x1={AXIS_X0} y1={y} x2={AXIS_X1} y2={y} stroke="var(--line2)" strokeWidth={1.4} markerEnd={`url(#ttl-arrow-${zone})`} />
        ))}
        <text x={AXIS_X1} y={CONT_Y + 26} textAnchor="end" fill="var(--tx3)" fontSize={11} fontStyle="italic">
          {t({ en: 'earlier → later', uk: 'раніше → пізніше' })}
        </text>

        {/* the shared NOW axis */}
        <line x1={spec.nowX} y1={34} x2={spec.nowX} y2={206} stroke="var(--tx3)" strokeWidth={1.6} strokeDasharray="3 3" />
        <text x={spec.nowX} y={26} textAnchor="middle" fill="var(--tx2)" fontSize={11} fontFamily="var(--font-mono)" fontWeight={700}>
          NOW
        </text>

        {/* lane glyph labels */}
        {spec.lanes.map((lane) => {
          const y = lane.aspect === 'simple' ? SIMPLE_Y : CONT_Y;
          const on = beat >= lane.revealAt;
          return (
            <text
              key={lane.aspect}
              className="ttl-fade"
              x={AXIS_X0 - 8}
              y={y + 5}
              textAnchor="end"
              fontSize={17}
              fill={color}
              opacity={on ? 1 : 0.22}
            >
              {lane.glyph}
            </text>
          );
        })}

        {spec.lanes.map((lane) => (
          <LaneMarks key={lane.aspect} lane={lane} color={color} active={beat >= lane.revealAt} beat={beat} zone={zone} />
        ))}
      </svg>

      <div className="ttl-controls" role="group" aria-label={t({ en: 'Timeline playback', uk: 'Відтворення таймлайну' })}>
        <button type="button" className="ttl-btn" onClick={() => goto(beat - 1)} disabled={beat === 0} aria-label={t({ en: 'Step back', uk: 'Крок назад' })}>
          <span aria-hidden="true">◀</span>
        </button>
        {!reduced && (
          <button type="button" className={cx('ttl-btn', 'ttl-btn--play', playing && 'on')} onClick={togglePlay} aria-label={playing ? t({ en: 'Pause', uk: 'Пауза' }) : t({ en: 'Play', uk: 'Відтворити' })}>
            <span aria-hidden="true">{playing ? '⏸' : '▶'}</span>
          </button>
        )}
        <button type="button" className="ttl-btn" onClick={() => goto(beat + 1)} disabled={beat === LAST} aria-label={t({ en: 'Step forward', uk: 'Крок уперед' })}>
          <span aria-hidden="true">▶</span>
        </button>
        <button type="button" className="ttl-btn" onClick={() => goto(0)} disabled={beat === 0} aria-label={t({ en: 'Reset', uk: 'Спочатку' })}>
          <span aria-hidden="true">↺</span>
        </button>
        <span className="ttl-count mono" aria-hidden="true">
          {beat + 1} / {LAST + 1}
        </span>
      </div>

      <p className="ttl-narr" id={`${liveId}-cap`} aria-live="polite">
        {t(spec.beats[beat])}
      </p>

      <div className="ttl-legend">
        {spec.lanes.map((lane) => {
          const on = beat >= lane.revealAt;
          return (
            <div key={lane.aspect} className={cx('ttl-lane', on && 'on')} style={on ? { borderColor: color } : undefined}>
              <span className="ttl-lane-glyph" style={{ color }} aria-hidden="true">
                {lane.glyph}
              </span>
              <div className="ttl-lane-body">
                <span className="ttl-lane-name" style={on ? { color } : undefined}>
                  {lane.name}
                </span>
                <span className="ttl-lane-gloss">{t(lane.gloss)}</span>
                <span className="ttl-lane-eg mono">{lane.example.en}</span>
                <span className="ttl-lane-uk">{lane.example.uk}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
