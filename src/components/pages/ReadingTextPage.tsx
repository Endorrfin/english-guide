// CHANGED (S3): Reading reader (#/reading/<id>) — one text end to end. EN/UA body toggle (EN is the
// study object; UA is the full translation), TTS listen, source attribution, comprehension questions
// (auto-checked MCQ through lib/exercise + open questions with a revealable model answer), mark-as-read,
// and prev/next within the category. A11y: radiogroups, polite live verdicts, focus-safe. Reduced-motion safe.
import { useState } from 'react';
import type { ReadingQuestion, ReadingText } from '../../data/types';
import { adjacentInCategory, getReadingCategory, getReadingText } from '../../data/reading';
import { useLang } from '../../i18n/lang';
import { ui } from '../../i18n/ui';
import { checkMcq } from '../../lib/exercise';
import { markSolved, useSolvedSet } from '../../lib/practiceStore';
import { useAppState } from '../../lib/appState';
import { hrefReading, hrefReadingText, navigate } from '../../lib/hashRouter';
import { useTts } from '../../lib/tts';
import { cx } from '../../lib/utils';
import { Md } from '../module/Md';
import { LevelBadge } from '../module/LevelBadge';

function ListenButton({ text }: { text: string }) {
  const { supported, speaking, speak } = useTts();
  const { t } = useLang();
  return (
    <button
      type="button"
      className={cx('tts-btn', speaking && 'speaking')}
      onClick={() => speak(text)}
      disabled={!supported}
      title={supported ? t(ui.listen) : t(ui.ttsUnavailable)}
      aria-label={t(ui.listen)}
    >
      <span aria-hidden="true">🔊</span>
    </button>
  );
}

function McqQuestion({ q, qid, num }: { q: Extract<ReadingQuestion, { kind: 'mcq' }>; qid: string; num: number }) {
  const { t } = useLang();
  const [picked, setPicked] = useState<number | null>(null);
  const revealed = picked !== null;
  const correct = revealed && checkMcq(picked, q.correct);

  const choose = (i: number) => {
    if (revealed) return;
    setPicked(i);
    if (checkMcq(i, q.correct)) markSolved(qid);
  };

  return (
    <div className={cx('ex-card', revealed && (correct ? 'is-correct' : 'is-wrong'))}>
      <p className="ex-sentence">
        <span className="ex-num mono">#{num}</span> {t(q.q)}
      </p>
      <div className="quiz-options" role="radiogroup" aria-label={t(q.q)}>
        {q.options.map((opt, i) => {
          const state = !revealed
            ? ''
            : i === q.correct
              ? 'quiz-opt--correct'
              : i === picked
                ? 'quiz-opt--wrong'
                : 'quiz-opt--dim';
          return (
            <button
              key={i}
              role="radio"
              aria-checked={picked === i}
              className={cx('quiz-opt', state)}
              disabled={revealed}
              onClick={() => choose(i)}
            >
              <span className="quiz-opt-key kbd" aria-hidden="true">
                {i + 1}
              </span>
              <span className="quiz-opt-label">{t(opt)}</span>
              {revealed && i === q.correct && (
                <span className="quiz-tick" aria-hidden="true">
                  ✓
                </span>
              )}
              {revealed && i === picked && i !== q.correct && (
                <span className="quiz-cross" aria-hidden="true">
                  ✕
                </span>
              )}
            </button>
          );
        })}
      </div>
      <div aria-live="polite">
        {revealed && (
          <>
            <p className={cx('ex-verdict', correct ? 'ok' : 'no')}>
              {correct ? `✓ ${t(ui.correct)}` : `✕ ${t(ui.notQuite)}`}
            </p>
            {q.explain && <p className="ex-explain">{t(q.explain)}</p>}
          </>
        )}
      </div>
    </div>
  );
}

function OpenQuestion({ q, num }: { q: Extract<ReadingQuestion, { kind: 'open' }>; num: number }) {
  const { t } = useLang();
  const [show, setShow] = useState(false);
  return (
    <div className="ex-card">
      <p className="ex-sentence">
        <span className="ex-num mono">#{num}</span> {t(q.q)}
      </p>
      {!show ? (
        <button className="btn btn-ghost" onClick={() => setShow(true)}>
          {t(ui.readingShowSample)}
        </button>
      ) : (
        <div aria-live="polite">
          <p className="rd-sample-label mono dim">{t(ui.readingSampleLabel)}</p>
          <p className="ex-explain">{t(q.sample)}</p>
        </div>
      )}
    </div>
  );
}

function NotFound() {
  const { t } = useLang();
  return (
    <div className="content">
      <h1>{t(ui.reading)}</h1>
      <p className="muted">{t(ui.readingNoResults)}</p>
      <p>
        <a className="btn" href={hrefReading()}>
          ← {t(ui.readingAll)}
        </a>
      </p>
    </div>
  );
}

export function ReadingTextPage({ id }: { id: string }) {
  const { t } = useLang();
  const { isKnown, toggleKnown } = useAppState();
  const [showUk, setShowUk] = useState(false);
  useSolvedSet(); // subscribe so MCQ verdicts re-render progress-aware UI

  const text: ReadingText | undefined = getReadingText(id);
  if (!text) return <NotFound />;

  const cat = getReadingCategory(text.category);
  const { prev, next } = adjacentInCategory(text.id);
  const read = isKnown(text.id);
  const body = showUk ? text.body.uk : text.body.en;

  return (
    <div className="content rd-reader">
      <p className="rd-crumbs">
        <a href={hrefReading()} onClick={(e) => { e.preventDefault(); navigate(hrefReading()); }}>
          ← {t(ui.readingAll)}
        </a>
        {cat && <span className="dim"> · {t(cat.title)}</span>}
      </p>

      <h1 className="rd-title">{t(text.title)}</h1>
      <div className="rd-metarow">
        <LevelBadge level={text.level} />
        <span className="rd-min mono dim">
          {text.minutes} {t(ui.readMins)}
        </span>
        {text.source && (
          <span className="rd-source dim">
            {t(ui.readingSource)}:{' '}
            {text.source.url ? (
              <a href={text.source.url} target="_blank" rel="noopener noreferrer">
                {text.source.author}
              </a>
            ) : (
              text.source.author
            )}
            {text.source.handle ? ` · @${text.source.handle}` : ''}
          </span>
        )}
      </div>

      <div className="rd-bodybar">
        <div className="levelseg" role="group" aria-label={t(ui.language)}>
          <button className={cx(!showUk && 'on')} onClick={() => setShowUk(false)} aria-pressed={!showUk}>
            {t(ui.readingOriginal)}
          </button>
          <button className={cx(showUk && 'on')} onClick={() => setShowUk(true)} aria-pressed={showUk}>
            {t(ui.readingTranslation)}
          </button>
        </div>
        <ListenButton text={text.body.en} />
      </div>

      <Md text={body} className={cx('rd-prose', showUk && 'rd-prose--uk')} />

      <div className="rd-actions">
        <button
          className={cx('btn', read ? 'btn-ghost' : 'btn-primary')}
          onClick={() => toggleKnown(text.id)}
          aria-pressed={read}
        >
          {read ? `✓ ${t(ui.readingRead)}` : t(ui.readingMarkRead)}
        </button>
      </div>

      <section className="rd-questions">
        <h2>{t(ui.readingQuestions)}</h2>
        {text.questions.map((q, i) =>
          q.kind === 'mcq' ? (
            <McqQuestion key={i} q={q} qid={`rq-${text.id}-${i}`} num={i + 1} />
          ) : (
            <OpenQuestion key={i} q={q} num={i + 1} />
          ),
        )}
      </section>

      <nav className="rd-nav" aria-label="Texts in this category">
        {prev ? (
          <a
            className="rd-navlink prev"
            href={hrefReadingText(prev.id)}
            onClick={(e) => { e.preventDefault(); navigate(hrefReadingText(prev.id)); }}
          >
            <span className="dim">← {t(ui.prevModule)}</span>
            <span className="rd-navtitle">{t(prev.title)}</span>
          </a>
        ) : (
          <span />
        )}
        {next ? (
          <a
            className="rd-navlink next"
            href={hrefReadingText(next.id)}
            onClick={(e) => { e.preventDefault(); navigate(hrefReadingText(next.id)); }}
          >
            <span className="dim">{t(ui.nextModule)} →</span>
            <span className="rd-navtitle">{t(next.title)}</span>
          </a>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}
