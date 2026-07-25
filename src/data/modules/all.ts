// src/data/modules/all.ts — the EAGER, COMPLETE module list. NODE-SIDE ONLY.
//
// CHANGED (M2 — the module meta-split, standard §4.4): this file holds what `concepts.ts` used to
// hold — every authored module imported for real, plus `stub()` entries for the not-yet-written
// ones. A module counts as AUTHORED when it has topics.
//
// ⚠️  DO NOT IMPORT THIS FROM `src/` APPLICATION CODE. ⚠️
// Importing it pulls every module body (topic blocks, exercises, pitfalls, sources — 450 kB at
// 12/34 authored, ~1.3 MB when the guide is finished) into whatever chunk does the importing. The
// app reads `data/meta.generated.ts` (~42 kB of nav meta) and lazy-loads one body at a time via
// `concepts.loadModule()`. `npm run check:bundle` fails the build if module-body text ever appears
// in the eager payload, so this rule is enforced, not just documented.
//
// Legitimate consumers: `scripts/gen-data-index.ts` (generates the meta/drills/loader modules from
// this list) and the gates `scripts/check-data.ts` + `scripts/smoke.ts`, which validate and render
// the real thing. All three are Node, where eager is free.

import type { Level, Localized, Module } from '../types';
import { m17 } from './m17-modal-system';
// CHANGED (S2): m18–m20 authored — Modal Verbs section continues (ability/permission,
// obligation/necessity, advice/criticism). Imports replace the former stub() entries below.
import { m18 } from './m18-ability-permission';
import { m19 } from './m19-obligation-necessity';
import { m20 } from './m20-advice-criticism';
// CHANGED (S4): m21–m22 authored — Modal Verbs section complete (deduction/probability + the
// deduction-lab sim, and requests/offers/politeness). Imports replace the former stub() entries.
import { m21 } from './m21-deduction-probability';
import { m22 } from './m22-requests-politeness';
// CHANGED (T1): m6 authored — the golden module of Section II Tenses (+ the ★ tense-navigator sim).
import { m6 } from './m6-tense-system';
// CHANGED (T2): m7–m8 authored — Present & Past (Simple + Continuous) + the parametric TenseTimeline
// figure (zones present/past). Imports replace the former stub() entries below.
import { m7 } from './m7-present-simple-continuous';
import { m8 } from './m8-past-simple-continuous';
// CHANGED (T3): m9–m10 authored — Future forms + the Perfect Family (+ the parametric TenseTimeline
// figure zones future/perfect). Imports replace the former stub() entries below.
import { m9 } from './m9-future-forms';
import { m10 } from './m10-perfect-family';
// CHANGED (T4): m11 authored — Choosing Tenses & Narrative (+ the ★ tense-chooser sim; the
// ★ sentence-morpher lands on m6). Section II Tenses is COMPLETE (6/6).
import { m11 } from './m11-choosing-narrative';

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
  // CHANGED (T1): S5 restructure — the old tense stubs (m2/m5/m6/m9/m10/m11) are superseded by
  // Section II below; the remaining Foundations stubs are renamed so `num` stays contiguous and
  // equal to the id prefix. All swapped stubs were unauthored (verified S5) — zero progress-key impact.
  stub('m1-be-pronouns', 1, 's1-foundations', 1, 'a1', { en: 'Be, pronouns & possessives', uk: 'Be, займенники і присвійні' }),
  stub('m2-articles-basics', 2, 's1-foundations', 2, 'a1', { en: 'Articles: a/an/the basics', uk: 'Артиклі: основи a/an/the' }),
  stub('m3-nouns-quantifiers', 3, 's1-foundations', 3, 'a1', { en: 'Nouns, plurals & quantifiers', uk: 'Іменники, множина і квантифікатори' }),
  stub('m4-questions-negatives', 4, 's1-foundations', 4, 'a2', { en: 'Questions & negatives', uk: 'Питання і заперечення' }),
  stub('m5-prepositions-time-place', 5, 's1-foundations', 5, 'a2', { en: 'Prepositions of time & place', uk: 'Прийменники часу і місця' }),

  // Section II — Tenses ★ second flagship (A1–B2, added T1 per the S5 plan)
  m6, // CHANGED (T1): authored — the GOLDEN module of Section II (+ ★ tense-navigator)
  m7, // CHANGED (T2): authored — Present: Simple & Continuous (+ timeline-present figure)
  m8, // CHANGED (T2): authored — Past: Simple & Continuous (+ timeline-past figure)
  m9, // CHANGED (T3): authored — Future: will, going to & Continuous (+ timeline-future figure)
  m10, // CHANGED (T3): authored — The Perfect Family (+ timeline-perfect figure)
  m11, // CHANGED (T4): authored — Choosing Tenses & Narrative (+ ★ tense-chooser) — Section II complete

  // Section III (roman) — Core Grammar (B1) — ids/nums untouched by the restructure
  stub('m12-comparatives', 12, 's2-core-grammar', 1, 'b1', { en: 'Comparatives & superlatives', uk: 'Ступені порівняння' }),
  stub('m13-conditionals-0-1-2', 13, 's2-core-grammar', 2, 'b1', { en: 'Conditionals 0 / 1 / 2', uk: 'Conditionals 0 / 1 / 2' }, true),
  stub('m14-passive-intro', 14, 's2-core-grammar', 3, 'b1', { en: 'Passive: the essentials', uk: 'Passive: основи' }),
  stub('m15-reported-speech', 15, 's2-core-grammar', 4, 'b1', { en: 'Reported speech', uk: 'Reported speech' }),
  stub('m16-gerund-infinitive', 16, 's2-core-grammar', 5, 'b1', { en: 'Gerund vs infinitive', uk: 'Gerund проти infinitive' }),

  // Section IV (roman) — Modal Verbs ★ flagship (B1–B2)
  m17,
  m18, // CHANGED (S2): authored
  m19, // CHANGED (S2): authored
  m20, // CHANGED (S2): authored
  m21, // CHANGED (S4): authored (+ deduction-lab ★sim)
  m22, // CHANGED (S4): authored

  // Section V (roman) — Advanced Grammar (B2–C1)
  stub('m23-conditionals-3-mixed', 23, 's4-advanced-grammar', 1, 'b2', { en: 'Conditionals 3, mixed & wishes', uk: 'Conditionals 3, mixed і wishes' }),
  stub('m24-passive-advanced', 24, 's4-advanced-grammar', 2, 'b2', { en: 'Advanced passive & causative', uk: 'Поглиблений passive і causative' }),
  stub('m25-relative-clauses', 25, 's4-advanced-grammar', 3, 'b2', { en: 'Relative clauses', uk: 'Relative clauses' }),
  stub('m26-participle-clauses', 26, 's4-advanced-grammar', 4, 'c1', { en: 'Participle clauses', uk: 'Participle clauses' }),
  stub('m27-inversion-emphasis', 27, 's4-advanced-grammar', 5, 'c1', { en: 'Inversion, cleft & emphasis', uk: 'Інверсія, cleft і емфаза' }),
  stub('m28-articles-advanced', 28, 's4-advanced-grammar', 6, 'b2', { en: 'Articles: the hard cases', uk: 'Артиклі: складні випадки' }, true),
  stub('m29-subjunctive-formal', 29, 's4-advanced-grammar', 7, 'c1', { en: 'Subjunctive & formal English', uk: 'Subjunctive і формальна англійська' }),
  stub('m30-linking-discourse', 30, 's4-advanced-grammar', 8, 'b2', { en: 'Linking & discourse markers', uk: 'Звʼязки і discourse markers' }),

  // Section VI (roman) — Vocabulary in Action (B1–B2)
  stub('m31-word-formation', 31, 's5-vocabulary-in-action', 1, 'b1', { en: 'Word formation', uk: 'Словотвір' }, true),
  stub('m32-phrasal-verbs-system', 32, 's5-vocabulary-in-action', 2, 'b1', { en: 'The phrasal-verbs system', uk: 'Система phrasal verbs' }),
  stub('m33-collocations', 33, 's5-vocabulary-in-action', 3, 'b2', { en: 'Collocations', uk: 'Колокації' }),
  stub('m34-confusables', 34, 's5-vocabulary-in-action', 4, 'b1', { en: 'Confusables UA speakers mix', uk: 'Confusables, які плутають україномовні' }),
];
