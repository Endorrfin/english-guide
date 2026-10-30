// CHANGED (A3): the ★ Article Tree engine (m28) — a DECISION TREE that drives a TokenMorph sentence.
// Unlike the other Section V sims, choosing an article is not a transformation but a decision, so the
// pure half is a walk: five yes/no questions, asked in a fixed order, each answered from FACTS about the
// noun in its sentence (is it a routine phrase like *in prison*? a name? does the listener know which
// one? one countable thing? the whole kind?). The walk ends in a leaf, the leaf picks the article, and
// a/an is chosen by the SOUND of the next word. The sim then drops that article into the sentence's
// slot (or collapses the slot for ∅).
// THE ARTICLE IS COMPUTED, NOT AUTHORED INTO THE UI: data declares the facts and the correct sentence
// (with the article marked `|art`, `∅|art` for none); the engine derives the article from the facts,
// and the golden test proves the two agree. American English is the base (owner decision, A3); the one
// routine phrase where British English differs — *in hospital* vs AmE *in the hospital* (Cambridge
// learner's dictionary) — is computed per variant, so the BrE chip is derived too.
// Rules: British Council (Articles: 'the' or no article · The definite article · The indefinite
// article: sound, not spelling) and Cambridge (A/an and the · Place names). Content:
// src/data/articleTree.ts. Golden test: scripts/test-article-tree.ts.
import type { Localized } from '../data/types';
import { AT_PAIRS, AT_SCENARIOS } from '../data/articleTree';
import { parseLine } from './tokenMorph';
import type { MorphToken } from './tokenMorph';

export type Article = 'a' | 'an' | 'the' | 'zero';
export type Variant = 'ame' | 'bre';

/** Routine phrases that drop the article (institution for its purpose · meals · by + transport). */
export type Routine = 'school' | 'college' | 'hospital' | 'prison' | 'church' | 'bed' | 'work' | 'home' | 'meal' | 'transport';
/** Kinds of proper names — the engine knows which take the. */
export type NameClass =
  | 'continent' | 'country' | 'city' | 'lake' | 'mountain' | 'person' | 'company' | 'university'
  | 'plural-country' | 'united' | 'river' | 'ocean' | 'range' | 'islands' | 'of-name';
/** Why the listener knows which one. */
export type Known = 'mentioned' | 'unique' | 'defined' | 'superlative' | 'shared';
export type Count = 'one' | 'many' | 'mass';

/** What is true about the noun in THIS sentence — the only thing a scenario declares. */
export type NounFacts = {
  routine?: Routine;
  /** The routine place is only being visited — it is a building here, not the institution. */
  visitor?: boolean;
  name?: NameClass;
  known?: Known;
  count: Count;
  /** A singular noun standing for its whole kind (an invention, an instrument, a species). */
  kind?: boolean;
};

export type Question = 'routine' | 'name' | 'known' | 'single' | 'kind';
export const QUESTIONS: readonly Question[] = ['routine', 'name', 'known', 'single', 'kind'];

export const QUESTION_TEXT: Record<Question, Localized> = {
  routine: { en: 'A routine phrase? (in prison · at school · by train · at lunch)', uk: 'Стала фраза? (in prison · at school · by train · at lunch)' },
  name: { en: 'A proper name?', uk: 'Власна назва?' },
  known: { en: 'Does the listener know WHICH one?', uk: 'Слухач знає, ЯКИЙ САМЕ?' },
  single: { en: 'One countable thing?', uk: 'Одна злічувана річ?' },
  kind: { en: 'The whole kind as one idea?', uk: 'Увесь вид як одне поняття?' },
};
export const QUESTION_SHORT: Record<Question, Localized> = {
  routine: { en: 'Routine?', uk: 'Стала фраза?' },
  name: { en: 'Name?', uk: 'Назва?' },
  known: { en: 'Which one?', uk: 'Який саме?' },
  single: { en: 'One thing?', uk: 'Одна річ?' },
  kind: { en: 'The kind?', uk: 'Увесь вид?' },
};

export type Leaf = 'routine' | 'name-the' | 'name-zero' | 'specific' | 'class' | 'one' | 'general';
export const LEAVES: readonly Leaf[] = ['routine', 'name-the', 'name-zero', 'specific', 'class', 'one', 'general'];

export const LEAF_LABEL: Record<Leaf, Localized> = {
  routine: { en: 'Routine phrase → ∅', uk: 'Стала фраза → ∅' },
  'name-the': { en: 'A name that takes the', uk: 'Назва з the' },
  'name-zero': { en: 'A name without an article', uk: 'Назва без артикля' },
  specific: { en: 'This one, and you know it → the', uk: 'Саме цей, і ви це знаєте → the' },
  class: { en: 'The kind as one idea → the', uk: 'Вид як одне поняття → the' },
  one: { en: 'One of many → a / an', uk: 'Один із багатьох → a / an' },
  general: { en: 'In general → ∅', uk: 'Загалом → ∅' },
};

export const LEAF_NOTE: Record<Leaf, Localized> = {
  routine: {
    en: 'The place is named for what happens there — being a patient, a student, a prisoner; eating; traveling — not for the building. No article.',
    uk: 'Місце названо через те, що там відбувається, — бути пацієнтом, студентом, увʼязненим; їсти; їхати, — а не через будівлю. Без артикля.',
  },
  'name-the': {
    en: 'Rivers, oceans and seas, mountain ranges, island groups, plural country names, names with United / Republic / Kingdom and names built on of take the.',
    uk: 'Річки, океани й моря, гірські хребти, групи островів, назви країн у множині, назви з United / Republic / Kingdom і назви з of беруть the.',
  },
  'name-zero': {
    en: 'Most names take nothing: people, companies, continents, most countries, cities, single lakes and mountains.',
    uk: 'Більшість назв без артикля: люди, компанії, континенти, більшість країн, міста, окремі озера й гори.',
  },
  specific: {
    en: 'Both of you can point at the same one — it was mentioned, it is the only one here, a phrase after it says which, or a superlative picks it out.',
    uk: 'Ви обоє можете вказати на той самий предмет — його вже згадували, він тут єдиний, фраза після нього каже, який саме, або його виділяє superlative.',
  },
  class: {
    en: 'A singular noun for the whole kind — an invention, an instrument, a species: the smartphone, the piano. Formal and a little bookish; plurals say the same plainly.',
    uk: 'Однина для всього виду — винахід, інструмент, біологічний вид: the smartphone, the piano. Формально й трохи книжно; множина каже те саме простіше.',
  },
  one: {
    en: 'One countable thing the listener cannot identify yet: a / an. Which one depends on the SOUND of the next word, not the letter.',
    uk: 'Одна злічувана річ, яку слухач ще не може впізнати: a / an. Котрий із двох — залежить від ЗВУКУ наступного слова, а не від літери.',
  },
  general: {
    en: 'Plural or uncountable nouns in a general sense take no article: Engineers hate vague tickets · Trust takes years.',
    uk: 'Іменники в множині чи незлічувані в загальному значенні не мають артикля: Engineers hate vague tickets · Trust takes years.',
  },
};

const LEAF_ARTICLE: Record<Exclude<Leaf, 'one'>, Article> = {
  routine: 'zero',
  'name-the': 'the',
  'name-zero': 'zero',
  specific: 'the',
  class: 'the',
  general: 'zero',
};

/** Name classes that take the (British Council: The definite article · Articles: 'the' or no article). */
export const NAME_THE: ReadonlySet<NameClass> = new Set<NameClass>(['plural-country', 'united', 'river', 'ocean', 'range', 'islands', 'of-name']);
/** Routine words that are NOT routine in American English (Cambridge: in hospital UK / in the hospital US). */
export const AME_NOT_ROUTINE: ReadonlySet<Routine> = new Set<Routine>(['hospital']);

const ROUTINE_WHY: Record<Routine, Localized> = {
  school: { en: 'school as studying, not the building', uk: 'school як навчання, а не будівля' },
  college: { en: 'college as studying (AmE: go to college)', uk: 'college як навчання (AmE: go to college)' },
  hospital: { en: 'hospital as treatment — a patient', uk: 'hospital як лікування — пацієнт' },
  prison: { en: 'prison as the institution — serving a sentence', uk: 'prison як установа — відбувати покарання' },
  church: { en: 'church as worship, not the building', uk: 'church як богослужіння, а не будівля' },
  bed: { en: 'bed as sleeping: go to bed', uk: 'bed як сон: go to bed' },
  work: { en: 'work as the job: at work, go to work', uk: 'work як робота: at work, go to work' },
  home: { en: 'home: go home, at home', uk: 'home: go home, at home' },
  meal: { en: 'a meal in general: at lunch, after dinner', uk: 'прийом їжі загалом: at lunch, after dinner' },
  transport: { en: 'by + transport: by train, by car', uk: 'by + транспорт: by train, by car' },
};
const NAME_WHY: Record<NameClass, Localized> = {
  continent: { en: 'a continent: Europe, Asia', uk: 'континент: Europe, Asia' },
  country: { en: 'a country with a one-word name: Poland, Ukraine', uk: 'країна з назвою з одного слова: Poland, Ukraine' },
  city: { en: 'a city: Kyiv, Seattle', uk: 'місто: Kyiv, Seattle' },
  lake: { en: 'a single lake: Lake Tahoe', uk: 'окреме озеро: Lake Tahoe' },
  mountain: { en: 'a single mountain: Mount Rainier', uk: 'окрема гора: Mount Rainier' },
  person: { en: 'a person', uk: 'людина' },
  company: { en: 'a company: Google, Stripe', uk: 'компанія: Google, Stripe' },
  university: { en: 'a university named without of: Stanford University', uk: 'університет без of: Stanford University' },
  'plural-country': { en: 'a plural country name: the Netherlands', uk: 'назва країни в множині: the Netherlands' },
  united: { en: 'United / Republic / Kingdom: the United States', uk: 'United / Republic / Kingdom: the United States' },
  river: { en: 'a river: the Hudson, the Dnipro', uk: 'річка: the Hudson, the Dnipro' },
  ocean: { en: 'an ocean or sea: the Pacific', uk: 'океан чи море: the Pacific' },
  range: { en: 'a mountain range: the Rockies', uk: 'гірський хребет: the Rockies' },
  islands: { en: 'a group of islands: the Bahamas', uk: 'група островів: the Bahamas' },
  'of-name': { en: 'a name built on of: the University of Texas', uk: 'назва з of: the University of Texas' },
};
const KNOWN_WHY: Record<Known, Localized> = {
  mentioned: { en: 'yes — it was mentioned before', uk: 'так — його вже згадували' },
  unique: { en: 'yes — there is only one', uk: 'так — він єдиний' },
  defined: { en: 'yes — the phrase after it says which', uk: 'так — фраза після нього каже, який саме' },
  superlative: { en: 'yes — a superlative picks out one', uk: 'так — superlative виділяє один' },
  shared: { en: 'yes — the one everyone here uses', uk: 'так — той, яким тут користуються всі' },
};

export type Step = { q: Question; yes: boolean; why: Localized };
export type Walk = { path: Step[]; leaf: Leaf; article: Article };

/** Vowel or consonant SOUND at the start of a word (British Council: "depends on sound, not spelling"). */
const VOWEL_WORDS = new Set(['hour', 'hours', 'hourly', 'honest', 'honestly', 'honor', 'honorable', 'heir']);
const CONSONANT_WORDS = new Set([
  'university', 'unique', 'unit', 'union', 'uniform', 'user', 'users', 'useful', 'usual', 'utility', 'european', 'one', 'once', 'eu',
]);
/** Letters whose NAME starts with a vowel sound (an MVP · an SLA · an API — but a UX, a URL). */
const VOWEL_LETTER_NAMES = new Set('AEFHILMNORSX'.split(''));
export function soundOf(word: string): 'vowel' | 'consonant' {
  const w = word.replace(/[^A-Za-z]/g, '');
  if (!w) return 'consonant';
  const lower = w.toLowerCase();
  if (VOWEL_WORDS.has(lower)) return 'vowel';
  if (CONSONANT_WORDS.has(lower)) return 'consonant';
  // An all-caps abbreviation read letter by letter: the first letter's name decides.
  if (w.length >= 2 && w === w.toUpperCase()) return VOWEL_LETTER_NAMES.has(w[0]) ? 'vowel' : 'consonant';
  return /^[aeiou]/.test(lower) ? 'vowel' : 'consonant';
}

const no = (en: string, uk: string): Localized => ({ en, uk });

/**
 * Walk the tree. `next` is the word right after the article slot (it decides a vs an). The order is the
 * point: a routine phrase or a name settles the question before "which one?" is ever asked.
 */
export function decide(f: NounFacts, next: string, variant: Variant = 'ame'): Walk {
  const path: Step[] = [];
  // 1. routine phrase?
  const routineHere = !!f.routine && !f.visitor && !(variant === 'ame' && AME_NOT_ROUTINE.has(f.routine));
  if (routineHere) {
    path.push({ q: 'routine', yes: true, why: ROUTINE_WHY[f.routine!] });
    return { path, leaf: 'routine', article: 'zero' };
  }
  path.push({
    q: 'routine',
    yes: false,
    why: !f.routine
      ? no('no — an ordinary noun here', 'ні — тут звичайний іменник')
      : f.visitor
        ? no('no — only visiting, so it is just the building', 'ні — лише відвідування, тож це просто будівля')
        : no(
            `no — in American English ${f.routine} is a place: in the ${f.routine} (British: in ${f.routine})`,
            `ні — в американській англійській ${f.routine} — це місце: in the ${f.routine} (британська: in ${f.routine})`,
          ),
  });
  // 2. a proper name?
  if (f.name) {
    path.push({ q: 'name', yes: true, why: NAME_WHY[f.name] });
    const leaf: Leaf = NAME_THE.has(f.name) ? 'name-the' : 'name-zero';
    return { path, leaf, article: LEAF_ARTICLE[leaf] };
  }
  path.push({ q: 'name', yes: false, why: no('no — a common noun', 'ні — загальна назва') });
  // 3. does the listener know which one?
  if (f.known) {
    path.push({ q: 'known', yes: true, why: KNOWN_WHY[f.known] });
    return { path, leaf: 'specific', article: 'the' };
  }
  path.push({ q: 'known', yes: false, why: no('no — not this or that one', 'ні — не якийсь конкретний') });
  // 4. one countable thing?
  if (f.count !== 'one') {
    path.push({
      q: 'single',
      yes: false,
      why: f.count === 'many' ? no('no — plural, in general', 'ні — множина, загалом') : no('no — uncountable, in general', 'ні — незлічуваний, загалом'),
    });
    return { path, leaf: 'general', article: 'zero' };
  }
  path.push({ q: 'single', yes: true, why: no('yes — one countable thing', 'так — одна злічувана річ') });
  // 5. the whole kind?
  if (f.kind) {
    path.push({ q: 'kind', yes: true, why: no('yes — the invention / kind as one idea', 'так — винахід / вид як одне поняття') });
    return { path, leaf: 'class', article: 'the' };
  }
  const article: Article = soundOf(next) === 'vowel' ? 'an' : 'a';
  path.push({
    q: 'kind',
    yes: false,
    why: no(`no — one of many; “${next}” starts with a ${soundOf(next)} sound → ${article}`, `ні — один із багатьох; «${next}» починається з ${soundOf(next) === 'vowel' ? 'голосного' : 'приголосного'} звука → ${article}`),
  });
  return { path, leaf: 'one', article };
}

// ── Scenarios ────────────────────────────────────────────────────────────

export type AtTrack = 'walk' | 'pairs';
export const AT_TRACKS: readonly AtTrack[] = ['walk', 'pairs'];
export type AtGroup = 'routine' | 'places' | 'generic' | 'nuance';
export const AT_GROUPS: readonly AtGroup[] = ['routine', 'places', 'generic', 'nuance'];
export const GROUP_LABEL: Record<AtGroup, Localized> = {
  routine: { en: 'Routine ∅', uk: 'Сталі ∅' },
  places: { en: 'Places & names', uk: 'Місця й назви' },
  generic: { en: 'General & generic', uk: 'Загальне й родове' },
  nuance: { en: 'a/an vs the', uk: 'a/an vs the' },
};

/** One sentence: the article marked `|art` (`∅|art` = no article). */
export type AtContext = { src: string; uk: string; facts: NounFacts };
export type AtScenario = AtContext & {
  id: string;
  group: AtGroup;
  title: Localized;
  trap?: { wrong: string; why: Localized };
};
export type AtPair = { id: string; title: Localized; a: AtContext; b: AtContext };

export function scenariosOf(group: AtGroup): AtScenario[] {
  return AT_SCENARIOS.filter((s) => s.group === group);
}
export function listScenarios(): readonly AtScenario[] {
  return AT_SCENARIOS;
}
export function listPairs(): readonly AtPair[] {
  return AT_PAIRS;
}

const cache = new Map<string, MorphToken[]>();
function cached(key: string, build: () => MorphToken[]): MorphToken[] {
  let t = cache.get(key);
  if (!t) {
    t = build();
    cache.set(key, t);
  }
  return t;
}

/** The authored sentence, parsed (the ∅ marker still in place). */
export function authoredTokens(src: string): MorphToken[] {
  return cached(`src:${src}`, () => parseLine(src));
}
function artIndex(tokens: readonly MorphToken[], src: string): number {
  const idx = tokens.map((t, i) => (t.role === 'art' ? i : -1)).filter((i) => i >= 0);
  if (idx.length !== 1) throw new Error(`article tree: “${src}” must mark exactly one |art, has ${idx.length}`);
  return idx[0];
}
/** The article the AUTHOR wrote (for the golden cross-check). */
export function authoredArticle(src: string): Article {
  const toks = authoredTokens(src);
  const w = toks[artIndex(toks, src)].w.toLowerCase();
  if (w === '∅') return 'zero';
  if (w === 'a' || w === 'an' || w === 'the') return w;
  throw new Error(`article tree: “${src}” marks “${w}” as the article`);
}
/** The word right after the slot — it decides a vs an. */
export function nextWord(src: string): string {
  const toks = authoredTokens(src);
  return toks[artIndex(toks, src) + 1]?.w ?? '';
}
/** The sentence with an empty slot where the article goes. */
export function slotTokens(src: string): MorphToken[] {
  return cached(`slot:${src}`, () => {
    const toks = authoredTokens(src);
    const i = artIndex(toks, src);
    return toks.map((t, j) => (j === i ? { k: 'slot~art', w: '___', glue: false, role: 'slot' as const } : t));
  });
}
/** The sentence with the ENGINE's article in the slot (or the slot gone, for ∅). */
export function answerTokens(src: string, article: Article): MorphToken[] {
  return cached(`ans:${article}:${src}`, () => {
    const toks = authoredTokens(src);
    const i = artIndex(toks, src);
    if (article === 'zero') return toks.filter((_, j) => j !== i);
    const w = i === 0 ? article[0].toUpperCase() + article.slice(1) : article;
    return toks.map((t, j) => (j === i ? { k: `${article}~art`, w, glue: false, role: 'art' as const } : t));
  });
}

export function walkOf(ctx: AtContext, variant: Variant = 'ame'): Walk {
  return decide(ctx.facts, nextWord(ctx.src), variant);
}

/** Facts that differ between two contexts (pairs track: "what changed"). */
export function diffFacts(a: NounFacts, b: NounFacts): (keyof NounFacts)[] {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)] as (keyof NounFacts)[]);
  return [...keys].filter((k) => a[k] !== b[k]);
}

export const ARTICLE_LABEL: Record<Article, string> = { a: 'a', an: 'an', the: 'the', zero: '∅' };
