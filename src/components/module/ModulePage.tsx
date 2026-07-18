// CHANGED (S1): module page — header/TOC/body/endcaps rendered straight from concepts.ts
// (the module meta-split arrives in a later session, like the database guide's S19). Unauthored
// modules render their real header + a ComingSoon card, so the whole 34-module map is navigable
// from day one. Exercises render after pitfalls (types.ts contract).
import { useEffect } from 'react';
import { adjacentModules, getModule, getSection, isAuthored } from '../../data/concepts';
import { useLang } from '../../i18n/lang';
import { ui } from '../../i18n/ui';
import { useAppState } from '../../lib/appState';
import { hrefModule } from '../../lib/hashRouter';
import { ComingSoon } from '../pages/ComingSoon';
import { BlockView } from './blocks';
import { ExerciseSet } from './ExerciseSet';
import { LevelBadge } from './LevelBadge';

export function ModulePage({ moduleId, topicId }: { moduleId: string; topicId?: string }) {
  const { t, lang } = useLang();
  const { isKnown, toggleKnown } = useAppState();
  const m = getModule(moduleId);
  const authored = isAuthored(moduleId);

  // Scroll to the requested topic (or to top on plain module navigation).
  useEffect(() => {
    if (topicId) {
      const el = document.getElementById(`topic-${topicId}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [moduleId, topicId]);

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

          {m.topics.map((tp) => (
            <section className="topic" id={`topic-${tp.id}`} key={tp.id}>
              <h2>{t(tp.title)}</h2>
              {tp.blocks.map((b, i) => (
                <BlockView key={i} block={b} />
              ))}
            </section>
          ))}

          {m.keyPoints.length > 0 && (
            <section className="endcap keypoints">
              <h2>{t(ui.keyPoints)}</h2>
              <ul>
                {m.keyPoints.map((kp, i) => (
                  <li key={i}>{t(kp)}</li>
                ))}
              </ul>
            </section>
          )}

          {m.pitfalls.length > 0 && (
            <section className="endcap pitfalls">
              <h2>{t(ui.pitfalls)}</h2>
              <div className="pitfall-grid">
                {m.pitfalls.map((p, i) => (
                  <div className="pitfall" key={i}>
                    <strong>{t(p.title)}</strong>
                    <p className="muted">{t(p.body)}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {m.exercises && m.exercises.length > 0 && (
            <section className="endcap exercises">
              <h2>{t(ui.exercises)}</h2>
              <ExerciseSet exercises={m.exercises} />
            </section>
          )}

          {m.interview && m.interview.length > 0 && (
            <section className="endcap interview">
              <h2>Q&A</h2>
              {m.interview.map((qa, i) => (
                <details className="qa" key={i}>
                  <summary>
                    {qa.level && <span className="chip badge-level" data-level={qa.level} />}
                    {t(qa.q)}
                  </summary>
                  <p>{t(qa.a)}</p>
                </details>
              ))}
            </section>
          )}

          {m.sources.length > 0 && (
            <section className="endcap sources">
              <h2>{t(ui.sources)}</h2>
              <ul>
                {m.sources.map((s, i) => (
                  <li key={i}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {m.seeAlso.length > 0 && (
            <section className="endcap seealso">
              <h2>{t(ui.seeAlso)}</h2>
              <div className="seealso-row">
                {m.seeAlso.map((id) => {
                  const other = getModule(id);
                  if (!other) return null;
                  return (
                    <a className="seealso-card" href={hrefModule(id)} key={id}>
                      <span className="mono dim">{String(other.num).padStart(2, '0')}</span>
                      <span>{other.title[lang] || other.title.en}</span>
                    </a>
                  );
                })}
              </div>
            </section>
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
