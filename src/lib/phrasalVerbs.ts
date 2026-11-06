// CHANGED (VA2): the pure engine of ★ Particle Hinge (m32). Whether a phrasal verb CAN split is a fact of
// the lexicon, declared per SENSE (take off a jacket is separable; a plane that takes off has no object at
// all). Where the object GOES then follows mechanically from that class + the kind of object, and that is
// what this module computes:
//   · separable + pronoun  → only between verb and particle (turn it off · ✕ turn off it)
//   · separable + noun     → either place (turn the lights off · turn off the lights)
//   · separable + long     → after the particle; between is possible but less preferred, NOT an error
//   · inseparable          → never between (look after it · ✕ look it after)
//   · three-part           → never between the parts (come up with it · ✕ come up it with)
//   · intransitive         → no object to place (the plane took off · ✕ took it off)
// Per British Council (Word order in phrasal verbs; Phrasal verbs) + Cambridge (Phrasal verbs and
// multi-word verbs). The kind of object is computed too, from its words ("long" = 5+ words: BC, "more
// than four or five words"). Frames are AUTHORED (src/data/phrasalHinge.ts); the golden test checks
// arrange() == the authored sentence and diagnose(authored tokens) == placement() for every cell.
import { PH_SENSES, PH_TRAPS } from '../data/phrasalHinge';
import type { Localized } from '../data/types';
import { parseLine, textOf } from './tokenMorph';
import type { MorphToken } from './tokenMorph';

export type VerbClass = 'separable' | 'inseparable' | 'three-part' | 'intransitive';
export const VERB_CLASSES: readonly VerbClass[] = ['separable', 'inseparable', 'three-part', 'intransitive'];
export type ObjectKind = 'pronoun' | 'noun' | 'long';
export const OBJECT_KINDS: readonly ObjectKind[] = ['pronoun', 'noun', 'long'];
/** split = object before the (last) particle · after = object after every particle · bare = no object. */
export type Position = 'split' | 'after' | 'bare';
export type Issue = 'pronoun-after' | 'long-split' | 'split-inseparable' | 'split-three-part' | 'object-intransitive';
export type Status = 'ok' | 'awkward' | 'wrong';
export type Placement = { status: Status; issue?: Issue };
export type CellKey = `${ObjectKind}:${'split' | 'after'}` | 'bare' | 'object';
export type PhTrack = 'place' | 'traps';
export const PH_TRACKS: readonly PhTrack[] = ['place', 'traps'];

export type PhSense = {
  id: string;
  /** The card in the Words hub (#/idioms/<hub>) — the module teaches the system, the card stays there. */
  hub: string;
  title: string;
  gloss: Localized;
  cls: VerbClass;
  subject: string;
  /** The inflected verb as it appears in the sentence (no particle). */
  verb: string;
  particles: readonly string[];
  /** Words after the verb group (time phrase), if any. */
  tail?: string;
  /** Sentence-final mark, default '.'. */
  end?: string;
  objects?: Readonly<Record<ObjectKind, string>>;
  /** The Ukrainian meaning per object kind, or `bare` for an intransitive sense. */
  uk: Partial<Record<ObjectKind | 'bare', string>>;
  /** AUTHORED lines, TokenMorph syntax with |verb |ptcl |obj roles. */
  lines: Partial<Record<CellKey, string>>;
};

export type PhTrap = {
  id: string;
  /** The short name on the trap's chip. */
  label: string;
  hub: string;
  cls: VerbClass;
  wrong: string;
  right: string;
  /** What diagnose() must find in `wrong` — exactly this one issue. */
  expect: Issue;
  uk: string;
};

export const CLASS_LABEL: Record<VerbClass, Localized> = {
  separable: { en: 'Separable', uk: 'Separable (розділюване)' },
  inseparable: { en: 'Inseparable', uk: 'Inseparable (нерозділюване)' },
  'three-part': { en: 'Three-part', uk: 'Three-part (зі трьох частин)' },
  intransitive: { en: 'No object', uk: 'Без додатка' },
};
export const CLASS_RULE: Record<VerbClass, Localized> = {
  separable: {
    en: 'The particle is an adverb, so the object may stand on either side of it.',
    uk: 'Частка тут — прислівник, тому додаток може стояти з будь-якого її боку.',
  },
  inseparable: {
    en: 'The particle works as a preposition, and a preposition keeps its object right after it.',
    uk: 'Частка тут працює як прийменник, а прийменник тримає додаток одразу після себе.',
  },
  'three-part': {
    en: 'Two particles, and the last one is a preposition: the object always comes after both, even a pronoun.',
    uk: 'Дві частки, і остання — прийменник: додаток завжди йде після обох, навіть займенник.',
  },
  intransitive: {
    en: 'This sense takes no object, so there is nothing to place. Another sense of the same verb may take one.',
    uk: 'Це значення не бере додатка, тож розміщувати нічого. Інше значення того ж дієслова може його брати.',
  },
};
export const KIND_LABEL: Record<ObjectKind, Localized> = {
  pronoun: { en: 'Pronoun', uk: 'Займенник' },
  noun: { en: 'Short noun', uk: 'Короткий іменник' },
  long: { en: 'Long noun phrase', uk: 'Довга іменна група' },
};
export const POSITION_LABEL: Record<Position, Localized> = {
  split: { en: 'Between', uk: 'Між частинами' },
  after: { en: 'After the particle', uk: 'Після частки' },
  bare: { en: 'No object', uk: 'Без додатка' },
};
/** The ✕ frame of a verb sense that takes no object: "Between" would describe nothing there. */
export const WITH_OBJECT_LABEL: Localized = { en: 'With an object', uk: 'З додатком' };
export const OK_TEXT: Record<'split' | 'after' | 'bare', Localized> = {
  split: { en: 'A pronoun or a short noun can stand between verb and particle.', uk: 'Займенник чи короткий іменник може стояти між дієсловом і часткою.' },
  after: { en: 'The object follows the particle.', uk: 'Додаток стоїть після частки.' },
  bare: { en: 'No object is needed: the verb and its particle are the whole predicate.', uk: 'Додаток не потрібен: дієслово з часткою — вже весь присудок.' },
};
export const ISSUE_TEXT: Record<Issue, Localized> = {
  'pronoun-after': {
    en: 'A pronoun must go between the verb and the particle of a separable verb.',
    uk: 'Займенник має стояти між дієсловом і часткою розділюваного дієслова.',
  },
  'long-split': {
    en: 'Not an error, but less preferred: a long object is easier to follow after the particle.',
    uk: 'Не помилка, але менш бажано: довгий додаток легше сприймати після частки.',
  },
  'split-inseparable': {
    en: 'This verb never splits: the object follows the particle, even when it is a pronoun.',
    uk: 'Це дієслово ніколи не розділяється: додаток іде після частки, навіть займенник.',
  },
  'split-three-part': {
    en: 'A three-part verb never splits: the object follows both particles, even when it is a pronoun.',
    uk: 'Дієслово з трьох частин ніколи не розділяється: додаток іде після обох часток, навіть займенник.',
  },
  'object-intransitive': {
    en: 'This sense takes no object, so nothing can go between the verb and the particle.',
    uk: 'Це значення не бере додатка, тож між дієсловом і часткою нічого не може стояти.',
  },
};

const PRONOUNS = new Set(['me', 'you', 'him', 'her', 'it', 'us', 'them']);
/** BC: keeping verb and particle together is preferred when the object is "more than four or five words". */
export const LONG_WORDS = 5;

/** The kind of object, computed from its words. A possessive *her jacket* is a noun: two words. */
export function objectKindOf(text: string): ObjectKind {
  const words = text.trim().toLowerCase().split(/\s+/);
  if (words.length === 1 && PRONOUNS.has(words[0])) return 'pronoun';
  return words.length >= LONG_WORDS ? 'long' : 'noun';
}

/** THE rule: is this object kind legal in this position, for this class of verb? */
export function placement(cls: VerbClass, kind: ObjectKind | null, pos: Position): Placement {
  if (cls === 'intransitive') return pos === 'bare' ? { status: 'ok' } : { status: 'wrong', issue: 'object-intransitive' };
  if (pos === 'bare') throw new Error(`phrasalVerbs: a ${cls} verb needs an object`);
  if (!kind) throw new Error('phrasalVerbs: an object kind is required');
  if (cls === 'inseparable') return pos === 'split' ? { status: 'wrong', issue: 'split-inseparable' } : { status: 'ok' };
  if (cls === 'three-part') return pos === 'split' ? { status: 'wrong', issue: 'split-three-part' } : { status: 'ok' };
  if (kind === 'pronoun' && pos === 'after') return { status: 'wrong', issue: 'pronoun-after' };
  if (kind === 'long' && pos === 'split') return { status: 'awkward', issue: 'long-split' };
  return { status: 'ok' };
}

const RANK: Record<Status, number> = { wrong: 0, awkward: 1, ok: 2 };

/** The positions to walk through: worst first, so a walk always ENDS on a correct sentence. */
export function walk(cls: VerbClass, kind: ObjectKind): Position[] {
  const all: Position[] = cls === 'intransitive' ? ['split', 'bare'] : ['split', 'after'];
  return [...all].sort((a, b) => RANK[placement(cls, kind, a).status] - RANK[placement(cls, kind, b).status]);
}

export function cellKey(cls: VerbClass, kind: ObjectKind, pos: Position): CellKey {
  if (cls === 'intransitive') return pos === 'bare' ? 'bare' : 'object';
  if (pos === 'bare') throw new Error(`phrasalVerbs: a ${cls} verb has no bare cell`);
  return `${kind}:${pos}`;
}

/** The word order the rule computes, as plain text — the golden test compares it with the authored line. */
export function arrange(s: PhSense, kind: ObjectKind, pos: Position): string {
  const obj = s.cls === 'intransitive' ? 'it' : s.objects?.[kind];
  if (pos !== 'bare' && !obj) throw new Error(`phrasalVerbs: ${s.id} has no object`);
  const head = s.particles.slice(0, -1);
  const lastP = s.particles[s.particles.length - 1];
  const parts =
    pos === 'bare'
      ? [s.subject, s.verb, ...s.particles]
      : pos === 'split'
        ? [s.subject, s.verb, ...head, obj, lastP]
        : [s.subject, s.verb, ...s.particles, obj];
  return `${[...parts, ...(s.tail ? [s.tail] : [])].join(' ')}${s.end ?? '.'}`;
}

export function tokensOf(line: string): MorphToken[] {
  return parseLine(line);
}

/**
 * Read the ORDER off the tokens (|verb |ptcl |obj) and name what is wrong, given only the verb's class.
 * Nothing about the sentence is declared here except the class — so a mis-authored line fails the test.
 */
export function diagnose(tokens: readonly MorphToken[], cls: VerbClass): Issue[] {
  const objs = tokens.flatMap((t, i) => (t.role === 'obj' ? [i] : []));
  const ptcls = tokens.flatMap((t, i) => (t.role === 'ptcl' ? [i] : []));
  if (ptcls.length === 0) throw new Error(`phrasalVerbs: no particle in "${textOf(tokens)}"`);
  if (objs.length === 0) return [];
  if (objs[objs.length - 1] - objs[0] !== objs.length - 1) throw new Error(`phrasalVerbs: split object in "${textOf(tokens)}"`);
  if (cls === 'intransitive') return ['object-intransitive'];
  const kind = objectKindOf(objs.map((i) => tokens[i].w).join(' '));
  const beforeLast = objs[0] < ptcls[ptcls.length - 1];
  if (cls === 'inseparable') return beforeLast ? ['split-inseparable'] : [];
  if (cls === 'three-part') return beforeLast ? ['split-three-part'] : [];
  if (kind === 'pronoun' && !beforeLast) return ['pronoun-after'];
  if (kind === 'long' && beforeLast) return ['long-split'];
  return [];
}

/** Where the object actually stands in these tokens: the scene describes the sentence shown, not the track. */
export function positionOf(tokens: readonly MorphToken[]): Position {
  const obj = tokens.findIndex((t) => t.role === 'obj');
  if (obj < 0) return 'bare';
  const lastP = tokens.map((t) => t.role).lastIndexOf('ptcl');
  return obj < lastP ? 'split' : 'after';
}

export const statusOfIssue = (issues: readonly Issue[]): Status =>
  issues.length === 0 ? 'ok' : issues.includes('long-split') ? 'awkward' : 'wrong';

export function listSenses(): readonly PhSense[] {
  return PH_SENSES;
}
export function sensesOf(cls: VerbClass): PhSense[] {
  return PH_SENSES.filter((s) => s.cls === cls);
}
export function senseById(id: string): PhSense {
  const s = PH_SENSES.find((x) => x.id === id);
  if (!s) throw new Error(`phrasalVerbs: unknown sense "${id}"`);
  return s;
}
export function listTraps(): readonly PhTrap[] {
  return PH_TRAPS;
}
/** The authored tokens of one frame. */
export function frameOf(s: PhSense, kind: ObjectKind, pos: Position): MorphToken[] {
  const line = s.lines[cellKey(s.cls, kind, pos)];
  if (!line) throw new Error(`phrasalVerbs: ${s.id} has no line for ${kind}:${pos}`);
  return parseLine(line);
}
