// CHANGED (A3): the ★ Connector Bridge engine (m30) — linking words as GRAMMAR, not vocabulary.
// but · although · However, · despite can carry the SAME meaning (contrast), yet each one builds a
// different sentence: a coordinator joins two clauses after a comma; a subordinator makes one clause
// depend on the other; a linking adverb starts a NEW sentence (or follows a semicolon) and takes a
// comma; a preposition takes a noun or an -ing form — never a subject + finite verb (Cambridge:
// Conjunctions and linking words · In spite of and despite · However; British Council: Contrasting
// ideas — although / despite).
// Data marks the linker (`|conn`, every word of a multi-word one) and each FINITE verb (`|verb` — the
// mark of a clause). The engine COMPUTES, never reads from data: which class a linker is (LEXICON),
// and the punctuation / clause DIAGNOSIS of a sentence — the comma splice (`, however the…`), the
// Ukrainian «хоча …, але» double linker (`Although …, but …`), a clause after a preposition
// (`Despite the tests passed`) and `despite of`. Content: src/data/connectorBridge.ts. Golden test:
// scripts/test-connector-bridge.ts.
import type { Localized } from '../data/types';
import { CB_SCENARIOS } from '../data/connectorBridge';
import { parseLine } from './tokenMorph';
import type { MorphToken } from './tokenMorph';

export type Relation = 'contrast' | 'cause' | 'addition';
export const RELATIONS: readonly Relation[] = ['contrast', 'cause', 'addition'];
/** The grammar class of a linker. */
export type ConnClass = 'coord' | 'sub' | 'adverb' | 'prep';

export const RELATION_CLASSES: Record<Relation, readonly ConnClass[]> = {
  contrast: ['coord', 'sub', 'adverb', 'prep'],
  cause: ['coord', 'sub', 'adverb', 'prep'],
  // English has no everyday subordinator of pure addition — and, In addition, In addition to.
  addition: ['coord', 'adverb', 'prep'],
};

export const RELATION_LABEL: Record<Relation, Localized> = {
  contrast: { en: 'Contrast', uk: 'Протиставлення' },
  cause: { en: 'Cause → result', uk: 'Причина → наслідок' },
  addition: { en: 'Addition', uk: 'Додавання' },
};

/** Every linker the engine knows, with its class and meaning. Multi-word linkers are space-joined. */
export const LEXICON: Readonly<Record<string, { cls: ConnClass; rel: Relation }>> = {
  but: { cls: 'coord', rel: 'contrast' },
  yet: { cls: 'coord', rel: 'contrast' },
  although: { cls: 'sub', rel: 'contrast' },
  'even though': { cls: 'sub', rel: 'contrast' },
  though: { cls: 'sub', rel: 'contrast' },
  while: { cls: 'sub', rel: 'contrast' },
  whereas: { cls: 'sub', rel: 'contrast' },
  however: { cls: 'adverb', rel: 'contrast' },
  nevertheless: { cls: 'adverb', rel: 'contrast' },
  'on the other hand': { cls: 'adverb', rel: 'contrast' },
  despite: { cls: 'prep', rel: 'contrast' },
  'in spite of': { cls: 'prep', rel: 'contrast' },
  so: { cls: 'coord', rel: 'cause' },
  because: { cls: 'sub', rel: 'cause' },
  since: { cls: 'sub', rel: 'cause' },
  as: { cls: 'sub', rel: 'cause' },
  therefore: { cls: 'adverb', rel: 'cause' },
  'as a result': { cls: 'adverb', rel: 'cause' },
  consequently: { cls: 'adverb', rel: 'cause' },
  'because of': { cls: 'prep', rel: 'cause' },
  'due to': { cls: 'prep', rel: 'cause' },
  and: { cls: 'coord', rel: 'addition' },
  moreover: { cls: 'adverb', rel: 'addition' },
  furthermore: { cls: 'adverb', rel: 'addition' },
  'in addition': { cls: 'adverb', rel: 'addition' },
  'in addition to': { cls: 'prep', rel: 'addition' },
};
/** Linkers that are always wrong, with the issue they raise. */
const WRONG_LINKERS: Readonly<Record<string, Issue>> = { 'despite of': 'despite-of' };

export const CLASS_LABEL: Record<ConnClass, Localized> = {
  // CHANGED (A3): plain patterns — the first browser pass showed the dotted ". However, · ." forms
  // reading as stray punctuation in the mono label.
  coord: { en: 'Coordinator — clause, but clause', uk: 'Coordinator — clause, but clause' },
  sub: { en: 'Subordinator — Although clause, clause', uk: 'Subordinator — Although clause, clause' },
  adverb: { en: 'Linking adverb — new sentence: However, …', uk: 'Linking adverb — нове речення: However, …' },
  prep: { en: 'Preposition — Despite + noun / -ing', uk: 'Preposition — Despite + іменник / -ing' },
};
export const CLASS_SHORT: Record<ConnClass, Localized> = {
  coord: { en: 'coordinator', uk: 'coordinator' },
  sub: { en: 'subordinator', uk: 'subordinator' },
  adverb: { en: 'linking adverb', uk: 'linking adverb' },
  prep: { en: 'preposition', uk: 'preposition' },
};
export const CLASS_RULE: Record<ConnClass, Localized> = {
  coord: {
    en: 'ONE sentence, two clauses: a comma, then the linker in the MIDDLE. It cannot start the first clause.',
    uk: 'ОДНЕ речення, дві клаузи: кома, потім звʼязка ПОСЕРЕДИНІ. Першу клаузу вона почати не може.',
  },
  sub: {
    en: 'ONE sentence: the linker makes its clause depend on the other. It can come first — then a comma closes it.',
    uk: 'ОДНЕ речення: звʼязка робить свою клаузу залежною від іншої. Може стояти першою — тоді її закриває кома.',
  },
  adverb: {
    en: 'TWO sentences (or a semicolon): the adverb opens the second one, followed by a comma. A comma alone before it is a comma splice.',
    uk: 'ДВА речення (або крапка з комою): прислівник відкриває друге, за ним кома. Сама лише кома перед ним — comma splice.',
  },
  prep: {
    en: 'A preposition takes a NOUN or an -ING form — no subject + finite verb after it. One finite verb is left in the sentence.',
    uk: 'Прийменник бере ІМЕННИК або -ING — жодного підмета з особовим дієсловом після нього. У реченні лишається одне особове дієслово.',
  },
};

export type Issue = 'splice' | 'double' | 'prep-clause' | 'despite-of' | 'unknown';
export const ISSUE_TEXT: Record<Issue, Localized> = {
  splice: {
    en: 'Comma splice: a linking adverb cannot join two clauses after a comma. Use a full stop or a semicolon before it — or the conjunction but.',
    uk: 'Comma splice: linking adverb не може зʼєднати дві клаузи після коми. Поставте перед ним крапку чи крапку з комою — або сполучник but.',
  },
  double: {
    en: 'Two linkers for one link: Although … , but … is the Ukrainian «Хоча …, але …» in English words. Keep one: Although … , … or … , but … .',
    uk: 'Дві звʼязки на один звʼязок: Although … , but … — це українське «Хоча …, але …» англійськими словами. Лишіть одну: Although … , … або … , but … .',
  },
  'prep-clause': {
    en: 'A preposition followed by a clause: despite / because of take a noun or -ing. With a subject + verb, use although / because — or despite the fact that.',
    uk: 'Після прийменника стоїть клауза: despite / because of беруть іменник або -ing. З підметом і дієсловом уживайте although / because — або despite the fact that.',
  },
  'despite-of': {
    en: 'despite never takes of: despite the delay, or in spite of the delay.',
    uk: 'despite ніколи не бере of: despite the delay або in spite of the delay.',
  },
  unknown: { en: 'Unknown linker.', uk: 'Невідома звʼязка.' },
};

export type Linker = { text: string; start: number; end: number; cls: ConnClass | null; rel: Relation | null; wrong?: Issue };

/** The linkers in a sentence: each contiguous run of `|conn` tokens, looked up in the LEXICON. */
export function linkersOf(tokens: readonly MorphToken[]): Linker[] {
  const out: Linker[] = [];
  let i = 0;
  while (i < tokens.length) {
    if (tokens[i].role !== 'conn') {
      i++;
      continue;
    }
    const start = i;
    const words: string[] = [];
    while (i < tokens.length && tokens[i].role === 'conn') {
      words.push(tokens[i].w.toLowerCase());
      i++;
      // A glue token (the comma after "However,") ends the run.
      if (i < tokens.length && tokens[i].glue) break;
    }
    const text = words.join(' ');
    const hit = LEXICON[text];
    out.push({ text, start, end: i - 1, cls: hit?.cls ?? null, rel: hit?.rel ?? null, ...(WRONG_LINKERS[text] ? { wrong: WRONG_LINKERS[text] } : {}) });
  }
  return out;
}

/** Number of finite verbs (= clauses). */
export function clauseCount(tokens: readonly MorphToken[]): number {
  return tokens.filter((t) => t.role === 'verb').length;
}

/**
 * The diagnosis: every way this sentence breaks the grammar of its linker(s). Empty = it holds.
 * Computed from the marked tokens alone — the data never says whether a sentence is right.
 */
export function diagnose(tokens: readonly MorphToken[]): Issue[] {
  const issues: Issue[] = [];
  const ls = linkersOf(tokens);
  for (const l of ls) {
    if (l.wrong) {
      issues.push(l.wrong);
      continue;
    }
    if (!l.cls) {
      issues.push('unknown');
      continue;
    }
    if (l.cls === 'adverb') {
      const before = tokens[l.start - 1];
      // Mid-sentence after a comma = a comma splice (only . or ; may stand before a sentence linker).
      if (before && before.w === ',') issues.push('splice');
    }
    if (l.cls === 'prep') {
      // The phrase after the preposition runs to the next comma; a finite verb there = a clause,
      // unless it is introduced by "the fact that".
      const rest: MorphToken[] = [];
      for (let j = l.end + 1; j < tokens.length && tokens[j].w !== ','; j++) rest.push(tokens[j]);
      const words = rest.map((t) => t.w.toLowerCase()).join(' ');
      if (rest.some((t) => t.role === 'verb') && !words.startsWith('the fact that')) issues.push('prep-clause');
    }
  }
  // «Хоча …, але …»: a subordinator and a coordinator of the SAME meaning in one sentence.
  const subs = ls.filter((l) => l.cls === 'sub');
  const coords = ls.filter((l) => l.cls === 'coord');
  if (subs.some((s) => coords.some((c) => c.rel === s.rel))) issues.push('double');
  return issues;
}

// ── Scenarios ────────────────────────────────────────────────────────────

export type CbTrack = 'bridge' | 'traps';
export const CB_TRACKS: readonly CbTrack[] = ['bridge', 'traps'];
export type TrapKind = 'error' | 'fix1' | 'fix2';
export const TRAP_KINDS: readonly TrapKind[] = ['error', 'fix1', 'fix2'];
export const TRAP_LABEL: Record<TrapKind, Localized> = {
  error: { en: 'The error', uk: 'Помилка' },
  fix1: { en: 'Fix 1', uk: 'Виправлення 1' },
  fix2: { en: 'Fix 2', uk: 'Виправлення 2' },
};

export type CbFrame = { src: string; uk: string };
export type CbScenario = {
  id: string;
  track: CbTrack;
  /** Bridge track: the meaning every frame keeps. */
  relation?: Relation;
  title: Localized;
  /** Bridge: one frame per class in RELATION_CLASSES order. Traps: error, fix 1, fix 2. */
  frames: CbFrame[];
  /** Traps track: why the error happens (often a Ukrainian pattern). */
  why?: Localized;
};

export function kindsOf(sc: CbScenario): readonly (ConnClass | TrapKind)[] {
  return sc.track === 'traps' ? TRAP_KINDS : RELATION_CLASSES[sc.relation ?? 'contrast'];
}
export function scenariosOf(track: CbTrack, relation?: Relation): CbScenario[] {
  return CB_SCENARIOS.filter((s) => s.track === track && (track === 'traps' || s.relation === relation));
}
export function listScenarios(): readonly CbScenario[] {
  return CB_SCENARIOS;
}

const cache = new Map<string, MorphToken[]>();
export function tokensOf(frame: CbFrame): MorphToken[] {
  let t = cache.get(frame.src);
  if (!t) {
    t = parseLine(frame.src);
    cache.set(frame.src, t);
  }
  return t;
}
