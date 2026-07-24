// CHANGED (S1): collapsible sidebar — page links (mobile reach) + 5 sections × 34 modules
// (ported pattern from ../database guide; reads concepts.ts directly — meta split arrives later).
import { useCallback, useEffect, useState } from 'react';
import { modulesBySection, sections } from '../../data/concepts';
import { useLang } from '../../i18n/lang';
import { ui } from '../../i18n/ui';
import { useAppState } from '../../lib/appState';
import {
  hrefDictionary,
  hrefIrregular,
  hrefMap,
  hrefModule,
  hrefPractice,
  hrefReading,
  hrefReview,
  isWordsRoute,
  useRoute,
} from '../../lib/hashRouter';
import { cx } from '../../lib/utils';

// CHANGED (V1): Definitions + Dictionary collapsed into one "Words" hub entry (active on all 3 tabs).
const PAGE_LINKS: { name: string; href: string; label: (typeof ui)[keyof typeof ui] }[] = [
  { name: 'map', href: hrefMap(), label: ui.guideMap },
  { name: 'words', href: hrefDictionary(), label: ui.words },
  { name: 'reading', href: hrefReading(), label: ui.reading }, // CHANGED (S3)
  { name: 'practice', href: hrefPractice(), label: ui.practice },
  { name: 'review', href: hrefReview(), label: ui.review },
  { name: 'irregular', href: hrefIrregular(), label: ui.irregularVerbs },
];

const OPEN_KEY = 'englishguide.sidebar';

function loadOpen(): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(OPEN_KEY);
    if (raw) return JSON.parse(raw) as Record<string, boolean>;
  } catch {
    /* ignore */
  }
  return {};
}

export function Sidebar() {
  const route = useRoute();
  const { t } = useLang();
  const { levelFilter, sidebarOpen, closeSidebar } = useAppState();
  const [openMap, setOpenMap] = useState<Record<string, boolean>>(loadOpen);

  useEffect(() => {
    try {
      localStorage.setItem(OPEN_KEY, JSON.stringify(openMap));
    } catch {
      /* ignore */
    }
  }, [openMap]);

  const activeModule = route.name === 'module' ? route.moduleId : null;
  const isOpen = (id: string) => openMap[id] !== false; // default open
  const toggle = useCallback((id: string) => setOpenMap((m) => ({ ...m, [id]: m[id] === false })), []);

  return (
    <>
      <div className={cx('sidebar-scrim', sidebarOpen && 'show')} onClick={closeSidebar} aria-hidden="true" />
      <aside className={cx('sidebar', sidebarOpen && 'open')} aria-label="Modules">
        <nav className="side-nav">
          <ul className="side-pages">
            {PAGE_LINKS.map((p) => {
              // CHANGED (V1): the "Words" entry lights on any of its three tabs.
              const active = p.name === 'words' ? isWordsRoute(route.name) : route.name === p.name;
              return (
                <li key={p.name}>
                  <a
                    className={cx('side-page', active && 'active')}
                    href={p.href}
                    onClick={closeSidebar}
                    aria-current={active ? 'page' : undefined}
                  >
                    {t(p.label)}
                  </a>
                </li>
              );
            })}
          </ul>
          {sections.map((s) => {
            const mods = modulesBySection(s.id);
            const open = isOpen(s.id);
            return (
              <div className="side-section" key={s.id}>
                <button
                  className="side-head"
                  onClick={() => toggle(s.id)}
                  aria-expanded={open}
                  style={{ ['--sec' as string]: s.accent }}
                >
                  <span className="side-roman" style={{ color: s.accent }}>
                    {s.roman}
                  </span>
                  <span className="side-name">{t(s.title)}</span>
                  <span className={cx('side-caret', open && 'open')}>›</span>
                </button>
                {open && (
                  <ul className="side-mods">
                    {mods.map((m) => {
                      const dim = levelFilter !== 'all' && m.level !== levelFilter;
                      const active = m.id === activeModule;
                      return (
                        <li key={m.id}>
                          <a
                            className={cx('side-mod', active && 'active', dim && 'dim-mod')}
                            href={hrefModule(m.id)}
                            onClick={closeSidebar}
                            aria-current={active ? 'page' : undefined}
                          >
                            <span className="side-mod-num mono">{String(m.num).padStart(2, '0')}</span>
                            <span className="side-mod-title">{t(m.title)}</span>
                            {m.signature && (
                              <span className="side-star" title="interactive">
                                ★
                              </span>
                            )}
                            <span className="side-mod-level" data-level={m.level} aria-hidden="true" />
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
