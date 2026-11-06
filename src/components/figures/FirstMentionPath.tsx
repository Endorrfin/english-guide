// CHANGED (F1): FirstMentionPath figure (m2) — one noun's life in a short conversation: a (new to the listener)
// → the (now you both know which) → it (a pronoun takes over), then the two other routes: "the" with no first
// mention (only one / obvious from the situation) and no article (things in general). Grounded in British Council
// (Articles: a, an, the) and Cambridge (A/an and the: known vs not already known). One 400-wide column (the VA1 /
// VA2 rule), capped on desktop. Static SVG, theme tokens, bilingual, reduced-motion-safe.
import { useLang } from '../../i18n/lang';
import type { Localized } from '../../data/types';

const W = 400;
const TOP = 56;
const STEP_H = 62;

type Step = { mark: string; label: Localized; line: string; hue: string };
const STEPS: Step[] = [
  { mark: 'a', label: { en: 'New to the listener', uk: 'Нове для слухача' }, line: 'I found a bug.', hue: 'var(--lv-a1)' },
  { mark: 'the', label: { en: 'Now you both know which', uk: 'Тепер обидва знаєте, яка саме' }, line: 'The bug is in the login form.', hue: 'var(--lv-b1)' },
  { mark: 'it', label: { en: 'A pronoun takes over', uk: 'Далі працює займенник' }, line: 'We can fix it today.', hue: 'var(--lv-c1)' },
];

export function FirstMentionPath() {
  const { t } = useLang();
  const others = TOP + STEPS.length * STEP_H + 6;
  const h = others + 150;

  return (
    <svg
      viewBox={`0 0 ${W} ${h}`}
      role="img"
      aria-label={t({
        en: 'One noun in a conversation. First a, because it is new to the listener: I found a bug. Then the, because you both know which: The bug is in the login form. Then a pronoun: We can fix it today. Two other routes: the with no first mention, when there is only one or the situation makes it obvious, such as the sun, or the door; and no article for things in general: Bugs are expensive. Water freezes at 0 degrees.',
        uk: 'Один іменник у розмові. Спершу a, бо це нове для слухача: I found a bug. Потім the, бо обидва знаєте, яка саме: The bug is in the login form. Потім займенник: We can fix it today. Ще два шляхи: the без першої згадки, коли така річ одна або все зрозуміло із ситуації, як-от the sun чи the door; і без артикля для речей загалом: Bugs are expensive. Water freezes at 0 degrees.',
      })}
      style={{ width: '100%', maxWidth: 560, height: 'auto', display: 'block', margin: '0 auto' }}
    >
      <text x={14} y={24} fill="var(--tx)" fontSize={14} fontWeight={700}>
        {t({ en: 'Does the listener know which one?', uk: 'Чи знає слухач, який саме?' })}
      </text>
      <text x={14} y={42} fill="var(--tx3)" fontSize={12}>
        {t({ en: 'One noun, three sentences', uk: 'Один іменник, три речення' })}
      </text>

      {STEPS.map((s, i) => {
        const y = TOP + i * STEP_H;
        return (
          <g key={s.mark}>
            {i > 0 && <line x1={36} x2={36} y1={y - 12} y2={y} stroke="var(--line2)" strokeWidth={2} />}
            <rect x={8} y={y} width={W - 16} height={STEP_H - 12} rx={8} fill="var(--s2)" stroke="var(--line)" />
            <text x={36} y={y + 31} fill={s.hue} fontSize={17} fontWeight={700} textAnchor="middle" fontFamily="var(--font-mono)">
              {s.mark}
            </text>
            <text x={66} y={y + 20} fill={s.hue} fontSize={12} fontWeight={600}>
              {t(s.label)}
            </text>
            <text x={66} y={y + 39} fill="var(--tx)" fontSize={13} fontFamily="var(--font-mono)">
              {s.line}
            </text>
          </g>
        );
      })}

      <rect x={8} y={others} width={W - 16} height={64} rx={8} fill="none" stroke="var(--line2)" strokeDasharray="4 3" />
      <text x={20} y={others + 21} fill="var(--lv-b1)" fontSize={12} fontWeight={600}>
        {t({ en: 'the, with no first mention: one, or obvious here', uk: 'the без першої згадки: одна або й так зрозуміло' })}
      </text>
      <text x={20} y={others + 45} fill="var(--tx)" fontSize={13} fontFamily="var(--font-mono)">
        the sun · the CEO · Close the door.
      </text>

      <rect x={8} y={others + 74} width={W - 16} height={64} rx={8} fill="none" stroke="var(--line2)" strokeDasharray="4 3" />
      <text x={20} y={others + 95} fill="var(--tx2)" fontSize={12} fontWeight={600}>
        {t({ en: 'no article: plural or uncountable, in general', uk: 'без артикля: множина або uncountable, загалом' })}
      </text>
      <text x={20} y={others + 119} fill="var(--tx)" fontSize={13} fontFamily="var(--font-mono)">
        Bugs are expensive. · Water freezes.
      </text>
    </svg>
  );
}
