// CHANGED (V2): the Idioms hub page (#/idioms) — an engaging trainer for multi-word English, a
// SEPARATE dataset from the word corpus (§14 D3/D6). Three modes reuse the guide's proven patterns:
// Learn (category-filtered cards with the Ukrainian equivalent up front, examples + TTS, origin
// story, mastery), Guess (meaning/blanked-context → recall the expression → self-rate), and Match
// (a click-to-pair mini-game).
// CHANGED (V12): collocations left this page for their own tab (#/collocations, data/collocations.ts).
// This page is now idioms + phrasal verbs only, and the card/Guess/Match implementations moved to
// components/words/* so both pages share one copy. Pure logic lives in lib/phrases.ts (generic) and
// lib/idioms.ts (categories); mastery persists per id via lib/masteryStore.
import { useEffect, useMemo, useState } from 'react';
import { LEVELS } from '../../data/concepts';
import { IDIOMS } from '../../data/idioms';
import type { IdiomKind, Level } from '../../data/types';
import { useLang } from '../../i18n/lang';
import { ui } from '../../i18n/ui';
import { groupIdiomsByCategory, IDIOM_CATEGORY_IDS } from '../../lib/idioms';
import { allThemes, groupByKind, phraseOfDay } from '../../lib/phrases';
import { getMastery, useMastery } from '../../lib/masteryStore';
import { cx } from '../../lib/utils';
import { WordsLayout } from '../layout/WordsLayout';
import { PhraseCard } from '../words/PhraseCard';
import { KIND_LABEL, mkey } from '../words/phraseMeta';
import { GuessView, MatchView } from '../words/PhraseModes';

type Mode = 'learn' | 'guess' | 'match';

// CHANGED (V12): 'collocation' is gone from this page's kind chips — it has its own tab now. The
// KIND union itself is unchanged (it is the shared IdiomEntry contract).
const PAGE_KINDS: IdiomKind[] = ['idiom', 'phrasal'];

// CHANGED (V11): idiom category labels — keyed by IdiomEntry.category (canonical order in lib/idioms).
const CAT_LABEL: Record<string, typeof ui.idiomCatCommunication> = {
  communication: ui.idiomCatCommunication,
  'work-business': ui.idiomCatWorkBusiness,
  'success-failure': ui.idiomCatSuccessFailure,
  'effort-difficulty': ui.idiomCatEffortDifficulty,
  'problems-risk': ui.idiomCatProblemsRisk,
  'decisions-uncertainty': ui.idiomCatDecisions,
  emotions: ui.idiomCatEmotions,
  'people-relationships': ui.idiomCatPeople,
  'time-chance': ui.idiomCatTimeChance,
  'money-value': ui.idiomCatMoneyValue,
  'everyday-life': ui.idiomCatEveryday,
  other: ui.idiomCatOther,
};
const catLabel = (id: string) => CAT_LABEL[id] ?? ui.idiomCatOther;

// CHANGED (V11): `byCategory` switches the section headers from kind → idiom category. Used when the
// Idioms kind is active so the list reads as a navigable syllabus.
function LearnView({ list, byCategory }: { list: import('../../data/types').IdiomEntry[]; byCategory: boolean }) {
  const { t } = useLang();
  const masteryMap = useMastery();
  const [openId, setOpenId] = useState<string | undefined>(undefined);
  const kindGroups = useMemo(() => groupByKind(list), [list]);
  const idiomCatGroups = useMemo(() => groupIdiomsByCategory(list), [list]);
  if (list.length === 0) return <p className="dict-empty muted">{t(ui.searchNoResults)}</p>;
  const sections = byCategory
    ? idiomCatGroups.map((g) => ({ key: g.category, title: t(catLabel(g.category)), items: g.items, anchor: `idiomcat-${g.category}` }))
    : kindGroups.map((g) => ({ key: g.kind, title: t(KIND_LABEL[g.kind]), items: g.items, anchor: undefined }));
  return (
    <div className="dict-list">
      {sections.map((s) => (
        <section className="def-group" key={s.key} id={s.anchor} aria-label={s.title}>
          <h2 className="def-group-h">{s.title}</h2>
          {s.items.map((e) => (
            <PhraseCard
              key={e.id}
              e={e}
              open={openId === e.id}
              mastery={masteryMap.get(mkey(e.id)) ?? getMastery(mkey(e.id))}
              onToggle={() => setOpenId((prev) => (prev === e.id ? undefined : e.id))}
            />
          ))}
        </section>
      ))}
    </div>
  );
}

const MODES: { id: Mode; label: typeof ui.idiomModeLearn; icon: string }[] = [
  { id: 'learn', label: ui.idiomModeLearn, icon: '📚' },
  { id: 'guess', label: ui.idiomModeGuess, icon: '🧠' },
  { id: 'match', label: ui.idiomModeMatch, icon: '🔗' },
];

export function IdiomsPage() {
  const { t } = useLang();
  const [mode, setMode] = useState<Mode>('learn');
  const [q, setQ] = useState('');
  const [kind, setKind] = useState<IdiomKind | 'all'>('all');
  const [category, setCategory] = useState<string | 'all'>('all'); // CHANGED (V11): idiom category filter
  const [theme, setTheme] = useState<string | 'all'>('all');
  const [level, setLevel] = useState<Level | 'all'>('all');

  // CHANGED (V11): the idiom category bar is meaningful only for idioms — drop the filter otherwise.
  useEffect(() => {
    if (kind !== 'idiom') setCategory('all');
  }, [kind]);

  const themes = useMemo(() => allThemes(IDIOMS), []);
  // CHANGED (V3): idiom of the day — deterministic per calendar day (rotates daily, stable within it).
  const today = useMemo(() => phraseOfDay(IDIOMS, Math.floor(Date.now() / 86_400_000)), []);
  const needle = q.trim().toLowerCase();
  const filtered = useMemo(
    () =>
      IDIOMS.filter((e) => {
        if (kind !== 'all' && e.kind !== kind) return false;
        // CHANGED (V11): idiom category filter (only bites in the Idioms kind; reset otherwise).
        if (category !== 'all' && (e.kind !== 'idiom' || e.category !== category)) return false;
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
    [needle, kind, category, theme, level],
  );

  return (
    <WordsLayout active="idioms">
      <p className="muted vocab-lede">{t(ui.idiomsLede)}</p>

      <div className="def-modeseg idiom-modeseg" role="tablist" aria-label={t(ui.idioms)}>
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
            placeholder={t(ui.idiomSearchPlaceholder)}
            aria-label={t(ui.search)}
          />
        </div>
        <div className="kindseg" role="group" aria-label={t(ui.allKinds)}>
          <button className={cx('chip', kind === 'all' && 'known-on')} onClick={() => setKind('all')}>
            {t(ui.allKinds)}
          </button>
          {PAGE_KINDS.map((k) => (
            <button
              key={k}
              className={cx('chip', kind === k && 'known-on')}
              onClick={() => setKind(kind === k ? 'all' : k)}
              aria-pressed={kind === k}
            >
              {t(KIND_LABEL[k])}
            </button>
          ))}
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
          {filtered.length}/{IDIOMS.length} {t(ui.entriesLabel)}
        </span>
      </div>

      {/* CHANGED (V11): idiom category bar — jump to / filter by theme (reuses the .coll-catbar chip row). */}
      {kind === 'idiom' && (
        <div className="coll-catbar" role="group" aria-label={t(ui.idiomAllCategories)}>
          <button
            type="button"
            className={cx('chip', category === 'all' && 'known-on')}
            aria-pressed={category === 'all'}
            onClick={() => setCategory('all')}
          >
            {t(ui.idiomAllCategories)}
          </button>
          {IDIOM_CATEGORY_IDS.map((cid) => (
            <button
              key={cid}
              type="button"
              className={cx('chip', category === cid && 'known-on')}
              aria-pressed={category === cid}
              onClick={() => setCategory(category === cid ? 'all' : cid)}
            >
              {t(catLabel(cid))}
            </button>
          ))}
        </div>
      )}

      {mode === 'learn' && today && (
        <button type="button" className="idiom-otd" onClick={() => setQ(today.phrase)} title={t(ui.idiomOfDay)}>
          <span className="idiom-otd-tag">🗓 {t(ui.idiomOfDay)}</span>
          <span className="idiom-otd-phrase">{today.phrase}</span>
          <span className="idiom-otd-mean dim">{today.meaning.en}</span>
          {today.uaEquivalent && <span className="idiom-otd-ua">≈ {today.uaEquivalent}</span>}
        </button>
      )}
      {mode === 'learn' && <LearnView list={filtered} byCategory={kind === 'idiom'} />}
      {mode === 'guess' && <GuessView list={filtered} />}
      {mode === 'match' && <MatchView list={filtered} />}
    </WordsLayout>
  );
}
