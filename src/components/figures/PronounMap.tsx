// CHANGED (F1): PronounMap figure (m1) — be + the four pronoun jobs on one grid, read across: she is / her /
// her / hers. Amber marks a word that does two jobs in its row (you, it, her, his), which is where the reader
// has to look at the position instead of the spelling. One 400-wide column (the VA1 / VA2 rule: a wider viewBox
// shrinks the text below 9 px on a 390 px phone; capped on desktop). Static SVG, theme tokens, bilingual,
// reduced-motion-safe.
import { useLang } from '../../i18n/lang';
import type { Localized } from '../../data/types';

const W = 400;
const COLS = [34, 112, 196, 280, 362];
const TOP = 86;
const ROW_H = 30;

const HEAD: Localized[] = [
  { en: 'be', uk: 'be' },
  { en: 'subject', uk: 'підмет' },
  { en: 'object', uk: 'додаток' },
  { en: 'with a noun', uk: 'з іменником' },
  { en: 'alone', uk: 'окремо' },
];

const ROWS: string[][] = [
  ['am', 'I', 'me', 'my', 'mine'],
  ['are', 'you', 'you', 'your', 'yours'],
  ['is', 'he', 'him', 'his', 'his'],
  ['is', 'she', 'her', 'her', 'hers'],
  ['is', 'it', 'it', 'its', '—'],
  ['are', 'we', 'us', 'our', 'ours'],
  ['are', 'they', 'them', 'their', 'theirs'],
];

export function PronounMap() {
  const { t } = useLang();
  const h = TOP + ROWS.length * ROW_H + 66;

  return (
    <svg
      viewBox={`0 0 ${W} ${h}`}
      role="img"
      aria-label={t({
        en: 'A grid of be and the pronoun forms, read across. I: am, me, my, mine. You: are, you, your, yours. He: is, him, his, his. She: is, her, her, hers. It: is, it, its, and no form that stands alone. We: are, us, our, ours. They: are, them, their, theirs. You, it, her and his each do two jobs in their row.',
        uk: 'Таблиця be і форм займенників, читати впоперек. I: am, me, my, mine. You: are, you, your, yours. He: is, him, his, his. She: is, her, her, hers. It: is, it, its, а окремої форми немає. We: are, us, our, ours. They: are, them, their, theirs. You, it, her і his виконують у своєму рядку по дві ролі.',
      })}
      style={{ width: '100%', maxWidth: 560, height: 'auto', display: 'block', margin: '0 auto' }}
    >
      <text x={14} y={24} fill="var(--tx)" fontSize={14} fontWeight={700}>
        {t({ en: 'One person, four jobs', uk: 'Одна особа, чотири ролі' })}
      </text>
      <text x={14} y={42} fill="var(--tx3)" fontSize={12}>
        {t({ en: 'Read across: the position in the sentence picks the form', uk: 'Читайте впоперек: форму вибирає місце в реченні' })}
      </text>

      {HEAD.map((c, i) => (
        <text key={c.en} x={COLS[i]} y={TOP - 14} fill="var(--tx3)" fontSize={12} fontWeight={600} textAnchor="middle">
          {t(c)}
        </text>
      ))}
      <line x1={8} x2={W - 8} y1={TOP - 6} y2={TOP - 6} stroke="var(--line2)" />

      {ROWS.map((r, y) => {
        const cy = TOP + y * ROW_H + 19;
        return (
          <g key={r[1]}>
            {y % 2 === 0 && <rect x={8} y={cy - 19} width={W - 16} height={ROW_H} rx={5} fill="var(--s2)" />}
            {r.map((word, i) => {
              // A word that repeats among the pronoun columns of its row does two jobs (be is not a pronoun).
              const twoJobs = i > 0 && r.slice(1).filter((x) => x === word).length > 1;
              return (
                <text
                  key={i}
                  x={COLS[i]}
                  y={cy}
                  fill={i === 0 ? 'var(--lv-a1)' : twoJobs ? 'var(--amber)' : word === '—' ? 'var(--tx3)' : 'var(--tx)'}
                  fontSize={13.5}
                  fontWeight={twoJobs || i === 0 ? 700 : 500}
                  textAnchor="middle"
                >
                  {word}
                </text>
              );
            })}
          </g>
        );
      })}

      <text x={W / 2} y={h - 38} fill="var(--tx)" fontSize={12.5} fontFamily="var(--font-mono)" textAnchor="middle">
        She is here. · Call her. · her laptop · It’s hers.
      </text>
      <text x={W / 2} y={h - 14} fill="var(--amber)" fontSize={12} textAnchor="middle">
        {t({ en: 'Amber: the same word does two jobs in its row.', uk: 'Бурштиновий: те саме слово має в рядку дві ролі.' })}
      </text>
    </svg>
  );
}
