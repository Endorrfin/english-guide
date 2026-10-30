// CHANGED (A4): golden tests for the ★ Emphasis Spotlight engine + content (m27). The core check: the
// operator the ENGINE computes from a scenario's facts (the auxiliary, or do / does / did) is the operator
// the AUTHOR wrote in every inverted frame — so facts and sentences cannot drift apart. Every walk starts
// neutral and ends clean in its construction; the "adverbial to the front" step of an inversion walk
// raises exactly no-inversion (an auxiliary to move) or missing-do (none); a cleft or fronting keeps the
// neutral sentence's content words; every trap's error raises exactly its issue and both fixes are clean.
// Run: tsx scripts/test-emphasis.ts. Auto-discovered by run-tests.ts.
import {
  ES_KINDS, ES_TRACKS, ISSUE_TEXT, KIND_LABEL, KIND_RULE, TRAP_KINDS, TRAP_LABEL, TRIGGERS, TRIGGER_LABEL,
  analyze, listScenarios, operatorOf, scenariosOf, stepLabel, tokensOf,
} from '../src/lib/emphasis';
import type { Construction, EsFacts, EsIssue, EsKind } from '../src/lib/emphasis';
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

/** The construction a walk must reach on its LAST frame. */
const TARGET: Record<EsKind, Construction> = {
  negative: 'inversion',
  'not-only': 'inversion',
  'it-cleft': 'it-cleft',
  'wh-cleft': 'wh-cleft',
  fronting: 'inversion', // the hotfix walk ends on Not until noon; checked per frame below
};
const STOP = new Set(['a', 'an', 'the', 'it', 'is', 'was', 'what', 'that', 'who', 'which', 'do', 'does', 'did', 'not', 'only', 'but', 'also', 'its']);
const content = (s: string) =>
  new Set(s.toLowerCase().replace(/[.,!?]/g, '').split(' ').filter((w) => w && !STOP.has(w)));

for (const kind of ES_KINDS) {
  loc(KIND_LABEL[kind], `KIND_LABEL.${kind}`);
  loc(KIND_RULE[kind], `KIND_RULE.${kind}`);
  const scs = scenariosOf('spotlight', kind);
  ok(scs.length >= 2, `spotlight/${kind}: at least two scenarios, has ${scs.length}`);
  for (const sc of scs) {
    const where = `spotlight/${sc.id}`;
    loc(sc.title, `${where}.title`);
    ok(sc.frames.length >= 2 && sc.frames.length <= 3, `${where}: 2–3 frames`);
    const an = sc.frames.map((fr) => analyze(tokensOf(fr), sc.facts));
    sc.frames.forEach((fr, i) => {
      const s = textOf(tokensOf(fr));
      ok(!!fr.uk.trim(), `${where}#${i}: uk required`);
      ok(textOf(parseLine(s)) === s, `${where}#${i}: tokens round-trip`);
      ok(/[.]$/.test(s), `${where}#${i}: ends with a full stop`);
      loc(stepLabel(sc, i), `${where}#${i} label`);
    });
    ok(an[0].construction === 'neutral' && an[0].issues.length === 0, `${where}: frame 0 must be a clean neutral sentence, got ${an[0].construction} [${an[0].issues}]`);
    const last = an[an.length - 1];
    ok(last.issues.length === 0, `${where}: the last frame must be clean, got [${last.issues.join(', ')}]`);
    if (kind !== 'fronting') ok(last.construction === TARGET[kind], `${where}: the walk must end in ${TARGET[kind]}, got ${last.construction}`);
    // Inversion walks: the middle frame fronts the adverbial only → exactly the computed order issue.
    if (kind === 'negative' || kind === 'not-only') {
      ok(sc.frames.length === 3, `${where}: neutral → fronted → inverted`);
      const want: EsIssue = sc.facts.aux ? 'no-inversion' : 'missing-do';
      ok(an[1].issues.length === 1 && an[1].issues[0] === want, `${where}#1: must raise exactly ${want}, got [${an[1].issues}]`);
      ok(an[1].trigger?.text === last.trigger?.text, `${where}: the same adverbial in frames 1 and 2`);
    }
    // Every clean inversion uses the operator the ENGINE computed from the facts.
    sc.frames.forEach((fr, i) => {
      const a = an[i];
      if (a.construction !== 'inversion' || a.issues.length) return;
      const aux = tokensOf(fr).find((t) => t.role === 'aux');
      ok(aux?.w.toLowerCase() === operatorOf(sc.facts), `${where}#${i}: authored operator “${aux?.w}” ≠ computed “${operatorOf(sc.facts)}”`);
      ok(a.order === 'aux-subj', `${where}#${i}: operator before the subject`);
    });
    // Clefts and fronting re-package: the neutral sentence's content words survive.
    if (kind === 'it-cleft' || kind === 'wh-cleft' || kind === 'fronting') {
      const base = content(textOf(tokensOf(sc.frames[0])));
      sc.frames.slice(1).forEach((fr, j) => {
        const a = an[j + 1];
        if (a.construction === 'inversion') return; // not until noon changes the meaning on purpose
        ok(a.construction === kind, `${where}#${j + 1}: computed ${a.construction}, the walk is ${kind}`);
        ok(!!a.focus, `${where}#${j + 1}: a focus is marked`);
        const here = content(textOf(tokensOf(fr)));
        const lost = [...base].filter((w) => !here.has(w) && w !== 'for' && w !== 'about' && w !== 'of');
        ok(lost.length === 0, `${where}#${j + 1}: content words lost: ${lost.join(', ')}`);
      });
    }
    if (kind === 'fronting') ok(an.slice(1).some((a) => a.construction === 'fronting'), `${where}: reaches a fronting frame`);
  }
}

// Traps: the error raises exactly its issue, both fixes are clean.
const EXPECT: Record<string, EsIssue> = {
  'never-order': 'no-inversion',
  'rarely-do': 'missing-do',
  'did-fixed': 'double-tense',
  'hardly-than': 'wrong-pair',
  'that-what': 'that-what',
  'which-anna': 'which-person',
};
const traps = scenariosOf('traps');
ok(traps.length === Object.keys(EXPECT).length, `traps: ${Object.keys(EXPECT).length} scenarios, has ${traps.length}`);
for (const sc of traps) {
  const where = `traps/${sc.id}`;
  loc(sc.title, `${where}.title`);
  loc(sc.why, `${where}.why`);
  ok(sc.frames.length === TRAP_KINDS.length, `${where}: error + 2 fixes`);
  const d0 = analyze(tokensOf(sc.frames[0]), sc.facts).issues;
  ok(d0.length === 1 && d0[0] === EXPECT[sc.id], `${where}: the error must raise exactly “${EXPECT[sc.id]}”, got [${d0.join(', ')}]`);
  for (let i = 1; i < sc.frames.length; i++) {
    const d = analyze(tokensOf(sc.frames[i]), sc.facts).issues;
    ok(d.length === 0, `${where}: fix ${i} must be clean, got [${d.join(', ')}]`);
  }
}

ok(new Set(listScenarios().map((s) => s.id)).size === listScenarios().length, 'scenario ids unique');
for (const tr of ES_TRACKS) ok(listScenarios().some((s) => s.track === tr), `track ${tr} has scenarios`);
for (const k of TRAP_KINDS) loc(TRAP_LABEL[k], `TRAP_LABEL.${k}`);
for (const i of Object.keys(ISSUE_TEXT) as EsIssue[]) loc(ISSUE_TEXT[i], `ISSUE_TEXT.${i}`);
for (const c of Object.keys(TRIGGER_LABEL) as (keyof typeof TRIGGER_LABEL)[]) loc(TRIGGER_LABEL[c], `TRIGGER_LABEL.${c}`);

// Do-support is computed from the facts.
ok(operatorOf({ tense: 'past', verb: { base: 'x', form: 'x' } }) === 'did', 'past simple → did');
ok(operatorOf({ tense: 'present', verb: { base: 'x', form: 'x' } }) === 'do', 'present simple → do');
ok(operatorOf({ tense: 'present', third: true, verb: { base: 'x', form: 'x' } }) === 'does', 'present simple, 3sg → does');
ok(operatorOf({ aux: 'Can', verb: { base: 'x', form: 'x' } }) === 'can', 'a modal is its own operator');

// Textbook probes (British Council C1; Cambridge).
const f = (x: Partial<EsFacts> & Pick<EsFacts, 'verb'>): EsFacts => x as EsFacts;
const dx = (s: string, facts: EsFacts) => analyze(parseLine(s), facts);
ok(dx('Rarely|trig do|aux we|subj find|verb such talent.', f({ tense: 'present', verb: { base: 'find', form: 'find' } })).issues.length === 0, 'BC: Rarely do we find such talent.');
ok(dx('Little|trig did|aux she|subj know|verb then.', f({ tense: 'past', verb: { base: 'know', form: 'knew' } })).issues.length === 0, 'BC: Little did she know …');
ok(dx('Seldom|trig has|aux she|subj taken|verb a day off work.', f({ aux: 'has', verb: { base: 'take', form: 'taken' } })).issues.length === 0, 'BC: Seldom has she taken a day off work.');
ok(dx('Only|trig when|trig they refilled my glass did|aux I|subj realise|verb it was broken.', f({ tense: 'past', verb: { base: 'realise', form: 'realised' } })).issues.length === 0, 'BC: Only when … did I realise (inversion in the main clause)');
ok(dx('Under|trig no|trig circumstances|trig should|aux children|subj travel|verb without an adult.', f({ aux: 'should', verb: { base: 'travel', form: 'travel' } })).issues.length === 0, 'BC: Under no circumstances should children travel …');
ok(dx('No|trig sooner|trig had|aux the game|subj started|verb than|conn the captain was taken ill.', f({ aux: 'had', verb: { base: 'start', form: 'started' } })).issues.length === 0, 'BC: No sooner had … than');
ok(dx('No|trig sooner|trig had|aux the game|subj started|verb when|conn the captain was taken ill.', f({ aux: 'had', verb: { base: 'start', form: 'started' } })).issues.includes('wrong-pair'), 'no sooner … when is flagged');
ok(dx('Rarely|trig does|aux we|subj find|verb such talent.', f({ tense: 'present', verb: { base: 'find', form: 'find' } })).issues.includes('wrong-aux'), 'does with we is the wrong operator');
ok(dx('It was you|focus who invited me to the party yesterday.', f({ tense: 'past', verb: { base: 'invite', form: 'invited' }, people: ['you'] })).construction === 'it-cleft', 'BC: It was you who invited me …');
ok(dx('It was yesterday|focus that you invited me to the party.', f({ tense: 'past', verb: { base: 'invite', form: 'invited' }, people: ['you'] })).issues.length === 0, 'BC: It was yesterday that …');
ok(dx('It was yesterday|focus who you invited me to the party.', f({ tense: 'past', verb: { base: 'invite', form: 'invited' }, people: ['you'] })).issues.includes('who-thing'), 'who after a time is flagged');
ok(dx('What I love about you is your sense of humour.', f({ tense: 'present', verb: { base: 'love', form: 'love' } })).construction === 'wh-cleft', 'Cambridge: What I love about you is …');
{
  const a = dx('That|focus car|focus we|subj bought|verb five years ago.', f({ tense: 'past', verb: { base: 'buy', form: 'bought' } }));
  ok(a.construction === 'fronting' && a.issues.length === 0, 'Cambridge: object fronting keeps normal order');
}
ok(dx('That|focus car|focus did|aux we|subj buy|verb five years ago.', f({ tense: 'past', verb: { base: 'buy', form: 'bought' } })).issues.includes('needless-inversion'), 'a non-negative fronted object does not invert');
ok(dx('Only Anna|subj knew|verb the password.', f({ tense: 'past', verb: { base: 'know', form: 'knew' } })).construction === 'neutral', 'only + subject: no fronted adverbial, no inversion');
ok(Object.values(TRIGGERS).some((t) => t.pair === 'when') && Object.values(TRIGGERS).some((t) => t.pair === 'than'), 'both correlative pairs in the lexicon');
let threw = false;
try {
  parseLine('Never|trigger have I seen it.');
} catch {
  threw = true;
}
ok(threw, 'an unknown role throws');

if (failures > 0) {
  console.error(`\n✖ test-emphasis: ${failures} failure(s).`);
  process.exit(1);
}
console.log(
  `✓ test-emphasis: ${listScenarios().filter((s) => s.track === 'spotlight').length} spotlight walks (computed operator == authored operator, do-support from facts, content kept in clefts) + ${traps.length} traps (each error raises exactly its issue, every fix is clean).`,
);
