// CHANGED (V12): the Collocations hub page (#/collocations) — the fifth Words tab, built on the
// Definitions model: one corpus, one toolbar, and a "studio" of ways to engrave the same entry.
// Collocations lived inside #/idioms as a kind chip until now; they earn their own page because the
// job is different — an idiom is remembered as a whole, a collocation is a CHOICE between words that
// are all individually correct ("make a decision", not "do a decision").
//
// Four modes: Learn (cards sectioned by category), Which word? (the collocate drill — the mode this
// page exists for), Guess (meaning → recall the phrase) and Match (click-to-pair). The card, Guess
// and Match implementations are shared with #/idioms via components/words/*; the drill engine is
// lib/collocations.ts (golden-tested). Mastery persists per id under the SHARED `idiom:<id>` key, so
// the owner's existing progress and the #/review SRS deck carry over untouched.
import { useEffect, useMemo, useState } from 'react';
import { LEVELS } from '../../data/concepts';
import { COLLOCATIONS } from '../../data/collocations';
import type { IdiomEntry, Level } from '../../data/types';
import { useLang } from '../../i18n/lang';
import { ui } from '../../i18n/ui';
import {
  buildPickRound,
  COLLOCATION_GROUP_IDS,
  groupCollocations,
  headClassIndex,
  pickableCollocations,
} from '../../lib/collocations';
import { getMastery, setMastery, useMastery } from '../../lib/masteryStore';
import { allThemes, phraseOfDay } from '../../lib/phrases';
import { cx } from '../../lib/utils';
import { WordsLayout } from '../layout/WordsLayout';
import { PhraseCard, SpeakButton } from '../words/PhraseCard';
import { mkey } from '../words/phraseMeta';
import { GuessView, MatchView } from '../words/PhraseModes';

type Mode = 'learn' | 'pick' | 'guess' | 'match';

// CHANGED (V10/V12): collocation category labels — keyed by IdiomEntry.group (canonical order in
// lib/collocations). `adverb-adjective` reads "Adverb + Adjective / Verb": the bucket also holds
// adverb+VERB pairs ("totally agree", "highly recommend"), and a label that said only "Adjective"
// would teach the wrong pattern. The ID stays `adverb-adjective` — it is a stored filter value.
const GROUP_LABEL: Record<string, typeof ui.collGroupMakeDo> = {
  'make-do': ui.collGroupMakeDo,
  'verb-noun': ui.collGroupVerbNoun,
  'adjective-noun': ui.collGroupAdjNoun,
  'adverb-adjective': ui.collGroupAdvAdj,
  business: ui.collGroupBusiness,
  workplace: ui.collGroupWorkplace,
  'soft-skills': ui.collGroupSoftSkills,
  everyday: ui.collGroupEveryday,
  other: ui.collGroupOther,
};
const groupLabel = (id: string) => GROUP_LABEL[id] ?? ui.collGroupOther;

/** Learn: cards sectioned by category, so the list reads as a navigable syllabus. */
function LearnView({ list }: { list: IdiomEntry[] }) {
  const { t } = useLang();
  const masteryMap = useMastery();
  const [openId, setOpenId] = useState<string | undefined>(undefined);
  const sections = useMemo(() => groupCollocations(list), [list]);
  if (list.length === 0) return <p className="dict-empty muted">{t(ui.searchNoResults)}</p>;
  return (
    <div className="dict-list">
      {sections.map((s) => (
        <section className="def-group" key={s.group} id={`collgroup-${s.group}`} aria-label={t(groupLabel(s.group))}>
          <h2 className="def-group-h">{t(groupLabel(s.group))}</h2>
          {s.items.map((e) => (
            <PhraseCard
              key={e.id}
              e={e}
              open={openId === e.id}
              mastery={masteryMap.get(mkey(e.id)) ?? getMastery(mkey(e.id))}
              onToggle={() => setOpenId((prev) => (prev === e.id ? undefined : e.id))}
              showKind={false}
            />
          ))}
        </section>
      ))}
    </div>
  );
}

/**
 * ★ Which word? — the collocate drill. The base is given ("___ a decision"), you supply the word
 * that English actually pairs with it. Distractors come from the SAME category of the FULL corpus
 * (not the filtered list) so narrowing the search box never degrades the options; the engine drops
 * any distractor that would itself form a real phrase. A wrong answer reveals the meaning and the
 * "Common mistake" note — this mode is meant to teach on failure, not just score.
 */
function PickView({ list }: { list: IdiomEntry[] }) {
  const { t } = useLang();
  const pickable = useMemo(() => pickableCollocations(list), [list]);
  const avoid = useMemo(() => new Set(COLLOCATIONS.map((e) => e.phrase.toLowerCase())), []);
  // Both indexes are corpus-wide and static, so they are built once per chunk load, not per round.
  const classOf = useMemo(() => headClassIndex(COLLOCATIONS), []);

  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<string | undefined>(undefined);

  useEffect(() => {
    setI(0);
    setPicked(undefined);
  }, [list]);

  const entry = pickable.length > 0 ? pickable[i % pickable.length] : undefined;
  const round = useMemo(
    () => (entry ? buildPickRound(entry, COLLOCATIONS, Math.random, { avoid, classOf }) : null),
    [entry, avoid, classOf],
  );

  const next = () => {
    setPicked(undefined);
    setI((n) => (pickable.length <= 1 ? n : (n + 1 + Math.floor(Math.random() * (pickable.length - 1))) % pickable.length));
  };

  if (!entry || !round) return <p className="dict-empty muted">{t(ui.collPickTooFew)}</p>;

  const answered = picked !== undefined;
  const correct = answered && picked === round.answer;

  const choose = (opt: string) => {
    if (answered) return;
    setPicked(opt);
    setMastery(mkey(entry.id), opt === round.answer ? 'known' : 'learning');
  };

  return (
    <div className="def-studio coll-pick">
      <p className="def-task">{t(ui.collPickTask)}</p>

      <p className="coll-pick-prompt">
        <span className="coll-pick-gap">{round.masked}</span>
      </p>
      <p className="coll-pick-clue muted">{entry.meaning.uk}</p>

      <div className="coll-pick-opts" role="group" aria-label={t(ui.collPickTask)}>
        {round.options.map((opt) => (
          <button
            key={opt}
            type="button"
            className={cx(
              'def-btn',
              'coll-pick-opt',
              answered && opt === round.answer && 'is-right',
              answered && picked === opt && opt !== round.answer && 'is-wrong',
            )}
            disabled={answered}
            onClick={() => choose(opt)}
          >
            {opt}
          </button>
        ))}
      </div>

      {answered && (
        <div className="def-reveal" aria-live="polite">
          <p className={cx('coll-pick-verdict', correct ? 'is-right' : 'is-wrong')}>
            {correct ? `✅ ${t(ui.collPickRight)}` : `✖ ${t(ui.collPickWrong)}`}
          </p>
          <p className="def-answer">
            <span className="dict-word">{entry.phrase}</span>
            <SpeakButton text={entry.phrase} />
          </p>
          <div className="dict-def">
            <p>{entry.meaning.en}</p>
            {entry.uaEquivalent && <p className="muted">≈ {entry.uaEquivalent}</p>}
          </div>
          {entry.note && (
            <p className="idiom-note">
              <span className="idiom-note-tag">⚠ {t(ui.idiomNote)}</span>
              <span>
                {entry.note.en} <span className="muted">{entry.note.uk}</span>
              </span>
            </p>
          )}
          <button type="button" className="def-btn def-reveal-btn" onClick={next}>
            {t(ui.idiomNext)}
          </button>
        </div>
      )}
    </div>
  );
}

const MODES: { id: Mode; label: typeof ui.idiomModeLearn; icon: string }[] = [
  { id: 'learn', label: ui.idiomModeLearn, icon: '📚' },
  { id: 'pick', label: ui.collModePick, icon: '🧩' },
  { id: 'guess', label: ui.idiomModeGuess, icon: '🧠' },
  { id: 'match', label: ui.idiomModeMatch, icon: '🔗' },
];

export function CollocationsPage() {
  const { t } = useLang();
  const [mode, setMode] = useState<Mode>('learn');
  const [q, setQ] = useState('');
  const [group, setGroup] = useState<string | 'all'>('all');
  const [theme, setTheme] = useState<string | 'all'>('all');
  const [level, setLevel] = useState<Level | 'all'>('all');

  const themes = useMemo(() => allThemes(COLLOCATIONS), []);
  // Collocation of the day — deterministic per calendar day, and a different entry from the Idioms
  // tab's, because each page rotates over its own corpus.
  const today = useMemo(() => phraseOfDay(COLLOCATIONS, Math.floor(Date.now() / 86_400_000)), []);
  const needle = q.trim().toLowerCase();
  const filtered = useMemo(
    () =>
      COLLOCATIONS.filter((e) => {
        if (group !== 'all' && e.group !== group) return false;
        if (theme !== 'all' && !e.themes.includes(theme)) return false;
        if (level !== 'all' && e.level !== level) return false;
        if (!needle) return true;
        return (
          e.phrase.toLowerCase().includes(needle) ||
          e.meaning.en.toLowerCase().includes(needle) ||
          e.meaning.uk.toLowerCase().includes(needle) ||
          (e.uaEquivalent ?? '').toLowerCase().includes(needle)
        );
      }),
    [needle, group, theme, level],
  );

  return (
    <WordsLayout active="collocations">
      <p className="muted vocab-lede">{t(ui.collocationsLede)}</p>

      <div className="def-modeseg idiom-modeseg" role="tablist" aria-label={t(ui.collocationsLabel)}>
        {MODES.map((m) => (
          <button
            key={m.id}
            role="tab"
            aria-selected={mode === m.id}
            className={cx('def-mode', mode === m.id && 'on')}
            onClick={() => setMode(m.id)}
          >
            <span aria-hidden="true">{m.icon}</span> {t(m.label)}
          </button>
        ))}
      </div>

      <div className="dict-toolbar">
        <div className="searchbox">
          <span className="search-ic" aria-hidden="true">
            ⌕
          </span>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t(ui.collSearchPlaceholder)}
            aria-label={t(ui.search)}
          />
        </div>
        <select
          className="ex-input"
          style={{ flex: '0 1 auto', maxWidth: '190px' }}
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          aria-label={t(ui.idiomAllThemes)}
        >
          <option value="all">{t(ui.idiomAllThemes)}</option>
          {themes.map((th) => (
            <option key={th} value={th}>
              {th}
            </option>
          ))}
        </select>
        <div className="levelseg" role="group" aria-label={t(ui.levelFilter)}>
          <button className={cx(level === 'all' && 'on')} onClick={() => setLevel('all')}>
            {t(ui.allLevels)}
          </button>
          {LEVELS.map((lv) => (
            <button key={lv} className={cx('lvl', level === lv && 'on')} data-level={lv} onClick={() => setLevel(lv)}>
              {lv.toUpperCase()}
            </button>
          ))}
        </div>
        <span className="dict-count dim">
          {filtered.length}/{COLLOCATIONS.length} {t(ui.entriesLabel)}
        </span>
      </div>

      {/* The category bar is this page's primary navigation, so it is ALWAYS visible (on #/idioms the
          equivalent bar only appears for the Idioms kind). */}
      <div className="coll-catbar" role="group" aria-label={t(ui.collAllGroups)}>
        <button
          type="button"
          className={cx('chip', group === 'all' && 'known-on')}
          aria-pressed={group === 'all'}
          onClick={() => setGroup('all')}
        >
          {t(ui.collAllGroups)}
        </button>
        {COLLOCATION_GROUP_IDS.map((gid) => (
          <button
            key={gid}
            type="button"
            className={cx('chip', group === gid && 'known-on')}
            aria-pressed={group === gid}
            onClick={() => setGroup(group === gid ? 'all' : gid)}
          >
            {t(groupLabel(gid))}
          </button>
        ))}
      </div>

      {mode === 'learn' && today && (
        <button type="button" className="idiom-otd" onClick={() => setQ(today.phrase)} title={t(ui.collOfDay)}>
          <span className="idiom-otd-tag">🗓 {t(ui.collOfDay)}</span>
          <span className="idiom-otd-phrase">{today.phrase}</span>
          <span className="idiom-otd-mean dim">{today.meaning.en}</span>
          {today.uaEquivalent && <span className="idiom-otd-ua">≈ {today.uaEquivalent}</span>}
        </button>
      )}
      {mode === 'learn' && <LearnView list={filtered} />}
      {mode === 'pick' && <PickView list={filtered} />}
      {mode === 'guess' && <GuessView list={filtered} task={ui.collGuessTask} />}
      {mode === 'match' && <MatchView list={filtered} />}
    </WordsLayout>
  );
}
