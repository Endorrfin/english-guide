// CHANGED (A3): content for the ★ Connector Bridge sim (m30). Every frame AUTHORED. `|conn` marks every
// word of the linker; `|verb` marks each FINITE verb (one per clause — the -ing after despite is not
// one). `~tag` pins a word whose order changes (the build moves behind the comma in the despite frame).
// The engine (src/lib/connectors.ts) computes the linker's class and the diagnosis; the golden test
// proves every bridge frame is clean and every trap's error frame raises exactly its issue.
// Rules: Cambridge (Conjunctions and linking words · Conjunctions: contrasting · In spite of and
// despite · Because, because of · However) and British Council (Contrasting ideas: although, despite
// and others). US English, work/dev lean.
import type { CbScenario } from '../lib/connectors';

export const CB_SCENARIOS: CbScenario[] = [
  // ── contrast ──────────────────────────────────────────────────────────
  {
    id: 'build',
    track: 'bridge',
    relation: 'contrast',
    title: { en: 'Green tests, red prod', uk: 'Зелені тести, червоний прод' },
    frames: [
      {
        src: 'The~b build passed|verb all the~t tests, but|conn it failed|verb in production.',
        uk: 'Збірка пройшла всі тести, але впала в продакшені.',
      },
      {
        src: 'Although|conn the~b build passed|verb all the~t tests, it failed|verb in production.',
        uk: 'Хоча збірка пройшла всі тести, вона впала в продакшені.',
      },
      {
        src: 'The~b build passed|verb all the~t tests. However,|conn it failed|verb in production.',
        uk: 'Збірка пройшла всі тести. Однак вона впала в продакшені.',
      },
      {
        src: 'Despite|conn passing all the~t tests, the~b build failed|verb in production.',
        uk: 'Попри те що збірка пройшла всі тести, вона впала в продакшені.',
      },
    ],
  },
  {
    id: 'demo',
    track: 'bridge',
    relation: 'contrast',
    title: { en: 'A risky demo', uk: 'Ризиковане демо' },
    frames: [
      { src: 'The~d demo was|verb risky, but|conn the~c client loved|verb it.', uk: 'Демо було ризикованим, але клієнтові воно сподобалося.' },
      { src: 'Although|conn the~d demo was|verb risky, the~c client loved|verb it.', uk: 'Хоча демо було ризикованим, клієнтові воно сподобалося.' },
      { src: 'The~d demo was|verb risky. Nevertheless,|conn the~c client loved|verb it.', uk: 'Демо було ризикованим. Проте клієнтові воно сподобалося.' },
      { src: 'In|conn spite|conn of|conn the~d risky demo, the~c client loved|verb it.', uk: 'Попри ризиковане демо, клієнтові воно сподобалося.' },
    ],
  },
  // ── cause → result ────────────────────────────────────────────────────
  {
    id: 'config',
    track: 'bridge',
    relation: 'cause',
    title: { en: 'A wrong config', uk: 'Хибний конфіг' },
    frames: [
      { src: 'The config was|verb wrong, so|conn the deploy failed|verb.', uk: 'Конфіг був хибний, тож деплой провалився.' },
      { src: 'Because|conn the config was|verb wrong, the deploy failed|verb.', uk: 'Оскільки конфіг був хибний, деплой провалився.' },
      { src: 'The config was|verb wrong. As|conn a|conn result,|conn the deploy failed|verb.', uk: 'Конфіг був хибний. Як наслідок, деплой провалився.' },
      { src: 'Because|conn of|conn the wrong config, the deploy failed|verb.', uk: 'Через хибний конфіг деплой провалився.' },
    ],
  },
  {
    id: 'budget',
    track: 'bridge',
    relation: 'cause',
    title: { en: 'A budget cut', uk: 'Скорочення бюджету' },
    frames: [
      { src: 'The budget was|verb cut, so|conn we postponed|verb the launch.', uk: 'Бюджет скоротили, тож ми відклали запуск.' },
      { src: 'Since|conn the budget was|verb cut, we postponed|verb the launch.', uk: 'Оскільки бюджет скоротили, ми відклали запуск.' },
      { src: 'The budget was|verb cut. Therefore,|conn we postponed|verb the launch.', uk: 'Бюджет скоротили. Тому ми відклали запуск.' },
      { src: 'Due|conn to|conn the budget cut, we postponed|verb the launch.', uk: 'Через скорочення бюджету ми відклали запуск.' },
    ],
  },
  // ── addition ──────────────────────────────────────────────────────────
  {
    id: 'api',
    track: 'bridge',
    relation: 'addition',
    title: { en: 'The new API', uk: 'Нове API' },
    frames: [
      { src: 'The new API is|verb faster, and|conn it is~2|verb cheaper to run.', uk: 'Нове API швидше, і його дешевше підтримувати.' },
      { src: 'The new API is|verb faster. In|conn addition,|conn it is~2|verb cheaper to run.', uk: 'Нове API швидше. До того ж його дешевше підтримувати.' },
      { src: 'In|conn addition|conn to|conn being faster, the new API is~2|verb cheaper to run.', uk: 'Окрім того що нове API швидше, його ще й дешевше підтримувати.' },
    ],
  },
  // ── traps: error → fix 1 → fix 2 ──────────────────────────────────────
  {
    id: 'splice',
    track: 'traps',
    title: { en: '…, however …', uk: '…, however …' },
    why: {
      en: 'Ukrainian «однак» can follow a comma inside one sentence, so “, however” feels natural. In English, however is an adverb, not a conjunction: it needs a full stop or a semicolon before it.',
      uk: 'Українське «однак» може стояти після коми в одному реченні, тож «, however» здається природним. В англійській however — прислівник, а не сполучник: перед ним потрібна крапка або крапка з комою.',
    },
    frames: [
      { src: 'The tests passed|verb, however|conn the deploy failed|verb.', uk: 'Тести пройшли, однак деплой провалився. (✕ comma splice)' },
      { src: 'The tests passed|verb; however,|conn the deploy failed|verb.', uk: 'Тести пройшли; однак деплой провалився.' },
      { src: 'The tests passed|verb, but|conn the deploy failed|verb.', uk: 'Тести пройшли, але деплой провалився.' },
    ],
  },
  {
    id: 'double',
    track: 'traps',
    title: { en: 'Although …, but …', uk: 'Although …, but …' },
    why: {
      en: 'Ukrainian marks the contrast twice — «Хоча тести пройшли, але деплой провалився». English marks it once: either although or but, never both.',
      uk: 'Українська позначає протиставлення двічі — «Хоча тести пройшли, але деплой провалився». Англійська — один раз: або although, або but, ніколи обидва.',
    },
    frames: [
      { src: 'Although|conn the tests passed|verb, but|conn the deploy failed|verb.', uk: 'Хоча тести пройшли, але деплой провалився. (✕ дві звʼязки)' },
      { src: 'Although|conn the tests passed|verb, the deploy failed|verb.', uk: 'Хоча тести пройшли, деплой провалився.' },
      { src: 'The tests passed|verb, but|conn the deploy failed|verb.', uk: 'Тести пройшли, але деплой провалився.' },
    ],
  },
  {
    id: 'despite-clause',
    track: 'traps',
    title: { en: 'Despite + a clause', uk: 'Despite + клауза' },
    why: {
      en: 'Ukrainian «попри те що» takes a clause, so “despite the tests passed” is tempting. despite is a preposition: a noun or -ing — or add the fact that.',
      uk: 'Українське «попри те що» бере клаузу, тож «despite the tests passed» спокушає. despite — прийменник: іменник чи -ing — або додайте the fact that.',
    },
    frames: [
      { src: 'Despite|conn the tests passed|verb, the deploy failed|verb.', uk: 'Попри те що тести пройшли, деплой провалився. (✕ despite + клауза)' },
      { src: 'Despite|conn the fact that the tests passed|verb, the deploy failed|verb.', uk: 'Попри те що тести пройшли, деплой провалився.' },
      { src: 'Although|conn the tests passed|verb, the deploy failed|verb.', uk: 'Хоча тести пройшли, деплой провалився.' },
    ],
  },
  {
    id: 'despite-of',
    track: 'traps',
    title: { en: 'Despite of …', uk: 'Despite of …' },
    why: {
      en: 'The two prepositions blend: in spite of + despite = “despite of”. despite stands alone; in spite of keeps its of.',
      uk: 'Два прийменники зливаються: in spite of + despite = «despite of». despite стоїть сам; in spite of зберігає своє of.',
    },
    frames: [
      { src: 'Despite|conn of|conn the delay, we shipped|verb on Friday.', uk: 'Попри затримку, ми випустили реліз у пʼятницю. (✕ despite of)' },
      { src: 'Despite|conn the delay, we shipped|verb on Friday.', uk: 'Попри затримку, ми випустили реліз у пʼятницю.' },
      { src: 'In|conn spite|conn of|conn the delay, we shipped|verb on Friday.', uk: 'Попри затримку, ми випустили реліз у пʼятницю.' },
    ],
  },
];
