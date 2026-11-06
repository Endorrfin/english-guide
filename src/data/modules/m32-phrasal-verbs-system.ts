import type { Module } from '../types';

/*
 * CHANGED (VA2): M32 · The phrasal-verbs system — Section VI Vocabulary in Action, wave VA2 (sim ★ particle-hinge
 * on the TokenMorph engine). This module teaches the SYSTEM; the cards stay in the Words hub (#/idioms, 77 phrasal
 * verbs) and are linked. Authored EN first, UA second; US English base.
 * Facts read in full on British Council — Word order in phrasal verbs (C1): two types, a pronoun "must go between
 * the verb and particle", keeping them together "is preferred if the object is long (e.g. more than four or five
 * words)", some "are intransitive", "If they have a preposition as a particle, the phrasal verb is always
 * non-separable", the object "may appear earlier in the sentence"; Phrasal verbs (B1-B2): "especially in more
 * informal contexts", two particles = inseparable even with a pronoun. Cambridge returns HTTP 403 to the fetcher,
 * so it was read through search extracts: Phrasal verbs and multi-word verbs (phrasal · prepositional ·
 * phrasal-prepositional; pronoun before the particle; longer objects after it); Prepositions and particles; the
 * learner entry of *up* (the COMPLETELY sense).
 * NOT confirmed on a learner site this session (stated without attribution, as tendencies): the particle-meaning
 * table beyond *up* = completely; the formal one-word pairs in the register table; the noun / verb stress shift;
 * always-split verbs. No overlap: setup vs set up is introduced in m31 (expanded here), register is m29, spoken
 * discourse markers are m30.
 */
export const m32: Module = {
  id: 'm32-phrasal-verbs-system',
  num: 32,
  section: 's5-vocabulary-in-action',
  order: 2,
  level: 'b1',
  title: { en: 'The phrasal-verbs system', uk: 'Система phrasal verbs' },
  tagline: {
    en: 'turn it off, but look after it — why «turn off it» and «look it after» are wrong, what a particle can and can’t tell you, and how to learn these verbs so the word order comes free.',
    uk: 'turn it off, але look after it — чому «turn off it» і «look it after» неправильні, що частка може і чого не може підказати, і як вчити ці дієслова, щоб порядок слів приходив сам.',
  },
  readMins: 20,
  mentalModel: {
    en: 'A phrasal verb is **one word of vocabulary written as two or three**, and its word order works like a **hinge**. Whether the hinge opens is a **fact of the lexicon**, and it belongs to a *meaning*, not to the spelling: *take off a jacket* opens, *a plane takes off* has no object at all. If it opens, the **kind of object** decides the rest, mechanically: a pronoun must stand inside (*turn **it** off*), a short noun may stand on either side, a long object goes after. If it doesn’t open, nothing ever goes inside (*look after **it***). So learn each verb with its pronoun, and the word order comes free.',
    uk: 'Phrasal verb — це **одна одиниця лексики, записана двома чи трьома словами**, а його порядок слів працює як **шарнір**. Чи відкривається шарнір — це **факт лексики**, і він належить *значенню*, а не написанню: *take off a jacket* відкривається, а *a plane takes off* взагалі не має додатка. Якщо відкривається, решту механічно вирішує **тип додатка**: займенник мусить стояти всередині (*turn **it** off*), короткий іменник може стояти з будь-якого боку, довгий додаток іде після. Якщо не відкривається, всередину ніколи нічого не стає (*look after **it***). Тож учіть кожне дієслово із займенником, і порядок слів прийде сам.',
  },
  topics: [
    // ── 1. SEPARABLE / INSEPARABLE ─────────────────────────────────────────
    {
      id: 'separable-inseparable',
      title: { en: 'Separable, inseparable and no object', uk: 'Separable, inseparable і без додатка' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'British Council puts it simply: in terms of word order there are two types, **separable and inseparable**. With a separable verb the object can stand between the verb and the particle or after the particle: *They’ve called the meeting off* = *They’ve called off the meeting*. With an inseparable verb the two stay together. One more group has nothing to place: an intransitive verb such as [fall through](#/idioms/fall-through) takes no object.',
            uk: 'British Council каже просто: за порядком слів є два типи — **separable і inseparable**. У розділюваного дієслова додаток може стояти між дієсловом і часткою або після частки: *They’ve called the meeting off* = *They’ve called off the meeting*. У нерозділюваного вони лишаються разом. Ще одна група не має що розміщувати: неперехідне дієслово на кшталт [fall through](#/idioms/fall-through) не бере додатка.',
          },
        },
        {
          kind: 'sim',
          sim: 'particle-hinge',
          caption: {
            en: 'Particle Hinge: pick a type of verb, a verb in one sense and a kind of object, and watch the object swing around the particle. Each walk ends on a correct sentence. The scene separates what is DECLARED (the type of verb, a fact of the lexicon) from what is COMPUTED (the kind of object and the verdict). The second track turns typical slips into correct sentences and names the rule.',
            uk: 'Particle Hinge: оберіть тип дієслова, дієслово в одному значенні й тип додатка — і дивіться, як додаток обертається навколо частки. Кожен прохід закінчується правильним реченням. Сцена відокремлює ОГОЛОШЕНЕ (тип дієслова — факт лексики) від ОБЧИСЛЕНОГО (тип додатка і вердикт). Другий режим перетворює типові помилки на правильні речення і називає правило.',
          },
        },
        {
          kind: 'table',
          caption: { en: 'The whole rule: type of verb × kind of object.', uk: 'Усе правило: тип дієслова × тип додатка.' },
          head: [
            { en: 'Type', uk: 'Тип' },
            { en: 'Pronoun', uk: 'Займенник' },
            { en: 'Short noun', uk: 'Короткий іменник' },
            { en: 'Long object', uk: 'Довгий додаток' },
          ],
          rows: [
            [
              { en: 'Separable: [turn off](#/idioms/turn-off)', uk: 'Separable: [turn off](#/idioms/turn-off)' },
              { en: '✓ turn **them** off · ✕ turn off them', uk: '✓ turn **them** off · ✕ turn off them' },
              { en: '✓ turn **the lights** off · ✓ turn off **the lights**', uk: '✓ turn **the lights** off · ✓ turn off **the lights**' },
              { en: '✓ turn off **all the lights in the building** · ≈ between: possible, less preferred', uk: '✓ turn off **all the lights in the building** · ≈ всередині: можливо, але менш бажано' },
            ],
            [
              { en: 'Inseparable: [look after](#/idioms/look-after)', uk: 'Inseparable: [look after](#/idioms/look-after)' },
              { en: '✓ look after **them** · ✕ look them after', uk: '✓ look after **them** · ✕ look them after' },
              { en: '✓ look after **the servers** · ✕ look the servers after', uk: '✓ look after **the servers** · ✕ look the servers after' },
              { en: '✓ look after **all the servers in the office**', uk: '✓ look after **all the servers in the office**' },
            ],
            [
              { en: 'Three parts: [come up with](#/idioms/come-up-with)', uk: 'Три частини: [come up with](#/idioms/come-up-with)' },
              { en: '✓ come up with **it** · ✕ come up it with', uk: '✓ come up with **it** · ✕ come up it with' },
              { en: '✓ come up with **a plan**', uk: '✓ come up with **a plan**' },
              { en: '✓ come up with **a plan for the next release**', uk: '✓ come up with **a plan for the next release**' },
            ],
            [
              { en: 'No object: [fall through](#/idioms/fall-through)', uk: 'Без додатка: [fall through](#/idioms/fall-through)' },
              { en: '✓ The deal fell through. · ✕ fell it through', uk: '✓ The deal fell through. · ✕ fell it through' },
              { en: '—', uk: '—' },
              { en: '—', uk: '—' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '«Вимкни його» → turn it off, not turn off it', uk: '«Вимкни його» → turn it off, а не turn off it' },
          md: {
            en: 'Ukrainian puts the object after the whole verb, so *turn off it* feels natural. It is the classic phrasal-verb error, and the rule is firm: with a separable verb a personal pronoun **must** go between the verb and the particle. ✓ *Pick **me** up at eight* · ✕ *Pick up me at eight*.',
            uk: 'Українська ставить додаток після всього дієслова, тому *turn off it* здається природним. Це класична помилка з phrasal verbs, і правило тверде: у розділюваного дієслова особовий займенник **мусить** стояти між дієсловом і часткою. ✓ *Pick **me** up at eight* · ✕ *Pick up me at eight*.',
          },
        },
        {
          kind: 'compare',
          a: { en: 'take off: separable', uk: 'take off: separable' },
          b: { en: 'take off: no object', uk: 'take off: без додатка' },
          rows: [
            [
              { en: 'Meaning', uk: 'Значення' },
              { en: 'remove clothing', uk: 'зняти одяг' },
              { en: 'leave the ground', uk: 'злетіти' },
            ],
            [
              { en: 'Example', uk: 'Приклад' },
              { en: 'She took off her jacket. · She took it off.', uk: 'She took off her jacket. · She took it off.' },
              { en: 'The plane took off at noon.', uk: 'The plane took off at noon.' },
            ],
            [
              { en: 'Why it matters', uk: 'Чому це важливо' },
              { en: 'The type belongs to the meaning: the same goes for [break down](#/idioms/break-down) (the numbers)…', uk: 'Тип належить значенню: те саме з [break down](#/idioms/break-down) (цифри)…' },
              { en: '…and break down (a server), which takes no object.', uk: '…і break down (сервер), що не бере додатка.' },
            ],
          ],
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Why some verbs don’t split.** British Council: if the particle is a preposition, the verb is always non-separable, because the object must follow the preposition. That explains the pattern: *after, into, for, with, of* are prepositions, so *look after it, look into it, look for it*. *Off, up, out, down, back* in *turn off, set up, roll back* are adverb particles, and an adverb may move. Cambridge names the three groups: **phrasal** (verb + adverb particle), **prepositional** (verb + preposition) and **phrasal-prepositional** (verb + particle + preposition: *come up with, [run out of](#/idioms/run-out-of), [keep up with](#/idioms/keep-up-with)*), and notes that “phrasal verb” is sometimes used for all three. The word itself is not a full test: *on, over, through* can be either, so check the verb.',
            uk: '**Чому деякі дієслова не розділяються.** British Council: якщо частка — прийменник, дієслово завжди нерозділюване, бо додаток мусить іти за прийменником. Це пояснює закономірність: *after, into, for, with, of* — прийменники, тому *look after it, look into it, look for it*. *Off, up, out, down, back* у *turn off, set up, roll back* — прислівникові частки, а прислівник може рухатися. Cambridge називає три групи: **phrasal** (дієслово + прислівникова частка), **prepositional** (дієслово + прийменник) і **phrasal-prepositional** (дієслово + частка + прийменник: *come up with, [run out of](#/idioms/run-out-of), [keep up with](#/idioms/keep-up-with)*) і зауважує, що «phrasal verb» іноді називають усі три. Саме слово не є повним тестом: *on, over, through* бувають і тим, і тим, тож перевіряйте дієслово.',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: stress, fronting and verbs that always split', uk: 'Дрібний шрифт: наголос, винесення вперед і дієслова, що розділяються завжди' },
          md: {
            en: 'British Council adds two refinements. If you **stress the particle**, separating is preferred in speech: *Take that trash **OUT**!* And the object of an inseparable verb can still appear earlier in the sentence: *Which bug are you looking **for**?* · *Who are you looking **after**?* In the passive the particle also stays with the verb: *The meeting was called off.* A few verbs go the other way and always split, such as [run something by someone](#/idioms/run-something-by-someone). The sim does not model that small group; the card’s form with *something* shows it.',
            uk: 'British Council додає два уточнення. Якщо **наголосити частку**, у мовленні краще розділити: *Take that trash **OUT**!* А додаток нерозділюваного дієслова все одно може стояти раніше в реченні: *Which bug are you looking **for**?* · *Who are you looking **after**?* У пасиві частка теж лишається при дієслові: *The meeting was called off.* Кілька дієслів ідуть навпаки й розділяються завжди, як-от [run something by someone](#/idioms/run-something-by-someone). Сим цю невелику групу не моделює; її показує сама форма картки зі *something*.',
          },
        },
      ],
    },

    // ── 2. PARTICLE MEANINGS ───────────────────────────────────────────────
    {
      id: 'particle-meanings',
      title: { en: 'What a particle can tell you', uk: 'Що може підказати частка' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Many particles lean in a recognizable direction, and that helps you **remember** a verb you have met. It rarely lets you **predict** one you haven’t. Cambridge’s learner dictionary lists a “completely” sense of *up* (to finish or use all of something); the other rows below are working tendencies, not rules.',
            uk: 'Багато часток мають упізнаваний напрямок, і це допомагає **запамʼятати** дієслово, яке ви вже бачили. Передбачити незнайоме це дозволяє рідко. Learner-словник Cambridge подає значення *up* «повністю» (завершити або використати все); решта рядків нижче — робочі тенденції, а не правила.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Particle', uk: 'Частка' },
            { en: 'Leans toward', uk: 'Тенденція' },
            { en: 'It fits', uk: 'Підходить' },
            { en: 'It doesn’t help', uk: 'Не допомагає' },
          ],
          rows: [
            [
              { en: 'up', uk: 'up' },
              { en: 'to the end · more', uk: 'до кінця · більше' },
              { en: '[wrap up](#/idioms/wrap-up) · [clean up](#/idioms/clean-up) · [speed up](#/idioms/speed-up) · [scale up](#/idioms/scale-up)', uk: '[wrap up](#/idioms/wrap-up) · [clean up](#/idioms/clean-up) · [speed up](#/idioms/speed-up) · [scale up](#/idioms/scale-up)' },
              { en: '[give up](#/idioms/give-up): stop trying', uk: '[give up](#/idioms/give-up): припинити спроби' },
            ],
            [
              { en: 'out', uk: 'out' },
              { en: 'fully · to a result', uk: 'повністю · до результату' },
              { en: '[find out](#/idioms/find-out) · [figure out](#/idioms/figure-out) · [sort out](#/idioms/sort-out) · [map out](#/idioms/map-out)', uk: '[find out](#/idioms/find-out) · [figure out](#/idioms/figure-out) · [sort out](#/idioms/sort-out) · [map out](#/idioms/map-out)' },
              { en: '[work out](#/idioms/work-out): also “exercise”', uk: '[work out](#/idioms/work-out): ще й «тренуватися»' },
            ],
            [
              { en: 'off', uk: 'off' },
              { en: 'stop · move away', uk: 'зупинити · відійти' },
              { en: '[turn off](#/idioms/turn-off) · [back off](#/idioms/back-off)', uk: '[turn off](#/idioms/turn-off) · [back off](#/idioms/back-off)' },
              { en: '[kick off](#/idioms/kick-off): it means START', uk: '[kick off](#/idioms/kick-off): означає ПОЧАТИ' },
            ],
            [
              { en: 'down', uk: 'down' },
              { en: 'less · smaller', uk: 'менше · дрібніше' },
              { en: '[narrow down](#/idioms/narrow-down) · [break down](#/idioms/break-down) (the numbers)', uk: '[narrow down](#/idioms/narrow-down) · [break down](#/idioms/break-down) (цифри)' },
              { en: '[pin down](#/idioms/pin-down): define exactly', uk: '[pin down](#/idioms/pin-down): точно визначити' },
            ],
            [
              { en: 'on', uk: 'on' },
              { en: 'continue · activate', uk: 'продовжувати · вмикати' },
              { en: '[carry on](#/idioms/carry-on) · [go on](#/idioms/go-on) · [turn on](#/idioms/turn-on)', uk: '[carry on](#/idioms/carry-on) · [go on](#/idioms/go-on) · [turn on](#/idioms/turn-on)' },
              { en: '[take on](#/idioms/take-on): accept work', uk: '[take on](#/idioms/take-on): взяти роботу' },
            ],
            [
              { en: 'back', uk: 'back' },
              { en: 'return', uk: 'повернення' },
              { en: '[roll back](#/idioms/roll-back) · [come back](#/idioms/come-back) · [get back to](#/idioms/get-back-to)', uk: '[roll back](#/idioms/roll-back) · [come back](#/idioms/come-back) · [get back to](#/idioms/get-back-to)' },
              { en: '[back up](#/idioms/back-up): here *back* is the verb', uk: '[back up](#/idioms/back-up): тут *back* — дієслово' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'Use a particle as a memory hook, not as a rule', uk: 'Частка — це гачок для памʼяті, а не правило' },
          md: {
            en: 'If *off* really meant “stop”, [kick off](#/idioms/kick-off) would end a meeting instead of starting it. When you meet a new verb, check its meaning first, then ask whether the particle helps you remember it. If it doesn’t, treat the verb as a plain word.',
            uk: 'Якби *off* справді означало «зупинити», [kick off](#/idioms/kick-off) завершувало б зустріч, а не починало її. Зустрівши нове дієслово, спершу перевірте значення, а тоді запитайте, чи допомагає частка його запамʼятати. Якщо ні, вчіть дієслово як звичайне слово.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**One verb, several senses.** Particles don’t only shift meaning between verbs; a single phrasal verb often has unrelated senses. [pick up](#/idioms/pick-up) is “lift” and “collect”; [back up](#/idioms/back-up) is “support” and “copy data”; [work out](#/idioms/work-out) is “exercise”, “solve” and “end well”. Learn the sense you need right now, with its sentence. Don’t try to learn every sense at once.',
            uk: '**Одне дієслово, кілька значень.** Частки не лише змінюють значення між дієсловами; один phrasal verb часто має неповʼязані значення. [pick up](#/idioms/pick-up) — це «підняти» і «забрати»; [back up](#/idioms/back-up) — «підтримати» і «зробити копію»; [work out](#/idioms/work-out) — «тренуватися», «розвʼязати» і «добре скластися». Вчіть значення, яке потрібне зараз, разом із реченням. Не намагайтеся вивчити всі одразу.',
          },
        },
      ],
    },

    // ── 3. REGISTER ────────────────────────────────────────────────────────
    {
      id: 'register',
      title: { en: 'Register: sort out or resolve?', uk: 'Регістр: sort out чи resolve?' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'British Council: phrasal verbs are very common, *especially in more informal contexts*. Many have a more formal one-word partner, usually of Latin origin. That doesn’t make the phrasal verb wrong. It sets the tone, the same dial [m29](#/m/m29-subjunctive-formal) turns for a whole message. In conversation they are the natural choice, alongside the spoken markers from [m30](#/m/m30-linking-discourse).',
            uk: 'British Council: phrasal verbs дуже поширені, *особливо в менш формальних контекстах*. Багато з них мають формальніший однослівний відповідник, зазвичай латинського походження. Це не робить phrasal verb неправильним. Це задає тон — той самий регулятор, який [m29](#/m/m29-subjunctive-formal) крутить для цілого повідомлення. У розмові вони — природний вибір, поруч із розмовними маркерами з [m30](#/m/m30-linking-discourse).',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Chat, standup', uk: 'Чат, standup' },
            { en: 'Report, formal email', uk: 'Звіт, офіційний лист' },
            { en: 'One idea, two tones', uk: 'Одна думка, два тони' },
          ],
          rows: [
            [
              { en: '[sort out](#/idioms/sort-out)', uk: '[sort out](#/idioms/sort-out)' },
              { en: 'resolve', uk: 'resolve' },
              { en: 'I’ll sort it out. → The issue will be resolved.', uk: 'I’ll sort it out. → The issue will be resolved.' },
            ],
            [
              { en: '[put off](#/idioms/put-off)', uk: '[put off](#/idioms/put-off)' },
              { en: 'postpone', uk: 'postpone' },
              { en: 'Let’s put it off. → The launch has been postponed.', uk: 'Let’s put it off. → The launch has been postponed.' },
            ],
            [
              { en: '[find out](#/idioms/find-out)', uk: '[find out](#/idioms/find-out)' },
              { en: 'discover · determine', uk: 'discover · determine' },
              { en: 'We found out why. → We determined the cause.', uk: 'We found out why. → We determined the cause.' },
            ],
            [
              { en: '[look into](#/idioms/look-into)', uk: '[look into](#/idioms/look-into)' },
              { en: 'investigate', uk: 'investigate' },
              { en: 'We’re looking into it. → The incident is being investigated.', uk: 'We’re looking into it. → The incident is being investigated.' },
            ],
            [
              { en: '[come up with](#/idioms/come-up-with)', uk: '[come up with](#/idioms/come-up-with)' },
              { en: 'propose · devise', uk: 'propose · devise' },
              { en: 'She came up with a fix. → She proposed a solution.', uk: 'She came up with a fix. → She proposed a solution.' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'Don’t “translate” a chat into Latin', uk: 'Не «перекладайте» чат латиною' },
          md: {
            en: 'A Ukrainian-speaking engineer often reaches for the word that looks like a cognate: *We will investigate and resolve it* in a Slack thread reads stiff next to *We’ll look into it and sort it out*. And don’t avoid phrasal verbs in formal writing at all costs: [set up](#/idioms/set-up), [carry out](#/idioms/carry-out), [roll back](#/idioms/roll-back) and [log in](#/idioms/log-in) are ordinary neutral English.',
            uk: 'Україномовний інженер часто тягнеться до слова, схожого на когнат: *We will investigate and resolve it* у гілці Slack звучить скуто поруч із *We’ll look into it and sort it out*. І не уникайте phrasal verbs у формальному письмі за всяку ціну: [set up](#/idioms/set-up), [carry out](#/idioms/carry-out), [roll back](#/idioms/roll-back) і [log in](#/idioms/log-in) — це звичайна нейтральна англійська.',
          },
        },
        {
          kind: 'table',
          dive: 3,
          caption: {
            en: 'Verb = two words, noun = one (or hyphenated). m31 introduced the pair; here is the whole pattern. The noun also works before another noun: a follow-up meeting, a backup plan.',
            uk: 'Дієслово — два слова, іменник — одне (або через дефіс). m31 ввів цю пару; ось уся схема. Іменник також працює перед іншим іменником: a follow-up meeting, a backup plan.',
          },
          head: [
            { en: 'Verb', uk: 'Дієслово' },
            { en: 'Noun', uk: 'Іменник' },
            { en: 'Together', uk: 'Разом' },
          ],
          rows: [
            [{ en: '[set up](#/idioms/set-up)', uk: '[set up](#/idioms/set-up)' }, { en: 'a setup', uk: 'a setup' }, { en: 'Set up the repo; the setup takes an hour.', uk: 'Set up the repo; the setup takes an hour.' }],
            [{ en: '[back up](#/idioms/back-up)', uk: '[back up](#/idioms/back-up)' }, { en: 'a backup', uk: 'a backup' }, { en: 'Back up the database; the backup runs at night.', uk: 'Back up the database; the backup runs at night.' }],
            [{ en: '[roll back](#/idioms/roll-back)', uk: '[roll back](#/idioms/roll-back)' }, { en: 'a rollback', uk: 'a rollback' }, { en: 'We rolled it back; the rollback took a minute.', uk: 'We rolled it back; the rollback took a minute.' }],
            [{ en: '[break down](#/idioms/break-down)', uk: '[break down](#/idioms/break-down)' }, { en: 'a breakdown', uk: 'a breakdown' }, { en: 'Break down the cost; send me the breakdown.', uk: 'Break down the cost; send me the breakdown.' }],
            [{ en: '[follow up](#/idioms/follow-up)', uk: '[follow up](#/idioms/follow-up)' }, { en: 'a follow-up', uk: 'a follow-up' }, { en: 'I’ll follow up tomorrow; a short follow-up is enough.', uk: 'I’ll follow up tomorrow; a short follow-up is enough.' }],
            [{ en: '[kick off](#/idioms/kick-off)', uk: '[kick off](#/idioms/kick-off)' }, { en: 'a kickoff', uk: 'a kickoff' }, { en: 'We kick off on Monday; the kickoff is at ten.', uk: 'We kick off on Monday; the kickoff is at ten.' }],
          ],
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: you can hear the difference', uk: 'Дрібний шрифт: різницю чути' },
          md: {
            en: 'The verb usually stresses the particle and the noun stresses the first part: *to set **UP*** vs *the **SET**up*, *to back **UP*** vs *a **BACK**up*. Spelling follows the part of speech, so a spell-checker won’t catch *Please setup the server*: *setup* is a real word, just the wrong one here.',
            uk: 'Дієслово зазвичай наголошує частку, а іменник — першу частину: *to set **UP*** vs *the **SET**up*, *to back **UP*** vs *a **BACK**up*. Написання залежить від частини мови, тому spell-checker не впіймає *Please setup the server*: *setup* — справжнє слово, просто тут не те.',
          },
        },
      ],
    },

    // ── 4. LEARNING STRATEGY ───────────────────────────────────────────────
    {
      id: 'learning-strategy',
      title: { en: 'How to learn them', uk: 'Як їх учити' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'The British Council team’s own advice is blunt: you just have to memorize whether a verb is separable. So make that memorization cheap: **learn every verb in its pronoun form.** *turn it off* and *look after it* are three words each, and each one stores the meaning, the type and the word order together. If you can say it with *it*, you can never produce *turn off it*.',
            uk: 'Порада самої команди British Council пряма: чи дієслово розділюване, доводиться просто запамʼятати. Тож зробіть це запамʼятовування дешевим: **учіть кожне дієслово в займенниковій формі.** *turn it off* і *look after it* — по три слова, і кожна форма зберігає разом значення, тип і порядок слів. Якщо ви можете сказати це з *it*, то вже ніколи не скажете *turn off it*.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Step', uk: 'Крок' },
            { en: 'Do this', uk: 'Що робити' },
            { en: 'Why', uk: 'Чому' },
          ],
          rows: [
            [
              { en: '1 · Pronoun form', uk: '1 · Займенникова форма' },
              { en: 'Write *turn it off*, not *turn off*.', uk: 'Записуйте *turn it off*, а не *turn off*.' },
              { en: 'It stores the type.', uk: 'Вона зберігає тип.' },
            ],
            [
              { en: '2 · Dictionary notation', uk: '2 · Запис у словнику' },
              { en: 'Read where *sth* stands: *turn sth off* vs *look after sb/sth*.', uk: 'Дивіться, де стоїть *sth*: *turn sth off* vs *look after sb/sth*.' },
              { en: 'It answers the type question in seconds.', uk: 'Це відповідає на питання про тип за секунди.' },
            ],
            [
              { en: '3 · One sense, one real sentence', uk: '3 · Одне значення, одне справжнє речення' },
              { en: 'Tie it to your own work: *We rolled it back on Friday.*', uk: 'Привʼяжіть до своєї роботи: *We rolled it back on Friday.*' },
              { en: 'The type belongs to the sense.', uk: 'Тип належить значенню.' },
            ],
            [
              { en: '4 · By situation', uk: '4 · За ситуацією' },
              { en: 'Group by topic (a deploy, a meeting), not by base verb.', uk: 'Групуйте за темою (деплой, зустріч), а не за базовим дієсловом.' },
              { en: 'Lists like *get + 20 particles* blur together.', uk: 'Списки на кшталт *get + 20 часток* зливаються.' },
            ],
            [
              { en: '5 · Review', uk: '5 · Повторення' },
              { en: 'Browse [the phrasal verbs in the Words hub](#/idioms), then drill the deck in [#/review](#/review).', uk: 'Перегляньте [phrasal verbs у Words hub](#/idioms), а потім тренуйте колоду в [#/review](#/review).' },
              { en: 'The cards hold more sentences than this module.', uk: 'Картки містять більше речень, ніж цей модуль.' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'Use them when you speak', uk: 'Вживайте їх, коли говорите' },
          md: {
            en: 'Listening usually comes first, and recognizing *kick off* is easy. Producing it is the skill you want. Pick three verbs a week from your own stack of tasks: [spin up](#/idioms/spin-up) a server, [roll out](#/idioms/roll-out) a feature, [wrap up](#/idioms/wrap-up) a call. Then use them on purpose in your next standup.',
            uk: 'Слухання зазвичай приходить першим, і впізнати *kick off* легко. Вам потрібне інше — самому його вжити. Обирайте щотижня три дієслова зі своїх задач: [spin up](#/idioms/spin-up) сервер, [roll out](#/idioms/roll-out) фічу, [wrap up](#/idioms/wrap-up) дзвінок. А тоді навмисно вживайте їх на наступному standup.',
          },
        },
      ],
    },
  ],
  keyPoints: [
    {
      en: 'A phrasal verb is one item of vocabulary. Whether it splits is a fact of the lexicon, and it belongs to the meaning: take off a jacket vs a plane takes off.',
      uk: 'Phrasal verb — одна одиниця лексики. Чи він розділяється — факт лексики, і він належить значенню: take off a jacket vs a plane takes off.',
    },
    {
      en: 'Separable + pronoun: only between (turn it off). Separable + short noun: either place. Separable + long object: after the particle.',
      uk: 'Separable + займенник: лише всередині (turn it off). Separable + короткий іменник: будь-де. Separable + довгий додаток: після частки.',
    },
    {
      en: 'Inseparable and three-part verbs never split, even with a pronoun: look after it, come up with it.',
      uk: 'Inseparable і дієслова з трьох частин ніколи не розділяються, навіть із займенником: look after it, come up with it.',
    },
    {
      en: 'A particle that is a preposition keeps its object after it. That is why after, into and for don’t split.',
      uk: 'Частка-прийменник тримає додаток після себе. Тому after, into і for не розділяються.',
    },
    {
      en: 'Particles lean in directions (up = to the end, off = stop), but only as memory hooks: kick off means start.',
      uk: 'Частки мають тенденції (up = до кінця, off = зупинити), але це лише гачки для памʼяті: kick off означає почати.',
    },
    {
      en: 'Phrasal verbs are especially common in informal contexts; many have a formal partner (sort out / resolve). Neither is wrong; the choice sets the tone.',
      uk: 'Phrasal verbs особливо поширені в неформальних контекстах; багато з них мають формальний відповідник (sort out / resolve). Обидва правильні; вибір задає тон.',
    },
    {
      en: 'Learn each verb in its pronoun form: turn it off, look after it. It stores the meaning, the type and the word order at once.',
      uk: 'Учіть кожне дієслово в займенниковій формі: turn it off, look after it. Вона зберігає значення, тип і порядок слів одразу.',
    },
  ],
  pitfalls: [
    {
      title: { en: '“Turn off it.”', uk: '«Turn off it.»' },
      body: { en: 'A pronoun goes between a separable verb and its particle: Turn it off.', uk: 'Займенник стоїть між розділюваним дієсловом і часткою: Turn it off.' },
    },
    {
      title: { en: '“Pick up me at eight.”', uk: '«Pick up me at eight.»' },
      body: { en: 'The same rule with me: Pick me up at eight.', uk: 'Те саме правило з me: Pick me up at eight.' },
    },
    {
      title: { en: '“Can you look it after?”', uk: '«Can you look it after?»' },
      body: { en: 'look after never splits; after is a preposition: Can you look after it?', uk: 'look after ніколи не розділяється; after — прийменник: Can you look after it?' },
    },
    {
      title: { en: '“We came up it with.”', uk: '«We came up it with.»' },
      body: { en: 'A three-part verb stays together, and the pronoun goes last: We came up with it.', uk: 'Дієслово з трьох частин не розділяється, а займенник стоїть останнім: We came up with it.' },
    },
    {
      title: { en: '“The deal fell it through.”', uk: '«The deal fell it through.»' },
      body: { en: 'fall through takes no object: The deal fell through.', uk: 'fall through не бере додатка: The deal fell through.' },
    },
    {
      title: { en: '“Off means stop, so kick off must mean finish.”', uk: '«Off означає зупинити, тож kick off має означати завершити.»' },
      body: { en: 'A particle is a tendency, not a rule. Kick off means start: check the meaning first.', uk: 'Частка — тенденція, а не правило. Kick off означає почати: спершу перевірте значення.' },
    },
    {
      title: { en: '“We will investigate and resolve it” in a chat', uk: '«We will investigate and resolve it» у чаті' },
      body: { en: 'Correct but stiff. In a chat: We’ll look into it and sort it out.', uk: 'Правильно, але скуто. У чаті: We’ll look into it and sort it out.' },
    },
  ],
  exercises: [
    {
      id: 'ex-phrasal-verbs-1',
      kind: 'gap',
      sentence: 'The music is too loud. Please ___. (turn off + it)',
      answers: ['turn it off'],
      hint: { en: 'a pronoun with a separable verb', uk: 'займенник із розділюваним дієсловом' },
      explain: { en: 'A pronoun must go between the verb and the particle.', uk: 'Займенник мусить стояти між дієсловом і часткою.' },
      level: 'b1',
      tags: ['phrasal-verbs', 'separable'],
    },
    {
      id: 'ex-phrasal-verbs-2',
      kind: 'mcq',
      prompt: { en: 'Which sentence is correct?', uk: 'Яке речення правильне?' },
      options: ['Can you look after it?', 'Can you look it after?', 'Can you after look it?'],
      correct: 0,
      explain: { en: 'look after never splits: after is a preposition, and its object follows it.', uk: 'look after ніколи не розділяється: after — прийменник, і додаток іде за ним.' },
      level: 'b1',
      tags: ['phrasal-verbs', 'inseparable'],
    },
    {
      id: 'ex-phrasal-verbs-3',
      kind: 'mcq',
      prompt: { en: 'In which pair are BOTH sentences correct?', uk: 'У якій парі ОБИДВА речення правильні?' },
      options: [
        'She set the server up. / She set up the server.',
        'She set it up. / She set up it.',
        'She looked the bug for. / She looked for the bug.',
      ],
      correct: 0,
      explain: { en: 'A short noun may stand on either side of a separable particle; a pronoun may not.', uk: 'Короткий іменник може стояти з будь-якого боку розділюваної частки; займенник — ні.' },
      level: 'b1',
      tags: ['phrasal-verbs', 'separable'],
    },
    {
      id: 'ex-phrasal-verbs-4',
      kind: 'gap',
      sentence: 'That’s a great idea. Who ___? (came up with + it)',
      answers: ['came up with it'],
      hint: { en: 'three parts', uk: 'три частини' },
      explain: { en: 'A three-part verb never splits; the pronoun goes after all of it.', uk: 'Дієслово з трьох частин ніколи не розділяється; займенник іде після всіх частин.' },
      level: 'b1',
      tags: ['phrasal-verbs', 'three-part'],
    },
    {
      id: 'ex-phrasal-verbs-5',
      kind: 'mcq',
      prompt: { en: 'Choose the most natural sentence.', uk: 'Оберіть найприродніше речення.' },
      options: [
        'We rolled back all the changes from last week.',
        'We rolled all the changes from last week back.',
        'We rolled them all the changes back.',
      ],
      correct: 0,
      explain: { en: 'A long object is preferred after the particle. The second sentence is possible but less preferred.', uk: 'Довгому додатку краще стояти після частки. Друге речення можливе, але менш бажане.' },
      level: 'b1',
      tags: ['phrasal-verbs', 'separable'],
    },
    {
      id: 'ex-phrasal-verbs-6',
      kind: 'mcq',
      prompt: { en: 'Which verb CANNOT take an object in this sense?', uk: 'Яке дієслово в цьому значенні НЕ може мати додатка?' },
      options: ['The deal fell through.', 'She took off her jacket.', 'We set up the server.'],
      correct: 0,
      explain: { en: 'fall through (fail to happen) is intransitive; the other two are separable.', uk: 'fall through (не відбутися) неперехідне; решта два — розділювані.' },
      level: 'b1',
      tags: ['phrasal-verbs', 'no-object'],
    },
    {
      id: 'ex-phrasal-verbs-7',
      kind: 'gap',
      sentence: 'I can’t find my badge. I’ve been ___ all morning. (look for + it)',
      answers: ['looking for it'],
      hint: { en: 'for is a preposition', uk: 'for — прийменник' },
      explain: { en: 'look for never splits: looking for it.', uk: 'look for ніколи не розділяється: looking for it.' },
      level: 'b1',
      tags: ['phrasal-verbs', 'inseparable'],
    },
    {
      id: 'ex-phrasal-verbs-8',
      kind: 'gap',
      sentence: 'My car is in the shop. Can you ___ at eight? (pick up + me)',
      answers: ['pick me up'],
      hint: { en: 'where does me go?', uk: 'де стоїть me?' },
      explain: { en: 'A personal pronoun goes between the verb and the particle.', uk: 'Особовий займенник стоїть між дієсловом і часткою.' },
      level: 'b1',
      tags: ['phrasal-verbs', 'separable'],
    },
    {
      id: 'ex-phrasal-verbs-9',
      kind: 'mcq',
      prompt: { en: 'In which sentence does take off have NO object?', uk: 'У якому реченні take off НЕ має додатка?' },
      options: ['The plane took off on time.', 'Take off your shoes, please.', 'She took it off.'],
      correct: 0,
      explain: { en: 'The type belongs to the sense: a plane that leaves the ground has no object.', uk: 'Тип належить значенню: літак, що злітає, не має додатка.' },
      level: 'b1',
      tags: ['phrasal-verbs', 'no-object'],
    },
    {
      id: 'ex-phrasal-verbs-10',
      kind: 'mcq',
      prompt: { en: 'We ___ the project on Monday at ten.', uk: 'Ми розпочали проєкт у понеділок о десятій.' },
      options: ['kicked off', 'kicked out', 'kicked over'],
      correct: 0,
      explain: { en: 'kick off = start, although off often leans toward “stop”. A particle is only a tendency.', uk: 'kick off = почати, хоча off часто тяжіє до «зупинити». Частка — лише тенденція.' },
      level: 'b1',
      tags: ['phrasal-verbs', 'particles'],
    },
    {
      id: 'ex-phrasal-verbs-11',
      kind: 'gap',
      sentence: 'We have too many options. Let’s ___ to three. (narrow down + them)',
      answers: ['narrow them down'],
      hint: { en: 'down = fewer', uk: 'down = менше' },
      explain: { en: 'narrow down is separable, and down leans toward “less”: narrow them down.', uk: 'narrow down розділюване, а down тяжіє до «менше»: narrow them down.' },
      level: 'b1',
      tags: ['phrasal-verbs', 'particles'],
    },
    {
      id: 'ex-phrasal-verbs-12',
      kind: 'mcq',
      prompt: { en: 'You are writing a formal incident report. Which sentence fits best?', uk: 'Ви пишете офіційний звіт про інцидент. Яке речення підходить найкраще?' },
      options: ['The team investigated the cause.', 'The team looked the cause into.', 'We looked into it, no worries!'],
      correct: 0,
      explain: { en: 'investigate is the more formal partner of look into. The second splits an inseparable verb; the third is correct but far too casual.', uk: 'investigate — формальніший відповідник look into. Друге розділяє нерозділюване дієслово; третє правильне, але надто невимушене.' },
      level: 'b1',
      tags: ['phrasal-verbs', 'register'],
    },
    {
      id: 'ex-phrasal-verbs-13',
      kind: 'mcq',
      prompt: { en: 'Which sentence fits a quick team chat best?', uk: 'Яке речення найкраще підходить для швидкого чату команди?' },
      options: ['We’ll sort it out today.', 'The matter shall be resolved today.', 'Resolution of the matter will occur today.'],
      correct: 0,
      explain: { en: 'Phrasal verbs are especially common in informal contexts; m29 has the whole dial.', uk: 'Phrasal verbs особливо поширені в неформальних контекстах; весь регулятор — у m29.' },
      level: 'b1',
      tags: ['phrasal-verbs', 'register'],
    },
    {
      id: 'ex-phrasal-verbs-14',
      kind: 'mcq',
      prompt: { en: 'Choose the correct pair.', uk: 'Оберіть правильну пару.' },
      options: [
        'Please back up the data. The backup runs at night.',
        'Please backup the data. The back up runs at night.',
        'Please back-up the data. The back up runs at night.',
      ],
      correct: 0,
      explain: { en: 'Verb = two words (back up); noun = one word (a backup).', uk: 'Дієслово — два слова (back up); іменник — одне (a backup).' },
      level: 'b1',
      tags: ['phrasal-verbs', 'nouns'],
    },
    {
      id: 'ex-phrasal-verbs-15',
      kind: 'gap',
      sentence: 'The printer is broken, so I need someone to ___. (look into + it)',
      answers: ['look into it'],
      hint: { en: 'into is a preposition', uk: 'into — прийменник' },
      explain: { en: 'look into never splits: look into it.', uk: 'look into ніколи не розділяється: look into it.' },
      level: 'b1',
      tags: ['phrasal-verbs', 'inseparable'],
    },
    {
      id: 'ex-phrasal-verbs-16',
      kind: 'mcq',
      prompt: { en: 'What is the best way to store a new phrasal verb in your notes?', uk: 'Як найкраще записати новий phrasal verb у нотатки?' },
      options: ['turn it off', 'turn + off', 'off: stop'],
      correct: 0,
      explain: { en: 'The pronoun form stores the meaning, the type and the word order at once.', uk: 'Займенникова форма зберігає значення, тип і порядок слів одразу.' },
      level: 'b1',
      tags: ['phrasal-verbs', 'strategy'],
    },
  ],
  seeAlso: ['m33-collocations', 'm31-word-formation', 'm34-confusables', 'm29-subjunctive-formal', 'm30-linking-discourse'],
  sources: [
    { title: 'British Council — Word order in phrasal verbs (C1)', url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/c1/word-order-phrasal-verbs' },
    { title: 'British Council — Phrasal verbs (B1–B2)', url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/phrasal-verbs' },
    { title: 'Cambridge Dictionary — Phrasal verbs and multi-word verbs', url: 'https://dictionary.cambridge.org/grammar/british-grammar/phrasal-verbs-and-multi-word-verbs' },
    { title: 'Cambridge Dictionary — Prepositions and particles', url: 'https://dictionary.cambridge.org/grammar/british-grammar/prepositions-and-particles' },
    { title: 'Cambridge Learner’s Dictionary — up', url: 'https://dictionary.cambridge.org/us/dictionary/learner-english/up' },
  ],
};
