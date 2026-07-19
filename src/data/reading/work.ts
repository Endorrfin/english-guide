import type { ReadingText } from '../types';

/*
 * Reading · category: work & career. ORIGINAL bilingual texts written for this guide
 * (owner-authored, safe to publish). No external source. 2 MCQ + 1 open question each.
 */
export const workTexts: ReadingText[] = [
  {
    id: 'deep-work',
    title: { en: 'Deep Work', uk: 'Глибока робота' },
    category: 'work',
    level: 'b2',
    minutes: 1,
    topics: ['focus', 'productivity', 'attention'],
    body: {
      en: 'Some tasks only yield to long, unbroken attention: writing, designing, solving a hard problem. This kind of effort is often called deep work, and it is becoming rare exactly because it is so valuable. Every notification splits your focus, and after each interruption the mind needs several minutes to climb back to where it was. The fix is not more willpower but a better setup. Choose one important task, silence your devices, and give it a protected block of time — even ninety minutes changes what is possible. Shallow tasks like email will always find you; deep work has to be defended on purpose.',
      uk: 'Деякі завдання піддаються лише довгій безперервній увазі: письмо, дизайн, розвʼязання складної задачі. Таку працю часто називають глибокою роботою, і вона стає рідкісною саме тому, що така цінна. Кожне сповіщення розколює фокус, і після кожного переривання розуму потрібно кілька хвилин, щоб повернутися туди, де він був. Ліки — не більше сили волі, а кращі умови. Оберіть одне важливе завдання, вимкніть звук пристроїв і дайте йому захищений блок часу — навіть девʼяносто хвилин змінюють те, що можливо. Поверхневі справи, як пошта, знайдуть вас завжди; глибоку роботу треба свідомо захищати.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'Why is deep work becoming rare, according to the text?', uk: 'Чому глибока робота стає рідкісною, за текстом?' },
        options: [
          { en: 'Exactly because it is so valuable', uk: 'Саме тому, що вона така цінна' },
          { en: 'Because no one can do it', uk: 'Бо ніхто не здатен на неї' },
          { en: 'Because it is easy', uk: 'Бо вона легка' },
        ],
        correct: 0,
        explain: { en: '“…it is becoming rare exactly because it is so valuable.”', uk: '«…вона стає рідкісною саме тому, що така цінна.»' },
      },
      {
        kind: 'mcq',
        q: { en: 'What is the suggested fix for constant interruptions?', uk: 'Яке рішення пропонують для постійних переривань?' },
        options: [
          { en: 'A better setup: silence devices, protect a block of time', uk: 'Кращі умови: вимкнути пристрої, захистити блок часу' },
          { en: 'Simply more willpower', uk: 'Просто більше сили волі' },
          { en: 'Answering email faster', uk: 'Швидше відповідати на пошту' },
        ],
        correct: 0,
        explain: { en: '“The fix is not more willpower but a better setup.”', uk: '«Ліки — не більше сили волі, а кращі умови.»' },
      },
      {
        kind: 'open',
        q: { en: 'What task of yours most needs a protected block of deep work, and when could you schedule it?', uk: 'Яке ваше завдання найбільше потребує захищеного блоку глибокої роботи і коли ви могли б його запланувати?' },
        sample: { en: 'Answers will vary. A strong answer names a specific task and a realistic time block with devices silenced.', uk: 'Відповіді різнитимуться. Сильна відповідь називає конкретне завдання й реалістичний блок часу з вимкненими пристроями.' },
      },
    ],
  },
  {
    id: 'asking-for-help',
    title: { en: 'Asking for Help', uk: 'Просити про допомогу' },
    category: 'work',
    level: 'b1',
    minutes: 1,
    topics: ['teamwork', 'communication', 'humility'],
    body: {
      en: 'Many people stay stuck for hours because they are afraid to ask for help. They worry it will make them look weak or unskilled. In reality, a good question often does the opposite: it shows you value other people’s time and want to solve the problem, not hide it. The trick is to ask well. Say what you are trying to do, what you have already tried, and where exactly you are stuck. A clear question respects the other person and usually gets a faster, better answer. Knowing when to ask is not a weakness — it is a skill that strong teams are built on.',
      uk: 'Багато людей годинами стоять на місці, бо бояться попросити про допомогу. Вони переживають, що це виставить їх слабкими чи невмілими. Насправді гарне питання часто робить протилежне: воно показує, що ви цінуєте чужий час і хочете розвʼязати проблему, а не сховати її. Секрет — питати вміло. Скажіть, що ви намагаєтесь зробити, що вже пробували і де саме застрягли. Чітке питання поважає іншу людину й зазвичай дає швидшу, кращу відповідь. Знати, коли спитати, — не слабкість, а навичка, на якій будуються сильні команди.',
    },
    questions: [
      {
        kind: 'mcq',
        q: { en: 'Why do many people avoid asking for help?', uk: 'Чому багато людей уникають прохання про допомогу?' },
        options: [
          { en: 'They fear looking weak or unskilled', uk: 'Бояться виглядати слабкими чи невмілими' },
          { en: 'They already know everything', uk: 'Вони вже все знають' },
          { en: 'Help is not allowed at work', uk: 'На роботі не можна допомагати' },
        ],
        correct: 0,
        explain: { en: 'They worry it will make them look weak or unskilled — but a good question shows the opposite.', uk: 'Вони бояться виглядати слабкими — але гарне питання показує протилежне.' },
      },
      {
        kind: 'mcq',
        q: { en: 'What makes a good question, according to the text?', uk: 'Що робить питання гарним, за текстом?' },
        options: [
          { en: 'Saying your goal, what you tried, and where you are stuck', uk: 'Сказати мету, що пробував і де застряг' },
          { en: 'Being as vague as possible', uk: 'Бути якомога розпливчастішим' },
          { en: 'Never explaining anything', uk: 'Нічого не пояснювати' },
        ],
        correct: 0,
        explain: { en: 'A clear question states the goal, what you tried, and where exactly you are stuck.', uk: 'Чітке питання називає мету, спроби й точне місце, де ви застрягли.' },
      },
      {
        kind: 'open',
        q: { en: 'Rewrite a vague “I’m stuck, help” into a clear question about a real task of yours.', uk: 'Перепишіть розпливчасте «я застряг, допоможіть» на чітке питання про ваше реальне завдання.' },
        sample: { en: 'Answers will vary. A strong answer states the goal, one or two things already tried, and the exact blocker.', uk: 'Відповіді різнитимуться. Сильна відповідь називає мету, одну-дві вже випробувані речі й точну перешкоду.' },
      },
    ],
  },
];
