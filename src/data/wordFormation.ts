// CHANGED (VA1): content for the ★ Word Formation Lab (m31). Each scenario declares only the root, the
// affix chosen at each step and the LEXICAL facts (stress where doubling could apply, an irregular stem);
// `forms` is the AUTHORED American spelling after each step. The engine (src/lib/wordFormation.ts)
// assembles the word from the facts, and scripts/test-word-formation.ts proves the assembled word equals
// the authored one. British spellings are never authored here — the engine computes them.
// Rules: Cambridge (Word formation · Prefixes · Suffixes — spelling changes such as y → i · Negative
// prefixes and suffixes). The stress condition for doubling is the standard learner rule (begin →
// beginning, visit → visiting); it was not found on a Cambridge / British Council page this session.
import type { WfBuild, WfFamily, WfTrap } from '../lib/wordFormation';

export const WF_BUILDS: WfBuild[] = [
  // ── negative prefixes ─────────────────────────────────────────────────
  { id: 'legal', group: 'prefix', title: { en: 'legal → illegal', uk: 'legal → illegal' }, root: 'legal', steps: [{ prefix: 'in' }], forms: ['illegal'], uk: ['законний', 'незаконний'] },
  { id: 'possible', group: 'prefix', title: { en: 'possible → impossible', uk: 'possible → impossible' }, root: 'possible', steps: [{ prefix: 'in' }], forms: ['impossible'], uk: ['можливий', 'неможливий'] },
  { id: 'regular', group: 'prefix', title: { en: 'regular → irregular', uk: 'regular → irregular' }, root: 'regular', steps: [{ prefix: 'in' }], forms: ['irregular'], uk: ['регулярний', 'нерегулярний'] },
  { id: 'active', group: 'prefix', title: { en: 'active → inactive', uk: 'active → inactive' }, root: 'active', steps: [{ prefix: 'in' }], forms: ['inactive'], uk: ['активний', 'неактивний'] },
  { id: 'necessary', group: 'prefix', title: { en: 'necessary → unnecessary', uk: 'necessary → unnecessary' }, root: 'necessary', steps: [{ prefix: 'un' }], forms: ['unnecessary'], uk: ['потрібний', 'непотрібний'] },
  { id: 'satisfied', group: 'prefix', title: { en: 'satisfied → dissatisfied', uk: 'satisfied → dissatisfied' }, root: 'satisfied', steps: [{ prefix: 'dis' }], forms: ['dissatisfied'], uk: ['задоволений', 'незадоволений'] },

  // ── suffixes at the seam ──────────────────────────────────────────────
  {
    id: 'rely', group: 'suffix', title: { en: 'rely → unreliable', uk: 'rely → unreliable' }, root: 'rely',
    steps: [{ suffix: 'able' }, { prefix: 'un' }], forms: ['reliable', 'unreliable'], uk: ['покладатися', 'надійний', 'ненадійний'],
  },
  { id: 'begin', group: 'suffix', title: { en: 'begin → beginning', uk: 'begin → beginning' }, root: 'begin', steps: [{ suffix: 'ing', stress: 'final' }], forms: ['beginning'], uk: ['починати', 'початок'] },
  { id: 'visit', group: 'suffix', title: { en: 'visit → visiting', uk: 'visit → visiting' }, root: 'visit', steps: [{ suffix: 'ing', stress: 'early' }], forms: ['visiting'], uk: ['відвідувати', 'відвідування'] },
  {
    id: 'manage', group: 'suffix', title: { en: 'manage → unmanageable', uk: 'manage → unmanageable' }, root: 'manage',
    steps: [{ suffix: 'able' }, { prefix: 'un' }], forms: ['manageable', 'unmanageable'], uk: ['керувати', 'керований', 'некерований'],
  },
  {
    id: 'hope', group: 'suffix', title: { en: 'hope → hopefully', uk: 'hope → hopefully' }, root: 'hope',
    steps: [{ suffix: 'ful' }, { suffix: 'ly' }], forms: ['hopeful', 'hopefully'], uk: ['надія', 'сповнений надії', 'сподіваюся / з надією'],
  },
  {
    id: 'create', group: 'suffix', title: { en: 'create → creatively', uk: 'create → creatively' }, root: 'create',
    steps: [{ suffix: 'ive' }, { suffix: 'ly' }], forms: ['creative', 'creatively'], uk: ['створювати', 'творчий', 'творчо'],
  },
  { id: 'decide', group: 'suffix', title: { en: 'decide → decision', uk: 'decide → decision' }, root: 'decide', steps: [{ suffix: 'ion', stem: 'decis' }], forms: ['decision'], uk: ['вирішувати', 'рішення'] },

  // ── AmE vs BrE ────────────────────────────────────────────────────────
  { id: 'travel', group: 'variant', title: { en: 'travel → traveled', uk: 'travel → traveled' }, root: 'travel', steps: [{ suffix: 'ed', stress: 'early' }], forms: ['traveled'], uk: ['подорожувати', 'подорожував'] },
  { id: 'control', group: 'variant', title: { en: 'control → controlled', uk: 'control → controlled' }, root: 'control', steps: [{ suffix: 'ed', stress: 'final' }], forms: ['controlled'], uk: ['контролювати', 'контрольований'] },
  { id: 'organize', group: 'variant', title: { en: 'organize → organization', uk: 'organize → organization' }, root: 'organize', rootFacts: { ize: true }, steps: [{ suffix: 'ation' }], forms: ['organization'], uk: ['організовувати', 'організація'] },
  { id: 'color', group: 'variant', title: { en: 'color → colorful', uk: 'color → colorful' }, root: 'color', rootFacts: { our: true }, steps: [{ suffix: 'ful' }], forms: ['colorful'], uk: ['колір', 'барвистий'] },
  { id: 'humor', group: 'variant', title: { en: 'humor → humorous', uk: 'humor → humorous' }, root: 'humor', rootFacts: { our: true }, steps: [{ suffix: 'ous', stress: 'early' }], forms: ['humorous'], uk: ['гумор', 'гумористичний'] },
];

export const WF_FAMILIES: WfFamily[] = [
  {
    id: 'decide', title: { en: 'decide', uk: 'decide' }, root: 'decide',
    members: [
      { pos: 'verb', steps: [], form: 'decide', uk: 'вирішувати' },
      { pos: 'noun', steps: [{ suffix: 'ion', stem: 'decis' }], form: 'decision', uk: 'рішення' },
      { pos: 'adjective', steps: [{ suffix: 'ive', stem: 'decis' }], form: 'decisive', uk: 'рішучий' },
      { pos: 'adverb', steps: [{ suffix: 'ive', stem: 'decis' }, { suffix: 'ly' }], form: 'decisively', uk: 'рішуче' },
      { pos: 'opposite', steps: [{ suffix: 'ive', stem: 'decis' }, { prefix: 'in' }], form: 'indecisive', uk: 'нерішучий' },
    ],
  },
  {
    id: 'rely', title: { en: 'rely', uk: 'rely' }, root: 'rely',
    members: [
      { pos: 'verb', steps: [], form: 'rely', uk: 'покладатися' },
      { pos: 'adjective', steps: [{ suffix: 'able' }], form: 'reliable', uk: 'надійний' },
      { pos: 'noun', steps: [{ suffix: 'able' }, { suffix: 'ity' }], form: 'reliability', uk: 'надійність' },
      { pos: 'adverb', steps: [{ suffix: 'able' }, { suffix: 'ly' }], form: 'reliably', uk: 'надійно' },
      { pos: 'opposite', steps: [{ suffix: 'able' }, { prefix: 'un' }], form: 'unreliable', uk: 'ненадійний' },
    ],
  },
  {
    id: 'create', title: { en: 'create', uk: 'create' }, root: 'create',
    members: [
      { pos: 'verb', steps: [], form: 'create', uk: 'створювати' },
      { pos: 'noun', steps: [{ suffix: 'ion' }], form: 'creation', uk: 'створення' },
      { pos: 'person', steps: [{ suffix: 'or' }], form: 'creator', uk: 'творець, автор' },
      { pos: 'adjective', steps: [{ suffix: 'ive' }], form: 'creative', uk: 'творчий' },
      { pos: 'adverb', steps: [{ suffix: 'ive' }, { suffix: 'ly' }], form: 'creatively', uk: 'творчо' },
    ],
  },
  {
    id: 'employ', title: { en: 'employ', uk: 'employ' }, root: 'employ',
    members: [
      { pos: 'verb', steps: [], form: 'employ', uk: 'наймати' },
      { pos: 'noun', steps: [{ suffix: 'ment' }], form: 'employment', uk: 'зайнятість, робота' },
      { pos: 'person', steps: [{ suffix: 'er' }], form: 'employer', uk: 'роботодавець' },
      { pos: 'person', steps: [{ suffix: 'ee' }], form: 'employee', uk: 'працівник' },
      { pos: 'opposite', steps: [{ suffix: 'ed' }, { prefix: 'un' }], form: 'unemployed', uk: 'безробітний' },
    ],
  },
  {
    id: 'possible', title: { en: 'possible', uk: 'possible' }, root: 'possible',
    members: [
      { pos: 'adjective', steps: [], form: 'possible', uk: 'можливий' },
      { pos: 'noun', steps: [{ suffix: 'ity' }], form: 'possibility', uk: 'можливість' },
      { pos: 'adverb', steps: [{ suffix: 'ly' }], form: 'possibly', uk: 'можливо' },
      { pos: 'opposite', steps: [{ prefix: 'in' }], form: 'impossible', uk: 'неможливий' },
    ],
  },
  {
    id: 'responsible', title: { en: 'responsible', uk: 'responsible' }, root: 'responsible',
    members: [
      { pos: 'adjective', steps: [], form: 'responsible', uk: 'відповідальний' },
      { pos: 'noun', steps: [{ suffix: 'ity' }], form: 'responsibility', uk: 'відповідальність' },
      { pos: 'adverb', steps: [{ suffix: 'ly' }], form: 'responsibly', uk: 'відповідально' },
      { pos: 'opposite', steps: [{ prefix: 'in' }], form: 'irresponsible', uk: 'безвідповідальний' },
    ],
  },
];

export const WF_TRAPS: WfTrap[] = [
  {
    id: 'unpossible', title: { en: 'unpossible', uk: 'unpossible' }, wrong: 'unpossible', root: 'possible', steps: [{ prefix: 'in' }], form: 'impossible', uk: 'неможливий', expect: 'prefix',
    why: {
      en: 'Ukrainian has one «не-» for everything, so un- feels universal. Latin-origin adjectives (possible, legal, regular, responsible) usually take in- — and in- then assimilates.',
      uk: 'В українській одне «не-» на все, тож un- здається універсальним. Прикметники латинського походження (possible, legal, regular, responsible) зазвичай беруть in- — а in- потім уподібнюється.',
    },
  },
  {
    id: 'inresponsible', title: { en: 'inresponsible', uk: 'inresponsible' }, wrong: 'inresponsible', root: 'responsible', steps: [{ prefix: 'in' }], form: 'irresponsible', uk: 'безвідповідальний', expect: 'off:assimilate',
    why: {
      en: 'The prefix is right, the sound is not: before r, in- becomes ir- — and then both r’s stay.',
      uk: 'Префікс правильний, звук — ні: перед r in- стає ir- — і обидві r лишаються.',
    },
  },
  {
    id: 'begining', title: { en: 'begining', uk: 'begining' }, wrong: 'begining', root: 'begin', steps: [{ suffix: 'ing', stress: 'final' }], form: 'beginning', uk: 'початок', expect: 'off:double',
    why: {
      en: 'be-GIN: the stress is on the last syllable, which ends in one vowel + one consonant, so n doubles.',
      uk: 'be-GIN: наголос на останньому складі, що закінчується однією голосною + однією приголосною, тож n подвоюється.',
    },
  },
  {
    id: 'visitting', title: { en: 'visitting', uk: 'visitting' }, wrong: 'visitting', root: 'visit', steps: [{ suffix: 'ing', stress: 'early' }], form: 'visiting', uk: 'відвідування', expect: 'force:double',
    why: {
      en: 'VIS-it: the stress is on the FIRST syllable, so t stays single. The spelling looks like begin; the stress decides.',
      uk: 'VIS-it: наголос на ПЕРШОМУ складі, тож t лишається одна. На письмі схоже на begin; вирішує наголос.',
    },
  },
  {
    id: 'happyness', title: { en: 'happyness', uk: 'happyness' }, wrong: 'happyness', root: 'happy', steps: [{ suffix: 'ness' }], form: 'happiness', uk: 'щастя', expect: 'off:y-to-i',
    why: {
      en: 'Consonant + y → i before the suffix: happiness, business, easily.',
      uk: 'Приголосна + y → i перед суфіксом: happiness, business, easily.',
    },
  },
  {
    id: 'noticable', title: { en: 'noticable', uk: 'noticable' }, wrong: 'noticable', root: 'notice', steps: [{ suffix: 'able' }], form: 'noticeable', uk: 'помітний', expect: 'off:keep-e-soft',
    why: {
      en: 'Without the e, c before a would sound /k/ (“notik-able”). The e keeps it /s/: noticeable, manageable.',
      uk: 'Без e літера c перед a звучала б як /k/ («нотик-абл»). e тримає звук /s/: noticeable, manageable.',
    },
  },
  {
    id: 'unecessary', title: { en: 'unecessary', uk: 'unecessary' }, wrong: 'unecessary', root: 'necessary', steps: [{ prefix: 'un' }], form: 'unnecessary', uk: 'непотрібний', expect: 'off:seam',
    why: {
      en: 'un + necessary: nothing is lost at the seam, so the word has two n’s (and the root still has its one c, double s).',
      uk: 'un + necessary: на шві нічого не губиться, тож у слові дві n (а корінь зберігає свою одну c і подвійну s).',
    },
  },
  {
    id: 'arguement', title: { en: 'arguement', uk: 'arguement' }, wrong: 'arguement', root: 'argue', steps: [{ suffix: 'ment', stem: 'argu' }], form: 'argument', uk: 'аргумент, суперечка', expect: 'off:stem',
    why: {
      en: 'The rule says “keep the e before -ment” (management, statement) — argument is the famous exception. Learn it as a word.',
      uk: 'Правило каже «e лишається перед -ment» (management, statement) — argument є відомим винятком. Вчіть його як слово.',
    },
  },
];
