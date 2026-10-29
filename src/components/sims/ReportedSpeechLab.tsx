// CHANGED (C2): ★ Reported Speech Lab — m15's signature sim. Pick what was said (statement · yes/no
// question · wh-question · request), one of two sentences, and the reporting FRAME (she says… ·
// she said… · she said…, but it’s still true); get the reported sentence with every change
// highlighted by kind (tense · pronoun · time · place · word order · if/whether · to-infinitive),
// a "from → to" list of the shifts, why this frame renders this way, and the typical UA-speaker trap.
// Engine: src/lib/reportedSpeech.ts (pure, golden-tested); content: src/data/reportedSpeechLab.ts.
// A11y mirrors ConditionalsMachine: three radiogroups with roving tabindex + arrow keys, one polite
// live region. No animation (reduced-motion safe by construction). Accent: Section III sky.
import { useId, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { useLang } from '../../i18n/lang';
import { ui } from '../../i18n/ui';
import { FRAMES, SPEECH_KINDS, isNa, itemsOfKind, renderFor, segments } from '../../lib/reportedSpeech';
import type { Frame, Item, Render, ShiftKind, SpeechKind } from '../../lib/reportedSpeech';
import { useTts } from '../../lib/tts';
import { cx } from '../../lib/utils';
import type { Localized } from '../../data/types';

const KIND_LABEL: Record<SpeechKind, Localized> = {
  statement: { en: 'Statement', uk: 'Твердження' },
  'yes-no': { en: 'Yes/no question', uk: 'Загальне питання' },
  wh: { en: 'Wh-question', uk: 'Wh-питання' },
  request: { en: 'Request / command', uk: 'Прохання / наказ' },
};
const FRAME_LABEL: Record<Frame, Localized> = {
  says: { en: 'Anna says…', uk: 'Anna says…' },
  said: { en: 'Anna said… (a week later)', uk: 'Anna said… (через тиждень)' },
  'still-true': { en: 'Anna said… (still true)', uk: 'Anna said… (досі правда)' },
};
const FRAME_GLOSS: Record<Frame, Localized> = {
  says: { en: 'present reporting verb', uk: 'дієслово звітування в present' },
  said: { en: 'time has passed', uk: 'час минув' },
  'still-true': { en: 'reported soon, still true or still ahead', uk: 'звіт невдовзі, досі правда чи ще попереду' },
};
const SHIFT_LABEL: Record<ShiftKind, Localized> = {
  tense: { en: 'tense back', uk: 'час назад' },
  pronoun: { en: 'pronoun', uk: 'займенник' },
  time: { en: 'time word', uk: 'слово часу' },
  place: { en: 'place word', uk: 'слово місця' },
  order: { en: 'statement order', uk: 'порядок ствердження' },
  connector: { en: 'if / whether', uk: 'if / whether' },
  infinitive: { en: 'to-infinitive', uk: 'to-infinitive' },
};

function SpeakButton({ text }: { text: string }) {
  const { supported, speaking, speak } = useTts();
  const { t } = useLang();
  return (
    <button
      type="button"
      className={cx('tts-btn', speaking && 'speaking')}
      onClick={() => speak(text)}
      disabled={!supported}
      title={supported ? t(ui.listen) : t(ui.ttsUnavailable)}
      aria-label={`${t(ui.listen)}: ${text}`}
    >
      <span aria-hidden="true">🔊</span>
    </button>
  );
}

/** Roving-tabindex arrow handling shared by the three radiogroups. */
function arrowNav<T>(items: readonly T[], idx: number, set: (v: T) => void) {
  return (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      set(items[(idx + 1) % items.length]);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      set(items[(idx - 1 + items.length) % items.length]);
    }
  };
}

/** The reported sentence with each shift highlighted (class by its first kind). */
function Reported({ r }: { r: Render }) {
  const { t } = useLang();
  const segs = segments(r) ?? [{ text: r.en }];
  return (
    <div className="mn-example rsl-reported">
      <p className="mn-example-en">
        {segs.map((s, i) =>
          s.shift ? (
            <mark
              key={i}
              className={cx('rsl-shift', `rsl-${s.shift.kinds[0]}`)}
              title={s.shift.kinds.map((k) => t(SHIFT_LABEL[k])).join(' · ')}
            >
              {s.text}
            </mark>
          ) : (
            <span key={i}>{s.text}</span>
          ),
        )}{' '}
        <SpeakButton text={r.en} />
      </p>
      <p className="mn-example-uk">{r.uk}</p>
    </div>
  );
}

function ShiftList({ r }: { r: Render }) {
  const { t } = useLang();
  if (r.shifts.length === 0) {
    return <p className="mn-why">{t({ en: 'No shifts — the sentence goes in as it was said.', uk: 'Жодних зсувів — речення йде так, як його сказали.' })}</p>;
  }
  return (
    <ul className="rsl-shifts">
      {r.shifts.map((s) => (
        <li key={s.text}>
          <span className="rsl-from">{s.from ?? '—'}</span>
          <span aria-hidden="true"> → </span>
          <mark className={cx('rsl-shift', `rsl-${s.kinds[0]}`)}>{s.text}</mark>
          <span className="rsl-kinds">{s.kinds.map((k) => t(SHIFT_LABEL[k])).join(' · ')}</span>
        </li>
      ))}
    </ul>
  );
}

export function ReportedSpeechLab() {
  const { t } = useLang();
  const [kind, setKindState] = useState<SpeechKind>('statement');
  const [itemId, setItemId] = useState<string>(itemsOfKind('statement')[0].id);
  const [frame, setFrame] = useState<Frame>('said');
  const id = useId();

  const items = itemsOfKind(kind);
  const item: Item = items.find((it) => it.id === itemId) ?? items[0];
  const setKind = (k: SpeechKind) => {
    setKindState(k);
    setItemId(itemsOfKind(k)[0].id);
  };
  const setItem = (it: Item) => setItemId(it.id);

  const r = renderFor(item, frame);
  const said = renderFor(item, 'said');

  const summary = isNa(r)
    ? t({ en: 'Nothing changes in this frame for a request.', uk: 'Для прохання в цій рамці нічого не змінюється.' })
    : `${t(FRAME_LABEL[frame])} ${r.en}`;

  return (
    <div className="mn cm rsl" role="group" aria-label="Reported Speech Lab">
      <div className="mn-head">
        <span className="mn-title">★ Reported Speech Lab</span>
        <span className="mn-sub">
          {t({
            en: 'Anna, your team lead, says something to you. Report it — now, a week later, or while it’s still true — and see exactly what moves.',
            uk: 'Анна, ваша тімлідка, щось вам каже. Перекажіть це — зараз, через тиждень або поки це досі правда — і побачте, що саме зсувається.',
          })}
        </span>
      </div>

      <div className="mn-grid">
        <div>
          <p className="mn-col-label" id={`${id}-kind`}>
            {t({ en: 'What was said?', uk: 'Що сказали?' })}
          </p>
          <div className="mn-funcs" role="radiogroup" aria-labelledby={`${id}-kind`}>
            {SPEECH_KINDS.map((k, i) => (
              <button
                key={k}
                type="button"
                role="radio"
                aria-checked={kind === k}
                tabIndex={kind === k ? 0 : -1}
                className="mn-func"
                onClick={() => setKind(k)}
                onKeyDown={arrowNav(SPEECH_KINDS, i, setKind)}
              >
                {t(KIND_LABEL[k])}
              </button>
            ))}
          </div>

          <p className="mn-col-label cm-gap" id={`${id}-item`}>
            {t({ en: 'Anna’s words', uk: 'Слова Анни' })}
          </p>
          <div className="mn-funcs" role="radiogroup" aria-labelledby={`${id}-item`}>
            {items.map((it, i) => (
              <button
                key={it.id}
                type="button"
                role="radio"
                aria-checked={item.id === it.id}
                tabIndex={item.id === it.id ? 0 : -1}
                className="mn-func rsl-direct-opt"
                onClick={() => setItem(it)}
                onKeyDown={arrowNav(items, i, setItem)}
              >
                “{it.direct.en}”
              </button>
            ))}
          </div>

          <p className="mn-col-label cm-gap" id={`${id}-frame`}>
            {t({ en: 'Reporting frame', uk: 'Рамка звітування' })}
          </p>
          <div className="mn-funcs" role="radiogroup" aria-labelledby={`${id}-frame`}>
            {FRAMES.map((f, i) => (
              <button
                key={f}
                type="button"
                role="radio"
                aria-checked={frame === f}
                tabIndex={frame === f ? 0 : -1}
                className="mn-func cm-reality"
                onClick={() => setFrame(f)}
                onKeyDown={arrowNav(FRAMES, i, setFrame)}
              >
                <span>{t(FRAME_LABEL[f])}</span>
                <span className="cm-gloss">{t(FRAME_GLOSS[f])}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="mn-result" aria-live="polite">
            <p className="sr-only">{summary}</p>

            <p className="mn-col-label">{t({ en: 'Direct speech', uk: 'Пряма мова' })}</p>
            <div className="mn-example rsl-direct">
              <p className="mn-example-en">
                Anna: “{item.direct.en}” <SpeakButton text={item.direct.en} />
              </p>
              <p className="mn-example-uk">Анна: «{item.direct.uk}»</p>
            </div>

            <p className="mn-col-label cm-gap">{t({ en: 'Reported speech', uk: 'Непряма мова' })}</p>
            {isNa(r) ? (
              <>
                <div className="cm-take">
                  <p className="mn-why">{t(r.na)}</p>
                </div>
                {!isNa(said) && <Reported r={said} />}
              </>
            ) : (
              <>
                <Reported r={r} />
                <ShiftList r={r} />
                <p className="mn-why">{t(r.note)}</p>
              </>
            )}

            <div className="mn-near">
              <p className="mn-col-label">{t({ en: 'The typical UA-speaker trap', uk: 'Типова пастка UA-мовця' })}</p>
              <p className="cm-trap">
                <span className="cm-wrong">✕ {item.trap.wrong}</span>
                <span className="muted">{t(item.trap.why)}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
