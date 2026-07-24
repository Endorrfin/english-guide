// CHANGED (V2): Irregular verbs (#/irregular) — moved INTO the Words hub as its 4th tab (owner
// decision). Verb forms are word-level reference, so they live beside the Dictionary. The trainer
// (searchable table + three-forms drill) arrives in a later wave; until then this renders the hub
// chrome + a coming-soon card, so the tab is reachable and self-explanatory.
import { useLang } from '../../i18n/lang';
import { ui } from '../../i18n/ui';
import { WordsLayout } from '../layout/WordsLayout';
import { ComingSoon } from './ComingSoon';

export function IrregularPage() {
  const { t } = useLang();
  return (
    <WordsLayout active="irregular">
      <p className="muted vocab-lede">{t(ui.irregularLede)}</p>
      <ComingSoon note={ui.irregularSoonNote} />
    </WordsLayout>
  );
}
