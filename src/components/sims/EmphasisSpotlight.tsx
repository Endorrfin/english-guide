// CHANGED (A4): ★ Emphasis Spotlight — m27's sim (Section V TokenMorph family). SPOTLIGHT track: pick a
// construction (negative inversion · not only · it-cleft · wh-cleft · fronting) and watch a neutral
// sentence re-order itself. In an inversion walk the adverbial flies to the front first (✕ the order is
// still a statement), then the operator jumps over the subject (✓); with no auxiliary, did / do arrives and
// the verb drops back to its base form. In a cleft the focus moves into It was … that / What … is.
// TRAPS track: six classic UA-speaker errors walk to two fixes. The operator, the construction, the step
// labels and the ✓ / ✕ verdict are COMPUTED by src/lib/emphasis.ts from the marked tokens and the
// scenario's facts; content: src/data/emphasisSpotlight.ts.
// A11y: radiogroups with roving tabindex; the scene is aria-hidden and its verdict is mirrored in the
// polite live region. Reduced motion: no auto-play, no flight.
import { useState } from 'react';
import { useLang } from '../../i18n/lang';
import {
  ES_KINDS, ES_TRACKS, ISSUE_TEXT, KIND_LABEL, KIND_RULE, TRIGGER_LABEL, analyze, scenariosOf, stepLabel, tokensOf,
} from '../../lib/emphasis';
import type { EsAnalysis, EsFacts, EsIssue, EsKind, EsTrack } from '../../lib/emphasis';
import { usePlayback, useReducedMotion } from '../../lib/motion';
import { textOf } from '../../lib/tokenMorph';
import type { MorphToken } from '../../lib/tokenMorph';
import { cx } from '../../lib/utils';
import type { Localized } from '../../data/types';
import { TokenMorph } from '../motion/TokenMorph';
import { MorphControls, Radios, SpeakButton } from '../motion/MorphBits';

const TRACK_LABEL: Record<EsTrack, Localized> = {
  spotlight: { en: 'Put it in the spotlight', uk: 'Висвітлити' },
  traps: { en: 'Fix the classic errors', uk: 'Виправити класичні помилки' },
};

function verdictText(issues: EsIssue[]): Localized {
  if (issues.length === 0) return { en: '✓ The word order holds.', uk: '✓ Порядок слів правильний.' };
  return {
    en: issues.map((i) => `✕ ${ISSUE_TEXT[i].en}`).join(' '),
    uk: issues.map((i) => `✕ ${ISSUE_TEXT[i].uk}`).join(' '),
  };
}

/** The rule that applies to what the frame IS (computed construction), not to the chosen radio. */
function ruleOf(a: EsAnalysis): EsKind | null {
  switch (a.construction) {
    case 'inversion':
      return a.trigger?.cls === 'not-only' ? 'not-only' : 'negative';
    case 'it-cleft':
    case 'wh-cleft':
    case 'fronting':
      return a.construction;
    default:
      return null;
  }
}

const SLOT_LABEL: Record<'trig' | 'aux' | 'subj' | 'verb', Localized> = {
  trig: { en: 'adverbial', uk: 'адвербіал' },
  aux: { en: 'operator', uk: 'оператор' },
  subj: { en: 'subject', uk: 'підмет' },
  verb: { en: 'verb', uk: 'дієслово' },
};

/** The order strip: the marked slots in the order they appear (adverbial · operator · subject · verb). */
function orderOf(tokens: readonly MorphToken[]): { role: keyof typeof SLOT_LABEL; text: string }[] {
  const out: { role: keyof typeof SLOT_LABEL; text: string }[] = [];
  for (const t of tokens) {
    if (t.role !== 'trig' && t.role !== 'aux' && t.role !== 'subj' && t.role !== 'verb') continue;
    const prev = out[out.length - 1];
    if (prev && prev.role === t.role) prev.text += ` ${t.w}`;
    else out.push({ role: t.role, text: t.w });
  }
  return out;
}

function operatorNote(a: EsAnalysis, f: EsFacts): Localized {
  if (!a.doSupport) {
    return { en: `operator = ${a.operator} — the sentence’s own auxiliary`, uk: `оператор = ${a.operator} — власне допоміжне дієслово речення` };
  }
  const tense = f.tense === 'past' ? 'Past Simple' : 'Present Simple';
  const who = f.tense === 'present' ? (f.third ? ', he / she / it' : ', I / you / we / they') : '';
  return {
    en: `no auxiliary → do-support: ${tense}${who} → ${a.operator} + ${f.verb.base}`,
    uk: `немає допоміжного → do-support: ${tense}${who} → ${a.operator} + ${f.verb.base}`,
  };
}

function Scene({ tokens, a, facts }: { tokens: readonly MorphToken[]; a: EsAnalysis; facts: EsFacts }) {
  const { t } = useLang();
  const rule = ruleOf(a);
  const order = a.construction === 'inversion' || a.construction === 'neutral' ? orderOf(tokens) : [];
  return (
    <div className={cx('es-scene', a.issues.length ? 'es-scene--bad' : 'es-scene--ok')}>
      <div className="es-front" aria-hidden="true">
        {a.trigger && (
          <span className="es-chip es-chip--trig">
            {a.trigger.text}
            <span className="es-chip-note">{a.trigger.cls ? t(TRIGGER_LABEL[a.trigger.cls]) : '?'}</span>
          </span>
        )}
        {a.focus && (
          <span className="es-chip es-chip--focus">
            {a.focus}
            <span className="es-chip-note">{t({ en: 'in the spotlight', uk: 'у фокусі' })}</span>
          </span>
        )}
        {!a.trigger && !a.focus && <span className="es-chip">{t({ en: 'no fronted element — normal order', uk: 'нічого не винесено — звичайний порядок' })}</span>}
      </div>
      {order.length > 0 && (
        <ol className="es-order" aria-hidden="true">
          {order.map((o, i) => (
            <li key={i} className={`es-slot es-slot--${o.role}`}>
              <span className="es-slot-w">{o.text}</span>
              <span className="es-slot-r">{t(SLOT_LABEL[o.role])}</span>
            </li>
          ))}
        </ol>
      )}
      {a.construction === 'inversion' && <p className="es-op">{t(operatorNote(a, facts))}</p>}
      {rule && <p className="es-rule">{t(KIND_RULE[rule])}</p>}
      <p className="es-verdict">{t(verdictText(a.issues))}</p>
    </div>
  );
}

export function EmphasisSpotlight() {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const [track, setTrackState] = useState<EsTrack>('spotlight');
  const [kind, setKindState] = useState<EsKind>('negative');
  const [scenId, setScenId] = useState<string>(scenariosOf('spotlight', 'negative')[0].id);

  const scenarios = scenariosOf(track, kind);
  const sc = scenarios.find((s) => s.id === scenId) ?? scenarios[0];
  const last = sc.frames.length - 1;
  const pb = usePlayback(last, 2300, last);
  const step = Math.min(pb.step, last);
  const frame = sc.frames[step];
  const tokens = tokensOf(frame);
  const a = analyze(tokens, sc.facts);
  const labels = sc.frames.map((_, i) => stepLabel(sc, i));

  const setTrack = (tr: EsTrack) => {
    setTrackState(tr);
    setScenId(scenariosOf(tr, kind)[0].id);
    pb.replay(reduced);
  };
  const setKind = (k: EsKind) => {
    setKindState(k);
    setScenId(scenariosOf('spotlight', k)[0].id);
    pb.replay(reduced);
  };
  const setScen = (id: string) => {
    setScenId(id);
    pb.replay(reduced);
  };

  return (
    <div className="mn cm adv es" role="group" aria-label="Emphasis Spotlight">
      <div className="mn-head">
        <span className="mn-title">★ Emphasis Spotlight</span>
        <span className="mn-sub">
          {t({
            en: 'Move a word to the front and English changes the order behind it: a negative adverbial pulls the operator over the subject; a cleft builds a frame around the focus.',
            uk: 'Винесіть слово на початок — і англійська змінює порядок за ним: negative adverbial перетягує оператор через підмет; cleft будує рамку навколо фокуса.',
          })}
        </span>
      </div>

      <div className="mn-grid">
        <div>
          <Radios label={t({ en: 'Track', uk: 'Режим' })} items={ES_TRACKS} value={track} onPick={setTrack} render={(x) => t(TRACK_LABEL[x])} />
          {track === 'spotlight' && (
            <Radios label={t({ en: 'Construction', uk: 'Конструкція' })} items={ES_KINDS} value={kind} onPick={setKind} render={(k) => t(KIND_LABEL[k])} />
          )}
          {scenarios.length > 1 && (
            <Radios
              label={t({ en: 'Sentence', uk: 'Речення' })}
              items={scenarios.map((s) => s.id)}
              value={sc.id}
              onPick={setScen}
              render={(id) => t(scenarios.find((s) => s.id === id)!.title)}
            />
          )}
        </div>

        <div className="mn-result">
          <p className="sr-only" aria-live="polite">
            {`${t(labels[step])}: ${textOf(tokens)} ${t(verdictText(a.issues))}`}
          </p>
          <div className="mn-answer-row">
            <span className="mn-modal cm-type">{t(labels[step])}</span>
          </div>
          <p className="tkm-line">
            <TokenMorph tokens={tokens} reduced={reduced} baseline={tokensOf(sc.frames[0])} /> <SpeakButton text={textOf(tokens)} />
          </p>
          <p className="mn-example-uk tkm-uk">{frame.uk}</p>
          <Scene tokens={tokens} a={a} facts={sc.facts} />
          <MorphControls pb={pb} labels={labels} reduced={reduced} />
          {track === 'traps' && sc.why && (
            <div className="mn-near">
              <p className="mn-col-label">{t({ en: 'Why UA speakers write it', uk: 'Чому україномовні так пишуть' })}</p>
              <p className="cm-trap">
                <span className="muted">{t(sc.why)}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
