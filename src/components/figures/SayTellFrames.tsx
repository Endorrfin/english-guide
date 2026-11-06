// CHANGED (VA1): SayTellFrames figure (m34) — say · tell · speak · talk are told apart by the FRAME each
// verb needs, not by meaning (all four are «казати / говорити»). tell needs the listener right after it
// (tell me); say does not take the listener directly (say to me / say that …); speak is for languages
// and the more formal "speak to"; talk is the conversation (talk to / with, talk about). Per Cambridge
// (Say or tell? — tell takes an indirect object, say does not in indirect speech · Speak or talk? —
// speak is more formal, speak a language, talk implies a listener and a conversation).
// One column, 460 wide (browser pass: a 640-wide two-column draft shrank its text to ~5 px at 390 px and
// the glosses ran into the frame column). Static SVG, theme tokens, bilingual, reduced-motion-safe.
import { useLang } from '../../i18n/lang';
import type { Localized } from '../../data/types';

const W = 460;
const TOP = 58;
const ROW_H = 96;

type Row = { verb: string; frame: string; ex: string; wrong: string; gloss: Localized; hue: string };

export function SayTellFrames() {
  const { t } = useLang();
  const rows: Row[] = [
    {
      verb: 'say',
      frame: 'say + words · say that … · say (sth) to sb',
      ex: 'She said that the build was green.',
      wrong: '✕ She said me the build was green.',
      gloss: { en: 'the words themselves', uk: 'самі слова' },
      hue: 'var(--time-present)',
    },
    {
      verb: 'tell',
      frame: 'tell + sb + (that) … · tell sb to do',
      ex: 'She told me the build was green.',
      wrong: '✕ She told that the build was green.',
      gloss: { en: 'the listener comes first', uk: 'спершу слухач' },
      hue: 'var(--amber)',
    },
    {
      verb: 'speak',
      frame: 'speak + a language · speak to sb (formal)',
      ex: 'Do you speak Polish? · May I speak to the manager?',
      wrong: '✕ Do you talk Polish?',
      gloss: { en: 'a language, a formal talk', uk: 'мова, офіційна розмова' },
      hue: 'var(--time-future)',
    },
    {
      verb: 'talk',
      frame: 'talk to / with sb · talk about sth',
      ex: 'We talked about the release for an hour.',
      wrong: '✕ We talked the release.',
      gloss: { en: 'a conversation', uk: 'розмова' },
      hue: 'var(--lv-a1)',
    },
  ];
  const h = TOP + rows.length * ROW_H + 40;

  return (
    <svg
      viewBox={`0 0 ${W} ${h}`}
      role="img"
      aria-label={t({
        en: 'Say, tell, speak and talk, told apart by their frames. Say takes the words: She said that the build was green — not She said me. Tell takes the listener first: She told me the build was green — not She told that. Speak is for a language and the formal speak to: Do you speak Polish? May I speak to the manager? Talk is a conversation: talk to or with someone, talk about something: We talked about the release for an hour.',
        uk: 'Say, tell, speak і talk розрізняються рамками. Say бере слова: She said that the build was green — а не She said me. Tell спершу бере слухача: She told me the build was green — а не She told that. Speak — для мови і офіційного speak to: Do you speak Polish? May I speak to the manager? Talk — це розмова: talk to чи with когось, talk about щось: We talked about the release for an hour.',
      })}
      style={{ width: '100%', maxWidth: 620, height: 'auto', display: 'block', margin: '0 auto' }}
    >
      <text x={14} y={24} fill="var(--tx)" fontSize={14} fontWeight={700}>
        {t({ en: 'All four are «казати / говорити» — the frame decides', uk: 'Усі чотири — «казати / говорити»; вирішує рамка' })}
      </text>
      <text x={14} y={42} fill="var(--tx3)" fontSize={11}>
        {t({ en: 'Each row: the verb · its frame · ✓ a sentence · ✕ the slip', uk: 'Кожен рядок: дієслово · рамка · ✓ речення · ✕ помилка' })}
      </text>

      {rows.map((r, i) => {
        const y = TOP + i * ROW_H;
        return (
          <g key={r.verb}>
            <rect x={8} y={y} width={W - 16} height={ROW_H - 10} rx={8} fill="var(--s2)" stroke="var(--line)" />
            <rect x={8} y={y} width={5} height={ROW_H - 10} rx={2} fill={r.hue} />
            <text x={24} y={y + 22} fill={r.hue} fontSize={17} fontWeight={700} fontFamily="var(--font-mono)">
              {r.verb}
            </text>
            <text x={96} y={y + 21} fill="var(--tx3)" fontSize={11}>
              {t(r.gloss)}
            </text>
            <text x={24} y={y + 42} fill="var(--tx)" fontSize={12} fontFamily="var(--font-mono)">
              {r.frame}
            </text>
            <text x={24} y={y + 60} fill="var(--tx2)" fontSize={12}>
              {`✓ ${r.ex}`}
            </text>
            <text x={24} y={y + 77} fill="var(--danger)" fontSize={12}>
              {r.wrong}
            </text>
          </g>
        );
      })}

      <text x={W / 2} y={h - 24} fill="var(--tx3)" fontSize={11.5} textAnchor="middle">
        {t({ en: 'Is the listener right after the verb? → tell.', uk: 'Слухач одразу після дієслова? → tell.' })}
      </text>
      <text x={W / 2} y={h - 8} fill="var(--tx3)" fontSize={11.5} textAnchor="middle">
        {t({ en: 'The words or a that-clause? → say.', uk: 'Слова чи that-клауза? → say.' })}
      </text>
    </svg>
  );
}
