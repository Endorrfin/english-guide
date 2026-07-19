// CHANGED (S1): UI chrome strings (bilingual). Grammar/technical terms stay English in both
// languages (standard §3.2). Resolve with the t() helper from useLang(): t(ui.search).
import type { Localized } from '../data/types';

export const ui = {
  brandTitle: { en: 'English', uk: 'English' },
  brandSubtitle: { en: 'The Guide', uk: 'Посібник' },

  search: { en: 'Search', uk: 'Пошук' },
  searchPlaceholder: {
    en: 'Search grammar & words…',
    uk: 'Пошук граматики і слів…',
  },
  searchNoResults: { en: 'No matches', uk: 'Нічого не знайдено' },
  searchKindModule: { en: 'Module', uk: 'Модуль' },
  searchKindTopic: { en: 'Topic', uk: 'Тема' },
  searchKindWord: { en: 'Word', uk: 'Слово' },

  levelFilter: { en: 'Level', uk: 'Рівень' },
  allLevels: { en: 'All', uk: 'Всі' },

  language: { en: 'Language', uk: 'Мова' },

  guideMap: { en: 'Map', uk: 'Карта' },
  dictionary: { en: 'Dictionary', uk: 'Словник' },
  practice: { en: 'Practice', uk: 'Практика' },
  review: { en: 'Review', uk: 'Повторення' },
  irregularVerbs: { en: 'Irregular verbs', uk: 'Неправильні дієслова' },
  startHere: { en: 'Start with modals', uk: 'Почати з modals' },
  openDictionary: { en: 'Open the dictionary', uk: 'Відкрити словник' },

  suggestedPath: { en: 'Suggested path', uk: 'Рекомендований шлях' },
  suggestedPathLede: {
    en: 'The owner-priority route: master the modal system first, then broaden out. Skip ahead any time.',
    uk: 'Пріоритетний маршрут: спершу опануйте систему modals, далі розширюйтесь. Пропускайте вперед будь-коли.',
  },

  onThisPage: { en: 'On this page', uk: 'На цій сторінці' },
  keyPoints: { en: 'Key points', uk: 'Ключові тези' },
  pitfalls: { en: 'Pitfalls & typical mistakes', uk: 'Пастки та типові помилки' },
  exercises: { en: 'Practice', uk: 'Практика' },
  seeAlso: { en: 'See also', uk: 'Дивіться також' },
  sources: { en: 'Sources', uk: 'Джерела' },
  mentalModelLabel: { en: 'Mental model', uk: 'Ментальна модель' },
  readMins: { en: 'min read', uk: 'хв читання' },

  prevModule: { en: 'Previous', uk: 'Попередній' },
  nextModule: { en: 'Next', uk: 'Наступний' },
  markKnown: { en: 'Mark as known', uk: 'Позначити як вивчене' },
  known: { en: 'Known', uk: 'Вивчено' },

  comingSoon: { en: 'Content coming in a later session', uk: 'Контент зʼявиться в наступній сесії' },
  stubNote: {
    en: 'This module is part of the navigable skeleton. Its full content is authored in a later session per the roadmap.',
    uk: 'Цей модуль — частина навігаційного каркасу. Його повний зміст буде створено в наступній сесії згідно з планом.',
  },
  reviewSoonNote: {
    en: 'Spaced-repetition flashcards (per-level decks · My words · irregular verbs) arrive in S4 per the roadmap.',
    uk: 'Flashcards зі spaced repetition (колоди за рівнями · Мої слова · irregular verbs) зʼявляться в S4 згідно з планом.',
  },
  irregularSoonNote: {
    en: 'The irregular-verbs table and the 3-forms drill arrive in S4 per the roadmap.',
    uk: 'Таблиця irregular verbs і тренажер трьох форм зʼявляться в S4 згідно з планом.',
  },

  // Dictionary
  dictionaryLede: {
    en: 'Searchable word cards: translations, definitions, IPA (US), and 7 tagged examples each — general, business, office, dev. Click a card to expand it.',
    uk: 'Пошукові картки слів: переклади, тлумачення, IPA (US) і 7 тегованих прикладів у кожній — general, business, office, dev. Клікніть картку, щоб розгорнути.',
  },
  dictSearchPlaceholder: { en: 'Search words & translations…', uk: 'Пошук слів і перекладів…' },
  allKinds: { en: 'All kinds', uk: 'Всі типи' },
  kindWord: { en: 'words', uk: 'слова' },
  kindPhrasal: { en: 'phrasal', uk: 'phrasal' },
  kindIdiom: { en: 'idioms', uk: 'ідіоми' },
  allPos: { en: 'All parts of speech', uk: 'Всі частини мови' },
  entriesLabel: { en: 'entries', uk: 'карток' },
  translationsLabel: { en: 'Translations', uk: 'Переклади' },
  examplesLabel: { en: 'Examples', uk: 'Приклади' },
  formsLabel: { en: 'Forms', uk: 'Форми' },
  collocationsLabel: { en: 'Collocations', uk: 'Колокації' },
  synonymsLabel: { en: 'Synonyms', uk: 'Синоніми' },
  antonymsLabel: { en: 'Antonyms', uk: 'Антоніми' },
  topicsLabel: { en: 'Topics', uk: 'Теми' },
  listen: { en: 'Listen (US)', uk: 'Прослухати (US)' },
  ttsUnavailable: {
    en: 'Speech is not available in this browser',
    uk: 'Озвучення недоступне в цьому браузері',
  },

  // Practice / exercises
  practiceLede: {
    en: 'Gap-fill and multiple-choice drills aggregated from every authored module. Filter by tag and level; your correct answers are remembered on this device.',
    uk: 'Gap-fill і multiple-choice вправи, зібрані з усіх готових модулів. Фільтруйте за тегом і рівнем; правильні відповіді запамʼятовуються на цьому пристрої.',
  },
  check: { en: 'Check', uk: 'Перевірити' },
  showAnswer: { en: 'Show answer', uk: 'Показати відповідь' },
  correct: { en: 'Correct', uk: 'Правильно' },
  notQuite: { en: 'Not quite', uk: 'Не зовсім' },
  answerLabel: { en: 'Answer', uk: 'Відповідь' },
  typeAnswer: { en: 'Type your answer…', uk: 'Введіть відповідь…' },
  tryAgain: { en: 'Try again', uk: 'Ще раз' },
  hintLabel: { en: 'Hint', uk: 'Підказка' },
  allTags: { en: 'All tags', uk: 'Всі теги' },
  solvedLabel: { en: 'solved', uk: 'розвʼязано' },
  exercisesLabel: { en: 'exercises', uk: 'вправ' },
  resetProgress: { en: 'Reset progress', uk: 'Скинути прогрес' },

  footerRole: { en: 'Senior Fullstack Engineer', uk: 'Senior Fullstack Engineer' },
  footerCountry: { en: 'Ukraine', uk: 'Україна' },
  footerTagline: {
    en: 'Deep, interactive, bilingual English-language trainer — grammar, modals, and a growing dictionary.',
    uk: 'Глибокий інтерактивний двомовний тренажер англійської — граматика, modals і словник, що росте.',
  },
  builtWith: { en: 'Built with Vite · React · TypeScript', uk: 'Зроблено на Vite · React · TypeScript' },

  modulesLabel: { en: 'modules', uk: 'модулі' },
  sectionsLabel: { en: 'sections', uk: 'розділів' },
  wordsLabel: { en: 'words', uk: 'слів' },
  simsLabel: { en: 'signature sims', uk: 'фірмових симуляцій' },
  toggleSidebar: { en: 'Toggle navigation', uk: 'Перемкнути навігацію' },
  skipToContent: { en: 'Skip to content', uk: 'Перейти до вмісту' },

  // Dive levels (T1 — S5 mechanic, piloted in Section II Tenses)
  diveLabel: { en: 'Reading depth', uk: 'Глибина читання' },
  diveCore: { en: 'Core', uk: 'Основа' },
  diveFull: { en: 'Full', uk: 'Повний' },
  diveDeep: { en: 'Deep', uk: 'Глибоко' },
  diveHint: {
    en: 'Spiral learning: walk the section at Core (~15 min), then again at Full, then Deep.',
    uk: 'Спіральне навчання: пройдіть розділ на Основі (~15 хв), потім знову на Повному, потім Глибоко.',
  },
  diveOverview: { en: 'Overview', uk: 'Огляд' },
  diveOverviewHint: {
    en: 'The porthole view — the whole tense system on one page',
    uk: 'Вид з ілюмінатора — уся система tenses на одній сторінці',
  },
  diveStubFull: {
    en: 'More depth: connections & contrasts — expand',
    uk: 'Глибше: звʼязки і контрасти — розгорнути',
  },
  diveStubDeep: {
    en: 'Fine print: exceptions & edge cases — expand',
    uk: 'Дрібний шрифт: винятки і крайні випадки — розгорнути',
  },

  // Reading (S3)
  reading: { en: 'Reading', uk: 'Читання' },
  readingLede: {
    en: 'Short, real-life texts to read and understand. Expand a category, pick a text, read it in English with a Ukrainian translation on demand, then answer a few questions.',
    uk: 'Короткі життєві тексти для читання й розуміння. Розгорніть категорію, оберіть текст, читайте англійською з українським перекладом за потреби, а тоді дайте відповідь на кілька питань.',
  },
  readingSearchPlaceholder: { en: 'Search all texts…', uk: 'Пошук усіх текстів…' },
  readingTextsLabel: { en: 'texts', uk: 'текстів' },
  readingCategoriesLabel: { en: 'categories', uk: 'категорій' },
  readingGoalNote: { en: 'toward the 100-text goal', uk: 'до цілі у 100 текстів' },
  readingNoResults: { en: 'No texts match your search', uk: 'Жоден текст не збігається з пошуком' },
  readingOriginal: { en: 'Original (EN)', uk: 'Оригінал (EN)' },
  readingTranslation: { en: 'Translation (UA)', uk: 'Переклад (UA)' },
  readingShowTranslation: { en: 'Show Ukrainian translation', uk: 'Показати український переклад' },
  readingHideTranslation: { en: 'Hide translation', uk: 'Сховати переклад' },
  readingQuestions: { en: 'Comprehension questions', uk: 'Питання на розуміння' },
  readingShowSample: { en: 'Show sample answer', uk: 'Показати зразок відповіді' },
  readingSampleLabel: { en: 'Sample answer', uk: 'Зразок відповіді' },
  readingMarkRead: { en: 'Mark as read', uk: 'Позначити як прочитане' },
  readingRead: { en: 'Read', uk: 'Прочитано' },
  readingAll: { en: 'All texts', uk: 'Усі тексти' },
  readingSource: { en: 'Source', uk: 'Джерело' },
  readingSourceUnverified: { en: 'Source not verified', uk: 'Джерело не підтверджене' },
  readingMapBlurb: {
    en: 'A growing library of short, real-life texts — with translations and comprehension questions.',
    uk: 'Бібліотека коротких життєвих текстів, що зростає, — з перекладами й питаннями на розуміння.',
  },
} satisfies Record<string, Localized>;

export type UiKey = keyof typeof ui;
