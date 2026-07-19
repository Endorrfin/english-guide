import type { ReadingText } from '../types';

/*
 * Reading · category: friendship. Texts transcribed from the owner's screenshot backlog.
 */
export const friendshipTexts: ReadingText[] = [
  {
    id: 'my-best-friend',
    title: { en: 'My Best Friend', uk: 'Мій найкращий друг' },
    category: 'friendship',
    level: 'b1',
    minutes: 1,
    topics: ['friendship', 'trust', 'support'],
    body: {
      en: 'My best friend is one of the most important people in my life. A true friend understands me, supports me, and stands by my side in every situation. We share our happiness, problems, and dreams with each other. My best friend always encourages me to do better and never give up. We study together, laugh together, and help each other grow. Trust and honesty make our friendship strong. A best friend listens carefully and gives good advice. In difficult times, my friend gives me strength and comfort. I am grateful to have such a loyal and caring friend. True friendship is a beautiful gift in life.',
      uk: 'Мій найкращий друг — одна з найважливіших людей у моєму житті. Справжній друг розуміє мене, підтримує мене й стоїть поруч у будь-якій ситуації. Ми ділимося одне з одним своїм щастям, проблемами й мріями. Мій найкращий друг завжди заохочує мене робити краще й ніколи не здаватися. Ми разом вчимося, разом сміємося й допомагаємо одне одному зростати. Довіра й чесність роблять нашу дружбу міцною. Найкращий друг уважно слухає й дає хороші поради. У важкі часи мій друг дає мені силу й розраду. Я вдячний, що маю такого відданого й дбайливого друга. Справжня дружба — це прекрасний дар у житті.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What makes the friendship strong, according to the text?', uk: 'Що робить дружбу міцною, за текстом?' },
        options: [
          { en: 'Trust and honesty', uk: 'Довіра й чесність' },
          { en: 'Money and gifts', uk: 'Гроші й подарунки' },
          { en: 'Living nearby', uk: 'Проживання поруч' },
        ],
        correct: 0,
        explain: { en: '“Trust and honesty make our friendship strong.”', uk: '«Trust and honesty make our friendship strong.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does a best friend do in difficult times, according to the text?', uk: 'Що робить найкращий друг у важкі часи, за текстом?' },
        options: [
          { en: 'Gives strength and comfort', uk: 'Дає силу й розраду' },
          { en: 'Disappears', uk: 'Зникає' },
          { en: 'Makes things worse', uk: 'Робить гірше' },
        ],
        correct: 0,
        explain: { en: '“In difficult times, my friend gives me strength and comfort.”', uk: '«…my friend gives me strength and comfort.»' },
      },
      {
        kind: 'open',
        q: { en: 'Describe a quality you value most in a best friend, and why.', uk: 'Опишіть якість, яку ви найбільше цінуєте в найкращому другові, і чому.' },
        sample: { en: 'Answers will vary — e.g., loyalty, honesty, listening, or encouragement. A good answer explains why it matters.', uk: 'Відповіді різнитимуться — напр., вірність, чесність, вміння слухати чи підтримка. Гарна відповідь пояснює, чому це важливо.' },
      },
    ],
  },
];
