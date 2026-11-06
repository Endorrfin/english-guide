// CHANGED (F2): InOnAtFunnel figure (m5) — one funnel for time and place: in is the big container, on a day or a
// surface, at an exact point. Grounded in British Council (Prepositions of time; Prepositions of place) and Cambridge
// (At, on and in). The funnel is a memory aid with exceptions, and the module lists them. One 400-wide column (the
// VA1 / VA2 rule), capped on desktop. Static SVG, theme tokens, bilingual, reduced-motion-safe.
import { useLang } from '../../i18n/lang';
import type { Localized } from '../../data/types';

const W = 400;
const TOP = 56;
const TIER_H = 92;

type Tier = { mark: string; width: number; idea: Localized; time: string; place: string; hue: string };
const TIERS: Tier[] = [
  {
    mark: 'in',
    width: 384,
    idea: { en: 'a big container', uk: 'великий простір' },
    time: 'in 2026 · in July · in the morning',
    place: 'in Ukraine · in Kyiv · in a room',
    hue: 'var(--lv-a1)',
  },
  {
    mark: 'on',
    width: 348,
    idea: { en: 'a day, a surface, a line', uk: 'день, поверхня, лінія' },
    time: 'on Monday · on May 5',
    place: 'on the desk · on Main Street',
    hue: 'var(--lv-b1)',
  },
  {
    mark: 'at',
    width: 312,
    idea: { en: 'an exact point', uk: 'точна точка' },
    time: 'at 7:30 · at noon · at night',
    place: 'at 15 Main St · at the door',
    hue: 'var(--lv-c1)',
  },
];

export function InOnAtFunnel() {
  const { t } = useLang();
  const h = TOP + TIERS.length * TIER_H + 30;

  return (
    <svg
      viewBox={`0 0 ${W} ${h}`}
      role="img"
      aria-label={t({
        en: 'A funnel with three tiers, from big to exact. In, a big container: in 2026, in July, in the morning; in Ukraine, in Kyiv, in a room. On, a day, a surface or a line: on Monday, on May 5; on the desk, on Main Street. At, an exact point: at 7:30, at noon, at night; at 15 Main Street, at the door. It is a memory aid and has exceptions.',
        uk: 'Лійка з трьох рівнів, від великого до точного. In, великий простір: in 2026, in July, in the morning; in Ukraine, in Kyiv, in a room. On, день, поверхня чи лінія: on Monday, on May 5; on the desk, on Main Street. At, точна точка: at 7:30, at noon, at night; at 15 Main Street, at the door. Це підказка для памʼяті, і вона має винятки.',
      })}
      style={{ width: '100%', maxWidth: 560, height: 'auto', display: 'block', margin: '0 auto' }}
    >
      <text x={14} y={24} fill="var(--tx)" fontSize={14} fontWeight={700}>
        {t({ en: 'From big to exact', uk: 'Від великого до точного' })}
      </text>
      <text x={14} y={42} fill="var(--tx3)" fontSize={12}>
        {t({ en: 'The same funnel for time and for place', uk: 'Та сама лійка для часу і для місця' })}
      </text>

      {TIERS.map((tier, i) => {
        const x = (W - tier.width) / 2;
        const y = TOP + i * TIER_H;
        return (
          <g key={tier.mark}>
            <rect x={x} y={y} width={tier.width} height={TIER_H - 8} rx={8} fill="var(--s2)" stroke={tier.hue} />
            <text x={x + 12} y={y + 22} fill={tier.hue} fontSize={16} fontWeight={700} fontFamily="var(--font-mono)">
              {tier.mark}
            </text>
            <text x={x + 40} y={y + 21} fill={tier.hue} fontSize={12} fontWeight={600}>
              {t(tier.idea)}
            </text>
            <text x={x + 12} y={y + 46} fill="var(--tx)" fontSize={12} fontFamily="var(--font-mono)">
              {tier.time}
            </text>
            <text x={x + 12} y={y + 67} fill="var(--tx)" fontSize={12} fontFamily="var(--font-mono)">
              {tier.place}
            </text>
          </g>
        );
      })}

      <text x={W / 2} y={h - 8} fill="var(--tx3)" fontSize={12} textAnchor="middle">
        {t({ en: 'A memory aid, not a law: the exceptions are below.', uk: 'Підказка, а не закон: винятки нижче.' })}
      </text>
    </svg>
  );
}
