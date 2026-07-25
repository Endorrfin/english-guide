/*
 * ModuleBody — the module's CONTENT, rendered from a fully-loaded `Module`. Split out of ModulePage
 * in M2 (the module meta-split) for two reasons:
 *   · ModulePage now renders its header/TOC instantly from nav meta and loads the body lazily, so
 *     the body needs to be a component it can mount once the chunk arrives;
 *   · it is pure — given a Module it renders, with no fetching — which lets `scripts/smoke.ts`
 *     server-render real content by awaiting `loadModule(id)` itself (a component that loaded in a
 *     useEffect could never be SSR-asserted, and the content canaries would have silently rotted).
 */
import { getModule } from '../../data/concepts';
import type { DiveLevel } from '../../data/types';
import type { Module } from '../../data/types';
import { useLang } from '../../i18n/lang';
import { ui } from '../../i18n/ui';
import { hrefModule } from '../../lib/hashRouter';
import { moduleHasDive } from '../../lib/dive';
import { DiveBlock, DiveSwitcher } from './DiveSwitcher';
import { ExerciseSet } from './ExerciseSet';

export function ModuleBody({
  module: m,
  dive,
  setDive,
}: {
  module: Module;
  dive: DiveLevel;
  setDive: (d: DiveLevel) => void;
}) {
  const { t, lang } = useLang();
  // CHANGED (T1): generic dive mechanic — any module whose blocks carry dive tags gets the switcher.
  const hasDive = moduleHasDive(m.topics.flatMap((tp) => tp.blocks));

  return (
    <>
      {hasDive && <DiveSwitcher moduleId={m.id} dive={dive} setDive={setDive} />}


      {m.topics.map((tp) => (
        <section className="topic" id={`topic-${tp.id}`} key={tp.id}>
          <h2>{t(tp.title)}</h2>
          {tp.blocks.map((b, i) => (
            <DiveBlock key={i} block={b} dive={dive} /> // CHANGED (T1): depth-gated rendering
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
  );
}
