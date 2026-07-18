// CHANGED (S1): the #/practice hub — every authored module's drills in one place, filtered by
// tag and CEFR level. Renders through the same ExerciseSet (one engine, one progress store).
import { useMemo, useState } from 'react';
import { LEVELS, modules } from '../../data/concepts';
import type { Exercise, Level } from '../../data/types';
import { useLang } from '../../i18n/lang';
import { ui } from '../../i18n/ui';
import { resetSolved, useSolvedSet } from '../../lib/practiceStore';
import { cx } from '../../lib/utils';
import { ExerciseSet } from '../module/ExerciseSet';

export function PracticePage() {
  const { t } = useLang();
  const [tag, setTag] = useState<string | 'all'>('all');
  const [level, setLevel] = useState<Level | 'all'>('all');
  const solved = useSolvedSet();

  const all = useMemo<Exercise[]>(() => modules.flatMap((m) => m.exercises ?? []), []);
  const tags = useMemo(() => [...new Set(all.flatMap((e) => e.tags))].sort(), [all]);

  const filtered = all.filter(
    (e) => (tag === 'all' || e.tags.includes(tag)) && (level === 'all' || e.level === level),
  );
  const done = all.filter((e) => solved.has(e.id)).length;

  return (
    <div className="content">
      <h1>{t(ui.practice)}</h1>
      <p className="muted">{t(ui.practiceLede)}</p>

      <div className="practice-meta">
        <span className="chip">
          {all.length} {t(ui.exercisesLabel)} · {done} {t(ui.solvedLabel)}
        </span>
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
        <button className="btn btn-ghost" onClick={resetSolved}>
          ↺ {t(ui.resetProgress)}
        </button>
      </div>

      <div className="practice-filters" role="group" aria-label={t(ui.allTags)}>
        <button className={cx('chip', tag === 'all' && 'known-on')} onClick={() => setTag('all')}>
          {t(ui.allTags)}
        </button>
        {tags.map((tg) => (
          <button
            key={tg}
            className={cx('chip', tag === tg && 'known-on')}
            onClick={() => setTag(tag === tg ? 'all' : tg)}
            aria-pressed={tag === tg}
          >
            {tg}
          </button>
        ))}
      </div>

      <ExerciseSet exercises={filtered} />
    </div>
  );
}
