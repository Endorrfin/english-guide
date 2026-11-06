// CHANGED (F2): CountableSorter figure (m3) — the noun decides its partners: countable on the left, uncountable
// on the right, the shared words in the band between them, and the nouns that are countable in Ukrainian but not
// in English at the bottom. Grounded in British Council (Nouns: countable and uncountable) and Cambridge (Nouns:
// countable and uncountable, the advice / information trap). One 400-wide column (the VA1 / VA2 rule), capped on
// desktop. Static SVG, theme tokens, bilingual, reduced-motion-safe.
import { useLang } from '../../i18n/lang';
import type { Localized } from '../../data/types';

const W = 400;
const COL = 188;
const LEFT = 8;
const RIGHT = W - 8 - COL;

const LEFT_LINES = ['a bug', 'two bugs', 'many bugs', 'How many?'];
const RIGHT_LINES = ['advice', 'some advice', 'much advice', 'How much?'];

const HEADS: Localized[] = [
  { en: 'Countable', uk: 'Countable' },
  { en: 'Uncountable', uk: 'Uncountable' },
];

export function CountableSorter() {
  const { t } = useLang();
  const top = 56;
  const colH = 134;
  const band = top + colH + 10;
  const traps = band + 66;
  const h = traps + 92;

  return (
    <svg
      viewBox={`0 0 ${W} ${h}`}
      role="img"
      aria-label={t({
        en: 'Two columns. Countable: a bug, two bugs, many bugs, How many? Uncountable: advice, some advice, much advice, How much? Both can take some, any, a lot of and the. These nouns are uncountable in English: advice, information, news, feedback, software, equipment, furniture, progress.',
        uk: 'Дві колонки. Countable: a bug, two bugs, many bugs, How many? Uncountable: advice, some advice, much advice, How much? Обидва можуть брати some, any, a lot of і the. Ці іменники в англійській uncountable: advice, information, news, feedback, software, equipment, furniture, progress.',
      })}
      style={{ width: '100%', maxWidth: 560, height: 'auto', display: 'block', margin: '0 auto' }}
    >
      <text x={14} y={24} fill="var(--tx)" fontSize={14} fontWeight={700}>
        {t({ en: 'The noun picks its partners', uk: 'Іменник сам вибирає партнерів' })}
      </text>
      <text x={14} y={42} fill="var(--tx3)" fontSize={12}>
        {t({ en: 'Can you put a number in front of it?', uk: 'Чи можна поставити перед ним число?' })}
      </text>

      {[LEFT, RIGHT].map((x, c) => (
        <g key={x}>
          <rect x={x} y={top} width={COL} height={colH} rx={8} fill="var(--s2)" stroke="var(--line)" />
          <text x={x + 14} y={top + 24} fill={c === 0 ? 'var(--lv-a1)' : 'var(--lv-c1)'} fontSize={13} fontWeight={700}>
            {t(HEADS[c])}
          </text>
          {(c === 0 ? LEFT_LINES : RIGHT_LINES).map((line, i) => (
            <text key={line} x={x + 14} y={top + 50 + i * 21} fill="var(--tx)" fontSize={13} fontFamily="var(--font-mono)">
              {line}
            </text>
          ))}
        </g>
      ))}

      <rect x={LEFT} y={band} width={W - 16} height={54} rx={8} fill="none" stroke="var(--line2)" strokeDasharray="4 3" />
      <text x={W / 2} y={band + 21} fill="var(--tx2)" fontSize={12} fontWeight={600} textAnchor="middle">
        {t({ en: 'Both can take', uk: 'Обидва можуть брати' })}
      </text>
      <text x={W / 2} y={band + 41} fill="var(--tx)" fontSize={13} fontFamily="var(--font-mono)" textAnchor="middle">
        some · any · a lot of · the
      </text>

      <text x={14} y={traps + 10} fill="var(--amber)" fontSize={12} fontWeight={700}>
        {t({ en: 'Uncountable in English: no a / an, no -s', uk: 'В англійській uncountable: без a / an і без -s' })}
      </text>
      <text x={14} y={traps + 34} fill="var(--tx)" fontSize={13} fontFamily="var(--font-mono)">
        advice · information · news
      </text>
      <text x={14} y={traps + 54} fill="var(--tx)" fontSize={13} fontFamily="var(--font-mono)">
        feedback · software · equipment
      </text>
      <text x={14} y={traps + 74} fill="var(--tx)" fontSize={13} fontFamily="var(--font-mono)">
        furniture · progress
      </text>
    </svg>
  );
}
