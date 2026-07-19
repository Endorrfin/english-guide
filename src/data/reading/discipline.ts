import type { ReadingText } from '../types';

/*
 * Reading · category: discipline. ORIGINAL bilingual texts written for this guide (owner-authored,
 * safe to publish). No external source. 2 MCQ + 1 open question each.
 */
export const disciplineTexts: ReadingText[] = [
  {
    id: 'showing-up',
    title: { en: 'Showing Up', uk: 'Просто зʼявлятися' },
    category: 'discipline',
    level: 'b1',
    minutes: 1,
    topics: ['consistency', 'habits', 'motivation'],
    body: {
      en: 'On most days you will not feel inspired, and that is exactly the point. People who make real progress are not the ones who feel motivated every morning; they are the ones who show up whether they feel like it or not. Motivation comes and goes like weather, but a habit is a decision you make once and then stop renegotiating. On a bad day, lower the goal but keep the appointment: write one sentence, run to the corner, open the book for five minutes. The streak matters more than the size. When showing up is not up for debate, progress takes care of itself.',
      uk: 'Більшість днів ви не почуватиметесь натхненними — і саме в цьому суть. Люди, які досягають справжнього поступу, — не ті, хто щоранку відчуває мотивацію; це ті, хто зʼявляється незалежно від настрою. Мотивація приходить і йде, як погода, а звичка — це рішення, яке ухвалюєш один раз і більше не переобговорюєш. У поганий день знизьте ціль, але дотримайте зустріч: напишіть одне речення, пробіжіть до рогу, відкрийте книжку на пʼять хвилин. Серія важливіша за розмір. Коли поява не підлягає обговоренню, поступ дбає про себе сам.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'Who makes real progress, according to the text?', uk: 'Хто досягає справжнього поступу, за текстом?' },
        options: [
          { en: 'Those who show up whether they feel like it or not', uk: 'Ті, хто зʼявляється незалежно від настрою' },
          { en: 'Those who wait for motivation', uk: 'Ті, хто чекає мотивації' },
          { en: 'Those who are naturally talented', uk: 'Ті, хто від природи талановитий' },
        ],
        correct: 0,
        explain: { en: 'Progress comes from showing up, not from feeling motivated every day.', uk: 'Поступ — від того, що зʼявляєшся, а не від щоденної мотивації.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the text suggest doing on a bad day?', uk: 'Що текст радить робити в поганий день?' },
        options: [
          { en: 'Lower the goal but keep the appointment', uk: 'Знизити ціль, але дотримати зустріч' },
          { en: 'Skip the day entirely', uk: 'Повністю пропустити день' },
          { en: 'Double the goal', uk: 'Подвоїти ціль' },
        ],
        correct: 0,
        explain: { en: '“On a bad day, lower the goal but keep the appointment.”', uk: '«У поганий день знизьте ціль, але дотримайте зустріч.»' },
      },
      {
        kind: 'open',
        q: { en: 'What is a “minimum version” of one habit you could keep even on your worst day?', uk: 'Яка «мінімальна версія» однієї звички, яку ви могли б утримати навіть у найгірший день?' },
        sample: { en: 'Answers will vary — e.g., “read one page,” “write one sentence,” “stretch for two minutes.” The point is that it is small enough to never skip.', uk: 'Відповіді різнитимуться — напр., «прочитати одну сторінку», «написати одне речення», «потягнутися дві хвилини». Суть — щоб було досить мало, аби ніколи не пропускати.' },
      },
    ],
  },
  {
    id: 'the-two-minute-start',
    title: { en: 'The Two-Minute Start', uk: 'Старт на дві хвилини' },
    category: 'discipline',
    level: 'b1',
    minutes: 1,
    topics: ['procrastination', 'habits', 'focus'],
    body: {
      en: 'Procrastination is usually not laziness — it is the pain of starting. The task looks large, so we avoid it, and avoiding it makes it feel even larger. A simple trick breaks the cycle: promise yourself just two minutes. Open the document and write one line. Put on your shoes and step outside. Wash a single plate. Two minutes is too small to fear, so you actually begin — and beginning is the hard part. Very often those two minutes turn into twenty, because a body in motion tends to keep moving. Even when they do not, you have broken the task’s spell and made the next start easier.',
      uk: 'Прокрастинація — це зазвичай не лінь, а біль початку. Завдання здається великим, тож ми уникаємо його, а уникання робить його ще більшим. Простий трюк розриває це коло: пообіцяйте собі лише дві хвилини. Відкрийте документ і напишіть один рядок. Взуйтеся й вийдіть надвір. Помийте одну тарілку. Дві хвилини — надто мало, щоб боятися, тож ви справді починаєте, а початок і є найважчим. Дуже часто ці дві хвилини перетворюються на двадцять, бо тіло в русі схильне рухатися далі. А навіть якщо ні, ви розвіяли чари завдання й зробили наступний старт легшим.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, procrastination is usually…', uk: 'За текстом, прокрастинація — це зазвичай…' },
        options: [
          { en: 'the pain of starting, not laziness', uk: 'біль початку, а не лінь' },
          { en: 'a sign of weakness', uk: 'ознака слабкості' },
          { en: 'impossible to beat', uk: 'непереборна річ' },
        ],
        correct: 0,
        explain: { en: '“Procrastination is usually not laziness — it is the pain of starting.”', uk: '«Прокрастинація — це зазвичай не лінь, а біль початку.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What is the “two-minute start”?', uk: 'Що таке «старт на дві хвилини»?' },
        options: [
          { en: 'Promise yourself just two minutes so you actually begin', uk: 'Пообіцяти собі лише дві хвилини, щоб таки почати' },
          { en: 'Finish everything in two minutes', uk: 'Завершити все за дві хвилини' },
          { en: 'Wait two minutes before working', uk: 'Почекати дві хвилини перед роботою' },
        ],
        correct: 0,
        explain: { en: 'Two minutes is too small to fear, so you begin — and beginning is the hard part.', uk: 'Дві хвилини надто малі, щоб боятися, тож ви починаєте — а початок і є найважчим.' },
      },
      {
        kind: 'open',
        q: { en: 'Pick a task you are avoiding. What would its two-minute start look like?', uk: 'Оберіть справу, якої уникаєте. Який був би її старт на дві хвилини?' },
        sample: { en: 'Answers will vary. A good answer names the task and a tiny concrete first action (e.g., “open the file and write the title”).', uk: 'Відповіді різнитимуться. Гарна відповідь називає справу й крихітну конкретну першу дію (напр., «відкрити файл і написати заголовок»).' },
      },
    ],
  },
];
