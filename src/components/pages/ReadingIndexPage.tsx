// CHANGED (S3): Reading index (#/reading) — the accordion library. Search across all texts,
// filter by CEFR level, expand a category to see its texts, click a title to read it. Modeled on
// the reference accordion + the DictionaryPage patterns (reuses .dict-* / .levelseg / .searchbox).
// A11y: labeled search, aria-expanded category buttons, level radiogroup. Reduced-motion safe.
import { useMemo, useState } from 'react';
import { LEVELS } from '../../data/concepts';
import type { Level, ReadingText } from '../../data/types';
import {
  READING_TEXTS,
  nonEmptyReadingCategories,
  readingByCategory,
} from '../../data/reading';
import { useLang } from '../../i18n/lang';
import { ui } from '../../i18n/ui';
import { useAppState } from '../../lib/appState';
import { hrefReadingText, navigate } from '../../lib/hashRouter';
import { cx } from '../../lib/utils';
import { LevelBadge } from '../module/LevelBadge';

function matchesText(t: ReadingText, needle: string): boolean {
  if (!needle) return true;
  return (
    t.title.en.toLowerCase().includes(needle) ||
    t.title.uk.toLowerCase().includes(needle) ||
    t.body.en.toLowerCase().includes(needle) ||
    t.body.uk.toLowerCase().includes(needle)
  );
}

function TextRow({ t }: { t: ReadingText }) {
  const { t: tr } = useLang();
  const { isKnown } = useAppState();
  const read = isKnown(t.id);
  return (
    <a
      className="rd-text"
      href={hrefReadingText(t.id)}
      onClick={(e) => {
        e.preventDefault();
        navigate(hrefReadingText(t.id));
      }}
    >
      <span className={cx('rd-text-check', read && 'on')} aria-hidden="true">
        {read ? '✓' : '›'}
      </span>
      <span className="rd-text-title">{tr(t.title)}</span>
      <span className="rd-text-meta">
        <span className="rd-min mono dim">
          {t.minutes} {tr(ui.readMins)}
        </span>
        <LevelBadge level={t.level} />
      </span>
    </a>
  );
}

export function ReadingIndexPage() {
  const { t } = useLang();
  const [q, setQ] = useState('');
  const [level, setLevel] = useState<Level | 'all'>('all');
  const [openCats, setOpenCats] = useState<Set<string>>(() => new Set());

  const needle = q.trim().toLowerCase();
  const searching = needle !== '' || level !== 'all';

  const cats = useMemo(() => nonEmptyReadingCategories(), []);

  const filteredByCat = useMemo(() => {
    const map = new Map<string, ReadingText[]>();
    for (const c of cats) {
      const list = readingByCategory(c.id).filter(
        (x) => (level === 'all' || x.level === level) && matchesText(x, needle),
      );
      map.set(c.id, list);
    }
    return map;
  }, [cats, level, needle]);

  const totalShown = useMemo(
    () => [...filteredByCat.values()].reduce((n, l) => n + l.length, 0),
    [filteredByCat],
  );

  const toggle = (id: string) =>
    setOpenCats((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const visibleCats = cats.filter((c) => (filteredByCat.get(c.id) ?? []).length > 0);

  return (
    <div className="content">
      <h1>{t(ui.reading)}</h1>
      <p className="muted">{t(ui.readingLede)}</p>

      <div className="dict-toolbar">
        <div className="searchbox">
          <span className="search-ic" aria-hidden="true">
            ⌕
          </span>
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t(ui.readingSearchPlaceholder)}
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
        <span className="dict-count dim">
          {totalShown}/{READING_TEXTS.length} {t(ui.readingTextsLabel)}
        </span>
      </div>

      <div className="dict-list">
        {visibleCats.map((c) => {
          const list = filteredByCat.get(c.id) ?? [];
          const open = searching || openCats.has(c.id);
          return (
            <div className="dict-card" key={c.id}>
              <button className="dict-head rd-cat-head" onClick={() => toggle(c.id)} aria-expanded={open}>
                <span className={cx('dict-caret', open && 'open')} aria-hidden="true">
                  ›
                </span>
                <span className="rd-cat-name">{t(c.title)}</span>
                {c.blurb && <span className="rd-cat-blurb dim">{t(c.blurb)}</span>}
                <span className="rd-cat-count mono dim">/ {list.length}</span>
              </button>
              {open && (
                <div className="dict-body rd-body">
                  <div className="rd-textlist">
                    {list.map((tx) => (
                      <TextRow key={tx.id} t={tx} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
        {totalShown === 0 && <p className="dict-empty muted">{t(ui.readingNoResults)}</p>}
      </div>
    </div>
  );
}
