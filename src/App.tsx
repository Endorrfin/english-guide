// CHANGED (S1): app shell — eager chrome (TopBar/Sidebar/Footer), lazy route pages via
// React.lazy + a single Suspense (ported pattern from ../database guide, incl. the S22 a11y
// focus-on-route-change behavior).
import { Suspense, lazy, useEffect, useRef } from 'react';
import { Footer } from './components/layout/Footer';
import { ProgressBar } from './components/layout/ProgressBar';
import { Sidebar } from './components/layout/Sidebar';
import { TopBar } from './components/layout/TopBar';
import { useLang } from './i18n/lang';
import { ui } from './i18n/ui';
import { useRoute } from './lib/hashRouter';

const LandscapeMap = lazy(() => import('./components/map/LandscapeMap').then((m) => ({ default: m.LandscapeMap })));
const ModulePage = lazy(() => import('./components/module/ModulePage').then((m) => ({ default: m.ModulePage })));
// CHANGED (TM1+TM2): ★ The Tense Machine — the standalone home of the tense system (#/tenses).
const TensesPage = lazy(() => import('./components/pages/TensesPage').then((m) => ({ default: m.TensesPage })));
// CHANGED (D1): the Definitions study page (front door for words).
const DefinitionsPage = lazy(() => import('./components/pages/DefinitionsPage').then((m) => ({ default: m.DefinitionsPage })));
const DictionaryPage = lazy(() => import('./components/pages/DictionaryPage').then((m) => ({ default: m.DictionaryPage })));
// CHANGED (V1/V2): the Words-hub Idioms trainer, and (V2) the Irregular-verbs tab moved into the hub.
const IdiomsPage = lazy(() => import('./components/pages/IdiomsPage').then((m) => ({ default: m.IdiomsPage })));
// CHANGED (V12): Collocations left the Idioms page for their own tab, dataset and lazy chunk.
const CollocationsPage = lazy(() =>
  import('./components/pages/CollocationsPage').then((m) => ({ default: m.CollocationsPage })),
);
const IrregularPage = lazy(() => import('./components/pages/IrregularPage').then((m) => ({ default: m.IrregularPage })));
const PracticePage = lazy(() => import('./components/pages/PracticePage').then((m) => ({ default: m.PracticePage })));
// CHANGED (R1): #/review is the real SRS trainer now (was a ComingSoon stub since S1). ComingSoon
// itself stays in use for unauthored module bodies (components/module/ModulePage.tsx).
const ReviewPage = lazy(() => import('./components/pages/ReviewPage').then((m) => ({ default: m.ReviewPage })));
// CHANGED (S3): Reading section pages.
const ReadingIndexPage = lazy(() => import('./components/pages/ReadingIndexPage').then((m) => ({ default: m.ReadingIndexPage })));
const ReadingTextPage = lazy(() => import('./components/pages/ReadingTextPage').then((m) => ({ default: m.ReadingTextPage })));

export function App() {
  const route = useRoute();
  const { t } = useLang();
  const firstRender = useRef(true);

  // Move focus to the main landmark on route change (not initial load) so keyboard and
  // screen-reader users land on the new page's content instead of staying on the old link.
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    document.getElementById('main')?.focus();
  }, [route]);

  return (
    <div className="app">
      <a
        className="skip-link"
        href="#main"
        onClick={(e) => {
          e.preventDefault();
          const el = document.getElementById('main');
          el?.focus();
          el?.scrollIntoView();
        }}
      >
        {t(ui.skipToContent)}
      </a>
      <ProgressBar />
      <TopBar />
      <div className="app-body">
        <Sidebar />
        <main className="main-col" id="main" tabIndex={-1}>
          <Suspense fallback={<div className="content" style={{ padding: '2rem', color: 'var(--tx3)' }}>Loading…</div>}>
            {route.name === 'map' && <LandscapeMap />}
            {/* CHANGED (TM1+TM2): ★ The Tense Machine. */}
            {route.name === 'tenses' && <TensesPage time={route.time} aspect={route.aspect} />}
            {route.name === 'module' && <ModulePage moduleId={route.moduleId} topicId={route.topicId} />}
            {route.name === 'definitions' && <DefinitionsPage id={route.id} />}
            {route.name === 'dictionary' && <DictionaryPage id={route.id} />}
            {route.name === 'idioms' && <IdiomsPage />}
            {route.name === 'collocations' && <CollocationsPage />}
            {route.name === 'reading' && <ReadingIndexPage />}
            {route.name === 'reading-text' && <ReadingTextPage id={route.id} />}
            {route.name === 'practice' && <PracticePage />}
            {route.name === 'review' && <ReviewPage />}
            {route.name === 'irregular' && <IrregularPage />}
          </Suspense>
          <Footer />
        </main>
      </div>
    </div>
  );
}
