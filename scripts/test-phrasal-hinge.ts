// CHANGED (VA2): golden tests for the ★ Particle Hinge engine + content (m32). The engine knows a verb's
// declared class and computes the rest: for every authored cell, arrange() == the authored sentence and
// diagnose(authored tokens) == placement(class, computed object kind, position). Each walk ends on a
// correct sentence; each trap has exactly its one issue and a clean fix. Every link from m32 / m33 and
// every sim verb points at a real card in the Words hub.
// Run: tsx scripts/test-phrasal-hinge.ts. Auto-discovered by run-tests.ts.
import {
  CLASS_LABEL, CLASS_RULE, ISSUE_TEXT, KIND_LABEL, LONG_WORDS, OBJECT_KINDS, OK_TEXT, POSITION_LABEL, VERB_CLASSES,
  WITH_OBJECT_LABEL, arrange, cellKey, diagnose, frameOf, listSenses, listTraps, objectKindOf, placement, positionOf, sensesOf, statusOfIssue, tokensOf, walk,
} from '../src/lib/phrasalVerbs';
import type { ObjectKind, Position, Status, VerbClass } from '../src/lib/phrasalVerbs';
import { textOf } from '../src/lib/tokenMorph';
import { IDIOMS } from '../src/data/idioms';
import { COLLOCATIONS } from '../src/data/collocations';
import { m32 } from '../src/data/modules/m32-phrasal-verbs-system';
import { m33 } from '../src/data/modules/m33-collocations';
import type { Localized } from '../src/data/types';

let failures = 0;
function ok(cond: boolean, msg: string): void {
  if (!cond) {
    failures++;
    console.error('  ✖ ' + msg);
  }
}
function eq<T>(a: T, b: T, msg: string): void {
  ok(a === b, `${msg}: got "${String(a)}", want "${String(b)}"`);
}
const loc = (v: Localized | undefined, where: string) =>
  ok(!!v && !!v.en?.trim() && !!v.uk?.trim(), `bilingual value missing at ${where}`);

// ── the rule, stated as a table (the owner's spec + BC / Cambridge) ─────────
const RULE: [VerbClass, ObjectKind, 'split' | 'after', Status][] = [
  ['separable', 'pronoun', 'split', 'ok'],
  ['separable', 'pronoun', 'after', 'wrong'],
  ['separable', 'noun', 'split', 'ok'],
  ['separable', 'noun', 'after', 'ok'],
  ['separable', 'long', 'split', 'awkward'],
  ['separable', 'long', 'after', 'ok'],
  ['inseparable', 'pronoun', 'split', 'wrong'],
  ['inseparable', 'pronoun', 'after', 'ok'],
  ['inseparable', 'noun', 'split', 'wrong'],
  ['inseparable', 'noun', 'after', 'ok'],
  ['inseparable', 'long', 'split', 'wrong'],
  ['three-part', 'pronoun', 'split', 'wrong'],
  ['three-part', 'pronoun', 'after', 'ok'],
  ['three-part', 'noun', 'after', 'ok'],
];
for (const [c, k, p, want] of RULE) eq(placement(c, k, p).status, want, `placement ${c} + ${k} + ${p}`);
eq(placement('intransitive', null, 'bare').status, 'ok', 'intransitive bare');
eq(placement('intransitive', 'pronoun', 'split').status, 'wrong', 'intransitive + object');

// ── object kind, computed from the words ────────────────────────────────────
const KIND_PROBES: [string, ObjectKind][] = [
  ['it', 'pronoun'], ['them', 'pronoun'], ['me', 'pronoun'], ['the lights', 'noun'], ['her jacket', 'noun'],
  ['disk', 'noun'], ['this old server', 'noun'], ['the release from last week', 'long'], ['all the lights in the building', 'long'],
];
for (const [w, k] of KIND_PROBES) eq(objectKindOf(w), k, `objectKindOf("${w}")`);
ok(LONG_WORDS === 5, 'BC: "more than four or five words"');

// ── every authored cell ─────────────────────────────────────────────────────
const senses = listSenses();
const hubIds = new Set(IDIOMS.map((x) => x.id));
const seen = new Set<string>();
for (const c of VERB_CLASSES) {
  loc(CLASS_LABEL[c], `CLASS_LABEL.${c}`);
  loc(CLASS_RULE[c], `CLASS_RULE.${c}`);
  ok(sensesOf(c).length >= 2, `class ${c} needs at least 2 senses`);
}
for (const k of OBJECT_KINDS) loc(KIND_LABEL[k], `KIND_LABEL.${k}`);
for (const p of ['split', 'after', 'bare'] as const) {
  loc(POSITION_LABEL[p], `POSITION_LABEL.${p}`);
  loc(OK_TEXT[p], `OK_TEXT.${p}`);
}
for (const v of Object.values(ISSUE_TEXT)) loc(v, 'ISSUE_TEXT');
loc(WITH_OBJECT_LABEL, 'WITH_OBJECT_LABEL');

let cells = 0;
for (const s of senses) {
  ok(!seen.has(s.id), `duplicate sense ${s.id}`);
  seen.add(s.id);
  ok(hubIds.has(s.hub), `${s.id}: no card "${s.hub}" in the Words hub`);
  ok(IDIOMS.find((x) => x.id === s.hub)?.kind === 'phrasal', `${s.id}: hub card "${s.hub}" is not a phrasal verb`);
  loc(s.gloss, `${s.id}.gloss`);
  const kinds: readonly ObjectKind[] = s.cls === 'intransitive' ? ['pronoun'] : OBJECT_KINDS;
  for (const k of kinds) {
    if (s.cls !== 'intransitive') {
      eq(objectKindOf(s.objects![k]), k, `${s.id}: the "${k}" object is computed as another kind`);
      ok(!!s.uk[k]?.trim(), `${s.id}: no Ukrainian for ${k}`);
    }
    const ws = walk(s.cls, k);
    eq(ws.length, 2, `${s.id}/${k}: walk length`);
    const lastPos = ws[ws.length - 1];
    eq(placement(s.cls, k, lastPos).status, 'ok', `${s.id}/${k}: the walk must end on a correct sentence`);
    for (const p of ws) {
      cells++;
      const toks = frameOf(s, k, p);
      // 1) word order: the engine's arrangement == the authored sentence.
      eq(textOf(toks), arrange(s, k, p), `${s.id}/${k}/${p}: engine != authored`);
      // 2) verdict read from the tokens == the rule.
      const want = placement(s.cls, k, p);
      const issues = diagnose(toks, s.cls);
      eq(statusOfIssue(issues), want.status, `${s.id}/${k}/${p}: diagnosis status`);
      eq(issues[0], want.issue, `${s.id}/${k}/${p}: diagnosis issue`);
      // The scene's text describes the sentence shown (browser pass: a trap's fix once said "follows the particle").
      eq(positionOf(toks), p, `${s.id}/${k}/${p}: position read from the tokens`);
      ok(new Set(toks.map((t) => t.k)).size === toks.length, `${s.id}/${k}/${p}: token keys must be unique`);
    }
    // 3) the same words survive the swing (a word that flies is the same word).
    const [a, b] = ws.map((p) => frameOf(s, k, p).filter((t) => !t.glue).map((t) => t.k).sort().join(' '));
    if (s.cls !== 'intransitive') eq(a, b, `${s.id}/${k}: the two frames must hold the same words`);
  }
  if (s.cls === 'intransitive') {
    ok(!!s.uk.bare?.trim(), `${s.id}: no Ukrainian for the bare sentence`);
    eq(cellKey(s.cls, 'pronoun', 'bare'), 'bare', `${s.id}: bare cell`);
  }
}
ok(cells >= 60, `expected ≥ 60 authored cells, got ${cells}`);

// Same verb, different class per SENSE: the class belongs to the meaning.
for (const hub of ['take-off', 'break-down']) {
  const classes = new Set(senses.filter((s) => s.hub === hub).map((s) => s.cls));
  ok(classes.has('separable') && classes.has('intransitive'), `${hub}: must show both a separable and an intransitive sense`);
}

// ── traps: exactly one issue, and a clean fix ───────────────────────────────
const issuesCovered = new Set<string>();
for (const tr of listTraps()) {
  const wrong = diagnose(tokensOf(tr.wrong), tr.cls);
  eq(wrong.length, 1, `trap ${tr.id}: exactly one issue`);
  eq(wrong[0], tr.expect, `trap ${tr.id}: issue`);
  issuesCovered.add(wrong[0]);
  eq(diagnose(tokensOf(tr.right), tr.cls).length, 0, `trap ${tr.id}: the fix must be clean`);
  eq(positionOf(tokensOf(tr.right)), tr.cls === 'separable' && tr.expect === 'pronoun-after' ? 'split' : tr.cls === 'intransitive' ? 'bare' : 'after', `trap ${tr.id}: where the fix puts the object`);
  ok(hubIds.has(tr.hub), `trap ${tr.id}: no card "${tr.hub}" in the Words hub`);
  ok(!!tr.uk.trim() && !!tr.label.trim(), `trap ${tr.id}: label + Ukrainian`);
}
for (const i of Object.keys(ISSUE_TEXT)) ok(issuesCovered.has(i), `no trap exercises the issue "${i}"`);

// ── thrown facts ────────────────────────────────────────────────────────────
const throws = (f: () => unknown, msg: string) => {
  try {
    f();
    ok(false, `${msg}: expected a throw`);
  } catch {
    /* expected */
  }
};
throws(() => placement('separable', 'noun', 'bare' as Position), 'a separable verb cannot be bare');
throws(() => placement('separable', null, 'after'), 'a transitive verb needs an object kind');
throws(() => diagnose(tokensOf('She left.'), 'separable'), 'a line without a particle');
throws(() => diagnose(tokensOf('Turn|verb the|obj off|ptcl lights|obj.'), 'separable'), 'an object split in two');

// ── every hub link in the two modules resolves ──────────────────────────────
const colIds = new Set(COLLOCATIONS.map((x) => x.id));
const bodyOf = JSON.stringify([m32, m33]);
let links = 0;
for (const m of bodyOf.matchAll(/#\/(idioms|collocations)\/([a-z0-9-]+)/g)) {
  links++;
  ok((m[1] === 'idioms' ? hubIds : colIds).has(m[2]), `dead hub link: ${m[0]}`);
}
ok(links >= 25, `expected the modules to link the hub cards (≥ 25 links), got ${links}`);

if (failures > 0) {
  console.error(`— phrasal hinge — ${failures} failure(s)`);
  process.exit(1);
}
console.log(`— phrasal hinge — OK: ${senses.length} senses · ${cells} cells (engine == authored, verdict == rule) · ${listTraps().length} traps · ${links} hub links`);
