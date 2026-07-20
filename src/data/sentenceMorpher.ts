// src/data/sentenceMorpher.ts — content for the ★ Sentence Morpher sim (m6, T4).
// CHANGED (T4): ONE US-English sentence — "Maya <vp> on the payment service <cue>." — morphed
// through all 12 time × aspect cells. Each cell carries only what changes: the verb phrase (the
// highlighted form), a natural time cue, and the full UA translation of the assembled sentence.
// Tense names + form patterns come from the shared matrix (src/data/tenseNavigator.ts via
// lib/tenses) — never restated here. The UA lines are deliberately instructive: UA renders the
// whole ⤺ Perfect row with present/past forms (укр. не має Perfect — the m6/m10 pitfall), so the
// translation column SHOWS the mismatch the learner must internalize.
// Content rules: EN authored first; grammar terms stay English in UA text; US English.
import type { MorphCell } from '../lib/morpher';

/** The fixed sentence frame: subject + <verb phrase> + rest + <cue>. */
export const MORPH_FRAME = {
  subject: 'Maya',
  rest: 'on the payment service',
} as const;

/** The 12 cells, keyed `${time}-${aspect}` (see lib/morpher.morphKey). */
export const MORPH_CELLS: Record<string, MorphCell> = {
  // ── ● Simple: a fact / a whole event, sliding along the axis ──────────────
  'past-simple': {
    vp: 'worked',
    cue: 'last year',
    uk: 'Торік Мая працювала над платіжним сервісом.',
  },
  'present-simple': {
    vp: 'works',
    cue: 'every day',
    uk: 'Мая працює над платіжним сервісом щодня.',
  },
  'future-simple': {
    vp: 'will work',
    cue: 'next quarter',
    uk: 'Наступного кварталу Мая працюватиме над платіжним сервісом.',
  },

  // ── 〜 Continuous: a process in progress at each time ─────────────────────
  'past-continuous': {
    vp: 'was working',
    cue: 'when you called',
    uk: 'Мая саме працювала над платіжним сервісом, коли ти подзвонив.',
  },
  'present-continuous': {
    vp: 'is working',
    cue: 'right now',
    uk: 'Мая просто зараз працює над платіжним сервісом.',
  },
  'future-continuous': {
    vp: 'will be working',
    cue: 'at 9 a.m. tomorrow',
    uk: 'Завтра о 9-й ранку Мая саме працюватиме над платіжним сервісом.',
  },

  // ── ⤺ Perfect: a link back from each time's reference point ───────────────
  'past-perfect': {
    vp: 'had worked',
    cue: 'before she joined our team',
    uk: 'Мая вже працювала над платіжним сервісом до того, як приєдналася до нашої команди.',
  },
  'present-perfect': {
    vp: 'has worked',
    cue: 'since March',
    uk: 'Мая працює над платіжним сервісом із березня (і досі).',
  },
  'future-perfect': {
    vp: 'will have worked',
    cue: 'for a year by May',
    uk: 'До травня Мая пропрацює над платіжним сервісом уже рік.',
  },

  // ── 〜⤺ Perfect Continuous: a process running up to each reference point ──
  'past-perfect-continuous': {
    vp: 'had been working',
    cue: 'for a year when the rewrite started',
    uk: 'Коли почався rewrite, Мая вже рік працювала над платіжним сервісом.',
  },
  'present-perfect-continuous': {
    vp: 'has been working',
    cue: 'all morning',
    uk: 'Мая працює над платіжним сервісом цілий ранок (без перерви).',
  },
  'future-perfect-continuous': {
    vp: 'will have been working',
    cue: 'for two years by May',
    uk: 'У травні буде два роки, як Мая працює над платіжним сервісом.',
  },
};
