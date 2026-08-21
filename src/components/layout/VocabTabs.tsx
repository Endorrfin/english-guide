// CHANGED (V1): the "Words" hub sub-tab bar. Rendered by WordsLayout atop each word page. Tabs are
// real routes, so they are <a> links with aria-current (not ARIA `tablist`).
// CHANGED (V12): five tabs — Dictionary · Definitions · Idioms · Collocations · Irregular verbs.
//
// COUNTS COME FROM GENERATED MODULES, NEVER FROM THE CORPORA. This component renders on EVERY Words
// route, so `import { IDIOMS }` here (the pre-V12 shape) made opening #/dictionary download the whole
// idioms corpus — and `check:bundle` cannot catch it, because it guards the EAGER import graph and
// all of this sits behind React.lazy. With per-tab chunks that regression is worse, not better: it
// would pull every corpus on every tab and make the V12 split purely cosmetic. Keep these imports
// pointing at `*.generated` files; if a badge ever needs more than a number, generate that too.
import { WORD_COUNTS } from '../../data/words/index.generated';
import { PHRASE_COUNTS } from '../../data/phrases.generated';
import { useLang } from '../../i18n/lang';
import { ui } from '../../i18n/ui';
import {
  hrefCollocations,
  hrefDefinitions,
  hrefDictionary,
  hrefIdioms,
  hrefIrregular,
  navigate,
} from '../../lib/hashRouter';
import { cx } from '../../lib/utils';

export type VocabTabId = 'dictionary' | 'definitions' | 'idioms' | 'collocations' | 'irregular';

type TabDef = {
  id: VocabTabId;
  label: (typeof ui)[keyof typeof ui];
  icon: string;
  href: string;
  count?: number; // CHANGED (V3): per-tab entry count badge
  soon?: boolean;
};

// CHANGED (V3): counts shown as badges; Irregular is now built (no longer "SOON").
// CHANGED (V12): Collocations sits next to Idioms — both are multi-word expressions, so the two
// phrase tabs read as a pair, with the single-word tabs before them and the verb table after.
const TABS: TabDef[] = [
  { id: 'dictionary', label: ui.dictionary, icon: '📖', href: hrefDictionary(), count: WORD_COUNTS.total },
  { id: 'definitions', label: ui.definitions, icon: '🎓', href: hrefDefinitions(), count: WORD_COUNTS.total },
  { id: 'idioms', label: ui.idioms, icon: '💬', href: hrefIdioms(), count: PHRASE_COUNTS.expressions },
  {
    id: 'collocations',
    label: ui.collocationsLabel,
    icon: '🧩',
    href: hrefCollocations(),
    count: PHRASE_COUNTS.collocations,
  },
  { id: 'irregular', label: ui.irregularVerbs, icon: '🔀', href: hrefIrregular(), count: PHRASE_COUNTS.irregular },
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
