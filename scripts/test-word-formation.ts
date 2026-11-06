// CHANGED (VA1): golden tests for the ★ Word Formation Lab engine + content (m31). The core check: for
// every step of every scenario, the word the ENGINE assembles from the declared facts equals the word
// the AUTHOR wrote — so facts and spellings cannot drift apart. Plus the spelling rules as probes, the
// computed BrE variants, and the trap diagnosis (exactly one misspelling model explains each trap, and
// it is the one the author expects). Run: tsx scripts/test-word-formation.ts. Auto-discovered by run-tests.ts.
import {
  GROUP_LABEL, POS_LABEL, RULE_SHORT, RULE_TEXT, WF_GROUPS, alignTokens, build, buildsOf, diagText, diagnose, endsCVC,
  framesOf, listBuilds, listFamilies, listTraps, syllables,
} from '../src/lib/wordFormation';
import type { RootFacts, RuleId, WfStep } from '../src/lib/wordFormation';
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
const word = (root: string, steps: WfStep[], rootFacts?: RootFacts, variant: 'ame' | 'bre' = 'ame') => build({ root, steps, rootFacts }, variant).word;
const rulesOf = (root: string, steps: WfStep[]): RuleId[] => build({ root, steps }).steps.flatMap((s) => s.changes.map((c) => c.rule));

// ── 1. authored == assembled ─────────────────────────────────────────────
const ids = new Set<string>();
for (const b of listBuilds()) {
  const where = `build ${b.id}`;
  ok(!ids.has(b.id), `${where}: duplicate id`);
  ids.add(b.id);
  loc(b.title, `${where}.title`);
  ok(b.forms.length === b.steps.length, `${where}: one authored form per step`);
  ok(b.uk.length === b.steps.length + 1 && b.uk.every((u) => u.trim()), `${where}: a UA gloss for the root and every form`);
  let built;
  try {
    built = build(b);
  } catch (e) {
    ok(false, `${where}: ${(e as Error).message}`);
    continue;
  }
  built.steps.forEach((s, i) => ok(s.word === b.forms[i], `${where}: step ${i + 1} — engine “${s.word}” ≠ authored “${b.forms[i]}”`));
  // Frames: root + 2 per step; the weld frames spell the forms; the parts frames carry exactly one seam.
  const frames = framesOf(`t:${b.id}`, b, b.uk);
  ok(frames.length === 1 + 2 * b.steps.length, `${where}: frame count`);
  ok(frames[0].word === b.root, `${where}: frame 0 is the root`);
  b.steps.forEach((_, i) => {
    ok(frames[2 + 2 * i].tokens.map((t) => t.w).join('') === b.forms[i], `${where}: weld frame ${i + 1} spells the form`);
    ok(frames[1 + 2 * i].tokens.filter((t) => t.role === 'seam').length === 1, `${where}: parts frame ${i + 1} has one seam`);
    ok(frames[2 + 2 * i].tokens.every((t) => t.role !== 'seam'), `${where}: weld frame ${i + 1} has no seam`);
  });
  // Keys are unique inside every frame (TokenMorph identity).
  for (const f of frames) ok(new Set(f.tokens.map((t) => t.k)).size === f.tokens.length, `${where}: duplicate letter key in “${f.word}”`);
  ok(framesOf(`t:${b.id}`, b, b.uk) === frames, `${where}: frames are cached (referentially stable)`);
}
for (const g of WF_GROUPS) {
  loc(GROUP_LABEL[g], `GROUP_LABEL.${g}`);
  ok(buildsOf(g).length >= 4, `group ${g} has ≥4 builds`);
}

for (const f of listFamilies()) {
  loc(f.title, `family ${f.id}`);
  ok(f.members.length >= 4, `family ${f.id}: ≥4 members`);
  ok(new Set(f.members.map((m) => m.form)).size === f.members.length, `family ${f.id}: distinct forms`);
  for (const m of f.members) {
    const got = build({ root: f.root, rootFacts: f.rootFacts, steps: m.steps }).word;
    ok(got === m.form, `family ${f.id}: ${m.pos} — engine “${got}” ≠ authored “${m.form}”`);
    ok(!!m.uk.trim(), `family ${f.id}.${m.form}: uk gloss`);
  }
}

// ── 2. traps: exactly one diagnosis, the one the author expects ─────────
for (const t of listTraps()) {
  const where = `trap ${t.id}`;
  loc(t.title, `${where}.title`);
  loc(t.why, `${where}.why`);
  const right = build(t).word;
  ok(right === t.form, `${where}: engine “${right}” ≠ authored “${t.form}”`);
  ok(t.wrong !== t.form, `${where}: the trap must differ from the correct form`);
  const d = diagnose(t);
  ok(d.length === 1, `${where}: exactly one diagnosis, got [${d.join(', ')}]`);
  ok(d[0] === t.expect, `${where}: engine diagnoses “${d[0]}”, author expects “${t.expect}”`);
  if (d[0]) loc(diagText(d[0], t), `${where}.diagText`);
  const a = alignTokens(t.wrong, build(t).steps.at(-1)!.after);
  ok(a.wrong.map((x) => x.w).join('') === t.wrong && a.right.map((x) => x.w).join('') === t.form, `${where}: alignment round-trips`);
  ok(new Set(a.wrong.map((x) => x.k)).size === a.wrong.length, `${where}: unique keys in the wrong frame`);
}

// ── 3. rule probes (Cambridge Suffixes / Prefixes + the standard learner rules) ─────────
const probes: [string, WfStep[], string, RootFacts?][] = [
  ['make', [{ suffix: 'ing' }], 'making'],
  ['see', [{ suffix: 'ing' }], 'seeing'],
  ['agree', [{ suffix: 'ed' }], 'agreed'],
  ['agree', [{ suffix: 'able' }], 'agreeable'],
  ['agree', [{ suffix: 'ment' }], 'agreement'],
  ['hope', [{ suffix: 'ed' }], 'hoped'],
  ['hope', [{ suffix: 'ful' }], 'hopeful'],
  ['manage', [{ suffix: 'ment' }], 'management'],
  ['notice', [{ suffix: 'able' }], 'noticeable'],
  ['courage', [{ suffix: 'ous' }], 'courageous'],
  ['change', [{ suffix: 'ing' }], 'changing'],
  ['stop', [{ suffix: 'ing' }], 'stopping'],
  ['big', [{ suffix: 'er' }], 'bigger'],
  ['quit', [{ suffix: 'ing' }], 'quitting'],
  ['fix', [{ suffix: 'ing' }], 'fixing'],
  ['play', [{ suffix: 'er' }], 'player'],
  ['rain', [{ suffix: 'ing' }], 'raining'],
  ['begin', [{ suffix: 'er', stress: 'final' }], 'beginner'],
  ['prefer', [{ suffix: 'ed', stress: 'final' }], 'preferred'],
  ['prefer', [{ suffix: 'ence', stress: 'early' }], 'preference'],
  ['open', [{ suffix: 'ed', stress: 'early' }], 'opened'],
  ['commit', [{ suffix: 'ment' }], 'commitment'],
  ['happy', [{ suffix: 'ly' }], 'happily'],
  ['study', [{ suffix: 'ing' }], 'studying'],
  ['study', [{ suffix: 'ed' }], 'studied'],
  ['busy', [{ suffix: 'ness' }], 'business'],
  ['lie', [{ suffix: 'ing' }], 'lying'],
  ['simple', [{ suffix: 'ly' }], 'simply'],
  ['able', [{ suffix: 'ity' }], 'ability'],
  ['careful', [{ suffix: 'ly' }], 'carefully'],
  ['sudden', [{ suffix: 'ness' }], 'suddenness'],
  ['write', [{ suffix: 'ing' }], 'writing'],
  ['mature', [{ prefix: 'in' }], 'immature'],
  ['balance', [{ prefix: 'in' }], 'imbalance'],
  ['logical', [{ prefix: 'in' }], 'illogical'],
  ['relevant', [{ prefix: 'in' }], 'irrelevant'],
  ['accurate', [{ prefix: 'in' }], 'inaccurate'],
  ['real', [{ prefix: 'un' }], 'unreal'],
  ['likely', [{ prefix: 'un' }], 'unlikely'],
  ['spell', [{ prefix: 'mis' }], 'misspell'],
  ['understand', [{ prefix: 'mis' }], 'misunderstand'],
];
for (const [root, steps, want, facts] of probes) {
  let got: string;
  try {
    got = word(root, steps, facts);
  } catch (e) {
    got = `throws: ${(e as Error).message}`;
  }
  ok(got === want, `probe ${root} + ${steps.map((s) => s.prefix ?? s.suffix).join('/')}: “${got}” ≠ “${want}”`);
}
// un- never assimilates (the rule belongs to in- only).
ok(word('real', [{ prefix: 'un' }]) === 'unreal' && !rulesOf('real', [{ prefix: 'un' }]).includes('assimilate'), 'un- never assimilates');
ok(rulesOf('legal', [{ prefix: 'in' }]).join() === 'assimilate,seam', 'in + legal = assimilate, then a seam double');
ok(rulesOf('write', [{ suffix: 'ing' }]).join() === 'drop-e', 'write + ing: the e drops and nothing doubles');
// Declared facts are enforced.
let threw = false;
try {
  word('visit', [{ suffix: 'ing' }]);
} catch {
  threw = true;
}
ok(threw, 'a multi-syllable CVC base without a stress fact throws');
threw = false;
try {
  word('possible', [{ prefix: 'im' }]);
} catch {
  threw = true;
}
ok(threw, 'declaring im- instead of in- throws (the engine assimilates)');
ok(endsCVC('quit') && endsCVC('begin') && !endsCVC('rain') && !endsCVC('fix') && !endsCVC('play'), 'endsCVC');
ok(syllables('begin') === 2 && syllables('stop') === 1 && syllables('quit') === 1, 'syllables');

// ── 4. British English, computed ─────────────────────────────────────────
const bre: [string, WfStep[], string, string, RootFacts?][] = [
  ['travel', [{ suffix: 'ed', stress: 'early' }], 'traveled', 'travelled'],
  ['cancel', [{ suffix: 'ing', stress: 'early' }], 'canceling', 'cancelling'],
  ['travel', [{ suffix: 'er', stress: 'early' }], 'traveler', 'traveller'],
  ['control', [{ suffix: 'ed', stress: 'final' }], 'controlled', 'controlled'],
  ['visit', [{ suffix: 'ed', stress: 'early' }], 'visited', 'visited'],
  ['organize', [{ suffix: 'ation' }], 'organization', 'organisation', { ize: true }],
  ['realize', [{ suffix: 'ed' }], 'realized', 'realised', { ize: true }],
  ['size', [{ suffix: 'able' }], 'sizable', 'sizable'],
  ['modern', [{ suffix: 'ize' }], 'modernize', 'modernise'],
  ['color', [{ suffix: 'ful' }], 'colorful', 'colourful', { our: true }],
  ['behavior', [{ suffix: 'al' }], 'behavioral', 'behavioural', { our: true }],
  ['humor', [{ suffix: 'ous', stress: 'early' }], 'humorous', 'humorous', { our: true }],
  ['honor', [{ suffix: 'ary', stress: 'early' }], 'honorary', 'honorary', { our: true }],
];
for (const [root, steps, am, br, facts] of bre) {
  ok(word(root, steps, facts) === am, `AmE ${root}: “${word(root, steps, facts)}” ≠ “${am}”`);
  ok(word(root, steps, facts, 'bre') === br, `BrE ${root}: “${word(root, steps, facts, 'bre')}” ≠ “${br}”`);
}
// Prefix scenarios never differ between AmE and BrE.
for (const b of buildsOf('prefix')) ok(build(b, 'bre').word === build(b).word, `prefix ${b.id}: no BrE difference`);
// Every variant-group build is either different in BrE or the deliberate “same” contrast (control / humor).
ok(buildsOf('variant').filter((b) => build(b, 'bre').word !== build(b).word).length >= 3, '≥3 variant builds differ in BrE');

// ── 5. labels ────────────────────────────────────────────────────────────
for (const [k, v] of Object.entries(RULE_SHORT)) loc(v, `RULE_SHORT.${k}`);
for (const [k, v] of Object.entries(RULE_TEXT)) loc(v, `RULE_TEXT.${k}`);
for (const [k, v] of Object.entries(POS_LABEL)) loc(v, `POS_LABEL.${k}`);

console.log(failures === 0 ? '✓ word-formation: all checks passed' : `✖ word-formation: ${failures} failure(s)`);
process.exit(failures === 0 ? 0 : 1);
