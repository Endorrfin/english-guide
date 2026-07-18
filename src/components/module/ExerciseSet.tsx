// CHANGED (S1): ExerciseSet — renders a module's drills (gap-fill + MCQ) through the pure engine
// (lib/exercise.ts). Verdicts and normalization all flow through the golden-tested engine; correct
// answers persist to localStorage under the exercise's stable id (lib/practiceStore.ts).
// A11y: labeled inputs, radiogroup options, polite live verdicts, full keyboard operation.
import { useState } from 'react';
import type { Exercise } from '../../data/types';
import { useLang } from '../../i18n/lang';
import { ui } from '../../i18n/ui';
import { checkGap, checkMcq, gapParts } from '../../lib/exercise';
import { markSolved, useSolvedSet } from '../../lib/practiceStore';
import { cx } from '../../lib/utils';
import { LevelBadge } from './LevelBadge';

function GapExercise({ ex, num }: { ex: Extract<Exercise, { kind: 'gap' }>; num: number }) {
  const { t } = useLang();
  const [value, setValue] = useState('');
  const [verdict, setVerdict] = useState<'ok' | 'no' | null>(null);
  const [revealed, setRevealed] = useState(false);
  const { before, after } = gapParts(ex.sentence);

  const submit = () => {
    if (!value.trim()) return;
    const ok = checkGap(value, ex.answers);
    setVerdict(ok ? 'ok' : 'no');
    if (ok) markSolved(ex.id);
  };

  const done = verdict === 'ok' || revealed;

  return (
    <div className={cx('ex-card', verdict === 'ok' && 'is-correct', verdict === 'no' && !revealed && 'is-wrong')}>
      <div className="ex-top">
        <span className="ex-num mono">#{num}</span>
        <LevelBadge level={ex.level} />
        {ex.tags.map((tag) => (
          <span className="chip" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <p className="ex-sentence" id={`${ex.id}-label`}>
        {before}
        <span className="ex-blank">{done ? ex.answers[0] : value || '___'}</span>
        {after}
      </p>
      {ex.hint && (
        <p className="ex-hint">
          {t(ui.hintLabel)}: {t(ex.hint)}
        </p>
      )}
      {!done && (
        <div className="ex-row">
          <input
            className="ex-input"
            value={value}
            placeholder={t(ui.typeAnswer)}
            aria-labelledby={`${ex.id}-label`}
            onChange={(e) => {
              setValue(e.target.value);
              if (verdict === 'no') setVerdict(null);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') submit();
            }}
          />
          <button className="btn btn-primary" onClick={submit}>
            {t(ui.check)}
          </button>
          {verdict === 'no' && (
            <button className="btn btn-ghost" onClick={() => setRevealed(true)}>
              {t(ui.showAnswer)}
            </button>
          )}
        </div>
      )}
      <div aria-live="polite">
        {verdict === 'ok' && (
          <p className="ex-verdict ok">
            ✓ {t(ui.correct)} — <span className="ex-answer">{ex.answers[0]}</span>
          </p>
        )}
        {verdict === 'no' && !revealed && <p className="ex-verdict no">✕ {t(ui.notQuite)}</p>}
        {revealed && verdict !== 'ok' && (
          <p className="ex-verdict">
            {t(ui.answerLabel)}: <span className="ex-answer">{ex.answers.join(' / ')}</span>
          </p>
        )}
        {done && <p className="ex-explain">{t(ex.explain)}</p>}
      </div>
    </div>
  );
}

function McqExercise({ ex, num }: { ex: Extract<Exercise, { kind: 'mcq' }>; num: number }) {
  const { t } = useLang();
  const [picked, setPicked] = useState<number | null>(null);
  const revealed = picked !== null;
  const correct = revealed && checkMcq(picked, ex.correct);

  const choose = (i: number) => {
    if (revealed) return;
    setPicked(i);
    if (checkMcq(i, ex.correct)) markSolved(ex.id);
  };

  return (
    <div className={cx('ex-card', revealed && (correct ? 'is-correct' : 'is-wrong'))}>
      <div className="ex-top">
        <span className="ex-num mono">#{num}</span>
        <LevelBadge level={ex.level} />
        {ex.tags.map((tag) => (
          <span className="chip" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <p className="ex-sentence">{t(ex.prompt)}</p>
      <div className="quiz-options" role="radiogroup" aria-label={t(ex.prompt)}>
        {ex.options.map((opt, i) => {
          const state = !revealed
            ? ''
            : i === ex.correct
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
              <span className="quiz-opt-label">{opt}</span>
              {revealed && i === ex.correct && (
                <span className="quiz-tick" aria-hidden="true">
                  ✓
                </span>
              )}
              {revealed && i === picked && i !== ex.correct && (
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
            <p className="ex-explain">{t(ex.explain)}</p>
          </>
        )}
      </div>
    </div>
  );
}

export function ExerciseSet({ exercises }: { exercises: Exercise[] }) {
  const { t } = useLang();
  const solved = useSolvedSet();
  const done = exercises.filter((e) => solved.has(e.id)).length;

  return (
    <div className="ex-set">
      <p className="ex-progress" aria-live="polite">
        {done}/{exercises.length} {t(ui.solvedLabel)}
      </p>
      {exercises.map((ex, i) =>
        ex.kind === 'gap' ? (
          <GapExercise key={ex.id} ex={ex} num={i + 1} />
        ) : (
          <McqExercise key={ex.id} ex={ex} num={i + 1} />
        ),
      )}
    </div>
  );
}
