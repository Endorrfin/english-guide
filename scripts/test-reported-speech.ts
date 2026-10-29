// CHANGED (C2): golden tests for the ★ Reported Speech Lab engine + integrity of its speech kind ×
// frame grid. Run: tsx scripts/test-reported-speech.ts — exits non-zero on any failure.
// Auto-discovered by run-tests.ts. Mirrors scripts/test-conditionals.ts.
import { FRAMES, SPEECH_KINDS, getItem, isNa, itemsOfKind, listItems, renderFor, segments } from '../src/lib/reportedSpeech';
import type { Item, Render } from '../src/lib/reportedSpeech';
import type { Localized } from '../src/data/types';

let failures = 0;
function ok(cond: boolean, msg: string): void {
  if (!cond) {
    failures++;
    console.error('  ✖ ' + msg);
  }
}
const loc = (v: Localized | undefined, where: string) => {
  ok(!!v && !!v.en?.trim() && !!v.uk?.trim(), `bilingual value missing at ${where}`);
};

// THE spine rule of reported questions (Cambridge, British Council): statement order — the word
// after the wh-word / if / whether is never a (fronted) auxiliary or do-support.
const AUX = 'is|are|am|was|were|do|does|did|has|have|had|can|could|will|would|shall|should|may|might|must';
const INVERTED = new RegExp(`\\b(?:if|whether|what|where|when|why|how|which)\\s+(?:${AUX})\\b`, 'i');
// Reporting verbs per frame: present in `says`, past in `said` / `still-true`.
const PRESENT_VERB = /^Anna (says|asks|tells)\b/;
const PAST_VERB = /^Anna (said|asked|told)\b/;
// A reported request: (pronoun) + (not) to + V1.
const TO_INF = /\b(?:me|us|him|her|them) (?:not )?to [a-z]/;

function checkRender(item: Item, frame: string, r: Render): void {
  const where = `${item.id}/${frame}`;
  ok(!!r.en.trim() && !!r.uk.trim(), `${where}: en and uk required`);
  loc(r.note, `${where}.note`);
  ok(/\.$/.test(r.en), `${where}: a report ends with a full stop — “${r.en}”`);
  ok(!r.en.includes('?'), `${where}: no question mark in a report — “${r.en}”`);
  // Shifts: exact substrings, in sentence order, non-overlapping (segments() returns null otherwise).
  const segs = segments(r);
  ok(segs !== null, `${where}: shifts are not in-order substrings of “${r.en}”`);
  if (segs) ok(segs.map((s) => s.text).join('') === r.en, `${where}: segments round-trip`);
  for (const s of r.shifts) {
    ok(s.kinds.length > 0, `${where}: shift “${s.text}” needs at least one kind`);
    if (s.from !== undefined)
      ok(item.direct.en.toLowerCase().includes(s.from.toLowerCase()), `${where}: shift.from “${s.from}” is not in the direct sentence`);
  }
  const kinds = new Set(r.shifts.flatMap((s) => s.kinds));

  // Frame rules.
  if (frame === 'says') {
    ok(PRESENT_VERB.test(r.en), `${where}: a present reporting verb is required`);
    ok(!kinds.has('tense'), `${where}: a present reporting verb never backshifts`);
  } else {
    ok(PAST_VERB.test(r.en), `${where}: a past reporting verb is required`);
  }
  if (frame === 'said' && item.kind !== 'request') ok(kinds.has('tense'), `${where}: “said, a week later” must show a tense shift`);

  // Kind rules.
  if (item.kind === 'yes-no' || item.kind === 'wh') {
    ok(!INVERTED.test(r.en), `${where}: question order inside the report — “${r.en}”`);
    ok(kinds.has('order'), `${where}: a reported question must mark the statement-order shift`);
  }
  if (item.kind === 'yes-no') {
    ok(/\b(if|whether)\b/.test(r.en) && kinds.has('connector'), `${where}: a yes/no question needs if / whether`);
  }
  if (item.kind === 'request') {
    ok(TO_INF.test(r.en), `${where}: a request is reported as person + (not) to + V1 — “${r.en}”`);
    ok(kinds.has('infinitive'), `${where}: mark the to-infinitive shift`);
    ok(!/\bplease\b|\bdon[’']t\b/i.test(r.en), `${where}: please / don’t must not survive into the report`);
  }
  if (item.kind === 'statement') ok(!/\b(asks|asked)\b/.test(r.en), `${where}: a statement is not asked`);
}

const items = listItems();
ok(items.length === 8, `8 items expected, got ${items.length}`);
ok(new Set(items.map((i) => i.id)).size === items.length, 'item ids are unique');

let renders = 0;
let nas = 0;
for (const kind of SPEECH_KINDS) {
  const ofKind = itemsOfKind(kind);
  ok(ofKind.length === 2, `${kind}: exactly 2 items, got ${ofKind.length}`);
  for (const item of ofKind) {
    loc(item.direct, `${item.id}.direct`);
    ok(getItem(item.id) === item, `${item.id}: getItem agrees with itemsOfKind`);
    const directIsQ = item.direct.en.endsWith('?');
    ok(directIsQ === (kind === 'yes-no' || kind === 'wh'), `${item.id}: direct “?” matches the kind`);
    for (const frame of FRAMES) {
      const r = renderFor(item, frame);
      ok(!!r, `${item.id}: frame ${frame} not authored`);
      if (!r) continue;
      if (isNa(r)) {
        nas++;
        loc(r.na, `${item.id}/${frame}.na`);
        ok(kind === 'request' && frame === 'still-true', `${item.id}/${frame}: only a request's still-true frame may be N/A`);
      } else {
        renders++;
        checkRender(item, frame, r);
      }
    }
    if (kind === 'request') ok(isNa(renderFor(item, 'still-true')), `${item.id}: a request has no still-true variant`);
    // The trap is a real mistake: it must not equal any accepted render.
    ok(!!item.trap.wrong.trim(), `${item.id}: trap.wrong required`);
    loc(item.trap.why, `${item.id}.trap.why`);
    for (const frame of FRAMES) {
      const r = renderFor(item, frame);
      if (r && !isNa(r)) ok(r.en !== item.trap.wrong, `${item.id}: the trap equals the ${frame} render`);
    }
  }
}
ok(renders === 22 && nas === 2, `22 renders + 2 N/A expected, got ${renders}/${nas}`);

// The said frame of a present-tense statement contains its shifted form — spot-check the goldens.
const said = (id: string) => renderFor(getItem(id)!, 'said') as Render;
ok(said('finished-review').en.includes('had finished'), 'Present Perfect → Past Perfect');
ok(said('release-tomorrow').en.includes('would') && said('release-tomorrow').en.includes('the next day'), 'will → would, tomorrow → the next day');
ok(said('staging-server').en.endsWith('where the staging server was.'), 'wh-question: statement order + backshift');
ok(said('start-working').en.includes('there'), 'here → there when reported elsewhere');

// Determinism: lookups return the same object.
ok(renderFor(items[0], 'said') === renderFor(items[0], 'said'), 'lookup is deterministic');

// The guards themselves are honest (a gate that never fails is untested, CLAUDE.md §12).
ok(INVERTED.test('Anna asked where is the server.') && INVERTED.test('Anna asked if did the tests pass.'), 'inversion regex catches violations');
ok(!INVERTED.test('Anna asked where the server was.') && !INVERTED.test('Anna asked if I was coming.'), 'inversion regex has no false positives');
ok(TO_INF.test('Anna told me not to merge it.') && !TO_INF.test('Anna told me don’t merge it.'), 'to-infinitive regex is honest');

if (failures > 0) {
  console.error(`\n✖ test-reported-speech: ${failures} failure(s).`);
  process.exit(1);
}
console.log(
  `✓ test-reported-speech: ${items.length} items × ${FRAMES.length} frames (${renders} renders · ${nas} N/A), shifts are in-order substrings, no question order or do in any report.`,
);
