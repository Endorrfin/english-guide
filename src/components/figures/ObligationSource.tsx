// CHANGED (S2): ObligationSource figure (m19) — two dials for one idea. Left: the SOURCE of the
// obligation (inside the speaker = must; outside = have to / need to). Right: the NEGATION cliff,
// where the same idea splits into opposites (mustn't = ban; don't have to = optional). Bilingual SVG.
import { useLang } from '../../i18n/lang';
import type { Localized } from '../../data/types';

function Pill({ x, y, w, label, sub, color }: { x: number; y: number; w: number; label: string; sub: string; color: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={48} rx={10} fill={`color-mix(in srgb, ${color} 12%, transparent)`} stroke={color} strokeWidth={1.4} />
      <text x={x + w / 2} y={y + 21} textAnchor="middle" fill="var(--tx)" fontSize={15} fontWeight={700} fontFamily="var(--font-mono)">
        {label}
      </text>
      <text x={x + w / 2} y={y + 38} textAnchor="middle" fill="var(--tx2)" fontSize={11.5}>
        {sub}
      </text>
    </g>
  );
}

export function ObligationSource() {
  const { t } = useLang();
  const sky = 'var(--lv-b1)';
  const teal = 'var(--lv-a2)';
  const amber = 'var(--amber)';
  const violet = 'var(--lv-c1)';
  const T = (v: Localized) => t(v);

  return (
    <svg
      viewBox="0 0 760 344"
      role="img"
      aria-label={T({
        en: 'Two dials: the source of obligation (must from inside the speaker, have to from outside), and the negation cliff (mustn’t bans the action, don’t have to removes the necessity).',
        uk: 'Два регулятори: джерело обовʼязку (must зсередини мовця, have to ззовні) і обрив заперечення (mustn’t забороняє дію, don’t have to знімає необхідність).',
      })}
      style={{ width: '100%', height: 'auto', display: 'block' }}
    >
      {/* ── Left panel: SOURCE ── */}
      <text x={30} y={34} fill="var(--tx2)" fontSize={12.5} fontWeight={700} letterSpacing={1}>
        {T({ en: '1 · WHO SAYS SO?', uk: '1 · ХТО ТАК КАЖЕ?' }).toUpperCase()}
      </text>
      <line x1={70} y1={70} x2={70} y2={250} stroke="var(--line2)" strokeWidth={1.4} />
      <text x={92} y={78} fill={sky} fontSize={12} fontWeight={700}>
        {T({ en: 'INSIDE', uk: 'ЗСЕРЕДИНИ' })}
      </text>
      <Pill x={92} y={90} w={230} label="must" sub={T({ en: 'my resolve · written notices', uk: 'моє рішення · писані оголошення' })} color={sky} />
      <text x={92} y={188} fill={teal} fontSize={12} fontWeight={700}>
        {T({ en: 'OUTSIDE', uk: 'ЗЗОВНІ' })}
      </text>
      <Pill x={92} y={200} w={230} label="have to · need to" sub={T({ en: 'rules · law · circumstances', uk: 'правила · закон · обставини' })} color={teal} />

      {/* divider */}
      <line x1={380} y1={40} x2={380} y2={300} stroke="var(--line)" strokeWidth={1} strokeDasharray="3 5" />

      {/* ── Right panel: NEGATION CLIFF ── */}
      <text x={412} y={34} fill="var(--tx2)" fontSize={12.5} fontWeight={700} letterSpacing={1}>
        {T({ en: '2 · WHAT DOES “NOT” DENY?', uk: '2 · ЩО ЗАПЕРЕЧУЄ «NOT»?' }).toUpperCase()}
      </text>
      <rect x={430} y={150} width={92} height={40} rx={20} fill="var(--s2)" stroke="var(--line)" />
      <text x={476} y={175} textAnchor="middle" fill="var(--tx)" fontSize={14} fontWeight={700} fontFamily="var(--font-mono)">
        not
      </text>

      {/* up branch: prohibition */}
      <line x1={522} y1={162} x2={566} y2={112} stroke={amber} strokeWidth={1.4} markerEnd="url(#os-arrow-a)" />
      <line x1={522} y1={178} x2={566} y2={238} stroke={violet} strokeWidth={1.4} markerEnd="url(#os-arrow-v)" />
      <defs>
        <marker id="os-arrow-a" viewBox="0 0 8 8" refX="7" refY="4" markerWidth={7} markerHeight={7} orient="auto">
          <path d="M0 0 L8 4 L0 8 z" fill={amber} />
        </marker>
        <marker id="os-arrow-v" viewBox="0 0 8 8" refX="7" refY="4" markerWidth={7} markerHeight={7} orient="auto">
          <path d="M0 0 L8 4 L0 8 z" fill={violet} />
        </marker>
      </defs>
      <Pill x={566} y={86} w={168} label="mustn’t" sub={T({ en: 'the ACTION — «не можна»', uk: 'сама ДІЯ — «не можна»' })} color={amber} />
      <Pill x={566} y={214} w={168} label="don’t have to" sub={T({ en: 'the NEED — «не обовʼязково»', uk: 'ПОТРЕБА — «не обовʼязково»' })} color={violet} />

      <text x={380} y={330} textAnchor="middle" fill="var(--tx3)" fontSize={12}>
        {T({
          en: 'Affirmative twins, negative opposites: a ban vs a free choice.',
          uk: 'Стверджувальні близнюки, заперечні протилежності: заборона проти вільного вибору.',
        })}
      </text>
    </svg>
  );
}
