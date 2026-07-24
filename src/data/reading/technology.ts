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
  {
    id: 'the-internet',
    title: { en: 'The Internet', uk: 'Інтернет' },
    category: 'technology',
    level: 'b1',
    minutes: 1,
    topics: ['technology', 'internet', 'daily-life'],
    seeAlso: ['technology'],
    body: {
      en: 'The internet is an important part of modern life. It helps people communicate, learn, and find information easily. Students use the internet for online classes and study materials. The internet also saves time: people can shop, pay bills, and contact others quickly. However, too much use of the internet can harm our health and can cause addiction. In conclusion, the internet is very useful if we use it wisely and responsibly.',
      uk: 'Інтернет — важлива частина сучасного життя. Він допомагає людям спілкуватися, навчатися й легко знаходити інформацію. Учні використовують інтернет для онлайн-занять і навчальних матеріалів. Інтернет також заощаджує час: люди можуть робити покупки, оплачувати рахунки й швидко звʼязуватися з іншими. Проте надмірне користування інтернетом може шкодити здоровʼю й спричиняти залежність. Насамкінець, інтернет дуже корисний, якщо користуватися ним розумно й відповідально.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What warning does the text give about the internet?', uk: 'Яке застереження щодо інтернету дає текст?' },
        options: [
          { en: 'Too much use can harm health and cause addiction', uk: 'Надмірне користування шкодить здоровʼю й спричиняє залежність' },
          { en: 'It is always completely safe', uk: 'Він завжди цілком безпечний' },
          { en: 'It should be used all day', uk: 'Ним варто користуватися цілий день' },
        ],
        correct: 0,
        explain: { en: '“…too much use of the internet can harm our health and can cause addiction.”', uk: '«…надмірне користування інтернетом може шкодити здоровʼю й спричиняти залежність.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What can people do quickly thanks to the internet?', uk: 'Що люди можуть швидко робити завдяки інтернету?' },
        options: [
          { en: 'Shop, pay bills, and contact others', uk: 'Робити покупки, оплачувати рахунки й звʼязуватися з іншими' },
          { en: 'Grow their own food', uk: 'Вирощувати власну їжу' },
          { en: 'Build houses', uk: 'Будувати будинки' },
        ],
        correct: 0,
        explain: { en: '“…people can shop, pay bills, and contact others quickly.”', uk: '«…люди можуть робити покупки, оплачувати рахунки й швидко звʼязуватися з іншими.»' },
      },
      {
        kind: 'open',
        q: { en: 'What do you use the internet for most, and how do you keep your use healthy?', uk: 'Для чого ви найбільше використовуєте інтернет і як робите користування здоровим?' },
        sample: { en: 'Answers will vary. A good answer names a real use (study, work, contact) and one limit (screen-free time, a daily limit).', uk: 'Відповіді різнитимуться. Гарна відповідь називає реальне застосування (навчання, робота, звʼязок) і одне обмеження (час без екрана, денний ліміт).' },
      },
    ],
  },
  {
    id: 'facebook',
    title: { en: 'Facebook', uk: 'Facebook' },
    category: 'technology',
    level: 'b1',
    minutes: 1,
    topics: ['technology', 'social-media', 'communication'],
    seeAlso: ['technology', 'mark-zuckerberg-find-your-purpose'],
    body: {
      en: 'Facebook is one of the most popular social media platforms in the world. It was created by Mark Zuckerberg in 2004. At first, Facebook was only for college students in the United States, but later it became open to everyone. Today, millions of people from all over the world use Facebook every day. Facebook helps people stay connected with their friends and family. Even if someone lives far away, they can still talk to each other through Facebook. Users can send messages, make video calls, and share photos or videos. It is a good way to keep in touch with the people we love.',
      uk: 'Facebook — одна з найпопулярніших соціальних мереж у світі. Її створив Марк Цукерберг у 2004 році. Спершу Facebook був лише для студентів коледжів у США, але згодом став доступним для всіх. Сьогодні мільйони людей з усього світу користуються Facebook щодня. Facebook допомагає людям підтримувати звʼязок із друзями та родиною. Навіть якщо хтось живе далеко, вони все одно можуть спілкуватися через Facebook. Користувачі можуть надсилати повідомлення, робити відеодзвінки й ділитися фото чи відео. Це гарний спосіб підтримувати звʼязок із тими, кого ми любимо.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'Who created Facebook, and when?', uk: 'Хто створив Facebook і коли?' },
        options: [
          { en: 'Mark Zuckerberg, in 2004', uk: 'Марк Цукерберг, у 2004 році' },
          { en: 'Bill Gates, in 1995', uk: 'Білл Ґейтс, у 1995 році' },
          { en: 'Steve Jobs, in 2010', uk: 'Стів Джобс, у 2010 році' },
        ],
        correct: 0,
        explain: { en: '“It was created by Mark Zuckerberg in 2004.”', uk: '«Її створив Марк Цукерберг у 2004 році.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'Who could use Facebook at first?', uk: 'Хто міг користуватися Facebook спочатку?' },
        options: [
          { en: 'Only college students in the United States', uk: 'Лише студенти коледжів у США' },
          { en: 'Everyone in the world', uk: 'Усі у світі' },
          { en: 'Only teachers', uk: 'Лише вчителі' },
        ],
        correct: 0,
        explain: { en: '“At first, Facebook was only for college students in the United States…”', uk: '«Спершу Facebook був лише для студентів коледжів у США…»' },
      },
      {
        kind: 'open',
        q: { en: 'How do you use social media to stay in touch with people?', uk: 'Як ви використовуєте соцмережі, щоб підтримувати звʼязок із людьми?' },
        sample: { en: 'Answers will vary — e.g., messaging family, video calls, sharing photos. A good answer gives a real example.', uk: 'Відповіді різнитимуться — напр., листування з родиною, відеодзвінки, обмін фото. Гарна відповідь дає реальний приклад.' },
      },
    ],
  },
];
