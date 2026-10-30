// CHANGED (A3): golden tests for the ★ Connector Bridge engine + content (m30). Every bridge frame keeps
// ONE meaning while the linker's class changes — and each class has its own shape: coordinator after
// a comma · subordinator fronted, comma after its clause · linking adverb after . or ; with a comma ·
// preposition + noun / -ing with ONE finite verb left. The diagnosis is computed: every bridge frame
// is clean; every trap's error frame raises exactly its issue and both fixes are clean.
// Run: tsx scripts/test-connector-bridge.ts. Auto-discovered by run-tests.ts.
import {
  CB_TRACKS, CLASS_LABEL, CLASS_RULE, CLASS_SHORT, ISSUE_TEXT, LEXICON, RELATIONS, RELATION_CLASSES, RELATION_LABEL, TRAP_KINDS, TRAP_LABEL,
  clauseCount, diagnose, kindsOf, linkersOf, listScenarios, scenariosOf, tokensOf,
} from '../src/lib/connectors';
import type { ConnClass, Issue } from '../src/lib/connectors';
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

/** Count sentence breaks INSIDE the line (a full stop or semicolon that is not the last token). */
const innerBreaks = (s: string) => (s.slice(0, -1).match(/[.;] /g) ?? []).length;

const SHAPE: Record<ConnClass, (s: string, toks: ReturnType<typeof tokensOf>) => string | null> = {
  coord: (s, toks) => {
    const l = linkersOf(toks)[0];
    if (toks[l.start - 1]?.w !== ',') return 'a coordinator follows a comma';
    if (innerBreaks(s) !== 0) return 'a coordinator keeps ONE sentence';
    return null;
  },
  sub: (s, toks) => {
    const l = linkersOf(toks)[0];
    if (l.start !== 0) return 'the subordinate clause is fronted in these frames';
    const comma = toks.findIndex((t) => t.w === ',');
    const v1 = toks.findIndex((t) => t.role === 'verb');
    if (!(comma > v1 && v1 > 0)) return 'a comma closes the fronted clause after its verb';
    if (innerBreaks(s) !== 0) return 'a subordinator keeps ONE sentence';
    return null;
  },
  adverb: (s, toks) => {
    const l = linkersOf(toks)[0];
    const before = toks[l.start - 1]?.w;
    if (before !== '.' && before !== ';') return 'a linking adverb follows a full stop or a semicolon';
    if (toks[l.end + 1]?.w !== ',') return 'a comma follows the linking adverb';
    if (innerBreaks(s) !== 1) return 'exactly one break before the adverb';
    return null;
  },
  prep: (s, toks) => {
    const l = linkersOf(toks)[0];
    if (l.start !== 0) return 'the prepositional phrase is fronted in these frames';
    const comma = toks.findIndex((t) => t.w === ',');
    if (toks.slice(0, comma).some((t) => t.role === 'verb')) return 'no finite verb before the comma';
    if (innerBreaks(s) !== 0) return 'one sentence';
    return null;
  },
};

for (const r of RELATIONS) {
  loc(RELATION_LABEL[r], `RELATION_LABEL.${r}`);
  const scs = scenariosOf('bridge', r);
  ok(scs.length >= 1, `bridge/${r}: at least one scenario`);
  for (const sc of scs) {
    const where = `bridge/${sc.id}`;
    loc(sc.title, `${where}.title`);
    const kinds = RELATION_CLASSES[r];
    ok(sc.frames.length === kinds.length, `${where}: one frame per class (${kinds.length}), has ${sc.frames.length}`);
    sc.frames.forEach((fr, i) => {
      const cls = kinds[i];
      const at = `${where}#${i} (${cls})`;
      const toks = tokensOf(fr);
      const s = textOf(toks);
      ok(!!fr.uk.trim(), `${at}: uk required`);
      ok(textOf(parseLine(s)) === s, `${at}: tokens round-trip`);
      ok(s.endsWith('.'), `${at}: ends with a full stop`);
      const ls = linkersOf(toks);
      ok(ls.length === 1, `${at}: exactly one linker, has ${ls.length}`);
      if (ls.length !== 1) return;
      // The class and the meaning come from the LEXICON, never from the frame.
      ok(ls[0].cls === cls, `${at}: “${ls[0].text}” is a ${ls[0].cls}, the frame should show a ${cls}`);
      ok(ls[0].rel === r, `${at}: “${ls[0].text}” means ${ls[0].rel}, the scenario is about ${r}`);
      ok(clauseCount(toks) === (cls === 'prep' ? 1 : 2), `${at}: ${clauseCount(toks)} finite verbs (a preposition leaves 1, the rest join 2)`);
      const bad = SHAPE[cls](s, toks);
      ok(!bad, `${at}: ${bad} — “${s}”`);
      ok(diagnose(toks).length === 0, `${at}: the diagnosis must be clean, got ${diagnose(toks).join(', ')}`);
    });
    // The second clause's finite verb is the same in every frame — the meaning does not move.
    const lastVerb = (i: number) => tokensOf(sc.frames[i]).filter((t) => t.role === 'verb').pop()?.w;
    for (let i = 1; i < sc.frames.length; i++) ok(lastVerb(i) === lastVerb(0), `${where}#${i}: the main verb changed (${lastVerb(i)} vs ${lastVerb(0)})`);
  }
}

// Traps: the error frame raises exactly its issue; both fixes are clean.
const EXPECT: Record<string, Issue> = { splice: 'splice', double: 'double', 'despite-clause': 'prep-clause', 'despite-of': 'despite-of' };
const traps = scenariosOf('traps');
ok(traps.length === Object.keys(EXPECT).length, `traps: ${Object.keys(EXPECT).length} scenarios`);
for (const sc of traps) {
  const where = `traps/${sc.id}`;
  loc(sc.title, `${where}.title`);
  loc(sc.why, `${where}.why`);
  ok(sc.frames.length === TRAP_KINDS.length, `${where}: error + 2 fixes`);
  const d0 = diagnose(tokensOf(sc.frames[0]));
  ok(d0.length === 1 && d0[0] === EXPECT[sc.id], `${where}: the error must raise exactly “${EXPECT[sc.id]}”, got [${d0.join(', ')}]`);
  for (let i = 1; i < sc.frames.length; i++) {
    const d = diagnose(tokensOf(sc.frames[i]));
    ok(d.length === 0, `${where}: fix ${i} must be clean, got [${d.join(', ')}]`);
  }
}

ok(new Set(listScenarios().map((s) => s.id)).size === listScenarios().length, 'scenario ids unique');
for (const tr of CB_TRACKS) ok(listScenarios().some((s) => s.track === tr), `track ${tr} has scenarios`);
for (const sc of listScenarios()) ok(kindsOf(sc).length === sc.frames.length, `${sc.id}: kinds/frames`);
for (const k of TRAP_KINDS) loc(TRAP_LABEL[k], `TRAP_LABEL.${k}`);
for (const c of ['coord', 'sub', 'adverb', 'prep'] as const) {
  loc(CLASS_LABEL[c], `CLASS_LABEL.${c}`);
  loc(CLASS_SHORT[c], `CLASS_SHORT.${c}`);
  loc(CLASS_RULE[c], `CLASS_RULE.${c}`);
}
for (const i of Object.keys(ISSUE_TEXT) as Issue[]) loc(ISSUE_TEXT[i], `ISSUE_TEXT.${i}`);
// Every class of every relation is backed by at least one lexicon entry.
for (const r of RELATIONS) for (const c of RELATION_CLASSES[r]) ok(Object.values(LEXICON).some((e) => e.rel === r && e.cls === c), `LEXICON lacks a ${r} ${c}`);

// Textbook probes (Cambridge / British Council).
const dx = (s: string) => diagnose(parseLine(s));
ok(dx('It rained|verb, however|conn we played|verb.').includes('splice'), 'Cambridge: however does not join clauses like but');
ok(dx('It rained|verb. However,|conn we played|verb.').length === 0, 'However after a full stop is fine');
ok(dx('Despite|conn having a headache, I had|verb a great birthday.').length === 0, 'British Council: despite + -ing');
ok(dx('In|conn spite|conn of|conn the pain, he completed|verb the marathon.').length === 0, 'British Council: in spite of + noun');
ok(dx('Despite|conn the fact that he worked|verb hard, he failed|verb.').length === 0, 'British Council: despite the fact that + clause');
ok(dx('Despite|conn he worked|verb hard, he failed|verb.').includes('prep-clause'), 'despite + clause is flagged');
ok(dx('Because|conn of|conn it rained|verb, we stayed|verb.').includes('prep-clause'), 'because of + clause is flagged');
ok(dx('Because|conn it rained|verb, so|conn we stayed|verb.').includes('double'), '«оскільки …, тому …» is flagged too');
ok(dx('We waited|verb ages; the~w waiter was|verb nice, though|conn.').length === 0, 'end-position though in speech is not a double linker');

if (failures > 0) {
  console.error(`\n✖ test-connector-bridge: ${failures} failure(s).`);
  process.exit(1);
}
console.log(
  `✓ test-connector-bridge: ${scenariosOf('bridge', 'contrast').length + scenariosOf('bridge', 'cause').length + scenariosOf('bridge', 'addition').length} bridges (every class has its shape, one finite verb after a preposition, clean diagnosis) + ${traps.length} traps (each error raises exactly its issue, every fix is clean).`,
);
