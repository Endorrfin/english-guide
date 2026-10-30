// CHANGED (A3): ★ Article Tree — m28's signature sim and the signature sim of Section V (TokenMorph
// family). Choosing an article is a DECISION, not a transformation, so the sim pairs a decision tree
// with a sentence: five questions light up one by one (routine phrase? a name? which one? one thing?
// the whole kind?), each with the reason it was answered that way, and at the leaf the article DROPS
// into the sentence's slot — or, for ∅, the empty slot fades out and the words close the gap.
// WALK track: one sentence per case (an optional guess first, checked at the leaf). PAIRS track: the
// same noun in two contexts; the sentence morphs, the tree re-walks, and the facts that changed are
// named. Everything the tree shows is COMPUTED by src/lib/articles.ts from the scenario's facts; data
// (src/data/articleTree.ts) never states the answer to the UI. American English base; where British
// English differs (in hospital), a BrE chip shows the engine's BrE walk.
// A11y: radiogroups with roving tabindex; the tree is an ordered list with text answers; the live
// region carries the step and the sentence. Reduced motion: no auto-play, no flight — the leaf at once.
import { useState } from 'react';
import { useLang } from '../../i18n/lang';
import {
  ARTICLE_LABEL, AT_GROUPS, AT_TRACKS, GROUP_LABEL, LEAF_LABEL, LEAF_NOTE, QUESTIONS, QUESTION_SHORT, QUESTION_TEXT,
  answerTokens, diffFacts, listPairs, scenariosOf, slotTokens, walkOf,
} from '../../lib/articles';
import type { Article, AtContext, AtGroup, AtTrack, NounFacts, Walk } from '../../lib/articles';
import { usePlayback, useReducedMotion } from '../../lib/motion';
import { textOf } from '../../lib/tokenMorph';
import type { MorphToken } from '../../lib/tokenMorph';
import { cx } from '../../lib/utils';
import type { Localized } from '../../data/types';
import { TokenMorph } from '../motion/TokenMorph';
import { MorphControls, Radios, SpeakButton } from '../motion/MorphBits';

const TRACK_LABEL: Record<AtTrack, Localized> = {
  walk: { en: 'Walk the tree', uk: 'Пройти дерево' },
  pairs: { en: 'Same noun, two contexts', uk: 'Той самий іменник, два контексти' },
};
const FACT_LABEL: Record<keyof NounFacts, Localized> = {
  routine: { en: 'routine phrase', uk: 'стала фраза' },
  visitor: { en: 'only visiting', uk: 'лише відвідування' },
  name: { en: 'name', uk: 'назва' },
  known: { en: 'which one is known', uk: 'відомо, який саме' },
  count: { en: 'countable / uncountable', uk: 'злічуваний / незлічуваний' },
  kind: { en: 'the whole kind', uk: 'увесь вид' },
};
type Guess = 'a/an' | 'the' | 'zero';
const GUESSES: readonly Guess[] = ['a/an', 'the', 'zero'];
const guessOf = (a: Article): Guess => (a === 'a' || a === 'an' ? 'a/an' : a);

/** The five questions; `shown` of the walk's steps are revealed, the leaf once `done`. */
function Tree({ walk, shown, done }: { walk: Walk; shown: number; done: boolean }) {
  const { t } = useLang();
  return (
    <div className="at-tree">
      <ol className="at-qs">
        {QUESTIONS.map((q) => {
          const i = walk.path.findIndex((s) => s.q === q);
          const step = i >= 0 && i < shown ? walk.path[i] : null;
          const skipped = i < 0;
          return (
            <li key={q} className={cx('at-q', step && 'on', step && i === shown - 1 && !done && 'now', skipped && 'skip')}>
              <span className="at-q-text">{t(QUESTION_TEXT[q])}</span>
              {step ? (
                <span className="at-q-ans">
                  <span className={cx('at-yn', step.yes ? 'yes' : 'no')}>{step.yes ? t({ en: 'Yes', uk: 'Так' }) : t({ en: 'No', uk: 'Ні' })}</span>
                  <span className="at-q-why">{t(step.why)}</span>
                </span>
              ) : skipped ? (
                <span className="at-q-ans muted">{t({ en: 'not asked — the walk ended earlier', uk: 'не питаємо — шлях закінчився раніше' })}</span>
              ) : null}
            </li>
          );
        })}
      </ol>
      <div className={cx('at-leaf', `at-leaf--${walk.leaf}`, done && 'on')} aria-hidden={!done}>
        <span className="at-art">{ARTICLE_LABEL[walk.article]}</span>
        <span className="at-leaf-text">
          <strong>{t(LEAF_LABEL[walk.leaf])}</strong>
          <span className="muted">{t(LEAF_NOTE[walk.leaf])}</span>
        </span>
      </div>
    </div>
  );
}

export function ArticleTree() {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const [track, setTrackState] = useState<AtTrack>('walk');
  const [group, setGroupState] = useState<AtGroup>('places');
  const [scenId, setScenId] = useState<string>('hospital');
  const [pairId, setPairId] = useState<string>(listPairs()[0].id);
  const [guess, setGuess] = useState<Guess | null>(null);

  const scenarios = scenariosOf(group);
  const sc = scenarios.find((s) => s.id === scenId) ?? scenarios[0];
  const pairs = listPairs();
  const pair = pairs.find((p) => p.id === pairId) ?? pairs[0];

  // WALK: one frame per question + the leaf. PAIRS: context A → context B.
  const walk = walkOf(sc);
  const walkLast = walk.path.length;
  const pbWalk = usePlayback(walkLast, 1200, walkLast);
  const pbPair = usePlayback(1, 2600, 0);
  const pb = track === 'walk' ? pbWalk : pbPair;

  const restart = () => {
    pbWalk.replay(reduced);
  };
  const setTrack = (tr: AtTrack) => {
    setTrackState(tr);
    setGuess(null);
    if (tr === 'pairs') pbPair.goto(0);
    else restart();
  };
  const setGroup = (g: AtGroup) => {
    setGroupState(g);
    setScenId(scenariosOf(g)[0].id);
    setGuess(null);
    restart();
  };
  const setScen = (id: string) => {
    setScenId(id);
    setGuess(null);
    restart();
  };
  const setPair = (id: string) => {
    setPairId(id);
    pbPair.replay(reduced);
  };
  const pick = (g: Guess) => {
    setGuess(g);
    restart();
  };

  let ctx: AtContext;
  let w: Walk;
  let tokens: MorphToken[];
  let shown: number;
  let done: boolean;
  let stepLabel: Localized;
  let labels: Localized[];
  if (track === 'walk') {
    const step = Math.min(pbWalk.step, walkLast);
    ctx = sc;
    w = walk;
    done = step === walkLast;
    shown = done ? walk.path.length : step + 1;
    tokens = done ? answerTokens(sc.src, walk.article) : slotTokens(sc.src);
    labels = [...walk.path.map((s) => QUESTION_SHORT[s.q]), { en: 'Article', uk: 'Артикль' }];
    stepLabel = labels[step];
  } else {
    const step = Math.min(pbPair.step, 1);
    ctx = step === 0 ? pair.a : pair.b;
    w = walkOf(ctx);
    done = true;
    shown = w.path.length;
    tokens = answerTokens(ctx.src, w.article);
    labels = [
      { en: 'Context 1', uk: 'Контекст 1' },
      { en: 'Context 2', uk: 'Контекст 2' },
    ];
    stepLabel = labels[step];
  }
  const sentence = textOf(tokens);
  const bre = walkOf(ctx, 'bre');
  const breDiffers = bre.article !== w.article;
  const changed = track === 'pairs' ? diffFacts(pair.a.facts, pair.b.facts) : [];
  const verdict = track === 'walk' && done && guess ? (guess === guessOf(walk.article) ? 'right' : 'wrong') : null;

  return (
    <div className="mn cm adv at" role="group" aria-label="Article Tree">
      <div className="mn-head">
        <span className="mn-title">★ Article Tree</span>
        <span className="mn-sub">
          {t({
            en: 'Five questions, always in the same order — and the answer drops into the sentence: a / an, the, or nothing at all.',
            uk: 'Пʼять питань, завжди в тому самому порядку, — і відповідь падає в речення: a / an, the або нічого.',
          })}
        </span>
      </div>

      <div className="mn-grid">
        <div>
          <Radios label={t({ en: 'Track', uk: 'Режим' })} items={AT_TRACKS} value={track} onPick={setTrack} render={(x) => t(TRACK_LABEL[x])} />
          {track === 'walk' ? (
            <>
              <Radios label={t({ en: 'Case', uk: 'Випадок' })} items={AT_GROUPS} value={group} onPick={setGroup} render={(g) => t(GROUP_LABEL[g])} />
              <Radios
                label={t({ en: 'Sentence', uk: 'Речення' })}
                items={scenarios.map((s) => s.id)}
                value={sc.id}
                onPick={setScen}
                render={(id) => t(scenarios.find((s) => s.id === id)!.title)}
              />
            </>
          ) : (
            <Radios
              label={t({ en: 'Noun', uk: 'Іменник' })}
              items={pairs.map((p) => p.id)}
              value={pair.id}
              onPick={setPair}
              render={(id) => t(pairs.find((p) => p.id === id)!.title)}
            />
          )}
        </div>

        <div className="mn-result">
          <p className="sr-only" aria-live="polite">
            {`${t(stepLabel)}: ${sentence}${done ? `. ${t(LEAF_LABEL[w.leaf])}` : ''}`}
          </p>
          {track === 'walk' && (
            <div className="at-guess" role="group" aria-label={t({ en: 'Your guess first', uk: 'Спершу ваша здогадка' })}>
              <span className="mn-col-label">{t({ en: 'Your guess:', uk: 'Ваша здогадка:' })}</span>
              {GUESSES.map((g) => (
                <button key={g} type="button" className={cx('at-guess-btn', guess === g && 'on')} aria-pressed={guess === g} onClick={() => pick(g)}>
                  {g === 'zero' ? '∅' : g}
                </button>
              ))}
              {verdict && (
                <span className={cx('at-verdict', verdict)}>
                  {verdict === 'right' ? t({ en: '✓ The tree agrees', uk: '✓ Дерево згодне' }) : t({ en: '✕ The tree says otherwise', uk: '✕ Дерево каже інше' })}
                </span>
              )}
            </div>
          )}
          <p className="tkm-line at-line">
            {/* Highlight only the article: walk = against the slot frame; pairs = against the same
                sentence minus its article (found in the browser pass — without a baseline every new
                context word lit up and buried the one word that matters). */}
            <TokenMorph tokens={tokens} reduced={reduced} baseline={track === 'walk' ? slotTokens(sc.src) : tokens.filter((x) => x.role !== 'art')} />{' '}
            <SpeakButton text={sentence} />
          </p>
          <p className="mn-example-uk tkm-uk">{ctx.uk}</p>
          {done && breDiffers && (
            <p className="at-variant">
              <span className="at-variant-tag">BrE</span>
              <span>{textOf(answerTokens(ctx.src, bre.article))}</span>
              <span className="muted">
                {t({ en: '— British English treats hospital as a routine phrase.', uk: '— британська англійська вважає hospital сталою фразою.' })}
              </span>
            </p>
          )}
          {track === 'pairs' && (
            <p className="at-changed">
              <span className="mn-col-label">{t({ en: 'What changed:', uk: 'Що змінилося:' })}</span>{' '}
              {changed.map((k) => (
                <span key={k} className="at-fact">
                  {t(FACT_LABEL[k])}
                </span>
              ))}
            </p>
          )}
          <Tree walk={w} shown={shown} done={done} />
          <MorphControls pb={pb} labels={labels} reduced={reduced} />
          {track === 'walk' && sc.trap && (
            <div className="mn-near">
              <p className="mn-col-label">{t({ en: 'The typical trap', uk: 'Типова пастка' })}</p>
              <p className="cm-trap">
                <span className="cm-wrong">✕ {sc.trap.wrong}</span>
                <span className="muted">{t(sc.trap.why)}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
