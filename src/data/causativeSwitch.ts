// CHANGED (A1): content for the ★ Causative Switch sim (m24). Every frame AUTHORED. Causative forms
// per Cambridge "Have something done" (have + object + V3 = arranged; also for unwanted events — "They’ve
// had their car stolen"; have + person + bare infinitive = instructing) and "Get" (get + object + V3 =
// less formal; get + person + to-infinitive = persuade). Reporting forms per Cambridge "Passive: uses"
// and British Council "Advanced passives review" (It is believed that … / X is believed to …).
// Frames follow TRACK_FORMS order in src/lib/causative.ts; US English.
import type { CsScenario } from '../lib/causative';

export const SCENARIOS: CsScenario[] = [
  {
    id: 'laptop',
    track: 'causative',
    title: { en: 'Your laptop', uk: 'Ваш ноутбук' },
    pro: { en: 'the technician', uk: 'майстер' },
    thing: { en: 'the laptop', uk: 'ноутбук' },
    frames: [
      {
        src: 'I repaired my laptop.',
        uk: 'Я сам полагодив свій ноутбук.',
        note: { en: 'Active: you did the repair with your own hands.', uk: 'Active: ремонт ви зробили власноруч.' },
      },
      {
        src: 'I had my laptop repaired.',
        uk: 'Мені полагодили ноутбук (я віддав його в ремонт).',
        note: {
          en: 'have + object + V3: someone else did it, you arranged (and probably paid). The object sits BETWEEN had and the V3.',
          uk: 'have + object + V3: зробив хтось інший, ви організували (і, мабуть, заплатили). Додаток стоїть МІЖ had і V3.',
        },
      },
      {
        src: 'I got my laptop repaired.',
        uk: 'Я віддав ноутбук у ремонт (розмовніше).',
        note: { en: 'get + object + V3: the same meaning, less formal — very common in speech.', uk: 'get + object + V3: те саме значення, менш формально — дуже поширено в мовленні.' },
      },
      {
        src: 'I had the technician repair my laptop.',
        uk: 'Я попросив майстра полагодити мій ноутбук.',
        note: {
          en: 'have + person + V1 (no to): you instructed a named person. It puts the spotlight on who did it.',
          uk: 'have + person + V1 (без to): ви доручили конкретній людині. Фокус — на тому, хто зробив.',
        },
      },
      {
        src: 'I got the technician to repair my laptop.',
        uk: 'Я вмовив майстра полагодити мій ноутбук.',
        note: {
          en: 'get + person + to + V1: you persuaded them — maybe it took some effort. get takes to, have does not.',
          uk: 'get + person + to + V1: ви їх умовили — можливо, не одразу. get бере to, have — ні.',
        },
      },
      {
        src: 'I had my laptop stolen.',
        uk: 'У мене вкрали ноутбук.',
        note: {
          en: 'Same shape, opposite story: you did not arrange this — it happened TO you. Context tells the two apart.',
          uk: 'Та сама форма, протилежна історія: ви цього не замовляли — це сталося З вами. Розрізняє контекст.',
        },
      },
    ],
    trap: {
      wrong: 'I repaired my laptop at the service center.',
      why: {
        en: 'Ukrainian «я полагодив ноутбук» often means you had it fixed. In English the active says you did it yourself — use had / got … repaired.',
        uk: 'Українське «я полагодив ноутбук» часто означає «віддав у ремонт». Англійською active каже, що ви зробили це самі, — вживайте had / got … repaired.',
      },
    },
  },
  {
    id: 'audit',
    track: 'causative',
    title: { en: 'The security audit', uk: 'Безпековий аудит' },
    pro: { en: 'a security firm', uk: 'безпекова фірма' },
    thing: { en: 'the app', uk: 'застосунок' },
    frames: [
      {
        src: 'We audited our app.',
        uk: 'Ми провели аудит нашого застосунку.',
        note: { en: 'Active: your team did the audit.', uk: 'Active: аудит зробила ваша команда.' },
      },
      {
        src: 'We had our app audited.',
        uk: 'Нам провели аудит застосунку (ми його замовили).',
        note: { en: 'have + object + V3: an outside team did it; you commissioned it.', uk: 'have + object + V3: зробила стороння команда, ви замовили.' },
      },
      {
        src: 'We got our app audited.',
        uk: 'Ми замовили аудит застосунку (розмовніше).',
        note: { en: 'get + object + V3: same meaning, a more casual register (Slack rather than a report).', uk: 'get + object + V3: те саме, невимушеніший регістр (Slack, а не звіт).' },
      },
      {
        src: 'We had a security firm audit our app.',
        uk: 'Ми доручили безпековій фірмі провести аудит застосунку.',
        note: { en: 'have + person + V1: you name who did it — no to before audit.', uk: 'have + person + V1: ви називаєте виконавця — без to перед audit.' },
      },
      {
        src: 'We got a security firm to audit our app.',
        uk: 'Ми домовилися з безпековою фірмою, щоб вона провела аудит застосунку.',
        note: { en: 'get + person + to + V1: you got them to agree.', uk: 'get + person + to + V1: ви домоглися їхньої згоди.' },
      },
      {
        src: 'We had our app hacked.',
        uk: 'Наш застосунок зламали.',
        note: {
          en: 'The unwanted reading again: nobody ordered a hack. Postmortems often prefer the plain passive: Our app was hacked.',
          uk: 'Знову небажане значення: зламу ніхто не замовляв. Постмортеми часто віддають перевагу звичайному passive: Our app was hacked.',
        },
      },
    ],
    trap: {
      wrong: 'We had a security firm to audit our app.',
      why: {
        en: 'have + person takes the bare infinitive (audit), only get takes to: We had a firm audit it · We got a firm to audit it.',
        uk: 'have + person бере інфінітив без to (audit), to бере лише get: We had a firm audit it · We got a firm to audit it.',
      },
    },
  },
  {
    id: 'ceo',
    track: 'reporting',
    title: { en: 'A rumor', uk: 'Чутка' },
    frames: [
      {
        src: 'People say that the CEO is leaving.',
        uk: 'Люди кажуть, що CEO йде з компанії.',
        note: { en: 'Active: vague sayers (people) as the subject.', uk: 'Active: розмиті «люди» як підмет.' },
      },
      {
        src: 'It is said that the CEO is leaving.',
        uk: 'Кажуть, що CEO йде з компанії.',
        note: {
          en: 'It + is + V3 + that: the sayers disappear; the report sounds impersonal and distanced.',
          uk: 'It + is + V3 + that: ті, хто каже, зникають; звіт звучить безособово й дистанційовано.',
        },
      },
      {
        src: 'The CEO is said to be leaving.',
        uk: 'CEO, кажуть, іде з компанії.',
        note: {
          en: 'subject + is said + to-infinitive: the topic moves to the front. The news is happening now → to be leaving.',
          uk: 'subject + is said + to-infinitive: тема переходить на початок. Новина відбувається зараз → to be leaving.',
        },
      },
    ],
    trap: {
      wrong: 'The CEO is said that he is leaving.',
      why: {
        en: 'Pick one frame: It is said that the CEO is leaving · The CEO is said to be leaving — never a mix.',
        uk: 'Оберіть одну рамку: It is said that the CEO is leaving · The CEO is said to be leaving — не суміш.',
      },
    },
  },
  {
    id: 'outage',
    track: 'reporting',
    title: { en: 'An incident report', uk: 'Звіт про інцидент' },
    frames: [
      {
        src: 'Experts believe that the outage started in the EU region.',
        uk: 'Експерти вважають, що збій почався в регіоні EU.',
        note: { en: 'Active: the believers are named.', uk: 'Active: ті, хто вважає, названі.' },
      },
      {
        src: 'It is believed that the outage started in the EU region.',
        uk: 'Вважається, що збій почався в регіоні EU.',
        note: { en: 'It is believed that …: the incident-report voice — careful, not yet confirmed.', uk: 'It is believed that …: голос звіту про інцидент — обережно, ще не підтверджено.' },
      },
      {
        src: 'The outage is believed to have started in the EU region.',
        uk: 'Вважається, що збій почався в регіоні EU.',
        note: {
          en: 'The start happened BEFORE the believing → to have + V3. Simultaneous → to + V1.',
          uk: 'Початок стався РАНІШЕ, ніж «вважають» → to have + V3. Одночасно → to + V1.',
        },
      },
    ],
    trap: {
      wrong: 'The outage is believed to start in the EU region.',
      why: {
        en: 'The start is earlier than the belief, so the infinitive must show it: to have started.',
        uk: 'Початок раніший за «вважають», тож інфінітив має це показати: to have started.',
      },
    },
  },
];
