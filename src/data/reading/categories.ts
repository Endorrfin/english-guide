// src/data/reading/categories.ts — the Reading accordion taxonomy (S3).
// CHANGED (S3): seed taxonomy for the Reading library. The full set is defined now so the accordion
// and the OCR waves have stable buckets; the index page renders only categories that have texts yet.
// Category ids are stable (they appear in text records + progress); append/rename with care.
// `order` is display-only and NOT persisted, so renumbering it when a rubric is inserted is safe.
import type { ReadingCategory } from '../types';

export const readingCategories: ReadingCategory[] = [
  { id: 'life', order: 1, title: { en: 'Life', uk: 'Життя' }, blurb: { en: 'Living well, meaning, and everyday wisdom.', uk: 'Як жити добре, сенс і щоденна мудрість.' } },
  { id: 'values', order: 2, title: { en: 'Values', uk: 'Цінності' }, blurb: { en: 'Character, principles, and what matters.', uk: 'Характер, принципи і те, що справді важливо.' } },
  // CHANGED (Wave S2): mindset — self-belief / confidence / growth-mindset pieces, split out of
  // `values` so neither rubric grows past ~50 texts in the accordion.
  { id: 'mindset', order: 3, title: { en: 'Mindset & self-belief', uk: 'Мислення та впевненість' }, blurb: { en: 'Confidence, growth mindset, and believing in yourself.', uk: 'Впевненість, мислення зростання і віра в себе.' } },
  { id: 'discipline', order: 4, title: { en: 'Discipline', uk: 'Дисципліна' }, blurb: { en: 'Habits, consistency, and self-control.', uk: 'Звички, послідовність і самоконтроль.' } },
  { id: 'study', order: 5, title: { en: 'Study & learning', uk: 'Навчання' }, blurb: { en: 'How to learn, read, and grow your skills.', uk: 'Як навчатися, читати й розвивати навички.' } },
  { id: 'work', order: 6, title: { en: 'Work & career', uk: 'Робота' }, blurb: { en: 'Jobs, careers, and professional life.', uk: 'Робота, кар’єра і професійне життя.' } },
  { id: 'health', order: 7, title: { en: 'Health', uk: 'Здоров’я' }, blurb: { en: 'Body, mind, and healthy routines.', uk: 'Тіло, розум і здорові звички.' } },
  { id: 'family', order: 8, title: { en: 'Family', uk: 'Сім’я' }, blurb: { en: 'Parents, children, and home.', uk: 'Батьки, діти і дім.' } },
  { id: 'relationships', order: 9, title: { en: 'Relationships', uk: 'Стосунки' }, blurb: { en: 'People, love, and getting along.', uk: 'Люди, любов і вміння ладнати.' } },
  { id: 'friendship', order: 10, title: { en: 'Friendship', uk: 'Дружба' }, blurb: { en: 'Friends, trust, and loyalty.', uk: 'Друзі, довіра і вірність.' } },
  { id: 'upbringing', order: 11, title: { en: 'Upbringing', uk: 'Виховання' }, blurb: { en: 'Raising children and good manners.', uk: 'Виховання дітей і хороші манери.' } },
  { id: 'everyday', order: 12, title: { en: 'Everyday life', uk: 'Побут' }, blurb: { en: 'Home, chores, and daily routines.', uk: 'Дім, справи і щоденні рутини.' } },
  { id: 'sport', order: 13, title: { en: 'Sport', uk: 'Спорт' }, blurb: { en: 'Exercise, games, and movement.', uk: 'Спорт, ігри і рух.' } },
  { id: 'leisure', order: 14, title: { en: 'Leisure & hobbies', uk: 'Дозвілля' }, blurb: { en: 'Free time, hobbies, and fun.', uk: 'Вільний час, хобі та розваги.' } },
  { id: 'rest', order: 15, title: { en: 'Rest & recovery', uk: 'Відпочинок' }, blurb: { en: 'Sleep, breaks, and recharging.', uk: 'Сон, перерви і відновлення.' } },
  { id: 'technology', order: 16, title: { en: 'Technology', uk: 'Технології' }, blurb: { en: 'Devices, the internet, and the future.', uk: 'Пристрої, інтернет і майбутнє.' } },
  { id: 'travel', order: 17, title: { en: 'Travel', uk: 'Подорожі' }, blurb: { en: 'Trips, places, and journeys.', uk: 'Поїздки, місця і мандрівки.' } },
  { id: 'countries', order: 18, title: { en: 'Countries & culture', uk: 'Країни' }, blurb: { en: 'Nations, cultures, and traditions.', uk: 'Народи, культури і традиції.' } },
  // CHANGED (Wave RB1): biographies & speeches — condensed, graded adaptations of real lives and talks.
  { id: 'biographies', order: 19, title: { en: 'Biographies & Speeches', uk: 'Біографії та промови' }, blurb: { en: 'Real lives, famous speeches, and the ideas behind them.', uk: 'Реальні життєписи, відомі промови та ідеї за ними.' } },
  // CHANGED (Wave S2): short stories — first-person narrative micro-stories, which read badly filed
  // under `life`/`other` next to the essay-style texts.
  { id: 'short-stories', order: 20, title: { en: 'Short Stories', uk: 'Оповідання' }, blurb: { en: 'Short narrative stories with a small twist or lesson.', uk: 'Короткі оповідання з несподіванкою чи уроком.' } },
  // CHANGED (Wave RB2): humour — light, clean jokes for reading practice. ('relationships' already exists above.)
  { id: 'humour', order: 21, title: { en: 'Humour', uk: 'Гумор' }, blurb: { en: 'Jokes and funny short stories.', uk: 'Жарти та смішні короткі історії.' } },
  { id: 'other', order: 22, title: { en: 'Other', uk: 'Інше' }, blurb: { en: 'Everything that doesn’t fit a box yet.', uk: 'Усе, що поки не вклалося в рубрику.' } },
];
