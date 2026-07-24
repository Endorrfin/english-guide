// CHANGED (V1): shared chrome for the "Words" hub — one section <h1> + the VocabTabs bar, then the
// active tab's body as children (each page provides its own one-line lede as the first child, so the
// description reads as a subtitle for whichever tab is active). This wrapper is tiny and shared, so
// each tab page stays independently lazy-loaded (App.tsx) while the hub looks like one section.
import type { ReactNode } from 'react';
import { useLang } from '../../i18n/lang';
import { ui } from '../../i18n/ui';
import { VocabTabs } from './VocabTabs';
import type { VocabTabId } from './VocabTabs';

export function WordsLayout({ active, children }: { active: VocabTabId; children: ReactNode }) {
  const { t } = useLang();
  return (
    <div className="content">
      {/* CHANGED (V2): the section heading is visually hidden — the tab bar is the visible header,
          but a real <h1> stays in the DOM for screen readers / SEO (owner: reclaim the space). */}
      <h1 className="sr-only">{t(ui.words)}</h1>
      <VocabTabs active={active} />
      {children}
    </div>
  );
}
