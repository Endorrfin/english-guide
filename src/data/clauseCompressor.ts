// CHANGED (A2): content for the ★ Clause Compressor sim (m26). Every frame AUTHORED. `|part` marks the
// participle (the verb whose doer is in question), `|subj` the main-clause subject it borrows, and
// `~m` pins the identity of a repeated main-clause subject (When I … , I~m …) so TokenMorph deletes the
// subordinate copy, not the main one. `doer` is who really performs the participle's action — the
// detector in src/lib/participleClauses.ts compares it with the |subj token; it is never asserted here.
// Rules: British Council (Participle clauses — same subject; present / past / perfect participles;
// after before, after, on, while); Cambridge (Clauses: finite and non-finite; dangling participle).
// US English, work/dev lean.
import type { PcScenario } from '../lib/participleClauses';

export const PC_SCENARIOS: PcScenario[] = [
  // ── compress ──────────────────────────────────────────────────────────
  {
    id: 'logs',
    track: 'compress',
    clause: 'same-time',
    title: { en: 'Reading the logs', uk: 'Читання логів' },
    doer: ['I'],
    frames: [
      { src: 'When I opened the logs, I~m|subj found the error.', uk: 'Коли я відкрив логи, я знайшов помилку.' },
      { src: 'When opening|part the logs, I~m|subj found the error.', uk: 'Відкриваючи логи, я знайшов помилку.' },
      { src: 'Opening|part the logs, I~m|subj found the error.', uk: 'Відкривши логи, я знайшов помилку.' },
    ],
    trap: {
      wrong: 'Opening the logs, the error appeared.',
      why: {
        en: 'The -ing clause borrows the main subject, so this says the ERROR opened the logs. Ukrainian has the same rule for «дієприслівниковий зворот» — the doer must be the subject.',
        uk: '-ing клауза позичає підмет головного речення, тож виходить, що логи відкрила ПОМИЛКА. В українській те саме правило для дієприслівникового звороту — виконавець має бути підметом.',
      },
    },
  },
  {
    id: 'password',
    track: 'compress',
    clause: 'reason',
    title: { en: 'A forgotten password', uk: 'Забутий пароль' },
    doer: ['I'],
    frames: [
      { src: 'Because I didn’t know the password, I~m|subj called IT.', uk: 'Оскільки я не знав пароля, я зателефонував в IT.' },
      { src: 'Not knowing|part the password, I~m|subj called IT.', uk: 'Не знаючи пароля, я зателефонував в IT.' },
    ],
    trap: {
      wrong: 'Not knowing the password, my account got locked.',
      why: {
        en: 'The account did not “not know” anything — you did. Make the doer the subject: Not knowing the password, I got locked out.',
        uk: 'Акаунт нічого «не знав» — не знали ви. Зробіть виконавця підметом: Not knowing the password, I got locked out.',
      },
    },
  },
  {
    id: 'rust',
    track: 'compress',
    clause: 'passive',
    title: { en: 'A fast service', uk: 'Швидкий сервіс' },
    doer: ['the service', 'it'],
    frames: [
      { src: 'Because it was written in Rust, the service|subj is fast.', uk: 'Оскільки сервіс написаний на Rust, він швидкий.' },
      { src: 'Written|part in Rust, the service|subj is fast.', uk: 'Написаний на Rust, сервіс працює швидко.' },
    ],
    trap: {
      wrong: 'Writing in Rust, the service is fast.',
      why: {
        en: 'The service did not write anything — it was written. Passive meaning needs the V3: Written in Rust, …',
        uk: 'Сервіс нічого не писав — його написали. Пасивне значення потребує V3: Written in Rust, …',
      },
    },
  },
  {
    id: 'build',
    track: 'compress',
    clause: 'earlier',
    title: { en: 'Test, then deploy', uk: 'Спершу тест, потім деплой' },
    doer: ['we'],
    frames: [
      { src: 'After we had tested the build, we~m|subj deployed it.', uk: 'Після того як ми протестували збірку, ми її задеплоїли.' },
      { src: 'After testing|part the build, we~m|subj deployed it.', uk: 'Протестувавши збірку, ми її задеплоїли.' },
      { src: 'Having tested|part the build, we~m|subj deployed it.', uk: 'Протестувавши збірку, ми її задеплоїли.' },
    ],
    trap: {
      wrong: 'Testing the build, we deployed it.',
      why: {
        en: 'A plain -ing clause sounds simultaneous — testing and deploying at once. For “first this, then that” use Having + V3 or After + -ing.',
        uk: 'Просте -ing звучить як одночасність — тестували й деплоїли водночас. Для «спершу одне, потім інше» — Having + V3 або After + -ing.',
      },
    },
  },
  {
    id: 'staging',
    track: 'compress',
    clause: 'earlier-passive',
    title: { en: 'Promoted to production', uk: 'Збірка в продакшн' },
    doer: ['the build', 'it'],
    frames: [
      { src: 'After it had been tested on staging, the build|subj was promoted to production.', uk: 'Після того як збірку протестували на staging, її перевели в продакшн.' },
      { src: 'Having been tested|part on staging, the build|subj was promoted to production.', uk: 'Протестовану на staging збірку перевели в продакшн.' },
    ],
    trap: {
      wrong: 'Having tested on staging, the build was promoted to production.',
      why: {
        en: 'Having tested = the build did the testing. The build was tested, so the passive is needed: Having been tested.',
        uk: 'Having tested = збірка сама тестувала. Збірку тестували, тож потрібен passive: Having been tested.',
      },
    },
  },
  // ── detect ────────────────────────────────────────────────────────────
  {
    id: 'coffee',
    track: 'detect',
    title: { en: 'Walking into the office', uk: 'Заходячи в офіс' },
    doer: ['I'],
    frames: [
      { src: 'Walking|part into the office, the coffee|subj smelled amazing.', uk: 'Заходячи в офіс, кава пахла чудово. (Кава заходила в офіс?)' },
      { src: 'Walking|part into the office, I|subj smelled fresh coffee.', uk: 'Заходячи в офіс, я відчув запах свіжої кави.' },
      { src: 'As I walked into the office, the coffee|subj smelled amazing.', uk: 'Коли я зайшов в офіс, кава пахла чудово.' },
    ],
    trap: {
      wrong: 'Walking into the office, there was a smell of coffee.',
      why: {
        en: 'there cannot walk either. An empty subject (there, it) never rescues a participle — name the person.',
        uk: 'there теж не вміє ходити. Порожній підмет (there, it) не рятує participle — назвіть людину.',
      },
    },
  },
  {
    id: 'migration',
    track: 'detect',
    title: { en: 'After the migration', uk: 'Після міграції' },
    doer: ['we'],
    frames: [
      { src: 'Having finished|part the migration, the database|subj was restarted.', uk: 'Завершивши міграцію, база даних була перезапущена. (База завершила міграцію?)' },
      { src: 'Having finished|part the migration, we|subj restarted the database.', uk: 'Завершивши міграцію, ми перезапустили базу даних.' },
      { src: 'After we had finished the migration, the database|subj was restarted.', uk: 'Після того як ми завершили міграцію, базу даних перезапустили.' },
    ],
    trap: {
      wrong: 'After finishing the migration, the database was restarted.',
      why: {
        en: 'Keeping after does not help: after + -ing still borrows the main subject, and the database finished nothing.',
        uk: 'Збережене after не допомагає: after + -ing однаково позичає підмет головного речення, а база нічого не завершувала.',
      },
    },
  },
  {
    id: 'proposal',
    track: 'detect',
    title: { en: 'A rushed proposal', uk: 'Поспішна пропозиція' },
    doer: ['the proposal', 'it'],
    frames: [
      { src: 'Written|part in a hurry, my manager|subj rejected the proposal.', uk: 'Написаний поспіхом, мій менеджер відхилив пропозицію. (Менеджера написали поспіхом?)' },
      { src: 'Written|part in a hurry, the proposal|subj was rejected by my manager.', uk: 'Написану поспіхом пропозицію мій менеджер відхилив.' },
      { src: 'Because it was written in a hurry, my manager|subj rejected the proposal.', uk: 'Оскільки пропозицію написали поспіхом, мій менеджер її відхилив.' },
    ],
    trap: {
      wrong: 'Being written in a hurry, my manager rejected the proposal.',
      why: {
        en: 'Adding being changes nothing: the V3 clause still borrows my manager. The test is always the same — who is the subject after the comma?',
        uk: 'Додане being нічого не змінює: V3-клауза однаково позичає my manager. Перевірка завжди одна — хто підмет після коми?',
      },
    },
  },
];
