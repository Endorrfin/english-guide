// CHANGED (S1): golden tests for the pure exercise engine (standard §4.5/§4.6).
// Run: tsx scripts/test-exercise.ts — exits non-zero on any failure.
import { canonical, checkGap, checkMcq, gapParts, normalize } from '../src/lib/exercise';

let failures = 0;
function ok(cond: boolean, msg: string): void {
  if (!cond) {
    failures++;
    console.error('  ✖ ' + msg);
  }
}
function eq(actual: unknown, expected: unknown, msg: string): void {
  ok(
    JSON.stringify(actual) === JSON.stringify(expected),
    `${msg} — got ${JSON.stringify(actual)}, want ${JSON.stringify(expected)}`,
  );
}

// ── normalize ──────────────────────────────────────────────────────────────
eq(normalize('  Must   NOT  '), 'must not', 'trim + collapse + lowercase');
eq(normalize('mustn’t.'), "mustn't", 'typographic apostrophe + trailing period');
eq(normalize('will not!?'), 'will not', 'terminal punctuation stripped');

// ── canonical: contraction equivalence classes ─────────────────────────────
eq(canonical("mustn't"), 'must not', "mustn't expands");
eq(canonical('must not'), 'must not', 'expanded form is already canonical');
eq(canonical("won't"), 'will not', "won't expands");
eq(canonical("can't"), 'cannot', "can't → cannot");
eq(canonical('can not'), 'cannot', 'can not folds into cannot');
eq(canonical('cannot'), 'cannot', 'cannot stays');
eq(canonical("Shan't"), 'shall not', "shan't expands (case-insensitive)");
eq(canonical("needn't"), 'need not', "needn't expands");
eq(canonical("oughtn't"), 'ought not', "oughtn't expands");
eq(canonical("doesn't have to"), 'does not have to', 'aux contraction inside a phrase');
// Unambiguous clitics expand:
eq(canonical("I'll"), 'i will', "'ll → will");
eq(canonical("should've done"), 'should have done', "'ve → have");
eq(canonical("you're"), 'you are', "'re → are");
eq(canonical("I'm able to"), 'i am able to', "'m → am");
eq(canonical("you'd better go"), 'you had better go', "'d better → had better");
// Ambiguous clitics must NOT be guessed:
eq(canonical("she's"), "she's", "'s is never expanded (is/has/possessive ambiguity)");
eq(canonical("i'd"), "i'd", "bare 'd is never expanded (would/had ambiguity)");

// ── checkGap ───────────────────────────────────────────────────────────────
ok(checkGap("mustn't", ['must not']), "user types mustn't, author listed must not");
ok(checkGap('must not', ["mustn't"]), 'user types must not, author listed the contraction');
ok(checkGap('  CANNOT ', ["can't"]), 'cannot matches can\'t (case/space robust)');
ok(checkGap('can not', ["can't"]), "can not matches can't");
ok(checkGap('won’t', ['will not']), 'typographic apostrophe input');
ok(checkGap("don't have to", ['do not have to']), 'do-aux equivalence');
ok(!checkGap('must', ['must not']), 'partial answer is wrong');
ok(!checkGap('should not', ['must not']), 'a different modal is wrong');
ok(!checkGap("doesn't have to", ["don't have to"]), '3rd-person form is NOT equal to base form');
ok(!checkGap('', ['must']), 'empty input is wrong');
ok(!checkGap('   ', ['must']), 'whitespace-only input is wrong');
ok(checkGap('Have to', ['have to', 'has to']), 'multiple accepted answers');

// ── checkMcq ───────────────────────────────────────────────────────────────
ok(checkMcq(2, 2), 'mcq correct index');
ok(!checkMcq(1, 2), 'mcq wrong index');
ok(!checkMcq(NaN, 2), 'mcq NaN rejected');

// ── gapParts ───────────────────────────────────────────────────────────────
eq(gapParts('You ___ smoke here.'), { before: 'You ', after: ' smoke here.' }, 'basic split');
eq(gapParts('___ I open the window?'), { before: '', after: ' I open the window?' }, 'blank first');
eq(gapParts('No blank at all'), { before: 'No blank at all', after: '' }, 'no blank fallback');

if (failures > 0) {
  console.error(`\n✖ test-exercise: ${failures} failure(s).`);
  process.exit(1);
}
console.log('✓ test-exercise: all checks passed (normalization, contraction equivalence, gap/MCQ verdicts).');
