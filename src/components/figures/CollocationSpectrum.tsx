// CHANGED (VA2): CollocationSpectrum figure (m33) — how freely can you swap a word? From a free combination
// (any adjective fits) through weak and strong collocations (Cambridge, Collocation: strong = the link is
// quite fixed and restricted; weak = a word pairs with many others) to an idiom (the meaning is not the sum
// of the words). The placement of each example is this module's illustration, not a Cambridge label; the
// borders are fuzzy and the figure says so. One 400-wide column (browser pass: at 460 the text fell below
// 9 px on a 390 px phone; capped on desktop). Static SVG, theme tokens, bilingual, reduced-motion-safe.
import { useLang } from '../../i18n/lang';
import type { Localized } from '../../data/types';

const W = 400;
const TOP = 58;
const ROW_H = 84;

type Row = { stage: Localized; ex: string; test: Localized; hub: Localized; hue: string };

export function CollocationSpectrum() {
  const { t } = useLang();
  const rows: Row[] = [
    {
      stage: { en: 'Free combination', uk: 'Вільне сполучення' },
      ex: 'a nice / old / new / small house',
      test: { en: 'Almost any fitting word works.', uk: 'Підходить майже будь-яке доречне слово.' },
      hub: { en: 'nothing to learn', uk: 'вчити нічого' },
      hue: 'var(--tx3)',
    },
    {
      stage: { en: 'Weak collocation', uk: 'Слабка колокація' },
      ex: 'a big / serious / major problem',
      test: { en: 'Several partners, but not any word.', uk: 'Кілька партнерів, але не будь-яке слово.' },
      hub: { en: 'the Collocations tab', uk: 'вкладка Collocations' },
      hue: 'var(--lv-b1)',
    },
    {
      stage: { en: 'Strong collocation', uk: 'Сильна колокація' },
      ex: 'heavy rain · ✕ strong rain · ✕ big rain',
      test: { en: 'Clear meaning, restricted partner.', uk: 'Зміст зрозумілий, партнер обмежений.' },
      hub: { en: 'the Collocations tab', uk: 'вкладка Collocations' },
      hue: 'var(--sec-vocab)',
    },
    {
      stage: { en: 'Idiom', uk: 'Ідіома' },
      ex: 'kick the bucket = to die',
      test: { en: 'The words don’t add up to the meaning.', uk: 'Слова не складаються у зміст.' },
      hub: { en: 'the Idioms tab', uk: 'вкладка Idioms' },
      hue: 'var(--amber)',
    },
  ];
  const h = TOP + rows.length * ROW_H + 26;

  return (
    <svg
      viewBox={`0 0 ${W} ${h}`}
      role="img"
      aria-label={t({
        en: 'A scale of how freely words combine, in four steps. Free combination: a nice, old, new or small house; almost any fitting word works. Weak collocation: a big, serious or major problem; several partners, but not any word. Strong collocation: heavy rain, not strong rain or big rain; the meaning is clear but the partner is restricted. Idiom: kick the bucket means to die; the words do not add up to the meaning. The borders between the steps are fuzzy.',
        uk: 'Шкала того, наскільки вільно поєднуються слова, у чотири кроки. Вільне сполучення: a nice, old, new чи small house; підходить майже будь-яке доречне слово. Слабка колокація: a big, serious чи major problem; кілька партнерів, але не будь-яке слово. Сильна колокація: heavy rain, а не strong rain чи big rain; зміст зрозумілий, але партнер обмежений. Ідіома: kick the bucket означає померти; слова не складаються у зміст. Межі між кроками розмиті.',
      })}
      style={{ width: '100%', maxWidth: 560, height: 'auto', display: 'block', margin: '0 auto' }}
    >
      <text x={14} y={24} fill="var(--tx)" fontSize={14} fontWeight={700}>
        {t({ en: 'How freely can you swap a word?', uk: 'Наскільки вільно можна замінити слово?' })}
      </text>
      <text x={14} y={42} fill="var(--tx3)" fontSize={11}>
        {t({ en: 'From top to bottom: fewer and fewer choices', uk: 'Згори донизу: дедалі менше вибору' })}
      </text>

      {rows.map((r, i) => {
        const y = TOP + i * ROW_H;
        return (
          <g key={r.ex}>
            <rect x={8} y={y} width={W - 16} height={ROW_H - 10} rx={8} fill="var(--s2)" stroke="var(--line)" />
            <rect x={8} y={y} width={5} height={ROW_H - 10} rx={2} fill={r.hue} />
            <text x={24} y={y + 21} fill={r.hue} fontSize={13} fontWeight={700}>
              {t(r.stage)}
            </text>
            <text x={W - 18} y={y + 21} fill="var(--tx3)" fontSize={11} textAnchor="end">
              {t(r.hub)}
            </text>
            <text x={24} y={y + 42} fill="var(--tx)" fontSize={13} fontFamily="var(--font-mono)">
              {r.ex}
            </text>
            <text x={24} y={y + 61} fill="var(--tx2)" fontSize={12}>
              {t(r.test)}
            </text>
          </g>
        );
      })}

      <text x={W / 2} y={h - 10} fill="var(--tx3)" fontSize={11.5} textAnchor="middle">
        {t({ en: 'The borders are fuzzy: the steps show a direction, not four boxes.', uk: 'Межі розмиті: кроки показують напрямок, а не чотири коробки.' })}
      </text>
    </svg>
  );
}
