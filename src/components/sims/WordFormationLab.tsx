// CHANGED (VA1): ★ Word Formation Lab — m31's signature sim and the first TokenMorph sim of Section VI.
// TokenMorph at the level of LETTERS: a root and an affix stand side by side (root + affix), then weld —
// a silent e leaves as a ghost, a doubled consonant or the i of y → i arrives highlighted, in- turns into
// il- / im- / ir- in front of the root. BUILD track: chains such as rely → reliable → unreliable, grouped
// as negative prefixes · suffixes at the seam · AmE vs BrE. FAMILY track: one root → noun · verb ·
// adjective · adverb · opposite. TRAPS track: a typical misspelling morphs into the correct word and the
// engine names the rule that was broken. Every spelling change and every diagnosis is COMPUTED by
// src/lib/wordFormation.ts; the choice of affix, the stress and an irregular stem are DECLARED facts, and
// the scene labels them that way. American English base; the BrE chip shows the engine's BrE spelling.
// A11y: radiogroups with roving tabindex; letters are aria-hidden with the word in an sr-only span; the
// live region carries the step and the word. Reduced motion: no auto-play, no flight — the result at once.
import { useState } from 'react';
import { useLang } from '../../i18n/lang';
import {
  GROUP_LABEL, POS_LABEL, RULE_SHORT, RULE_TEXT, WF_GROUPS, WF_TRACKS, alignTokens, build, buildsOf, diagText, diagnose,
  framesOf, listFamilies, listTraps, stepOfFrame,
} from '../../lib/wordFormation';
import type { Change, Frame, RuleId, WfGroup, WfStep, WfTrack } from '../../lib/wordFormation';
import { usePlayback, useReducedMotion } from '../../lib/motion';
import type { MorphToken } from '../../lib/tokenMorph';
import { cx } from '../../lib/utils';
import type { Localized } from '../../data/types';
import { TokenMorph } from '../motion/TokenMorph';
import { MorphControls, Radios, SpeakButton } from '../motion/MorphBits';

const TRACK_LABEL: Record<WfTrack, Localized> = {
  build: { en: 'Build a word', uk: 'Зібрати слово' },
  family: { en: 'Word family', uk: 'Родина слів' },
  traps: { en: 'Fix the misspelling', uk: 'Виправити помилку' },
};
/** Rules that only describe (nothing moves); the rest change letters. */
const QUIET = new Set<RuleId>(['join', 'keep-e', 'keep-e-soft', 'keep-e-ee', 'no-double', 'keep-y']);

type TrapFrames = { frames: MorphToken[][]; right: string };
const trapCache = new Map<string, TrapFrames>();
function trapFrames(id: string, wrong: string, src: Parameters<typeof build>[0]): TrapFrames {
  const hit = trapCache.get(id);
  if (hit) return hit;
  const b = build(src);
  const a = alignTokens(wrong, b.steps[b.steps.length - 1].after);
  const v = { frames: [a.wrong, a.right], right: b.word };
  trapCache.set(id, v);
  return v;
}

/** The declared facts of a step — what the engine is TOLD, not what it computes. */
function Declared({ step }: { step: WfStep }) {
  const { t } = useLang();
  return (
    <div className="wf-chips" aria-label={t({ en: 'Declared facts', uk: 'Оголошені факти' })}>
      <span className="wf-chips-label">{t({ en: 'Declared (lexicon):', uk: 'Оголошено (лексика):' })}</span>
      <span className="wf-chip wf-chip--fact">{step.prefix ? `${step.prefix}-` : `-${step.suffix}`}</span>
      {step.stress && (
        <span className="wf-chip wf-chip--fact wf-chip--prose">
          {step.stress === 'final'
            ? t({ en: 'stress on the last syllable', uk: 'наголос на останньому складі' })
            : t({ en: 'stress before the last syllable', uk: 'наголос перед останнім складом' })}
        </span>
      )}
      {step.stem && <span className="wf-chip wf-chip--fact">{t({ en: `stem ${step.stem}-`, uk: `основа ${step.stem}-` })}</span>}
    </div>
  );
}

/** The computed spelling of a step + the rule texts behind it. */
function Computed({ changes }: { changes: readonly Change[] }) {
  const { t } = useLang();
  const rules = [...new Set(changes.map((c) => c.rule))];
  return (
    <>
      <div className="wf-chips" aria-label={t({ en: 'Computed spelling', uk: 'Обчислений правопис' })}>
        <span className="wf-chips-label">{t({ en: 'Computed (spelling):', uk: 'Обчислено (правопис):' })}</span>
        {changes.map((c, i) => (
          <span key={i} className={cx('wf-chip', QUIET.has(c.rule) ? 'wf-chip--quiet' : 'wf-chip--rule')}>
            {c.rule === 'assimilate' || c.rule === 'stem' || c.rule === 'double' ? c.note : t(RULE_SHORT[c.rule])}
          </span>
        ))}
      </div>
      <ul className="wf-rules">
        {rules.map((r) => (
          <li key={r}>{t(RULE_TEXT[r])}</li>
        ))}
      </ul>
    </>
  );
}

export function WordFormationLab() {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const [track, setTrackState] = useState<WfTrack>('build');
  const [group, setGroupState] = useState<WfGroup>('prefix');
  const [buildId, setBuildId] = useState<string>('legal');
  const [famId, setFamId] = useState<string>(listFamilies()[0].id);
  const [memberIdx, setMemberIdx] = useState<number>(1);
  const [trapId, setTrapId] = useState<string>(listTraps()[0].id);

  const builds = buildsOf(group);
  const b = builds.find((x) => x.id === buildId) ?? builds[0];
  const families = listFamilies();
  const fam = families.find((f) => f.id === famId) ?? families[0];
  const member = fam.members[Math.min(memberIdx, fam.members.length - 1)];
  const traps = listTraps();
  const trap = traps.find((x) => x.id === trapId) ?? traps[0];

  // The source of the current derivation (build or family member) and its frames.
  const famSrc = { root: fam.root, rootFacts: fam.rootFacts, steps: member.steps };
  const rootGloss = fam.members.find((m) => m.steps.length === 0)?.uk ?? '';
  const famUk = [rootGloss, ...member.steps.map((_, i) => (i === member.steps.length - 1 ? member.uk : ''))];
  const frames: Frame[] =
    track === 'family' ? framesOf(`f:${fam.id}:${member.form}`, famSrc, famUk) : framesOf(`b:${b.id}`, b, b.uk);
  const last = frames.length - 1;
  const tf = trapFrames(trap.id, trap.wrong, trap);

  const pbBuild = usePlayback(last, 1500, last);
  const pbTrap = usePlayback(1, 2200, 1);
  const pb = track === 'traps' ? pbTrap : pbBuild;

  const restart = () => pbBuild.replay(reduced);
  const setTrack = (tr: WfTrack) => {
    setTrackState(tr);
    if (tr === 'traps') pbTrap.replay(reduced);
    else restart();
  };
  const setGroup = (g: WfGroup) => {
    setGroupState(g);
    setBuildId(buildsOf(g)[0].id);
    restart();
  };
  const pickBuild = (id: string) => {
    setBuildId(id);
    restart();
  };
  const pickFamily = (id: string) => {
    setFamId(id);
    setMemberIdx(1);
    restart();
  };
  const pickMember = (i: number) => {
    setMemberIdx(i);
    restart();
  };
  const pickTrap = (id: string) => {
    setTrapId(id);
    pbTrap.replay(reduced);
  };

  // ── what the word line shows ──
  let tokens: readonly MorphToken[];
  let baseline: readonly MorphToken[];
  let labels: Localized[];
  let spoken: string;
  let shown: string;
  let gloss: string;
  if (track === 'traps') {
    const step = Math.min(pbTrap.step, 1);
    tokens = tf.frames[step];
    baseline = tf.frames[0];
    labels = [
      { en: 'Misspelled', uk: 'З помилкою' },
      { en: 'Correct', uk: 'Правильно' },
    ];
    spoken = tf.right;
    shown = step === 0 ? trap.wrong : tf.right;
    gloss = step === 1 ? trap.uk : '';
  } else {
    const step = Math.min(pbBuild.step, last);
    const f = frames[step];
    tokens = f.tokens;
    // Highlight only what THIS frame added (the A3/A4 lesson: never diff against another scenario).
    baseline = frames[Math.max(0, step - 1)].tokens;
    labels = frames.map((x) => x.label);
    spoken = frames[last].word;
    shown = f.word;
    gloss = f.uk;
  }

  // ── the scene ──
  const src = track === 'family' ? famSrc : b;
  const built = build(src);
  const fi = Math.min(pbBuild.step, last);
  const si = stepOfFrame(fi);
  const welded = fi > 0 && fi % 2 === 0;
  const bre = build(src, 'bre');
  const breRules = [...bre.variantChanges, ...bre.steps.flatMap((s) => s.changes)].filter((c) => c.rule === 'l-bre' || c.rule === 'ise-bre' || c.rule === 'our-bre');
  const diag = track === 'traps' ? diagnose(trap)[0] : undefined;

  return (
    <div className="mn cm adv voc wf" role="group" aria-label="Word Formation Lab">
      <div className="mn-head">
        <span className="mn-title">★ Word Formation Lab</span>
        <span className="mn-sub">
          {t({
            en: 'Root + affix, letter by letter: the lexicon chooses the affix, the spelling rules decide what happens at the seam.',
            uk: 'Корінь + афікс, літера за літерою: лексика обирає афікс, правила правопису вирішують, що стається на шві.',
          })}
        </span>
      </div>

      <div className="mn-grid">
        <div>
          <Radios label={t({ en: 'Track', uk: 'Режим' })} items={WF_TRACKS} value={track} onPick={setTrack} render={(x) => t(TRACK_LABEL[x])} />
          {track === 'build' && (
            <>
              <Radios label={t({ en: 'Rule family', uk: 'Група правил' })} items={WF_GROUPS} value={group} onPick={setGroup} render={(g) => t(GROUP_LABEL[g])} />
              <Radios label={t({ en: 'Word', uk: 'Слово' })} items={builds.map((x) => x.id)} value={b.id} onPick={pickBuild} render={(id) => t(builds.find((x) => x.id === id)!.title)} />
            </>
          )}
          {track === 'family' && (
            <Radios label={t({ en: 'Root', uk: 'Корінь' })} items={families.map((f) => f.id)} value={fam.id} onPick={pickFamily} render={(id) => t(families.find((f) => f.id === id)!.title)} />
          )}
          {track === 'traps' && (
            <Radios label={t({ en: 'Misspelling', uk: 'Помилка' })} items={traps.map((x) => x.id)} value={trap.id} onPick={pickTrap} render={(id) => `✕ ${traps.find((x) => x.id === id)!.wrong}`} />
          )}
        </div>

        <div className="mn-result">
          <p className="sr-only" aria-live="polite">{`${t(labels[pb.step] ?? labels[0])}: ${shown}`}</p>
          {track === 'family' && (
            <ol className="wf-family" aria-label={t({ en: 'The family', uk: 'Родина' })}>
              {fam.members.map((m, i) => (
                <li key={m.form}>
                  <button type="button" className={cx('wf-member', m === member && 'on')} aria-pressed={m === member} onClick={() => pickMember(i)}>
                    <span className="wf-member-pos">{t(POS_LABEL[m.pos])}</span>
                    <span className="wf-member-form">{m.form}</span>
                  </button>
                </li>
              ))}
            </ol>
          )}
          <p className="tkm-line wf-line">
            <TokenMorph tokens={tokens} reduced={reduced} baseline={baseline} joined className={cx('wf-word', track === 'traps' && pbTrap.step === 0 && 'wf-word--bad')} />{' '}
            <SpeakButton text={spoken} />
          </p>
          <p className="mn-example-uk tkm-uk">{gloss || ' '}</p>
          <MorphControls pb={pb} labels={labels} reduced={reduced} />

          {track === 'traps' ? (
            <div className={cx('wf-scene', 'wf-scene--trap')}>
              <p className="wf-verdict">
                <span className="cm-wrong">✕ {trap.wrong}</span> → <strong className="wf-right">✓ {tf.right}</strong>
              </p>
              {diag && <p className="wf-diag">{t(diagText(diag, trap))}</p>}
              <p className="cm-trap">
                <span className="muted">{t(trap.why)}</span>
              </p>
            </div>
          ) : (
            <div className={cx('wf-scene', welded ? 'wf-scene--weld' : 'wf-scene--parts')}>
              {si < 0 ? (
                <p className="wf-note">
                  {t({ en: `The root: ${src.root}. Step forward to attach the affixes one by one.`, uk: `Корінь: ${src.root}. Ідіть уперед, щоб приєднати афікси по одному.` })}
                </p>
              ) : (
                <>
                  <Declared step={built.steps[si].step} />
                  {welded ? (
                    <Computed changes={built.steps[si].changes} />
                  ) : (
                    <p className="wf-note">{t({ en: 'Next step: weld — the engine applies the spelling rules at the seam.', uk: 'Наступний крок: зварювання — рушій застосовує правила правопису на шві.' })}</p>
                  )}
                </>
              )}
              {fi === last && (bre.word !== built.word || breRules.length > 0) && (
                <p className="at-variant wf-variant">
                  <span className="at-variant-tag">BrE</span>
                  <span>{bre.word}</span>
                  <span className="muted">
                    {bre.word === built.word ? t({ en: '— the same spelling. ', uk: '— той самий правопис. ' }) : '— '}
                    {breRules.map((c) => t(RULE_TEXT[c.rule])).join(' ')}
                  </span>
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
