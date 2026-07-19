import type { ReadingText } from '../types';

/*
 * Reading · category: upbringing. ORIGINAL bilingual texts written for this guide (owner-authored,
 * safe to publish). No external source. 2 MCQ + 1 open question each.
 */
export const upbringingTexts: ReadingText[] = [
  {
    id: 'teaching-by-example',
    title: { en: 'Teaching by Example', uk: 'Вчити прикладом' },
    category: 'upbringing',
    level: 'b1',
    minutes: 1,
    topics: ['parenting', 'values', 'example'],
    body: {
      en: 'Children learn far more from what we do than from what we tell them. We can ask a child to read, to stay calm, or to be kind, but if they never see us doing those things, the lesson quietly fails. They watch how we treat a waiter, how we handle bad news, whether we keep our word when it is inconvenient. In a sense, parenting is less about giving instructions and more about being worth copying. This is demanding, because it asks us to grow too. But it is also freeing: the best thing you can do for a child is to keep becoming a person you would be proud for them to imitate.',
      uk: 'Діти вчаться значно більше з того, що ми робимо, ніж із того, що їм кажемо. Ми можемо просити дитину читати, зберігати спокій чи бути доброю, але якщо вона ніколи не бачить, як це робимо ми, урок тихо провалюється. Вони спостерігають, як ми поводимося з офіціантом, як реагуємо на погані новини, чи дотримуємо слова, коли це незручно. У певному сенсі виховання — менше про інструкції й більше про те, щоб бути гідним наслідування. Це вимогливо, бо змушує рости й нас. Але й звільняє: найкраще, що ви можете зробити для дитини, — це й далі ставати людиною, яку ви б пишалися бачити в її наслідуванні.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What do children learn from most, according to the text?', uk: 'З чого діти вчаться найбільше, за текстом?' },
        options: [
          { en: 'From what we do', uk: 'З того, що ми робимо' },
          { en: 'From what we tell them', uk: 'З того, що ми їм кажемо' },
          { en: 'From books only', uk: 'Лише з книжок' },
        ],
        correct: 0,
        explain: { en: '“Children learn far more from what we do than from what we tell them.”', uk: '«Діти вчаться значно більше з того, що ми робимо, ніж із того, що кажемо.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'How does the text describe parenting?', uk: 'Як текст описує виховання?' },
        options: [
          { en: 'Less about instructions, more about being worth copying', uk: 'Менше про інструкції, більше про гідність наслідування' },
          { en: 'Only about strict rules', uk: 'Лише про суворі правила' },
          { en: 'Something children ignore', uk: 'Те, що діти ігнорують' },
        ],
        correct: 0,
        explain: { en: 'Parenting is less about giving instructions and more about being worth copying.', uk: 'Виховання — менше про інструкції й більше про те, щоб бути гідним наслідування.' },
      },
      {
        kind: 'open',
        q: { en: 'What is one behaviour you would want a child to copy from you — and do you model it?', uk: 'Яку одну поведінку ви хотіли б, щоб дитина переймала від вас, — і чи подаєте ви цей приклад?' },
        sample: { en: 'Answers will vary. A thoughtful answer names a specific value (patience, honesty, reading) and honestly reflects on whether the reader models it.', uk: 'Відповіді різнитимуться. Вдумлива відповідь називає конкретну цінність (терпіння, чесність, читання) і чесно оцінює, чи подає читач цей приклад.' },
      },
    ],
  },
  {
    id: 'patience-with-children',
    title: { en: 'Patience with Children', uk: 'Терпіння з дітьми' },
    category: 'upbringing',
    level: 'b1',
    minutes: 1,
    topics: ['parenting', 'patience', 'emotions'],
    body: {
      en: 'A child’s big feelings can arrive like a storm — loud, sudden, and hard to reason with. In those moments, an adult’s calm is the most useful thing in the room. Shouting back rarely teaches anything except that the loudest person wins. Patience does not mean allowing everything; it means staying steady while you set a limit. Kneel to their level, name what they feel (“you’re angry the game stopped”), and hold the rule kindly but firmly. Children do not learn to manage emotions from lectures; they learn it by borrowing our calm again and again until, one day, it becomes their own.',
      uk: 'Сильні почуття дитини можуть налетіти, як буря, — гучно, раптово й не піддаючись доводам. У такі миті спокій дорослого — найкорисніша річ у кімнаті. Кричати у відповідь рідко чогось учить, окрім того, що перемагає найгучніший. Терпіння не означає дозволяти все; воно означає лишатися стійким, встановлюючи межу. Опустіться до її рівня, назвіть те, що вона відчуває («ти злишся, що гру зупинили»), і тримайте правило лагідно, але твердо. Діти вчаться керувати емоціями не з лекцій; вони вчаться, позичаючи наш спокій знову і знову, поки одного дня він не стане їхнім власним.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'In a moment of big feelings, what is most useful, according to the text?', uk: 'У мить сильних почуттів що найкорисніше, за текстом?' },
        options: [
          { en: 'An adult’s calm', uk: 'Спокій дорослого' },
          { en: 'Shouting back', uk: 'Крик у відповідь' },
          { en: 'Ignoring the child', uk: 'Ігнорування дитини' },
        ],
        correct: 0,
        explain: { en: '“An adult’s calm is the most useful thing in the room.”', uk: '«Спокій дорослого — найкорисніша річ у кімнаті.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does patience mean here?', uk: 'Що означає терпіння тут?' },
        options: [
          { en: 'Staying steady while you set a limit', uk: 'Лишатися стійким, встановлюючи межу' },
          { en: 'Allowing everything', uk: 'Дозволяти все' },
          { en: 'Never setting rules', uk: 'Ніколи не встановлювати правил' },
        ],
        correct: 0,
        explain: { en: '“Patience does not mean allowing everything; it means staying steady while you set a limit.”', uk: '«Терпіння не означає дозволяти все; воно означає лишатися стійким, встановлюючи межу.»' },
      },
      {
        kind: 'open',
        q: { en: 'How can naming a child’s feeling (“you’re angry…”) help calm a difficult moment?', uk: 'Як називання почуття дитини («ти злишся…») може допомогти вгамувати важку мить?' },
        sample: { en: 'Answers will vary. A good answer notes that naming a feeling helps the child feel understood and think, instead of only reacting.', uk: 'Відповіді різнитимуться. Гарна відповідь зауважує, що називання почуття допомагає дитині відчути себе зрозумілою й думати, а не лише реагувати.' },
      },
    ],
  },
];
