// CHANGED (S1): module page — header/TOC/body/endcaps.
// CHANGED (M2 — the module meta-split): the header, TOC and prev/next now render INSTANTLY from nav
// meta (`concepts.getModule`, in the eager chunk), and the module's content is fetched from its own
// lazy chunk via `loadModule()` and rendered by `<ModuleBody/>`. Unauthored modules render their real
// header + a ComingSoon card, so the whole 34-module map stays navigable. The perceived-speed win is
// real: the page frame appears immediately instead of waiting on 450 kB of eagerly-bundled content.
import { useEffect, useState } from 'react';
import { adjacentModules, getModule, getSection, isAuthored, loadModule } from '../../data/concepts';
import type { Module } from '../../data/types';
import { useLang } from '../../i18n/lang';
import { ui } from '../../i18n/ui';
import { useAppState } from '../../lib/appState';
// CHANGED (T1): dive levels — persisted depth (the switcher itself lives in ModuleBody, S5 mechanic).
import { useDive } from '../../lib/dive';
import { hrefModule } from '../../lib/hashRouter';
import { ComingSoon } from '../pages/ComingSoon';
import { LevelBadge } from './LevelBadge';
import { ModuleBody } from './ModuleBody';

export function ModulePage({ moduleId, topicId }: { moduleId: string; topicId?: string }) {
  const { t } = useLang();
  const { isKnown, toggleKnown } = useAppState();
  const { dive, setDive } = useDive(); // CHANGED (T1)
  const m = getModule(moduleId);
  const authored = isAuthored(moduleId);
  const [body, setBody] = useState<Module | undefined>();

  // Load the body chunk for authored modules. `loadModule` memoizes, so revisiting is instant, and
  // the `alive` flag drops a late response after the user has already navigated on.
  useEffect(() => {
    if (!authored) {
      setBody(undefined);
      return;
    }
    let alive = true;
    void loadModule(moduleId).then((full) => {
      if (alive) setBody(full);
    });
    return () => {
      alive = false;
    };
  }, [moduleId, authored]);

  // Scroll to the requested topic (or to top on plain module navigation). Depends on `body` too:
  // before M2 the target existed on first render, now it appears when the chunk lands.
  useEffect(() => {
    if (topicId) {
      const el = document.getElementById(`topic-${topicId}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [moduleId, topicId, body]);

  if (!m) {
    return (
      <div className="content">
        <p className="muted">Module not found.</p>
        <a className="btn" href={hrefModule('m17-modal-system')}>
          ★ {t(ui.startHere)}
        </a>
      </div>
    );
  }

  const section = getSection(m.section);
  const { prev, next } = adjacentModules(m.id);
  const known = isKnown(m.id);

  return (
    <article className="content module">
      <header className="module-header">
        <div className="module-kicker">
          {section && (
            <span style={{ color: section.accent }}>
              {section.roman} · {t(section.title)}
            </span>
          )}
        </div>
        <h1>
          <span className="module-num mono">{String(m.num).padStart(2, '0')}</span>
          {t(m.title)}
        </h1>
        <div className="module-meta">
          <LevelBadge level={m.level} />
          {m.signature && <span className="chip star">★ interactive</span>}
          <span className="chip">
            {m.readMins} {t(ui.readMins)}
          </span>
          <button className={known ? 'chip known-on' : 'chip'} onClick={() => toggleKnown(m.id)} aria-pressed={known}>
            {known ? `✓ ${t(ui.known)}` : t(ui.markKnown)}
          </button>
        </div>
        <p className="module-tagline">{t(m.tagline)}</p>
        <div className="module-mm">
          <span className="module-mm-label">{t(ui.mentalModelLabel)}</span>
          <p>{t(m.mentalModel)}</p>
        </div>
      </header>

      {!authored ? (
        <ComingSoon />
      ) : (
        <>
          {/* CHANGED (M2): the TOC comes from nav meta, so it is on screen before the body chunk. */}
          {m.topics.length > 0 && (
            <nav className="toc" aria-label={t(ui.onThisPage)}>
              <span className="toc-title">{t(ui.onThisPage)}</span>
              <ol>
                {m.topics.map((tp) => (
                  <li key={tp.id}>
                    <a href={hrefModule(m.id, tp.id)}>{t(tp.title)}</a>
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {body ? (
            <ModuleBody module={body} dive={dive} setDive={setDive} />
          ) : (
            <p className="muted module-loading">{t(ui.loadingModule)}</p>
          )}
        </>
      )}

      <nav className="prevnext" aria-label="Module navigation">
        {prev ? (
          <a className="pn pn-prev" href={hrefModule(prev.id)}>
            <span className="dim">← {t(ui.prevModule)}</span>
            <span>{t(prev.title)}</span>
          </a>
        ) : (
          <span />
        )}
        {next ? (
          <a className="pn pn-next" href={hrefModule(next.id)}>
            <span className="dim">{t(ui.nextModule)} →</span>
            <span>{t(next.title)}</span>
          </a>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
