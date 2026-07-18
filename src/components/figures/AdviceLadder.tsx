// CHANGED (S2): AdviceLadder figure (m20) — advice as a strength ladder from a soft could /
// might want to, through should / ought to, up to the had better warning, and beyond it into
// obligation (have to / must). Side note: point it at the past and it becomes should have + V3.
import { useLang } from '../../i18n/lang';
import type { Localized } from '../../data/types';

const RUNG_X = 150;
const RUNG_W = 320;

function Rung({ y, label, sub, color }: { y: number; label: string; sub: string; color: string }) {
  return (
    <g>
      <rect x={RUNG_X} y={y} width={RUNG_W} height={50} rx={10} fill={`color-mix(in srgb, ${color} 13%, transparent)`} stroke={color} strokeWidth={1.5} />
      <text x={RUNG_X + 16} y={y + 22} fill="var(--tx)" fontSize={15} fontWeight={700} fontFamily="var(--font-mono)">
        {label}
      </text>
      <text x={RUNG_X + 16} y={y + 39} fill="var(--tx2)" fontSize={11.5}>
        {sub}
      </text>
    </g>
  );
}

export function AdviceLadder() {
  const { t } = useLang();
  const teal = 'var(--lv-a2)';
  const sky = 'var(--lv-b1)';
  const amber = 'var(--amber)';
  const violet = 'var(--lv-c1)';
  const T = (v: Localized) => t(v);

  return (
    <svg
      viewBox="0 0 640 384"
      role="img"
      aria-label={T({
        en: 'The advice strength ladder from bottom to top: could or might want to (soft), should or ought to, had better (a warning), and have to or must (obligation). In the past, advice becomes should have plus past participle.',
        uk: 'Драбина сили поради знизу вгору: could або might want to (мʼяко), should або ought to, had better (застереження) і have to або must (обовʼязок). У минулому порада стає should have плюс третя форма.',
      })}
      style={{ width: '100%', height: 'auto', display: 'block' }}
    >
      <text x={30} y={30} fill="var(--tx2)" fontSize={12.5} fontWeight={700} letterSpacing={1}>
        {T({ en: 'ADVICE — STRONGER UPWARD', uk: 'ПОРАДА — СИЛЬНІШЕ ВГОРУ' }).toUpperCase()}
      </text>

      {/* strength arrow */}
      <line x1={60} y1={330} x2={60} y2={68} stroke="var(--line2)" strokeWidth={1.6} markerEnd="url(#al-arrow)" />
      <defs>
        <marker id="al-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth={7} markerHeight={7} orient="auto">
          <path d="M0 0 L8 4 L0 8 z" fill="var(--line2)" />
        </marker>
      </defs>

      {/* rungs: top = strongest */}
      <Rung y={60} label="have to · must" sub={T({ en: 'obligation — no real choice', uk: 'обовʼязок — вибору немає' })} color={violet} />
      <Rung y={128} label="had better" sub={T({ en: 'warning — or a bad thing happens', uk: 'застереження — інакше буде погано' })} color={amber} />
      <Rung y={196} label="should · ought to" sub={T({ en: 'the standard recommendation', uk: 'стандартна рекомендація' })} color={sky} />
      <Rung y={264} label="could · might want to" sub={T({ en: 'a gentle option', uk: 'мʼяка опція' })} color={teal} />

      {/* past note */}
      <line x1={490} y1={150} x2={490} y2={230} stroke="var(--line)" strokeWidth={1} strokeDasharray="3 5" />
      <text x={506} y={150} fill="var(--tx2)" fontSize={12} fontWeight={700}>
        {T({ en: 'PAST', uk: 'МИНУЛЕ' })}
      </text>
      <text x={506} y={172} fill="var(--tx)" fontSize={13} fontWeight={600} fontFamily="var(--font-mono)">
        should have
      </text>
      <text x={506} y={190} fill="var(--tx)" fontSize={13} fontWeight={600} fontFamily="var(--font-mono)">
        + V3
      </text>
      <text x={506} y={212} fill="var(--tx3)" fontSize={11}>
        {T({ en: 'criticism /', uk: 'критика /' })}
      </text>
      <text x={506} y={226} fill="var(--tx3)" fontSize={11}>
        {T({ en: 'regret', uk: 'жаль' })}
      </text>

      <text x={320} y={360} textAnchor="middle" fill="var(--tx3)" fontSize={12}>
        {T({
          en: 'Soften with: Maybe you could… · Have you thought about…? · It might be worth…',
          uk: 'Помʼякшуйте: Maybe you could… · Have you thought about…? · It might be worth…',
        })}
      </text>
    </svg>
  );
}
