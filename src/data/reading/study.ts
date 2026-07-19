import type { ReadingText } from '../types';

/*
 * Reading · category: study & learning. ORIGINAL bilingual texts written for this guide
 * (owner-authored content — safe to publish). No external source. EN is the study object; `body.uk`
 * is a full natural translation; 2 MCQ + 1 open question each.
 */
export const studyTexts: ReadingText[] = [
  {
    id: 'learning-a-little-every-day',
    title: { en: 'Learning a Little Every Day', uk: 'Вчитися потроху щодня' },
    category: 'study',
    level: 'a2',
    minutes: 1,
    topics: ['habits', 'learning', 'consistency'],
    body: {
      en: 'Big skills are built from small, repeated efforts. Twenty focused minutes a day will teach you more over a year than one long weekend of study every few months. The reason is simple: your brain remembers things better when it meets them again and again, with rest in between. A daily habit also removes the hardest part — deciding whether to start. When study is just something you do at the same time each day, motivation matters less. Choose a small, fixed amount, protect that time, and let the days add up. Progress that feels invisible on any single day becomes obvious after a month.',
      uk: 'Великі навички будуються з маленьких повторюваних зусиль. Двадцять зосереджених хвилин на день за рік навчать вас більше, ніж один довгий вихідний навчання раз на кілька місяців. Причина проста: мозок краще запамʼятовує те, з чим зустрічається знову і знову, з відпочинком поміж. Щоденна звичка також прибирає найважче — рішення, чи починати. Коли навчання — це просто те, що ви робите в один і той самий час щодня, мотивація важить менше. Оберіть маленьку сталу порцію, бережіть цей час — і дайте дням накопичитися. Поступ, непомітний за один день, стає очевидним за місяць.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'Why does daily practice work better than rare long sessions?', uk: 'Чому щоденна практика працює краще за рідкісні довгі сесії?' },
        options: [
          { en: 'The brain remembers better with repetition and rest', uk: 'Мозок краще памʼятає завдяки повторенню й відпочинку' },
          { en: 'Long sessions are always boring', uk: 'Довгі сесії завжди нудні' },
          { en: 'Daily practice costs more money', uk: 'Щоденна практика коштує більше грошей' },
        ],
        correct: 0,
        explain: { en: 'The text says the brain remembers things better when it meets them again and again, with rest in between.', uk: 'У тексті сказано, що мозок краще памʼятає, зустрічаючи матеріал знову і знову, з відпочинком поміж.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What “hardest part” does a daily habit remove?', uk: 'Яку «найважчу частину» прибирає щоденна звичка?' },
        options: [
          { en: 'Deciding whether to start', uk: 'Рішення, чи починати' },
          { en: 'Paying for lessons', uk: 'Оплату уроків' },
          { en: 'Finding a teacher', uk: 'Пошук вчителя' },
        ],
        correct: 0,
        explain: { en: 'When study happens at the same time each day, you no longer have to decide whether to start.', uk: 'Коли навчання відбувається в той самий час щодня, більше не треба вирішувати, чи починати.' },
      },
      {
        kind: 'open',
        q: { en: 'What small, fixed amount of daily study could you realistically protect, and when?', uk: 'Яку маленьку сталу порцію щоденного навчання ви реально могли б берегти і коли?' },
        sample: { en: 'Answers will vary. A strong answer names a concrete amount and a fixed time, e.g., “15 minutes after breakfast, before I open my laptop for work.”', uk: 'Відповіді різнитимуться. Сильна відповідь називає конкретну порцію й сталий час, напр.: «15 хвилин після сніданку, перед тим як відкрити ноутбук для роботи.»' },
      },
    ],
  },
  {
    id: 'reading-widely',
    title: { en: 'Reading Widely', uk: 'Читати широко' },
    category: 'study',
    level: 'b1',
    minutes: 1,
    topics: ['reading', 'thinking', 'curiosity'],
    body: {
      en: 'Reading only about your own field makes you good at one thing. Reading widely — history, science, stories, other people’s lives — makes you better at thinking itself. Different subjects give you different ways to look at a problem, and an idea from one area often solves a puzzle in another. You do not need to finish every book. A few pages from many sources still fill your mind with useful questions. Over time, wide reading builds something rare: the ability to connect things that seem unrelated. Follow your curiosity, read for pleasure, and let your interests wander a little.',
      uk: 'Читати лише про свою галузь — означає бути вправним в одному. Читати широко — історію, науку, оповідання, чужі життя — означає ставати кращим у самому мисленні. Різні теми дають різні способи глянути на проблему, і ідея з однієї сфери часто розвʼязує загадку в іншій. Не обовʼязково дочитувати кожну книжку. Кілька сторінок із багатьох джерел усе одно наповнюють розум корисними питаннями. Згодом широке читання будує рідкісне вміння — повʼязувати те, що здається непов’язаним. Ідіть за цікавістю, читайте для задоволення й дозволяйте інтересам трохи блукати.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, what does reading widely improve?', uk: 'За текстом, що покращує широке читання?' },
        options: [
          { en: 'Thinking itself', uk: 'Саме мислення' },
          { en: 'Only your job skills', uk: 'Лише робочі навички' },
          { en: 'Your typing speed', uk: 'Швидкість друку' },
        ],
        correct: 0,
        explain: { en: 'Reading across many subjects makes you better at thinking, not just at one field.', uk: 'Читання з багатьох тем робить вас кращими в мисленні, а не лише в одній галузі.' },
      },
      {
        kind: 'mcq',
        q: { en: 'Does the text say you must finish every book?', uk: 'Чи каже текст, що треба дочитувати кожну книжку?' },
        options: [
          { en: 'No — a few pages from many sources still help', uk: 'Ні — кілька сторінок із багатьох джерел усе одно корисні' },
          { en: 'Yes — always finish every book', uk: 'Так — завжди дочитуй кожну книжку' },
          { en: 'Only finish books about your job', uk: 'Дочитуй лише книжки про роботу' },
        ],
        correct: 0,
        explain: { en: '“You do not need to finish every book.”', uk: '«Не обовʼязково дочитувати кожну книжку.»' },
      },
      {
        kind: 'open',
        q: { en: 'Name a subject outside your field you would enjoy reading about, and why.', uk: 'Назвіть тему поза вашою галуззю, про яку вам було б цікаво читати, і чому.' },
        sample: { en: 'Answers will vary. A good answer names a specific subject (e.g., history, biology, art) and a personal reason it appeals to the reader.', uk: 'Відповіді різнитимуться. Гарна відповідь називає конкретну тему (напр., історія, біологія, мистецтво) й особисту причину зацікавлення.' },
      },
    ],
  },
];
