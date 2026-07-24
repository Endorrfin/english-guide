// CHANGED (V3): Irregular verbs (#/irregular) — the real trainer inside the Words hub (was a
// coming-soon placeholder in V2). Two modes: **Table** (searchable reference grouped by the memorable
// pattern shapes A-A-A / A-B-A / A-B-B / A-B-C, with UA meanings, level and trap notes) and **Drill**
// (type the past + past participle from the base, auto-checked through the golden `lib/exercise`
// normalization so slash variants and casing pass). Pure pattern logic lives in lib/irregular.ts.
import { useMemo, useState } from 'react';
import { LEVELS } from '../../data/concepts';
import { IRREGULAR } from '../../data/irregular';
import type { IrregularVerb, Level } from '../../data/types';
import { useLang } from '../../i18n/lang';
import { ui } from '../../i18n/ui';
import { checkGap } from '../../lib/exercise';
import { acceptedForms, classify, groupByPattern } from '../../lib/irregular';
import type { IrregularPattern } from '../../lib/irregular';
import { useTts } from '../../lib/tts';
import { cx } from '../../lib/utils';
import { LevelBadge } from '../module/LevelBadge';
import { WordsLayout } from '../layout/WordsLayout';

type Mode = 'table' | 'drill';

const PATTERN_LABEL: Record<IrregularPattern, typeof ui.irrPatAaa> = {
  aaa: ui.irrPatAaa,
  aba: ui.irrPatAba,
  abb: ui.irrPatAbb,
  abc: ui.irrPatAbc,
};

function SpeakButton({ text }: { text: string }) {
  const { supported, speaking, speak } = useTts();
  const { t } = useLang();
  return (
    <button
      type="button"
      className={cx('tts-btn', speaking && 'speaking')}
      onClick={() => speak(text)}
      disabled={!supported}
      title={supported ? t(ui.listen) : t(ui.ttsUnavailable)}
      aria-label={`${t(ui.listen)}: ${text}`}
    >
      <span aria-hidden="true">🔊</span>
    </button>
  );
}

function TableView({ list }: { list: IrregularVerb[] }) {
  const { t } = useLang();
  const groups = useMemo(() => groupByPattern(list), [list]);
  if (list.length === 0) return <p className="dict-empty muted">{t(ui.searchNoResults)}</p>;
  return (
    <div className="irr-groups">
      {groups.map((g) => (
        <section className="irr-group" key={g.pattern} aria-label={t(PATTERN_LABEL[g.pattern])}>
          <h2 className="def-group-h">
            {t(PATTERN_LABEL[g.pattern])} <span className="dim">· {g.items.length}</span>
          </h2>
          <div className="irr-table" role="table">
            <div className="irr-row irr-head" role="row">
              <span role="columnheader">{t(ui.irrBase)}</span>
              <span role="columnheader">{t(ui.irrPast)}</span>
              <span role="columnheader">{t(ui.irrParticiple)}</span>
              <span role="columnheader">{t(ui.irrMeaning)}</span>
            </div>
            {g.items.map((v) => (
              <div className="irr-row" role="row" key={v.base}>
                <span role="cell" className="irr-base">
                  {v.base} <SpeakButton text={`${v.base}, ${v.past}, ${v.pastParticiple}`} />
                  <LevelBadge level={v.level} />
                </span>
                <span role="cell" className="mono irr-form">{v.past}</span>
                <span role="cell" className="mono irr-form">{v.pastParticiple}</span>
                <span role="cell" className="irr-tr">
                  {v.translations.join(', ')}
                  {v.note && (
                    <span className="irr-note" title={`${v.note.en} — ${v.note.uk}`}>
                      {' '}
                      ⓘ
                    </span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

function DrillView({ list }: { list: IrregularVerb[] }) {
  const { t } = useLang();
  const [i, setI] = useState(0);
  const [past, setPast] = useState('');
  const [pp, setPp] = useState('');
  const [checked, setChecked] = useState(false);
  const [reveal, setReveal] = useState(false);
  const [score, setScore] = useState({ ok: 0, total: 0 });

  if (list.length === 0) return <p className="dict-empty muted">{t(ui.searchNoResults)}</p>;
  const v = list[i % list.length];

  const pastOk = checked && checkGap(past, acceptedForms(v.past));
  const ppOk = checked && checkGap(pp, acceptedForms(v.pastParticiple));

  const check = () => {
    if (checked) return;
    setChecked(true);
    setScore((s) => ({
      ok: s.ok + (checkGap(past, acceptedForms(v.past)) && checkGap(pp, acceptedForms(v.pastParticiple)) ? 1 : 0),
      total: s.total + 1,
    }));
  };
  const next = () => {
    setPast('');
    setPp('');
    setChecked(false);
    setReveal(false);
    setI((n) => (list.length <= 1 ? n : (n + 1 + Math.floor(Math.random() * (list.length - 1))) % list.length));
  };

  return (
    <div className="def-studio irr-drill">
      <div className="irr-drill-head">
        <p className="def-task">{t(ui.irrDrillTask)}</p>
        <span className="dict-count dim">
          {t(ui.irrScore)}: {score.ok}/{score.total}
        </span>
      </div>

      <p className="irr-prompt">
        <span className="dict-word">{v.base}</span>
        <LevelBadge level={v.level} />
        <span className="irr-prompt-tr dim">{v.translations.join(', ')}</span>
      </p>

      <div className="irr-inputs">
        <label className="irr-field">
          <span className="mono dim">{t(ui.irrPast)}</span>
          <input
            className={cx('ex-input', checked && (pastOk ? 'is-ok' : 'is-no'))}
            value={past}
            onChange={(e) => setPast(e.target.value)}
            placeholder={t(ui.typeAnswer)}
            autoComplete="off"
            aria-label={t(ui.irrPast)}
          />
        </label>
        <label className="irr-field">
          <span className="mono dim">{t(ui.irrParticiple)}</span>
          <input
            className={cx('ex-input', checked && (ppOk ? 'is-ok' : 'is-no'))}
            value={pp}
            onChange={(e) => setPp(e.target.value)}
            placeholder={t(ui.typeAnswer)}
            autoComplete="off"
            aria-label={t(ui.irrParticiple)}
          />
        </label>
      </div>

      <div className="irr-drill-actions">
        <button type="button" className="def-btn" onClick={check} disabled={checked || (!past.trim() && !pp.trim())}>
          {t(ui.check)}
        </button>
        <button type="button" className="def-btn def-btn-ghost" onClick={() => setReveal((r) => !r)}>
          {t(ui.showAnswer)}
        </button>
        <button type="button" className="def-btn def-btn-ghost" onClick={next}>
          {t(ui.idiomNext)}
        </button>
      </div>

      {checked && (
        <p className={cx('def-verdict', pastOk && ppOk ? 'is-ok' : 'is-no')} aria-live="polite">
          {pastOk && ppOk ? t(ui.correct) : t(ui.notQuite)}
        </p>
      )}
      {(reveal || (checked && !(pastOk && ppOk))) && (
        <p className="irr-answer">
          {t(ui.answerLabel)}: <strong className="mono">{v.base} · {v.past} · {v.pastParticiple}</strong>
          <SpeakButton text={`${v.base}, ${v.past}, ${v.pastParticiple}`} />
          {v.note && <span className="irr-note-full dim"> — {v.note.en} · {v.note.uk}</span>}
        </p>
      )}
    </div>
  );
}

const MODES: { id: Mode; label: typeof ui.irrModeTable; icon: string }[] = [
  { id: 'table', label: ui.irrModeTable, icon: '📋' },
  { id: 'drill', label: ui.irrModeDrill, icon: '✍️' },
];

export function IrregularPage() {
  const { t } = useLang();
  const [mode, setMode] = useState<Mode>('table');
  const [q, setQ] = useState('');
  const [level, setLevel] = useState<Level | 'all'>('all');
  const [pattern, setPattern] = useState<IrregularPattern | 'all'>('all');

  const needle = q.trim().toLowerCase();
  const filtered = useMemo(
    () =>
      IRREGULAR.filter((v) => {
        if (level !== 'all' && v.level !== level) return false;
        if (pattern !== 'all' && classify(v) !== pattern) return false;
        if (!needle) return true;
        return (
          v.base.toLowerCase().includes(needle) ||
          v.past.toLowerCase().includes(needle) ||
          v.pastParticiple.toLowerCase().includes(needle) ||
          v.translations.some((tr) => tr.toLowerCase().includes(needle))
        );
      }),
    [needle, level, pattern],
  );

  return (
    <WordsLayout active="irregular">
      <p className="muted vocab-lede">{t(ui.irregularLede)}</p>

      <div className="def-modeseg idiom-modeseg" role="tablist" aria-label={t(ui.irregularVerbs)}>
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
            placeholder={t(ui.irrSearchPlaceholder)}
            aria-label={t(ui.search)}
          />
        </div>
        <select
          className="ex-input"
          style={{ flex: '0 1 auto', maxWidth: '220px' }}
          value={pattern}
          onChange={(e) => setPattern(e.target.value as IrregularPattern | 'all')}
          aria-label={t(ui.irrAllPatterns)}
        >
          <option value="all">{t(ui.irrAllPatterns)}</option>
          {(['aaa', 'aba', 'abb', 'abc'] as IrregularPattern[]).map((p) => (
            <option key={p} value={p}>
              {t(PATTERN_LABEL[p])}
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
          {filtered.length}/{IRREGULAR.length} {t(ui.entriesLabel)}
        </span>
      </div>

      {mode === 'table' ? <TableView list={filtered} /> : <DrillView list={filtered} />}
    </WordsLayout>
  );
}
