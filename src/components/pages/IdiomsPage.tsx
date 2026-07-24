// CHANGED (V1): Idioms tab (#/idioms) — placeholder for the planned idioms wave. Idioms live in
// their OWN dataset (a dedicated card format, ≈178 short phrases from the backlog), NOT the
// single-word corpus (owner decision, CLAUDE.md D3/D6). This page renders the hub chrome + a
// coming-soon card so the tab is reachable and self-explanatory until the content wave lands.
import { useLang } from '../../i18n/lang';
import { ui } from '../../i18n/ui';
import { WordsLayout } from '../layout/WordsLayout';
import { ComingSoon } from './ComingSoon';

export function IdiomsPage() {
  const { t } = useLang();
  return (
    <WordsLayout active="idioms">
      <p className="muted vocab-lede">{t(ui.idiomsLede)}</p>
      <ComingSoon note={ui.idiomsSoonNote} />
    </WordsLayout>
  );
}
