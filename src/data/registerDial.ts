// CHANGED (A4): content for the ★ Register Dial sim (m29). Every frame AUTHORED. Marks: `|part` on the
// past participle of a passive · `|subj` + `|verb` inside a mandative that-clause (the subject and the
// verb whose form the engine judges) and on the subject after an opening Should. Everything else (the
// contractions, informal / formal / official words, nominalisations, the score, the band, the BrE
// variant) is COMPUTED by src/lib/register.ts. The golden test proves the score rises strictly along
// every dial, that each frame lands in the band of its stop, and that every trap's error raises exactly
// its issue in its declared context while both fixes are clean.
// Rules: Cambridge (Formal and informal language · Register · Contractions · Phrasal verbs and
// multi-word verbs · Suggest) and British Council C1 (Inversion and conditionals). US English.
import type { RdScenario } from '../lib/register';

export const RD_SCENARIOS: RdScenario[] = [
  // ── dial ───────────────────────────────────────────────────────────────
  {
    id: 'deploy',
    track: 'dial',
    title: { en: 'The deploy moves to Monday', uk: 'Деплой переноситься на понеділок' },
    frames: [
      { src: 'Hey, heads-up: we’re pushing the deploy to Monday!', uk: 'Гей, увага: переносимо деплой на понеділок!' },
      { src: 'Hi all, we have moved the deploy to Monday to allow more time for testing.', uk: 'Привіт усім, ми перенесли деплой на понеділок, щоб мати більше часу на тестування.' },
      { src: 'The deployment has been postponed|part until Monday to allow additional testing.', uk: 'Розгортання відкладено до понеділка, щоб провести додаткове тестування.' },
      {
        src: 'It is essential that the deployment|subj be|verb postponed|part until Monday, pursuant to the testing requirements.',
        uk: 'Розгортання необхідно відкласти до понеділка відповідно до вимог щодо тестування.',
      },
    ],
  },
  {
    id: 'access',
    track: 'dial',
    title: { en: 'Access to the production logs', uk: 'Доступ до логів продакшену' },
    frames: [
      { src: 'Can you get me access to the prod logs? Thanks!', uk: 'Можеш дати мені доступ до прод-логів? Дякую!' },
      { src: 'Could you give me access to the production logs, please?', uk: 'Чи не могли б ви надати мені доступ до логів продакшену?' },
      { src: 'I would like to request access to the production logs for the investigation.', uk: 'Прошу надати доступ до логів продакшену для розслідування.' },
      {
        src: 'It is requested that the applicant|subj be|verb granted|part access to the production logs in accordance with the access policy.',
        uk: 'Просимо надати заявникові доступ до логів продакшену відповідно до політики доступу.',
      },
    ],
  },
  {
    id: 'questions',
    track: 'dial',
    title: { en: 'If you have questions', uk: 'Якщо маєте питання' },
    frames: [
      { src: 'Got questions? Just ping me!', uk: 'Є питання? Просто пиши!' },
      { src: 'If you have any questions, please let me know.', uk: 'Якщо маєте питання, будь ласка, дайте знати.' },
      { src: 'If you require further information, please contact the platform team.', uk: 'Якщо вам потрібна додаткова інформація, зверніться до платформної команди.' },
      { src: 'Should you|subj require further information, kindly contact the platform team.', uk: 'У разі потреби в додатковій інформації просимо звертатися до платформної команди.' },
    ],
  },

  // ── traps ──────────────────────────────────────────────────────────────
  {
    id: 'hereby-standup',
    track: 'traps',
    context: 'chat',
    title: { en: 'A legal notice in Slack', uk: 'Юридичне повідомлення в Slack' },
    frames: [
      { src: 'I hereby inform you that the stand-up has been canceled|part.', uk: 'Цим повідомляю вас, що стендап скасовано.' },
      { src: 'Heads-up: no stand-up today!', uk: 'Увага: сьогодні без стендапу!' },
      { src: 'FYI, we’re skipping stand-up today.', uk: 'До відома: сьогодні пропускаємо стендап.' },
    ],
    why: {
      en: 'Ukrainian business writing keeps the office style («Цим повідомляю…») even in chats. In an English team chat that sounds cold or ironic; short and friendly is the norm.',
      uk: 'Українське ділове письмо тримає канцелярський стиль («Цим повідомляю…») навіть у чатах. В англомовному командному чаті це звучить холодно або іронічно; нормою є коротко й дружньо.',
    },
  },
  {
    id: 'is-notified',
    track: 'traps',
    context: 'official',
    title: { en: '“essential that the vendor is notified”', uk: '«essential that the vendor is notified»' },
    frames: [
      {
        src: 'Pursuant to the contract, it is essential that the vendor|subj is|verb notified|part upon receipt of the request.',
        uk: 'Відповідно до контракту, постачальника необхідно повідомити після отримання запиту.',
      },
      {
        src: 'Pursuant to the contract, it is essential that the vendor|subj be|verb notified|part upon receipt of the request.',
        uk: 'Відповідно до контракту, постачальника необхідно повідомити після отримання запиту.',
      },
      {
        src: 'Pursuant to the contract, it is essential that the vendor|subj should be|verb notified|part upon receipt of the request.',
        uk: 'Відповідно до контракту, постачальника необхідно повідомити після отримання запиту.',
      },
    ],
    why: {
      en: 'Ukrainian says «необхідно, щоб постачальника повідомили» with an ordinary verb form, so is notified feels right. Formal AmE uses the bare base form (be notified); BrE often uses should be notified.',
      uk: 'Українська каже «необхідно, щоб постачальника повідомили» звичайною формою дієслова, тож is notified здається правильним. Формальна AmE уживає голу базову форму (be notified); BrE часто — should be notified.',
    },
  },
  {
    id: 'gonna-pursuant',
    track: 'traps',
    context: 'report',
    title: { en: '“Pursuant to …, we’re gonna …”', uk: '«Pursuant to …, we’re gonna …»' },
    frames: [
      { src: 'Pursuant to the incident review, we’re gonna roll back the release.', uk: 'Відповідно до розбору інциденту, ми відкотимо реліз.' },
      { src: 'Pursuant to the incident review, the release will be rolled|part back.', uk: 'Відповідно до розбору інциденту, реліз буде відкочено.' },
      { src: 'Following the incident investigation, the release will be rolled|part back.', uk: 'За результатами розслідування інциденту реліз буде відкочено.' },
    ],
    why: {
      en: 'Learners often collect formal phrases and casual chat words separately, then combine them in one sentence. Native readers notice the jump at once; a report stays at one level.',
      uk: 'Ті, хто вчить мову, часто збирають формальні фрази й розмовні слова окремо, а потім поєднують їх в одному реченні. Носій мови помічає стрибок одразу; звіт тримається одного рівня.',
    },
  },
  {
    id: 'hey-policy',
    track: 'traps',
    context: 'official',
    title: { en: 'Chat style in a policy', uk: 'Стиль чату в політиці' },
    frames: [
      { src: 'Hey, got questions? Just ping us!', uk: 'Гей, є питання? Просто пишіть!' },
      { src: 'Should you|subj require any further information, kindly contact the platform team.', uk: 'У разі потреби в додатковій інформації просимо звертатися до платформної команди.' },
      { src: 'In the event that you require further information, please contact the platform team.', uk: 'У разі потреби в додатковій інформації, будь ласка, звертайтеся до платформної команди.' },
    ],
    why: {
      en: 'Copying the friendly tone of product UI into a policy or a contract makes it read as unserious. Official text uses formal words and structures: Should you require…, In the event that….',
      uk: 'Перенесення дружнього тону інтерфейсу в політику чи контракт робить текст несерйозним. Офіційний текст уживає формальні слова й конструкції: Should you require…, In the event that….',
    },
  },
];
