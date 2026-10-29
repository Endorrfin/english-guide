// CHANGED (C3): ComparisonScale figure (m12) — the four comparison shapes read off ONE measured
// picture: four services' p95 response time as bars (shorter = faster). Each bar carries the
// sentence the data licenses: the fastest · as fast as · much faster than · the slowest — so
// as … as (equal), -er than (different) and the -est (top of the whole group) are seen as
// relations between real numbers, not as endings. Forms per Cambridge (Comparison: adjectives ·
// As … as) and British Council LearnEnglish (Comparative and superlative adjectives).
// Static SVG, theme tokens, bilingual, reduced-motion-safe.
import { useLang } from '../../i18n/lang';
import type { Localized } from '../../data/types';

const X0 = 120; // where bars start
const SCALE = 0.62; // px per ms
const ROW_H = 54;
const TOP = 70;

type Row = { name: string; ms: number; sentence: string; gloss: Localized; color: string };

export function ComparisonScale() {
  const { t } = useLang();
  const rows: Row[] = [
    {
      name: 'cache',
      ms: 40,
      sentence: 'the fastest (of the four)',
      gloss: { en: 'superlative: top of the whole group', uk: 'superlative: перший у всій групі' },
      color: 'var(--lv-a1)',
    },
    {
      name: 'auth',
      ms: 120,
      sentence: 'as fast as search',
      gloss: { en: 'as … as: equal', uk: 'as … as: однаково' },
      color: 'var(--lv-b1)',
    },
    {
      name: 'search',
      ms: 120,
      sentence: 'much faster than reports',
      gloss: { en: 'comparative + than: two things', uk: 'comparative + than: дві речі' },
      color: 'var(--lv-b1)',
    },
    {
      name: 'reports',
      ms: 400,
      sentence: 'the slowest · not as fast as auth',
      gloss: { en: 'superlative · not as … as', uk: 'superlative · not as … as' },
      color: 'var(--lv-c1)',
    },
  ];

  return (
    <svg
      viewBox="0 0 640 312"
      role="img"
      aria-label={t({
        en: 'Four services and their response times, shorter bar means faster. Cache, 40 milliseconds: the fastest of the four. Auth, 120 milliseconds: as fast as search. Search, 120 milliseconds: much faster than reports. Reports, 400 milliseconds: the slowest, and not as fast as auth.',
        uk: 'Чотири сервіси та їхній час відповіді, коротша смуга — швидше. Cache, 40 мілісекунд: the fastest of the four. Auth, 120 мілісекунд: as fast as search. Search, 120 мілісекунд: much faster than reports. Reports, 400 мілісекунд: the slowest і not as fast as auth.',
      })}
      style={{ width: '100%', height: 'auto', display: 'block' }}
    >
      <text x={320} y={24} fill="var(--tx3)" fontSize={12} fontWeight={700} letterSpacing={1} textAnchor="middle">
        {t({ en: 'P95 RESPONSE TIME — SHORTER BAR = FASTER', uk: 'P95 ЧАС ВІДПОВІДІ — КОРОТША СМУГА = ШВИДШЕ' })}
      </text>

      {rows.map((r, i) => {
        const y = TOP + i * ROW_H;
        const w = r.ms * SCALE;
        return (
          <g key={r.name}>
            <text x={X0 - 12} y={y + 15} fill="var(--tx)" fontSize={13} fontWeight={700} textAnchor="end" fontFamily="var(--font-mono)">
              {r.name}
            </text>
            <rect x={X0} y={y} width={w} height={20} rx={4} fill={`color-mix(in srgb, ${r.color} 55%, transparent)`} stroke={r.color} />
            <text x={X0 + w + 8} y={y + 15} fill="var(--tx2)" fontSize={11.5} fontFamily="var(--font-mono)">
              {r.ms} ms
            </text>
            <text x={X0} y={y + 37} fill="var(--tx)" fontSize={12.5} fontFamily="var(--font-mono)">
              {r.name} is {r.sentence}
            </text>
            <text x={630} y={y + 37} fill="var(--tx3)" fontSize={10.5} textAnchor="end">
              {t(r.gloss)}
            </text>
          </g>
        );
      })}

      <text x={320} y={302} fill="var(--tx3)" fontSize={12} textAnchor="middle">
        {t({
          en: 'Two things → -er / more … than. The whole group → the -est / the most. Equal → as … as.',
          uk: 'Дві речі → -er / more … than. Уся група → the -est / the most. Однаково → as … as.',
        })}
      </text>
    </svg>
  );
}
