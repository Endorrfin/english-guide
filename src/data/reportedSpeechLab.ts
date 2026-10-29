// src/data/reportedSpeechLab.ts — content for the ★ Reported Speech Lab sim (m15, C2).
// CHANGED (C2): 8 direct sentences — 2 per speech kind (statement · yes/no question · wh-question ·
// request) — each reported through 3 frames: `says` (present reporting verb — nothing moves back),
// `said` (reported later — backshift + time/place words), `still-true` (reported soon after, the
// content still true or still ahead — the tense may stay). Requests have no tense to shift, so
// their still-true frame is an explicit N/A. Every render is AUTHORED (see the rationale in
// src/lib/reportedSpeech.ts); `shifts[].text` must be an exact substring of `en`, in sentence order.
// One speaker throughout — Anna, your team lead, talking to you — so the pronoun shifts stay
// consistent (her I → she, her you → I). Facts verified against Cambridge Grammar (Reported speech:
// indirect speech · Say or tell? · Suggest) and British Council LearnEnglish (Reported speech:
// statements · questions · reporting verbs). EN authored first; US English; grammar terms stay
// English in UA text.
import type { Item, NaRender, Render, Shift, ShiftKind } from '../lib/reportedSpeech';
import type { Localized } from './types';

const L = (en: string, uk: string): Localized => ({ en, uk });
const S = (text: string, kinds: ShiftKind[], from?: string): Shift => (from ? { text, kinds, from } : { text, kinds });
const R = (en: string, uk: string, shifts: Shift[], note: Localized): Render => ({ en, uk, shifts, note });

const REQUEST_NA: NaRender = {
  na: L(
    'A request has no tense to shift: the to-infinitive is the same in every frame, so “still true” changes nothing. Only the reporting verb moves (asks → asked, tells → told).',
    'Прохання не має часу, який можна зсунути: to-infinitive однаковий у кожній рамці, тож «досі правда» нічого не змінює. Зсувається лише дієслово звітування (asks → asked, tells → told).',
  ),
};

export const ITEMS: Item[] = [
  // ── statements ────────────────────────────────────────────────────────
  {
    id: 'finished-review',
    kind: 'statement',
    direct: L('I’ve finished the code review.', 'Я закінчила код-ревʼю.'),
    renders: {
      says: R(
        'Anna says she has finished the code review.',
        'Анна каже, що закінчила код-ревʼю.',
        [S('she has finished', ['pronoun'], 'I’ve finished')],
        L(
          'A present reporting verb (says): the report is about now, so no tense moves back. Only the pronoun follows the speaker — her I becomes she.',
          'Дієслово звітування в present (says): звіт про зараз, тож жоден час не відступає. Змінюється лише займенник — її I стає she.',
        ),
      ),
      said: R(
        'Anna said she had finished the code review.',
        'Анна сказала, що закінчила код-ревʼю.',
        [S('she had finished', ['pronoun', 'tense'], 'I’ve finished')],
        L(
          'Reported later with a past reporting verb: Present Perfect steps back to Past Perfect (has finished → had finished). Ukrainian keeps «закінчила» — English moves the tense.',
          'Звіт пізніше, з дієсловом звітування в past: Present Perfect відступає до Past Perfect (has finished → had finished). Українська лишає «закінчила» — англійська зсуває час.',
        ),
      ),
      'still-true': R(
        'Anna said she has finished the code review.',
        'Анна сказала, що закінчила код-ревʼю.',
        [S('she has finished', ['pronoun'], 'I’ve finished')],
        L(
          'Reported minutes later and the review is still done, so the tense can stay. Both are correct here; she had finished is never wrong after said.',
          'Звіт за кілька хвилин, і ревʼю досі завершене, тож час може лишитися. Тут правильні обидва варіанти; she had finished після said ніколи не помилка.',
        ),
      ),
    },
    trap: {
      wrong: 'Anna said me she had finished the code review.',
      why: L(
        'UA «сказала мені» → said me ✕. say never takes the person directly: Anna told me (that) she had finished… or Anna said (that) she had finished…',
        'UA «сказала мені» → said me ✕. say ніколи не бере особу напряму: Anna told me (that) she had finished… або Anna said (that) she had finished…',
      ),
    },
  },
  {
    id: 'release-tomorrow',
    kind: 'statement',
    direct: L('The release will be ready tomorrow.', 'Реліз буде готовий завтра.'),
    renders: {
      says: R(
        'Anna says the release will be ready tomorrow.',
        'Анна каже, що реліз буде готовий завтра.',
        [],
        L(
          'Present reporting verb, same day: nothing shifts — not the tense, not tomorrow, and there is no pronoun to change.',
          'Дієслово звітування в present, той самий день: нічого не зсувається — ні час, ні tomorrow, і займенника для зміни немає.',
        ),
      ),
      said: R(
        'Anna said the release would be ready the next day.',
        'Анна сказала, що реліз буде готовий наступного дня.',
        [S('would', ['tense'], 'will'), S('the next day', ['time'], 'tomorrow')],
        L(
          'Reported a week later: will → would, and tomorrow → the next day, because Anna’s “tomorrow” is no longer tomorrow for you.',
          'Звіт через тиждень: will → would, а tomorrow → the next day, бо Аннине «завтра» для вас уже не завтра.',
        ),
      ),
      'still-true': R(
        'Anna said the release will be ready tomorrow.',
        'Анна сказала, що реліз буде готовий завтра.',
        [],
        L(
          'Said this morning, about tomorrow: it hasn’t happened yet and tomorrow is still tomorrow, so no shift is needed. would be ready is also correct.',
          'Сказано зранку, про завтра: це ще не сталося, і завтра досі завтра, тож зсув не потрібен. would be ready — теж правильно.',
        ),
      ),
    },
    trap: {
      wrong: 'Anna told the release would be ready the next day.',
      why: L(
        'tell needs the person: Anna told us the release would be ready… Without a person, use said.',
        'tell потребує особи: Anna told us the release would be ready… Без особи — said.',
      ),
    },
  },

  // ── yes/no questions ──────────────────────────────────────────────────
  {
    id: 'coming-to-demo',
    kind: 'yes-no',
    direct: L('Are you coming to the demo?', 'Ти прийдеш на демо?'),
    renders: {
      says: R(
        'Anna asks if I’m coming to the demo.',
        'Анна питає, чи я прийду на демо.',
        [S('if', ['connector']), S('I’m coming', ['order', 'pronoun'], 'Are you coming')],
        L(
          'A yes/no question is reported with if (or whether), then STATEMENT order: I’m coming, not am I coming. No question mark. Her you becomes I — you are the one reporting.',
          'Загальне питання передають через if (або whether), далі — порядок СТВЕРДЖЕННЯ: I’m coming, а не am I coming. Без знака питання. Її you стає I — звітуєте ви.',
        ),
      ),
      said: R(
        'Anna asked if I was coming to the demo.',
        'Анна спитала, чи я прийду на демо.',
        [S('if', ['connector']), S('I was coming', ['order', 'pronoun', 'tense'], 'Are you coming')],
        L(
          'Reported after the demo: Present Continuous → Past Continuous, on top of the statement order.',
          'Звіт після демо: Present Continuous → Past Continuous, поверх порядку ствердження.',
        ),
      ),
      'still-true': R(
        'Anna asked if I’m coming to the demo.',
        'Анна спитала, чи я прийду на демо.',
        [S('if', ['connector']), S('I’m coming', ['order', 'pronoun'], 'Are you coming')],
        L(
          'Asked an hour ago and the demo is still ahead: the present can stay. if I was coming is also correct.',
          'Спитала годину тому, і демо ще попереду: present може лишитися. if I was coming — теж правильно.',
        ),
      ),
    },
    trap: {
      wrong: 'Anna asked am I coming to the demo.',
      why: L(
        'The question order slips into the report. A reported yes/no question needs if / whether + statement order: asked if I was coming.',
        'Порядок питання проникає у звіт. Непряме загальне питання потребує if / whether + порядку ствердження: asked if I was coming.',
      ),
    },
  },
  {
    id: 'tests-pass',
    kind: 'yes-no',
    direct: L('Did the tests pass?', 'Тести пройшли?'),
    renders: {
      says: R(
        'Anna asks whether the tests passed.',
        'Анна питає, чи пройшли тести.',
        [S('whether', ['connector']), S('the tests passed', ['order'], 'Did the tests pass')],
        L(
          'did disappears: in statement order the past lives in passed itself. whether = if, slightly more formal.',
          'did зникає: у порядку ствердження минуле живе в самому passed. whether = if, трохи формальніше.',
        ),
      ),
      said: R(
        'Anna asked whether the tests had passed.',
        'Анна спитала, чи пройшли тести.',
        [S('whether', ['connector']), S('the tests had passed', ['order', 'tense'], 'Did the tests pass')],
        L(
          'Past Simple → Past Perfect: the passing happened before the asking.',
          'Past Simple → Past Perfect: тести пройшли раніше, ніж Анна спитала.',
        ),
      ),
      'still-true': R(
        'Anna asked whether the tests passed.',
        'Анна спитала, чи пройшли тести.',
        [S('whether', ['connector']), S('the tests passed', ['order'], 'Did the tests pass')],
        L(
          'When the order of events is clear, the Past Simple often stays after asked — very common in speech. had passed is the careful written choice.',
          'Коли порядок подій зрозумілий, Past Simple після asked часто лишається — у мовленні це дуже поширено. had passed — ретельний письмовий вибір.',
        ),
      ),
    },
    trap: {
      wrong: 'Anna asked whether did the tests pass.',
      why: L(
        'Reported questions drop do / does / did; the past moves into the verb itself: whether the tests (had) passed.',
        'Непрямі питання втрачають do / does / did; минуле переходить у саме дієслово: whether the tests (had) passed.',
      ),
    },
  },

  // ── wh-questions ──────────────────────────────────────────────────────
  {
    id: 'staging-server',
    kind: 'wh',
    direct: L('Where is the staging server?', 'Де staging-сервер?'),
    renders: {
      says: R(
        'Anna asks where the staging server is.',
        'Анна питає, де staging-сервер.',
        [S('the staging server is', ['order'], 'is the staging server')],
        L(
          'Keep the wh-word, then statement order — subject before verb. No question mark.',
          'Лишіть wh-слово, далі порядок ствердження — підмет перед дієсловом. Без знака питання.',
        ),
      ),
      said: R(
        'Anna asked where the staging server was.',
        'Анна спитала, де staging-сервер.',
        [S('the staging server was', ['order', 'tense'], 'is the staging server')],
        L(
          'is → was after a past reporting verb, on top of the statement order.',
          'is → was після дієслова звітування в past, поверх порядку ствердження.',
        ),
      ),
      'still-true': R(
        'Anna asked where the staging server is.',
        'Анна спитала, де staging-сервер.',
        [S('the staging server is', ['order'], 'is the staging server')],
        L(
          'The server is still where it was — the present can stay. was is also correct.',
          'Сервер досі там, де був, — present може лишитися. was — теж правильно.',
        ),
      ),
    },
    trap: {
      wrong: 'Anna asked where is the staging server.',
      why: L(
        'UA «спитала, де сервер» has no word order to change, so the English question order slips in. Statement order: where the staging server is / was.',
        'В UA «спитала, де сервер» немає порядку слів, який треба міняти, тож проникає англійський порядок питання. Порядок ствердження: where the staging server is / was.',
      ),
    },
  },
  {
    id: 'start-working',
    kind: 'wh',
    direct: L('When did you start working here?', 'Коли ти почав тут працювати?'),
    renders: {
      says: R(
        'Anna asks when I started working here.',
        'Анна питає, коли я почав тут працювати.',
        [S('I started', ['order', 'pronoun'], 'did you start')],
        L(
          'did disappears and the past goes into started; her you becomes I. here stays — you are in the same office.',
          'did зникає, і минуле переходить у started; її you стає I. here лишається — ви в тому самому офісі.',
        ),
      ),
      said: R(
        'Anna asked when I had started working there.',
        'Анна спитала, коли я почав там працювати.',
        [S('I had started', ['order', 'pronoun', 'tense'], 'did you start'), S('there', ['place'], 'here')],
        L(
          'Reported later and somewhere else: Past Simple → Past Perfect, and here → there.',
          'Звіт пізніше й деінде: Past Simple → Past Perfect, а here → there.',
        ),
      ),
      'still-true': R(
        'Anna asked when I started working here.',
        'Анна спитала, коли я почав тут працювати.',
        [S('I started', ['order', 'pronoun'], 'did you start')],
        L(
          'Reported the same day in the same office: a finished past fact needs no shift, and here is still here.',
          'Звіт того самого дня в тому самому офісі: завершений факт у минулому не потребує зсуву, а here досі here.',
        ),
      ),
    },
    trap: {
      wrong: 'Anna asked when did I start working here.',
      why: L(
        'did stays in by habit. A reported question has no do-support: when I started (or had started).',
        'did лишається за звичкою. У непрямому питанні немає do-support: when I started (або had started).',
      ),
    },
  },

  // ── requests / commands ───────────────────────────────────────────────
  {
    id: 'send-logs',
    kind: 'request',
    direct: L('Please send me the logs.', 'Надішли мені, будь ласка, логи.'),
    renders: {
      says: R(
        'Anna asks me to send her the logs.',
        'Анна просить мене надіслати їй логи.',
        [S('me to send', ['infinitive'], 'Please send'), S('her', ['pronoun'], 'me')],
        L(
          'A request becomes ask + person + to-infinitive. please disappears — asks carries the politeness. Her me becomes her: the logs go to Anna.',
          'Прохання стає ask + особа + to-infinitive. please зникає — ввічливість несе asks. Її me стає her: логи йдуть до Анни.',
        ),
      ),
      said: R(
        'Anna asked me to send her the logs.',
        'Анна попросила мене надіслати їй логи.',
        [S('me to send', ['infinitive'], 'Please send'), S('her', ['pronoun'], 'me')],
        L(
          'Only the reporting verb moves (asks → asked). The to-infinitive has no tense, so nothing else shifts.',
          'Зсувається лише дієслово звітування (asks → asked). У to-infinitive немає часу, тож більше нічого не змінюється.',
        ),
      ),
      'still-true': REQUEST_NA,
    },
    trap: {
      wrong: 'Anna said me to send her the logs.',
      why: L(
        'say takes neither the person nor this pattern. Use ask / tell + person + to: Anna asked me to send her the logs.',
        'say не бере ні особу, ні цю конструкцію. Беріть ask / tell + особа + to: Anna asked me to send her the logs.',
      ),
    },
  },
  {
    id: 'dont-merge',
    kind: 'request',
    direct: L('Don’t merge it before Friday.', 'Не мерджи це до пʼятниці.'),
    renders: {
      says: R(
        'Anna tells me not to merge it before Friday.',
        'Анна каже мені не мерджити це до пʼятниці.',
        [S('me not to merge', ['infinitive'], 'Don’t merge')],
        L(
          'A negative command: tell + person + not to + V1. Not don’t, and never to not.',
          'Заперечний наказ: tell + особа + not to + V1. Не don’t і ніколи не to not.',
        ),
      ),
      said: R(
        'Anna told me not to merge it before Friday.',
        'Анна сказала мені не мерджити це до пʼятниці.',
        [S('me not to merge', ['infinitive'], 'Don’t merge')],
        L(
          'The same pattern after told. A named day doesn’t shift the way tomorrow does — Friday points at the same day from anywhere.',
          'Та сама конструкція після told. Назва дня не зсувається так, як tomorrow, — Friday вказує на той самий день звідусіль.',
        ),
      ),
      'still-true': REQUEST_NA,
    },
    trap: {
      wrong: 'Anna told me don’t merge it before Friday.',
      why: L(
        'The imperative stays inside the report. Reported commands use not to + V1: told me not to merge it.',
        'Наказовий спосіб лишається всередині звіту. Непрямі накази — not to + V1: told me not to merge it.',
      ),
    },
  },
];
