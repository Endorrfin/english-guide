import type { ReadingText } from '../types';

/*
 * Reading · category: life. Texts transcribed from the owner's screenshot backlog, attributed
 * per `source` (Mind Boost English — Facebook community).
 */
const MBE_FB = { author: 'Mind Boost English', url: 'https://www.facebook.com/profile.php?id=61584114885870&sk=reels_tab' };

export const lifeTexts: ReadingText[] = [
  {
    id: 'village',
    title: { en: 'Village', uk: 'Село' },
    category: 'life',
    level: 'a2',
    minutes: 1,
    source: MBE_FB,
    topics: ['village', 'nature', 'simple-life'],
    body: {
      en: 'A village is a calm and beautiful place where life is simple and close to nature. People in villages live like a family and help each other in daily life. Fresh air, green fields, and peaceful surroundings make village life healthy and stress-free. Villages teach us honesty, hard work, and strong values. Life in a village may be simple, but it is full of peace and happiness.',
      uk: 'Село — це спокійне й гарне місце, де життя просте й близьке до природи. Люди в селах живуть, наче одна родина, і допомагають одне одному в щоденних справах. Свіже повітря, зелені поля й мирне довкілля роблять сільське життя здоровим і без стресу. Села вчать нас чесності, працьовитості й міцних цінностей. Життя в селі може бути простим, але воно сповнене спокою й щастя.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'How do people in villages live, according to the text?', uk: 'Як, за текстом, живуть люди в селах?' },
        options: [
          { en: 'Like a family, helping each other', uk: 'Наче родина, допомагаючи одне одному' },
          { en: 'Alone and apart', uk: 'Самотньо й окремо' },
          { en: 'In constant competition', uk: 'У постійному суперництві' },
        ],
        correct: 0,
        explain: { en: '“People in villages live like a family and help each other in daily life.”', uk: '«People in villages live like a family…»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What makes village life healthy and stress-free?', uk: 'Що робить сільське життя здоровим і без стресу?' },
        options: [
          { en: 'Fresh air, green fields, and peaceful surroundings', uk: 'Свіже повітря, зелені поля й мирне довкілля' },
          { en: 'Big crowds and traffic', uk: 'Великі натовпи й затори' },
          { en: 'Bright city lights', uk: 'Яскраві вогні міста' },
        ],
        correct: 0,
        explain: { en: '“Fresh air, green fields, and peaceful surroundings make village life healthy and stress-free.”', uk: '«Fresh air, green fields, and peaceful surroundings…»' },
      },
      {
        kind: 'open',
        q: { en: 'Would you prefer to live in a village or a city? Give two reasons.', uk: 'Ви б хотіли жити в селі чи в місті? Наведіть дві причини.' },
        sample: { en: 'Answers will vary. A strong answer takes a side and gives two concrete reasons (e.g., calm and clean air vs. jobs and convenience).', uk: 'Відповіді різнитимуться. Сильна відповідь обирає варіант і дає дві конкретні причини (напр., спокій і чисте повітря проти роботи й зручності).' },
      },
    ],
  },
  {
    id: 'poverty',
    title: { en: 'Poverty', uk: 'Бідність' },
    category: 'life',
    level: 'b1',
    minutes: 1,
    source: MBE_FB,
    topics: ['society', 'poverty', 'kindness'],
    body: {
      en: 'Poverty is one of the biggest challenges in the world. It affects people’s health, education, and opportunities in life. Poor people often struggle for basic needs like food, shelter, and medical care. Poverty is not a choice; it is a condition that needs understanding and support. By providing education, jobs, and kindness, we can reduce poverty. Helping the poor creates a fairer society and brings hope, dignity, and a better future for everyone.',
      uk: 'Бідність — один із найбільших викликів у світі. Вона впливає на здоровʼя людей, освіту й можливості в житті. Бідні люди часто борються за базові потреби — їжу, житло й медичну допомогу. Бідність — це не вибір; це стан, що потребує розуміння й підтримки. Даючи освіту, роботу й доброту, ми можемо зменшити бідність. Допомога бідним створює справедливіше суспільство й приносить надію, гідність і краще майбутнє для всіх.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'How does the text describe poverty?', uk: 'Як текст описує бідність?' },
        options: [
          { en: 'Not a choice, but a condition that needs support', uk: 'Не вибір, а стан, що потребує підтримки' },
          { en: 'A personal choice people make', uk: 'Особистий вибір людей' },
          { en: 'A small, rare problem', uk: 'Дрібну, рідкісну проблему' },
        ],
        correct: 0,
        explain: { en: '“Poverty is not a choice; it is a condition that needs understanding and support.”', uk: '«Poverty is not a choice; it is a condition that needs understanding and support.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'According to the text, how can we reduce poverty?', uk: 'За текстом, як ми можемо зменшити бідність?' },
        options: [
          { en: 'By providing education, jobs, and kindness', uk: 'Даючи освіту, роботу й доброту' },
          { en: 'By ignoring it', uk: 'Ігноруючи її' },
          { en: 'By blaming the poor', uk: 'Звинувачуючи бідних' },
        ],
        correct: 0,
        explain: { en: '“By providing education, jobs, and kindness, we can reduce poverty.”', uk: '«By providing education, jobs, and kindness, we can reduce poverty.»' },
      },
      {
        kind: 'open',
        q: { en: 'Name one thing an ordinary person could do to help reduce poverty in their community.', uk: 'Назвіть одну річ, яку звичайна людина могла б зробити, щоб зменшити бідність у своїй громаді.' },
        sample: { en: 'Answers will vary — e.g., volunteering, donating to a food bank, mentoring or teaching a skill, supporting local jobs, treating people with dignity.', uk: 'Відповіді різнитимуться — напр., волонтерство, пожертва до продуктового банку, менторство чи навчання навички, підтримка місцевих робочих місць, ставлення до людей із гідністю.' },
      },
    ],
  },
];
