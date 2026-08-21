// CHANGED (V12): the Guess + Match study modes, extracted VERBATIM from IdiomsPage so #/idioms and
// #/collocations run one implementation instead of two copies that drift. Both take a pre-filtered
// list and are otherwise corpus-agnostic; the randomness stays here (the pure round builders in
// lib/phrases.ts take an injected `rand`, which is what the golden tests pin).
import { useEffect, useState } from 'react';
import type { IdiomEntry } from '../../data/types';
import { useLang } from '../../i18n/lang';
import { ui } from '../../i18n/ui';
import { setMastery } from '../../lib/masteryStore';
import { blankInExample, buildMatchRound } from '../../lib/phrases';
import { cx } from '../../lib/utils';
import { SpeakButton } from './PhraseCard';
import { mkey } from './phraseMeta';

/** Meaning → recall the expression → self-rate. `task` lets each page word the prompt for its corpus. */
export function GuessView({ list, task }: { list: IdiomEntry[]; task?: typeof ui.idiomGuessTask }) {
  const { t } = useLang();
  const [i, setI] = useState(0);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setI(0);
    setRevealed(false);
  }, [list]);

  if (list.length === 0) return <p className="dict-empty muted">{t(ui.searchNoResults)}</p>;
  const e = list[i % list.length];
  const gap = blankInExample(e, 1) ?? blankInExample(e, 0);

  const next = () => {
    setRevealed(false);
    setI((n) => (list.length <= 1 ? n : (n + 1 + Math.floor(Math.random() * (list.length - 1))) % list.length));
  };

  return (
    <div className="def-studio idiom-guess">
      <p className="def-task">{t(task ?? ui.idiomGuessTask)}</p>
      <div className="dict-def">
        <p>{e.meaning.en}</p>
        <p className="muted">{e.meaning.uk}</p>
      </div>
      {gap && <p className="idiom-guess-ctx">“{gap.masked}”</p>}

      {revealed ? (
        <div className="def-reveal">
          <p className="def-answer">
            <span className="dict-word">{e.phrase}</span>
            <SpeakButton text={e.phrase} />
          </p>
          {e.uaEquivalent && (
            <p className="idiom-ua">
              <span className="idiom-ua-tag">{t(ui.idiomUaEquivalent)}</span> {e.uaEquivalent}
            </p>
          )}
          <div className="def-rate" role="group" aria-label={t(ui.masteryLabel)}>
            <button type="button" className="def-btn def-rate-btn is-known" onClick={() => { setMastery(mkey(e.id), 'known'); next(); }}>
              {t(ui.defGotIt)}
            </button>
            <button type="button" className="def-btn def-rate-btn is-learning" onClick={() => { setMastery(mkey(e.id), 'learning'); next(); }}>
              {t(ui.defAgain)}
            </button>
          </div>
        </div>
      ) : (
        <div className="idiom-guess-actions">
          <button type="button" className="def-btn def-reveal-btn" onClick={() => setRevealed(true)}>
            {t(ui.idiomReveal)}
          </button>
          <button type="button" className="def-btn def-btn-ghost" onClick={next}>
            {t(ui.idiomNext)}
          </button>
        </div>
      )}
    </div>
  );
}

/** Click-to-pair mini-game: phrase ↔ meaning. */
export function MatchView({ list }: { list: IdiomEntry[] }) {
  const { t, lang } = useLang();
  const [data, setData] = useState(() => buildMatchRound(list, 5, Math.random, lang));
  const [pickedLeft, setPickedLeft] = useState<string | undefined>(undefined);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [wrong, setWrong] = useState<string | undefined>(undefined);

  const newRound = () => {
    setData(buildMatchRound(list, 5, Math.random, lang));
    setPickedLeft(undefined);
    setMatched(new Set());
    setWrong(undefined);
  };

  // Rebuild the board when the filtered list or the language changes.
  useEffect(() => {
    setData(buildMatchRound(list, 5, Math.random, lang));
    setPickedLeft(undefined);
    setMatched(new Set());
    setWrong(undefined);
  }, [list, lang]);

  if (list.length < 2) return <p className="dict-empty muted">{t(ui.idiomMatchTooFew)}</p>;

  const done = matched.size === data.left.length;

  const clickRight = (rid: string) => {
    if (!pickedLeft || matched.has(pickedLeft)) return;
    if (rid === pickedLeft) {
      setMatched((prev) => new Set(prev).add(rid));
      setPickedLeft(undefined);
    } else {
      setWrong(rid);
      window.setTimeout(() => setWrong(undefined), 500);
    }
  };

  return (
    <div className="idiom-match">
      <p className="def-task">{t(ui.idiomMatchTask)}</p>
      <div className="idiom-match-grid">
        <div className="idiom-match-col" role="list">
          {data.left.map((l) => (
            <button
              key={l.id}
              role="listitem"
              className={cx('idiom-chip', matched.has(l.id) && 'is-matched', pickedLeft === l.id && 'is-picked')}
              disabled={matched.has(l.id)}
              onClick={() => setPickedLeft(l.id)}
            >
              {l.phrase}
            </button>
          ))}
        </div>
        <div className="idiom-match-col" role="list">
          {data.right.map((r) => (
            <button
              key={r.id}
              role="listitem"
              className={cx('idiom-chip', 'idiom-chip-meaning', matched.has(r.id) && 'is-matched', wrong === r.id && 'is-wrong')}
              disabled={matched.has(r.id)}
              onClick={() => clickRight(r.id)}
            >
              {r.meaning}
            </button>
          ))}
        </div>
      </div>
      {done && (
        <p className="idiom-match-done" aria-live="polite">
          <span>✅ {t(ui.idiomMatchDone)}</span>
          <button type="button" className="def-btn" onClick={newRound}>
            {t(ui.idiomNewRound)}
          </button>
        </p>
      )}
    </div>
  );
}
