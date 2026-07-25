/*
 * check-data-index.ts — staleness gate for the meta-split generator (M1).
 * Run: `npm run check:index` (chained into `verify` before `check:data`).
 *
 * Regenerates the slim indexes IN MEMORY and compares them to the committed files. A words or
 * reading wave that forgets `npm run gen:index` therefore fails the gate instead of shipping a
 * footer count and a search index that silently disagree with the real corpus.
 */
import { generate, readGenerated } from './gen-data-index';

const stale: string[] = [];
for (const { path, source } of generate()) {
  const onDisk = readGenerated(path);
  const rel = path.replace(/^.*\/src\//, 'src/');
  if (onDisk === '') stale.push(`${rel} is MISSING`);
  else if (onDisk !== source) {
    // Point at the first differing line — a stale index is usually a count or one added row.
    const a = onDisk.split('\n');
    const b = source.split('\n');
    const i = a.findIndex((l, n) => l !== b[n]);
    stale.push(
      `${rel} is STALE (first difference at line ${i + 1}: on disk ${JSON.stringify(
        a[i] ?? '<eof>',
      )}, expected ${JSON.stringify(b[i] ?? '<eof>')})`,
    );
  }
}

if (stale.length) {
  console.error(`✗ check:index — ${stale.length} problem(s):`);
  for (const s of stale) console.error('  - ' + s);
  console.error('\n  Fix: npm run gen:index');
  process.exit(1);
}
console.log('✓ check:index — the generated slim indexes match the corpora.');
