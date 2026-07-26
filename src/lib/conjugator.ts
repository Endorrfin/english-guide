// CHANGED (TM1+TM2): ★ The Tense Machine engine — pure, deterministic conjugation of any
// (time × aspect × subject × polarity × verb) into the exact sentence, emitted as a token list
// the UI tints: auxiliaries carry the TIME hue, the head form is the ASPECT machinery — the
// "rows share machinery, only the auxiliary changes its time" insight, made per-token visible.
// Rules are ENCODED, never guessed: be/do/have agreement by subject; do-support only in simple
// past/present; -s3 only in present simple affirmative; question = front the first auxiliary;
// negation attaches to the first auxiliary. Full forms only in v1 (the learner sees the
// machinery; a contractions toggle is TM3 — spec §11.4). Mirrors lib/tenses.ts / lib/morpher.ts.
// Golden-tested via scripts/test-conjugator.ts (72 goldens + morphology spots + property sweep).
import type { MachineVerb } from '../data/tenseMachine';
import type { Aspect, TenseTime } from './tenses';

export type MachineSubject = 'I' | 'you' | 'he' | 'she' | 'we' | 'they';
export type Polarity = 'aff' | 'neg' | 'q';

export const MACHINE_SUBJECTS: readonly MachineSubject[] = ['I', 'you', 'he', 'she', 'we', 'they'];
export const POLARITIES: readonly Polarity[] = ['aff', 'neg', 'q'];

/** The +/−/? signs the sims already use (TenseNavigator's forms trio) — reused for the toggle. */
export const POLARITY_SIGN: Record<Polarity, string> = { aff: '+', neg: '−', q: '?' };

export type ConjTokenKind = 'subject' | 'aux' | 'not' | 'head' | 'comp';
export interface ConjToken {
  text: string;
  kind: ConjTokenKind;
}
export interface Conjugation {
  /** Sentence tokens in display order (questions start with the fronted auxiliary). */
  tokens: ConjToken[];
  /** The assembled sentence: 'Has she been writing code?' */
  full: string;
}

const THIRD = new Set<MachineSubject>(['he', 'she']);
const BE_PRESENT: Record<MachineSubject, string> = { I: 'am', you: 'are', he: 'is', she: 'is', we: 'are', they: 'are' };
const BE_PAST: Record<MachineSubject, string> = { I: 'was', you: 'were', he: 'was', she: 'was', we: 'were', they: 'were' };

const doAux = (time: TenseTime, subject: MachineSubject): string =>
  time === 'past' ? 'did' : THIRD.has(subject) ? 'does' : 'do';
const haveAux = (time: TenseTime, subject: MachineSubject): string =>
  time === 'past' ? 'had' : THIRD.has(subject) ? 'has' : 'have';

const cap = (s: string): string => s.charAt(0).toUpperCase() + s.slice(1);

/** The AFFIRMATIVE skeleton of a cell: its auxiliary chain + the content-verb head form. */
function skeleton(
  time: TenseTime,
  aspect: Aspect,
  subject: MachineSubject,
  verb: MachineVerb,
): { aux: string[]; head: string } {
  switch (aspect) {
    case 'simple':
      if (time === 'future') return { aux: ['will'], head: verb.base };
      if (time === 'past') return { aux: [], head: verb.past };
      return { aux: [], head: THIRD.has(subject) ? verb.s3 : verb.base };
    case 'continuous':
      if (time === 'future') return { aux: ['will', 'be'], head: verb.ing };
      return { aux: [time === 'past' ? BE_PAST[subject] : BE_PRESENT[subject]], head: verb.ing };
    case 'perfect':
      if (time === 'future') return { aux: ['will', 'have'], head: verb.part };
      return { aux: [haveAux(time, subject)], head: verb.part };
    case 'perfect-continuous':
      if (time === 'future') return { aux: ['will', 'have', 'been'], head: verb.ing };
      return { aux: [haveAux(time, subject), 'been'], head: verb.ing };
    default: {
      const never: never = aspect;
      return never;
    }
  }
}

/** Pure + deterministic: same inputs → byte-identical output. */
export function conjugate(
  time: TenseTime,
  aspect: Aspect,
  subject: MachineSubject,
  polarity: Polarity,
  verb: MachineVerb,
): Conjugation {
  const { aux, head } = skeleton(time, aspect, subject, verb);
  const tokens: ConjToken[] = [];

  if (polarity === 'q') {
    // Front the first auxiliary; the auxiliary-less simple past/present takes do-support and
    // the head returns to the base form (Did she WRITE …?).
    const fronted = aux.length > 0 ? aux[0] : doAux(time, subject);
    const rest = aux.slice(1);
    tokens.push({ text: cap(fronted), kind: 'aux' });
    tokens.push({ text: subject === 'I' ? 'I' : subject, kind: 'subject' });
    for (const a of rest) tokens.push({ text: a, kind: 'aux' });
    tokens.push({ text: aux.length > 0 ? head : verb.base, kind: 'head' });
  } else if (polarity === 'neg') {
    // `not` attaches to the first auxiliary; do-support where the skeleton has none.
    const chain = aux.length > 0 ? [aux[0], 'not', ...aux.slice(1)] : [doAux(time, subject), 'not'];
    tokens.push({ text: cap(subject), kind: 'subject' });
    for (const a of chain) tokens.push({ text: a, kind: a === 'not' ? 'not' : 'aux' });
    tokens.push({ text: aux.length > 0 ? head : verb.base, kind: 'head' });
  } else {
    tokens.push({ text: cap(subject), kind: 'subject' });
    for (const a of aux) tokens.push({ text: a, kind: 'aux' });
    tokens.push({ text: head, kind: 'head' });
  }

  tokens.push({ text: verb.comp, kind: 'comp' });
  const full = tokens.map((t) => t.text).join(' ') + (polarity === 'q' ? '?' : '.');
  return { tokens, full };
}
