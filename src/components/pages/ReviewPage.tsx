/*
 * ReviewPage (#/review, R1) — spaced repetition (SM-2-lite, lib/srs.ts) over the four corpus decks
 * built in lib/reviewDecks.ts: Dictionary (Oxford seed) · My words (custom) · Idioms · Irregular verbs.
 *
 * Complements the other two progress models rather than replacing them: #/definitions owns mastery
 * (new/learning/known) and #/practice owns solved drills; Review owns the SCHEDULE (englishguide.srs)
 * and can seed itself from mastery on demand (explicit button — owner decision R1).
 *
 * Queue = due cards first (oldest first), then new cards capped at NEW_PER_DAY. Reveal-then-grade
 * with no flip animation, so it is inherently reduced-motion safe; Space/Enter reveals, 1–4 grade;
 * the counts strip is an ARIA live region. CEFR level is a FILTER (like #/practice), not a deck.
 */
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { LEVELS } from '../../data/concepts';
import type { Level } from '../../data/types';
import { useLang } from '../../i18n/lang';
import { ui } from '../../i18n/ui';
import { backupFileName, restoreProgress, serializeProgress } from '../../lib/backup';
import {
  hrefDefinitions,
  hrefDictionary,
  hrefIdioms,
  hrefIrregular,
} from '../../lib/hashRouter';
import { useMastery } from '../../lib/masteryStore';
import { REVIEW_CARDS, cardIdForMasteryKey } from '../../lib/reviewDecks';
import type { ReviewCard } from '../../lib/reviewDecks';
import { buildQueue, dueSummary, nextDueAt, previewIntervals } from '../../lib/srs';
import type { SrsGrade } from '../../lib/srs';
import {
  SRS_DECKS,
  deckOfCard,
  getSrsData,
  gradeSrsCard,
  importMastery,
  newAllowance,
  resetSrs,
  setSrsDeckOn,
  subscribeSrs,
} from '../../lib/srsStore';
import type { SrsDeckId } from '../../lib/srsStore';
import { useTts } from '../../lib/tts';
import { cx } from '../../lib/utils';

const DECK_UI: Record<SrsDeckId, typeof ui.deckDict> = {
  dict: ui.deckDict,
  mine: ui.deckMine,
  idioms: ui.deckIdioms,
  irregular: ui.deckIrregular,
};

const GRADES: { g: SrsGrade; label: typeof ui.gradeAgain; key: string }[] = [
  { g: 'again', label: ui.gradeAgain, key: '1' },
  { g: 'hard', label: ui.gradeHard, key: '2' },
  { g: 'good', label: ui.gradeGood, key: '3' },
  { g: 'easy', label: ui.gradeEasy, key: '4' },
];

/** Deck → where the full study surface for this card lives. */
function cardHref(card: ReviewCard): string {
  switch (card.deck) {
    case 'dict':
    case 'mine':
      return hrefDefinitions(card.refId); // the word STUDY page is the front door (D1)
    case 'idioms':
      return hrefIdioms(card.refId);
    case 'irregular':
      return hrefIrregular();
  }
}

function cardOpenLabel(card: ReviewCard): typeof ui.reviewOpenWord {
  if (card.deck === 'idioms') return ui.reviewOpenIdiom;
  if (card.deck === 'irregular') return ui.reviewOpenIrregular;
  return ui.reviewOpenWord;
}

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
      🔊
    </button>
  );
}

export function ReviewPage() {
  const { t, lang } = useLang();
  // One snapshot = time + store data; every store mutation refreshes both atomically.
  const [snap, setSnap] = useState(() => ({ now: Date.now(), srs: getSrsData() }));
  const [revealed, setRevealed] = useState(false);
  const [level, setLevel] = useState<Level | 'all'>('all');
  const [notice, setNotice] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const masteryMap = useMastery();

  useEffect(() => subscribeSrs(() => setSnap({ now: Date.now(), srs: getSrsData() })), []);

  const { now, srs } = snap;
  const allowance = useMemo(() => newAllowance(now), [now]);

  // Deck toggles AND the level filter shape the queue; per-deck counts ignore the level filter so a
  // toggle always shows the deck's true size.
  const activeCards = useMemo(
    () => REVIEW_CARDS.filter((c) => srs.decks[c.deck] && (level === 'all' || c.level === level)),
    [srs, level],
  );
  const counts = useMemo(() => dueSummary(activeCards, srs.states, now), [activeCards, srs, now]);
  const queue = useMemo(
    () => buildQueue(activeCards, srs.states, now, allowance),
    [activeCards, srs, now, allowance],
  );

  const card = queue[0];
  const cardId = card?.id;
  useEffect(() => setRevealed(false), [cardId]);

  const previews = useMemo(
    () => (card ? previewIntervals(srs.states[card.id], now) : undefined),
    [card, srs, now],
  );

  const grade = useCallback(
    (g: SrsGrade) => {
      if (!card || !revealed) return;
      gradeSrsCard(card.id, g, Date.now());
    },
    [card, revealed],
  );

  // Keyboard: Space/Enter reveals, 1–4 grade (grades only once the answer is shown).
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement | null;
      if (
        el &&
        (el.tagName === 'INPUT' ||
          el.tagName === 'SELECT' ||
          el.tagName === 'TEXTAREA' ||
          el.tagName === 'BUTTON')
      )
        return;
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        setRevealed(true);
      } else {
        const hit = GRADES.find((x) => x.key === e.key);
        if (hit) grade(hit.g);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [grade]);

  // "Next card due …" over the ENABLED decks only (states are namespaced by deck prefix).
  const nextDue = useMemo(() => {
    const filtered: Record<string, (typeof srs.states)[string]> = {};
    for (const [id, s] of Object.entries(srs.states)) {
      const deck = deckOfCard(id);
      if (deck && srs.decks[deck]) filtered[id] = s;
    }
    return nextDueAt(filtered, now);
  }, [srs, now]);

  const perDeck = useMemo(
    () =>
      SRS_DECKS.map((d) => {
        const cards = REVIEW_CARDS.filter((c) => c.deck === d);
        return { deck: d, ...dueSummary(cards, srs.states, now) };
      }),
    [srs, now],
  );

  const fmtDue = (ts: number): string =>
    new Date(ts).toLocaleString(lang === 'uk' ? 'uk-UA' : 'en-GB', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    });

  const onImportMastery = () => {
    const n = importMastery(masteryMap, cardIdForMasteryKey, Date.now());
    setNotice(n > 0 ? `${n} ${t(ui.importMasteryDone)}` : t(ui.importMasteryNone));
  };

  const onBackup = () => {
    const stamp = new Date().toISOString();
    const blob = new Blob([serializeProgress(stamp)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = backupFileName(stamp);
    a.click();
    URL.revokeObjectURL(url);
  };

  const onRestoreFile = async (file: File) => {
    const written = restoreProgress(await file.text());
    if (written === undefined) {
      setNotice(t(ui.restoreFailed));
      return;
    }
    // masteryStore/practiceStore cache their maps at first read, so a live restore needs a reload
    // for every surface to agree (see lib/backup.ts header).
    setNotice(t(ui.restoreDone));
    window.location.reload();
  };

  return (
    <div className="content rev">
      <h1>{t(ui.review)}</h1>
      <p className="muted">{t(ui.reviewLede)}</p>

      {/* Deck toggles — counts are deck totals (level filter applies to the queue, not to these) */}
      <div className="rev-decks" role="group" aria-label={t(ui.decksLabel)}>
        {perDeck.map(({ deck, due, total }) => (
          <button
            key={deck}
            className={cx('rev-deck', srs.decks[deck] && 'on')}
            aria-pressed={srs.decks[deck]}
            onClick={() => setSrsDeckOn(deck, !srs.decks[deck])}
          >
            <span className="rev-deck-name">{t(DECK_UI[deck])}</span>
            <span className="rev-deck-count dim">
              {due > 0 && <strong className="rev-deck-due">{due}</strong>} {total}
            </span>
          </button>
        ))}
      </div>

      <div className="rev-controls">
        <div className="levelseg" role="group" aria-label={t(ui.levelFilter)}>
          <button className={cx(level === 'all' && 'on')} onClick={() => setLevel('all')}>
            {t(ui.allLevels)}
          </button>
          {LEVELS.map((lv) => (
            <button
              key={lv}
              className={cx('lvl', level === lv && 'on')}
              data-level={lv}
              onClick={() => setLevel(lv)}
            >
              {lv.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Counts strip */}
      <p className="rev-counts dim" aria-live="polite">
        <span className="rev-chip rev-chip--due">
          {counts.due} {t(ui.dueLabel)}
        </span>
        <span className="rev-chip">
          {Math.min(counts.fresh, allowance)} {t(ui.newLabel)} · {allowance}{' '}
          {t(ui.newTodayLeft)}
        </span>
        <span className="rev-chip">
          {counts.later} {t(ui.laterLabel)}
        </span>
      </p>

      {!card ? (
        <div className="rev-done card">
          <h3>✓ {t(counts.total === 0 ? ui.noCardsInFilter : ui.nothingDue)}</h3>
          {counts.total > 0 && <p className="muted">{t(ui.nothingDueLede)}</p>}
          {counts.fresh > 0 && allowance === 0 && <p className="muted">{t(ui.newDoneToday)}</p>}
          {nextDue !== undefined && (
            <p className="muted">
              {t(ui.nextDueLabel)}: {fmtDue(nextDue)}
            </p>
          )}
        </div>
      ) : (
        <>
          <div className="rev-card card" data-deck={card.deck}>
            <div className="rev-tags">
              <span className="rev-kind dim">{t(DECK_UI[card.deck])}</span>
              <span className="chip badge-level" data-level={card.level}>
                {card.level}
              </span>
              {srs.states[card.id] === undefined && (
                <span className="rev-new">{t(ui.newLabel)}</span>
              )}
            </div>

            <p className="rev-front">
              {card.front} <SpeakButton text={card.front} />
            </p>
            {card.ipa && <p className="rev-ipa dim">/{card.ipa}/</p>}

            {revealed ? (
              <div className="rev-answer">
                {card.answer && (
                  <p className="rev-forms">
                    <span className="dim">{t(ui.reviewAnswerLabel)}: </span>
                    <strong>{card.answer}</strong> <SpeakButton text={card.answer} />
                  </p>
                )}
                {card.meaning && <p className="rev-back">{t(card.meaning)}</p>}
                {card.uaEquivalent && <p className="rev-ua">≈ {card.uaEquivalent}</p>}
                {card.translations && card.translations.length > 0 && (
                  <p className="rev-tr dim">{card.translations.join(', ')}</p>
                )}
                {card.example && (
                  <p className="rev-example">
                    <span lang="en">{card.example.en}</span>
                    {lang === 'uk' && <span className="dim"> — {card.example.uk}</span>}
                  </p>
                )}
                <a className="rev-open" href={cardHref(card)}>
                  {t(cardOpenLabel(card))} →
                </a>
              </div>
            ) : (
              <button className="btn btn-primary rev-reveal" onClick={() => setRevealed(true)}>
                {t(ui.showAnswer)}
              </button>
            )}
          </div>

          {revealed && previews && (
            <div className="rev-grades" role="group" aria-label={t(ui.review)}>
              {GRADES.map(({ g, label, key }) => (
                <button
                  key={g}
                  className={cx('btn rev-grade', `rev-grade--${g}`)}
                  onClick={() => grade(g)}
                >
                  <span className="kbd">{key}</span> {t(label)}
                  <span className="rev-interval dim">{previews[g]}</span>
                </button>
              ))}
            </div>
          )}
          <p className="rev-hint dim">{t(ui.reviewKeys)}</p>
        </>
      )}

      {/* Schedule housekeeping: seed from mastery · back up · restore · reset */}
      <section className="rev-tools">
        <h2>{t(ui.reviewStats)}</h2>
        {notice && (
          <p className="rev-notice" role="status">
            {notice}
          </p>
        )}
        <div className="rev-tool-row">
          <button className="btn btn-ghost" onClick={onImportMastery}>
            {t(ui.importMastery)}
          </button>
          <span className="dim rev-tool-hint">{t(ui.importMasteryHint)}</span>
        </div>
        <div className="rev-tool-row">
          <button className="btn btn-ghost" onClick={onBackup}>
            {t(ui.backupProgress)}
          </button>
          <button className="btn btn-ghost" onClick={() => fileRef.current?.click()}>
            {t(ui.restoreProgress)}
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json,.json"
            className="sr-only"
            onChange={(e) => {
              const f = e.target.files?.[0];
              e.target.value = ''; // allow re-picking the same file
              if (f) void onRestoreFile(f);
            }}
          />
          <span className="dim rev-tool-hint">{t(ui.backupHint)}</span>
        </div>
        <div className="rev-tool-row">
          <button
            className="btn btn-ghost rev-danger"
            onClick={() => {
              if (window.confirm(t(ui.resetScheduleConfirm))) resetSrs();
            }}
          >
            {t(ui.resetSchedule)}
          </button>
          <a className="dim rev-tool-hint" href={hrefDictionary()}>
            {t(ui.words)} →
          </a>
        </div>
      </section>
    </div>
  );
}
