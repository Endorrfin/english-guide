// CHANGED (S1): Dictionary v1 (#/dictionary[/<id>]) — the guide's first-class word trainer page,
// modeled on (and extending) the database guide's Glossary UX the owner loves: instant search
// over headwords + translations + definitions, level/kind/POS filters, expandable golden cards
// (IPA · TTS · 7 tagged examples · forms · collocations · synonyms/antonyms · seeAlso navigation),
// and deep links from global search with arrival highlight.
import { useEffect, useMemo, useRef, useState } from 'react';
import { LEVELS } from '../../data/concepts';
import type { EntryKind, Level, Pos, WordEntry } from '../../data/types';
import { WORDS } from '../../data/words';
import { useLang } from '../../i18n/lang';
import { ui } from '../../i18n/ui';
import { hrefDictionary, navigate } from '../../lib/hashRouter';
import { useTts } from '../../lib/tts';
import { cx } from '../../lib/utils';
import { LevelBadge } from '../module/LevelBadge';

const KINDS: { id: EntryKind; label: typeof ui.kindWord }[] = [
  { id: 'word', label: ui.kindWord },
  { id: 'phrasal', label: ui.kindPhrasal },
  { id: 'idiom', label: ui.kindIdiom },
];

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

function WordCard({
  w,
  open,
  highlighted,
  onToggle,
  refCb,
}: {
  w: WordEntry;
  open: boolean;
  highlighted: boolean;
  onToggle: () => void;
  refCb: (el: HTMLElement | null) => void;
}) {
  const { t } = useLang();

  const forms: [string, string][] = [];
  if (w.forms) {
    if (w.forms.past) forms.push(['V2', w.forms.past]);
    if (w.forms.pastParticiple) forms.push(['V3', w.forms.pastParticiple]);
    if (w.forms.ing) forms.push(['-ing', w.forms.ing]);
    if (w.forms.plural) forms.push(['pl.', w.forms.plural]);
    if (w.forms.comparative) forms.push(['comp.', w.forms.comparative]);
    if (w.forms.superlative) forms.push(['superl.', w.forms.superlative]);
  }

  return (
    <div className={cx('dict-card', highlighted && 'dict-card--on')} ref={refCb} id={`word-${w.id}`}>
      <button className="dict-head" onClick={onToggle} aria-expanded={open}>
        <span className={cx('dict-caret', open && 'open')} aria-hidden="true">
          ›
        </span>
        <span className="dict-word">{w.word}</span>
        {w.ipa && <span className="dict-ipa mono">/{w.ipa}/</span>}
        <SpeakButton text={w.word} label={w.word} />
        <span className="dict-pos">{w.pos.join(', ')}</span>
        {w.kind !== 'word' && (
          <span className="chip chip-kind" data-kind={w.kind}>
            {w.kind}
          </span>
        )}
        <span className="dict-tr">{w.translations.join(', ')}</span>
        <LevelBadge level={w.level} />
      </button>
      {open && (
        <div className="dict-body">
          <div className="dict-def">
            <p>{w.def.en}</p>
            <p className="muted">{w.def.uk}</p>
          </div>

          <dl className="dict-meta-row">
            <div>
              <dt>{t(ui.translationsLabel)}</dt>
              <dd>
                <span className="dict-translations">
                  {w.translations.map((tr) => (
                    <span className="chip" key={tr}>
                      {tr}
                    </span>
                  ))}
                </span>
              </dd>
            </div>
            {forms.length > 0 && (
              <div>
                <dt>{t(ui.formsLabel)}</dt>
                <dd className="mono">{forms.map(([k, v]) => `${k} ${v}`).join(' · ')}</dd>
              </div>
            )}
          </dl>

          <p className="dict-meta-row">
            <span className="mono dim">{t(ui.examplesLabel)}</span>
          </p>
          <div className="dict-examples">
            {w.examples.map((ex, i) => (
              <div className="dict-ex" key={i}>
                <span className="dict-ex-tag" data-tag={ex.tag}>
                  {ex.tag}
                </span>
                <div>
                  <p className="dict-ex-en">
                    {ex.text.en} <SpeakButton text={ex.text.en} label={ex.text.en} />
                  </p>
                  <p className="dict-ex-uk">{ex.text.uk}</p>
                </div>
              </div>
            ))}
          </div>

          <dl className="dict-meta-row">
            {w.collocations && w.collocations.length > 0 && (
              <div>
                <dt>{t(ui.collocationsLabel)}</dt>
                <dd>{w.collocations.join(' · ')}</dd>
              </div>
            )}
            {w.synonyms && w.synonyms.length > 0 && (
              <div>
                <dt>{t(ui.synonymsLabel)}</dt>
                <dd>{w.synonyms.join(', ')}</dd>
              </div>
            )}
            {w.antonyms && w.antonyms.length > 0 && (
              <div>
                <dt>{t(ui.antonymsLabel)}</dt>
                <dd>{w.antonyms.join(', ')}</dd>
              </div>
            )}
            {w.topics && w.topics.length > 0 && (
              <div>
                <dt>{t(ui.topicsLabel)}</dt>
                <dd className="dim">{w.topics.join(' · ')}</dd>
              </div>
            )}
            {w.seeAlso && w.seeAlso.length > 0 && (
              <div>
                <dt>{t(ui.seeAlso)}</dt>
                <dd>
                  <span className="dict-see">
                    {w.seeAlso.map((id) => (
                      <a
                        className="chip"
                        key={id}
                        href={hrefDictionary(id)}
                        onClick={(e) => {
                          e.preventDefault();
                          navigate(hrefDictionary(id));
                        }}
                      >
                        {id} →
                      </a>
                    ))}
                  </span>
                </dd>
              </div>
            )}
          </dl>
        </div>
      )}
    </div>
  );
}

export function DictionaryPage({ id }: { id?: string } = {}) {
  const { t } = useLang();
  const [q, setQ] = useState('');
  const [level, setLevel] = useState<Level | 'all'>('all');
  const [kind, setKind] = useState<EntryKind | 'all'>('all');
  const [pos, setPos] = useState<Pos | 'all'>('all');
  const [openIds, setOpenIds] = useState<Set<string>>(() => new Set(id ? [id] : []));
  const [highlight, setHighlight] = useState<string | undefined>(id);
  const refs = useRef<Map<string, HTMLElement>>(new Map());

  const allPos = useMemo(() => [...new Set(WORDS.flatMap((w) => w.pos))].sort(), []);

  const needle = q.trim().toLowerCase();
  const entries = useMemo(
    () =>
      WORDS.filter((w) => {
        if (level !== 'all' && w.level !== level) return false;
        if (kind !== 'all' && w.kind !== kind) return false;
        if (pos !== 'all' && !w.pos.includes(pos)) return false;
        if (!needle) return true;
        return (
          w.word.toLowerCase().includes(needle) ||
          w.translations.some((tr) => tr.toLowerCase().includes(needle)) ||
          w.def.en.toLowerCase().includes(needle) ||
          w.def.uk.toLowerCase().includes(needle) ||
          (w.collocations ?? []).some((c) => c.toLowerCase().includes(needle))
        );
      }).sort((a, b) => a.word.localeCompare(b.word)),
    [needle, level, kind, pos],
  );

  // Deep-link arrival (#/dictionary/<id>): open the card, scroll it into view, highlight briefly.
  useEffect(() => {
    setHighlight(id);
    if (!id) return;
    setOpenIds((prev) => new Set(prev).add(id));
    const el = refs.current.get(id);
    if (el) {
      const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
      el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
    }
    const timer = window.setTimeout(() => setHighlight(undefined), 2400);
    return () => window.clearTimeout(timer);
  }, [id]);

  const toggle = (wid: string) =>
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(wid)) next.delete(wid);
      else next.add(wid);
      return next;
    });

  return (
    <div className="content">
      <h1>{t(ui.dictionary)}</h1>
      <p className="muted">{t(ui.dictionaryLede)}</p>

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
              if (highlight) setHighlight(undefined);
            }}
            placeholder={t(ui.dictSearchPlaceholder)}
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
        <div className="kindseg" role="group" aria-label="Kind">
          <button className={cx('chip', kind === 'all' && 'known-on')} onClick={() => setKind('all')}>
            {t(ui.allKinds)}
          </button>
          {KINDS.map((k) => (
            <button
              key={k.id}
              className={cx('chip', kind === k.id && 'known-on')}
              onClick={() => setKind(kind === k.id ? 'all' : k.id)}
              aria-pressed={kind === k.id}
            >
              {t(k.label)}
            </button>
          ))}
        </div>
        <select
          className="ex-input"
          style={{ flex: '0 1 auto', maxWidth: '220px' }}
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
        <span className="dict-count dim">
          {entries.length}/{WORDS.length} {t(ui.entriesLabel)}
        </span>
      </div>

      <div className="dict-list">
        {entries.map((w) => (
          <WordCard
            key={w.id}
            w={w}
            open={openIds.has(w.id)}
            highlighted={highlight === w.id}
            onToggle={() => toggle(w.id)}
            refCb={(el) => {
              if (el) refs.current.set(w.id, el);
              else refs.current.delete(w.id);
            }}
          />
        ))}
        {entries.length === 0 && <p className="dict-empty muted">{t(ui.searchNoResults)}</p>}
      </div>
    </div>
  );
}
