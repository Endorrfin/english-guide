// CHANGED (A1): golden tests for the TokenMorph engine (src/lib/tokenMorph.ts) — the shared parser
// behind every Section V sim. Run: tsx scripts/test-token-morph.ts. Auto-discovered by run-tests.ts.
import { enteredKeys, leftKeys, parseLine, textOf } from '../src/lib/tokenMorph';

let failures = 0;
function ok(cond: boolean, msg: string): void {
  if (!cond) {
    failures++;
    console.error('  ✖ ' + msg);
  }
}

// Round-trip: text in == text out, for the shapes the sims use.
for (const s of [
  'I had my laptop repaired.',
  'If we had run the migration on staging, …',
  'If only I could come to the offsite!',
  'The CEO is said to be leaving.',
  'We didn’t run it, so it failed; nobody noticed?',
]) {
  ok(textOf(parseLine(s)) === s, `round-trip: “${s}” → “${textOf(parseLine(s))}”`);
}

// Punctuation splits into glue tokens; words keep their own tokens.
const a = parseLine('If I had time, I would help.');
ok(a.map((t) => t.w).join('|') === 'If|I|had|time|,|I|would|help|.', `tokenization: ${a.map((t) => t.w).join('|')}`);
ok(a.filter((t) => t.glue).map((t) => t.w).join('') === ',.', 'only punctuation is glue');

// Identity: lower-cased word + occurrence → the two I's are distinct, If/if would be the same.
ok(a[1].k === 'i#1' && a[5].k === 'i#2', `occurrence keys: ${a[1].k} ${a[5].k}`);
ok(parseLine('If it works')[0].k === parseLine('so if it works')[1].k, 'keys are case-insensitive');
ok(parseLine('didn’t')[0].k === parseLine("didn't")[0].k, 'keys are apostrophe-insensitive');
ok(new Set(a.map((t) => t.k)).size === a.length, 'keys are unique within a line');

// Diff: what arrives and what leaves between two frames of a real rewind.
const f1 = parseLine('I left home late, so I missed the train.');
const f3 = parseLine('If I had left home on time, I wouldn’t have missed the train.');
const inn = enteredKeys(f1, f3);
const out = leftKeys(f1, f3);
ok(inn.has('if#1') && inn.has('had#1') && inn.has('wouldn\'t#1') && inn.has('have#1'), `entered: ${[...inn].join(' ')}`);
ok(!inn.has('left#1') && !inn.has('missed#1') && !inn.has('train#1'), 'survivors are not marked as entered');
ok(out.has('late#1') && out.has('so#1'), `left: ${[...out].join(' ')}`);
ok(enteredKeys(f1, f1).size === 0 && leftKeys(f1, f1).size === 0, 'identical frames diff to nothing');

// Roles.
const r = parseLine('I had the technician|agent repair it.');
ok(r[3].w === 'technician' && r[3].role === 'agent', 'a |role suffix sets the role and is stripped');
ok(textOf(parseLine('ask the firm|agent.')) === 'ask the firm.', 'a role before punctuation keeps the punctuation');
let threw = false;
try {
  parseLine('a typo|agnet here');
} catch {
  threw = true;
}
ok(threw, 'an unknown role throws (a typo must fail loudly)');

// CHANGED (A2): ~tag pins identity — the deleted EARLIER copy leaves, the tagged one stays.
const c1 = parseLine('When I opened the logs, I~m|subj found it.');
const c2 = parseLine('Opening the logs, I~m|subj found it.');
ok(textOf(c1) === 'When I opened the logs, I found it.', `a tag is stripped from the text: ${textOf(c1)}`);
ok(c1[1].k === 'i#1' && c1[6].k === 'i~m' && c1[6].role === 'subj', `tag + role: ${c1[6].k} ${c1[6].role}`);
ok(leftKeys(c1, c2).has('i#1') && !leftKeys(c1, c2).has('i~m'), 'the subordinate I leaves, the tagged main I stays');
ok(parseLine('the logs, I~m.')[3].w === 'I' && parseLine('the logs, I~m.')[4].w === '.','a tag before punctuation keeps the punctuation');
threw = false;
try {
  parseLine('I~m and I~m');
} catch {
  threw = true;
}
ok(threw, 'a duplicate tag in one line throws');

if (failures > 0) {
  console.error(`\n✖ test-token-morph: ${failures} failure(s).`);
  process.exit(1);
}
console.log('✓ test-token-morph: round-trip, glue punctuation, case/apostrophe-insensitive occurrence keys, frame diffs, roles.');
