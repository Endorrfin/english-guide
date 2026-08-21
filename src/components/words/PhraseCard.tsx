// CHANGED (V12): the shared expression card + its small parts, extracted VERBATIM from IdiomsPage
// when the Collocations tab (#/collocations) got its own page. One implementation, two consumers —
// an idiom card and a collocation card differ only in whether the kind chip is worth showing.
//
// Mastery keys stay `idiom:<id>` for BOTH corpora (V12 decision): the prefix is a permanent
// localStorage progress key and `lib/reviewDecks` maps it into the `idioms` SRS deck. Re-prefixing
// collocations to `coll:` would silently reset the owner's progress on 117 cards. Never change it.
import type { IdiomEntry } from '../../data/types';
import { useLang } from '../../i18n/lang';
import { ui } from '../../i18n/ui';
import { setMastery, useMastery } from '../../lib/masteryStore';
import type { Mastery } from '../../lib/masteryStore';
import { useTts } from '../../lib/tts';
import { cx } from '../../lib/utils';
import { LevelBadge } from '../module/LevelBadge';
import { KIND_LABEL, mkey } from './phraseMeta';

const MASTERY_STATES: Mastery[] = ['new', 'learning', 'known'];
const MASTERY_LABEL: Record<Mastery, typeof ui.masteryNew> = {
  new: ui.masteryNew,
  learning: ui.masteryLearning,
  known: ui.masteryKnown,
};

export function SpeakButton({ text }: { text: string }) {
  const { supported, speaking, speak } = useTts();
  const { t } = useLang();
  return (
    <button
      type="button"
      className={cx('tts-btn', speaking && 'speaking')}
      onClick={(e) => {
        e.stopPropagation();
        speak(text);
      }}
      disabled={!supported}
      title={supported ? t(ui.listen) : t(ui.ttsUnavailable)}
      aria-label={`${t(ui.listen)}: ${text}`}
    >
      <span aria-hidden="true">🔊</span>
    </button>
  );
}

export function MasteryBar({ id }: { id: string }) {
  const { t } = useLang();
  const map = useMastery();
  const current = map.get(mkey(id)) ?? 'new';
  return (
    <div className="def-mastery" role="group" aria-label={t(ui.masteryLabel)}>
      {MASTERY_STATES.map((s) => (
        <button
          key={s}
          type="button"
          className={cx('def-mastery-btn', `is-${s}`, current === s && 'on')}
          aria-pressed={current === s}
          onClick={() => setMastery(mkey(id), s)}
        >
          {t(MASTERY_LABEL[s])}
        </button>
      ))}
    </div>
  );
}

export function ExampleRow({ en, uk }: { en: string; uk: string }) {
  return (
    <div className="dict-ex idiom-ex">
      <div>
        <p className="dict-ex-en">
          {en} <SpeakButton text={en} />
        </p>
        <p className="dict-ex-uk">{uk}</p>
      </div>
    </div>
  );
}

/**
 * One expandable expression card. `showKind` hides the kind chip on a single-kind page — on
 * #/collocations every card is a collocation, so the chip is pure noise there.
 */
export function PhraseCard({
  e,
  open,
  mastery,
  onToggle,
  showKind = true,
}: {
  e: IdiomEntry;
  open: boolean;
  mastery: Mastery;
  onToggle: () => void;
  showKind?: boolean;
}) {
  const { t } = useLang();
  return (
    <div className={cx('dict-card', open && 'def-card--open')} id={`idiom-${e.id}`}>
      <button className="dict-head" onClick={onToggle} aria-expanded={open}>
        <span className={cx('dict-caret', open && 'open')} aria-hidden="true">
          ›
        </span>
        <span className={cx('def-mstate', `is-${mastery}`)} aria-hidden="true" />
        <span className="dict-word">{e.phrase}</span>
        <SpeakButton text={e.phrase} />
        {showKind && (
          <span className="chip chip-kind" data-kind={e.kind}>
            {t(KIND_LABEL[e.kind])}
          </span>
        )}
        <span className="idiom-reg" data-reg={e.register}>
          {e.register}
        </span>
        {e.uaEquivalent && <span className="idiom-ua-inline dim">≈ {e.uaEquivalent}</span>}
        <LevelBadge level={e.level} />
      </button>
      {open && (
        <div className="dict-body">
          <div className="dict-def">
            <p>{e.meaning.en}</p>
            <p className="muted">{e.meaning.uk}</p>
          </div>

          {e.uaEquivalent && (
            <p className="idiom-ua">
              <span className="idiom-ua-tag">{t(ui.idiomUaEquivalent)}</span> {e.uaEquivalent}
            </p>
          )}
          {e.literal && (
            <p className="idiom-literal dim">
              <span className="mono">{t(ui.idiomLiteral)}:</span> {e.literal.en} · {e.literal.uk}
            </p>
          )}
          {e.note && (
            <p className="idiom-note">
              <span className="idiom-note-tag">⚠ {t(ui.idiomNote)}</span>
              <span>
                {e.note.en} <span className="muted">{e.note.uk}</span>
              </span>
            </p>
          )}

          <div className="dict-examples">
            {e.examples.map((ex, i) => (
              <ExampleRow key={i} en={ex.text.en} uk={ex.text.uk} />
            ))}
          </div>

          {e.synonyms && e.synonyms.length > 0 && (
            <p className="dim idiom-syn">
              <span className="mono">{t(ui.synonymsLabel)}:</span> {e.synonyms.join(', ')}
            </p>
          )}
          {e.origin && (
            <p className="idiom-origin">
              <span className="idiom-origin-tag" aria-hidden="true">
                💡
              </span>
              <span>
                <strong>{t(ui.idiomOrigin)}. </strong>
                {e.origin.en} <span className="muted">{e.origin.uk}</span>
              </span>
            </p>
          )}

          <MasteryBar id={e.id} />
        </div>
      )}
    </div>
  );
}
