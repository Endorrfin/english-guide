import type { Module } from '../types';

/*
 * CHANGED (F1): M2 · Articles: a/an/the basics — Section I Foundations, wave F1 (figure first-mention-path; no sim:
 * the decision is already the ★ article-tree of m28, which this module links to instead of duplicating). Authored EN
 * first, UA second; US English base.
 * Facts read in full on British Council — Articles: a, an, the ("when the word that follows it begins with a consonant
 * sound"; "the listener already knows which thing… because it was mentioned before" / "only one of them"; "things in
 * general… a plural or uncountable noun with no article"; "Singular, countable nouns always have an article… or another
 * determiner") and Articles: the or no article (countries, cities, rivers). Cambridge returns HTTP 403 to the fetcher,
 * so A/an and the was read through search extracts: a/an = not already known, the = already known; a /ə/ and an /ən/ by
 * the next sound; the /ðiː/ before a vowel sound and /ðə/ before a consonant sound. Cambridge does not use the phrase
 * "first mention": the term is this guide's label for the known / not known idea.
 * NOT confirmed on a learner site this session (stated without attribution): how the initialisms below are spelled
 * aloud, a vs one, the with first / same / best, and the Ukrainian contrast notes (the guide's own).
 * No overlap: abstract and generic nouns, geography and institutions, and the idiomatic zero article are m28's;
 * countable vs uncountable is m3's; a job with be starts in m1.
 */
export const m2: Module = {
  id: 'm2-articles-basics',
  num: 2,
  section: 's1-foundations',
  order: 2,
  level: 'a1',
  title: { en: 'Articles: a/an/the basics', uk: 'Артиклі: основи a/an/the' },
  tagline: {
    en: 'I found a bug. The bug is in the login form. Ukrainian has no articles, so here is the question that picks one: does the listener know which?',
    uk: 'I found a bug. The bug is in the login form. В українській артиклів немає, тож ось питання, яке вибирає потрібний: чи знає слухач, який саме?',
  },
  readMins: 14,
  mentalModel: {
    en: 'An article is **a signal to the listener**, and it answers one question: **do you know which one I mean?** *A bug* says “one of many, you don’t know it yet”. *The bug* says “you know the one”. No article says “this kind of thing in general”. Ukrainian leaves this to context and word order, so it can feel like decoration, but in English a **singular countable noun can’t stand bare**: it always needs *a / an*, *the* or a word like *my* or *this*.',
    uk: 'Артикль — це **сигнал слухачеві**, і він відповідає на одне питання: **чи знаєш ти, про який саме йдеться?** *A bug* каже: «один із багатьох, ти його ще не знаєш». *The bug* каже: «ти знаєш, про який». Без артикля — «така річ загалом». Українська залишає це контексту й порядку слів, тож артикль може здаватися прикрасою, але в англійській **іменник в однині, який можна порахувати, не може стояти сам**: йому завжди потрібен *a / an*, *the* або слово на кшталт *my* чи *this*.',
  },
  topics: [
    // ── 1. A / AN ──────────────────────────────────────────────────────────
    {
      id: 'a-an',
      title: { en: 'a or an: it’s the sound, not the letter', uk: 'a чи an: важить звук, а не літера' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: '*A* and *an* are one word in two forms. British Council: use *a* when the next word begins with a **consonant sound** and *an* when it begins with a **vowel sound**. Listen, don’t look: *university* starts with the sound /j/, so *a university*, while *hour* starts with a vowel because the *h* is silent, so *an hour*. And it depends on the **next word**, whatever that word is: *an old server* but *a new server*.',
            uk: '*A* і *an* — одне слово у двох формах. British Council: *a* вживаємо, коли наступне слово починається з **приголосного звука**, а *an* — коли з **голосного звука**. Слухайте, а не дивіться: *university* починається зі звука /j/, тому *a university*, а *hour* — з голосного, бо *h* не вимовляється, тому *an hour*. І важить саме **наступне слово**, яким би воно не було: *an old server*, але *a new server*.',
          },
        },
        {
          kind: 'table',
          caption: { en: 'The letter says one thing, the sound decides. An initialism goes by how its first letter is said aloud.', uk: 'Літера каже одне, вирішує звук. Абревіатура залежить від того, як вимовляється її перша літера.' },
          head: [
            { en: 'First sound', uk: 'Перший звук' },
            { en: 'Article', uk: 'Артикль' },
            { en: 'Examples', uk: 'Приклади' },
          ],
          rows: [
            [
              { en: 'Consonant', uk: 'Приголосний' },
              { en: 'a', uk: 'a' },
              { en: 'a bug · a new laptop · a team', uk: 'a bug · a new laptop · a team' },
            ],
            [
              { en: 'Vowel', uk: 'Голосний' },
              { en: 'an', uk: 'an' },
              { en: 'an app · an old laptop · an error', uk: 'an app · an old laptop · an error' },
            ],
            [
              { en: 'Written vowel, sound /j/ or /w/', uk: 'На письмі голосна, звук /j/ чи /w/' },
              { en: 'a', uk: 'a' },
              { en: 'a user · a university · a URL · a one-day trip', uk: 'a user · a university · a URL · a one-day trip' },
            ],
            [
              { en: 'Silent h', uk: 'Німа h' },
              { en: 'an', uk: 'an' },
              { en: 'an hour · an honest answer', uk: 'an hour · an honest answer' },
            ],
            [
              { en: 'Letter name with a vowel: F, H, L, M, N, R, S, X…', uk: 'Назва літери з голосним: F, H, L, M, N, R, S, X…' },
              { en: 'an', uk: 'an' },
              { en: 'an MVP · an HTTP request · an SSD', uk: 'an MVP · an HTTP request · an SSD' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '«Я інженер» → I’m an engineer', uk: '«Я інженер» → I’m an engineer' },
          md: {
            en: 'A job is one of many, so it takes *a / an*: ✓ *I’m **an** engineer* · ✓ *She’s **a** manager* · ✕ *I’m engineer*. More widely, British Council: a singular countable noun always has an article or another determiner. So ✕ *I have laptop* needs a word: *I have **a** laptop* · *This is **my** laptop*.',
            uk: 'Професія — одна з багатьох, тому бере *a / an*: ✓ *I’m **an** engineer* · ✓ *She’s **a** manager* · ✕ *I’m engineer*. Ширше, за British Council: іменник в однині, який можна порахувати, завжди має артикль або інший determiner. Отже, ✕ *I have laptop* потребує слова: *I have **a** laptop* · *This is **my** laptop*.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**a or one?** *A* doesn’t stress the number, *one* does. *I have **a** question* just introduces it; *I have **one** question* means one, not two. And you can’t use *a / an* with a plural or an uncountable noun: ✕ *a bugs* · ✕ *an advice*. For plurals, *some* often does the same job: *I found **some** bugs*. Which nouns count is the topic of [m3](#/m/m3-nouns-quantifiers).',
            uk: '**a чи one?** *A* не наголошує кількість, а *one* наголошує. *I have **a** question* просто вводить питання; *I have **one** question* означає одне, а не два. І *a / an* не вживається з множиною або uncountable: ✕ *a bugs* · ✕ *an advice*. Для множини ту саму роботу часто виконує *some*: *I found **some** bugs*. Які іменники можна рахувати — тема [m3](#/m/m3-nouns-quantifiers).',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: initialisms and how you say them', uk: 'Дрібний шрифт: абревіатури і як їх вимовляти' },
          md: {
            en: 'The rule follows your pronunciation, so a form can vary with it: if you spell out S-Q-L you write *an SQL query*, and if you say “sequel” you write *a SQL query*. Both are in real use. Acronyms read as a word follow that word: *a RAM chip* (“ram”), because the sound is /r/, while spelled letters follow the letter name: *an RPC call* (“ar-pee-see”).',
            uk: 'Правило йде за вимовою, тож форма може змінюватися разом із нею: якщо ви вимовляєте S-Q-L по літерах, пишете *an SQL query*, а якщо кажете «sequel» — *a SQL query*. Обидва варіанти реально вживаються. Абревіатури, що читаються як слово, поводяться як це слово: *a RAM chip* («ram»), бо звук — /r/, а ті, що читаються по літерах, — за назвою літери: *an RPC call* («ar-pee-see»).',
          },
        },
      ],
    },

    // ── 2. THE ─────────────────────────────────────────────────────────────
    {
      id: 'the',
      title: { en: 'the: you know which one', uk: 'the: ти знаєш, який саме' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'British Council: use *the* when the listener already knows which thing we are talking about, because it was mentioned before or because there’s only one of them. In practice there are three everyday reasons, and the next topic takes a closer look at the first one.',
            uk: 'British Council: *the* вживаємо, коли слухач уже знає, про яку річ ідеться, бо її згадували раніше або бо вона одна. На практиці є три повсякденні причини, а першу докладніше розгляне наступна тема.',
          },
        },
        {
          kind: 'table',
          caption: { en: 'Three everyday reasons for the. In all three, the listener can answer “which one?”.', uk: 'Три повсякденні причини для the. В усіх трьох слухач може відповісти на «який саме?».' },
          head: [
            { en: 'Why you know which', uk: 'Чому ясно, який саме' },
            { en: 'Example', uk: 'Приклад' },
            { en: 'What the listener thinks', uk: 'Що думає слухач' },
          ],
          rows: [
            [
              { en: 'Already mentioned', uk: 'Уже згадували' },
              { en: 'I found a bug. The bug is in the login form.', uk: 'I found a bug. The bug is in the login form.' },
              { en: 'The one you just told me about.', uk: 'Той, про який ти щойно сказав.' },
            ],
            [
              { en: 'There’s only one', uk: 'Він один' },
              { en: 'the sun · the internet · the CEO of our company', uk: 'the sun · the internet · the CEO of our company' },
              { en: 'There is no other.', uk: 'Іншого немає.' },
            ],
            [
              { en: 'The situation makes it clear', uk: 'Зрозуміло із ситуації' },
              { en: 'Can you close the door? · Have you seen the car key?', uk: 'Can you close the door? · Have you seen the car key?' },
              { en: 'The one we can both see, or both know about.', uk: 'Той, що ми обидва бачимо або знаємо.' },
            ],
          ],
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Words that make it “only one”.** Some words pick out a single thing by their meaning, so they normally come with *the*: *the first*, *the last*, *the next*, *the same*, *the only*, and a superlative: *the best option*. See [m12](#/m/m12-comparatives) for the superlative. A description can do the same: *a server* is any server, but *the server in Kyiv* is the one the phrase identifies, if we have just one there.',
            uk: '**Слова, що роблять річ «єдиною».** Деякі слова за змістом вказують на одну річ, тож зазвичай ідуть із *the*: *the first*, *the last*, *the next*, *the same*, *the only*, і superlative: *the best option*. Про superlative див. [m12](#/m/m12-comparatives). Те саме може зробити опис: *a server* — будь-який сервер, а *the server in Kyiv* — той, на який вказує фраза, якщо він там один.',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: two ways to say the', uk: 'Дрібний шрифт: два способи вимовити the' },
          md: {
            en: 'Cambridge: *the* changes with the next sound, just as *a / an* does. Before a consonant sound it is /ðə/: *the team*, *the user*. Before a vowel sound it is /ðiː/: *the apple*, *the hour*. It’s the sound again: *the user* starts with /j/, so it’s /ðə/.',
            uk: 'Cambridge: *the* змінюється залежно від наступного звука, як і *a / an*. Перед приголосним це /ðə/: *the team*, *the user*. Перед голосним — /ðiː/: *the apple*, *the hour*. І знову важить звук: *the user* починається з /j/, тому /ðə/.',
          },
        },
      ],
    },

    // ── 3. ZERO ARTICLE ────────────────────────────────────────────────────
    {
      id: 'zero-article',
      title: { en: 'No article: things in general', uk: 'Без артикля: речі загалом' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'British Council: when we talk about things in general, we normally use a plural or uncountable noun with no article: *Birds eat worms* · *Water freezes at 0°C*. This is the *the* that Ukrainian speakers add “to be safe”. If you mean the whole kind, leave it out: ✓ *I like cats* · ✕ *I like the cats*, unless you mean particular cats.',
            uk: 'British Council: говорячи про речі загалом, ми зазвичай вживаємо множину або uncountable без артикля: *Birds eat worms* · *Water freezes at 0°C*. Це саме те *the*, яке україномовні додають «про всяк випадок». Якщо маєте на увазі весь вид, не ставте його: ✓ *I like cats* · ✕ *I like the cats*, якщо не йдеться про конкретних котів.',
          },
        },
        {
          kind: 'compare',
          a: { en: 'In general: no article', uk: 'Загалом: без артикля' },
          b: { en: 'This particular one: the', uk: 'Саме цей: the' },
          rows: [
            [
              { en: 'Uncountable', uk: 'Uncountable' },
              { en: 'I like coffee.', uk: 'I like coffee.' },
              { en: 'The coffee in this office is terrible.', uk: 'The coffee in this office is terrible.' },
            ],
            [
              { en: 'Plural', uk: 'Множина' },
              { en: 'Bugs are expensive.', uk: 'Bugs are expensive.' },
              { en: 'The bugs in this release are expensive.', uk: 'The bugs in this release are expensive.' },
            ],
            [
              { en: 'What changes', uk: 'Що змінюється' },
              { en: 'Everything of this kind.', uk: 'Усе такого виду.' },
              { en: 'Only the ones we can identify.', uk: 'Лише ті, які ми можемо визначити.' },
            ],
          ],
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Other words in the slot.** A noun needs no article when another determiner is already there, because they share one slot: *my laptop* · *this bug* · *some users*. So ✕ *the my laptop* and ✕ *a this bug* are always wrong. Names of people normally have no article either: *Anna called*. Most countries and cities don’t, but rivers and oceans do: *Kyiv* · *the Dnipro* · *the Atlantic*. The full picture of names, with *Ukraine* and *the Netherlands*, is in [m28](#/m/m28-articles-advanced).',
            uk: '**Інші слова в слоті.** Іменнику не потрібен артикль, коли там уже є інший determiner, бо вони ділять один слот: *my laptop* · *this bug* · *some users*. Отже, ✕ *the my laptop* і ✕ *a this bug* завжди неправильні. Імена людей зазвичай теж без артикля: *Anna called*. Більшість країн і міст — без нього, а річки й океани — з ним: *Kyiv* · *the Dnipro* · *the Atlantic*. Повна картина назв, із *Ukraine* і *the Netherlands*, — у [m28](#/m/m28-articles-advanced).',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: where this module stops', uk: 'Дрібний шрифт: де цей модуль закінчується' },
          md: {
            en: 'Set phrases such as *at home*, *by bus* or *go to bed* have no article for reasons that the general-meaning rule doesn’t explain. Those are the idiomatic zero article, and with abstract nouns like *life* and *time* they are the hard cases of [m28](#/m/m28-articles-advanced), where ★ Article Tree walks you through the choice.',
            uk: 'Сталі вислови на кшталт *at home*, *by bus* чи *go to bed* не мають артикля з причин, які правило про загальне значення не пояснює. Це ідіоматичний нульовий артикль, а разом з абстрактними іменниками на кшталт *life* і *time* — складні випадки з [m28](#/m/m28-articles-advanced), де ★ Article Tree проводить через вибір крок за кроком.',
          },
        },
      ],
    },

    // ── 4. FIRST MENTION ───────────────────────────────────────────────────
    {
      id: 'first-mention',
      title: { en: 'First mention: a, then the', uk: 'Перша згадка: a, потім the' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Cambridge explains it as knowledge: *a / an* shows that the thing is not already known to the listener, and *the* shows that it is. So a new noun usually arrives with *a / an*, and from then on it’s *the*, because now you both know which one. Soon a pronoun takes over.',
            uk: 'Cambridge пояснює це через знання: *a / an* показує, що слухач цього ще не знає, а *the* — що вже знає. Тому новий іменник зазвичай приходить з *a / an*, а далі він уже з *the*, бо тепер обидва знаєте, який саме. Незабаром його заміняє займенник.',
          },
        },
        {
          kind: 'figure',
          fig: 'first-mention-path',
          caption: {
            en: 'One noun in a conversation: a, the, it. Below it are the two other routes: the with no first mention, and no article at all.',
            uk: 'Один іменник у розмові: a, the, it. Нижче — ще два шляхи: the без першої згадки і зовсім без артикля.',
          },
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'Ask the listener’s question', uk: 'Поставте питання слухача' },
          md: {
            en: 'Before you choose, imagine the listener asking **“Which one?”** If they could answer it themselves, use *the*. If they couldn’t, use *a / an*. That is why *the* can be right on the very first mention: at the office, *Can you restart the server?* works if the team has only one. And why *a* can be right the second time: *I found a bug. Then I found **a** bug in the tests too*, because it’s a new one.',
            uk: 'Перш ніж вибрати, уявіть, що слухач питає **«Який саме?»** Якщо він може відповісти сам, вживайте *the*. Якщо ні — *a / an*. Тому *the* може бути правильним уже при першій згадці: в офісі *Can you restart the server?* працює, якщо сервер у команди один. І тому *a* може бути правильним удруге: *I found a bug. Then I found **a** bug in the tests too*, бо це вже новий баг.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**The Ukrainian shortcut.** Ukrainian marks the same difference with word order, and that makes a useful test: «**У кімнаті** сидів чоловік» introduces someone new (*A man was sitting in the room*), while «**Чоловік** сидів у кімнаті» talks about someone already known (*The man was sitting in the room*). Treat it as a hint, not a rule. The fuller a / the nuance is the last topic of [m28](#/m/m28-articles-advanced).',
            uk: '**Українська підказка.** Українська позначає ту саму різницю порядком слів, і це корисний тест: «**У кімнаті** сидів чоловік» вводить когось нового (*A man was sitting in the room*), а «**Чоловік** сидів у кімнаті» говорить про вже відомого (*The man was sitting in the room*). Сприймайте це як підказку, а не правило. Детальніші відтінки a / the — в останній темі [m28](#/m/m28-articles-advanced).',
          },
        },
      ],
    },
  ],
  keyPoints: [
    {
      en: 'An article answers the listener’s question: do you know which one I mean?',
      uk: 'Артикль відповідає на питання слухача: чи знаєш ти, про який саме йдеться?',
    },
    {
      en: 'A singular countable noun can’t stand bare: it needs a / an, the, or another determiner such as my or this.',
      uk: 'Іменник в однині, який можна порахувати, не може стояти сам: йому потрібен a / an, the або інший determiner, як-от my чи this.',
    },
    {
      en: 'a or an depends on the next sound, not the next letter: a user, an hour, an MVP.',
      uk: 'a чи an залежить від наступного звука, а не літери: a user, an hour, an MVP.',
    },
    {
      en: 'A job takes a / an: I’m an engineer.',
      uk: 'Професія бере a / an: I’m an engineer.',
    },
    {
      en: 'Use the when it was mentioned before, when there’s only one, or when the situation makes it clear.',
      uk: 'the вживається, коли річ уже згадували, коли вона одна або коли це зрозуміло із ситуації.',
    },
    {
      en: 'For things in general, use a plural or uncountable noun with no article: Bugs are expensive.',
      uk: 'Про речі загалом вживайте множину або uncountable без артикля: Bugs are expensive.',
    },
    {
      en: 'Articles and possessives share one slot: my laptop, never the my laptop.',
      uk: 'Артиклі й присвійні слова ділять один слот: my laptop, а ніколи the my laptop.',
    },
  ],
  pitfalls: [
    {
      title: { en: '“I’m engineer.”', uk: '«I’m engineer.»' },
      body: { en: 'A job takes a / an: I’m an engineer.', uk: 'Професія бере a / an: I’m an engineer.' },
    },
    {
      title: { en: '“I have laptop.”', uk: '«I have laptop.»' },
      body: { en: 'A singular countable noun can’t stand bare: I have a laptop.', uk: 'Іменник в однині, який можна порахувати, не може стояти сам: I have a laptop.' },
    },
    {
      title: { en: '“an user”, “a hour”', uk: '«an user», «a hour»' },
      body: { en: 'Go by the sound: a user starts with /j/; in an hour the h is silent.', uk: 'Орієнтуйтеся на звук: a user починається з /j/; в an hour h не вимовляється.' },
    },
    {
      title: { en: '“I like the cats” in general', uk: '«I like the cats» загалом' },
      body: { en: 'In general, there’s no article: I like cats.', uk: 'Загалом артикля немає: I like cats.' },
    },
    {
      title: { en: '“The water freezes at 0°C.”', uk: '«The water freezes at 0°C.»' },
      body: { en: 'A general fact takes no article: Water freezes at 0°C.', uk: 'Загальний факт не має артикля: Water freezes at 0°C.' },
    },
    {
      title: { en: '“the my laptop”', uk: '«the my laptop»' },
      body: { en: 'They share one slot, so use one word: my laptop. Or: a friend of mine.', uk: 'Вони ділять один слот, тож лишається одне слово: my laptop. Або: a friend of mine.' },
    },
    {
      title: { en: '“I found bug. Bug is in login form.”', uk: '«I found bug. Bug is in login form.»' },
      body: { en: 'Ukrainian needs no articles here, but English does: I found a bug. The bug is in the login form.', uk: 'Українській тут артиклі не потрібні, а англійській — так: I found a bug. The bug is in the login form.' },
    },
    {
      title: { en: '“an advice”', uk: '«an advice»' },
      body: { en: 'advice is uncountable, so it can’t take a / an: some advice, a piece of advice.', uk: 'advice — uncountable, тому не бере a / an: some advice, a piece of advice.' },
    },
  ],
  exercises: [
    {
      id: 'ex-articles-basics-1',
      kind: 'gap',
      sentence: 'It took me ___ hour to fix it.',
      answers: ['an'],
      hint: { en: 'listen to the first sound', uk: 'прислухайтеся до першого звука' },
      explain: { en: 'The h is silent, so hour begins with a vowel sound.', uk: 'h не вимовляється, тож hour починається з голосного звука.' },
      level: 'a1',
      tags: ['articles', 'a-an'],
    },
    {
      id: 'ex-articles-basics-2',
      kind: 'gap',
      sentence: 'He has ___ university degree.',
      answers: ['a'],
      explain: { en: 'university begins with the consonant sound /j/.', uk: 'university починається з приголосного звука /j/.' },
      level: 'a1',
      tags: ['articles', 'a-an'],
    },
    {
      id: 'ex-articles-basics-3',
      kind: 'gap',
      sentence: 'We found a bug yesterday. ___ bug was in the login form.',
      answers: ['the'],
      explain: { en: 'It was mentioned before, so the listener knows which one.', uk: 'Її вже згадували, тож слухач знає, яка саме.' },
      level: 'a1',
      tags: ['articles', 'first-mention'],
    },
    {
      id: 'ex-articles-basics-4',
      kind: 'mcq',
      prompt: { en: 'Which one states a general fact correctly?', uk: 'Що правильно передає загальний факт?' },
      options: ['Water freezes at 0°C.', 'The water freezes at 0°C.', 'A water freezes at 0°C.'],
      correct: 0,
      explain: { en: 'In general, an uncountable noun has no article.', uk: 'Загалом uncountable не має артикля.' },
      level: 'a1',
      tags: ['articles', 'zero-article'],
    },
    {
      id: 'ex-articles-basics-5',
      kind: 'mcq',
      prompt: { en: '«Я інженер.»', uk: '«Я інженер.»' },
      options: ['I’m an engineer.', 'I’m engineer.', 'I’m the engineer.'],
      correct: 0,
      explain: { en: 'A job takes a / an, and engineer starts with a vowel sound.', uk: 'Професія бере a / an, а engineer починається з голосного звука.' },
      level: 'a1',
      tags: ['articles', 'ua-traps'],
    },
    {
      id: 'ex-articles-basics-6',
      kind: 'gap',
      sentence: 'I have ___ new laptop.',
      answers: ['a'],
      hint: { en: 'look at the very next word', uk: 'дивіться на наступне слово' },
      explain: { en: 'The next word, new, starts with a consonant sound.', uk: 'Наступне слово, new, починається з приголосного звука.' },
      level: 'a1',
      tags: ['articles', 'a-an'],
    },
    {
      id: 'ex-articles-basics-7',
      kind: 'gap',
      sentence: 'We still have ___ old server in the office.',
      answers: ['an'],
      hint: { en: 'look at the very next word', uk: 'дивіться на наступне слово' },
      explain: { en: 'The next word, old, starts with a vowel sound.', uk: 'Наступне слово, old, починається з голосного звука.' },
      level: 'a1',
      tags: ['articles', 'a-an'],
    },
    {
      id: 'ex-articles-basics-8',
      kind: 'gap',
      sentence: 'It’s cold in here. Can you close ___ door, please?',
      answers: ['the'],
      explain: { en: 'The situation makes clear which door.', uk: 'Із ситуації зрозуміло, які саме двері.' },
      level: 'a1',
      tags: ['articles', 'the'],
    },
    {
      id: 'ex-articles-basics-9',
      kind: 'mcq',
      prompt: { en: 'You like all cats, in general. I like ___ cats.', uk: 'Вам подобаються всі коти загалом. I like ___ cats.' },
      options: ['no article', 'the', 'a'],
      correct: 0,
      explain: { en: 'In general, a plural noun has no article: I like cats.', uk: 'Загалом множина не має артикля: I like cats.' },
      level: 'a1',
      tags: ['articles', 'zero-article'],
    },
    {
      id: 'ex-articles-basics-10',
      kind: 'mcq',
      prompt: { en: '___ coffee in this office is terrible.', uk: '___ coffee in this office is terrible.' },
      options: ['The', 'no article', 'A'],
      correct: 0,
      explain: { en: 'in this office tells us which coffee, so it isn’t coffee in general.', uk: 'in this office вказує, яка саме кава, тож це не кава загалом.' },
      level: 'a1',
      tags: ['articles', 'the'],
    },
    {
      id: 'ex-articles-basics-11',
      kind: 'mcq',
      prompt: { en: 'Which sentence is correct?', uk: 'Яке речення правильне?' },
      options: ['This is my laptop.', 'This is the my laptop.', 'This is a my laptop.'],
      correct: 0,
      explain: { en: 'Articles and possessives share one slot before the noun.', uk: 'Артиклі й присвійні слова ділять один слот перед іменником.' },
      level: 'a1',
      tags: ['articles', 'determiners'],
    },
    {
      id: 'ex-articles-basics-12',
      kind: 'gap',
      sentence: 'We need ___ MVP by Friday.',
      answers: ['an'],
      hint: { en: 'say the letter M aloud', uk: 'вимовте літеру M уголос' },
      explain: { en: 'The name of the letter M starts with a vowel sound: “em”.', uk: 'Назва літери M починається з голосного звука: «em».' },
      level: 'a2',
      tags: ['articles', 'a-an'],
    },
    {
      id: 'ex-articles-basics-13',
      kind: 'gap',
      sentence: 'Is there ___ URL I can use?',
      answers: ['a'],
      hint: { en: 'say the letter U aloud', uk: 'вимовте літеру U уголос' },
      explain: { en: 'The name of the letter U starts with the consonant sound /j/: “you”.', uk: 'Назва літери U починається з приголосного звука /j/: «you».' },
      level: 'a2',
      tags: ['articles', 'a-an'],
    },
    {
      id: 'ex-articles-basics-14',
      kind: 'mcq',
      prompt: { en: '«Я знайшов помилку. Помилка у формі входу.»', uk: '«Я знайшов помилку. Помилка у формі входу.»' },
      options: ['I found a bug. The bug is in the login form.', 'I found the bug. A bug is in the login form.', 'I found bug. Bug is in login form.'],
      correct: 0,
      explain: { en: 'New to the listener: a. Now you both know which: the.', uk: 'Нове для слухача: a. Тепер обидва знаєте, яка саме: the.' },
      level: 'a1',
      tags: ['articles', 'first-mention', 'ua-traps'],
    },
    {
      id: 'ex-articles-basics-15',
      kind: 'mcq',
      prompt: { en: 'In which phrase is the pronounced /ðiː/?', uk: 'У якій фразі the вимовляється /ðiː/?' },
      options: ['the apple', 'the team', 'the user'],
      correct: 0,
      explain: { en: 'the is /ðiː/ before a vowel sound. user starts with the consonant sound /j/.', uk: 'the вимовляється /ðiː/ перед голосним звуком. user починається з приголосного /j/.' },
      level: 'a2',
      tags: ['articles', 'pronunciation'],
    },
    {
      id: 'ex-articles-basics-16',
      kind: 'gap',
      sentence: '___ sun is very strong today.',
      answers: ['the'],
      explain: { en: 'There is only one sun.', uk: 'Сонце одне.' },
      level: 'a1',
      tags: ['articles', 'the'],
    },
  ],
  seeAlso: ['m28-articles-advanced', 'm3-nouns-quantifiers', 'm1-be-pronouns', 'm12-comparatives'],
  sources: [
    { title: 'British Council — Articles: a, an, the (A1–A2)', url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2-grammar/articles-a-an-the' },
    { title: 'British Council — Articles: the or no article (A1–A2)', url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2-grammar/articles-the-or-no-article' },
    { title: 'Cambridge Dictionary — A/an and the', url: 'https://dictionary.cambridge.org/us/grammar/british-grammar/a-an-and-the' },
    { title: 'Cambridge Learner’s Dictionary — indefinite article', url: 'https://dictionary.cambridge.org/dictionary/learner-english/indefinite-article' },
  ],
};
