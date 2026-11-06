import type { Module } from '../types';

/*
 * CHANGED (F2): M5 · Prepositions of time & place — Section I Foundations, wave F2 (figure in-on-at-funnel; no sim: a
 * preposition is largely a lexical fact, nothing to compute). Authored EN first, UA second; US English base.
 * Facts read in full on British Council — Prepositions of time: at, in, on (clock times, mealtimes; "at night" vs "in
 * the night"; "We can also say on weekends or on the weekend. This is more common in American English"; parts of the
 * day, months, seasons, years; days and dates) and Prepositions of place (in = inside a bigger space, a car / a taxi;
 * on = a surface, floors, some public transport, lines, islands; at = a place for an activity, addresses, exact
 * positions). Cambridge returns HTTP 403 to the fetcher, so it was read through search extracts: At, on and in (time)
 * and At, on and in (place) (a position seen as a point; on for a particular weekend; AmE on the weekend).
 * NOT confirmed on a learner site this session (stated without attribution): all of the movement topic (to vs at, go
 * home, arrive in / at, enter, reach; BC has no page and the search returned nothing on arrive); no preposition before
 * this / next / last; in + a period = after that time; on time vs in time; by vs until; on / in the team; all the
 * verb and adjective + preposition pairs in common-collocations; the funnel as a teaching device; the Ukrainian contrasts.
 * No overlap: in the hospital and other institutions are m28; phrasal verbs are m32; word partners in general are m33.
 */
export const m5: Module = {
  id: 'm5-prepositions-time-place',
  num: 5,
  section: 's1-foundations',
  order: 5,
  level: 'a2',
  title: { en: 'Prepositions of time & place', uk: 'Прийменники часу і місця' },
  tagline: {
    en: 'In July, on Monday, at noon; in the kitchen, not «on the kitchen». «На» and «в» don’t map onto on and in, so here is what does: a funnel, and the pairs worth learning whole.',
    uk: 'In July, on Monday, at noon; in the kitchen, а не «on the kitchen». «На» і «в» не відповідають on та in, тож ось що працює: лійка і пари, які варто вчити цілими.',
  },
  readMins: 17,
  mentalModel: {
    en: 'Don’t translate «на» and «в»: they don’t map onto *on* and *in*. Picture a **funnel from big to exact**. ***in*** is a big container: a year, a month, a country, a room. ***on*** is a day or a surface. ***at*** is an exact point: a clock time, an address, a place you go to do something. English also asks one more question that Ukrainian blurs: are you **there** (*at*, *in*) or **heading there** (*to*)? What the funnel can’t explain, such as *depends **on***, is a fixed pair: learn it with its word.',
    uk: 'Не перекладайте «на» і «в»: вони не відповідають *on* та *in*. Уявіть **лійку від великого до точного**. ***in*** — великий простір: рік, місяць, країна, кімната. ***on*** — день або поверхня. ***at*** — точна точка: година, адреса, місце, куди йдуть щось робити. Англійська ще й ставить питання, яке українська розмиває: ви **там** (*at*, *in*) чи **прямуєте туди** (*to*)? Те, чого лійка не пояснює, як-от *depends **on***, — стала пара: вчіть її разом зі словом.',
  },
  topics: [
    // ── 1. TIME ────────────────────────────────────────────────────────────
    {
      id: 'in-on-at-time',
      title: { en: 'in, on, at for time', uk: 'in, on, at для часу' },
      blocks: [
        {
          kind: 'figure',
          fig: 'in-on-at-funnel',
          caption: {
            en: 'One funnel for time and place, from big to exact. It’s a memory aid: the exceptions are in the tables below.',
            uk: 'Одна лійка для часу і місця, від великого до точного. Це підказка для памʼяті: винятки — у таблицях нижче.',
          },
        },
        {
          kind: 'table',
          caption: { en: 'Time: US English is the base; the British form is marked.', uk: 'Час: основа — американська англійська; британська форма позначена.' },
          head: [
            { en: 'Word', uk: 'Слово' },
            { en: 'Used with', uk: 'З чим вживається' },
            { en: 'Examples', uk: 'Приклади' },
          ],
          rows: [
            [
              { en: 'in', uk: 'in' },
              { en: 'months, seasons, years, parts of the day', uk: 'місяці, пори року, роки, частини дня' },
              { en: 'in July · in the summer · in 2026 · in the morning', uk: 'in July · in the summer · in 2026 · in the morning' },
            ],
            [
              { en: 'on', uk: 'on' },
              { en: 'days and dates', uk: 'дні й дати' },
              { en: 'on Monday · on May 5 · on my birthday', uk: 'on Monday · on May 5 · on my birthday' },
            ],
            [
              { en: 'at', uk: 'at' },
              { en: 'clock times, mealtimes, some phrases', uk: 'години, час їжі, деякі вислови' },
              { en: 'at 7:30 · at noon · at lunchtime · at night', uk: 'at 7:30 · at noon · at lunchtime · at night' },
            ],
            [
              { en: 'weekend', uk: 'weekend' },
              { en: 'US: on · UK: at', uk: 'US: on · UK: at' },
              { en: 'on the weekend · BrE: at the weekend', uk: 'on the weekend · BrE: at the weekend' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'A day beats a part of the day', uk: 'День перемагає частину дня' },
          md: {
            en: '*In the morning*, but ***on** Monday morning*: once a specific day is named, it’s *on*. And *at night* (the whole night, in general), but *in the night* for a moment during it: *I woke up **in the night***. No other part of the day takes *at*: ✕ *at the morning*.',
            uk: '*In the morning*, але ***on** Monday morning*: щойно названо конкретний день, вживається *on*. І *at night* (уся ніч, загалом), але *in the night* про момент протягом неї: *I woke up **in the night***. Жодна інша частина дня не бере *at*: ✕ *at the morning*.',
          },
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'next, last, this, every, today: no preposition', uk: 'next, last, this, every, today: без прийменника' },
          md: {
            en: '«У наступний понеділок», «цього тижня» use a preposition or a case in Ukrainian, but English needs nothing: ✓ *See you **next** Monday* · ✓ *We ship **this** week* · ✓ *We met **last** year* · ✓ *We deploy **every** day* · ✓ *I’ll do it **tomorrow***. ✕ *on next Monday* · ✕ *in this week* · ✕ *at tomorrow*.',
            uk: '«У наступний понеділок», «цього тижня» мають в українській прийменник або відмінок, а в англійській — ні: ✓ *See you **next** Monday* · ✓ *We ship **this** week* · ✓ *We met **last** year* · ✓ *We deploy **every** day* · ✓ *I’ll do it **tomorrow***. ✕ *on next Monday* · ✕ *in this week* · ✕ *at tomorrow*.',
          },
        },
        {
          kind: 'compare',
          a: { en: 'by: the deadline', uk: 'by: дедлайн' },
          b: { en: 'until: it lasts up to then', uk: 'until: триває до тієї миті' },
          rows: [
            [
              { en: '«до пʼятниці»', uk: '«до пʼятниці»' },
              { en: 'Send the report by Friday.', uk: 'Send the report by Friday.' },
              { en: 'I’m on vacation until Friday.', uk: 'I’m on vacation until Friday.' },
            ],
            [
              { en: 'What happens', uk: 'Що відбувається' },
              { en: 'One action, at any moment before then.', uk: 'Одна дія, у будь-який момент до того.' },
              { en: 'A state that continues, then stops.', uk: 'Стан, що триває, а потім припиняється.' },
            ],
          ],
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**in two days, on time, in time.** *in* + a period means “that long from now”, not “inside that period”: *I’ll reply **in** two days* is about «через два дні». «Протягом» is usually *within* or *over*: *within two days*. *On time* means “at the planned moment”: *The train was **on time***. *In time* means “early enough”: *We arrived **in time** for lunch*.',
            uk: '**in two days, on time, in time.** *in* + період означає «через стільки часу», а не «протягом»: *I’ll reply **in** two days* — це «через два дні». «Протягом» — зазвичай *within* або *over*: *within two days*. *On time* означає «у запланований момент»: *The train was **on time***. *In time* означає «вчасно, ще не запізно»: *We arrived **in time** for lunch*.',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: special days and British holidays', uk: 'Дрібний шрифт: особливі дні й британські свята' },
          md: {
            en: 'Cambridge: British English uses *at* for holidays and weekends in general, but *on* for one particular day or weekend: *at Christmas*, but *on Christmas Day* and *on the last weekend in July*. American English usually has *on the weekend*, and many speakers also say *on weekends*.',
            uk: 'Cambridge: британська англійська вживає *at* для свят і вихідних загалом, але *on* для одного конкретного дня чи вікенду: *at Christmas*, але *on Christmas Day* і *on the last weekend in July*. В американській англійській зазвичай *on the weekend*, а також часто *on weekends*.',
          },
        },
      ],
    },

    // ── 2. PLACE ───────────────────────────────────────────────────────────
    {
      id: 'in-on-at-place',
      title: { en: 'in, on, at for place', uk: 'in, on, at для місця' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'British Council: *in* is a place inside a bigger space, such as a box, a house, a city or a country. *On* is a location on a surface, and also a line, such as a street or a river. *At* is a place for a specific activity, an address or an exact position. Cambridge describes *at* as a location we see as a point. So the same building can take either: *I’m **at** the office* (that’s where I am, doing what you do there) and *It’s cold **in** the office* (inside it).',
            uk: 'British Council: *in* — місце всередині більшого простору, як-от коробка, будинок, місто чи країна. *On* — місце на поверхні, а також лінія, як-от вулиця чи річка. *At* — місце для певної діяльності, адреса або точна позиція. Cambridge описує *at* як місце, яке ми бачимо як точку. Тому та сама будівля може брати будь-який: *I’m **at** the office* (там я перебуваю, роблю те, що там роблять) і *It’s cold **in** the office* (усередині).',
          },
        },
        {
          kind: 'table',
          caption: { en: 'Place: what each word covers.', uk: 'Місце: що охоплює кожне слово.' },
          head: [
            { en: 'Word', uk: 'Слово' },
            { en: 'The idea', uk: 'Ідея' },
            { en: 'Examples', uk: 'Приклади' },
          ],
          rows: [
            [
              { en: 'in', uk: 'in' },
              { en: 'inside a space, a city, a country', uk: 'усередині простору, міста, країни' },
              { en: 'in the box · in the kitchen · in Kyiv · in Ukraine', uk: 'in the box · in the kitchen · in Kyiv · in Ukraine' },
            ],
            [
              { en: 'on', uk: 'on' },
              { en: 'a surface, a line, a floor, an island', uk: 'поверхня, лінія, поверх, острів' },
              { en: 'on the desk · on the wall · on Main Street · on the fifth floor', uk: 'on the desk · on the wall · on Main Street · on the fifth floor' },
            ],
            [
              { en: 'at', uk: 'at' },
              { en: 'a point, an address, an activity', uk: 'точка, адреса, діяльність' },
              { en: 'at the door · at 15 Main Street · at work · at school', uk: 'at the door · at 15 Main Street · at work · at school' },
            ],
          ],
        },
        {
          kind: 'table',
          caption: { en: '«На» and «в» in everyday Ukrainian, and what English actually says.', uk: '«На» і «в» у повсякденній українській, і що насправді каже англійська.' },
          head: [
            { en: 'Ukrainian', uk: 'Українська' },
            { en: 'English', uk: 'Англійська' },
            { en: 'Not', uk: 'Не' },
          ],
          rows: [
            [
              { en: 'на кухні', uk: 'на кухні' },
              { en: 'in the kitchen', uk: 'in the kitchen' },
              { en: '✕ on the kitchen', uk: '✕ on the kitchen' },
            ],
            [
              { en: 'на роботі', uk: 'на роботі' },
              { en: 'at work', uk: 'at work' },
              { en: '✕ on work', uk: '✕ on work' },
            ],
            [
              { en: 'на зустрічі', uk: 'на зустрічі' },
              { en: 'at the meeting · in a meeting', uk: 'at the meeting · in a meeting' },
              { en: '✕ on the meeting', uk: '✕ on the meeting' },
            ],
            [
              { en: 'на фото', uk: 'на фото' },
              { en: 'in the photo', uk: 'in the photo' },
              { en: '✕ on the photo', uk: '✕ on the photo' },
            ],
            [
              { en: 'на вулиці холодно', uk: 'на вулиці холодно' },
              { en: 'It’s cold outside.', uk: 'It’s cold outside.' },
              { en: '✕ on the street it’s cold', uk: '✕ on the street it’s cold' },
            ],
            [
              { en: 'в автобусі · в машині', uk: 'в автобусі · в машині' },
              { en: 'on the bus · in the car', uk: 'on the bus · in the car' },
              { en: 'less usual for a passenger: in the bus', uk: 'менш типово про пасажира: in the bus' },
            ],
            [
              { en: 'в інтернеті', uk: 'в інтернеті' },
              { en: 'on the internet · online', uk: 'on the internet · online' },
              { en: '✕ in internet', uk: '✕ in internet' },
            ],
          ],
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Why the bus and the car differ.** British Council: *on* for some types of public transport, *in* for a car or a taxi. The usual explanation is that you can stand and walk on a bus, train or plane, while you sit inside a car. **At work** and other activities: *at work, at school, at the supermarket* are about what you do there. On the screen, the page and in the app, English pictures a surface or a space: *on the screen*, *on page 5*, *in the app*.',
            uk: '**Чому автобус і машина різні.** British Council: *on* для деяких видів громадського транспорту, *in* для машини чи таксі. Звичайне пояснення: автобусом, поїздом чи літаком можна ходити, а в машині ви сидите всередині. **At work** та інші діяльності: *at work, at school, at the supermarket* — про те, що ви там робите. На екрані, сторінці й у застосунку англійська уявляє поверхню або простір: *on the screen*, *on page 5*, *in the app*.',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: on the team, in the corner', uk: 'Дрібний шрифт: on the team, in the corner' },
          md: {
            en: 'American English says *on the team* where British English often has *in the team*. *In the corner* is inside a room, and *at the corner* or *on the corner* is on the street. The everyday uses of *hospital*, *school* and *prison* with and without *the* are in [m28](#/m/m28-articles-advanced).',
            uk: 'Американська англійська каже *on the team*, а британська часто — *in the team*. *In the corner* — усередині кімнати, а *at the corner* чи *on the corner* — на вулиці. Повсякденне вживання *hospital*, *school* і *prison* з *the* і без нього — у [m28](#/m/m28-articles-advanced).',
          },
        },
      ],
    },

    // ── 3. MOVEMENT ────────────────────────────────────────────────────────
    {
      id: 'movement',
      title: { en: 'Movement: to, into, from, and arrive', uk: 'Рух: to, into, from і arrive' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Ukrainian uses the same «в» and «на» for being there and for going there, with a change of case: «в офісі», «в офіс». English splits this into two words: *at the office* is where you are, *to the office* is where you’re going. Keep the difference and half of the mistakes disappear: ✓ *I’m **at** the office* · ✓ *I’m going **to** the office*.',
            uk: 'Українська вживає те саме «в» і «на» і для перебування, і для руху, змінюючи відмінок: «в офісі», «в офіс». Англійська ділить це на два слова: *at the office* — де ви є, *to the office* — куди йдете. Збережіть цю різницю, і половина помилок зникне: ✓ *I’m **at** the office* · ✓ *I’m going **to** the office*.',
          },
        },
        {
          kind: 'table',
          caption: { en: 'The words of movement, and the verbs that take none.', uk: 'Слова руху і дієслова, яким вони не потрібні.' },
          head: [
            { en: 'Meaning', uk: 'Значення' },
            { en: 'Word', uk: 'Слово' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'to a destination', uk: 'до місця призначення' },
              { en: 'to', uk: 'to' },
              { en: 'We flew to Warsaw.', uk: 'We flew to Warsaw.' },
            ],
            [
              { en: 'starting point', uk: 'звідки' },
              { en: 'from', uk: 'from' },
              { en: 'It’s a long way from Kyiv to Lviv.', uk: 'It’s a long way from Kyiv to Lviv.' },
            ],
            [
              { en: 'entering, leaving', uk: 'усередину, назовні' },
              { en: 'into · out of', uk: 'into · out of' },
              { en: 'She walked into the room. · He got out of the car.', uk: 'She walked into the room. · He got out of the car.' },
            ],
            [
              { en: 'no to at all', uk: 'зовсім без to' },
              { en: 'home · here · there', uk: 'home · here · there' },
              { en: 'I’m going home. · Come here. · We went there.', uk: 'I’m going home. · Come here. · We went there.' },
            ],
            [
              { en: 'a direct object', uk: 'прямий додаток' },
              { en: 'enter · reach · visit', uk: 'enter · reach · visit' },
              { en: 'She entered the room. · We reached Lviv. · I visited Kyiv.', uk: 'She entered the room. · We reached Lviv. · I visited Kyiv.' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'arrive never takes to', uk: 'arrive ніколи не бере to' },
          md: {
            en: '«Приїхати в Київ», «приїхати в аеропорт» are both «в», but English chooses by size: *arrive **in*** a city or a country, and *arrive **at*** a building or a point: ✓ *We arrived **in** Kyiv* · ✓ *We arrived **at** the airport* · ✕ *We arrived to Kyiv*. With *home* there’s no preposition at all: ✓ *I arrived home*. To avoid the choice, use *get to*: *We got to Kyiv at noon*.',
            uk: '«Приїхати в Київ», «приїхати в аеропорт» — обидва з «в», але англійська вибирає за розміром: *arrive **in*** про місто чи країну й *arrive **at*** про будівлю чи точку: ✓ *We arrived **in** Kyiv* · ✓ *We arrived **at** the airport* · ✕ *We arrived to Kyiv*. Із *home* прийменника немає взагалі: ✓ *I arrived home*. Щоб уникнути вибору, вживайте *get to*: *We got to Kyiv at noon*.',
          },
        },
      ],
    },

    // ── 4. COMMON COLLOCATIONS ─────────────────────────────────────────────
    {
      id: 'common-collocations',
      title: { en: 'Fixed pairs: learn the word with its preposition', uk: 'Сталі пари: вчіть слово разом із прийменником' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'After a verb or an adjective the preposition usually has no logic you can derive, and the Ukrainian one often misleads. So store the pair as one unit: not *depend*, but *depend on*. These are the pairs where Ukrainian leads you astray most often. For more word partners, see the [Collocations](#/collocations) tab and [m33](#/m/m33-collocations).',
            uk: 'Після дієслова чи прикметника прийменник зазвичай не можна вивести логічно, а український часто вводить в оману. Тож зберігайте пару як одне ціле: не *depend*, а *depend on*. Це пари, у яких українська збиває найчастіше. Більше партнерів слів — у вкладці [Collocations](#/collocations) і в [m33](#/m/m33-collocations).',
          },
        },
        {
          kind: 'table',
          caption: { en: 'Pairs where Ukrainian suggests another preposition, or none.', uk: 'Пари, де українська підказує інший прийменник або жодного.' },
          head: [
            { en: 'Ukrainian', uk: 'Українська' },
            { en: 'English', uk: 'Англійська' },
            { en: 'Not', uk: 'Не' },
          ],
          rows: [
            [
              { en: 'залежить від', uk: 'залежить від' },
              { en: 'It depends on the budget.', uk: 'It depends on the budget.' },
              { en: '✕ depends from', uk: '✕ depends from' },
            ],
            [
              { en: 'чекати на', uk: 'чекати на' },
              { en: 'I’m waiting for a reply.', uk: 'I’m waiting for a reply.' },
              { en: '✕ waiting a reply', uk: '✕ waiting a reply' },
            ],
            [
              { en: 'слухати (когось)', uk: 'слухати (когось)' },
              { en: 'Listen to me.', uk: 'Listen to me.' },
              { en: '✕ Listen me', uk: '✕ Listen me' },
            ],
            [
              { en: 'відповідальний за', uk: 'відповідальний за' },
              { en: 'She’s responsible for the release.', uk: 'She’s responsible for the release.' },
              { en: '✕ responsible about the release', uk: '✕ responsible about the release' },
            ],
            [
              { en: 'добре вміти (щось)', uk: 'добре вміти (щось)' },
              { en: 'She’s good at debugging.', uk: 'She’s good at debugging.' },
              { en: '✕ good in debugging', uk: '✕ good in debugging' },
            ],
            [
              { en: 'цікавитися', uk: 'цікавитися' },
              { en: 'I’m interested in data.', uk: 'I’m interested in data.' },
              { en: '✕ interested about data', uk: '✕ interested about data' },
            ],
            [
              { en: 'одружений з', uk: 'одружений з' },
              { en: 'She’s married to a doctor.', uk: 'She’s married to a doctor.' },
              { en: '✕ married with a doctor', uk: '✕ married with a doctor' },
            ],
            [
              { en: 'обговорювати', uk: 'обговорювати' },
              { en: 'We need to discuss the plan.', uk: 'We need to discuss the plan.' },
              { en: '✕ discuss about the plan', uk: '✕ discuss about the plan' },
            ],
          ],
        },
        {
          kind: 'table',
          caption: { en: 'Short fixed phrases with a preposition.', uk: 'Короткі сталі вислови з прийменником.' },
          head: [
            { en: 'Idea', uk: 'Ідея' },
            { en: 'Phrase', uk: 'Вислів' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'A language', uk: 'Мова' },
              { en: 'in English', uk: 'in English' },
              { en: 'Write it in English.', uk: 'Write it in English.' },
            ],
            [
              { en: 'A channel', uk: 'Канал звʼязку' },
              { en: 'by email · on the phone', uk: 'by email · on the phone' },
              { en: 'Send it by email. · She’s on the phone.', uk: 'Send it by email. · She’s on the phone.' },
            ],
            [
              { en: 'Transport', uk: 'Транспорт' },
              { en: 'by car · by train · on foot', uk: 'by car · by train · on foot' },
              { en: 'I go by train. · We came on foot.', uk: 'I go by train. · We came on foot.' },
            ],
            [
              { en: 'For instance', uk: 'Наприклад' },
              { en: 'for example', uk: 'for example' },
              { en: 'Use a tool, for example ESLint.', uk: 'Use a tool, for example ESLint.' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'How to learn them', uk: 'Як їх вчити' },
          md: {
            en: 'Learn each pair in one short sentence about your own life: *It depends on the budget.* · *I’m good at SQL.* The preposition then comes with the sentence, so you don’t have to choose it. Note the common verbs that take **no** preposition, too: *discuss, call, enter, reach, answer*: ✓ *Call me* · ✕ *Call to me*.',
            uk: 'Вчіть кожну пару в одному короткому реченні зі свого життя: *It depends on the budget.* · *I’m good at SQL.* Тоді прийменник приходить разом із реченням, і вибирати його не доводиться. Запамʼятайте й часті дієслова, які **не** беруть прийменника: *discuss, call, enter, reach, answer*: ✓ *Call me* · ✕ *Call to me*.',
          },
        },
      ],
    },
  ],
  keyPoints: [
    {
      en: 'Don’t translate «на» and «в». Picture a funnel: in is a big space, on a day or a surface, at an exact point.',
      uk: 'Не перекладайте «на» і «в». Уявіть лійку: in — великий простір, on — день чи поверхня, at — точна точка.',
    },
    {
      en: 'Time: in July, in the morning; on Monday, on Monday morning; at 7:30, at night; on the weekend (BrE at).',
      uk: 'Час: in July, in the morning; on Monday, on Monday morning; at 7:30, at night; on the weekend (BrE at).',
    },
    {
      en: 'No preposition before next, last, this, every, today or tomorrow: See you next Monday.',
      uk: 'Без прийменника перед next, last, this, every, today чи tomorrow: See you next Monday.',
    },
    {
      en: 'Place: in the kitchen, in Kyiv; on the desk, on Main Street; at the door, at work.',
      uk: 'Місце: in the kitchen, in Kyiv; on the desk, on Main Street; at the door, at work.',
    },
    {
      en: 'Being there is at or in; going there is to. And home takes no to: I’m going home.',
      uk: 'Бути там — at чи in; рухатися туди — to. А home не бере to: I’m going home.',
    },
    {
      en: 'arrive in a city or a country, arrive at a building or a point, and never arrive to.',
      uk: 'arrive in про місто чи країну, arrive at про будівлю чи точку й ніколи arrive to.',
    },
    {
      en: 'by Friday is a deadline; until Friday is a state that lasts up to then.',
      uk: 'by Friday — дедлайн; until Friday — стан, що триває до тієї миті.',
    },
    {
      en: 'After verbs and adjectives, learn the pair whole: depend on, wait for, good at. Some verbs take none: discuss the plan.',
      uk: 'Після дієслів і прикметників вчіть пару цілою: depend on, wait for, good at. Деякі дієслова не беруть прийменника: discuss the plan.',
    },
  ],
  pitfalls: [
    {
      title: { en: '“on the kitchen”, “on work”', uk: '«on the kitchen», «on work»' },
      body: { en: '«На» is not on: in the kitchen, at work.', uk: '«На» — це не on: in the kitchen, at work.' },
    },
    {
      title: { en: '“on next Monday”, “in this week”', uk: '«on next Monday», «in this week»' },
      body: { en: 'No preposition before next or this: next Monday, this week.', uk: 'Без прийменника перед next чи this: next Monday, this week.' },
    },
    {
      title: { en: '“in Monday”, “on July”', uk: '«in Monday», «on July»' },
      body: { en: 'Days take on, months take in: on Monday, in July.', uk: 'Дні беруть on, місяці — in: on Monday, in July.' },
    },
    {
      title: { en: '“I’m going to home.”', uk: '«I’m going to home.»' },
      body: { en: 'home takes no to: I’m going home.', uk: 'home не бере to: I’m going home.' },
    },
    {
      title: { en: '“We arrived to Kyiv.”', uk: '«We arrived to Kyiv.»' },
      body: { en: 'arrive never takes to: We arrived in Kyiv. Or: We got to Kyiv.', uk: 'arrive ніколи не бере to: We arrived in Kyiv. Або: We got to Kyiv.' },
    },
    {
      title: { en: '“It depends from the budget.”', uk: '«It depends from the budget.»' },
      body: { en: '«Від» is not from here: It depends on the budget.', uk: '«Від» тут — не from: It depends on the budget.' },
    },
    {
      title: { en: '“We need to discuss about it.”', uk: '«We need to discuss about it.»' },
      body: { en: 'discuss takes a direct object: We need to discuss it.', uk: 'discuss бере прямий додаток: We need to discuss it.' },
    },
    {
      title: { en: '“Send it until Friday.”', uk: '«Send it until Friday.»' },
      body: { en: 'One action with a deadline takes by: Send it by Friday.', uk: 'Одна дія з дедлайном бере by: Send it by Friday.' },
    },
  ],
  exercises: [
    {
      id: 'ex-prepositions-time-place-1',
      kind: 'gap',
      sentence: 'The meeting is ___ 9:30.',
      answers: ['at'],
      explain: { en: 'A clock time is an exact point: at.', uk: 'Година — точна точка: at.' },
      level: 'a2',
      tags: ['prepositions', 'time'],
    },
    {
      id: 'ex-prepositions-time-place-2',
      kind: 'gap',
      sentence: 'We ship ___ Monday.',
      answers: ['on'],
      explain: { en: 'Days take on.', uk: 'Дні беруть on.' },
      level: 'a2',
      tags: ['prepositions', 'time'],
    },
    {
      id: 'ex-prepositions-time-place-3',
      kind: 'gap',
      sentence: 'I was born ___ 1990.',
      answers: ['in'],
      explain: { en: 'Years take in.', uk: 'Роки беруть in.' },
      level: 'a2',
      tags: ['prepositions', 'time'],
    },
    {
      id: 'ex-prepositions-time-place-4',
      kind: 'gap',
      sentence: 'I work best ___ the morning.',
      answers: ['in'],
      explain: { en: 'Parts of the day take in.', uk: 'Частини дня беруть in.' },
      level: 'a2',
      tags: ['prepositions', 'time'],
    },
    {
      id: 'ex-prepositions-time-place-5',
      kind: 'mcq',
      prompt: { en: 'We’ll talk ___ Monday morning.', uk: 'We’ll talk ___ Monday morning.' },
      options: ['on', 'in', 'at'],
      correct: 0,
      explain: { en: 'Once a day is named, the phrase takes on.', uk: 'Щойно названо день, вислів бере on.' },
      level: 'a2',
      tags: ['prepositions', 'time'],
    },
    {
      id: 'ex-prepositions-time-place-6',
      kind: 'mcq',
      prompt: { en: '«До зустрічі наступного тижня.»', uk: '«До зустрічі наступного тижня.»' },
      options: ['See you next week.', 'See you on next week.', 'See you in next week.'],
      correct: 0,
      explain: { en: 'No preposition before next.', uk: 'Без прийменника перед next.' },
      level: 'a2',
      tags: ['prepositions', 'time', 'ua-traps'],
    },
    {
      id: 'ex-prepositions-time-place-7',
      kind: 'gap',
      sentence: 'She’s ___ work right now.',
      answers: ['at'],
      explain: { en: 'A place for an activity takes at: at work.', uk: 'Місце діяльності бере at: at work.' },
      level: 'a2',
      tags: ['prepositions', 'place'],
    },
    {
      id: 'ex-prepositions-time-place-8',
      kind: 'mcq',
      prompt: { en: '«Він на кухні.»', uk: '«Він на кухні.»' },
      options: ['He’s in the kitchen.', 'He’s on the kitchen.', 'He’s at kitchen.'],
      correct: 0,
      explain: { en: 'A room is a space you’re inside: in.', uk: 'Кімната — простір, у якому ви всередині: in.' },
      level: 'a2',
      tags: ['prepositions', 'place', 'ua-traps'],
    },
    {
      id: 'ex-prepositions-time-place-9',
      kind: 'gap',
      sentence: 'My office is ___ the fifth floor.',
      answers: ['on'],
      explain: { en: 'Floors take on.', uk: 'Поверхи беруть on.' },
      level: 'a2',
      tags: ['prepositions', 'place'],
    },
    {
      id: 'ex-prepositions-time-place-10',
      kind: 'mcq',
      prompt: { en: '«Я їду додому.»', uk: '«Я їду додому.»' },
      options: ['I’m going home.', 'I’m going to home.', 'I’m going at home.'],
      correct: 0,
      explain: { en: 'home takes no to.', uk: 'home не бере to.' },
      level: 'a2',
      tags: ['prepositions', 'movement', 'ua-traps'],
    },
    {
      id: 'ex-prepositions-time-place-11',
      kind: 'gap',
      sentence: 'We arrived ___ Kyiv at noon.',
      answers: ['in'],
      explain: { en: 'A city takes in after arrive.', uk: 'Місто після arrive бере in.' },
      level: 'a2',
      tags: ['prepositions', 'movement'],
    },
    {
      id: 'ex-prepositions-time-place-12',
      kind: 'gap',
      sentence: 'We arrived ___ the airport at noon.',
      answers: ['at'],
      explain: { en: 'A building or a point takes at after arrive.', uk: 'Будівля чи точка після arrive бере at.' },
      level: 'a2',
      tags: ['prepositions', 'movement'],
    },
    {
      id: 'ex-prepositions-time-place-13',
      kind: 'mcq',
      prompt: { en: '«Це залежить від бюджету.»', uk: '«Це залежить від бюджету.»' },
      options: ['It depends on the budget.', 'It depends from the budget.', 'It depends of the budget.'],
      correct: 0,
      explain: { en: 'A fixed pair: depend on.', uk: 'Стала пара: depend on.' },
      level: 'a2',
      tags: ['prepositions', 'collocations', 'ua-traps'],
    },
    {
      id: 'ex-prepositions-time-place-14',
      kind: 'gap',
      sentence: 'I’m waiting ___ a reply.',
      answers: ['for'],
      explain: { en: 'A fixed pair: wait for.', uk: 'Стала пара: wait for.' },
      level: 'a2',
      tags: ['prepositions', 'collocations'],
    },
    {
      id: 'ex-prepositions-time-place-15',
      kind: 'mcq',
      prompt: { en: 'Which sentence is correct?', uk: 'Яке речення правильне?' },
      options: ['We need to discuss the plan.', 'We need to discuss about the plan.', 'We need to discuss on the plan.'],
      correct: 0,
      explain: { en: 'discuss takes a direct object, with no preposition.', uk: 'discuss бере прямий додаток, без прийменника.' },
      level: 'a2',
      tags: ['prepositions', 'collocations', 'ua-traps'],
    },
    {
      id: 'ex-prepositions-time-place-16',
      kind: 'gap',
      sentence: 'She’s good ___ debugging.',
      answers: ['at'],
      explain: { en: 'A fixed pair: good at.', uk: 'Стала пара: good at.' },
      level: 'a2',
      tags: ['prepositions', 'collocations'],
    },
    {
      id: 'ex-prepositions-time-place-17',
      kind: 'mcq',
      prompt: { en: 'A deadline: please send the report ___ Friday.', uk: 'Дедлайн: please send the report ___ Friday.' },
      options: ['by', 'until', 'to'],
      correct: 0,
      explain: { en: 'One action with a deadline takes by. until is for a state that lasts up to then.', uk: 'Одна дія з дедлайном бере by. until — для стану, що триває до тієї миті.' },
      level: 'a2',
      tags: ['prepositions', 'time', 'ua-traps'],
    },
  ],
  seeAlso: ['m33-collocations', 'm28-articles-advanced', 'm32-phrasal-verbs-system', 'm4-questions-negatives'],
  sources: [
    { title: 'British Council — Prepositions of time: at, in, on (A1–A2)', url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2-grammar/prepositions-of-time-at-in-on' },
    { title: 'British Council — Prepositions of place (A1–A2)', url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/prepositions-place' },
    { title: 'Cambridge Dictionary — At, on and in (time)', url: 'https://dictionary.cambridge.org/grammar/british-grammar/at-on-and-in-time' },
    { title: 'Cambridge Dictionary — At, on and in (place)', url: 'https://dictionary.cambridge.org/grammar/british-grammar/at-on-and-in-place' },
  ],
};
