// CHANGED (A2): golden tests for the ★ Clause Welder engine + content (m25).
// Run: tsx scripts/test-clause-welder.ts. Auto-discovered by run-tests.ts.
import {
  COMMA_KINDS, HAS_REL, JOINT_KINDS, JOINT_LABEL, KIND_LABEL, KIND_NOTE, KIND_PATTERN, RC_JOINTS,
  kindsOf, listScenarios, relOf, scenariosOf, setModeOf, tokensOf,
} from '../src/lib/relativeClauses';
import type { RcKind, RcScenario } from '../src/lib/relativeClauses';
import { textOf } from '../src/lib/tokenMorph';
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

const REL = /\b(who|whom|which|that|whose|where)\b/i;
const sentences = (s: string) => (s.match(/[.!?](?=\s|$)/g) ?? []).length;
const words = (s: string) => s.toLowerCase().replace(/[,.;:!?]/g, '').split(/\s+/).filter(Boolean);
const count = (s: string, w: string) => words(s).filter((x) => x === w.toLowerCase()).length;
/** a minus b, as sorted multisets → comparable strings. */
const minus = (s: string, drop: string[]) => words(s).filter((w) => !drop.includes(w)).sort().join(' ');

// One shape check per kind (Cambridge: Relative clauses: defining and non-defining · Relative pronouns ·
// Whose · Relative clauses referring to a whole sentence; British Council: Relative pronouns and clauses).
const SHAPE: Record<RcKind, (s: string) => boolean> = {
  two: (s) => sentences(s) === 2 && !/\b(who|whom|which|whose|where)\b/i.test(s),
  'subj-rel': (s) => sentences(s) === 1 && /\b(who|which|that) [a-z]+/.test(s) && !/, (who|which|that)\b/.test(s),
  reduced: (s) => sentences(s) === 1 && !REL.test(s.replace(/^That /, '')),
  'obj-rel': (s) => sentences(s) === 1 && /\b(that|who|whom|which) [A-Za-z]+ [a-z]+/.test(s) && !/, (who|which|that)\b/.test(s),
  zero: (s) => sentences(s) === 1 && !REL.test(s.replace(/^That /, '')),
  whose: (s) => sentences(s) === 1 && /\bwhose [a-z]+/.test(s) && !/who’s|who's/.test(s),
  where: (s) => sentences(s) === 1 && /\bwhere [a-z]+/i.test(s),
  'prep-end': (s) => sentences(s) === 1 && !REL.test(s.replace(/^That /, '')),
  'prep-front': (s) => sentences(s) === 1 && /\b(to|in|on|for|with|about|at|from) (whom|which)\b/.test(s),
  defining: (s) => sentences(s) === 1 && REL.test(s) && !s.includes(','),
  'non-defining': (s) => sentences(s) === 1 && /, (who|which) [^,]+, /.test(s) && !/, that\b/.test(s),
  'sentence-which': (s) => sentences(s) === 1 && /^[^,]+, which [^,]+\.$/.test(s),
};

// Every frame anywhere: never what as a relative, never that after a comma, never who’s for whose.
const GLOBAL_BAD = [/\bwhat\b/i, /, that\b/, /who’s|who's/];

function checkScenario(sc: RcScenario): void {
  const where = `${sc.track}/${sc.id}`;
  const kinds = kindsOf(sc);
  loc(sc.title, `${where}.title`);
  loc(sc.trap.why, `${where}.trap.why`);
  ok(sc.frames.length === kinds.length, `${where}: one frame per kind (${kinds.length}), has ${sc.frames.length}`);
  sc.frames.forEach((fr, i) => {
    const kind = kinds[i];
    const at = `${where}#${i} (${kind})`;
    const s = fr.src.replace(/[|~][a-z0-9]+/g, '');
    const toks = tokensOf(fr);
    ok(!!fr.uk.trim(), `${at}: uk required`);
    ok(textOf(toks) === textOf(tokensOf({ src: textOf(toks), uk: '' })), `${at}: tokens round-trip`);
    ok(SHAPE[kind](textOf(toks)), `${at}: “${textOf(toks)}” does not have the ${kind} shape`);
    for (const bad of GLOBAL_BAD) ok(!bad.test(s), `${at}: forbidden ${bad} in “${s}”`);
    const rels = toks.filter((t) => t.role === 'rel');
    ok(rels.length === (HAS_REL[kind] ? 1 : 0), `${at}: expected ${HAS_REL[kind] ? 1 : 0} |rel token, has ${rels.length}`);
    if (rels[0]) ok(REL.test(rels[0].w), `${at}: |rel marks a relative word, not “${rels[0].w}”`);
    ok(textOf(toks) !== sc.trap.wrong, `${at}: the trap equals a frame`);
  });

  if (sc.track === 'weld') {
    const two = textOf(tokensOf(sc.frames[0]));
    const shared = sc.shared ?? '';
    ok(!!shared && count(two, shared) >= 1, `${where}: the shared word “${shared}” is in the two-sentence frame`);
    // The resumptive-pronoun guard: the welded frames lose exactly the one shared word.
    for (let i = 1; i < sc.frames.length; i++) {
      const welded = textOf(tokensOf(sc.frames[i]));
      ok(count(welded, shared) === count(two, shared) - 1, `${where}#${i}: “${shared}” must vanish once (no resumptive pronoun) in “${welded}”`);
    }
    ok(tokensOf(sc.frames[0]).filter((t) => t.role === 'link').length === 2, `${where}: the two-sentence frame marks the noun AND its stand-in as |link`);
    const f = sc.frames.map((x) => textOf(tokensOf(x)));
    switch (sc.joint) {
      case 'subject':
        // Reduction is exactly “drop who/which/that + be” — nothing else moves.
        ok(f[1].replace(/\b(who|which|that) (is|are|was|were) /, '') === f[2], `${where}: reduced = welded minus relative + be (“${f[2]}”)`);
        break;
      case 'object':
        ok(f[1].replace(/ (that|who|whom|which) /, ' ') === f[2], `${where}: zero = welded minus the pronoun (“${f[2]}”)`);
        break;
      case 'whose':
        ok(/\b(his|her|its|their)\b/i.test(f[0]), `${where}: the shared word is a possessive`);
        break;
      case 'where':
        ok(!!sc.prep && minus(f[1], ['where']) === minus(f[2], [sc.prep]), `${where}: where ↔ (that) … ${sc.prep} carry the same words`);
        ok(!new RegExp(`\\bwhere\\b.*\\b${sc.prep}\\b`).test(f[1]), `${where}: where never keeps the preposition`);
        break;
      case 'prep':
        ok(!!sc.prep && new RegExp(`\\b${sc.prep} (whom|which)\\b`).test(f[2]), `${where}: the formal frame fronts “${sc.prep}” + whom/which`);
        ok(new RegExp(`\\b${sc.prep}\\b`).test(f[1]) && minus(f[2], ['whom', 'which']) === minus(f[1], []), `${where}: stranded and fronted frames carry the same words`);
        break;
    }
  } else {
    ok(!!sc.set && sc.set.picked > 0 && sc.set.picked < sc.set.total, `${where}: the set picks a real subset`);
    loc(sc.set?.noun, `${where}.set.noun`);
    // Defining ↔ non-defining differ ONLY by the commas and that → which (same words otherwise).
    const d = textOf(tokensOf(sc.frames[0]));
    const n = textOf(tokensOf(sc.frames[1]));
    ok(minus(d, ['that', 'which', 'who']) === minus(n, ['that', 'which', 'who']), `${where}: defining and non-defining carry the same words`);
  }
}

for (const j of RC_JOINTS) {
  loc(JOINT_LABEL[j], `JOINT_LABEL.${j}`);
  const scs = scenariosOf('weld', j);
  ok(scs.length === 2, `weld/${j}: 2 scenarios, has ${scs.length}`);
  scs.forEach(checkScenario);
}
const commas = scenariosOf('commas');
ok(commas.length === 2, 'commas: 2 scenarios');
commas.forEach(checkScenario);

const allKinds = new Set<RcKind>([...Object.values(JOINT_KINDS).flat(), ...COMMA_KINDS]);
for (const k of allKinds) {
  loc(KIND_LABEL[k], `KIND_LABEL.${k}`);
  loc(KIND_NOTE[k], `KIND_NOTE.${k}`);
  ok(!!KIND_PATTERN[k], `KIND_PATTERN.${k}`);
  ok((setModeOf(k) !== null) === COMMA_KINDS.includes(k), `${k}: a set scene exists exactly on the commas track`);
}
ok(listScenarios().length === 12 && new Set(listScenarios().map((s) => s.id)).size === 12, 'scenario ids unique (12)');

// The joint chip is derived: who / that / whose / where / whom, or none.
ok(relOf(tokensOf(scenariosOf('weld', 'whose')[0].frames[1])) === 'whose', 'relOf finds whose');
ok(relOf(tokensOf(scenariosOf('weld', 'object')[0].frames[2])) === null, 'relOf: a zero relative has no word');

// The shape checks are honest (each rejects the error it exists for).
ok(!SHAPE['non-defining']('The servers, that run Postgres, need a patch.'), 'non-defining rejects that after a comma');
ok(!SHAPE.defining('The servers, which run Postgres, need a patch.'), 'defining rejects commas');
ok(!SHAPE.whose('We called the client who’s account was locked.'), 'whose rejects who’s');
ok(!SHAPE['prep-front']('This is the client to that I talked yesterday.'), 'prep-front rejects “to that”');
ok(GLOBAL_BAD[0].test('The bug what was reported'), 'the global guard catches relative what');

if (failures > 0) {
  console.error(`\n✖ test-clause-welder: ${failures} failure(s).`);
  process.exit(1);
}
console.log('✓ test-clause-welder: 5 joints × 2 + 2 comma walks; the shared word vanishes exactly once (no resumptive pronoun), reduced/zero/stranded frames are exact transforms, never that after a comma, never relative what.');
