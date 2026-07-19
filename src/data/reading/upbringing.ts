import type { ReadingText } from '../types';

/*
 * Reading · category: upbringing. Text transcribed from the owner's screenshot backlog, attributed
 * per `source` (Mind Boost English — Facebook community).
 */
export const upbringingTexts: ReadingText[] = [
  {
    id: 'respect-for-elders',
    title: { en: 'Respect for Elders', uk: 'Повага до старших' },
    category: 'upbringing',
    level: 'b1',
    minutes: 1,
    source: { author: 'Mind Boost English', url: 'https://www.facebook.com/profile.php?id=61584114885870&sk=reels_tab' },
    topics: ['respect', 'family', 'values'],
    body: {
      en: 'Respecting elders is an important value in every society. Elders have experience, wisdom, and life lessons that guide us in the right direction. When we listen to them, help them, and speak politely, we show good character. Respect for elders builds strong families and peaceful communities. Their prayers, advice, and love are precious gifts. A person who respects elders earns respect in return and grows into a responsible and kind human being.',
      uk: 'Повага до старших — важлива цінність у кожному суспільстві. Старші мають досвід, мудрість і життєві уроки, що спрямовують нас у правильному напрямку. Коли ми слухаємо їх, допомагаємо їм і говоримо ввічливо, ми виявляємо хороший характер. Повага до старших будує міцні родини й мирні громади. Їхні молитви, поради й любов — безцінні дари. Людина, яка поважає старших, здобуває повагу у відповідь і виростає відповідальною та доброю.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What do we show when we listen to elders and speak politely?', uk: 'Що ми виявляємо, коли слухаємо старших і говоримо ввічливо?' },
        options: [
          { en: 'Good character', uk: 'Хороший характер' },
          { en: 'Weakness', uk: 'Слабкість' },
          { en: 'Impatience', uk: 'Нетерплячість' },
        ],
        correct: 0,
        explain: { en: '“…we show good character.”', uk: '«…we show good character.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'According to the text, respect for elders builds…', uk: 'За текстом, повага до старших будує…' },
        options: [
          { en: 'strong families and peaceful communities', uk: 'міцні родини й мирні громади' },
          { en: 'wealth and fame', uk: 'багатство і славу' },
          { en: 'competition and conflict', uk: 'суперництво й конфлікт' },
        ],
        correct: 0,
        explain: { en: '“Respect for elders builds strong families and peaceful communities.”', uk: '«…builds strong families and peaceful communities.»' },
      },
      {
        kind: 'open',
        q: { en: 'What is one lesson you have learned from an older person in your life?', uk: 'Який один урок ви засвоїли від старшої людини у вашому житті?' },
        sample: { en: 'Answers will vary. A good answer names a specific person and a concrete lesson or piece of advice they gave.', uk: 'Відповіді різнитимуться. Гарна відповідь називає конкретну людину й конкретний урок або пораду, які вона дала.' },
      },
    ],
  },
];
