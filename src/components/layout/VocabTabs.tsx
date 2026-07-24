// CHANGED (V1): the "Words" hub sub-tab bar (Dictionary · Definitions · Idioms). Rendered by
// WordsLayout atop each word page. Tabs are real routes, so they are <a> links with aria-current
// (not ARIA `tablist`). Idioms ships as a navigable "SOON" placeholder — its own dataset (a separate
// card format, NOT the single-word corpus) arrives in a later wave (CLAUDE.md D3/D6 decision).
import { useLang } from '../../i18n/lang';
import { ui } from '../../i18n/ui';
import { WORDS } from '../../data/words';
import { IDIOMS } from '../../data/idioms';
import { IRREGULAR } from '../../data/irregular';
import { hrefDefinitions, hrefDictionary, hrefIdioms, hrefIrregular, navigate } from '../../lib/hashRouter';
import { cx } from '../../lib/utils';

export type VocabTabId = 'dictionary' | 'definitions' | 'idioms' | 'irregular';

type TabDef = {
  id: VocabTabId;
  label: (typeof ui)[keyof typeof ui];
  icon: string;
  href: string;
  count?: number; // CHANGED (V3): per-tab entry count badge
  soon?: boolean;
};

// CHANGED (V3): counts shown as badges; Irregular is now built (no longer "SOON").
const TABS: TabDef[] = [
  { id: 'dictionary', label: ui.dictionary, icon: '📖', href: hrefDictionary(), count: WORDS.length },
  { id: 'definitions', label: ui.definitions, icon: '🎓', href: hrefDefinitions(), count: WORDS.length },
  { id: 'idioms', label: ui.idioms, icon: '💬', href: hrefIdioms(), count: IDIOMS.length },
  { id: 'irregular', label: ui.irregularVerbs, icon: '🔀', href: hrefIrregular(), count: IRREGULAR.length },
];

export function VocabTabs({ active }: { active: VocabTabId }) {
  const { t } = useLang();
  return (
    <nav className="vocab-tabs" aria-label={t(ui.words)}>
      {TABS.map((tab) => {
        const on = tab.id === active;
        return (
          <a
            key={tab.id}
            className={cx('vocab-tab', on && 'vocab-tab--active', tab.soon && 'vocab-tab--soon')}
            href={tab.href}
            aria-current={on ? 'page' : undefined}
            onClick={(e) => {
              e.preventDefault();
              navigate(tab.href);
            }}
          >
            <span className="vocab-tab-ic" aria-hidden="true">
              {tab.icon}
            </span>
            <span className="vocab-tab-label">{t(tab.label)}</span>
            {tab.count !== undefined && <span className="vocab-count">{tab.count}</span>}
            {tab.soon && <span className="vocab-soon">{t(ui.soon)}</span>}
          </a>
        );
      })}
    </nav>
  );
}
