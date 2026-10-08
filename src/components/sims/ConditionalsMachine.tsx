// CHANGED (C1): ★ Conditionals Machine — m13's signature sim and the signature sim of Section III.
// Pick how REAL the condition is (always true · really possible · imagined) and what TIME it is
// about (past · now · future); get the conditional type, the if-clause + main-clause forms, two
// US-English examples (+ UA, TTS) with the condition clause highlighted, the typical UA-speaker trap,
// and near-misses that jump to the neighbouring cell. A connector lens (if · unless · in case ·
// as long as · when) rewrites the cell's example — or explains why that connector doesn't fit.
// Engine: src/lib/conditionals.ts (pure, golden-tested); content: src/data/conditionalsMachine.ts.
// A11y mirrors DeductionLab: three radiogroups with roving tabindex + arrow keys, one polite live
// region. The 3 × 3 map is a pointer shortcut (aria-hidden, not focusable) — the radiogroups are the
// accessible control. No animation (reduced-motion safe by construction). Accent: Section III sky.
import { useId, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { useLang } from '../../i18n/lang';
import { ui } from '../../i18n/ui';
import {
  COND_TIMES,
  CONNECTORS,
  REALITIES,
  applyConnector,
  cellKey,
  getCell,
  getCellByKey,
  getMixedPreview,
  parseCellKey,
  splitCond,
} from '../../lib/conditionals';
import type { CellKey, CondExample, CondTime, Connector, Reality } from '../../lib/conditionals';
import { hrefModule } from '../../lib/hashRouter';
import { useTts } from '../../lib/tts';
import { cx } from '../../lib/utils';
import type { Localized } from '../../data/types';

const REALITY_LABEL: Record<Reality, Localized> = {
  always: { en: 'Always true', uk: 'Завжди правда' },
  real: { en: 'Really possible', uk: 'Реально можливо' },
  unreal: { en: 'Imagined / unreal', uk: 'Уявне / нереальне' },
};
const REALITY_GLOSS: Record<Reality, Localized> = {
  always: { en: 'a rule, a law, a habit', uk: 'правило, закон, звичка' },
  real: { en: 'it may well happen', uk: 'це цілком може статися' },
  unreal: { en: 'the opposite of reality', uk: 'протилежне реальності' },
};
const TIME_LABEL: Record<CondTime, Localized> = {
  past: { en: 'Past', uk: 'Минуле' },
  present: { en: 'Now / in general', uk: 'Зараз / загалом' },
  future: { en: 'Future', uk: 'Майбутнє' },
};
const CONNECTOR_LABEL: Record<Connector, string> = {
  if: 'if',
  unless: 'unless',
  'in-case': 'in case',
  'as-long-as': 'as long as',
  when: 'when',
};

/** Short label for a cell on the 3 × 3 map and on near-miss buttons. */
function shortLabel(key: CellKey): Localized {
  const cell = getCellByKey(key);
  if (!cell) return { en: key, uk: key };
  if (cell.kind === 'na') return { en: 'N/A', uk: 'N/A' };
  if (cell.kind === 'preview') return { en: 'Type 3 → m23', uk: 'Type 3 → m23' };
  switch (cell.type) {
    case 'zero':
      return { en: 'Type 0', uk: 'Type 0' };
    case 'first':
      return { en: 'Type 1', uk: 'Type 1' };
    case 'second':
      return { en: 'Type 2', uk: 'Type 2' };
    case 'past-habit':
      return { en: 'Past habit', uk: 'Минула звичка' };
    case 'open-past':
      return { en: 'Open past', uk: 'Відкрите минуле' };
  }
}

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

/** One studied sentence with its condition clause highlighted. */
function Example({ ex }: { ex: CondExample }) {
  const [pre, cond, post] = splitCond(ex);
  return (
    <div className="mn-example">
      <p className="mn-example-en">
        {pre}
        {cond && <mark className="cm-cond">{cond}</mark>}
        {post} <SpeakButton text={ex.en} />
      </p>
      <p className="mn-example-uk">{ex.uk}</p>
    </div>
  );
}

/** Roving-tabindex arrow handling shared by the three radiogroups. */
function arrowNav<T>(items: readonly T[], idx: number, set: (v: T) => void) {
  return (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      set(items[(idx + 1) % items.length]);
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      set(items[(idx - 1 + items.length) % items.length]);
    }
  };
}

export function ConditionalsMachine() {
  const { t } = useLang();
  const [reality, setReality] = useState<Reality>('real');
  const [time, setTime] = useState<CondTime>('future');
  const [connector, setConnector] = useState<Connector>('if');
  const id = useId();

  const cell = getCell(reality, time);
  const here = cellKey(reality, time);
  const mixed = getMixedPreview();

  const goTo = (key: CellKey) => {
    const p = parseCellKey(key);
    setReality(p.reality);
    setTime(p.time);
  };

  const take = cell.kind === 'content' ? applyConnector(cell, connector) : undefined;

  const summary =
    cell.kind === 'content'
      ? t({
          en: `${t(cell.label)}: ${cell.ifForm}, then ${cell.mainForm}.${
            take && !take.ok ? ` ${CONNECTOR_LABEL[connector]} is not used here.` : ''
          }`,
          uk: `${t(cell.label)}: ${cell.ifForm}, далі ${cell.mainForm}.${
            take && !take.ok ? ` ${CONNECTOR_LABEL[connector]} тут не вживається.` : ''
          }`,
        })
      : cell.kind === 'na'
        ? t({ en: 'No conditional of its own here.', uk: 'Тут немає окремого conditional.' })
        : t({ en: `${t(cell.label)} — preview, taught in m23.`, uk: `${t(cell.label)} — превʼю, вивчаємо в m23.` });

  return (
    <div className="mn cm" role="group" aria-label="Conditionals Machine">
      <div className="mn-head">
        <span className="mn-title">★ Conditionals Machine</span>
        <span className="mn-sub">
          {t({
            en: 'How real is the condition, and what time is it about? Set both — get the conditional, its forms and the trap.',
            uk: 'Наскільки реальна умова і про який час вона? Задайте обидва — отримайте conditional, його форми і пастку.',
          })}
        </span>
      </div>

      <div className="mn-grid">
        <div>
          <p className="mn-col-label" id={`${id}-real`}>
            {t({ en: 'Reality — how real?', uk: 'Реальність — наскільки реально?' })}
          </p>
          <div className="mn-funcs" role="radiogroup" aria-labelledby={`${id}-real`}>
            {REALITIES.map((r, i) => (
              <button
                key={r}
                type="button"
                role="radio"
                aria-checked={reality === r}
                tabIndex={reality === r ? 0 : -1}
                className="mn-func cm-reality"
                onClick={() => setReality(r)}
                onKeyDown={arrowNav(REALITIES, i, setReality)}
              >
                <span>{t(REALITY_LABEL[r])}</span>
                <span className="cm-gloss">{t(REALITY_GLOSS[r])}</span>
              </button>
            ))}
          </div>

          <p className="mn-col-label cm-gap" id={`${id}-time`}>
            {t({ en: 'Time — about when?', uk: 'Час — про коли?' })}
          </p>
          <div className="mn-times" role="radiogroup" aria-labelledby={`${id}-time`}>
            {COND_TIMES.map((tm, i) => (
              <button
                key={tm}
                type="button"
                role="radio"
                aria-checked={time === tm}
                tabIndex={time === tm ? 0 : -1}
                className="mn-time"
                onClick={() => setTime(tm)}
                onKeyDown={arrowNav(COND_TIMES, i, setTime)}
              >
                {t(TIME_LABEL[tm])}
              </button>
            ))}
          </div>

          {/* Pointer shortcut over the same state; the radiogroups above are the accessible control. */}
          <div className="cm-map" aria-hidden="true">
            <span />
            {COND_TIMES.map((tm) => (
              <span key={tm} className="cm-map-h">
                {t(TIME_LABEL[tm])}
              </span>
            ))}
            {REALITIES.map((r) => (
              <div key={r} className="cm-map-row">
                <span className="cm-map-h">{t(REALITY_LABEL[r])}</span>
                {COND_TIMES.map((tm) => {
                  const k = cellKey(r, tm);
                  const kind = getCellByKey(k)?.kind;
                  return (
                    <button
                      key={k}
                      type="button"
                      tabIndex={-1}
                      className={cx('cm-map-cell', `cm-${kind}`, k === here && 'on')}
                      onClick={() => goTo(k)}
                    >
                      {t(shortLabel(k))}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="mn-col-label" id={`${id}-con`}>
            {t({ en: 'Connector lens', uk: 'Лінза конектора' })}
          </p>
          <div className="mn-times" role="radiogroup" aria-labelledby={`${id}-con`}>
            {CONNECTORS.map((c, i) => (
              <button
                key={c}
                type="button"
                role="radio"
                aria-checked={connector === c}
                tabIndex={connector === c ? 0 : -1}
                className="mn-time cm-con"
                onClick={() => setConnector(c)}
                onKeyDown={arrowNav(CONNECTORS, i, setConnector)}
              >
                {CONNECTOR_LABEL[c]}
              </button>
            ))}
          </div>

          <div className="mn-result" aria-live="polite">
            <p className="sr-only">{summary}</p>

            {cell.kind === 'content' && (
              <>
                <div className="mn-answer-row">
                  <span className="mn-modal cm-type">{t(cell.label)}</span>
                  {cell.finePrint && (
                    <span className="cm-badge">{t({ en: 'fine print · B2', uk: 'дрібний шрифт · B2' })}</span>
                  )}
                </div>
                <div className="cm-forms">
                  <span>
                    <span className="cm-forms-k">{t({ en: 'if-clause', uk: 'if-частина' })}</span>
                    <code>{cell.ifForm}</code>
                  </span>
                  <span>
                    <span className="cm-forms-k">{t({ en: 'main clause', uk: 'головна частина' })}</span>
                    <code>{cell.mainForm}</code>
                  </span>
                </div>
                <p className="mn-why">{t(cell.meaning)}</p>

                {take ? (
                  take.ok ? (
                    <div className="cm-take">
                      <p className="mn-col-label">
                        {CONNECTOR_LABEL[connector]} ·{' '}
                        {take.shift === 'same'
                          ? t({ en: 'same meaning as if', uk: 'те саме значення, що й if' })
                          : t({ en: 'the meaning shifts', uk: 'значення зсувається' })}
                      </p>
                      <Example ex={take.example} />
                      <p className="mn-why">{t(take.note)}</p>
                    </div>
                  ) : (
                    <div className="cm-take cm-take-no">
                      <p className="mn-col-label">
                        ✕ {CONNECTOR_LABEL[connector]} · {t({ en: 'not used here', uk: 'тут не вживається' })}
                      </p>
                      <p className="mn-why">{t(take.why)}</p>
                    </div>
                  )
                ) : null}

                {take && (
                  <p className="mn-col-label cm-gap">{t({ en: 'Compare — with if', uk: 'Порівняйте — з if' })}</p>
                )}
                {(take ? cell.examples.slice(0, 1) : cell.examples).map((ex) => (
                  <Example key={ex.en} ex={ex} />
                ))}

                <div className="mn-near">
                  <p className="mn-col-label">{t({ en: 'The typical UA-speaker trap', uk: 'Типова пастка UA-мовця' })}</p>
                  <p className="cm-trap">
                    <span className="cm-wrong">✕ {cell.trap.wrong}</span>
                    <span className="muted">{t(cell.trap.why)}</span>
                  </p>
                </div>

                <div className="mn-near">
                  <p className="mn-col-label">
                    {t({ en: 'Near-misses — same idea, another cell', uk: 'Сусіди — та сама думка, інша клітинка' })}
                  </p>
                  {cell.nearMisses.map((nm) => (
                    <div key={nm.cell} className="cm-near">
                      <button type="button" className="chip cm-jump" onClick={() => goTo(nm.cell)}>
                        → {t(shortLabel(nm.cell))}
                      </button>
                      <span className="muted">{t(nm.why)}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            {cell.kind === 'na' && (
              <>
                <p className="mn-modal cm-type">N/A</p>
                <p className="mn-why">{t(cell.why)}</p>
                <div className="cm-near">
                  {cell.redirect.map((k) => (
                    <button key={k} type="button" className="chip cm-jump" onClick={() => goTo(k)}>
                      → {t(shortLabel(k))}
                    </button>
                  ))}
                </div>
              </>
            )}

            {cell.kind === 'preview' && (
              <>
                <div className="mn-answer-row">
                  <span className="mn-modal cm-type">{t(cell.label)}</span>
                  <span className="cm-badge">{t({ en: 'preview · B2', uk: 'превʼю · B2' })}</span>
                </div>
                <p className="mn-why">{t(cell.teaser)}</p>
                <p className="cm-sample">
                  {cell.sample} <SpeakButton text={cell.sample} />
                </p>
                <a className="btn" href={hrefModule(cell.moduleId)}>
                  {t({ en: 'Open m23 →', uk: 'Відкрити m23 →' })}
                </a>
              </>
            )}
          </div>

          <p className="cm-mixed">
            <span className="cm-badge">{t({ en: 'preview', uk: 'превʼю' })}</span>{' '}
            <a href={hrefModule(mixed.moduleId)}>{t(mixed.label)}</a> — <span className="muted">{t(mixed.teaser)}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
