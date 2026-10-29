// CHANGED (A1): ★ Causative Switch — m24's signature sim (Section V TokenMorph family). CAUSATIVE
// track: one action walks through six who-does-it forms while a scene above the sentence shows who
// acts — you alone · you ⇢ someone → the thing · you ⇢ a named pro → the thing · ? → the thing, with
// you only AFFECTED (the unwanted "had my laptop stolen"). The words fly: repaired slides to the end as
// had arrives, my laptop squeezes in between. REPORTING track: People say that … → It is said that …
// → X is said to (have) … — the sayers vanish and the topic moves to the front.
// Engine: src/lib/causative.ts (pure, golden-tested); content: src/data/causativeSwitch.ts.
// A11y: radiogroups with roving tabindex; the scene is aria-hidden (the polite live region carries the
// form name + sentence). Reduced motion: no auto-play, no flight, no scene transitions.
import { useState } from 'react';
import { useLang } from '../../i18n/lang';
import { CS_TRACKS, FORM_LABEL, FORM_PATTERN, TRACK_FORMS, sceneOf, scenariosOf, tokensOf } from '../../lib/causative';
import type { CsScenario, CsTrack, Scene } from '../../lib/causative';
import { usePlayback, useReducedMotion } from '../../lib/motion';
import { textOf } from '../../lib/tokenMorph';
import { cx } from '../../lib/utils';
import type { Localized } from '../../data/types';
import { TokenMorph } from '../motion/TokenMorph';
import { MorphControls, Radios, SpeakButton } from '../motion/MorphBits';

const TRACK_LABEL: Record<CsTrack, Localized> = {
  causative: { en: 'Causative: who does the work?', uk: 'Causative: хто виконує роботу?' },
  reporting: { en: 'Reporting: It is said …', uk: 'Reporting: It is said …' },
};
const YOU_ROLE: Record<Scene['you'], Localized> = {
  doer: { en: 'does it', uk: 'робите самі' },
  arranger: { en: 'arranges it', uk: 'організовуєте' },
  affected: { en: 'it happens to you', uk: 'це сталося з вами' },
};

/** You → (pro) → the thing: who acts in this frame. Nodes and arrows fade/slide between frames. */
function WhoScene({ scene, sc }: { scene: Scene; sc: CsScenario }) {
  const { t } = useLang();
  const proName =
    scene.pro === 'named' && sc.pro ? t(sc.pro) : scene.pro === 'unknown' ? '?' : t({ en: 'someone', uk: 'хтось' });
  return (
    <div className="cs-scene" aria-hidden="true">
      <div className={cx('cs-node', 'cs-you', scene.you === 'affected' && 'cs-affected')}>
        <span className="cs-node-name">{t({ en: 'You', uk: 'Ви' })}</span>
        <span className="cs-node-role">{t(YOU_ROLE[scene.you])}</span>
      </div>
      <span className={cx('cs-arrow', scene.you === 'arranger' && 'cs-dashed', scene.you === 'affected' && 'cs-off')}>
        <span className="cs-arrow-cap">{scene.you === 'arranger' ? t({ en: 'asks / pays', uk: 'просить / платить' }) : t({ en: 'does', uk: 'робить' })}</span>
      </span>
      <div className={cx('cs-node', 'cs-pro', scene.pro === 'none' && 'cs-gone', scene.pro === 'named' && 'cs-named', scene.pro === 'unknown' && 'cs-unknown')}>
        <span className="cs-node-name">{proName}</span>
        <span className="cs-node-role">{t({ en: 'does it', uk: 'робить' })}</span>
      </div>
      <span className={cx('cs-arrow', scene.pro === 'none' && 'cs-merge')}>
        <span className="cs-arrow-cap">{t({ en: 'acts on', uk: 'діє на' })}</span>
      </span>
      <div className="cs-node cs-thing">
        <span className="cs-node-name">{sc.thing ? t(sc.thing) : ''}</span>
      </div>
    </div>
  );
}

export function CausativeSwitch() {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const [track, setTrackState] = useState<CsTrack>('causative');
  const [scenId, setScenId] = useState<string>(scenariosOf('causative')[0].id);
  const forms = TRACK_FORMS[track];
  const pb = usePlayback(forms.length - 1, 2000, 1);

  const scenarios = scenariosOf(track);
  const sc = scenarios.find((s) => s.id === scenId) ?? scenarios[0];
  const step = Math.min(pb.step, forms.length - 1);
  const form = forms[step];
  const frame = sc.frames[step];
  const tokens = tokensOf(frame);
  const scene = sceneOf(form);

  const setTrack = (tr: CsTrack) => {
    setTrackState(tr);
    setScenId(scenariosOf(tr)[0].id);
    pb.replay(reduced);
  };
  const setScen = (id: string) => {
    setScenId(id);
    pb.replay(reduced);
  };

  return (
    <div className="mn cm adv cs" role="group" aria-label="Causative Switch">
      <div className="mn-head">
        <span className="mn-title">★ Causative Switch</span>
        <span className="mn-sub">
          {t({
            en: 'Who actually does the work? Step through the forms and watch the doer leave the stage while the words rearrange.',
            uk: 'Хто насправді виконує роботу? Пройдіть формами й подивіться, як виконавець сходить зі сцени, а слова перебудовуються.',
          })}
        </span>
      </div>

      <div className="mn-grid">
        <div>
          <Radios label={t({ en: 'Track', uk: 'Режим' })} items={CS_TRACKS} value={track} onPick={setTrack} render={(v) => t(TRACK_LABEL[v])} />
          <Radios
            label={t({ en: 'Situation', uk: 'Ситуація' })}
            items={scenarios.map((s) => s.id)}
            value={sc.id}
            onPick={setScen}
            render={(id) => t(scenarios.find((s) => s.id === id)!.title)}
          />
        </div>

        <div className="mn-result">
          <p className="sr-only" aria-live="polite">
            {`${t(FORM_LABEL[form])}: ${textOf(tokens)}`}
          </p>
          <div className="mn-answer-row">
            <span className="mn-modal cm-type">{t(FORM_LABEL[form])}</span>
            <code className="cs-pattern">{FORM_PATTERN[form]}</code>
          </div>
          {scene && <WhoScene scene={scene} sc={sc} />}
          <p className="tkm-line">
            <TokenMorph tokens={tokens} reduced={reduced} baseline={tokensOf(sc.frames[0])} /> <SpeakButton text={textOf(tokens)} />
          </p>
          <p className="mn-example-uk tkm-uk">{frame.uk}</p>
          <MorphControls pb={pb} labels={forms.map((f) => FORM_LABEL[f])} reduced={reduced} />
          <p className="mn-why">{t(frame.note)}</p>
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
