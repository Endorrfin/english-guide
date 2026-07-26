// CHANGED (TM1+TM2): ★ The Tense Machine — emulator data (spec: TENSE-MACHINE-SPEC.md §4).
// Curated verbs with PRECOMPUTED forms — no runtime morphology guessing, per the correctness
// mandate: every form is authored and verifiable against learner dictionaries. Deliberately
// self-contained (NO import from data/irregular.ts) so the Machine's lazy route chunk stays
// decoupled and check:bundle-trivial. The set covers the spelling machinery a learner must see:
// 3rd-person -es (go/fix) and -ies (study), -ing doubling (stop/run), silent-e drop (write/make),
// unchanged-spelling read, plus regular work/play as the baseline. Consumed by lib/conjugator.ts
// (pure, golden-tested via scripts/test-conjugator.ts) and the #/tenses page.
import type { Localized } from './types';

/** One emulator verb: all five forms authored, plus a fixed natural complement (house style:
 *  everyday + office/dev flavor) and a UA infinitive gloss for the bilingual line. */
export interface MachineVerb {
  /** Stable id (used in the share-URL `?v=` param) — append-only, never rename. */
  id: string;
  base: string; // write
  s3: string; // writes — 3rd-person singular present
  past: string; // wrote — V2
  part: string; // written — V3
  ing: string; // writing
  comp: string; // 'code' → "She has been writing code."
  gloss: Localized; // { en: 'to write', uk: 'писати' }
}

/** ≤12 by spec guardrail; `write` first — it is the page's default verb. */
export const MACHINE_VERBS: readonly MachineVerb[] = [
  { id: 'write', base: 'write', s3: 'writes', past: 'wrote', part: 'written', ing: 'writing', comp: 'code', gloss: { en: 'to write', uk: 'писати' } },
  { id: 'work', base: 'work', s3: 'works', past: 'worked', part: 'worked', ing: 'working', comp: 'at the office', gloss: { en: 'to work', uk: 'працювати' } },
  { id: 'build', base: 'build', s3: 'builds', past: 'built', part: 'built', ing: 'building', comp: 'the app', gloss: { en: 'to build', uk: 'будувати' } },
  { id: 'run', base: 'run', s3: 'runs', past: 'ran', part: 'run', ing: 'running', comp: 'the tests', gloss: { en: 'to run', uk: 'запускати' } },
  { id: 'fix', base: 'fix', s3: 'fixes', past: 'fixed', part: 'fixed', ing: 'fixing', comp: 'the bug', gloss: { en: 'to fix', uk: 'лагодити' } },
  { id: 'read', base: 'read', s3: 'reads', past: 'read', part: 'read', ing: 'reading', comp: 'the docs', gloss: { en: 'to read', uk: 'читати' } },
  { id: 'study', base: 'study', s3: 'studies', past: 'studied', part: 'studied', ing: 'studying', comp: 'English', gloss: { en: 'to study', uk: 'вивчати' } },
  { id: 'make', base: 'make', s3: 'makes', past: 'made', part: 'made', ing: 'making', comp: 'coffee', gloss: { en: 'to make', uk: 'робити' } },
  { id: 'eat', base: 'eat', s3: 'eats', past: 'ate', part: 'eaten', ing: 'eating', comp: 'lunch', gloss: { en: 'to eat', uk: 'їсти' } },
  { id: 'play', base: 'play', s3: 'plays', past: 'played', part: 'played', ing: 'playing', comp: 'chess', gloss: { en: 'to play', uk: 'грати' } },
  { id: 'go', base: 'go', s3: 'goes', past: 'went', part: 'gone', ing: 'going', comp: 'to the gym', gloss: { en: 'to go', uk: 'ходити' } },
  { id: 'stop', base: 'stop', s3: 'stops', past: 'stopped', part: 'stopped', ing: 'stopping', comp: 'the recording', gloss: { en: 'to stop', uk: 'зупиняти' } },
];

export function getMachineVerb(id: string): MachineVerb | undefined {
  return MACHINE_VERBS.find((v) => v.id === id);
}
