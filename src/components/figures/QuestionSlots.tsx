// CHANGED (F2): QuestionSlots figure (m4) — every question on one set of slots: question word · operator · subject ·
// verb · the rest. The last row is the point of the figure: in a subject question who already stands IN the subject
// slot, so there is nothing to invert and no do. Grounded in British Council (Question forms) and Cambridge (Questions:
// wh- questions). One 400-wide column (the VA1 / VA2 rule), capped on desktop. Static SVG, theme tokens, bilingual,
// reduced-motion-safe.
import { useLang } from '../../i18n/lang';
import type { Localized } from '../../data/types';

const W = 400;
const COLS = [14, 72, 122, 190, 256];
const TOP = 84;
const ROW_H = 36;

const HEAD: Localized[] = [
  { en: 'Q-word', uk: 'Q-слово' },
  { en: 'aux', uk: 'aux' },
  { en: 'subject', uk: 'підмет' },
  { en: 'verb', uk: 'дієслово' },
  { en: 'the rest', uk: 'решта' },
];

const ROWS: string[][] = [
  ['', 'Is', 'she', '', 'ready?'],
  ['', 'Does', 'she', 'work', 'here?'],
  ['Where', 'do', 'you', 'work?', ''],
  ['Where', 'did', 'she', 'go?', ''],
  ['What', 'can', 'we', 'ship', 'today?'],
];
const SUBJECT_ROW = ['', '', 'Who', 'broke', 'the build?'];

function Row({ cells, y, hot }: { cells: string[]; y: number; hot?: boolean }) {
  return (
    <>
      {cells.map((c, i) =>
        c ? (
          <text
            key={i}
            x={COLS[i]}
            y={y}
            fill={i === 1 ? 'var(--amber)' : i === 2 ? (hot ? 'var(--amber)' : 'var(--lv-b1)') : 'var(--tx)'}
            fontSize={13}
            fontWeight={i === 1 || (hot && i === 2) ? 700 : 500}
          >
            {c}
          </text>
        ) : null,
      )}
    </>
  );
}

export function QuestionSlots() {
  const { t } = useLang();
  const subjectY = TOP + ROWS.length * ROW_H + 8;
  const h = subjectY + 84;

  return (
    <svg
      viewBox={`0 0 ${W} ${h}`}
      role="img"
      aria-label={t({
        en: 'Questions on five slots: question word, auxiliary, subject, verb, the rest. Is she ready? Does she work here? Where do you work? Where did she go? What can we ship today? The auxiliary always stands before the subject. In a subject question, Who broke the build?, who is already the subject, so there is no auxiliary and no inversion.',
        uk: 'Питання на пʼяти слотах: питальне слово, допоміжне дієслово, підмет, дієслово, решта. Is she ready? Does she work here? Where do you work? Where did she go? What can we ship today? Допоміжне дієслово завжди стоїть перед підметом. У питанні до підмета, Who broke the build?, who вже є підметом, тому немає ні допоміжного дієслова, ні інверсії.',
      })}
      style={{ width: '100%', maxWidth: 560, height: 'auto', display: 'block', margin: '0 auto' }}
    >
      <text x={14} y={24} fill="var(--tx)" fontSize={14} fontWeight={700}>
        {t({ en: 'One set of slots for every question', uk: 'Один набір слотів для кожного питання' })}
      </text>
      <text x={14} y={42} fill="var(--tx3)" fontSize={12}>
        {t({ en: 'The aux stands before the subject', uk: 'Aux стоїть перед підметом' })}
      </text>

      {HEAD.map((c, i) => (
        <text key={c.en} x={COLS[i]} y={TOP - 14} fill="var(--tx3)" fontSize={12} fontWeight={600}>
          {t(c)}
        </text>
      ))}
      <line x1={8} x2={W - 8} y1={TOP - 6} y2={TOP - 6} stroke="var(--line2)" />

      {ROWS.map((r, i) => (
        <Row key={r.join(' ')} cells={r} y={TOP + i * ROW_H + 18} />
      ))}

      <rect x={6} y={subjectY} width={W - 12} height={70} rx={8} fill="var(--s2)" stroke="var(--amber)" />
      <Row cells={SUBJECT_ROW} y={subjectY + 24} hot />
      <text x={14} y={subjectY + 50} fill="var(--tx2)" fontSize={12}>
        {t({ en: 'Who is the subject already: no aux, no inversion.', uk: 'Who вже є підметом: без aux і без інверсії.' })}
      </text>
    </svg>
  );
}
