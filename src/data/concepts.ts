// src/data/concepts.ts — the SSOT thin aggregator (standard §4.4).
// CHANGED (S1): filled — the 5 sections, the golden m17 import, the stub() helper that keeps the
// whole 34-module map navigable before its content lands, and the lookups. A module counts as
// AUTHORED when it has topics; stubs render their real header + a ComingSoon card.
// The module meta-split arrives in a later session (like the database guide's S19).
import type { Level, Localized, Module, Section } from './types';
import { m17 } from './modules/m17-modal-system';
import { WORDS } from './words';

export const LEVELS: readonly Level[] = ['a1', 'a2', 'b1', 'b2', 'c1'];

export const sections: Section[] = [
  { id: 's1-foundations', roman: 'I', title: { en: 'Foundations', uk: 'Основи' }, accent: 'var(--sec-foundations)' },
  { id: 's2-core-grammar', roman: 'II', title: { en: 'Core Grammar', uk: 'Ядро граматики' }, accent: 'var(--sec-core)' },
  { id: 's3-modal-verbs', roman: 'III', title: { en: 'Modal Verbs ★', uk: 'Modal Verbs ★' }, accent: 'var(--sec-modals)' },
  { id: 's4-advanced-grammar', roman: 'IV', title: { en: 'Advanced Grammar', uk: 'Поглиблена граматика' }, accent: 'var(--sec-advanced)' },
  { id: 's5-vocabulary-in-action', roman: 'V', title: { en: 'Vocabulary in Action', uk: 'Лексика в дії' }, accent: 'var(--sec-vocab)' },
];

const STUB_TAGLINE: Localized = {
  en: 'Planned in CURRICULUM.md — authored in an upcoming session. The map is navigable today.',
  uk: 'Заплановано в CURRICULUM.md — буде створено в наступних сесіях. Карта вже навігабельна.',
};
const STUB_MM: Localized = {
  en: 'This module’s mental model arrives with its content.',
  uk: 'Ментальна модель модуля зʼявиться разом з його змістом.',
};

/** A navigable skeleton entry for a not-yet-authored module (topics: [] ⇒ isAuthored() === false). */
function stub(
  id: string,
  num: number,
  section: string,
  order: number,
  level: Level,
  title: Localized,
  signature?: boolean,
): Module {
  return {
    id,
    num,
    section,
    order,
    level,
    ...(signature ? { signature } : {}),
    title,
    tagline: STUB_TAGLINE,
    readMins: 10,
    mentalModel: STUB_MM,
    topics: [],
    keyPoints: [],
    pitfalls: [],
    seeAlso: [],
    sources: [],
  };
}

export const modules: Module[] = [
  // Section I — Foundations (A1–A2)
  stub('m1-be-pronouns', 1, 's1-foundations', 1, 'a1', { en: 'Be, pronouns & possessives', uk: 'Be, займенники і присвійні' }),
  stub('m2-present-simple-continuous', 2, 's1-foundations', 2, 'a1', { en: 'Present Simple vs Continuous', uk: 'Present Simple проти Continuous' }),
  stub('m3-articles-basics', 3, 's1-foundations', 3, 'a1', { en: 'Articles: a/an/the basics', uk: 'Артиклі: основи a/an/the' }),
  stub('m4-nouns-quantifiers', 4, 's1-foundations', 4, 'a1', { en: 'Nouns, plurals & quantifiers', uk: 'Іменники, множина і квантифікатори' }),
  stub('m5-past-simple', 5, 's1-foundations', 5, 'a1', { en: 'Past Simple', uk: 'Past Simple' }),
  stub('m6-future-basics', 6, 's1-foundations', 6, 'a2', { en: 'Future basics: will / going to', uk: 'Основи майбутнього: will / going to' }),
  stub('m7-questions-negatives', 7, 's1-foundations', 7, 'a2', { en: 'Questions & negatives', uk: 'Питання і заперечення' }),
  stub('m8-prepositions-time-place', 8, 's1-foundations', 8, 'a2', { en: 'Prepositions of time & place', uk: 'Прийменники часу і місця' }),

  // Section II — Core Grammar (B1)
  stub('m9-present-perfect', 9, 's2-core-grammar', 1, 'b1', { en: 'Present Perfect vs Past Simple', uk: 'Present Perfect проти Past Simple' }, true),
  stub('m10-past-continuous-perfect', 10, 's2-core-grammar', 2, 'b1', { en: 'Past Continuous & Past Perfect', uk: 'Past Continuous і Past Perfect' }),
  stub('m11-future-forms', 11, 's2-core-grammar', 3, 'b1', { en: 'Future forms in depth', uk: 'Форми майбутнього поглиблено' }),
  stub('m12-comparatives', 12, 's2-core-grammar', 4, 'b1', { en: 'Comparatives & superlatives', uk: 'Ступені порівняння' }),
  stub('m13-conditionals-0-1-2', 13, 's2-core-grammar', 5, 'b1', { en: 'Conditionals 0 / 1 / 2', uk: 'Conditionals 0 / 1 / 2' }, true),
  stub('m14-passive-intro', 14, 's2-core-grammar', 6, 'b1', { en: 'Passive: the essentials', uk: 'Passive: основи' }),
  stub('m15-reported-speech', 15, 's2-core-grammar', 7, 'b1', { en: 'Reported speech', uk: 'Reported speech' }),
  stub('m16-gerund-infinitive', 16, 's2-core-grammar', 8, 'b1', { en: 'Gerund vs infinitive', uk: 'Gerund проти infinitive' }),

  // Section III — Modal Verbs ★ flagship (B1–B2)
  m17,
  stub('m18-ability-permission', 18, 's3-modal-verbs', 2, 'b1', { en: 'Ability & permission', uk: 'Уміння і дозвіл' }),
  stub('m19-obligation-necessity', 19, 's3-modal-verbs', 3, 'b1', { en: 'Obligation & necessity', uk: 'Обовʼязок і необхідність' }),
  stub('m20-advice-criticism', 20, 's3-modal-verbs', 4, 'b1', { en: 'Advice & criticism', uk: 'Порада і критика' }),
  stub('m21-deduction-probability', 21, 's3-modal-verbs', 5, 'b2', { en: 'Deduction & probability', uk: 'Висновки і ймовірність' }, true),
  stub('m22-requests-politeness', 22, 's3-modal-verbs', 6, 'b1', { en: 'Requests, offers & politeness', uk: 'Прохання, пропозиції і ввічливість' }),

  // Section IV — Advanced Grammar (B2–C1)
  stub('m23-conditionals-3-mixed', 23, 's4-advanced-grammar', 1, 'b2', { en: 'Conditionals 3, mixed & wishes', uk: 'Conditionals 3, mixed і wishes' }),
  stub('m24-passive-advanced', 24, 's4-advanced-grammar', 2, 'b2', { en: 'Advanced passive & causative', uk: 'Поглиблений passive і causative' }),
  stub('m25-relative-clauses', 25, 's4-advanced-grammar', 3, 'b2', { en: 'Relative clauses', uk: 'Relative clauses' }),
  stub('m26-participle-clauses', 26, 's4-advanced-grammar', 4, 'c1', { en: 'Participle clauses', uk: 'Participle clauses' }),
  stub('m27-inversion-emphasis', 27, 's4-advanced-grammar', 5, 'c1', { en: 'Inversion, cleft & emphasis', uk: 'Інверсія, cleft і емфаза' }),
  stub('m28-articles-advanced', 28, 's4-advanced-grammar', 6, 'b2', { en: 'Articles: the hard cases', uk: 'Артиклі: складні випадки' }, true),
  stub('m29-subjunctive-formal', 29, 's4-advanced-grammar', 7, 'c1', { en: 'Subjunctive & formal English', uk: 'Subjunctive і формальна англійська' }),
  stub('m30-linking-discourse', 30, 's4-advanced-grammar', 8, 'b2', { en: 'Linking & discourse markers', uk: 'Звʼязки і discourse markers' }),

  // Section V — Vocabulary in Action (B1–B2)
  stub('m31-word-formation', 31, 's5-vocabulary-in-action', 1, 'b1', { en: 'Word formation', uk: 'Словотвір' }, true),
  stub('m32-phrasal-verbs-system', 32, 's5-vocabulary-in-action', 2, 'b1', { en: 'The phrasal-verbs system', uk: 'Система phrasal verbs' }),
  stub('m33-collocations', 33, 's5-vocabulary-in-action', 3, 'b2', { en: 'Collocations', uk: 'Колокації' }),
  stub('m34-confusables', 34, 's5-vocabulary-in-action', 4, 'b1', { en: 'Confusables UA speakers mix', uk: 'Confusables, які плутають україномовні' }),
];

/** Canonical alias the SSR smoke consumes (template smoke.ts contract). */
export const MODULES: readonly Module[] = modules;

const moduleById = new Map(modules.map((m) => [m.id, m]));
const sectionById = new Map(sections.map((s) => [s.id, s]));

export function getModule(id: string): Module | undefined {
  return moduleById.get(id);
}

export function getSection(id: string): Section | undefined {
  return sectionById.get(id);
}

export function isAuthored(id: string): boolean {
  return (moduleById.get(id)?.topics.length ?? 0) > 0;
}

export function modulesBySection(sectionId: string): Module[] {
  return modules.filter((m) => m.section === sectionId).sort((a, b) => a.order - b.order);
}

/** Prev/next by global num — powers the module page footer navigation. */
export function adjacentModules(id: string): { prev?: Module; next?: Module } {
  const m = moduleById.get(id);
  if (!m) return {};
  const sorted = [...modules].sort((a, b) => a.num - b.num);
  const i = sorted.findIndex((x) => x.id === id);
  return { prev: sorted[i - 1], next: sorted[i + 1] };
}

export const COUNTS = {
  sections: sections.length,
  modules: modules.length,
  words: WORDS.length,
} as const;
