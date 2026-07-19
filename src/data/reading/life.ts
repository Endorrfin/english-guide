import type { ReadingText } from '../types';

/*
 * Reading · category: life. ORIGINAL bilingual texts written for this guide (owner-authored,
 * safe to publish). No external source. 2 MCQ + 1 open question each.
 */
export const lifeTexts: ReadingText[] = [
  {
    id: 'what-is-enough',
    title: { en: 'What Is Enough', uk: 'Що таке «достатньо»' },
    category: 'life',
    level: 'b1',
    minutes: 1,
    topics: ['contentment', 'gratitude', 'values'],
    body: {
      en: 'Much of our worry comes from a moving finish line. We reach a goal we once dreamed of, feel satisfied for a day, and then quietly raise the target again. There is nothing wrong with ambition, but a life spent always chasing “more” can pass without ever feeling like enough. The cure is not to stop wanting things; it is to notice what you already have. Once in a while, pause and name three ordinary things that are genuinely good right now — a warm room, a friend, work that means something. Enough is not a certain amount. It is a habit of attention.',
      uk: 'Значна частина наших тривог походить із рухомої фінішної лінії. Ми досягаємо мети, про яку колись мріяли, день почуваємось задоволеними, а тоді тихо піднімаємо планку знову. В амбіціях немає нічого поганого, але життя, проведене у вічній гонитві за «більше», може минути так і не відчувши, що вже достатньо. Ліки — не перестати чогось хотіти, а помічати те, що вже маєш. Час від часу спиніться й назвіть три звичайні речі, які справді хороші просто зараз, — тепла кімната, друг, робота, що має сенс. «Достатньо» — це не певна кількість. Це звичка уваги.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'Where does much of our worry come from, according to the text?', uk: 'Звідки походить значна частина наших тривог, за текстом?' },
        options: [
          { en: 'A moving finish line — always raising the target', uk: 'Рухома фінішна лінія — постійне підняття планки' },
          { en: 'Having too few goals', uk: 'Замало цілей' },
          { en: 'Other people’s opinions only', uk: 'Лише чужі думки' },
        ],
        correct: 0,
        explain: { en: 'We hit a goal, feel satisfied briefly, then quietly raise the target again.', uk: 'Ми досягаємо мети, ненадовго задоволені, а тоді знову тихо піднімаємо планку.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the text say “enough” really is?', uk: 'Чим, за текстом, є «достатньо» насправді?' },
        options: [
          { en: 'A habit of attention', uk: 'Звичкою уваги' },
          { en: 'A certain amount of money', uk: 'Певною сумою грошей' },
          { en: 'A prize you win once', uk: 'Призом, який виграєш раз' },
        ],
        correct: 0,
        explain: { en: '“Enough is not a certain amount. It is a habit of attention.”', uk: '«“Достатньо” — це не певна кількість. Це звичка уваги.»' },
      },
      {
        kind: 'open',
        q: { en: 'Name three ordinary things in your life right now that are genuinely good.', uk: 'Назвіть три звичайні речі у вашому житті просто зараз, які справді хороші.' },
        sample: { en: 'Answers will vary. The point is to name concrete, present, ordinary goods (people, health, work, a place) rather than future wishes.', uk: 'Відповіді різнитимуться. Суть — назвати конкретні, теперішні, звичайні блага (люди, здоровʼя, робота, місце), а не майбутні бажання.' },
      },
    ],
  },
  {
    id: 'one-thing-at-a-time',
    title: { en: 'One Thing at a Time', uk: 'По одній справі за раз' },
    category: 'life',
    level: 'b1',
    minutes: 1,
    topics: ['focus', 'calm', 'attention'],
    body: {
      en: 'Doing many things at once feels productive, but it rarely is. Each time we switch tasks, a little attention is lost in the jump, and the work turns out slower and full of small mistakes. Worse, a divided mind is a restless mind: we finish the day tired without knowing quite what we did. Try the opposite. Give one task your whole attention until it reaches a natural stopping point, then move on. Eat when you eat; talk when you talk; work when you work. This is not only more efficient — it is calmer. A life lived one thing at a time feels wider than a life spent doing everything halfway.',
      uk: 'Робити багато справ одночасно здається продуктивним, але рідко ним є. Щоразу, коли ми перемикаємось, трохи уваги губиться в стрибку, і робота виходить повільнішою й повною дрібних помилок. Гірше, розділений розум — неспокійний розум: ми закінчуємо день утомленими, до пуття не знаючи, що зробили. Спробуйте навпаки. Віддайте одній справі всю увагу до природної точки зупинки, а тоді переходьте далі. Їжте, коли їсте; говоріть, коли говорите; працюйте, коли працюєте. Це не лише ефективніше — це спокійніше. Життя, прожите по одній справі за раз, відчувається ширшим, ніж життя, проведене в усьому наполовину.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What happens each time we switch tasks, according to the text?', uk: 'Що стається щоразу, коли ми перемикаємось, за текстом?' },
        options: [
          { en: 'A little attention is lost in the jump', uk: 'Трохи уваги губиться в стрибку' },
          { en: 'We become faster and error-free', uk: 'Ми стаємо швидшими й безпомилковими' },
          { en: 'Nothing changes', uk: 'Нічого не змінюється' },
        ],
        correct: 0,
        explain: { en: 'Switching loses attention and makes work slower and error-prone.', uk: 'Перемикання губить увагу й робить роботу повільнішою та з помилками.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What does the text recommend instead of multitasking?', uk: 'Що текст радить замість багатозадачності?' },
        options: [
          { en: 'Give one task your whole attention to a natural stop', uk: 'Віддати одній справі всю увагу до природної зупинки' },
          { en: 'Do five things at once', uk: 'Робити пʼять справ одночасно' },
          { en: 'Never finish anything', uk: 'Ніколи нічого не завершувати' },
        ],
        correct: 0,
        explain: { en: 'Focus fully on one task until a natural stopping point, then move on.', uk: 'Зосередься повністю на одній справі до природної зупинки, а тоді далі.' },
      },
      {
        kind: 'open',
        q: { en: 'When do you most often multitask, and what could you do one thing at a time instead?', uk: 'Коли ви найчастіше робите кілька справ одночасно і що могли б робити по одній за раз?' },
        sample: { en: 'Answers will vary — e.g., eating while scrolling; instead, eat without a screen and answer messages afterward.', uk: 'Відповіді різнитимуться — напр., їсти, гортаючи стрічку; натомість їсти без екрана, а на повідомлення відповісти потім.' },
      },
    ],
  },
];
