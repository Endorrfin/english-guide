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
const DictionaryPage = lazy(() => import('./components/pages/DictionaryPage').then((m) => ({ default: m.DictionaryPage })));
const PracticePage = lazy(() => import('./components/pages/PracticePage').then((m) => ({ default: m.PracticePage })));
const ComingSoon = lazy(() => import('./components/pages/ComingSoon').then((m) => ({ default: m.ComingSoon })));

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
            {route.name === 'module' && <ModulePage moduleId={route.moduleId} topicId={route.topicId} />}
            {route.name === 'dictionary' && <DictionaryPage id={route.id} />}
            {route.name === 'practice' && <PracticePage />}
            {route.name === 'review' && (
              <div className="content">
                <h1>{t(ui.review)}</h1>
                <ComingSoon note={ui.reviewSoonNote} />
              </div>
            )}
            {route.name === 'irregular' && (
              <div className="content">
                <h1>{t(ui.irregularVerbs)}</h1>
                <ComingSoon note={ui.irregularSoonNote} />
              </div>
            )}
          </Suspense>
          <Footer />
        </main>
      </div>
    </div>
  );
}
