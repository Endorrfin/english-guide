// CHANGED (A2): ★ Clause Compressor — m26's signature sim (Section V TokenMorph family). COMPRESS track:
// a full clause sheds its conjunction, subject and auxiliary while a word meter shrinks — When I opened
// → When opening → Opening; it was written → Written; after we had tested → Having tested — and the
// main clause never moves. DETECT track: the DANGLING-PARTICIPLE DETECTOR. Under every frame a doer
// check draws the participle → the subject it borrows, and the verdict (✓ same doer · ✕ dangling ·
// full clause, nothing borrowed) is COMPUTED by the engine from the marked tokens, not authored.
// Engine: src/lib/participleClauses.ts (pure, golden-tested); content: src/data/clauseCompressor.ts.
// A11y: radiogroups with roving tabindex; the meter and the check are mirrored in the polite live
// region as text. Reduced motion: no auto-play, no flight, no meter transition.
import { useState } from 'react';
import { useLang } from '../../i18n/lang';
import {
  CLAUSE_LABEL, KIND_LABEL, KIND_NOTE, KIND_PATTERN, PC_CLAUSES, PC_TRACKS, kindsOf, scenariosOf, tokensOf, verdictOf, wordCount,
} from '../../lib/participleClauses';
import type { PcClause, PcScenario, PcTrack, Verdict } from '../../lib/participleClauses';
import { usePlayback, useReducedMotion } from '../../lib/motion';
import { textOf } from '../../lib/tokenMorph';
import { cx } from '../../lib/utils';
import type { Localized } from '../../data/types';
import { TokenMorph } from '../motion/TokenMorph';
import { MorphControls, Radios, SpeakButton } from '../motion/MorphBits';

const TRACK_LABEL: Record<PcTrack, Localized> = {
  compress: { en: 'Compress a clause', uk: 'Стиснути речення' },
  detect: { en: 'Dangling detector', uk: 'Детектор dangling' },
};

function verdictText(v: Verdict, doer: string): Localized {
  if (v.kind === 'full')
    return {
      en: `No participle clause: the clause has its own subject, so nothing is borrowed and nothing can dangle.`,
      uk: `Participle clause немає: речення має власний підмет, тож нічого не позичено й нічому «бовтатися».`,
    };
  if (v.kind === 'ok')
    return {
      en: `OK: “${v.part}” borrows the main subject “${v.subj}” — and that is the real doer (${doer}).`,
      uk: `OK: «${v.part}» позичає підмет «${v.subj}» — і це справжній виконавець (${doer}).`,
    };
  return {
    en: `Dangling: “${v.part}” borrows “${v.subj}”, but the real doer is ${doer}. Read literally, the ${v.subj} did it.`,
    uk: `Dangling: «${v.part}» позичає «${v.subj}», але справжній виконавець — ${doer}. Буквально виходить, що це зробив ${v.subj}.`,
  };
}

/** participle ─ borrows → main subject, with the computed verdict. */
function DoerCheck({ v, sc }: { v: Verdict; sc: PcScenario }) {
  const { t } = useLang();
  return (
    <div className={cx('pcc-check', `pcc-check--${v.kind}`)}>
      <div className="pcc-chain" aria-hidden="true">
        <span className={cx('pcc-chip', 'tkm-part', v.kind === 'full' && 'pcc-none')}>{v.kind === 'full' ? '—' : v.part}</span>
        <span className="pcc-link">{v.kind === 'full' ? t({ en: 'own subject', uk: 'свій підмет' }) : t({ en: 'borrows', uk: 'позичає' })}</span>
        <span className={cx('pcc-chip', 'tkm-subj')}>{v.kind === 'full' ? sc.doer[0] : v.subj}</span>
        <span className="pcc-badge">{v.kind === 'ok' ? '✓' : v.kind === 'dangling' ? '✕' : '='}</span>
      </div>
      <p className="pcc-verdict">{t(verdictText(v, sc.doer[0]))}</p>
    </div>
  );
}

export function ClauseCompressor() {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const [track, setTrackState] = useState<PcTrack>('compress');
  const [clause, setClauseState] = useState<PcClause>('earlier');
  const [scenId, setScenId] = useState<string>(scenariosOf('compress', 'earlier')[0].id);

  const scenarios = scenariosOf(track, clause);
  const sc = scenarios.find((s) => s.id === scenId) ?? scenarios[0];
  const kinds = kindsOf(sc);
  const pb = usePlayback(kinds.length - 1, 2100, kinds.length - 1);
  const step = Math.min(pb.step, kinds.length - 1);
  const kind = kinds[step];
  const frame = sc.frames[step];
  const tokens = tokensOf(frame);
  const v = verdictOf(sc, tokens);
  const full = wordCount(tokensOf(sc.frames[0]));
  const now = wordCount(tokens);

  const setTrack = (tr: PcTrack) => {
    setTrackState(tr);
    setScenId(scenariosOf(tr, clause)[0].id);
    pb.replay(reduced);
  };
  const setClause = (c: PcClause) => {
    setClauseState(c);
    setScenId(scenariosOf('compress', c)[0].id);
    pb.replay(reduced);
  };
  const setScen = (id: string) => {
    setScenId(id);
    pb.replay(reduced);
  };

  const wordsLabel = (n: number) => t({ en: `${n} words`, uk: `${n} слів` });

  return (
    <div className="mn cm adv pcc" role="group" aria-label="Clause Compressor">
      <div className="mn-head">
        <span className="mn-title">★ Clause Compressor</span>
        <span className="mn-sub">
          {t({
            en: 'Squeeze a full clause into a participle — and let the detector check who the participle now belongs to.',
            uk: 'Стисніть повне речення до participle — і нехай детектор перевірить, кому тепер належить participle.',
          })}
        </span>
      </div>

      <div className="mn-grid">
        <div>
          <Radios label={t({ en: 'Track', uk: 'Режим' })} items={PC_TRACKS} value={track} onPick={setTrack} render={(x) => t(TRACK_LABEL[x])} />
          {track === 'compress' ? (
            <Radios
              label={t({ en: 'What does the clause say?', uk: 'Що каже речення?' })}
              items={PC_CLAUSES}
              value={clause}
              onPick={setClause}
              render={(c) => t(CLAUSE_LABEL[c])}
            />
          ) : (
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
            {`${t(KIND_LABEL[kind])}: ${textOf(tokens)} ${wordsLabel(now)}. ${t(verdictText(v, sc.doer[0]))}`}
          </p>
          <div className="mn-answer-row">
            <span className="mn-modal cm-type">{t(KIND_LABEL[kind])}</span>
            <code className="cs-pattern">{KIND_PATTERN[kind]}</code>
          </div>
          {track === 'compress' && (
            <div className="pcc-meter" aria-hidden="true">
              <span className="pcc-bar" style={{ width: `${Math.round((now / full) * 100)}%` }} />
              <span className="pcc-count">
                {wordsLabel(now)}
                {now < full ? ` · −${full - now}` : ''}
              </span>
            </div>
          )}
          <p className="tkm-line">
            <TokenMorph tokens={tokens} reduced={reduced} baseline={tokensOf(sc.frames[0])} /> <SpeakButton text={textOf(tokens)} />
          </p>
          <p className="mn-example-uk tkm-uk">{frame.uk}</p>
          <DoerCheck v={v} sc={sc} />
          <MorphControls pb={pb} labels={kinds.map((k) => KIND_LABEL[k])} reduced={reduced} />
          <p className="mn-why">{t(KIND_NOTE[kind])}</p>
          <div className="mn-near">
            <p className="mn-col-label">{t({ en: 'The typical trap', uk: 'Типова пастка' })}</p>
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
