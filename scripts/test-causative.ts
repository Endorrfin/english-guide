// CHANGED (A1): golden tests for the ★ Causative Switch engine + content (m24).
// Run: tsx scripts/test-causative.ts. Auto-discovered by run-tests.ts.
import { CS_TRACKS, FORM_LABEL, FORM_PATTERN, TRACK_FORMS, listScenarios, sceneOf, scenariosOf, tokensOf } from '../src/lib/causative';
import type { CsForm } from '../src/lib/causative';
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

// One shape check per form (Cambridge "Have something done" / "Get"; British Council advanced passives).
const SHAPE: Record<CsForm, (s: string) => boolean> = {
  active: (s) => !/\b(had|have|got|get)\b/.test(s),
  'have-v3': (s) => /\bhad (my|our) [a-z]+ [a-z]+ed\b/.test(s),
  'get-v3': (s) => /\bgot (my|our) [a-z]+ [a-z]+ed\b/.test(s),
  'have-do': (s) => /\bhad (the|an?) [a-z ]+ [a-z]+ (my|our) /.test(s) && !/\bto [a-z]+ (my|our)\b/.test(s),
  'get-to-do': (s) => /\bgot (the|an?) [a-z ]+ to [a-z]+ (my|our) /.test(s),
  'have-bad': (s) => /\bhad (my|our) [a-z]+ (stolen|hacked)\b/.test(s),
  'people-say': (s) => /^(People|Experts) (say|believe) that /.test(s),
  'it-is-said': (s) => /^It is (said|believed) that /.test(s),
  'is-said-to': (s) => /^The [a-z]+ is (said|believed) to (be|have) /i.test(s),
};

for (const tr of CS_TRACKS) {
  const forms = TRACK_FORMS[tr];
  const scs = scenariosOf(tr);
  ok(scs.length === 2, `${tr}: 2 scenarios`);
  for (const f of forms) {
    loc(FORM_LABEL[f], `FORM_LABEL.${f}`);
    ok(!!FORM_PATTERN[f], `FORM_PATTERN.${f}`);
    ok((sceneOf(f) !== null) === (tr === 'causative'), `${f}: a scene exists exactly on the causative track`);
  }
  for (const sc of scs) {
    const where = `${tr}/${sc.id}`;
    loc(sc.title, `${where}.title`);
    loc(sc.trap.why, `${where}.trap.why`);
    if (tr === 'causative') {
      loc(sc.pro, `${where}.pro`);
      loc(sc.thing, `${where}.thing`);
    }
    ok(sc.frames.length === forms.length, `${where}: one frame per form (${forms.length})`);
    sc.frames.forEach((fr, i) => {
      const form = forms[i];
      ok(!!fr.uk.trim(), `${where}#${i}: uk required`);
      loc(fr.note, `${where}#${i}.note`);
      ok(textOf(tokensOf(fr)) === fr.src, `${where}#${i}: tokens round-trip`);
      ok(SHAPE[form](fr.src), `${where}#${i}: “${fr.src}” does not have the ${form} shape`);
      ok(fr.src !== sc.trap.wrong, `${where}#${i}: the trap equals a frame`);
    });
  }
}
ok(listScenarios().length === 4 && new Set(listScenarios().map((s) => s.id)).size === 4, 'scenario ids unique');

// The two infinitive rules of the reporting track: simultaneous → to be; earlier → to have + V3.
const ceo = scenariosOf('reporting').find((s) => s.id === 'ceo')!;
const outage = scenariosOf('reporting').find((s) => s.id === 'outage')!;
ok(/ to be [a-z]+ing\b/.test(ceo.frames[2].src), 'an ongoing report → to be + -ing');
ok(/ to have [a-z]+ed\b/.test(outage.frames[2].src), 'an earlier event → to have + V3');
ok(/ to [a-z]+ /.test(outage.trap.wrong) && !/to have/.test(outage.trap.wrong), 'the outage trap is the missing perfect infinitive');
ok(/had a [a-z ]+ to [a-z]+/.test(scenariosOf('causative').find((s) => s.id === 'audit')!.trap.wrong), 'the audit trap is have + person + to');

// The shape checks are honest.
ok(!SHAPE['have-do']('We had a security firm to audit our app.'), 'have-do rejects the “to” error');
ok(!SHAPE['is-said-to']('The CEO is said that he is leaving.'), 'is-said-to rejects the mixed frame');
ok(!SHAPE.active('I had my laptop repaired.'), 'active rejects a causative');

if (failures > 0) {
  console.error(`\n✖ test-causative: ${failures} failure(s).`);
  process.exit(1);
}
console.log('✓ test-causative: 2 tracks × 2 scenarios, every frame has its form’s shape, have + person + V1 never takes to, perfect infinitive for earlier events.');
