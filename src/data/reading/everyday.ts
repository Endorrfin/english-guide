import type { ReadingText } from '../types';

/*
 * Reading · category: everyday life. Texts transcribed from the owner's screenshot backlog,
 * attributed per `source` (Mind Boost English — Facebook community).
 */
const MBE_FB = { author: 'Mind Boost English', url: 'https://www.facebook.com/profile.php?id=61584114885870&sk=reels_tab' };

export const everydayTexts: ReadingText[] = [
  {
    id: 'my-daily-routine',
    title: { en: 'My Daily Routine', uk: 'Мій розпорядок дня' },
    category: 'everyday',
    level: 'a1',
    minutes: 1,
    source: MBE_FB,
    topics: ['routine', 'daily-life'],
    body: {
      en: 'Hello everyone. Today, I want to talk about my daily routine. I wake up early in the morning. I brush my teeth and wash my face. I have breakfast at home. I go to school/work. I study and do my tasks. I have lunch in the afternoon. I play games or read books. In the evening, I spend time with my family. I have dinner at home. I relax and watch TV. I go to bed at night. I feel happy at the end of the day. Thank you for listening.',
      uk: 'Привіт усім. Сьогодні я хочу розповісти про свій розпорядок дня. Я прокидаюся рано вранці. Я чищу зуби й вмиваюся. Я снідаю вдома. Я йду до школи / на роботу. Я навчаюся й виконую свої завдання. Я обідаю вдень. Я граю в ігри або читаю книжки. Увечері я проводжу час із родиною. Я вечеряю вдома. Я відпочиваю й дивлюся телевізор. Уночі я лягаю спати. Наприкінці дня я почуваюся щасливим. Дякую, що вислухали.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'When does the speaker wake up?', uk: 'Коли прокидається оповідач?' },
        options: [
          { en: 'Early in the morning', uk: 'Рано вранці' },
          { en: 'In the afternoon', uk: 'Удень' },
          { en: 'Late at night', uk: 'Пізно вночі' },
        ],
        correct: 0,
        explain: { en: '“I wake up early in the morning.”', uk: '«I wake up early in the morning.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the speaker do in the evening?', uk: 'Що оповідач робить увечері?' },
        options: [
          { en: 'Spends time with family', uk: 'Проводить час із родиною' },
          { en: 'Goes to school', uk: 'Іде до школи' },
          { en: 'Has breakfast', uk: 'Снідає' },
        ],
        correct: 0,
        explain: { en: '“In the evening, I spend time with my family.”', uk: '«In the evening, I spend time with my family.»' },
      },
      {
        kind: 'open',
        q: { en: 'Write three sentences about your own morning routine.', uk: 'Напишіть три речення про свій ранковий розпорядок.' },
        sample: { en: 'Answers will vary. A good answer uses simple present-tense sentences, e.g., “I wake up at seven. I make coffee. I check my email.”', uk: 'Відповіді різнитимуться. Гарна відповідь — прості речення в теперішньому часі, напр.: «I wake up at seven. I make coffee. I check my email.»' },
      },
    ],
  },
  {
    id: 'debt',
    title: { en: 'Debt', uk: 'Борг' },
    category: 'everyday',
    level: 'b1',
    minutes: 1,
    source: MBE_FB,
    topics: ['money', 'responsibility', 'finance'],
    body: {
      en: 'Debt is a serious responsibility that must be handled with care and honesty. Sometimes people take loans to solve problems or improve their lives, but debt should never be taken without planning. Uncontrolled debt brings stress, worry, and hardship. A wise person borrows only when necessary and works hard to repay on time. Managing money carefully, saving regularly, and avoiding unnecessary expenses help us live free from debt and build a peaceful, stable future.',
      uk: 'Борг — це серйозна відповідальність, яку треба нести з обережністю й чесністю. Іноді люди беруть позики, щоб вирішити проблеми чи покращити життя, але борг ніколи не варто брати без планування. Неконтрольований борг приносить стрес, тривогу й труднощі. Мудра людина позичає лише за потреби й наполегливо працює, щоб вчасно повернути. Дбайливе управління грошима, регулярні заощадження та уникнення зайвих витрат допомагають жити без боргів і будувати спокійне, стабільне майбутнє.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, when does a wise person borrow?', uk: 'За текстом, коли позичає мудра людина?' },
        options: [
          { en: 'Only when necessary', uk: 'Лише за потреби' },
          { en: 'Whenever they want something', uk: 'Коли захочеться щось купити' },
          { en: 'Never, under any circumstances', uk: 'Ніколи й за жодних обставин' },
        ],
        correct: 0,
        explain: { en: '“A wise person borrows only when necessary and works hard to repay on time.”', uk: '«A wise person borrows only when necessary…»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does uncontrolled debt bring?', uk: 'Що приносить неконтрольований борг?' },
        options: [
          { en: 'Stress, worry, and hardship', uk: 'Стрес, тривогу й труднощі' },
          { en: 'Peace and stability', uk: 'Спокій і стабільність' },
          { en: 'Nothing at all', uk: 'Зовсім нічого' },
        ],
        correct: 0,
        explain: { en: '“Uncontrolled debt brings stress, worry, and hardship.”', uk: '«Uncontrolled debt brings stress, worry, and hardship.»' },
      },
      {
        kind: 'open',
        q: { en: 'What are two habits from the text that help a person stay free from debt?', uk: 'Які дві звички з тексту допомагають людині лишатися без боргів?' },
        sample: { en: 'Saving regularly and avoiding unnecessary expenses (also: careful money management, borrowing only when necessary, repaying on time).', uk: 'Регулярні заощадження та уникнення зайвих витрат (також: дбайливе управління грошима, позичати лише за потреби, вчасно повертати).' },
      },
    ],
  },
];
