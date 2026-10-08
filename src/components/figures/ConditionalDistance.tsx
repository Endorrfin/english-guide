// CHANGED (C1): ConditionalDistance figure (m13) — the mental model of the whole module in one
// picture: the further a condition is from reality, the further BACK its if-clause verb steps
// (Present → Present → Past → Past Perfect), while the main clause gains will → would → would have.
// The Type 3 row is dashed: it is a preview of m23. Same "distance" idea as PolitenessLadder (m22).
// Static SVG, theme tokens, bilingual, reduced-motion-safe.
import { useLang } from '../../i18n/lang';
import type { Localized } from '../../data/types';

const ROW_H = 62;
const TOP = 70;

type Row = { type: string; reality: Localized; ifPart: string; main: string; color: string; dashed?: boolean };

export function ConditionalDistance() {
  const { t } = useLang();
  const rows: Row[] = [
    {
      type: 'Type 0',
      reality: { en: 'always true', uk: 'завжди правда' },
      ifPart: 'if + Present Simple',
      main: 'Present Simple',
      color: 'var(--lv-a1)',
    },
    {
      type: 'Type 1',
      reality: { en: 'really possible', uk: 'реально можливо' },
      ifPart: 'if + Present Simple',
      main: 'will + V1',
      color: 'var(--lv-b1)',
    },
    {
      type: 'Type 2',
      reality: { en: 'imagined (now / future)', uk: 'уявне (зараз / майбутнє)' },
      ifPart: 'if + Past Simple',
      main: 'would + V1',
      color: 'var(--lv-b2)',
    },
    {
      type: 'Type 3',
      reality: { en: 'imagined past · m23', uk: 'уявне минуле · m23' },
      ifPart: 'if + Past Perfect',
      main: 'would have + V3',
      color: 'var(--lv-c1)',
      dashed: true,
    },
  ];

  return (
    <svg
      viewBox="0 0 640 352"
      role="img"
      aria-label={t({
        en: 'Distance from reality. Type 0, always true: if + Present Simple, main clause Present Simple. Type 1, really possible: if + Present Simple, main clause will + V1. Type 2, imagined now or future: if + Past Simple, main clause would + V1. Type 3, imagined past, taught in m23: if + Past Perfect, main clause would have + V3. Each step away from reality moves the if-clause verb one tense back. There is never will or would in the if-clause.',
        uk: 'Відстань від реальності. Type 0, завжди правда: if + Present Simple, головна частина Present Simple. Type 1, реально можливо: if + Present Simple, головна will + V1. Type 2, уявне зараз чи в майбутньому: if + Past Simple, головна would + V1. Type 3, уявне минуле, вивчаємо в m23: if + Past Perfect, головна would have + V3. Кожен крок від реальності зсуває дієслово if-частини на один час назад. В if-частині ніколи немає will чи would.',
      })}
      style={{ width: '100%', height: 'auto', display: 'block' }}
    >
      <defs>
        <marker id="cd-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth={7} markerHeight={7} orient="auto">
          <path d="M0 0 L8 4 L0 8 z" fill="var(--line2)" />
        </marker>
      </defs>

      {/* column heads */}
      <text x={186} y={46} fill="var(--tx3)" fontSize={12} fontWeight={700} letterSpacing={1}>
        {t({ en: 'IF-CLAUSE', uk: 'IF-ЧАСТИНА' })}
      </text>
      <text x={420} y={46} fill="var(--tx3)" fontSize={12} fontWeight={700} letterSpacing={1}>
        {t({ en: 'MAIN CLAUSE', uk: 'ГОЛОВНА ЧАСТИНА' })}
      </text>

      {/* the distance arrow */}
      <line x1={24} y1={TOP + 4} x2={24} y2={TOP + ROW_H * 4 - 10} stroke="var(--line2)" strokeWidth={1.6} markerEnd="url(#cd-arrow)" />
      <text
        x={14}
        y={TOP + ROW_H * 2}
        fill="var(--tx3)"
        fontSize={11}
        textAnchor="middle"
        transform={`rotate(-90 14 ${TOP + ROW_H * 2})`}
      >
        {t({ en: 'further from reality', uk: 'далі від реальності' })}
      </text>

      {rows.map((r, i) => {
        const y = TOP + i * ROW_H;
        const dash = r.dashed ? '5 4' : undefined;
        return (
          <g key={r.type} opacity={r.dashed ? 0.8 : 1}>
            <rect
              x={40}
              y={y}
              width={580}
              height={ROW_H - 10}
              rx={10}
              fill={`color-mix(in srgb, ${r.color} 11%, transparent)`}
              stroke={r.color}
              strokeWidth={1.4}
              strokeDasharray={dash}
            />
            <text x={54} y={y + 22} fill={r.color} fontSize={14} fontWeight={700}>
              {r.type}
            </text>
            <text x={54} y={y + 40} fill="var(--tx2)" fontSize={11}>
              {t(r.reality)}
            </text>
            <text x={186} y={y + 31} fill="var(--tx)" fontSize={14} fontWeight={600} fontFamily="var(--font-mono)">
              {r.ifPart}
            </text>
            <text x={392} y={y + 31} fill="var(--tx3)" fontSize={14}>
              →
            </text>
            <text x={420} y={y + 31} fill="var(--tx)" fontSize={14} fontWeight={600} fontFamily="var(--font-mono)">
              {r.main}
            </text>
          </g>
        );
      })}

      <text x={330} y={TOP + ROW_H * 4 + 12} fill="var(--tx3)" fontSize={12} textAnchor="middle">
        {t({
          en: 'One step from reality = one tense back in the if-clause. Never will / would after if.',
          uk: 'Один крок від реальності = один час назад в if-частині. Після if — ніколи will / would.',
        })}
      </text>
    </svg>
  );
}
