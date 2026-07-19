import type { ReadingText } from '../types';

/*
 * Reading · category: discipline. Texts transcribed from the owner's screenshot backlog,
 * attributed per `source` (Never Give Up — Mind Boost English; "Work in Silence" — source not captured).
 */
export const disciplineTexts: ReadingText[] = [
  {
    id: 'work-in-silence',
    title: { en: 'Work in Silence', uk: 'Працюй мовчки' },
    category: 'discipline',
    level: 'b2',
    minutes: 2,
    topics: ['focus', 'discipline', 'success'],
    body: {
      en: [
        'You don’t need to announce your every move. Privacy is power, and silence is a strategy. Let the world think you’re doing nothing, while you’re actually building everything. The biggest mistake you can make is seeking validation before you have results. True strength is staying focused when no one is watching and no one is clapping for you.',
        'Stop talking about your dreams and start acting on them. Let your success be the noise. While others are complaining, you are climbing. While others are sleeping, you are studying. Success isn\'t about being seen; it’s about being prepared. Stay humble, stay hungry, and keep grinding. One day, your work will speak for itself.',
      ].join('\n\n'),
      uk: [
        'Не обовʼязково оголошувати кожен свій крок. Приватність — це сила, а мовчання — стратегія. Нехай світ думає, що ти нічого не робиш, поки насправді ти будуєш усе. Найбільша помилка — шукати схвалення ще до того, як маєш результати. Справжня сила — лишатися зосередженим, коли ніхто не дивиться і ніхто тобі не аплодує.',
        'Перестань говорити про свої мрії й почни діяти. Нехай твій успіх буде шумом. Поки інші скаржаться, ти піднімаєшся вгору. Поки інші сплять, ти вчишся. Успіх — не про те, щоб тебе бачили; він про те, щоб бути готовим. Залишайся скромним, залишайся голодним до цілі й продовжуй працювати. Одного дня твоя праця скаже сама за себе.',
      ].join('\n\n'),
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What does the text call “the biggest mistake”?', uk: 'Що текст називає «найбільшою помилкою»?' },
        options: [
          { en: 'Seeking validation before you have results', uk: 'Шукати схвалення ще до результатів' },
          { en: 'Working too hard', uk: 'Працювати надто багато' },
          { en: 'Staying silent', uk: 'Мовчати' },
        ],
        correct: 0,
        explain: { en: '“The biggest mistake you can make is seeking validation before you have results.”', uk: '«…seeking validation before you have results.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'According to the text, success is mostly about…', uk: 'За текстом, успіх здебільшого про…' },
        options: [
          { en: 'being prepared', uk: 'бути готовим' },
          { en: 'being seen', uk: 'бути поміченим' },
          { en: 'being lucky', uk: 'мати удачу' },
        ],
        correct: 0,
        explain: { en: '“Success isn’t about being seen; it’s about being prepared.”', uk: '«Success isn’t about being seen; it’s about being prepared.»' },
      },
      {
        kind: 'open',
        q: { en: 'Do you agree that “silence is a strategy”? Give one reason for your view.', uk: 'Чи згодні ви, що «мовчання — це стратегія»? Наведіть одну причину.' },
        sample: { en: 'Answers will vary. A thoughtful answer takes a side and gives a reason — e.g., quiet focus avoids pressure and lets results speak; or sharing goals can create healthy accountability.', uk: 'Відповіді різнитимуться. Вдумлива відповідь обирає позицію й дає причину — напр., тиха зосередженість знімає тиск і дає результатам говорити; або ж озвучення цілей створює корисну відповідальність.' },
      },
    ],
  },
  {
    id: 'never-give-up',
    title: { en: 'Never Give Up', uk: 'Ніколи не здавайся' },
    category: 'discipline',
    level: 'b1',
    minutes: 1,
    source: { author: 'Mind Boost English', url: 'https://mindboostenglish.com' },
    topics: ['persistence', 'resilience', 'success'],
    body: {
      en: 'Never giving up is the secret to success and strength in life. Life is full of challenges, failures, and hard times, but giving up only stops progress. Every successful person has faced difficulties and kept moving forward. When we never give up, we learn from mistakes and grow stronger. Persistence builds confidence and courage. Even small steps taken with determination matter. There will be moments of doubt, but patience and belief keep us going. Hard work and consistency turn failure into success. Remember, quitting is easy, but staying strong brings rewards. Never give up on your dreams, because perseverance turns obstacles into opportunities and effort into achievement.',
      uk: 'Не здаватися — це секрет успіху й сили в житті. Життя сповнене викликів, невдач і важких часів, але здатися — означає лише спинити поступ. Кожна успішна людина стикалася з труднощами й продовжувала рухатися вперед. Коли ми не здаємося, ми вчимося на помилках і стаємо сильнішими. Наполегливість будує впевненість і сміливість. Навіть маленькі кроки, зроблені з рішучістю, мають значення. Будуть моменти сумніву, але терпіння й віра ведуть нас далі. Наполеглива праця й послідовність перетворюють невдачу на успіх. Памʼятай: здатися легко, але лишатися сильним приносить нагороди. Ніколи не здавайся на своїх мріях, бо наполегливість перетворює перешкоди на можливості, а зусилля — на досягнення.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, what does giving up do?', uk: 'За текстом, до чого призводить здатися?' },
        options: [
          { en: 'It only stops progress', uk: 'Воно лише спиняє поступ' },
          { en: 'It guarantees success', uk: 'Воно гарантує успіх' },
          { en: 'It builds confidence', uk: 'Воно будує впевненість' },
        ],
        correct: 0,
        explain: { en: '“…but giving up only stops progress.”', uk: '«…but giving up only stops progress.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What turns failure into success, according to the text?', uk: 'Що, за текстом, перетворює невдачу на успіх?' },
        options: [
          { en: 'Hard work and consistency', uk: 'Наполеглива праця й послідовність' },
          { en: 'Luck and talent only', uk: 'Лише удача й талант' },
          { en: 'Quitting early', uk: 'Ранній відступ' },
        ],
        correct: 0,
        explain: { en: '“Hard work and consistency turn failure into success.”', uk: '«Hard work and consistency turn failure into success.»' },
      },
      {
        kind: 'open',
        q: { en: 'Think of a time you kept going despite difficulty. What helped you not give up?', uk: 'Згадайте випадок, коли ви не спинилися попри труднощі. Що допомогло не здатися?' },
        sample: { en: 'Answers will vary. A strong answer describes a real situation and names a factor from the text (patience, belief, small steps, consistency).', uk: 'Відповіді різнитимуться. Сильна відповідь описує реальну ситуацію й називає чинник із тексту (терпіння, віра, маленькі кроки, послідовність).' },
      },
    ],
  },
];
