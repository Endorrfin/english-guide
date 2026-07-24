// CHANGED (V3): golden tests for the pure Irregular-verb helpers + the corpus invariants.
// Run: tsx scripts/test-irregular.ts — exits non-zero on any failure. Auto-discovered by run-tests.
import { acceptedForms, classify, groupByPattern, IRREGULAR_PATTERNS } from '../src/lib/irregular';
import { IRREGULAR } from '../src/data/irregular';
import type { IrregularVerb } from '../src/data/types';

let failures = 0;
function ok(cond: boolean, msg: string): void {
  if (!cond) {
    failures++;
    console.error('  ✖ ' + msg);
  }
}
function eq(actual: unknown, expected: unknown, msg: string): void {
  ok(JSON.stringify(actual) === JSON.stringify(expected), `${msg} — got ${JSON.stringify(actual)}, want ${JSON.stringify(expected)}`);
}

const LEVELS = new Set(['a1', 'a2', 'b1', 'b2', 'c1']);

// ── corpus invariants ───────────────────────────────────────────────────────
ok(IRREGULAR.length >= 50, `expected ≥50 irregular verbs, got ${IRREGULAR.length}`);
const bases = new Set<string>();
const get = (b: string): IrregularVerb => IRREGULAR.find((v) => v.base === b)!;
for (const v of IRREGULAR) {
  ok(!bases.has(v.base.toLowerCase()), `duplicate base ${v.base}`); bases.add(v.base.toLowerCase());
  ok(!!v.base.trim() && !!v.past.trim() && !!v.pastParticiple.trim(), `${v.base}: all three forms non-empty`);
  ok(v.translations.length > 0 && v.translations.every((t) => t.trim()), `${v.base}: non-empty translations`);
  ok(LEVELS.has(v.level), `${v.base}: bad level ${v.level}`);
  if (v.note) ok(!!v.note.en?.trim() && !!v.note.uk?.trim(), `${v.base}: note must be bilingual`);
}

// ── pattern classification (the four memorable shapes) ──────────────────────
eq(classify(get('cut')), 'aaa', 'cut·cut·cut → aaa');
eq(classify(get('come')), 'aba', 'come·came·come → aba');
eq(classify(get('buy')), 'abb', 'buy·bought·bought → abb');
eq(classify(get('go')), 'abc', 'go·went·gone → abc');
eq(classify(get('be')), 'abc', 'be·was/were·been → abc');
eq(classify(get('get')), 'abb', 'get·got·got/gotten → abb (slash normalized)');

// ── grouping ────────────────────────────────────────────────────────────────
const groups = groupByPattern(IRREGULAR);
ok(groups.every((g, i, a) => i === 0 || IRREGULAR_PATTERNS.indexOf(g.pattern) > IRREGULAR_PATTERNS.indexOf(a[i - 1].pattern)), 'groups in canonical pattern order');
eq(groups.reduce((n, g) => n + g.items.length, 0), IRREGULAR.length, 'groups partition the whole corpus');
for (const g of groups) {
  const bs = g.items.map((v) => v.base);
  eq([...bs].sort(), bs, `${g.pattern} bucket alphabetized by base`);
  ok(g.items.every((v) => classify(v) === g.pattern), `${g.pattern} bucket only holds ${g.pattern}`);
}

// ── accepted forms (slash variants) ─────────────────────────────────────────
eq(acceptedForms('got/gotten'), ['got', 'gotten'], 'slash form splits');
eq(acceptedForms('was/were'), ['was', 'were'], 'was/were splits');
eq(acceptedForms('went'), ['went'], 'single form stays single');

if (failures > 0) {
  console.error(`\n✖ test-irregular: ${failures} failure(s).`);
  process.exit(1);
}
console.log(`✓ test-irregular: all checks passed (pattern classify + grouping + accepted forms on ${IRREGULAR.length} verbs).`);
