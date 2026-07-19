// CHANGED (S4): PolitenessLadder figure (m22) — requests as a ladder from a blunt imperative up to
// the most indirect, hypothetical form. Stepping back into past/hypothetical modals (could, would)
// is stepping back politely: politeness = distance. Static SVG, theme tokens, bilingual,
// reduced-motion-safe. Mirrors AdviceLadder.
import { useLang } from '../../i18n/lang';
import type { Localized } from '../../data/types';

const RUNG_X = 132;
const RUNG_W = 366;
const RUNG_H = 54;

function Rung({ y, form, tag, color }: { y: number; form: string; tag: string; color: string }) {
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
      <text x={RUNG_X + 16} y={y + 23} fill="var(--tx)" fontSize={14.5} fontWeight={700} fontFamily="var(--font-mono)">
        {form}
      </text>
      <text x={RUNG_X + 16} y={y + 41} fill="var(--tx2)" fontSize={11.5}>
        {tag}
      </text>
    </g>
  );
}

export function PolitenessLadder() {
  const { t } = useLang();
  const T = (v: Localized) => t(v);
  const red = 'var(--danger)';
  const amber = 'var(--amber)';
  const sky = 'var(--lv-b1)';
  const indigo = 'var(--lv-b2)';
  const violet = 'var(--lv-c1)';

  return (
    <svg
      viewBox="0 0 640 448"
      role="img"
      aria-label={T({
        en: 'The politeness ladder for requests, from bottom to top: the bare imperative Open the door (direct); Can you…? (casual); Could you…? (polite default); Would you mind opening…? (very polite, with the -ing form); and I was wondering if you could… (most polite). More distant, hypothetical forms are more polite.',
        uk: 'Драбина ввічливості для прохань, знизу вгору: голий імператив Open the door (прямо); Can you…? (невимушено); Could you…? (ввічливий дефолт); Would you mind opening…? (дуже ввічливо, з формою -ing); і I was wondering if you could… (найввічливіше). Віддаленіші, гіпотетичні форми — ввічливіші.',
      })}
      style={{ width: '100%', height: 'auto', display: 'block' }}
    >
      <text x={30} y={30} fill="var(--tx2)" fontSize={12.5} fontWeight={700} letterSpacing={1}>
        {T({ en: 'MORE POLITE / MORE DISTANT UPWARD', uk: 'ВВІЧЛИВІШЕ / ВІДДАЛЕНІШЕ ВГОРУ' }).toUpperCase()}
      </text>

      {/* politeness arrow */}
      <line x1={58} y1={356} x2={58} y2={64} stroke="var(--line2)" strokeWidth={1.6} markerEnd="url(#pl-arrow)" />
      <defs>
        <marker id="pl-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth={7} markerHeight={7} orient="auto">
          <path d="M0 0 L8 4 L0 8 z" fill="var(--line2)" />
        </marker>
      </defs>

      {/* rungs: top = most polite */}
      <Rung y={56} form="I was wondering if you could…" tag={T({ en: 'most polite · formal', uk: 'найввічливіше · формально' })} color={violet} />
      <Rung y={128} form="Would you mind + V-ing?" tag={T({ en: 'very polite — mind + -ing', uk: 'дуже ввічливо — mind + -ing' })} color={indigo} />
      <Rung y={200} form="Could you…?" tag={T({ en: 'polite — the safe default', uk: 'ввічливо — безпечний дефолт' })} color={sky} />
      <Rung y={272} form="Can you…?" tag={T({ en: 'casual — friends, peers', uk: 'невимушено — друзі, колеги' })} color={amber} />
      <Rung y={344} form="Open the door." tag={T({ en: 'imperative — direct / blunt', uk: 'імператив — прямо / різко' })} color={red} />

      {/* mind-inversion side note */}
      <text x={320} y={432} textAnchor="middle" fill="var(--tx3)" fontSize={12}>
        {T({
          en: '“Would you mind…?” → “No, not at all” means yes, I’ll do it. Soften with please · possibly · just.',
          uk: '«Would you mind…?» → «No, not at all» означає так, я зроблю. Помʼякшуйте: please · possibly · just.',
        })}
      </text>
    </svg>
  );
}
