import type { ReadingText } from '../types';

/*
 * Reading · category: family. Text transcribed from the owner's screenshot backlog, attributed
 * per `source` (Mind Boost English — Facebook community).
 */
export const familyTexts: ReadingText[] = [
  {
    id: 'my-family',
    title: { en: 'My Family', uk: 'Моя сімʼя' },
    category: 'family',
    level: 'a2',
    minutes: 1,
    source: { author: 'Mind Boost English', url: 'https://www.facebook.com/profile.php?id=61584114885870&sk=reels_tab' },
    topics: ['family', 'gratitude', 'everyday'],
    body: {
      en: 'Hello everyone, today I want to talk about my family. My family is very important to me. They love and support me in every situation. We spend time together and help each other. My parents teach me good manners and important lessons. I feel happy and safe with my family. I am thankful for their love and care.',
      uk: 'Привіт усім, сьогодні я хочу розповісти про свою сімʼю. Моя сімʼя дуже важлива для мене. Вони люблять і підтримують мене в будь-якій ситуації. Ми проводимо час разом і допомагаємо одне одному. Мої батьки вчать мене хороших манер і важливих життєвих уроків. Я почуваюся щасливим і в безпеці зі своєю сімʼєю. Я вдячний за їхню любов і турботу.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What do the speaker’s parents teach?', uk: 'Чого навчають батьки оповідача?' },
        options: [
          { en: 'Good manners and important lessons', uk: 'Хороших манер і важливих уроків' },
          { en: 'How to cook only', uk: 'Лише як готувати' },
          { en: 'Nothing in particular', uk: 'Нічого конкретного' },
        ],
        correct: 0,
        explain: { en: '“My parents teach me good manners and important lessons.”', uk: '«My parents teach me good manners and important lessons.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'How does the speaker feel with their family?', uk: 'Як почувається оповідач зі своєю сімʼєю?' },
        options: [
          { en: 'Happy and safe', uk: 'Щасливим і в безпеці' },
          { en: 'Bored', uk: 'Знудженим' },
          { en: 'Afraid', uk: 'Наляканим' },
        ],
        correct: 0,
        explain: { en: '“I feel happy and safe with my family.”', uk: '«I feel happy and safe with my family.»' },
      },
      {
        kind: 'open',
        q: { en: 'Write two or three sentences about why your family (or a close person) is important to you.', uk: 'Напишіть два-три речення про те, чому ваша сімʼя (або близька людина) важлива для вас.' },
        sample: { en: 'Answers will vary. A good answer uses simple present-tense sentences with a reason, e.g., “My family is important to me because they support me when things are hard.”', uk: 'Відповіді різнитимуться. Гарна відповідь використовує прості речення в теперішньому часі з причиною, напр.: «My family is important to me because they support me when things are hard.»' },
      },
    ],
  },
];
