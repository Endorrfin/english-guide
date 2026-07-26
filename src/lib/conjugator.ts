// CHANGED (TM1+TM2): ★ The Tense Machine engine — pure, deterministic conjugation of any
// (time × aspect × subject × polarity × verb) into the exact sentence, emitted as a token list
// the UI tints: auxiliaries carry the TIME hue, the head form is the ASPECT machinery — the
// "rows share machinery, only the auxiliary changes its time" insight, made per-token visible.
// Rules are ENCODED, never guessed: be/do/have agreement by subject; do-support only in simple
// past/present; -s3 only in present simple affirmative; question = front the first auxiliary;
// negation attaches to the first auxiliary. Mirrors lib/tenses.ts / lib/morpher.ts.
// CHANGED (TM3): + the contractions layer (spec §11.4) — conjugate() takes an optional render
// style: 'full' (default, the v1 behaviour byte-for-byte) or 'short'. Short is a pure token
// post-transform, table-driven like everything else: the FIRST auxiliary either cliticizes onto
// the subject in the affirmative (’ll ’m ’s ’re ’ve ’d — was/were have no clitic and stay full)
// or fuses with `not` in the negative (won’t isn’t hasn’t don’t…; am+not has no n’t form, so it
// renders as the subject clitic + full not: “I’m not writing”). Questions never contract — the
// fronted auxiliary has no host to cliticize onto. The n’t/clitic sets are exactly the ones
// lib/exercise.ts canonical() expands, so both renders normalize to one answer wherever the
// clitic is unambiguous (’s/’d stay distinct by design — the exercise-engine ambiguity policy).
// Golden-tested via scripts/test-conjugator.ts (72 + 72 goldens + morphology spots + sweeps).
import type { MachineVerb } from '../data/tenseMachine';
import type { Aspect, TenseTime } from './tenses';

export type MachineSubject = 'I' | 'you' | 'he' | 'she' | 'we' | 'they';
export type Polarity = 'aff' | 'neg' | 'q';

export const MACHINE_SUBJECTS: readonly MachineSubject[] = ['I', 'you', 'he', 'she', 'we', 'they'];
export const POLARITIES: readonly Polarity[] = ['aff', 'neg', 'q'];

/** The +/−/? signs the sims already use (TenseNavigator's forms trio) — reused for the toggle. */
export const POLARITY_SIGN: Record<Polarity, string> = { aff: '+', neg: '−', q: '?' };

// CHANGED (TM3): the render style — 'full' shows the machinery, 'short' the natural speech.
export type ConjStyle = 'full' | 'short';
export const CONJ_STYLES: readonly ConjStyle[] = ['full', 'short'];

export type ConjTokenKind = 'subject' | 'aux' | 'not' | 'head' | 'comp';
export interface ConjToken {
  text: string;
  kind: ConjTokenKind;
  /** CHANGED (TM3): a clitic that attaches to the PREVIOUS token with no space (’ll ’m ’s …). */
  glue?: true;
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

// CHANGED (TM3): the contraction tables — the whole 'short' style, encoded. Typographic ’ per
// house style; lib/exercise.ts unifies ’ → ' before comparing, so both renders stay one answer.
/** Affirmative: the FIRST auxiliary cliticizes onto the subject. No entry (was/were) = no clitic. */
const AFF_CLITIC: Record<string, string> = {
  will: '’ll',
  am: '’m',
  is: '’s',
  are: '’re',
  have: '’ve',
  has: '’s',
  had: '’d',
};
/** Negative: the FIRST auxiliary fuses with `not`. am+not has no n’t form (see toShort). */
const NEG_SHORT: Record<string, string> = {
  will: 'won’t',
  do: 'don’t',
  does: 'doesn’t',
  did: 'didn’t',
  is: 'isn’t',
  are: 'aren’t',
  was: 'wasn’t',
  were: 'weren’t',
  have: 'haven’t',
  has: 'hasn’t',
  had: 'hadn’t',
};

/** CHANGED (TM3): pure token transform full → short. Questions pass through untouched — the
 *  fronted auxiliary has no subject host to its left, so English keeps it full (Will she …?). */
function toShort(tokens: ConjToken[]): ConjToken[] {
  if (tokens[0]?.kind !== 'subject') return tokens; // a question — nothing contracts
  const auxAt = tokens.findIndex((t) => t.kind === 'aux');
  if (auxAt === -1) return tokens; // simple past/present affirmative — no auxiliary at all
  const aux = tokens[auxAt];
  const negAt = tokens.findIndex((t) => t.kind === 'not');
  if (negAt === auxAt + 1) {
    // Negative: fuse aux + not → n’t … except am, which contracts on the subject side instead.
    if (aux.text === 'am') {
      return tokens.map((t, i) => (i === auxAt ? { text: '’m', kind: 'aux' as const, glue: true as const } : t));
    }
    const fused = NEG_SHORT[aux.text];
    if (!fused) return tokens;
    return tokens.flatMap((t, i) =>
      i === auxAt ? [{ text: fused, kind: 'aux' as const }] : i === negAt ? [] : [t],
    );
  }
  // Affirmative: the first auxiliary becomes a clitic on the subject (if it has one).
  const clitic = AFF_CLITIC[aux.text];
  if (!clitic) return tokens; // was/were — English has no affirmative clitic for them
  return tokens.map((t, i) => (i === auxAt ? { text: clitic, kind: 'aux' as const, glue: true as const } : t));
}

/** CHANGED (TM3): assembly is glue-aware — a clitic token joins the previous one with no space. */
const assemble = (tokens: ConjToken[], terminal: '.' | '?'): string =>
  tokens.map((t, i) => (i > 0 && !t.glue ? ' ' : '') + t.text).join('') + terminal;

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

/** Pure + deterministic: same inputs → byte-identical output.
 *  CHANGED (TM3): `style` picks the render — 'full' (default; TM1+TM2 behaviour byte-for-byte)
 *  or 'short' (contracted). Same machinery, one extra table-driven transform. */
export function conjugate(
  time: TenseTime,
  aspect: Aspect,
  subject: MachineSubject,
  polarity: Polarity,
  verb: MachineVerb,
  style: ConjStyle = 'full',
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
  // CHANGED (TM3): apply the contraction transform, then assemble glue-aware.
  const rendered = style === 'short' ? toShort(tokens) : tokens;
  return { tokens: rendered, full: assemble(rendered, polarity === 'q' ? '?' : '.') };
}
