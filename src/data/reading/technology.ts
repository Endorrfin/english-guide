import type { ReadingText } from '../types';

/*
 * Reading · category: technology. Texts transcribed from the owner's screenshot backlog.
 */
export const technologyTexts: ReadingText[] = [
  {
    id: 'technology',
    title: { en: 'Technology', uk: 'Технології' },
    category: 'technology',
    level: 'b1',
    minutes: 1,
    topics: ['technology', 'internet', 'daily-life'],
    body: {
      en: 'Technology plays an important role in our daily lives. It makes our work easier, faster, and more efficient. With the help of technology, people can communicate with others around the world in seconds. Students use technology to learn new things and access information from the internet. It has also improved fields like medicine, education, and transportation. However, we should use technology wisely and not depend on it too much. Too much use of technology can affect our health and social life. When used properly, technology can help us grow, learn, and build a better future.',
      uk: 'Технології відіграють важливу роль у нашому повсякденні. Вони роблять нашу роботу легшою, швидшою й ефективнішою. За допомогою технологій люди можуть спілкуватися з іншими по всьому світу за лічені секунди. Учні використовують технології, щоб пізнавати нове й отримувати інформацію з інтернету. Вони також покращили такі сфери, як медицина, освіта й транспорт. Однак ми маємо використовувати технології розумно й не залежати від них надто сильно. Надмірне використання технологій може впливати на наше здоровʼя й соціальне життя. Коли їх використовують правильно, технології можуть допомагати нам зростати, вчитися й будувати краще майбутнє.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What does technology do for our work, according to the text?', uk: 'Що технології роблять для нашої роботи, за текстом?' },
        options: [
          { en: 'Makes it easier, faster, and more efficient', uk: 'Роблять її легшою, швидшою й ефективнішою' },
          { en: 'Makes it slower', uk: 'Роблять її повільнішою' },
          { en: 'Has no effect on it', uk: 'Не впливають на неї' },
        ],
        correct: 0,
        explain: { en: '“It makes our work easier, faster, and more efficient.”', uk: '«It makes our work easier, faster, and more efficient.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What warning does the text give about technology?', uk: 'Яке застереження щодо технологій дає текст?' },
        options: [
          { en: 'We should not depend on it too much', uk: 'Не варто залежати від них надто сильно' },
          { en: 'We should use it every waking hour', uk: 'Варто користуватися ними щохвилини' },
          { en: 'We should avoid it completely', uk: 'Варто повністю їх уникати' },
        ],
        correct: 0,
        explain: { en: '“However, we should use technology wisely and not depend on it too much.”', uk: '«…we should use technology wisely and not depend on it too much.»' },
      },
      {
        kind: 'open',
        q: { en: 'What is one way technology helps you, and one way you would like to use it less?', uk: 'Яким одним чином технології вам допомагають і де ви хотіли б користуватися ними менше?' },
        sample: { en: 'Answers will vary. A good answer names a real benefit (learning, staying in touch) and one healthy limit (less scrolling, screen-free time).', uk: 'Відповіді різнитимуться. Гарна відповідь називає реальну користь (навчання, звʼязок) і одне здорове обмеження (менше скролінгу, час без екрана).' },
      },
    ],
  },
];
