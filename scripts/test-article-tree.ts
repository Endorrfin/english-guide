// CHANGED (A3): golden tests for the ★ Article Tree engine + content (m28). The core check: for every
// authored sentence, the article the ENGINE derives from the declared facts equals the article the
// AUTHOR wrote — so facts and sentences cannot drift apart. Run: tsx scripts/test-article-tree.ts.
// Auto-discovered by run-tests.ts.
import {
  AT_GROUPS, GROUP_LABEL, LEAF_LABEL, LEAF_NOTE, LEAVES, QUESTIONS, QUESTION_SHORT, QUESTION_TEXT,
  answerTokens, authoredArticle, authoredTokens, decide, diffFacts, listPairs, listScenarios, nextWord, scenariosOf,
  slotTokens, soundOf, walkOf,
} from '../src/lib/articles';
import type { AtContext, Leaf } from '../src/lib/articles';
import { parseLine, textOf } from '../src/lib/tokenMorph';
import type { Localized } from '../src/data/types';

let failures = 0;
function ok(cond: boolean, msg: string): void {
  if (!cond) {
    failures++;
    console.error('  ✖ ' + msg);
  }
}
const loc = (v: Localized | undefined, where: string) =>
  ok(!!v && !!v.en?.trim() && !!v.uk?.trim(), `bilingual value missing at ${where}`);

/** The authored sentence as a reader sees it: the ∅ marker removed. */
const plain = (src: string) => textOf(authoredTokens(src).filter((t) => t.w !== '∅'));

const reached = new Set<Leaf>();

function checkContext(ctx: AtContext, where: string): void {
  ok(!!ctx.uk.trim(), `${where}: uk required`);
  let authored;
  try {
    authored = authoredArticle(ctx.src);
  } catch (e) {
    ok(false, `${where}: ${(e as Error).message}`);
    return;
  }
  const w = walkOf(ctx);
  reached.add(w.leaf);
  // THE cross-check: facts → engine → article must equal the article in the authored sentence.
  ok(w.article === authored, `${where}: engine says “${w.article}”, the sentence has “${authored}” — “${ctx.src}”`);
  // The engine's sentence is exactly the authored one (capitalization at the start included).
  const built = textOf(answerTokens(ctx.src, w.article));
  ok(built === plain(ctx.src), `${where}: rebuilt “${built}” ≠ authored “${plain(ctx.src)}”`);
  ok(textOf(parseLine(plain(ctx.src))) === plain(ctx.src), `${where}: tokens round-trip`);
  // The slot frame has exactly one ___ where the article was, and nothing else changed.
  const slot = slotTokens(ctx.src);
  ok(slot.filter((t) => t.w === '___').length === 1, `${where}: exactly one slot`);
  ok(slot.length === authoredTokens(ctx.src).length, `${where}: the slot replaces the article, it adds nothing`);
  // The walk is a prefix of the question order and ends on the leaf's question.
  ok(
    w.path.every((s, i) => s.q === QUESTIONS[i]),
    `${where}: the walk must follow the fixed order (${w.path.map((s) => s.q).join(' → ')})`,
  );
  w.path.forEach((s, i) => {
    loc(s.why, `${where}.path[${i}].why`);
    if (i < w.path.length - 1 && s.q !== 'single') ok(!s.yes, `${where}: only the last step (or "one thing?") may answer yes`);
  });
  // a / an always agrees with the sound of the next word.
  if (w.article === 'a' || w.article === 'an')
    ok((soundOf(nextWord(ctx.src)) === 'vowel') === (w.article === 'an'), `${where}: a/an vs the sound of “${nextWord(ctx.src)}”`);
  // Uncountable nouns never take a / an.
  if (ctx.facts.count === 'mass') ok(w.article !== 'a' && w.article !== 'an', `${where}: an uncountable noun took a/an`);
  // British English differs ONLY for the AmE-not-routine words (hospital).
  const bre = walkOf(ctx, 'bre');
  if (ctx.facts.routine === 'hospital' && !ctx.facts.visitor)
    ok(w.article === 'the' && bre.article === 'zero', `${where}: AmE in the hospital / BrE in hospital`);
  else ok(bre.article === w.article, `${where}: BrE differs (${bre.article}) without a reason`);
}

for (const g of AT_GROUPS) {
  loc(GROUP_LABEL[g], `GROUP_LABEL.${g}`);
  const scs = scenariosOf(g);
  ok(scs.length >= 3, `group ${g}: at least 3 sentences, has ${scs.length}`);
  for (const sc of scs) {
    const where = `walk/${sc.id}`;
    loc(sc.title, `${where}.title`);
    checkContext(sc, where);
    if (sc.trap) {
      loc(sc.trap.why, `${where}.trap.why`);
      ok(sc.trap.wrong !== plain(sc.src), `${where}: the trap equals the sentence`);
    } else {
      // Only the variant case may go without a trap: its "trap" is the BrE chip.
      ok(walkOf(sc, 'bre').article !== walkOf(sc).article, `${where}: no trap and no BrE contrast`);
    }
  }
}
const ids = listScenarios().map((s) => s.id);
ok(new Set(ids).size === ids.length, 'walk ids unique');

for (const p of listPairs()) {
  const where = `pair/${p.id}`;
  loc(p.title, `${where}.title`);
  checkContext(p.a, `${where}.a`);
  checkContext(p.b, `${where}.b`);
  const d = diffFacts(p.a.facts, p.b.facts);
  ok(d.length >= 1 && d.length <= 2, `${where}: 1–2 facts must change, ${d.length} did (${d.join(', ')})`);
  ok(walkOf(p.a).article !== walkOf(p.b).article, `${where}: the article must flip`);
  // The noun itself survives into the second context — that is what flies.
  const noun = nextWord(p.a.src).toLowerCase();
  ok(plain(p.b.src).toLowerCase().includes(noun), `${where}: “${noun}” must appear in both contexts`);
}
ok(new Set(listPairs().map((p) => p.id)).size === listPairs().length, 'pair ids unique');

// Every leaf of the tree is reached by at least one sentence.
for (const l of LEAVES) {
  loc(LEAF_LABEL[l], `LEAF_LABEL.${l}`);
  loc(LEAF_NOTE[l], `LEAF_NOTE.${l}`);
  ok(reached.has(l), `leaf “${l}” is never reached by any sentence`);
}
for (const q of QUESTIONS) {
  loc(QUESTION_TEXT[q], `QUESTION_TEXT.${q}`);
  loc(QUESTION_SHORT[q], `QUESTION_SHORT.${q}`);
}

// a / an by sound, not spelling (British Council: an hour, a university).
const SOUND: [string, 'vowel' | 'consonant'][] = [
  ['hour', 'vowel'], ['honest', 'vowel'], ['university', 'consonant'], ['user', 'consonant'], ['European', 'consonant'],
  ['update', 'vowel'], ['estimate', 'vowel'], ['MVP', 'vowel'], ['SLA', 'vowel'], ['API', 'vowel'], ['URL', 'consonant'],
  ['UX', 'consonant'], ['PR', 'consonant'], ['one', 'consonant'], ['bug', 'consonant'],
];
for (const [word, s] of SOUND) ok(soundOf(word) === s, `soundOf(${word}) should be ${s}`);

// Textbook probes (British Council / Cambridge).
const probe = (f: Parameters<typeof decide>[0], next = 'x') => decide(f, next).article;
ok(probe({ name: 'river', count: 'one' }) === 'the', 'rivers take the (the Amazon)');
ok(probe({ name: 'range', count: 'many' }) === 'the', 'ranges take the (the Alps)');
ok(probe({ name: 'lake', count: 'one' }) === 'zero', 'single lakes take nothing (Lake Victoria)');
ok(probe({ name: 'mountain', count: 'one' }) === 'zero', 'single mountains take nothing (Mount Everest)');
ok(probe({ name: 'country', count: 'one' }) === 'zero', 'most countries take nothing (Ukraine, never the Ukraine)');
ok(probe({ name: 'united', count: 'one' }) === 'the', 'United names take the');
ok(probe({ name: 'of-name', count: 'one' }) === 'the', 'of-names take the (the University of Tokyo)');
ok(probe({ name: 'university', count: 'one' }) === 'zero', 'universities without of take nothing (Harvard University)');
ok(probe({ routine: 'bed', count: 'one' }) === 'zero', 'go to bed');
ok(probe({ routine: 'school', visitor: true, known: 'shared', count: 'one' }) === 'the', 'a visitor goes to the school');
ok(probe({ count: 'many', known: 'defined' }) === 'the', 'a defined plural takes the');
ok(probe({ count: 'one' }, 'hour') === 'an', 'an hour');
ok(probe({ count: 'one' }, 'user') === 'a', 'a user');
ok(decide({ routine: 'hospital', known: 'shared', count: 'one' }, 'x', 'bre').article === 'zero', 'BrE: in hospital');
// The order matters: a routine phrase or a name settles it before "which one?" is asked.
ok(probe({ routine: 'prison', known: 'shared', count: 'one' }) === 'zero', 'routine beats "known"');
ok(probe({ name: 'river', known: 'mentioned', count: 'one' }) === 'the', 'a name is decided by its class');
ok(probe({ name: 'lake', known: 'mentioned', count: 'one' }) === 'zero', 'a lake stays bare even when mentioned before');
// Unmarked data fails loudly.
let threw = false;
try {
  authoredArticle('The bug crashes the app.');
} catch {
  threw = true;
}
ok(threw, 'a sentence without |art throws');

if (failures > 0) {
  console.error(`\n✖ test-article-tree: ${failures} failure(s).`);
  process.exit(1);
}
console.log(
  `✓ test-article-tree: ${listScenarios().length} sentences + ${listPairs().length} pairs; the engine's article equals the authored one everywhere, all ${LEAVES.length} leaves reached, a/an by sound, AmE/BrE split only for hospital.`,
);
