// CHANGED (A3): ★ Connector Bridge — m30's sim (Section V TokenMorph family). BRIDGE track: one meaning
// (contrast · cause → result · addition), four linkers of four grammar classes — , but → Although … , →
// . However, → Despite + -ing — and the sentence rebuilds itself around each: the linker flies to its
// slot, punctuation changes, and for a preposition the first clause loses its finite verb. A bridge
// scene shows the two sides (clause or noun phrase, counted from the marked finite verbs) and the
// class's rule. TRAPS track: four classic errors (the comma splice, «хоча …, але», despite + clause,
// despite of) walk to two fixes. The class and the ✓ / ✕ diagnosis are COMPUTED by
// src/lib/connectors.ts from the marked tokens; content: src/data/connectorBridge.ts.
// A11y: radiogroups with roving tabindex; the scene is aria-hidden and its verdict is mirrored in the
// polite live region. Reduced motion: no auto-play, no flight.
import { useState } from 'react';
import { useLang } from '../../i18n/lang';
import {
  CB_TRACKS, CLASS_LABEL, CLASS_RULE, CLASS_SHORT, ISSUE_TEXT, RELATIONS, RELATION_LABEL, TRAP_LABEL,
  clauseCount, diagnose, kindsOf, linkersOf, scenariosOf, tokensOf,
} from '../../lib/connectors';
import type { CbTrack, ConnClass, Issue, Relation, TrapKind } from '../../lib/connectors';
import { usePlayback, useReducedMotion } from '../../lib/motion';
import { textOf } from '../../lib/tokenMorph';
import type { MorphToken } from '../../lib/tokenMorph';
import { cx } from '../../lib/utils';
import type { Localized } from '../../data/types';
import { TokenMorph } from '../motion/TokenMorph';
import { MorphControls, Radios, SpeakButton } from '../motion/MorphBits';

const TRACK_LABEL: Record<CbTrack, Localized> = {
  bridge: { en: 'One meaning, four linkers', uk: 'Один зміст, чотири звʼязки' },
  traps: { en: 'Fix the classic errors', uk: 'Виправити класичні помилки' },
};

function verdictText(issues: Issue[]): Localized {
  if (issues.length === 0) return { en: '✓ The sentence fits its linker.', uk: '✓ Речення відповідає своїй звʼязці.' };
  return {
    en: issues.map((i) => `✕ ${ISSUE_TEXT[i].en}`).join(' '),
    uk: issues.map((i) => `✕ ${ISSUE_TEXT[i].uk}`).join(' '),
  };
}

/** Side A — linker — side B, with what each side is (a clause or a noun phrase) and the class rule. */
function Bridge({ tokens, issues }: { tokens: readonly MorphToken[]; issues: Issue[] }) {
  const { t } = useLang();
  const ls = linkersOf(tokens);
  const main = ls[0];
  const cls: ConnClass | null = main?.cls ?? null;
  const clauses = clauseCount(tokens);
  const sideA =
    cls === 'prep' && !issues.includes('prep-clause')
      ? { en: 'noun / -ing', uk: 'іменник / -ing' }
      : { en: 'clause: subject + verb', uk: 'клауза: підмет + дієслово' };
  const sideB = { en: 'clause: subject + verb', uk: 'клауза: підмет + дієслово' };
  return (
    <div className={cx('cb-scene', issues.length ? 'cb-scene--bad' : 'cb-scene--ok')}>
      <div className="cb-bridge" aria-hidden="true">
        <span className="cb-side">{t(sideA)}</span>
        <span className="cb-deck">
          {ls.map((l) => (
            <span key={l.start} className={cx('cb-conn', !l.cls && 'cb-conn--bad')}>
              {l.text}
            </span>
          ))}
          <span className="cb-class">{cls ? t(CLASS_SHORT[cls]) : '?'}</span>
        </span>
        <span className="cb-side">{t(sideB)}</span>
      </div>
      <p className="cb-count">
        {t({
          en: `${clauses} finite verb${clauses === 1 ? '' : 's'} → ${clauses === 1 ? 'one clause + a phrase' : `${clauses} clauses`}`,
          uk: `${clauses} особов${clauses === 1 ? 'е дієслово' : 'і дієслова'} → ${clauses === 1 ? 'одна клауза + фраза' : `${clauses} клаузи`}`,
        })}
      </p>
      {cls && <p className="cb-rule">{t(CLASS_RULE[cls])}</p>}
      <p className="cb-verdict">{t(verdictText(issues))}</p>
    </div>
  );
}

export function ConnectorBridge() {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const [track, setTrackState] = useState<CbTrack>('bridge');
  const [relation, setRelationState] = useState<Relation>('contrast');
  const [scenId, setScenId] = useState<string>(scenariosOf('bridge', 'contrast')[0].id);

  const scenarios = scenariosOf(track, relation);
  const sc = scenarios.find((s) => s.id === scenId) ?? scenarios[0];
  const kinds = kindsOf(sc);
  const pb = usePlayback(kinds.length - 1, 2300, 2);
  const step = Math.min(pb.step, kinds.length - 1);
  const kind = kinds[step];
  const frame = sc.frames[step];
  const tokens = tokensOf(frame);
  const issues = diagnose(tokens);

  const setTrack = (tr: CbTrack) => {
    setTrackState(tr);
    setScenId(scenariosOf(tr, relation)[0].id);
    pb.replay(reduced);
  };
  const setRelation = (r: Relation) => {
    setRelationState(r);
    setScenId(scenariosOf('bridge', r)[0].id);
    pb.replay(reduced);
  };
  const setScen = (id: string) => {
    setScenId(id);
    pb.replay(reduced);
  };

  const labelOf = (k: ConnClass | TrapKind): Localized =>
    track === 'traps' ? TRAP_LABEL[k as TrapKind] : CLASS_LABEL[k as ConnClass];

  return (
    <div className="mn cm adv cb" role="group" aria-label="Connector Bridge">
      <div className="mn-head">
        <span className="mn-title">★ Connector Bridge</span>
        <span className="mn-sub">
          {t({
            en: 'Same meaning, different grammar: watch the sentence rebuild itself around but, although, However and despite.',
            uk: 'Той самий зміст, різна граматика: подивіться, як речення перебудовується навколо but, although, However і despite.',
          })}
        </span>
      </div>

      <div className="mn-grid">
        <div>
          <Radios label={t({ en: 'Track', uk: 'Режим' })} items={CB_TRACKS} value={track} onPick={setTrack} render={(x) => t(TRACK_LABEL[x])} />
          {track === 'bridge' && (
            <Radios label={t({ en: 'Meaning', uk: 'Зміст' })} items={RELATIONS} value={relation} onPick={setRelation} render={(r) => t(RELATION_LABEL[r])} />
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
            {`${t(labelOf(kind))}: ${textOf(tokens)} ${t(verdictText(issues))}`}
          </p>
          <div className="mn-answer-row">
            <span className="mn-modal cm-type">{t(labelOf(kind))}</span>
          </div>
          <p className="tkm-line">
            <TokenMorph tokens={tokens} reduced={reduced} baseline={tokensOf(sc.frames[0])} /> <SpeakButton text={textOf(tokens)} />
          </p>
          <p className="mn-example-uk tkm-uk">{frame.uk}</p>
          <Bridge tokens={tokens} issues={issues} />
          <MorphControls
            pb={pb}
            labels={kinds.map((k) => (track === 'traps' ? TRAP_LABEL[k as TrapKind] : CLASS_SHORT[k as ConnClass]))}
            reduced={reduced}
          />
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
