import type { ReadingText } from '../types';

/*
 * Reading · category: values. ORIGINAL bilingual texts written for this guide (owner-authored,
 * safe to publish). No external source. 2 MCQ + 1 open question each.
 */
export const valuesTexts: ReadingText[] = [
  {
    id: 'small-choices',
    title: { en: 'Small Choices', uk: 'Маленькі вибори' },
    category: 'values',
    level: 'b1',
    minutes: 1,
    topics: ['choices', 'character', 'habits'],
    body: {
      en: 'We often think our lives are shaped by a few big decisions — the job we take, the city we move to. In truth, they are shaped far more by the small choices we repeat every day. What we read on the train, how we answer a tired colleague, whether we keep a quiet promise to ourselves — none of these feel important alone. Yet repeated a thousand times, they become our habits, and our habits become our character. Big moments get the attention, but small choices do the real work. Treat the small ones with care, because you are making them constantly.',
      uk: 'Ми часто думаємо, що наше життя формують кілька великих рішень — робота, яку обираємо, місто, куди переїжджаємо. Насправді його значно більше формують маленькі вибори, які ми повторюємо щодня. Що ми читаємо в дорозі, як відповідаємо втомленому колезі, чи дотримуємо тиху обіцянку собі — кожен окремо не здається важливим. Та повторені тисячу разів, вони стають нашими звичками, а звички стають нашим характером. Великі моменти привертають увагу, але справжню роботу роблять маленькі вибори. Ставтеся до них уважно, бо ви робите їх постійно.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'According to the text, what shapes our lives more than a few big decisions?', uk: 'За текстом, що формує наше життя більше, ніж кілька великих рішень?' },
        options: [
          { en: 'The small choices we repeat every day', uk: 'Маленькі вибори, які ми повторюємо щодня' },
          { en: 'Luck and chance', uk: 'Удача й випадок' },
          { en: 'Where we were born', uk: 'Місце, де ми народилися' },
        ],
        correct: 0,
        explain: { en: 'The text argues small daily choices, repeated, matter more than a few big ones.', uk: 'Текст доводить, що маленькі щоденні вибори, повторені, важать більше за кілька великих.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What do repeated small choices become?', uk: 'Чим стають повторювані маленькі вибори?' },
        options: [
          { en: 'Habits, and then character', uk: 'Звичками, а потім характером' },
          { en: 'Nothing important', uk: 'Нічим важливим' },
          { en: 'Only good luck', uk: 'Лише удачею' },
        ],
        correct: 0,
        explain: { en: '“…they become our habits, and our habits become our character.”', uk: '«…вони стають нашими звичками, а звички стають нашим характером.»' },
      },
      {
        kind: 'open',
        q: { en: 'Name one small daily choice you would like to make more carefully. Why that one?', uk: 'Назвіть один маленький щоденний вибір, який ви хотіли б робити уважніше. Чому саме цей?' },
        sample: { en: 'Answers will vary. A strong answer names a concrete recurring choice (e.g., how I reply to messages when tired) and a reason it matters.', uk: 'Відповіді різнитимуться. Сильна відповідь називає конкретний повторюваний вибір (напр., як я відповідаю на повідомлення, коли втомлений) і причину, чому це важливо.' },
      },
    ],
  },
  {
    id: 'honesty-that-builds-trust',
    title: { en: 'Honesty That Builds Trust', uk: 'Чесність, що будує довіру' },
    category: 'values',
    level: 'b1',
    minutes: 1,
    topics: ['honesty', 'trust', 'relationships'],
    body: {
      en: 'Trust is slow to build and quick to lose. The surest way to build it is small, everyday honesty: saying what you mean, admitting when you were wrong, and keeping the promises you make — even the tiny ones. People rarely remember a single grand act of honesty, but they always notice a pattern of it. When others learn that your words match your actions, they relax around you; they no longer have to check what you say. That ease is the real reward of honesty. It is not only about being good — it is about becoming someone others can safely rely on.',
      uk: 'Довіра будується повільно, а втрачається швидко. Найнадійніший спосіб її збудувати — маленька щоденна чесність: казати те, що маєш на увазі, визнавати, коли помилився, і дотримувати обіцянок — навіть найменших. Люди рідко памʼятають один величний вчинок чесності, але завжди помічають її сталість. Коли інші переконуються, що ваші слова збігаються з діями, вони розслабляються поруч; їм більше не треба перевіряти, що ви кажете. Ця легкість — і є справжня нагорода чесності. Це не лише про те, щоб бути хорошим, — це про те, щоб стати тим, на кого інші можуть безпечно покластися.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'What builds trust most surely, according to the text?', uk: 'Що найнадійніше будує довіру, за текстом?' },
        options: [
          { en: 'Small, everyday honesty', uk: 'Маленька щоденна чесність' },
          { en: 'One grand act', uk: 'Один величний вчинок' },
          { en: 'Clever words', uk: 'Розумні слова' },
        ],
        correct: 0,
        explain: { en: 'The text says people notice a pattern of honesty, not a single grand act.', uk: 'Текст каже, що люди помічають сталість чесності, а не один величний вчинок.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What is called “the real reward of honesty”?', uk: 'Що названо «справжньою нагородою чесності»?' },
        options: [
          { en: 'People relaxing around you and relying on you', uk: 'Люди розслабляються поруч і покладаються на вас' },
          { en: 'Becoming famous', uk: 'Стати відомим' },
          { en: 'Winning every argument', uk: 'Вигравати кожну суперечку' },
        ],
        correct: 0,
        explain: { en: 'The ease others feel when your words match your actions is the reward.', uk: 'Нагорода — легкість, яку відчувають інші, коли ваші слова збігаються з діями.' },
      },
      {
        kind: 'open',
        q: { en: 'Describe a time someone’s honesty made you trust them more.', uk: 'Опишіть випадок, коли чиясь чесність змусила вас довіряти цій людині більше.' },
        sample: { en: 'Answers will vary. A good answer describes a specific situation and what the person said or admitted that earned trust.', uk: 'Відповіді різнитимуться. Гарна відповідь описує конкретну ситуацію й те, що людина сказала чи визнала, чим здобула довіру.' },
      },
    ],
  },
];
