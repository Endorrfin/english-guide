// CHANGED (S1): ModalMap figure — the nine core modals arranged by the DISTANCING mental model:
// each "now/direct" modal has a distanced partner (past · politeness · unreality), must borrows
// had to, and the semi-modals sit on their own shelf. Crisp SVG, theme tokens, bilingual labels.
import { useLang } from '../../i18n/lang';

const DIRECT = ['can', 'may', 'will', 'shall', 'must'];
const DISTANCED = ['could', 'might', 'would', 'should', null] as const; // must has no partner
const SEMI = ['have to', 'need to', 'be able to', 'ought to', 'had better'];

const BOX_W = 124;
const BOX_H = 44;
const GAP = 16;
const LEFT = 30;
const x = (i: number) => LEFT + i * (BOX_W + GAP);

function Box({
  cx: cxPos,
  y,
  label,
  color,
  dashed,
  mono = true,
}: {
  cx: number;
  y: number;
  label: string;
  color: string;
  dashed?: boolean;
  mono?: boolean;
}) {
  return (
    <g>
      <rect
        x={cxPos}
        y={y}
        width={BOX_W}
        height={BOX_H}
        rx={10}
        fill={`color-mix(in srgb, ${color} 12%, transparent)`}
        stroke={color}
        strokeWidth={1.4}
        strokeDasharray={dashed ? '5 4' : undefined}
      />
      <text
        x={cxPos + BOX_W / 2}
        y={y + BOX_H / 2 + 5}
        textAnchor="middle"
        fill="var(--tx)"
        fontSize={15}
        fontWeight={600}
        fontFamily={mono ? 'var(--font-mono)' : 'var(--font-body)'}
      >
        {label}
      </text>
    </g>
  );
}

export function ModalMap() {
  const { t } = useLang();
  const sky = 'var(--lv-b1)';
  const violet = 'var(--lv-c1)';
  const teal = 'var(--lv-a2)';
  const amber = 'var(--amber)';

  return (
    <svg
      viewBox="0 0 760 400"
      role="img"
      aria-label={t({
        en: 'The nine core modals: five direct forms, their distanced partners, and the semi-modal shelf',
        uk: 'Девʼять основних modals: пʼять прямих форм, їхні дистанційовані пари і полиця semi-modals',
      })}
      style={{ width: '100%', height: 'auto', display: 'block' }}
    >
      {/* Row labels */}
      <text x={LEFT} y={38} fill="var(--tx2)" fontSize={12.5} fontWeight={700} letterSpacing={1}>
        {t({ en: 'DIRECT — real, now', uk: 'ПРЯМІ — реальне, зараз' }).toUpperCase()}
      </text>
      {DIRECT.map((m, i) => (
        <Box key={m} cx={x(i)} y={48} label={m} color={sky} />
      ))}

      {/* Distancing arrows */}
      {DIRECT.map((_, i) =>
        DISTANCED[i] ? (
          <line
            key={i}
            x1={x(i) + BOX_W / 2}
            y1={48 + BOX_H}
            x2={x(i) + BOX_W / 2}
            y2={158}
            stroke="var(--line2)"
            strokeWidth={1.4}
            markerEnd="url(#mm-arrow)"
          />
        ) : (
          <line
            key={i}
            x1={x(i) + BOX_W / 2}
            y1={48 + BOX_H}
            x2={x(i) + BOX_W / 2}
            y2={158}
            stroke={amber}
            strokeWidth={1.4}
            strokeDasharray="4 4"
            markerEnd="url(#mm-arrow-amber)"
          />
        ),
      )}
      <defs>
        <marker id="mm-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth={7} markerHeight={7} orient="auto">
          <path d="M0 0 L8 4 L0 8 z" fill="var(--line2)" />
        </marker>
        <marker id="mm-arrow-amber" viewBox="0 0 8 8" refX="7" refY="4" markerWidth={7} markerHeight={7} orient="auto">
          <path d="M0 0 L8 4 L0 8 z" fill={amber} />
        </marker>
      </defs>
      <text x={380} y={135} textAnchor="middle" fill="var(--tx3)" fontSize={12.5} fontStyle="italic">
        {t({
          en: 'one step of distance = past time · politeness · unreality',
          uk: 'один крок дистанції = минулий час · ввічливість · нереальність',
        })}
      </text>

      {/* Distanced row */}
      <text x={LEFT} y={152 + 26 - 32} fill="var(--tx2)" fontSize={12.5} fontWeight={700} letterSpacing={1} opacity={0}>
        .
      </text>
      {DISTANCED.map((m, i) =>
        m ? (
          <Box key={m} cx={x(i)} y={166} label={m} color={violet} />
        ) : (
          <Box key="had-to" cx={x(i)} y={166} label="had to" color={amber} dashed />
        ),
      )}
      <text x={LEFT} y={238} fill="var(--tx2)" fontSize={12.5} fontWeight={700} letterSpacing={1}>
        {t({ en: 'DISTANCED — past, polite, unreal', uk: 'ДИСТАНЦІЙОВАНІ — минуле, ввічливе, нереальне' }).toUpperCase()}
      </text>
      <text x={x(4) + BOX_W / 2} y={238} textAnchor="middle" fill={amber} fontSize={11.5}>
        {t({ en: 'must has no past → had to', uk: 'у must немає минулого → had to' })}
      </text>

      {/* Semi-modal shelf */}
      <rect
        x={LEFT - 12}
        y={272}
        width={x(4) + BOX_W - LEFT + 24}
        height={78}
        rx={14}
        fill="var(--s2)"
        stroke="var(--line)"
      />
      <text x={LEFT + 2} y={296} fill="var(--tx2)" fontSize={12.5} fontWeight={700} letterSpacing={1}>
        {t({
          en: 'SEMI-MODALS — conjugate like normal verbs',
          uk: 'SEMI-MODALS — відмінюються як звичайні дієслова',
        }).toUpperCase()}
      </text>
      {SEMI.map((m, i) => (
        <Box key={m} cx={x(i)} y={302 - 44 + 46 + 2} label={m} color={teal} />
      ))}

      <text x={380} y={384} textAnchor="middle" fill="var(--tx3)" fontSize={12}>
        {t({
          en: 'They fill the gaps: after another modal (will be able to), in past forms (had to), with -s and to.',
          uk: 'Вони закривають прогалини: після іншого modal (will be able to), у минулому (had to), із -s і to.',
        })}
      </text>
    </svg>
  );
}
