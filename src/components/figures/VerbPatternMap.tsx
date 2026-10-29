// CHANGED (C2): VerbPatternMap figure (m16) — the whole verb-pattern question in four buckets:
// verbs that take -ing · verbs that take to + V1 · verbs that take both with (almost) the same
// meaning · verbs whose meaning CHANGES with the form (→ the MeaningSwitch figure). The -ing bucket
// also carries the rule that wins every time: after a preposition, always -ing. Lists follow
// Cambridge (Verb patterns: verb + infinitive or verb + -ing?) and British Council LearnEnglish.
// Static SVG, theme tokens, bilingual, reduced-motion-safe.
import { useLang } from '../../i18n/lang';
import type { Localized } from '../../data/types';

type Bucket = { head: string; sub: Localized; verbs: string[]; foot?: Localized; color: string; x: number; y: number };

const W = 300;
const H = 150;

export function VerbPatternMap() {
  const { t } = useLang();
  const buckets: Bucket[] = [
    {
      head: 'verb + -ing',
      sub: { en: 'the action as a thing, a fact', uk: 'дія як річ, факт' },
      verbs: ['enjoy', 'avoid', 'finish', 'mind', 'consider', 'suggest', 'keep', 'admit', 'deny'],
      foot: { en: '+ after ANY preposition: look forward to', uk: '+ після БУДЬ-ЯКОГО прийменника' },
      color: 'var(--time-present)',
      x: 14,
      y: 44,
    },
    {
      head: 'verb + to + V1',
      sub: { en: 'an aim, a plan, a decision — still ahead', uk: 'мета, план, рішення — ще попереду' },
      verbs: ['want', 'decide', 'plan', 'hope', 'agree', 'refuse', 'manage', 'offer', 'promise', 'would like'],
      color: 'var(--time-future)',
      x: 326,
      y: 44,
    },
    {
      head: 'both — same meaning',
      sub: { en: 'choose either; the difference is small', uk: 'обирайте будь-яке; різниця невелика' },
      verbs: ['like', 'love', 'hate', 'prefer', 'start', 'begin', 'continue'],
      color: 'var(--lv-a2)',
      x: 14,
      y: 210,
    },
    {
      head: 'both — meaning changes',
      sub: { en: '-ing looks back · to looks forward', uk: '-ing дивиться назад · to — вперед' },
      verbs: ['stop', 'remember', 'forget', 'regret', 'try', 'go on', 'mean'],
      color: 'var(--amber)',
      x: 326,
      y: 210,
    },
  ];

  return (
    <svg
      viewBox="0 0 640 384"
      role="img"
      aria-label={t({
        en: 'Verb patterns in four buckets. Verb + -ing: enjoy, avoid, finish, mind, consider, suggest, keep, admit, deny — and -ing after every preposition, such as look forward to. Verb + to + V1: want, decide, plan, hope, agree, refuse, manage, offer, promise, would like. Both forms with the same meaning: like, love, hate, prefer, start, begin, continue. Both forms with a change of meaning: stop, remember, forget, regret, try, go on, mean.',
        uk: 'Конструкції дієслів у чотирьох групах. Дієслово + -ing: enjoy, avoid, finish, mind, consider, suggest, keep, admit, deny — і -ing після будь-якого прийменника, як-от look forward to. Дієслово + to + V1: want, decide, plan, hope, agree, refuse, manage, offer, promise, would like. Обидві форми з тим самим значенням: like, love, hate, prefer, start, begin, continue. Обидві форми зі зміною значення: stop, remember, forget, regret, try, go on, mean.',
      })}
      style={{ width: '100%', height: 'auto', display: 'block' }}
    >
      <text x={320} y={24} fill="var(--tx3)" fontSize={12} fontWeight={700} letterSpacing={1} textAnchor="middle">
        {t({ en: 'WHICH FORM AFTER THE VERB?', uk: 'ЯКА ФОРМА ПІСЛЯ ДІЄСЛОВА?' })}
      </text>

      {buckets.map((b) => {
        // Two columns of verbs per bucket keep every box the same size.
        const half = Math.ceil(b.verbs.length / 2);
        return (
          <g key={b.head}>
            <rect
              x={b.x}
              y={b.y}
              width={W}
              height={H}
              rx={10}
              fill={`color-mix(in srgb, ${b.color} 10%, transparent)`}
              stroke={b.color}
              strokeWidth={1.4}
            />
            <text x={b.x + 14} y={b.y + 22} fill={b.color} fontSize={14} fontWeight={700} fontFamily="var(--font-mono)">
              {b.head}
            </text>
            <text x={b.x + 14} y={b.y + 39} fill="var(--tx2)" fontSize={11}>
              {t(b.sub)}
            </text>
            {b.verbs.map((v, i) => (
              <text
                key={v}
                x={b.x + 14 + (i < half ? 0 : 140)}
                y={b.y + 60 + (i % half) * 15}
                fill="var(--tx)"
                fontSize={12.5}
                fontFamily="var(--font-mono)"
              >
                {v}
              </text>
            ))}
            {b.foot && (
              <text x={b.x + 14} y={b.y + H - 10} fill={b.color} fontSize={10.5} fontWeight={600}>
                {t(b.foot)}
              </text>
            )}
          </g>
        );
      })}

      <text x={320} y={380} fill="var(--tx3)" fontSize={12} textAnchor="middle">
        {t({
          en: 'Not sure? A preposition decides it: always -ing. For the amber bucket, see the meaning switch.',
          uk: 'Не певні? Прийменник вирішує: завжди -ing. Для бурштинової групи — див. перемикач значення.',
        })}
      </text>
    </svg>
  );
}
