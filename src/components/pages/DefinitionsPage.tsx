// CHANGED (D1): Definitions (#/definitions[/<id>]) — the guide's word STUDY page. Same corpus as the
// Dictionary (SSOT: data/words), but built for active recall, not lookup. An A–Z rail + search +
// filters give the lookup job; the "studio" gives four ways to engrave a word: Study (definition-first
// + synonyms + the 4 general / 3 professional examples split), Recall (definition-first flashcard,
// headword masked until you reveal), Describe (the self-scored "define it without naming it" challenge
// on a derived scaffold), and Cloze (blank the word in its own sentence, auto-checked via lib/exercise).
// Mastery (new/learning/known) persists per word id (lib/masteryStore, SRS-compatible).
import { useEffect, useMemo, useRef, useState } from 'react';
import { LEVELS } from '../../data/concepts';
import type { Level, Pos, WordEntry } from '../../data/types';
import { WORDS } from '../../data/words';
import { useLang } from '../../i18n/lang';
import { ui } from '../../i18n/ui';
import {
  ALPHABET,
  availableLetters,
  describeScaffold,
  firstLetter,
  groupByLetter,
  pickCloze,
  splitExamples,
} from '../../lib/definitions';
import { checkGap } from '../../lib/exercise';
import { hrefDefinitions, navigate } from '../../lib/hashRouter';
import { getMastery, setMastery, useMastery } from '../../lib/masteryStore';
import type { Mastery } from '../../lib/masteryStore';
import { useTts } from '../../lib/tts';
import { cx } from '../../lib/utils';
import { LevelBadge } from '../module/LevelBadge';

type StudioMode = 'study' | 'recall' | 'describe' | 'cloze';

const MODES: { id: StudioMode; label: typeof ui.defModeStudy; icon: string }[] = [
  { id: 'study', label: ui.defModeStudy, icon: '📖' },
  { id: 'recall', label: ui.defModeRecall, icon: '🎴' },
  { id: 'describe', label: ui.defModeDescribe, icon: '🧩' },
  { id: 'cloze', label: ui.defModeCloze, icon: '✍️' },
];

const MASTERY_STATES: Mastery[] = ['new', 'learning', 'known'];
const MASTERY_LABEL: Record<Mastery, typeof ui.masteryNew> = {
  new: ui.masteryNew,
  learning: ui.masteryLearning,
  known: ui.masteryKnown,
};

function SpeakButton({ text, label }: { text: string; label: string }) {
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
      aria-label={`${t(ui.listen)}: ${label}`}
    >
      <span aria-hidden="true">🔊</span>
    </button>
  );
}

function ExampleRow({ tag, en, uk }: { tag: string; en: string; uk: string }) {
  return (
    <div className="dict-ex">
      <span className="dict-ex-tag" data-tag={tag}>
        {tag}
      </span>
      <div>
        <p className="dict-ex-en">
          {en} <SpeakButton text={en} label={en} />
        </p>
        <p className="dict-ex-uk">{uk}</p>
      </div>
    </div>
  );
}

function MasteryBar({ id }: { id: string }) {
  const { t } = useLang();
  const map = useMastery();
  const current = map.get(id) ?? 'new';
  return (
    <div className="def-mastery" role="group" aria-label={t(ui.masteryLabel)}>
      {MASTERY_STATES.map((s) => (
        <button
          key={s}
          type="button"
          className={cx('def-mastery-btn', `is-${s}`, current === s && 'on')}
          aria-pressed={current === s}
          onClick={() => setMastery(id, s)}
        >
          {t(MASTERY_LABEL[s])}
        </button>
      ))}
    </div>
  );
}

function ChipList({ label, items }: { label: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <div className="def-slot">
      <dt>{label}</dt>
      <dd>
        <span className="def-chips">
          {items.map((it) => (
            <span className="chip" key={it}>
              {it}
            </span>
          ))}
        </span>
      </dd>
    </div>
  );
}

function StudyBody({ w }: { w: WordEntry }) {
  const { t } = useLang();
  const { general, professional } = splitExamples(w);
  return (
    <div className="def-body">
      <div className="dict-def">
        <p>{w.def.en}</p>
        <p className="muted">{w.def.uk}</p>
      </div>

      <dl className="def-slots">
        <ChipList label={t(ui.synonymsLabel)} items={w.synonyms ?? []} />
        <ChipList label={t(ui.antonymsLabel)} items={w.antonyms ?? []} />
        <ChipList label={t(ui.collocationsLabel)} items={w.collocations ?? []} />
        {w.seeAlso && w.seeAlso.length > 0 && (
          <div className="def-slot">
            <dt>{t(ui.seeAlso)}</dt>
            <dd>
              <span className="def-chips">
                {w.seeAlso.map((sid) => (
                  <a
                    className="chip"
                    key={sid}
                    href={hrefDefinitions(sid)}
                    onClick={(e) => {
                      e.preventDefault();
                      navigate(hrefDefinitions(sid));
                    }}
                  >
                    {sid} →
                  </a>
                ))}
              </span>
            </dd>
          </div>
        )}
      </dl>

      <p className="def-exhead mono dim">{t(ui.defGeneral)}</p>
      <div className="dict-examples">
        {general.map((ex, i) => (
          <ExampleRow key={i} tag={ex.tag} en={ex.text.en} uk={ex.text.uk} />
        ))}
      </div>
      <p className="def-exhead mono dim">{t(ui.defProfessional)}</p>
      <div className="dict-examples">
        {professional.map((ex, i) => (
          <ExampleRow key={i} tag={ex.tag} en={ex.text.en} uk={ex.text.uk} />
        ))}
      </div>
    </div>
  );
}

function RevealGate({
  w,
  revealed,
  onReveal,
  children,
}: {
  w: WordEntry;
  revealed: boolean;
  onReveal: () => void;
  children: React.ReactNode;
}) {
  const { t } = useLang();
  if (revealed) {
    return (
      <div className="def-reveal">
        <p className="def-answer">
          <span className="dict-word">{w.word}</span>
          {w.ipa && <span className="dict-ipa mono">/{w.ipa}/</span>}
          <SpeakButton text={w.word} label={w.word} />
        </p>
        {children}
      </div>
    );
  }
  return (
    <button type="button" className="def-btn def-reveal-btn" onClick={onReveal}>
      {t(ui.defReveal)}
    </button>
  );
}

function RecallBody({
  w,
  revealed,
  onReveal,
}: {
  w: WordEntry;
  revealed: boolean;
  onReveal: () => void;
}) {
  const { t } = useLang();
  return (
    <div className="def-body">
      <p className="def-task">{t(ui.defWhatWord)}</p>
      <div className="dict-def">
        <p>{w.def.en}</p>
        <p className="muted">{w.def.uk}</p>
      </div>
      {w.synonyms && w.synonyms.length > 0 && (
        <p className="def-hint dim">
          {t(ui.synonymsLabel)}: {w.synonyms.join(', ')}
        </p>
      )}
      <RevealGate w={w} revealed={revealed} onReveal={onReveal}>
        <SelfRate id={w.id} />
      </RevealGate>
    </div>
  );
}

function DescribeBody({
  w,
  revealed,
  onReveal,
}: {
  w: WordEntry;
  revealed: boolean;
  onReveal: () => void;
}) {
  const { t } = useLang();
  const sc = describeScaffold(w);
  const cover: string[] = [
    `${t(ui.defScaffoldPos)}: ${sc.pos.join(', ')}`,
    t(ui.defScaffoldFunction),
    t(ui.defScaffoldSyn),
    t(ui.defScaffoldAnt),
    t(ui.defScaffoldContext),
  ];
  return (
    <div className="def-body">
      <p className="def-task">{t(ui.defDescribeTask)}</p>
      <div className="def-cover">
        <p className="mono dim">{t(ui.defCover)}</p>
        <ul className="def-cover-list">
          {cover.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        <p className="def-taboo">
          <span className="def-taboo-tag">{t(ui.defDontUse)}</span> {sc.taboo.join(' · ')}
        </p>
      </div>
      <RevealGate w={w} revealed={revealed} onReveal={onReveal}>
        <div className="dict-def">
          <p>{w.def.en}</p>
          <p className="muted">{w.def.uk}</p>
        </div>
        {sc.synonyms.length > 0 && (
          <p className="def-hint dim">
            {t(ui.synonymsLabel)}: {sc.synonyms.join(', ')}
          </p>
        )}
        <SelfRate id={w.id} />
      </RevealGate>
    </div>
  );
}

function SelfRate({ id }: { id: string }) {
  const { t } = useLang();
  return (
    <div className="def-rate" role="group" aria-label={t(ui.masteryLabel)}>
      <button type="button" className="def-btn def-rate-btn is-known" onClick={() => setMastery(id, 'known')}>
        {t(ui.defGotIt)}
      </button>
      <button type="button" className="def-btn def-rate-btn is-learning" onClick={() => setMastery(id, 'learning')}>
        {t(ui.defAgain)}
      </button>
    </div>
  );
}

function ClozeBody({ w }: { w: WordEntry }) {
  const { t } = useLang();
  const cloze = useMemo(() => pickCloze(w), [w]);
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);
  const [reveal, setReveal] = useState(false);

  if (!cloze) {
    return (
      <div className="def-body">
        <p className="muted">{w.def.en}</p>
      </div>
    );
  }
  const correct = checked && checkGap(value, [cloze.answer]);
  return (
    <div className="def-body">
      <p className="def-task">{t(ui.defClozeTask)}</p>
      <p className="def-cloze-sentence">{cloze.masked}</p>
      <p className="def-cloze-uk muted">{cloze.uk}</p>
      <div className="def-cloze-row">
        <input
          className="ex-input"
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setChecked(false);
          }}
          placeholder={t(ui.typeAnswer)}
          aria-label={t(ui.defClozeTask)}
          autoComplete="off"
        />
        <button type="button" className="def-btn" onClick={() => setChecked(true)} disabled={!value.trim()}>
          {t(ui.check)}
        </button>
        <button type="button" className="def-btn def-btn-ghost" onClick={() => setReveal((r) => !r)}>
          {t(ui.showAnswer)}
        </button>
      </div>
      {checked && (
        <p className={cx('def-verdict', correct ? 'is-ok' : 'is-no')} aria-live="polite">
          {correct ? t(ui.correct) : t(ui.notQuite)}
        </p>
      )}
      {reveal && (
        <p className="def-answer-line">
          {t(ui.answerLabel)}: <strong>{cloze.answer}</strong>
        </p>
      )}
    </div>
  );
}

function WordStudio({
  w,
  mode,
  setMode,
  revealed,
  setRevealed,
}: {
  w: WordEntry;
  mode: StudioMode;
  setMode: (m: StudioMode) => void;
  revealed: boolean;
  setRevealed: (r: boolean) => void;
}) {
  const { t } = useLang();
  return (
    <div className="def-studio">
      <div className="def-modeseg" role="tablist" aria-label="mode">
        {MODES.map((m) => (
          <button
            key={m.id}
            role="tab"
            aria-selected={mode === m.id}
            className={cx('def-mode', mode === m.id && 'on')}
            onClick={() => {
              setMode(m.id);
              setRevealed(false);
            }}
          >
            <span aria-hidden="true">{m.icon}</span> {t(m.label)}
          </button>
        ))}
      </div>
      <MasteryBar id={w.id} />
      {mode === 'study' && <StudyBody w={w} />}
      {mode === 'recall' && <RecallBody w={w} revealed={revealed} onReveal={() => setRevealed(true)} />}
      {mode === 'describe' && <DescribeBody w={w} revealed={revealed} onReveal={() => setRevealed(true)} />}
      {mode === 'cloze' && <ClozeBody key={w.id} w={w} />}
    </div>
  );
}

function WordRow({
  w,
  open,
  masked,
  mastery,
  highlighted,
  onToggle,
  refCb,
  studio,
}: {
  w: WordEntry;
  open: boolean;
  masked: boolean;
  mastery: Mastery;
  highlighted: boolean;
  onToggle: () => void;
  refCb: (el: HTMLElement | null) => void;
  studio: React.ReactNode;
}) {
  return (
    <div className={cx('def-card', open && 'def-card--open', highlighted && 'dict-card--on')} ref={refCb} id={`def-${w.id}`}>
      <button className="def-head" onClick={onToggle} aria-expanded={open}>
        <span className={cx('dict-caret', open && 'open')} aria-hidden="true">
          ›
        </span>
        <span className={cx('def-mstate', `is-${mastery}`)} aria-hidden="true" />
        <span className="dict-word">{masked ? '· · ·' : w.word}</span>
        {!masked && w.ipa && <span className="dict-ipa mono">/{w.ipa}/</span>}
        <span className="dict-pos">{w.pos.join(', ')}</span>
        {!masked && <span className="dict-tr">{w.translations.join(', ')}</span>}
        <LevelBadge level={w.level} />
      </button>
      {open && studio}
    </div>
  );
}

export function DefinitionsPage({ id }: { id?: string }) {
  const { t } = useLang();
  const [q, setQ] = useState('');
  const [level, setLevel] = useState<Level | 'all'>('all');
  const [pos, setPos] = useState<Pos | 'all'>('all');
  const [letter, setLetter] = useState<string | 'all'>('all');
  const [openId, setOpenId] = useState<string | undefined>(id);
  const [mode, setMode] = useState<StudioMode>('study');
  const [revealed, setRevealed] = useState(false);
  const [highlight, setHighlight] = useState<string | undefined>(id);
  const refs = useRef<Map<string, HTMLElement>>(new Map());
  const masteryMap = useMastery();

  const allPos = useMemo(() => [...new Set(WORDS.flatMap((w) => w.pos))].sort(), []);
  const needle = q.trim().toLowerCase();

  // Words after the text/level/pos filters (before the A–Z letter pick) — drives the rail.
  const filtered = useMemo(
    () =>
      WORDS.filter((w) => {
        if (level !== 'all' && w.level !== level) return false;
        if (pos !== 'all' && !w.pos.includes(pos)) return false;
        if (!needle) return true;
        return (
          w.word.toLowerCase().includes(needle) ||
          w.translations.some((tr) => tr.toLowerCase().includes(needle)) ||
          w.def.en.toLowerCase().includes(needle) ||
          w.def.uk.toLowerCase().includes(needle) ||
          (w.synonyms ?? []).some((s) => s.toLowerCase().includes(needle))
        );
      }),
    [needle, level, pos],
  );

  const letters = useMemo(() => availableLetters(filtered), [filtered]);
  const shown = useMemo(
    () => (letter === 'all' ? filtered : filtered.filter((w) => firstLetter(w.word) === letter)),
    [filtered, letter],
  );
  const groups = useMemo(() => groupByLetter(shown), [shown]);
  const groupLetters = useMemo(() => [...groups.keys()].sort(), [groups]);

  // Deep-link arrival (#/definitions/<id>): open the studio, scroll to it, highlight briefly.
  useEffect(() => {
    setHighlight(id);
    if (!id) return;
    setOpenId(id);
    setMode('study');
    setRevealed(false);
    const el = refs.current.get(id);
    if (el) {
      const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
      el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
    }
    const timer = window.setTimeout(() => setHighlight(undefined), 2400);
    return () => window.clearTimeout(timer);
  }, [id]);

  const toggle = (wid: string) => {
    setOpenId((prev) => (prev === wid ? undefined : wid));
    setMode('study');
    setRevealed(false);
    if (highlight) setHighlight(undefined);
  };

  const openRandom = () => {
    if (shown.length === 0) return;
    const pick = shown[Math.floor(Math.random() * shown.length)];
    setOpenId(pick.id);
    setMode('recall');
    setRevealed(false);
    const el = refs.current.get(pick.id);
    el?.scrollIntoView({ block: 'center' });
  };

  return (
    <div className="content">
      <h1>{t(ui.definitions)}</h1>
      <p className="muted">{t(ui.definitionsLede)}</p>

      <div className="dict-toolbar">
        <div className="searchbox">
          <span className="search-ic" aria-hidden="true">
            ⌕
          </span>
          <input
            type="search"
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setLetter('all');
              if (highlight) setHighlight(undefined);
            }}
            placeholder={t(ui.defSearchPlaceholder)}
            aria-label={t(ui.search)}
          />
        </div>
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
        <select
          className="ex-input"
          style={{ flex: '0 1 auto', maxWidth: '200px' }}
          value={pos}
          onChange={(e) => setPos(e.target.value as Pos | 'all')}
          aria-label={t(ui.allPos)}
        >
          <option value="all">{t(ui.allPos)}</option>
          {allPos.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
        <button type="button" className="def-btn def-random" onClick={openRandom} disabled={shown.length === 0}>
          🎲 {t(ui.defRandom)}
        </button>
        <span className="dict-count dim">
          {shown.length}/{WORDS.length} {t(ui.entriesLabel)}
        </span>
      </div>

      <div className="def-alpha" role="group" aria-label="A–Z">
        <button className={cx('def-letter', letter === 'all' && 'on')} onClick={() => setLetter('all')}>
          {t(ui.defAllLetters)}
        </button>
        {ALPHABET.map((L) => {
          const has = letters.has(L);
          return (
            <button
              key={L}
              className={cx('def-letter', letter === L && 'on', !has && 'is-empty')}
              disabled={!has}
              onClick={() => setLetter(L)}
              aria-pressed={letter === L}
            >
              {L}
            </button>
          );
        })}
      </div>

      <div className="def-list">
        {groupLetters.map((L) => (
          <section className="def-group" key={L} aria-label={L}>
            <h2 className="def-group-h">{L}</h2>
            {groups.get(L)!.map((w) => {
              const open = openId === w.id;
              const masked = open && (mode === 'recall' || mode === 'describe') && !revealed;
              return (
                <WordRow
                  key={w.id}
                  w={w}
                  open={open}
                  masked={masked}
                  mastery={masteryMap.get(w.id) ?? getMastery(w.id)}
                  highlighted={highlight === w.id}
                  onToggle={() => toggle(w.id)}
                  refCb={(el) => {
                    if (el) refs.current.set(w.id, el);
                    else refs.current.delete(w.id);
                  }}
                  studio={
                    <WordStudio
                      w={w}
                      mode={mode}
                      setMode={setMode}
                      revealed={revealed}
                      setRevealed={setRevealed}
                    />
                  }
                />
              );
            })}
          </section>
        ))}
        {shown.length === 0 && <p className="dict-empty muted">{t(ui.searchNoResults)}</p>}
      </div>
    </div>
  );
}
