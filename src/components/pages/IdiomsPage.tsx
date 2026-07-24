// CHANGED (V2): the Idioms hub page (#/idioms) — an engaging trainer for multi-word English
// (idioms · phrasal verbs · collocations), a SEPARATE dataset from the word corpus (§14 D3/D6).
// Three modes reuse the guide's proven patterns: Learn (theme/type-filtered cards with the Ukrainian
// equivalent up front, examples + TTS, origin story, mastery), Guess (meaning/blanked-context →
// recall the expression → self-rate), and Match (a click-to-pair mini-game). Pure logic + the match
// shuffle live in lib/idioms.ts (golden-tested); mastery persists per id via lib/masteryStore.
import { useEffect, useMemo, useState } from 'react';
import { LEVELS } from '../../data/concepts';
import { IDIOMS } from '../../data/idioms';
import type { IdiomEntry, IdiomKind, Level } from '../../data/types';
import { useLang } from '../../i18n/lang';
import { ui } from '../../i18n/ui';
import { allThemes, blankInExample, buildMatchRound, groupByKind } from '../../lib/idioms';
import { getMastery, setMastery, useMastery } from '../../lib/masteryStore';
import type { Mastery } from '../../lib/masteryStore';
import { useTts } from '../../lib/tts';
import { cx } from '../../lib/utils';
import { LevelBadge } from '../module/LevelBadge';
import { WordsLayout } from '../layout/WordsLayout';

type Mode = 'learn' | 'guess' | 'match';

// Mastery lives in the shared store; namespace idiom keys so they never collide with word ids.
const mkey = (id: string) => `idiom:${id}`;

const KIND_LABEL: Record<IdiomKind, typeof ui.idiomTypeIdiom> = {
  idiom: ui.idiomTypeIdiom,
  phrasal: ui.idiomTypePhrasal,
  collocation: ui.idiomTypeCollocation,
};
const MASTERY_STATES: Mastery[] = ['new', 'learning', 'known'];
const MASTERY_LABEL: Record<Mastery, typeof ui.masteryNew> = {
  new: ui.masteryNew,
  learning: ui.masteryLearning,
  known: ui.masteryKnown,
};

function SpeakButton({ text }: { text: string }) {
  const { supported, speaking, speak } = useTts();
  const { t } = useLang();
  return (
    <button
      type="button"
      className={cx('tts-btn', speaking && 'speaking')}
      onClick={(e) => {
        e.stopPropagation();
        speak(text);
      }}
      disabled={!supported}
      title={supported ? t(ui.listen) : t(ui.ttsUnavailable)}
      aria-label={`${t(ui.listen)}: ${text}`}
    >
      <span aria-hidden="true">🔊</span>
    </button>
  );
}

function MasteryBar({ id }: { id: string }) {
  const { t } = useLang();
  const map = useMastery();
  const current = map.get(mkey(id)) ?? 'new';
  return (
    <div className="def-mastery" role="group" aria-label={t(ui.masteryLabel)}>
      {MASTERY_STATES.map((s) => (
        <button
          key={s}
          type="button"
          className={cx('def-mastery-btn', `is-${s}`, current === s && 'on')}
          aria-pressed={current === s}
          onClick={() => setMastery(mkey(id), s)}
        >
          {t(MASTERY_LABEL[s])}
        </button>
      ))}
    </div>
  );
}

function ExampleRow({ en, uk }: { en: string; uk: string }) {
  return (
    <div className="dict-ex idiom-ex">
      <div>
        <p className="dict-ex-en">
          {en} <SpeakButton text={en} />
        </p>
        <p className="dict-ex-uk">{uk}</p>
      </div>
    </div>
  );
}

function IdiomCard({
  e,
  open,
  mastery,
  onToggle,
}: {
  e: IdiomEntry;
  open: boolean;
  mastery: Mastery;
  onToggle: () => void;
}) {
  const { t } = useLang();
  return (
    <div className={cx('dict-card', open && 'def-card--open')} id={`idiom-${e.id}`}>
      <button className="dict-head" onClick={onToggle} aria-expanded={open}>
        <span className={cx('dict-caret', open && 'open')} aria-hidden="true">
          ›
        </span>
        <span className={cx('def-mstate', `is-${mastery}`)} aria-hidden="true" />
        <span className="dict-word">{e.phrase}</span>
        <SpeakButton text={e.phrase} />
        <span className="chip chip-kind" data-kind={e.kind}>
          {t(KIND_LABEL[e.kind])}
        </span>
        <span className="idiom-reg" data-reg={e.register}>
          {e.register}
        </span>
        {e.uaEquivalent && <span className="idiom-ua-inline dim">≈ {e.uaEquivalent}</span>}
        <LevelBadge level={e.level} />
      </button>
      {open && (
        <div className="dict-body">
          <div className="dict-def">
            <p>{e.meaning.en}</p>
            <p className="muted">{e.meaning.uk}</p>
          </div>

          {e.uaEquivalent && (
            <p className="idiom-ua">
              <span className="idiom-ua-tag">{t(ui.idiomUaEquivalent)}</span> {e.uaEquivalent}
            </p>
          )}
          {e.literal && (
            <p className="idiom-literal dim">
              <span className="mono">{t(ui.idiomLiteral)}:</span> {e.literal.en} · {e.literal.uk}
            </p>
          )}

          <div className="dict-examples">
            {e.examples.map((ex, i) => (
              <ExampleRow key={i} en={ex.text.en} uk={ex.text.uk} />
            ))}
          </div>

          {e.synonyms && e.synonyms.length > 0 && (
            <p className="dim idiom-syn">
              <span className="mono">{t(ui.synonymsLabel)}:</span> {e.synonyms.join(', ')}
            </p>
          )}
          {e.origin && (
            <p className="idiom-origin">
              <span className="idiom-origin-tag" aria-hidden="true">
                💡
              </span>
              <span>
                <strong>{t(ui.idiomOrigin)}. </strong>
                {e.origin.en} <span className="muted">{e.origin.uk}</span>
              </span>
            </p>
          )}

          <MasteryBar id={e.id} />
        </div>
      )}
    </div>
  );
}

function LearnView({ list }: { list: IdiomEntry[] }) {
  const { t } = useLang();
  const masteryMap = useMastery();
  const [openId, setOpenId] = useState<string | undefined>(undefined);
  const groups = useMemo(() => groupByKind(list), [list]);
  if (list.length === 0) return <p className="dict-empty muted">{t(ui.searchNoResults)}</p>;
  return (
    <div className="dict-list">
      {groups.map((g) => (
        <section className="def-group" key={g.kind} aria-label={t(KIND_LABEL[g.kind])}>
          <h2 className="def-group-h">{t(KIND_LABEL[g.kind])}</h2>
          {g.items.map((e) => (
            <IdiomCard
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

function GuessView({ list }: { list: IdiomEntry[] }) {
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
      <p className="def-task">{t(ui.idiomGuessTask)}</p>
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

function MatchView({ list }: { list: IdiomEntry[] }) {
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
  const [theme, setTheme] = useState<string | 'all'>('all');
  const [level, setLevel] = useState<Level | 'all'>('all');

  const themes = useMemo(() => allThemes(IDIOMS), []);
  const needle = q.trim().toLowerCase();
  const filtered = useMemo(
    () =>
      IDIOMS.filter((e) => {
        if (kind !== 'all' && e.kind !== kind) return false;
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
    [needle, kind, theme, level],
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
          {(['idiom', 'phrasal', 'collocation'] as IdiomKind[]).map((k) => (
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

      {mode === 'learn' && <LearnView list={filtered} />}
      {mode === 'guess' && <GuessView list={filtered} />}
      {mode === 'match' && <MatchView list={filtered} />}
    </WordsLayout>
  );
}
