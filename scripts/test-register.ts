// CHANGED (A4): golden tests for the ★ Register Dial engine + content (m29). The core check: the needle
// position is COMPUTED from the markers, and every dial walk must rise strictly from chat to official,
// with each frame landing in the band of its own stop — so a frame that is not really formal (or not
// really casual) fails here instead of only looking wrong on the dial. The BrE chip is built by the
// engine (should + base), never authored. Every trap's error raises exactly its issue in its declared
// context; both fixes are clean there.
// Run: tsx scripts/test-register.ts. Auto-discovered by run-tests.ts.
import {
  BAND_MIN, ISSUE_TEXT, MARKER_LABEL, MARKER_WEIGHT, RD_TRACKS, STOPS, STOP_LABEL, STOP_NOTE, TRAP_KINDS, TRAP_LABEL,
  bandOf, breVariant, diagnose, diagnoseIn, listScenarios, mandativesOf, markersOf, scenariosOf, scoreOf, tokensOf,
} from '../src/lib/register';
import type { MarkerKind, RdIssue } from '../src/lib/register';
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
const score = (src: string) => scoreOf(markersOf(parseLine(src)));
const kinds = (src: string) => markersOf(parseLine(src)).map((m) => m.kind);

const dials = scenariosOf('dial');
ok(dials.length >= 3, `dial: at least three scenarios, has ${dials.length}`);
for (const sc of dials) {
  const where = `dial/${sc.id}`;
  loc(sc.title, `${where}.title`);
  ok(sc.frames.length === STOPS.length, `${where}: one frame per stop (${STOPS.length})`);
  const scores = sc.frames.map((fr) => scoreOf(markersOf(tokensOf(fr))));
  sc.frames.forEach((fr, i) => {
    const toks = tokensOf(fr);
    const s = textOf(toks);
    ok(!!fr.uk.trim(), `${where}#${i}: uk required`);
    ok(textOf(parseLine(s)) === s, `${where}#${i}: tokens round-trip`);
    ok(bandOf(scores[i]) === STOPS[i], `${where}#${i}: score ${scores[i]} lands in ${bandOf(scores[i])}, the frame sits on ${STOPS[i]} — “${s}”`);
    ok(diagnose(toks).length === 0, `${where}#${i}: must be clean, got [${diagnose(toks).join(', ')}]`);
  });
  for (let i = 1; i < scores.length; i++) ok(scores[i] > scores[i - 1], `${where}: the score must rise strictly (${scores.join(' → ')})`);
  // The official stop always carries a structure, not only words.
  const top = markersOf(tokensOf(sc.frames[STOPS.length - 1])).map((m) => m.kind);
  ok(top.some((k) => k === 'subjunctive' || k === 'inversion'), `${where}: the official frame carries a subjunctive or an inversion`);
  ok(!top.some((k) => MARKER_WEIGHT[k] < 0), `${where}: the official frame has no informal marker`);
  ok(markersOf(tokensOf(sc.frames[0])).some((m) => MARKER_WEIGHT[m.kind] < 0), `${where}: the chat frame has an informal marker`);
}

// Traps.
const EXPECT: Record<string, RdIssue> = {
  'hereby-standup': 'too-formal',
  'is-notified': 'indicative',
  'gonna-pursuant': 'mixed',
  'hey-policy': 'too-casual',
};
const traps = scenariosOf('traps');
ok(traps.length === Object.keys(EXPECT).length, `traps: ${Object.keys(EXPECT).length} scenarios`);
for (const sc of traps) {
  const where = `traps/${sc.id}`;
  loc(sc.title, `${where}.title`);
  loc(sc.why, `${where}.why`);
  ok(!!sc.context, `${where}: a declared context`);
  if (!sc.context) continue;
  ok(sc.frames.length === TRAP_KINDS.length, `${where}: error + 2 fixes`);
  const d0 = diagnoseIn(tokensOf(sc.frames[0]), sc.context);
  ok(d0.length === 1 && d0[0] === EXPECT[sc.id], `${where}: the error must raise exactly “${EXPECT[sc.id]}”, got [${d0.join(', ')}] (score ${scoreOf(markersOf(tokensOf(sc.frames[0])))})`);
  for (let i = 1; i < sc.frames.length; i++) {
    const d = diagnoseIn(tokensOf(sc.frames[i]), sc.context);
    ok(d.length === 0, `${where}: fix ${i} must be clean in ${sc.context}, got [${d.join(', ')}] (score ${scoreOf(markersOf(tokensOf(sc.frames[i])))})`);
  }
}

ok(new Set(listScenarios().map((s) => s.id)).size === listScenarios().length, 'scenario ids unique');
for (const tr of RD_TRACKS) ok(listScenarios().some((s) => s.track === tr), `track ${tr} has scenarios`);
for (const s of STOPS) {
  loc(STOP_LABEL[s], `STOP_LABEL.${s}`);
  loc(STOP_NOTE[s], `STOP_NOTE.${s}`);
}
for (const k of TRAP_KINDS) loc(TRAP_LABEL[k], `TRAP_LABEL.${k}`);
for (const i of Object.keys(ISSUE_TEXT) as RdIssue[]) loc(ISSUE_TEXT[i], `ISSUE_TEXT.${i}`);
for (const k of Object.keys(MARKER_LABEL) as MarkerKind[]) loc(MARKER_LABEL[k], `MARKER_LABEL.${k}`);
for (let i = 1; i < STOPS.length; i++) ok(BAND_MIN[STOPS[i]] > BAND_MIN[STOPS[i - 1]], 'bands ascend');

// Marker probes (Cambridge: Formal and informal language · Contractions · Phrasal verbs).
ok(kinds('We don’t know yet.').includes('contraction'), 'don’t is a contraction');
ok(kinds('It’s done.').includes('contraction'), 'it’s is a contraction');
ok(!kinds('The team’s backlog is long.').includes('contraction'), 'a possessive ’s is not a contraction');
ok(kinds('We need to find out why.').includes('informal'), 'find out (phrasal) is informal');
ok(kinds('We need to ascertain why. The investigation continues.').includes('nominal'), 'investigation is a nominalisation');
ok(!kinds('The comment is short.').includes('nominal'), 'a short -ment word is not counted');
ok(kinds('The service was restarted|part at noon.').includes('passive'), 'be + participle = passive');
ok(kinds('So we shipped it.').includes('opener'), 'So opening a sentence is informal');
ok(score('Hey guys, gonna be late!') < score('I will be late.'), 'slang scores below neutral');
ok(score('Should you|subj require assistance, contact us.') > score('If you need help, contact us.'), 'Should you require > If you need');

// The mandative subjunctive (Cambridge: Suggest; the AmE / BrE split).
const m1 = mandativesOf(parseLine('We recommend that she|subj review|verb the logs.'));
ok(m1.length === 1 && m1[0].form === 'subjunctive', 'recommend that she review → subjunctive (3sg base form)');
const m2 = mandativesOf(parseLine('We recommend that she|subj reviews|verb the logs.'));
ok(m2.length === 1 && m2[0].form === 'indicative', 'recommend that she reviews → indicative');
const m3 = mandativesOf(parseLine('We recommend that she|subj should review|verb the logs.'));
ok(m3.length === 1 && m3[0].form === 'should', 'recommend that she should review → should (BrE)');
const m4 = mandativesOf(parseLine('We recommend that they|subj review|verb the logs.'));
ok(m4.length === 1 && m4[0].form === 'unclear', 'with they the base form and the present look the same → unclear, not counted');
ok(mandativesOf(parseLine('I know that she|subj reviews|verb the logs.')).length === 0, 'know that … is not mandative');
ok(breVariant(parseLine('It is essential that the vendor|subj be|verb notified|part.')) === 'It is essential that the vendor should be notified.', 'the BrE chip is computed: should + base');
ok(breVariant(parseLine('We recommend that she|subj review|verb the logs.')) === 'We recommend that she should review the logs.', 'BrE chip for a lexical verb');
ok(breVariant(parseLine('The vendor was notified|part.')) === null, 'no mandative → no BrE chip');
ok(diagnose(parseLine('It is vital that he|subj is|verb informed.')).includes('indicative'), 'vital that he is informed → indicative (AmE formal)');
ok(diagnose(parseLine('Pursuant to the policy, we’re gonna ship it.')).includes('mixed'), 'pursuant to + gonna is mixed');
ok(diagnoseIn(parseLine('Pursuant to the policy, we’re gonna ship it.'), 'report').length === 1, 'a mixed sentence gets no band verdict on top');

if (failures > 0) {
  console.error(`\n✖ test-register: ${failures} failure(s).`);
  process.exit(1);
}
console.log(
  `✓ test-register: ${dials.length} dials (score rises strictly, every frame in its stop's band, official = structure + no informal marker) + ${traps.length} traps (each error raises exactly its issue in its context, every fix is clean); BrE chip computed.`,
);
