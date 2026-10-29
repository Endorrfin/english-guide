// CHANGED (A2): golden tests for the ★ Clause Compressor engine + content (m26), incl. the dangling-
// participle detector. Run: tsx scripts/test-clause-compressor.ts. Auto-discovered by run-tests.ts.
import {
  CLAUSE_KINDS, CLAUSE_LABEL, DETECT_KINDS, KIND_LABEL, KIND_NOTE, KIND_PATTERN, PC_CLAUSES,
  isDoer, kindsOf, listScenarios, mainClause, scenariosOf, subClauseSubject, tokensOf, verdictOf, wordCount,
} from '../src/lib/participleClauses';
import type { PcKind, PcScenario } from '../src/lib/participleClauses';
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

const FULL = /^(When|While|After|Before|Because|As|Since|Once) [^,]+, /;
const PART_START = /^(Having been [a-z]+(ed|en) |Having [a-z]+(ed|en|t) |Not [a-z]+ing |[A-Z][a-z]+(ing|ed|en) )/;

// One shape check per kind (British Council, Participle clauses; Cambridge, Clauses: finite and non-finite).
const SHAPE: Record<PcKind, (s: string) => boolean> = {
  full: (s) => FULL.test(s),
  'conj-ing': (s) => /^(When|While|After|Before|Since|On) [a-z]+ing /.test(s),
  ing: (s) => /^[A-Z][a-z]+ing [^,]*, /.test(s) && !/^Having /.test(s),
  'not-ing': (s) => /^Not [a-z]+ing /.test(s),
  ed: (s) => /^[A-Z][a-z]+(ed|en) /.test(s) && !/^Having /.test(s),
  having: (s) => /^Having [a-z]+(ed|en|t) /.test(s) && !/^Having been /.test(s),
  'having-been': (s) => /^Having been [a-z]+(ed|en) /.test(s),
  dangling: (s) => PART_START.test(s),
  'fix-subject': (s) => PART_START.test(s),
  'fix-clause': (s) => FULL.test(s),
};
/** What the detector MUST say about each kind. */
const EXPECT: Record<PcKind, 'full' | 'ok' | 'dangling'> = {
  full: 'full',
  'conj-ing': 'ok',
  ing: 'ok',
  'not-ing': 'ok',
  ed: 'ok',
  having: 'ok',
  'having-been': 'ok',
  dangling: 'dangling',
  'fix-subject': 'ok',
  'fix-clause': 'full',
};

function checkScenario(sc: PcScenario): void {
  const where = `${sc.track}/${sc.id}`;
  const kinds = kindsOf(sc);
  loc(sc.title, `${where}.title`);
  loc(sc.trap.why, `${where}.trap.why`);
  ok(sc.doer.length > 0, `${where}: declares the real doer`);
  ok(sc.frames.length === kinds.length, `${where}: one frame per kind (${kinds.length}), has ${sc.frames.length}`);
  const texts = sc.frames.map((f) => textOf(tokensOf(f)));
  sc.frames.forEach((fr, i) => {
    const kind = kinds[i];
    const at = `${where}#${i} (${kind})`;
    const toks = tokensOf(fr);
    const s = texts[i];
    ok(!!fr.uk.trim(), `${at}: uk required`);
    ok(textOf(parseLine(s)) === s, `${at}: tokens round-trip`);
    ok(SHAPE[kind](s), `${at}: “${s}” does not have the ${kind} shape`);
    ok(s !== sc.trap.wrong, `${at}: the trap equals a frame`);
    ok(toks.filter((t) => t.role === 'subj').length === 1, `${at}: exactly one |subj`);
    // The participle sits in the clause BEFORE the comma; the subject after it.
    const comma = toks.findIndex((t) => t.w === ',');
    const pi = toks.findIndex((t) => t.role === 'part');
    const si = toks.findIndex((t) => t.role === 'subj');
    if (pi >= 0) ok(pi < comma && si > comma, `${at}: |part before the comma, |subj after it`);
    // The detector's verdict is what this kind must be.
    const v = verdictOf(sc, toks);
    ok(v.kind === EXPECT[kind], `${at}: detector says ${v.kind}, expected ${EXPECT[kind]} for “${s}”`);
    // A full clause keeps its own subject — and it must be the real doer (otherwise it could not be
    // compressed, or would not be a fix).
    if (v.kind === 'full') {
      const sub = subClauseSubject(s);
      ok(!!sub && isDoer(sc, sub), `${at}: the clause subject “${sub}” is the real doer`);
    }
  });

  if (sc.track === 'compress') {
    // The precondition for compressing: SAME subject in both clauses of the full frame.
    ok(isDoer(sc, verdictOf(sc, tokensOf(sc.frames[0])).subj ?? ''), `${where}: full frame — the main subject is the doer too (same subject)`);
    // Compression only touches the subordinate clause: the main clause is identical in every frame …
    for (let i = 1; i < texts.length; i++) ok(mainClause(texts[i]) === mainClause(texts[0]), `${where}#${i}: the main clause changed (“${mainClause(texts[i])}”)`);
    // … and every compressed frame is shorter than the full clause and never longer than the step
    // before (After testing → Having tested is an equal-length alternative, not a further cut).
    for (let i = 1; i < texts.length; i++) {
      const n = wordCount(tokensOf(sc.frames[i]));
      ok(n < wordCount(tokensOf(sc.frames[0])), `${where}#${i}: not shorter than the full clause`);
      ok(n <= wordCount(tokensOf(sc.frames[i - 1])), `${where}#${i}: longer than the previous frame`);
    }
  } else {
    ok(mainClause(texts[2]) === mainClause(texts[0]), `${where}: fix 2 keeps the dangling sentence’s main clause`);
    ok(mainClause(texts[1]) !== mainClause(texts[0]), `${where}: fix 1 rebuilds the main clause`);
  }
}

for (const c of PC_CLAUSES) {
  loc(CLAUSE_LABEL[c], `CLAUSE_LABEL.${c}`);
  const scs = scenariosOf('compress', c);
  ok(scs.length === 1, `compress/${c}: 1 scenario, has ${scs.length}`);
  scs.forEach(checkScenario);
}
const detect = scenariosOf('detect');
ok(detect.length === 3, 'detect: 3 scenarios');
detect.forEach(checkScenario);

const allKinds = new Set<PcKind>([...Object.values(CLAUSE_KINDS).flat(), ...DETECT_KINDS]);
for (const k of allKinds) {
  loc(KIND_LABEL[k], `KIND_LABEL.${k}`);
  loc(KIND_NOTE[k], `KIND_NOTE.${k}`);
  ok(!!KIND_PATTERN[k], `KIND_PATTERN.${k}`);
}
ok(listScenarios().length === 8 && new Set(listScenarios().map((s) => s.id)).size === 8, 'scenario ids unique (8)');

// The detector is honest: it flags the textbook cases and passes their fixes.
const probe: PcScenario = { id: 'probe', track: 'detect', title: { en: 'x', uk: 'x' }, doer: ['I'], frames: [], trap: { wrong: '', why: { en: 'x', uk: 'x' } } };
ok(verdictOf(probe, parseLine('Arriving|part home, the door|subj was open.')).kind === 'dangling', 'detector: “Arriving home, the door was open” dangles (Cambridge)');
ok(verdictOf(probe, parseLine('Arriving|part home, I|subj found the door open.')).kind === 'ok', 'detector: its fix passes');
ok(verdictOf(probe, parseLine('When I arrived home, the door|subj was open.')).kind === 'full', 'detector: a full clause cannot dangle');
let threw = false;
try {
  verdictOf(probe, parseLine('Arriving|part home, the door was open.'));
} catch {
  threw = true;
}
ok(threw, 'detector: a participle without a marked |subj throws (unmarked data must fail loudly)');
// The shape checks reject the classic errors.
ok(!SHAPE['having-been']('Having tested on staging, the build was promoted.'), 'having-been rejects the active Having tested');
ok(!SHAPE['not-ing']('Knowing not the password, I called IT.'), 'not-ing rejects not after the participle');

if (failures > 0) {
  console.error(`\n✖ test-clause-compressor: ${failures} failure(s).`);
  process.exit(1);
}
console.log('✓ test-clause-compressor: 5 compressions + 3 detector walks; same subject before compressing, main clause untouched, every compression shorter than the full clause; the detector flags every dangling frame and passes every fix.');
