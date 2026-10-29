// CHANGED (A1): the ★ Causative Switch engine (m24) — two tracks of authored frames for TokenMorph.
// CAUSATIVE: one action walked through who-does-it forms — active (you do it) → have + object + V3
// (you arrange it) → get + object + V3 (same, informal) → have + person + V1 (name who did it) →
// get + person + to + V1 (you persuaded them) → have + object + V3 for something bad that happened TO
// you. REPORTING: People say that … → It is said that … → X is said to (have) … — the impersonal
// passive of reporting verbs. Forms per Cambridge (Have something done · Get · Passive: uses) and
// British Council LearnEnglish (Advanced passives review). Content: src/data/causativeSwitch.ts.
// Golden test: scripts/test-causative.ts. The "who does it" SCENE is derived from the form here, so
// the data never restates it.
import type { Localized } from '../data/types';
import { SCENARIOS } from '../data/causativeSwitch';
import { parseLine } from './tokenMorph';
import type { MorphToken } from './tokenMorph';

export type CsTrack = 'causative' | 'reporting';
export const CS_TRACKS: readonly CsTrack[] = ['causative', 'reporting'];

export type CsForm =
  | 'active'
  | 'have-v3'
  | 'get-v3'
  | 'have-do'
  | 'get-to-do'
  | 'have-bad'
  | 'people-say'
  | 'it-is-said'
  | 'is-said-to';

/** The fixed form order of each track. */
export const TRACK_FORMS: Record<CsTrack, readonly CsForm[]> = {
  causative: ['active', 'have-v3', 'get-v3', 'have-do', 'get-to-do', 'have-bad'],
  reporting: ['people-say', 'it-is-said', 'is-said-to'],
};

export const FORM_LABEL: Record<CsForm, Localized> = {
  active: { en: 'You do it', uk: 'Ви робите самі' },
  'have-v3': { en: 'You arrange it', uk: 'Ви це організовуєте' },
  'get-v3': { en: 'Same, informal', uk: 'Те саме, розмовно' },
  'have-do': { en: 'Name who did it', uk: 'Назвати виконавця' },
  'get-to-do': { en: 'You persuaded them', uk: 'Ви їх умовили' },
  'have-bad': { en: 'It happened to you', uk: 'Це сталося з вами' },
  'people-say': { en: 'Who says it', uk: 'Хто це каже' },
  'it-is-said': { en: 'It is said that …', uk: 'It is said that …' },
  'is-said-to': { en: 'X is said to …', uk: 'X is said to …' },
};

export const FORM_PATTERN: Record<CsForm, string> = {
  active: 'subject + verb + object',
  'have-v3': 'have + object + V3',
  'get-v3': 'get + object + V3',
  'have-do': 'have + person + V1',
  'get-to-do': 'get + person + to + V1',
  'have-bad': 'have + object + V3 (unwanted)',
  'people-say': 'People say that …',
  'it-is-said': 'It + is + V3 + that …',
  'is-said-to': 'subject + is + V3 + to (have) …',
};

export type CsFrame = { src: string; uk: string; note: Localized };

export type CsScenario = {
  id: string;
  track: CsTrack;
  title: Localized;
  /** Who does the work when you don't (causative track only) — shown in the scene. */
  pro?: Localized;
  /** What the work is done to (causative track only) — the scene's third node. */
  thing?: Localized;
  /** One frame per form of the track, in TRACK_FORMS order. */
  frames: CsFrame[];
  trap: { wrong: string; why: Localized };
};

/** Who acts in a causative frame — the scene above the sentence. */
export type Scene = {
  you: 'doer' | 'arranger' | 'affected';
  pro: 'none' | 'anon' | 'named' | 'unknown';
};

export function sceneOf(form: CsForm): Scene | null {
  switch (form) {
    case 'active':
      return { you: 'doer', pro: 'none' };
    case 'have-v3':
    case 'get-v3':
      return { you: 'arranger', pro: 'anon' };
    case 'have-do':
    case 'get-to-do':
      return { you: 'arranger', pro: 'named' };
    case 'have-bad':
      return { you: 'affected', pro: 'unknown' };
    default:
      return null;
  }
}

export function scenariosOf(track: CsTrack): CsScenario[] {
  return SCENARIOS.filter((s) => s.track === track);
}

export function listScenarios(): readonly CsScenario[] {
  return SCENARIOS;
}

const cache = new Map<string, MorphToken[]>();
export function tokensOf(frame: CsFrame): MorphToken[] {
  let t = cache.get(frame.src);
  if (!t) {
    t = parseLine(frame.src);
    cache.set(frame.src, t);
  }
  return t;
}
