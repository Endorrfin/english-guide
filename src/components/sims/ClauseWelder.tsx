// CHANGED (A2): ★ Clause Welder — m25's signature sim (Section V TokenMorph family). WELD track: two
// sentences that share a person or thing are welded into one — the shared word (She · it · Her · in it)
// fades out, the relative word flies in, and the clause slides next to its noun; a third frame shows
// the lighter everyday variant (drop that · reduce who is -ing · move the preposition). A JOINT chip
// shows the swap (she → who · it → ∅). COMMAS track: the same clause without and with commas, while a
// set scene shows WHICH members of the group the sentence is about (some · all · the whole clause).
// Engine: src/lib/relativeClauses.ts (pure, golden-tested); content: src/data/clauseWelder.ts.
// A11y: radiogroups with roving tabindex; the scene is aria-hidden (the polite live region carries the
// step name + sentence). Reduced motion: no auto-play, no flight, no scene transitions.
import { useState } from 'react';
import { useLang } from '../../i18n/lang';
import {
  KIND_LABEL, KIND_NOTE, KIND_PATTERN, JOINT_LABEL, RC_JOINTS, RC_TRACKS, kindsOf, relOf, scenariosOf, setModeOf, tokensOf,
} from '../../lib/relativeClauses';
import type { RcJoint, RcScenario, RcTrack, SetMode } from '../../lib/relativeClauses';
import { usePlayback, useReducedMotion } from '../../lib/motion';
import { textOf } from '../../lib/tokenMorph';
import { cx } from '../../lib/utils';
import type { Localized } from '../../data/types';
import { TokenMorph } from '../motion/TokenMorph';
import { MorphControls, Radios, SpeakButton } from '../motion/MorphBits';

const TRACK_LABEL: Record<RcTrack, Localized> = {
  weld: { en: 'Weld two sentences', uk: 'Зварити два речення' },
  commas: { en: 'Commas: which ones?', uk: 'Коми: які саме?' },
};
const SET_CAPTION: Record<SetMode, Localized> = {
  subset: { en: 'only SOME of them — the clause picks them out', uk: 'лише ДЕЯКІ — речення їх вибирає' },
  all: { en: 'ALL of them — the clause just adds a fact', uk: 'УСІ — речення лише додає факт' },
  whole: { en: 'which points back at the WHOLE clause, not at one noun', uk: 'which вказує на ВСЕ речення, а не на один іменник' },
};

/** The group the commas-track sentence talks about: some lit (defining), all lit, or the whole event. */
function SetScene({ mode, sc }: { mode: SetMode; sc: RcScenario }) {
  const { t } = useLang();
  const set = sc.set!;
  return (
    <div className={cx('rcw-set', `rcw-set--${mode}`)} aria-hidden="true">
      <div className="rcw-dots">
        {Array.from({ length: set.total }, (_, i) => (
          <span key={i} className={cx('rcw-dot', (mode === 'all' || (mode === 'subset' && i < set.picked)) && 'on')} />
        ))}
        <span className="rcw-noun">{t(set.noun)}</span>
      </div>
      <p className="rcw-set-cap">{t(SET_CAPTION[mode])}</p>
    </div>
  );
}

export function ClauseWelder() {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const [track, setTrackState] = useState<RcTrack>('weld');
  const [joint, setJointState] = useState<RcJoint>('object');
  const [scenId, setScenId] = useState<string>(scenariosOf('weld', 'object')[0].id);

  const scenarios = scenariosOf(track, joint);
  const sc = scenarios.find((s) => s.id === scenId) ?? scenarios[0];
  const kinds = kindsOf(sc);
  const pb = usePlayback(kinds.length - 1, 2100, 1);
  const step = Math.min(pb.step, kinds.length - 1);
  const kind = kinds[step];
  const frame = sc.frames[step];
  const tokens = tokensOf(frame);
  const mode = setModeOf(kind);
  const rel = relOf(tokens);

  const setTrack = (tr: RcTrack) => {
    setTrackState(tr);
    setScenId(scenariosOf(tr, joint)[0].id);
    pb.replay(reduced);
  };
  const setJoint = (j: RcJoint) => {
    setJointState(j);
    setScenId(scenariosOf('weld', j)[0].id);
    pb.replay(reduced);
  };
  const setScen = (id: string) => {
    setScenId(id);
    pb.replay(reduced);
  };

  return (
    <div className="mn cm adv rcw" role="group" aria-label="Clause Welder">
      <div className="mn-head">
        <span className="mn-title">★ Clause Welder</span>
        <span className="mn-sub">
          {t({
            en: 'Two sentences share one person or thing. Weld them: the shared word drops out, a relative word takes its place, and the clause slides next to its noun.',
            uk: 'Два речення мають спільну людину чи річ. Зваріть їх: спільне слово зникає, його місце займає relative word, а речення пересувається до свого іменника.',
          })}
        </span>
      </div>

      <div className="mn-grid">
        <div>
          <Radios label={t({ en: 'Track', uk: 'Режим' })} items={RC_TRACKS} value={track} onPick={setTrack} render={(v) => t(TRACK_LABEL[v])} />
          {track === 'weld' && (
            <Radios
              label={t({ en: 'What does the shared word do in sentence 2?', uk: 'Що робить спільне слово в реченні 2?' })}
              items={RC_JOINTS}
              value={joint}
              onPick={setJoint}
              render={(v) => t(JOINT_LABEL[v])}
            />
          )}
          <Radios
            label={t({ en: 'Example', uk: 'Приклад' })}
            items={scenarios.map((s) => s.id)}
            value={sc.id}
            onPick={setScen}
            render={(id) => t(scenarios.find((s) => s.id === id)!.title)}
          />
        </div>

        <div className="mn-result">
          <p className="sr-only" aria-live="polite">
            {`${t(KIND_LABEL[kind])}: ${textOf(tokens)}`}
          </p>
          <div className="mn-answer-row">
            <span className="mn-modal cm-type">{t(KIND_LABEL[kind])}</span>
            <code className="cs-pattern">{KIND_PATTERN[kind]}</code>
          </div>
          {track === 'weld' && sc.shared && (
            <p className="rcw-joint" aria-hidden="true">
              <span className="rcw-chip tkm-link">{sc.shared}</span>
              <span className="rcw-arrow">→</span>
              <span className={cx('rcw-chip', 'tkm-rel', step === 0 && 'rcw-wait', step > 0 && !rel && 'rcw-zero')}>
                {step === 0 ? '?' : (rel ?? '∅')}
              </span>
            </p>
          )}
          {mode && <SetScene mode={mode} sc={sc} />}
          <p className="tkm-line">
            <TokenMorph tokens={tokens} reduced={reduced} baseline={tokensOf(sc.frames[0])} /> <SpeakButton text={textOf(tokens)} />
          </p>
          <p className="mn-example-uk tkm-uk">{frame.uk}</p>
          <MorphControls pb={pb} labels={kinds.map((k) => KIND_LABEL[k])} reduced={reduced} />
          <p className="mn-why">{t(KIND_NOTE[kind])}</p>
          <div className="mn-near">
            <p className="mn-col-label">{t({ en: 'The typical UA-speaker trap', uk: 'Типова пастка UA-мовця' })}</p>
            <p className="cm-trap">
              <span className="cm-wrong">✕ {sc.trap.wrong}</span>
              <span className="muted">{t(sc.trap.why)}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
