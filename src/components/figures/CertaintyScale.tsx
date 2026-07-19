// CHANGED (S4): CertaintyScale figure (m21) — deduction as a confidence dial from 100% (must) down
// to 0% (can't). Each rung shows the present modal and its past form (+ have + V3). The negative end
// is can't / couldn't, NOT mustn't (prohibition) — the module's spine trap. Static SVG, theme tokens,
// bilingual, reduced-motion-safe (no animation). Mirrors AdviceLadder.
import { useLang } from '../../i18n/lang';
import type { Localized } from '../../data/types';

const RUNG_X = 118;
const RUNG_W = 372;
const RUNG_H = 58;

function Rung({
  y,
  present,
  past,
  tag,
  color,
}: {
  y: number;
  present: string;
  past: string;
  tag: string;
  color: string;
}) {
  return (
    <g>
      <rect
        x={RUNG_X}
        y={y}
        width={RUNG_W}
        height={RUNG_H}
        rx={10}
        fill={`color-mix(in srgb, ${color} 13%, transparent)`}
        stroke={color}
        strokeWidth={1.5}
      />
      <text x={RUNG_X + 16} y={y + 24} fill="var(--tx)" fontSize={16} fontWeight={700} fontFamily="var(--font-mono)">
        {present}
      </text>
      <text x={RUNG_X + 16} y={y + 44} fill="var(--tx2)" fontSize={12} fontFamily="var(--font-mono)">
        {past}
      </text>
      <text x={RUNG_X + RUNG_W - 14} y={y + 34} textAnchor="end" fill={color} fontSize={12} fontWeight={700}>
        {tag}
      </text>
    </g>
  );
}

export function CertaintyScale() {
  const { t } = useLang();
  const T = (v: Localized) => t(v);
  const green = 'var(--ok)';
  const sky = 'var(--lv-b1)';
  const indigo = 'var(--lv-b2)';
  const amber = 'var(--amber)';
  const red = 'var(--danger)';

  return (
    <svg
      viewBox="0 0 640 470"
      role="img"
      aria-label={T({
        en: 'The certainty scale for deduction, from 100% to 0%: must (must have + V3) for certain; should or will for probable; may, might or could for possible; might not or may not for improbable; and can’t or couldn’t (can’t have + V3) for impossible. The negative of deductive must is can’t, never mustn’t.',
        uk: 'Шкала впевненості для висновків, від 100% до 0%: must (must have + V3) — точно; should або will — ймовірно; may, might чи could — можливо; might not або may not — навряд чи; і can’t чи couldn’t (can’t have + V3) — неможливо. Заперечення дедуктивного must — це can’t, а не mustn’t.',
      })}
      style={{ width: '100%', height: 'auto', display: 'block' }}
    >
      <text x={30} y={30} fill="var(--tx2)" fontSize={12.5} fontWeight={700} letterSpacing={1}>
        {T({ en: 'HOW SURE AM I?', uk: 'НАСКІЛЬКИ Я ПЕВЕН?' }).toUpperCase()}
      </text>

      {/* confidence gradient meter + axis on the left */}
      <defs>
        <linearGradient id="cs-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={green} />
          <stop offset="25%" stopColor={sky} />
          <stop offset="50%" stopColor={indigo} />
          <stop offset="75%" stopColor={amber} />
          <stop offset="100%" stopColor={red} />
        </linearGradient>
      </defs>
      <rect x={54} y={56} width={14} height={362} rx={7} fill="url(#cs-grad)" opacity={0.85} />
      <text x={61} y={48} textAnchor="middle" fill={green} fontSize={11} fontWeight={700}>
        100%
      </text>
      <text x={61} y={436} textAnchor="middle" fill={red} fontSize={11} fontWeight={700}>
        0%
      </text>

      {/* rungs: top = certain it's true, bottom = certain it's false */}
      <Rung y={56} present="must" past="must have + V3" tag={T({ en: 'certain', uk: 'точно' })} color={green} />
      <Rung y={132} present="should · will" past="should / will have + V3" tag={T({ en: 'probable', uk: 'ймовірно' })} color={sky} />
      <Rung y={208} present="may · might · could" past="may / might / could have + V3" tag={T({ en: 'possible', uk: 'можливо' })} color={indigo} />
      <Rung y={284} present="might not · may not" past="might not have + V3" tag={T({ en: 'improbable', uk: 'навряд' })} color={amber} />
      <Rung y={360} present="can’t · couldn’t" past="can’t have + V3" tag={T({ en: 'impossible', uk: 'неможливо' })} color={red} />

      {/* the spine trap */}
      <text x={320} y={452} textAnchor="middle" fill="var(--tx3)" fontSize={12}>
        {T({
          en: 'Trap: mustn’t = prohibition (don’t!), not “certainly not” — the negative is can’t.',
          uk: 'Пастка: mustn’t = заборона (не роби!), а не «точно ні» — заперечення це can’t.',
        })}
      </text>
    </svg>
  );
}
