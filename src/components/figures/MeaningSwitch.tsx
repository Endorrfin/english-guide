// CHANGED (C2): MeaningSwitch figure (m16) — the one picture behind stop · remember · forget ·
// regret: the verb is a moment X on a timeline; the -ing action sits BEFORE it (a memory, a habit
// that ends, something already done) and the to-action sits AFTER it (a task still to do, the
// reason you paused). Rose = before, violet = after — the same time hues as the TenseGlyphs
// vocabulary. try is left out on purpose: its switch (an experiment vs an effort) is not about time,
// and the module teaches it in prose. Meanings per Cambridge (Stop + -ing form or to-infinitive)
// and British Council LearnEnglish (Verbs followed by -ing or infinitive to change meaning).
// Static SVG, theme tokens, bilingual, reduced-motion-safe.
import { useLang } from '../../i18n/lang';
import type { Localized } from '../../data/types';

const X = 320; // the verb's moment
const TOP = 66;
const ROW_H = 62;

type Row = { verb: string; ing: string; to: string; ingGloss: Localized; toGloss: Localized };

export function MeaningSwitch() {
  const { t } = useLang();
  const rows: Row[] = [
    {
      verb: 'remember',
      ing: 'remember locking it',
      to: 'remember to lock it',
      ingGloss: { en: 'a memory of it', uk: 'спогад про це' },
      toGloss: { en: 'don’t miss the task', uk: 'не пропустити завдання' },
    },
    {
      verb: 'forget',
      ing: 'never forget meeting her',
      to: 'forget to call',
      ingGloss: { en: 'a memory you keep (or lose)', uk: 'спогад, що лишається (чи зникає)' },
      toGloss: { en: 'the task didn’t happen', uk: 'завдання не виконано' },
    },
    {
      verb: 'stop',
      ing: 'stop checking email',
      to: 'stop to check email',
      ingGloss: { en: 'the activity ends', uk: 'дія припиняється' },
      toGloss: { en: 'pause in order to do it', uk: 'пауза, щоб це зробити' },
    },
    {
      verb: 'regret',
      ing: 'regret saying it',
      to: 'regret to tell you',
      ingGloss: { en: 'sorry it happened', uk: 'шкода, що сталося' },
      toGloss: { en: 'sorry for news coming now', uk: 'шкода повідомити зараз' },
    },
  ];

  return (
    <svg
      viewBox="0 0 640 340"
      role="img"
      aria-label={t({
        en: 'The meaning switch. The verb is a moment on a timeline. With -ing, the action comes before it; with to, the action comes after it. Remember locking it is a memory; remember to lock it is a task you must not miss. Never forget meeting her is a memory; forget to call means the call did not happen. Stop checking email ends the activity; stop to check email is a pause in order to check it. Regret saying it means you are sorry it happened; regret to tell you announces news now.',
        uk: 'Перемикач значення. Дієслово — це момент на часовій осі. З -ing дія відбувається до нього; з to — після нього. Remember locking it — спогад; remember to lock it — завдання, яке не можна пропустити. Never forget meeting her — спогад; forget to call — дзвінка не було. Stop checking email — дія припиняється; stop to check email — пауза, щоб перевірити пошту. Regret saying it — шкода, що це сталося; regret to tell you — повідомлення новини зараз.',
      })}
      style={{ width: '100%', height: 'auto', display: 'block' }}
    >
      <defs>
        <marker id="ms-arrow-back" viewBox="0 0 8 8" refX="7" refY="4" markerWidth={7} markerHeight={7} orient="auto">
          <path d="M0 0 L8 4 L0 8 z" fill="var(--time-past)" />
        </marker>
        <marker id="ms-arrow-fwd" viewBox="0 0 8 8" refX="7" refY="4" markerWidth={7} markerHeight={7} orient="auto">
          <path d="M0 0 L8 4 L0 8 z" fill="var(--time-future)" />
        </marker>
      </defs>

      {/* column heads */}
      <text x={150} y={28} fill="var(--time-past)" fontSize={13} fontWeight={700} textAnchor="middle" fontFamily="var(--font-mono)">
        verb + -ing
      </text>
      <text x={150} y={44} fill="var(--tx3)" fontSize={11} textAnchor="middle">
        {t({ en: 'the action is BEFORE the verb', uk: 'дія — ДО дієслова' })}
      </text>
      <text x={490} y={28} fill="var(--time-future)" fontSize={13} fontWeight={700} textAnchor="middle" fontFamily="var(--font-mono)">
        verb + to + V1
      </text>
      <text x={490} y={44} fill="var(--tx3)" fontSize={11} textAnchor="middle">
        {t({ en: 'the action is AFTER the verb', uk: 'дія — ПІСЛЯ дієслова' })}
      </text>

      {/* the moment of the verb */}
      <line x1={X} y1={TOP - 12} x2={X} y2={TOP + ROW_H * rows.length - 14} stroke="var(--line2)" strokeWidth={1.4} strokeDasharray="4 4" />

      {rows.map((r, i) => {
        const y = TOP + i * ROW_H + 18;
        return (
          <g key={r.verb}>
            <line x1={40} y1={y} x2={600} y2={y} stroke="var(--line)" strokeWidth={1} />
            {/* -ing: an action before X, the arrow points back to it */}
            <circle cx={170} cy={y} r={6} fill="var(--time-past)" />
            <line x1={X - 14} y1={y} x2={182} y2={y} stroke="var(--time-past)" strokeWidth={1.8} markerEnd="url(#ms-arrow-back)" />
            {/* to: an action after X, the arrow points forward to it */}
            <circle cx={470} cy={y} r={6} fill="var(--time-future)" />
            <line x1={X + 14} y1={y} x2={458} y2={y} stroke="var(--time-future)" strokeWidth={1.8} markerEnd="url(#ms-arrow-fwd)" />
            {/* the verb itself */}
            <rect x={X - 44} y={y - 12} width={88} height={24} rx={6} fill="var(--s2)" stroke="var(--line2)" />
            <text x={X} y={y + 4} fill="var(--tx)" fontSize={12.5} fontWeight={700} textAnchor="middle" fontFamily="var(--font-mono)">
              {r.verb}
            </text>
            {/* labels */}
            <text x={170} y={y - 12} fill="var(--tx)" fontSize={12} textAnchor="middle" fontFamily="var(--font-mono)">
              {r.ing}
            </text>
            <text x={170} y={y + 22} fill="var(--tx3)" fontSize={11} textAnchor="middle">
              {t(r.ingGloss)}
            </text>
            <text x={470} y={y - 12} fill="var(--tx)" fontSize={12} textAnchor="middle" fontFamily="var(--font-mono)">
              {r.to}
            </text>
            <text x={470} y={y + 22} fill="var(--tx3)" fontSize={11} textAnchor="middle">
              {t(r.toGloss)}
            </text>
          </g>
        );
      })}

      <text x={320} y={330} fill="var(--tx3)" fontSize={12} textAnchor="middle">
        {t({
          en: '-ing looks back at something already there; to looks forward to something still to do.',
          uk: '-ing дивиться назад, на те, що вже є; to — уперед, на те, що ще треба зробити.',
        })}
      </text>
    </svg>
  );
}
