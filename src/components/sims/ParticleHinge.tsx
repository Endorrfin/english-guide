// CHANGED (VA2): ★ Particle Hinge — m32's sim (Section VI TokenMorph family). The object swings around the
// particle of a phrasal verb. PLACE track: pick a type of verb, a verb in one sense and a kind of object;
// the walk always ends on a correct sentence (turn off them ✕ → turn them off ✓). A hinge row shows both
// slots with their verdicts. TRAPS track: a typical slip morphs into the correct sentence and the engine
// names the rule. The class is a DECLARED fact of the lexicon (and labelled so); the kind of object, the
// verdict and the diagnosis are COMPUTED by src/lib/phrasalVerbs.ts from the tokens. AmE base.
// A11y: radiogroups with roving tabindex; the hinge row is aria-hidden and the verdict is mirrored in the
// polite live region. Reduced motion: no auto-play, no flight — the correct sentence at once.
import { useState } from 'react';
import { useLang } from '../../i18n/lang';
import {
  CLASS_LABEL, CLASS_RULE, ISSUE_TEXT, KIND_LABEL, OBJECT_KINDS, OK_TEXT, PH_TRACKS, POSITION_LABEL, VERB_CLASSES, WITH_OBJECT_LABEL,
  diagnose, frameOf, listTraps, objectKindOf, placement, positionOf, sensesOf, statusOfIssue, tokensOf, walk,
} from '../../lib/phrasalVerbs';
import type { Issue, ObjectKind, PhSense, PhTrack, Position, Status, VerbClass } from '../../lib/phrasalVerbs';
import { usePlayback, useReducedMotion } from '../../lib/motion';
import { textOf } from '../../lib/tokenMorph';
import { cx } from '../../lib/utils';
import type { Localized } from '../../data/types';
import { TokenMorph } from '../motion/TokenMorph';
import { MorphControls, Radios, SpeakButton } from '../motion/MorphBits';

const TRACK_LABEL: Record<PhTrack, Localized> = {
  place: { en: 'Place the object', uk: 'Розмістити додаток' },
  traps: { en: 'Fix the slip', uk: 'Виправити помилку' },
};
const MARK: Record<Status, string> = { ok: '✓', awkward: '≈', wrong: '✕' };
const STATUS_WORD: Record<Status, Localized> = {
  ok: { en: 'Correct', uk: 'Правильно' },
  awkward: { en: 'Possible, less preferred', uk: 'Можливо, але менш бажано' },
  wrong: { en: 'Wrong', uk: 'Неправильно' },
};

/** verb [slot] particle [slot]: where this object may stand. An intransitive sense has no slot at all. */
function Hinge({ sense, kind, pos }: { sense: PhSense; kind: ObjectKind; pos: Position }) {
  const { t } = useLang();
  const head = sense.particles.slice(0, -1);
  const last = sense.particles[sense.particles.length - 1];
  const slot = (p: 'split' | 'after') => {
    const st = placement(sense.cls, kind, p).status;
    return <span className={cx('ph-slot', `ph-slot--${st}`, pos === p && 'on')}>{MARK[st]}</span>;
  };
  return (
    <p className="ph-hinge" aria-hidden="true">
      <span className="ph-part ph-part--verb">{sense.verb}</span>
      {head.map((w) => (
        <span key={w} className="ph-part ph-part--ptcl">{w}</span>
      ))}
      {sense.cls === 'intransitive' ? (
        <>
          <span className="ph-part ph-part--ptcl">{last}</span>
          <span className="ph-none">{t({ en: 'no object', uk: 'без додатка' })}</span>
        </>
      ) : (
        <>
          {slot('split')}
          <span className="ph-part ph-part--ptcl">{last}</span>
          {slot('after')}
        </>
      )}
    </p>
  );
}

function issueText(issues: readonly Issue[], ok: Localized): Localized {
  return issues.length ? ISSUE_TEXT[issues[0]] : ok;
}

export function ParticleHinge() {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const [track, setTrackState] = useState<PhTrack>('place');
  const [cls, setClsState] = useState<VerbClass>('separable');
  const [senseId, setSenseId] = useState<string>(sensesOf('separable')[0].id);
  const [kind, setKindState] = useState<ObjectKind>('pronoun');
  const [trapId, setTrapId] = useState<string>(listTraps()[0].id);

  const senses = sensesOf(cls);
  const sense = senses.find((s) => s.id === senseId) ?? senses[0];
  // An intransitive frame carries one pronoun (the ✕ form); no object radio there.
  const k: ObjectKind = sense.cls === 'intransitive' ? 'pronoun' : kind;
  const positions = walk(sense.cls, k);
  const traps = listTraps();
  const trap = traps.find((x) => x.id === trapId) ?? traps[0];

  // Starts on the last frame: the SSR / first paint is a correct sentence, a pick replays the walk.
  const pbPlace = usePlayback(positions.length - 1, 2200, 1);
  const pbTrap = usePlayback(1, 2400, 1);
  const pb = track === 'traps' ? pbTrap : pbPlace;
  const place = () => pbPlace.replay(reduced);

  const setTrack = (tr: PhTrack) => {
    setTrackState(tr);
    if (tr === 'traps') pbTrap.replay(reduced);
    else place();
  };
  const setCls = (c: VerbClass) => {
    setClsState(c);
    setSenseId(sensesOf(c)[0].id);
    place();
  };
  const pickSense = (id: string) => {
    setSenseId(id);
    place();
  };
  const setKind = (v: ObjectKind) => {
    setKindState(v);
    place();
  };
  const pickTrap = (id: string) => {
    setTrapId(id);
    pbTrap.replay(reduced);
  };

  const trapFrames = [tokensOf(trap.wrong), tokensOf(trap.right)];
  const step = Math.min(pb.step, track === 'traps' ? 1 : positions.length - 1);
  const pos = positions[Math.min(step, positions.length - 1)];
  const tokens = track === 'traps' ? trapFrames[step] : frameOf(sense, k, pos);
  // The whole verdict is read from the TOKENS, given only the declared class.
  const activeCls = track === 'traps' ? trap.cls : sense.cls;
  const issues = diagnose(tokens, activeCls);
  const status = statusOfIssue(issues);
  const sentence = textOf(tokens);
  const spoken = track === 'traps' ? textOf(trapFrames[1]) : textOf(frameOf(sense, k, positions[positions.length - 1]));
  const gloss = track === 'traps' ? trap.uk : sense.cls === 'intransitive' ? sense.uk.bare : sense.uk[k];
  const objWords = tokens.filter((x) => x.role === 'obj').map((x) => x.w).join(' ');
  const labels: Localized[] =
    track === 'traps'
      ? [{ en: 'The slip', uk: 'Помилка' }, { en: 'The fix', uk: 'Виправлення' }]
      : positions.map((p) => (sense.cls === 'intransitive' && p === 'split' ? WITH_OBJECT_LABEL : POSITION_LABEL[p]));
  const verdict = t(issueText(issues, OK_TEXT[positionOf(tokens)]));
  const hub = track === 'traps' ? trap.hub : sense.hub;

  return (
    <div className="mn cm adv voc ph" role="group" aria-label="Particle Hinge">
      <div className="mn-head">
        <span className="mn-title">★ Particle Hinge</span>
        <span className="mn-sub">
          {t({
            en: 'The lexicon says whether a phrasal verb can split; the kind of object then decides where it stands.',
            uk: 'Лексика каже, чи може phrasal verb розділятися; а тип додатка вирішує, де він стоїть.',
          })}
        </span>
      </div>

      <div className="mn-grid">
        <div>
          <Radios label={t({ en: 'Track', uk: 'Режим' })} items={PH_TRACKS} value={track} onPick={setTrack} render={(x) => t(TRACK_LABEL[x])} />
          {track === 'place' ? (
            <>
              <Radios label={t({ en: 'Type of verb', uk: 'Тип дієслова' })} items={VERB_CLASSES} value={cls} onPick={setCls} render={(c) => t(CLASS_LABEL[c])} />
              <Radios label={t({ en: 'Verb', uk: 'Дієслово' })} items={senses.map((s) => s.id)} value={sense.id} onPick={pickSense} render={(id) => senses.find((s) => s.id === id)!.title} />
              {sense.cls !== 'intransitive' && (
                <Radios label={t({ en: 'Object', uk: 'Додаток' })} items={OBJECT_KINDS} value={k} onPick={setKind} render={(x) => t(KIND_LABEL[x])} />
              )}
            </>
          ) : (
            <Radios label={t({ en: 'Slip', uk: 'Помилка' })} items={traps.map((x) => x.id)} value={trap.id} onPick={pickTrap} render={(id) => `✕ ${traps.find((x) => x.id === id)!.label}`} />
          )}
        </div>

        <div className="mn-result">
          <p className="sr-only" aria-live="polite">{`${t(STATUS_WORD[status])}: ${sentence} ${verdict}`}</p>
          {track === 'place' && <Hinge sense={sense} kind={k} pos={pos} />}
          <p className="tkm-line">
            <TokenMorph tokens={tokens} reduced={reduced} baseline={tokens} className={cx('ph-sentence', status === 'wrong' && 'ph-sentence--bad')} />{' '}
            <SpeakButton text={spoken} />
          </p>
          <p className="mn-example-uk tkm-uk">{status === 'ok' ? gloss : ' '}</p>
          <MorphControls pb={pb} labels={labels} reduced={reduced} />

          <div className={cx('wf-scene', 'ph-scene', `ph-scene--${status}`)}>
            <p className="ph-verdict">
              <strong>{`${MARK[status]} ${t(STATUS_WORD[status])}. `}</strong>
              {verdict}
            </p>
            <div className="wf-chips">
              <span className="wf-chips-label">{t({ en: 'Declared (lexicon):', uk: 'Оголошено (лексика):' })}</span>
              <span className="wf-chip wf-chip--fact wf-chip--prose">{t(CLASS_LABEL[activeCls])}</span>
              {track === 'place' && <span className="wf-chip wf-chip--fact wf-chip--prose">{t(sense.gloss)}</span>}
              <a className="ph-card" href={`#/idioms/${hub}`}>{t({ en: 'the card →', uk: 'картка →' })}</a>
            </div>
            {objWords && (
              <div className="wf-chips">
                <span className="wf-chips-label">{t({ en: 'Computed (object):', uk: 'Обчислено (додаток):' })}</span>
                <span className="wf-chip wf-chip--quiet wf-chip--prose">{`${objWords} → ${t(KIND_LABEL[objectKindOf(objWords)]).toLowerCase()}`}</span>
              </div>
            )}
            <p className="ph-rule">{t(CLASS_RULE[activeCls])}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
