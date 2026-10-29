// CHANGED (C3): PassiveFlip figure (m14) — the whole passive transformation in one picture. The
// active sentence's OBJECT moves to the front and becomes the subject; the verb becomes be + V3,
// and be carries the tense (V3 never changes); the active subject either disappears or survives as
// an optional by-phrase (dashed — most passives drop it). Forms per Cambridge (Passive: forms ·
// Passives with and without an agent) and British Council LearnEnglish (Passives).
// Static SVG, theme tokens, bilingual, reduced-motion-safe.
import { useLang } from '../../i18n/lang';
import type { Localized } from '../../data/types';

const BOX_W = 170;
const BOX_H = 36;
const COLS = [40, 235, 430]; // left x of each column
const TOP_Y = 66;
const BOT_Y = 214;

type Cell = { text: string; color: string; dashed?: boolean; role: Localized };

export function PassiveFlip() {
  const { t } = useLang();
  const doer = 'var(--amber)';
  const thing = 'var(--time-future)';
  const verb = 'var(--time-present)';

  const active: Cell[] = [
    { text: 'The intern', color: doer, role: { en: 'subject = the doer', uk: 'підмет = виконавець' } },
    { text: 'deleted', color: verb, role: { en: 'verb (Past Simple)', uk: 'дієслово (Past Simple)' } },
    { text: 'the prod table', color: thing, role: { en: 'object = the thing', uk: 'додаток = обʼєкт дії' } },
  ];
  const passive: Cell[] = [
    { text: 'The prod table', color: thing, role: { en: 'new subject', uk: 'новий підмет' } },
    { text: 'was deleted', color: verb, role: { en: 'be + V3 — be carries the tense', uk: 'be + V3 — час несе be' } },
    { text: '(by the intern)', color: doer, dashed: true, role: { en: 'optional — usually dropped', uk: 'необовʼязково — зазвичай опускають' } },
  ];

  const cx = (i: number) => COLS[i] + BOX_W / 2;

  const box = (c: Cell, i: number, y: number) => (
    <g key={`${y}-${c.text}`}>
      <rect
        x={COLS[i]}
        y={y}
        width={BOX_W}
        height={BOX_H}
        rx={8}
        fill={`color-mix(in srgb, ${c.color} 12%, transparent)`}
        stroke={c.color}
        strokeWidth={1.5}
        strokeDasharray={c.dashed ? '5 4' : undefined}
      />
      <text x={cx(i)} y={y + 23} fill="var(--tx)" fontSize={13.5} fontWeight={700} textAnchor="middle" fontFamily="var(--font-mono)">
        {c.text}
      </text>
    </g>
  );

  return (
    <svg
      viewBox="0 0 640 320"
      role="img"
      aria-label={t({
        en: 'The passive flip. Active: The intern deleted the prod table — the intern is the subject and the doer, the prod table is the object. Passive: The prod table was deleted, by the intern. The object moves to the front and becomes the subject; the verb becomes be plus the past participle, and be carries the tense; the doer moves to an optional by-phrase, which is usually left out.',
        uk: 'Перетворення в passive. Active: The intern deleted the prod table — the intern є підметом і виконавцем, the prod table — додаток. Passive: The prod table was deleted, by the intern. Додаток переходить на початок і стає підметом; дієслово стає be плюс V3, і час несе be; виконавець переходить у необовʼязкову фразу з by, яку зазвичай опускають.',
      })}
      style={{ width: '100%', height: 'auto', display: 'block' }}
    >
      <defs>
        <marker id="pf-arrow-thing" viewBox="0 0 8 8" refX="7" refY="4" markerWidth={7} markerHeight={7} orient="auto">
          <path d="M0 0 L8 4 L0 8 z" fill={thing} />
        </marker>
        <marker id="pf-arrow-doer" viewBox="0 0 8 8" refX="7" refY="4" markerWidth={7} markerHeight={7} orient="auto">
          <path d="M0 0 L8 4 L0 8 z" fill={doer} />
        </marker>
        <marker id="pf-arrow-verb" viewBox="0 0 8 8" refX="7" refY="4" markerWidth={7} markerHeight={7} orient="auto">
          <path d="M0 0 L8 4 L0 8 z" fill={verb} />
        </marker>
      </defs>

      <text x={40} y={34} fill="var(--tx3)" fontSize={12} fontWeight={700} letterSpacing={1}>
        ACTIVE
      </text>
      <text x={600} y={34} fill="var(--tx3)" fontSize={11} textAnchor="end">
        {t({ en: 'who did it comes first', uk: 'спершу — хто це зробив' })}
      </text>
      {active.map((c, i) => box(c, i, TOP_Y))}
      {active.map((c, i) => (
        <text key={`ra-${i}`} x={cx(i)} y={TOP_Y - 8} fill={c.color} fontSize={10.5} textAnchor="middle">
          {t(c.role)}
        </text>
      ))}

      {/* the object travels to the front, the doer to the back, the verb straight down */}
      <path
        d={`M ${cx(2)} ${TOP_Y + BOX_H + 4} C ${cx(2)} 160, ${cx(0)} 140, ${cx(0)} ${BOT_Y - 22}`}
        fill="none"
        stroke={thing}
        strokeWidth={1.8}
        markerEnd="url(#pf-arrow-thing)"
      />
      <path
        d={`M ${cx(0)} ${TOP_Y + BOX_H + 4} C ${cx(0)} 160, ${cx(2)} 140, ${cx(2)} ${BOT_Y - 22}`}
        fill="none"
        stroke={doer}
        strokeWidth={1.4}
        strokeDasharray="5 4"
        markerEnd="url(#pf-arrow-doer)"
      />
      <line x1={cx(1)} y1={TOP_Y + BOX_H + 4} x2={cx(1)} y2={BOT_Y - 22} stroke={verb} strokeWidth={1.8} markerEnd="url(#pf-arrow-verb)" />
      <rect x={cx(1) - 52} y={136} width={104} height={22} rx={6} fill="var(--s2)" stroke="var(--line2)" />
      <text x={cx(1)} y={151} fill={verb} fontSize={12} fontWeight={700} textAnchor="middle" fontFamily="var(--font-mono)">
        be + V3
      </text>

      <text x={40} y={BOT_Y - 30} fill="var(--tx3)" fontSize={12} fontWeight={700} letterSpacing={1}>
        PASSIVE
      </text>
      {passive.map((c, i) => box(c, i, BOT_Y))}
      {passive.map((c, i) => (
        <text key={`rp-${i}`} x={cx(i)} y={BOT_Y + BOX_H + 16} fill={c.color} fontSize={10.5} textAnchor="middle">
          {t(c.role)}
        </text>
      ))}

      <text x={320} y={308} fill="var(--tx3)" fontSize={12} textAnchor="middle">
        {t({
          en: 'The tense lives in be: is / was / has been / will be deleted — V3 never changes.',
          uk: 'Час живе в be: is / was / has been / will be deleted — V3 не змінюється.',
        })}
      </text>
    </svg>
  );
}
