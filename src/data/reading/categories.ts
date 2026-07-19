// src/data/reading/categories.ts — the Reading accordion taxonomy (S3).
// CHANGED (S3): seed taxonomy for the Reading library. The full set is defined now so the accordion
// and the OCR waves have stable buckets; the index page renders only categories that have texts yet.
// Category ids are stable (they appear in text records + progress); append/rename with care.
import type { ReadingCategory } from '../types';

export const readingCategories: ReadingCategory[] = [
  { id: 'life', order: 1, title: { en: 'Life', uk: 'Життя' }, blurb: { en: 'Living well, meaning, and everyday wisdom.', uk: 'Як жити добре, сенс і щоденна мудрість.' } },
  { id: 'values', order: 2, title: { en: 'Values', uk: 'Цінності' }, blurb: { en: 'Character, principles, and what matters.', uk: 'Характер, принципи і те, що справді важливо.' } },
  { id: 'discipline', order: 3, title: { en: 'Discipline', uk: 'Дисципліна' }, blurb: { en: 'Habits, consistency, and self-control.', uk: 'Звички, послідовність і самоконтроль.' } },
  { id: 'study', order: 4, title: { en: 'Study & learning', uk: 'Навчання' }, blurb: { en: 'How to learn, read, and grow your skills.', uk: 'Як навчатися, читати й розвивати навички.' } },
  { id: 'work', order: 5, title: { en: 'Work & career', uk: 'Робота' }, blurb: { en: 'Jobs, careers, and professional life.', uk: 'Робота, кар’єра і професійне життя.' } },
  { id: 'health', order: 6, title: { en: 'Health', uk: 'Здоров’я' }, blurb: { en: 'Body, mind, and healthy routines.', uk: 'Тіло, розум і здорові звички.' } },
  { id: 'family', order: 7, title: { en: 'Family', uk: 'Сім’я' }, blurb: { en: 'Parents, children, and home.', uk: 'Батьки, діти і дім.' } },
  { id: 'relationships', order: 8, title: { en: 'Relationships', uk: 'Стосунки' }, blurb: { en: 'People, love, and getting along.', uk: 'Люди, любов і вміння ладнати.' } },
  { id: 'friendship', order: 9, title: { en: 'Friendship', uk: 'Дружба' }, blurb: { en: 'Friends, trust, and loyalty.', uk: 'Друзі, довіра і вірність.' } },
  { id: 'upbringing', order: 10, title: { en: 'Upbringing', uk: 'Виховання' }, blurb: { en: 'Raising children and good manners.', uk: 'Виховання дітей і хороші манери.' } },
  { id: 'everyday', order: 11, title: { en: 'Everyday life', uk: 'Побут' }, blurb: { en: 'Home, chores, and daily routines.', uk: 'Дім, справи і щоденні рутини.' } },
  { id: 'sport', order: 12, title: { en: 'Sport', uk: 'Спорт' }, blurb: { en: 'Exercise, games, and movement.', uk: 'Спорт, ігри і рух.' } },
  { id: 'leisure', order: 13, title: { en: 'Leisure & hobbies', uk: 'Дозвілля' }, blurb: { en: 'Free time, hobbies, and fun.', uk: 'Вільний час, хобі та розваги.' } },
  { id: 'rest', order: 14, title: { en: 'Rest & recovery', uk: 'Відпочинок' }, blurb: { en: 'Sleep, breaks, and recharging.', uk: 'Сон, перерви і відновлення.' } },
  { id: 'technology', order: 15, title: { en: 'Technology', uk: 'Технології' }, blurb: { en: 'Devices, the internet, and the future.', uk: 'Пристрої, інтернет і майбутнє.' } },
  { id: 'travel', order: 16, title: { en: 'Travel', uk: 'Подорожі' }, blurb: { en: 'Trips, places, and journeys.', uk: 'Поїздки, місця і мандрівки.' } },
  { id: 'countries', order: 17, title: { en: 'Countries & culture', uk: 'Країни' }, blurb: { en: 'Nations, cultures, and traditions.', uk: 'Народи, культури і традиції.' } },
  { id: 'other', order: 18, title: { en: 'Other', uk: 'Інше' }, blurb: { en: 'Everything that doesn’t fit a box yet.', uk: 'Усе, що поки не вклалося в рубрику.' } },
];
