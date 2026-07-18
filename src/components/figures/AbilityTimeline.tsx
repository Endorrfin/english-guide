// CHANGED (S2): AbilityTimeline figure (m18) — ability across time on one axis, with the past FORK
// that trips UA speakers: a general skill keeps could, but a single success drops it for
// was able to / managed to. couldn't covers the whole past. Crisp SVG, theme tokens, bilingual.
import { useLang } from '../../i18n/lang';
import type { Localized } from '../../data/types';

const BOX_W = 176;
const BOX_H = 46;

function Station({
  x,
  y,
  title,
  forms,
  color,
  dashed,
}: {
  x: number;
  y: number;
  title: string;
  forms: string;
  color: string;
  dashed?: boolean;
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={BOX_W}
        height={BOX_H}
        rx={10}
        fill={`color-mix(in srgb, ${color} 12%, transparent)`}
        stroke={color}
        strokeWidth={1.4}
        strokeDasharray={dashed ? '5 4' : undefined}
      />
      <text x={x + BOX_W / 2} y={y + 19} textAnchor="middle" fill="var(--tx2)" fontSize={11.5} fontWeight={700} letterSpacing={0.6}>
        {title.toUpperCase()}
      </text>
      <text x={x + BOX_W / 2} y={y + 36} textAnchor="middle" fill="var(--tx)" fontSize={13.5} fontWeight={600} fontFamily="var(--font-mono)">
        {forms}
      </text>
    </g>
  );
}

export function AbilityTimeline() {
  const { t } = useLang();
  const sky = 'var(--lv-b1)';
  const violet = 'var(--lv-c1)';
  const teal = 'var(--lv-a2)';
  const amber = 'var(--amber)';

  const T = (v: Localized) => t(v);

  return (
    <svg
      viewBox="0 0 760 372"
      role="img"
      aria-label={T({
        en: 'Ability across time: can now, could for a general past skill, will be able to in the future, and a past fork where a single success uses was able to or managed to, not could.',
        uk: 'Уміння в часі: can тепер, could для загальної навички в минулому, will be able to в майбутньому, і розвилка в минулому, де разовий успіх бере was able to або managed to, а не could.',
      })}
      style={{ width: '100%', height: 'auto', display: 'block' }}
    >
      {/* axis */}
      <line x1={30} y1={70} x2={730} y2={70} stroke="var(--line2)" strokeWidth={1.4} markerEnd="url(#at-arrow)" />
      <defs>
        <marker id="at-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth={7} markerHeight={7} orient="auto">
          <path d="M0 0 L8 4 L0 8 z" fill="var(--line2)" />
        </marker>
      </defs>
      <text x={30} y={30} fill="var(--tx3)" fontSize={12.5} fontStyle="italic">
        {T({ en: 'the same ability, moved through time', uk: 'те саме вміння, проведене крізь час' })}
      </text>

      {/* time ticks */}
      <text x={118} y={92} textAnchor="middle" fill="var(--tx2)" fontSize={12.5} fontWeight={700}>
        {T({ en: 'PAST', uk: 'МИНУЛЕ' })}
      </text>
      <text x={412} y={92} textAnchor="middle" fill="var(--tx2)" fontSize={12.5} fontWeight={700}>
        {T({ en: 'PRESENT', uk: 'ТЕПЕРІШНЄ' })}
      </text>
      <text x={648} y={92} textAnchor="middle" fill="var(--tx2)" fontSize={12.5} fontWeight={700}>
        {T({ en: 'FUTURE', uk: 'МАЙБУТНЄ' })}
      </text>

      {/* present + future */}
      <Station x={412 - BOX_W / 2} y={112} title={T({ en: 'present', uk: 'теперішнє' })} forms="can · be able to" color={sky} />
      <Station x={648 - BOX_W / 2} y={112} title={T({ en: 'future', uk: 'майбутнє' })} forms="will be able to" color={violet} />

      {/* past fork */}
      <Station
        x={118 - BOX_W / 2}
        y={150}
        title={T({ en: 'general skill', uk: 'загальна навичка' })}
        forms="could · was able to"
        color={teal}
      />
      <Station
        x={118 - BOX_W / 2}
        y={232}
        title={T({ en: 'single success ✗ could', uk: 'разовий успіх ✗ could' })}
        forms="was able to · managed to"
        color={amber}
        dashed
      />
      {/* fork connectors */}
      <line x1={118} y1={100} x2={118} y2={150} stroke="var(--line)" strokeWidth={1.3} />
      <line x1={118} y1={196} x2={118} y2={232} stroke={amber} strokeWidth={1.3} strokeDasharray="4 4" />

      <text x={118} y={300} textAnchor="middle" fill={amber} fontSize={11.5}>
        {T({ en: 'one finished result → not could', uk: 'один завершений результат → не could' })}
      </text>

      <text x={412} y={352} textAnchor="middle" fill="var(--tx3)" fontSize={12}>
        {T({
          en: 'Negatives are easy: couldn’t covers the whole past — general or single occasion.',
          uk: 'Заперечення прості: couldn’t покриває все минуле — і загальне, і разовий випадок.',
        })}
      </text>
    </svg>
  );
}
