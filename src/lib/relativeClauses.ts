// CHANGED (A2): the ★ Clause Welder engine (m25) — two tracks of authored frames for TokenMorph.
// WELD: two sentences share a person or thing; the second one is welded INTO the first as a relative
// clause — the shared word (she · it · her · in it · him) leaves and a relative word arrives (who ·
// which · that · whose · where · ∅), then a third frame shows the lighter variant (drop the object
// pronoun · reduce who is -ing / which was V3 · move the preposition). The JOINT is what the shared
// word did in sentence 2 (subject · object · possessive · place · after a preposition), and it alone
// decides the relative word. COMMAS: the same clause with and without commas — defining (picks out
// some) → non-defining (adds a fact about all) → which pointing back at a whole clause.
// Rules per Cambridge (Relative clauses: defining and non-defining · Relative pronouns · Whose ·
// Relative clauses referring to a whole sentence · Relative clauses — non-finite) and British Council
// LearnEnglish (Relative pronouns and relative clauses — with that, the preposition goes to the end).
// Content: src/data/clauseWelder.ts. Golden test: scripts/test-clause-welder.ts. The set SCENE of the
// commas track and the relative word shown in the joint chip are derived here, never restated in data.
import type { Localized } from '../data/types';
import { WELD_SCENARIOS } from '../data/clauseWelder';
import { parseLine } from './tokenMorph';
import type { MorphToken } from './tokenMorph';

export type RcTrack = 'weld' | 'commas';
export const RC_TRACKS: readonly RcTrack[] = ['weld', 'commas'];

export type RcJoint = 'subject' | 'object' | 'whose' | 'where' | 'prep';
export const RC_JOINTS: readonly RcJoint[] = ['subject', 'object', 'whose', 'where', 'prep'];

export type RcKind =
  | 'two'
  | 'subj-rel'
  | 'reduced'
  | 'obj-rel'
  | 'zero'
  | 'whose'
  | 'where'
  | 'prep-end'
  | 'prep-front'
  | 'defining'
  | 'non-defining'
  | 'sentence-which';

/** The fixed frame walk of each joint (weld track) and of the commas track. */
export const JOINT_KINDS: Record<RcJoint, readonly RcKind[]> = {
  subject: ['two', 'subj-rel', 'reduced'],
  object: ['two', 'obj-rel', 'zero'],
  whose: ['two', 'whose'],
  where: ['two', 'where', 'prep-end'],
  prep: ['two', 'prep-end', 'prep-front'],
};
export const COMMA_KINDS: readonly RcKind[] = ['defining', 'non-defining', 'sentence-which'];

/** Kinds whose frame must carry exactly one relative word (role `rel`); the rest carry none. */
export const HAS_REL: Record<RcKind, boolean> = {
  two: false,
  'subj-rel': true,
  reduced: false,
  'obj-rel': true,
  zero: false,
  whose: true,
  where: true,
  'prep-end': false,
  'prep-front': true,
  defining: true,
  'non-defining': true,
  'sentence-which': true,
};

export const JOINT_LABEL: Record<RcJoint, Localized> = {
  subject: { en: 'It is the subject (she / it does …)', uk: 'Підмет (she / it робить …)' },
  object: { en: 'It is the object (… opened it)', uk: 'Додаток (… opened it)' },
  whose: { en: 'It owns something (her / its …)', uk: 'Чиєсь (her / its …)' },
  where: { en: 'It is a place (… in it)', uk: 'Місце (… in it)' },
  prep: { en: 'It follows a preposition (to him)', uk: 'Після прийменника (to him)' },
};

export const KIND_LABEL: Record<RcKind, Localized> = {
  two: { en: 'Two sentences', uk: 'Два речення' },
  'subj-rel': { en: 'Weld: who / which', uk: 'Зварити: who / which' },
  reduced: { en: 'Reduce it', uk: 'Скоротити' },
  'obj-rel': { en: 'Weld: that / who', uk: 'Зварити: that / who' },
  zero: { en: 'Drop the pronoun', uk: 'Прибрати займенник' },
  whose: { en: 'Weld: whose', uk: 'Зварити: whose' },
  where: { en: 'Weld: where', uk: 'Зварити: where' },
  'prep-end': { en: 'Preposition at the end', uk: 'Прийменник у кінці' },
  'prep-front': { en: 'Formal: preposition first', uk: 'Формально: прийменник спереду' },
  defining: { en: 'No commas: which ones?', uk: 'Без ком: які саме?' },
  'non-defining': { en: 'Commas: extra fact', uk: 'Коми: додатковий факт' },
  'sentence-which': { en: 'which = the whole clause', uk: 'which = усе речення' },
};

export const KIND_PATTERN: Record<RcKind, string> = {
  two: 'sentence 1. sentence 2.',
  'subj-rel': 'noun + who / which / that + verb',
  reduced: 'noun + -ing / V3',
  'obj-rel': 'noun + that / who / which + subject + verb',
  zero: 'noun + subject + verb   (object pronoun dropped)',
  whose: 'noun + whose + noun + verb',
  where: 'place + where + subject + verb',
  'prep-end': 'noun + subject + verb + preposition',
  'prep-front': 'noun + preposition + whom / which + …',
  defining: 'noun + that / who / which …   (no commas)',
  'non-defining': 'noun, who / which …,   (never that)',
  'sentence-which': 'clause, which …',
};

export const KIND_NOTE: Record<RcKind, Localized> = {
  two: {
    en: 'Two sentences that share one person or thing. Find the shared word in sentence 2 — what it DOES there picks the relative word.',
    uk: 'Два речення з однією спільною людиною чи річчю. Знайдіть спільне слово в реченні 2 — те, що воно там РОБИТЬ, обирає relative word.',
  },
  'subj-rel': {
    en: 'The shared word was the subject, so it becomes who (people) or which (things) — that works for both in a defining clause. The clause sits right after its noun.',
    uk: 'Спільне слово було підметом, тож стає who (люди) або which (речі) — that пасує до обох у defining clause. Речення стоїть одразу після свого іменника.',
  },
  reduced: {
    en: 'who / which / that + be can drop out: who is sitting → sitting, which was reported → reported. What is left is a participle phrase — m26 starts here.',
    uk: 'who / which / that + be можуть випасти: who is sitting → sitting, which was reported → reported. Лишається participle phrase — звідси починається m26.',
  },
  'obj-rel': {
    en: 'The shared word was the object, so the clause already has its own subject (Anna, we). Use that, who or which — and the old pronoun (it, him) must go.',
    uk: 'Спільне слово було додатком, тож у реченні вже є свій підмет (Anna, we). Вживайте that, who чи which — а старий займенник (it, him) мусить зникнути.',
  },
  zero: {
    en: 'An object relative pronoun can be dropped in a defining clause: the PR (that) Anna opened. This is the most common form in speech.',
    uk: 'Relative pronoun у ролі додатка можна опустити в defining clause: the PR (that) Anna opened. У мовленні це найпоширеніша форма.',
  },
  whose: {
    en: 'her / his / its / their becomes whose — for people AND things. whose is never dropped, and it is not who’s (= who is).',
    uk: 'her / his / its / their стає whose — і для людей, І для речей. whose ніколи не опускається, і це не who’s (= who is).',
  },
  where: {
    en: 'A place + in it / at it becomes where. where replaces the whole “in it”, so no preposition is left behind.',
    uk: 'Місце + in it / at it стає where. where замінює все «in it», тож прийменник не лишається.',
  },
  'prep-end': {
    en: 'The everyday form: the preposition stays where the verb needs it, at the end, and the pronoun is dropped (or that).',
    uk: 'Повсякденна форма: прийменник лишається там, де його потребує дієслово, — у кінці, а займенник опускається (або that).',
  },
  'prep-front': {
    en: 'The formal form: the preposition moves to the front and takes whom (people) or which (things). Never “to that” or “to who”.',
    uk: 'Формальна форма: прийменник переходить наперед і бере whom (люди) або which (речі). Ніколи «to that» чи «to who».',
  },
  defining: {
    en: 'No commas: the clause tells you WHICH ones. Remove it and the sentence talks about a different group.',
    uk: 'Без ком: речення каже, ЯКІ САМЕ. Приберіть його — і речення говоритиме про іншу групу.',
  },
  'non-defining': {
    en: 'Commas: the clause adds a fact about ALL of them — you could remove it and still know who is meant. Never that after a comma.',
    uk: 'Коми: речення додає факт про ВСІХ — його можна прибрати, і все одно ясно, про кого мова. Після коми ніколи не that.',
  },
  'sentence-which': {
    en: 'which can point back at the whole clause before it, not at one noun. Always which (not what, not that), always after a comma.',
    uk: 'which може вказувати на все попереднє речення, а не на один іменник. Завжди which (не what, не that), завжди після коми.',
  },
};

export type RcFrame = { src: string; uk: string };

export type RcScenario = {
  id: string;
  track: RcTrack;
  /** Weld track: what the shared word did in sentence 2. */
  joint?: RcJoint;
  title: Localized;
  /** Weld track: the word in sentence 2 that the relative replaces (she · it · her · him). */
  shared?: string;
  /** Weld track, joints where / prep: the preposition the verb needs (in · to · on). */
  prep?: string;
  /** Commas track: the group the scene draws (how many, how many the defining clause picks). */
  set?: { noun: Localized; total: number; picked: number };
  /** One frame per kind of the walk, in JOINT_KINDS / COMMA_KINDS order. */
  frames: RcFrame[];
  trap: { wrong: string; why: Localized };
};

export function kindsOf(sc: RcScenario): readonly RcKind[] {
  return sc.track === 'commas' ? COMMA_KINDS : JOINT_KINDS[sc.joint ?? 'subject'];
}

export function scenariosOf(track: RcTrack, joint?: RcJoint): RcScenario[] {
  return WELD_SCENARIOS.filter((s) => s.track === track && (track === 'commas' || s.joint === joint));
}

export function listScenarios(): readonly RcScenario[] {
  return WELD_SCENARIOS;
}

/** The commas-track scene: which part of the group the clause is about. */
export type SetMode = 'subset' | 'all' | 'whole';
export function setModeOf(kind: RcKind): SetMode | null {
  if (kind === 'defining') return 'subset';
  if (kind === 'non-defining') return 'all';
  if (kind === 'sentence-which') return 'whole';
  return null;
}

/** The relative word of a frame (role `rel`), or null when the frame has none (two · zero · reduced). */
export function relOf(tokens: readonly MorphToken[]): string | null {
  return tokens.find((t) => t.role === 'rel')?.w ?? null;
}

const cache = new Map<string, MorphToken[]>();
export function tokensOf(frame: RcFrame): MorphToken[] {
  let t = cache.get(frame.src);
  if (!t) {
    t = parseLine(frame.src);
    cache.set(frame.src, t);
  }
  return t;
}
