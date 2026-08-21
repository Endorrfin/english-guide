import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Standard §4.7: base:'./' + hash routing + .nojekyll => works under any GitHub Pages sub-path.
// manualChunks isolates React into a stable `react-vendor` chunk.
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    target: 'es2022',
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'react-vendor';
          }
          // CHANGED (M1) — the meta-split (standard §4.4). Each big corpus gets ONE named chunk that
          // its lazy consumers SHARE (the word corpus is needed by both the Words pages and
          // #/review; without this it is duplicated or split unpredictably as routes are added).
          //
          // The generated slim indexes are deliberately EXCLUDED: `concepts.ts` (eager) imports
          // them, so pinning them into a corpus chunk would drag the whole corpus back into the
          // shell — exactly the regression this split removes. Returning undefined leaves them to
          // Rollup, which places them in the entry chunk where they belong.
          if (/\/src\/data\/(words|reading)\/index\.generated\.ts$/.test(id)) return undefined;
          if (id.includes('/src/data/words/')) return 'words';
          if (id.includes('/src/data/reading/')) return 'reading';
          if (id.includes('/src/data/idioms')) return 'idioms';
          // CHANGED (V12): collocations are their own tab now — their own chunk, so the Idioms
          // tab stops paying for them and vice versa.
          if (id.includes('/src/data/collocations')) return 'collocations';
        },
      },
    },
  },
});
