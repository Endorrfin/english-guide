// CHANGED (D1): golden tests for the pure Definitions helpers (standard §4.5/§4.6).
// Run: tsx scripts/test-definitions.ts — exits non-zero on any failure. Auto-discovered by run-tests.
import {
  ALPHABET,
  availableLetters,
  buildCloze,
  describeScaffold,
  firstLetter,
  groupByLetter,
  pickCloze,
  splitExamples,
  surfaceForms,
} from '../src/lib/definitions';
import { customWords } from '../src/data/words/custom';
import type { WordEntry } from '../src/data/types';

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

// ── alphabet + first letter ────────────────────────────────────────────────
eq(ALPHABET.length, 26, 'A–Z has 26 letters');
eq(firstLetter('apple'), 'A', 'lowercase first letter uppercased');
eq(firstLetter('  Zebra'), 'Z', 'leading space ignored');
eq(firstLetter('3D printing'), '#', 'non-alphabetic buckets under #');

// ── grouping over a tiny synthetic set ─────────────────────────────────────
const mini = [{ word: 'banana' }, { word: 'Apple' }, { word: 'apricot' }] as unknown as WordEntry[];
eq([...availableLetters(mini)].sort(), ['A', 'B'], 'available letters = {A,B}');
const grouped = groupByLetter(mini);
eq(grouped.get('A')?.map((w) => w.word), ['Apple', 'apricot'], 'A bucket alphabetized (case-insensitive)');
eq(grouped.get('B')?.map((w) => w.word), ['banana'], 'B bucket');

// ── cloze on synthetic sentences ───────────────────────────────────────────
eq(buildCloze('We can accommodate you.', ['accommodate', 'accommodates']), { masked: 'We can ____ you.', answer: 'accommodate' }, 'blank the exact form');
eq(buildCloze('She accommodates guests.', surfaceForms({ word: 'accommodate', forms: undefined } as unknown as WordEntry)), { masked: 'She ____ guests.', answer: 'accommodates' }, 'inflected -s form masked, longest-first');
ok(buildCloze('No headword here.', ['xyzzy']) === null, 'no match → null');

// ── real corpus invariants (20 D1 + 60 D2 + 60 D3 + 60 D4 + 60 D5 + 37 D6 cards) ──────────────────────────
// CHANGED (D6): custom corpus 20 → 297 (D1 20 + D2..D5 60×4 + D6 37).
ok(customWords.length === 297, `expected 297 custom cards, got ${customWords.length}`);
for (const w of customWords) {
  const { general, professional } = splitExamples(w);
  ok(general.length === 4, `${w.id}: 4 general examples`);
  eq(professional.map((e) => e.tag), ['business', 'office', 'dev'], `${w.id}: professional order business·office·dev`);

  const cloze = pickCloze(w);
  ok(cloze !== null, `${w.id}: has a clozeable example`);
  if (cloze) {
    ok(cloze.masked.includes('____'), `${w.id}: cloze masks a blank`);
    ok(cloze.answer.toLowerCase().startsWith(w.word.slice(0, 3).toLowerCase()), `${w.id}: cloze answer is an inflection of the headword`);
  }

  const sc = describeScaffold(w);
  ok(sc.taboo.includes(w.word.toLowerCase()), `${w.id}: taboo list includes the headword`);
  eq(sc.pos, w.pos, `${w.id}: scaffold carries the POS`);
}

// ── determinism ────────────────────────────────────────────────────────────
eq(pickCloze(customWords[0]), pickCloze(customWords[0]), 'pickCloze is deterministic');

if (failures > 0) {
  console.error(`\n✖ test-definitions: ${failures} failure(s).`);
  process.exit(1);
}
console.log('✓ test-definitions: all checks passed (A–Z grouping, 4+3 split, cloze, describe-it scaffold on 297 cards).');
