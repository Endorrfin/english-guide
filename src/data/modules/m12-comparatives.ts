import type { Module } from '../types';

/*
 * CHANGED (C3): M12 · Comparatives & superlatives — Section III Core Grammar. Authored EN first, UA
 * second; grammar terms stay English in both languages; examples are US English with a work/dev lean
 * (latency, builds, sprints — engineers compare things all day). Facts verified against Cambridge
 * Grammar (Comparison: adjectives · As … as · Too · Enough · Less or fewer? · Elder, eldest or older,
 * oldest?) and British Council LearnEnglish (Comparative and superlative adjectives · Modifying
 * comparatives).
 * Spine: three relations, three shapes — two things differ → -er / more … than; equal → as … as;
 * one beats the whole group → the -est / the most. Length decides -er vs more; a comparative is
 * never doubled (more better); too means MORE than OK, never just "very".
 */
export const m12: Module = {
  id: 'm12-comparatives',
  num: 12,
  section: 's2-core-grammar',
  order: 1,
  level: 'b1',
  title: { en: 'Comparatives & superlatives', uk: 'Ступені порівняння' },
  tagline: {
    en: 'faster than · as fast as · the fastest · fast enough · too slow — three relations, three shapes, and the traps a Ukrainian speaker walks into: more better, the same like, enough big.',
    uk: 'faster than · as fast as · the fastest · fast enough · too slow — три відношення, три форми і пастки, у які потрапляє україномовний: more better, the same like, enough big.',
  },
  readMins: 16,
  mentalModel: {
    en: 'Every comparison answers one of three questions. **Two things, different?** → comparative + *than*: *faster than, more reliable than*. **Equal (or not)?** → *as … as* / *not as … as*. **One thing against the whole group?** → *the* + superlative: *the fastest, the most reliable*. Word length chooses the ending: short adjectives take **-er / -est**, long ones take **more / most** — never both. And *too / enough* measure against a need: *too slow* = more than is OK, *fast enough* = as much as is needed.',
    uk: 'Кожне порівняння відповідає на одне з трьох питань. **Дві речі, різні?** → comparative + *than*: *faster than, more reliable than*. **Однакові (чи ні)?** → *as … as* / *not as … as*. **Одна річ проти всієї групи?** → *the* + superlative: *the fastest, the most reliable*. Довжина слова обирає закінчення: короткі прикметники беруть **-er / -est**, довгі — **more / most**, ніколи обидва разом. А *too / enough* міряють відносно потреби: *too slow* = більше, ніж прийнятно, *fast enough* = стільки, скільки треба.',
  },
  topics: [
    // ── 1. -ER / MORE ──────────────────────────────────────────────────────
    {
      id: 'er-more',
      title: { en: '-er or more: the length decides', uk: '-er чи more: вирішує довжина' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Ukrainian has two ways too — *«швидш**ий**»* and *«**більш** надійний»* — and English splits the same way, by **length**. **One syllable** → *-er*: *fast → **faster**, cheap → **cheaper***. **Two syllables ending in -y** → *-ier*: *easy → **easier**, busy → **busier***. **Two or more syllables otherwise** → *more*: ***more** stable, **more** reliable, **more** expensive*. Cambridge flags ✕ *interestinger* as the classic error: a long word never takes -er.',
            uk: 'Українська теж має два способи — *«швидш**ий**»* і *«**більш** надійний»*, — і англійська ділить так само, за **довжиною**. **Один склад** → *-er*: *fast → **faster**, cheap → **cheaper***. **Два склади на -y** → *-ier*: *easy → **easier**, busy → **busier***. **Два й більше складів в інших випадках** → *more*: ***more** stable, **more** reliable, **more** expensive*. Cambridge наводить ✕ *interestinger* як класичну помилку: довге слово ніколи не бере -er.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Adjective', uk: 'Прикметник' },
            { en: 'Rule', uk: 'Правило' },
            { en: 'Comparative · superlative', uk: 'Comparative · superlative' },
          ],
          rows: [
            [
              { en: 'fast · cheap · small', uk: 'fast · cheap · small' },
              { en: 'one syllable: + -er / -est', uk: 'один склад: + -er / -est' },
              { en: 'faster · the fastest', uk: 'faster · the fastest' },
            ],
            [
              { en: 'large · safe', uk: 'large · safe' },
              { en: 'ends in -e: + -r / -st', uk: 'закінчується на -e: + -r / -st' },
              { en: 'larger · the largest', uk: 'larger · the largest' },
            ],
            [
              { en: 'big · hot · thin', uk: 'big · hot · thin' },
              { en: 'one vowel + one consonant: double it', uk: 'одна голосна + одна приголосна: подвоїти' },
              { en: 'bigger · the biggest', uk: 'bigger · the biggest' },
            ],
            [
              { en: 'easy · busy · happy', uk: 'easy · busy · happy' },
              { en: 'two syllables, -y → -ier / -iest', uk: 'два склади, -y → -ier / -iest' },
              { en: 'easier · the easiest', uk: 'easier · the easiest' },
            ],
            [
              { en: 'stable · modern · reliable', uk: 'stable · modern · reliable' },
              { en: 'longer words: more / most', uk: 'довші слова: more / most' },
              { en: 'more reliable · the most reliable', uk: 'more reliable · the most reliable' },
            ],
            [
              { en: 'good · bad · far', uk: 'good · bad · far' },
              { en: 'irregular', uk: 'неправильні' },
              { en: 'better · the best · worse · the worst · farther / further', uk: 'better · the best · worse · the worst · farther / further' },
            ],
          ],
          caption: {
            en: 'Spelling per Cambridge and British Council. Adverbs follow the same idea: fast → faster, but quickly → more quickly.',
            uk: 'Правопис за Cambridge і British Council. Прислівники — за тією ж логікою: fast → faster, але quickly → more quickly.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'Never both: “more better”, “more faster”', uk: 'Ніколи обидва: «more better», «more faster»' },
          md: {
            en: 'UA *«більш швидший»* is itself a mistake in Ukrainian — and the English copy is too: ✕ ***more faster** · **more better** · **more easier***. A comparative has **one** marker: *-er* **or** *more*. ✓ *The new build is **faster** · Today’s numbers are **better** · It’s **easier** to test now.* *better* and *worse* are already comparatives.',
            uk: 'UA *«більш швидший»* — помилка й в українській, — і англійська калька теж: ✕ ***more faster** · **more better** · **more easier***. Comparative має **один** маркер: *-er* **або** *more*. ✓ *The new build is **faster** · Today’s numbers are **better** · It’s **easier** to test now.* *better* і *worse* — уже comparative.',
          },
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'How much faster? much · far · a lot · a bit · slightly', uk: 'Наскільки швидше? much · far · a lot · a bit · slightly' },
          md: {
            en: 'A comparative is modified by **much / far / a lot** (big difference) or **a bit / a little / slightly** (small difference) — not by *very*: ✕ *very faster* → ✓ ***much faster** · **far more stable** · **slightly cheaper** · **a bit slower***. In a performance report: *The new query is **much faster** — p95 dropped from 900 to 120 ms.*',
            uk: 'Comparative підсилюють **much / far / a lot** (велика різниця) або **a bit / a little / slightly** (невелика різниця), — але не *very*: ✕ *very faster* → ✓ ***much faster** · **far more stable** · **slightly cheaper** · **a bit slower***. У звіті про продуктивність: *The new query is **much faster** — p95 dropped from 900 to 120 ms.*',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**A few two-syllable adjectives take either form** — *clever, simple, narrow, quiet, friendly*: *simpler / more simple · quieter / more quiet*. The -er form is the more common one; neither is wrong. And after *than*, a pronoun alone is object form in normal speech: *She’s faster **than me*** (formal: *than I am*). Don’t mix them: ✕ *than me am*.',
            uk: '**Кілька двоскладових прикметників беруть обидві форми** — *clever, simple, narrow, quiet, friendly*: *simpler / more simple · quieter / more quiet*. Форма з -er поширеніша; жодна не є помилкою. А після *than* окремий займенник у звичайному мовленні має обʼєктну форму: *She’s faster **than me*** (формально: *than I am*). Не змішуйте: ✕ *than me am*.',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: further / farther, elder / older', uk: 'Дрібний шрифт: further / farther, elder / older' },
          md: {
            en: 'For **distance** both *farther* and *further* work (*the farther / further office*). For **more, additional** only *further*: *Contact us for **further** details · until **further** notice.* *elder / eldest* are used only for family members and only before a noun: *my **elder** sister* — but *She is **older** than me* (✕ *elder than*). *older* works in every case.',
            uk: 'Для **відстані** працюють і *farther*, і *further* (*the farther / further office*). У значенні **ще, додатковий** — лише *further*: *Contact us for **further** details · until **further** notice.* *elder / eldest* уживають лише про членів родини й лише перед іменником: *my **elder** sister* — але *She is **older** than me* (✕ *elder than*). *older* підходить завжди.',
          },
        },
      ],
    },

    // ── 2. AS … AS ─────────────────────────────────────────────────────────
    {
      id: 'as-as',
      title: { en: 'as … as: equal, not equal, twice as', uk: 'as … as: однаково, не так само, удвічі' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'To say two things are **equal**, put the plain adjective between two *as*: *Staging is **as fast as** production.* Negate it to say one falls short: *Staging is**n’t as fast as** production* — a softer, more diplomatic way to say *slower*. Multiply it for ratios: *The new cluster is **twice as fast as** the old one · **three times as expensive as**.* The adjective stays plain — no -er inside *as … as*.',
            uk: 'Щоб сказати, що дві речі **однакові**, поставте звичайний прикметник між двома *as*: *Staging is **as fast as** production.* Заперечте — і це означатиме, що одна не дотягує: *Staging is**n’t as fast as** production* — мʼякший, дипломатичніший спосіб сказати *slower*. Помножте — і отримаєте пропорцію: *The new cluster is **twice as fast as** the old one · **three times as expensive as**.* Прикметник лишається звичайним — жодного -er всередині *as … as*.',
          },
        },
        {
          kind: 'figure',
          fig: 'comparison-scale',
          caption: {
            en: 'One measured picture, four sentences: the fastest · as fast as · much faster than · the slowest. Shorter bar = faster.',
            uk: 'Одна виміряна картинка, чотири речення: the fastest · as fast as · much faster than · the slowest. Коротша смуга = швидше.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Pattern', uk: 'Конструкція' },
            { en: 'Meaning', uk: 'Значення' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'as + adj + as', uk: 'as + adj + as' },
              { en: 'equal', uk: 'однаково' },
              { en: 'The new API is as fast as the old one.', uk: 'The new API is as fast as the old one.' },
            ],
            [
              { en: 'not as + adj + as', uk: 'not as + adj + as' },
              { en: 'less (softer than -er)', uk: 'менше (мʼякше за -er)' },
              { en: 'The mobile app isn’t as stable as the web app.', uk: 'The mobile app isn’t as stable as the web app.' },
            ],
            [
              { en: 'twice / three times as + adj + as', uk: 'twice / three times as + adj + as' },
              { en: 'a ratio', uk: 'пропорція' },
              { en: 'The new cluster is twice as fast as the old one.', uk: 'The new cluster is twice as fast as the old one.' },
            ],
            [
              { en: 'the same (+ noun) as', uk: 'the same (+ noun) as' },
              { en: 'identical', uk: 'ідентичний' },
              { en: 'Prod has the same config as staging.', uk: 'Prod has the same config as staging.' },
            ],
            [
              { en: 'similar to · different from', uk: 'similar to · different from' },
              { en: 'alike · not alike', uk: 'схожий · відмінний' },
              { en: 'Our setup is similar to theirs but different from the docs.', uk: 'Our setup is similar to theirs but different from the docs.' },
            ],
          ],
          caption: {
            en: 'Per Cambridge (As … as). Each pattern has its own fixed partner word: as … as, the same as, similar to, different from.',
            uk: 'За Cambridge (As … as). Кожна конструкція має свого фіксованого «партнера»: as … as, the same as, similar to, different from.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'The UA trap: “the same like”, “as fast than”', uk: 'Пастка україномовних: «the same like», «as fast than»' },
          md: {
            en: 'UA *«такий самий, **як**»* has one *як* for everything; English has a fixed partner per pattern. ✕ *the same **like*** → ✓ *the same **as*** · ✕ *as fast **than*** → ✓ *as fast **as*** · ✕ *faster **as*** → ✓ *faster **than***. And watch the spelling: ***than*** compares, ***then*** is time — ✕ *faster then* is a very common typo, even among native speakers.',
            uk: 'UA *«такий самий, **як**»* має одне *як* на все; англійська має фіксованого «партнера» для кожної конструкції. ✕ *the same **like*** → ✓ *the same **as*** · ✕ *as fast **than*** → ✓ *as fast **as*** · ✕ *faster **as*** → ✓ *faster **than***. І стежте за правописом: ***than*** — порівняння, ***then*** — час; ✕ *faster then* — дуже поширена друкарська помилка навіть у носіїв мови.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Nouns in as … as:** *as much + uncountable + as*, *as many + plural + as*: *We handle **as many requests as** they do, with half the servers · I don’t have **as much time as** I’d like.* For ratios, ***twice as fast as*** is the safe, standard form; ✕ *two times more faster* doubles the comparative and is simply wrong.',
            uk: '**Іменники в as … as:** *as much + незлічуваний + as*, *as many + множина + as*: *We handle **as many requests as** they do, with half the servers · I don’t have **as much time as** I’d like.* Для пропорцій ***twice as fast as*** — безпечна стандартна форма; ✕ *two times more faster* подвоює comparative і просто неправильне.',
          },
        },
      ],
    },

    // ── 3. SUPERLATIVES ────────────────────────────────────────────────────
    {
      id: 'superlatives',
      title: { en: 'Superlatives: the -est of the whole group', uk: 'Superlatives: найбільше з усієї групи' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'A comparative sets one thing against **another**; a superlative sets one against **the whole group** — so there are usually more than two. It almost always takes ***the***, because there is only one winner: ***the fastest** endpoint · **the most reliable** provider · **the best** option.* Strengthen it with ***by far*** or ***easily***: *Postgres is **by far the most popular** choice on our team.*',
            uk: 'Comparative ставить одну річ проти **іншої**; superlative — проти **всієї групи**, тож речей зазвичай більше двох. Він майже завжди бере ***the***, бо переможець лише один: ***the fastest** endpoint · **the most reliable** provider · **the best** option.* Підсилюйте його через ***by far*** або ***easily***: *Postgres is **by far the most popular** choice on our team.*',
          },
        },
        {
          kind: 'compare',
          a: { en: 'in + a place or group', uk: 'in + місце чи група' },
          b: { en: 'of + a period or a plural', uk: 'of + період чи множина' },
          rows: [
            [
              { en: 'Example 1', uk: 'Приклад 1' },
              { en: 'She’s the best engineer in the team.', uk: 'She’s the best engineer in the team.' },
              { en: 'Friday is the busiest day of the week.', uk: 'Friday is the busiest day of the week.' },
            ],
            [
              { en: 'Example 2', uk: 'Приклад 2' },
              { en: 'It’s the biggest data center in Europe.', uk: 'It’s the biggest data center in Europe.' },
              { en: 'This was the hardest bug of all.', uk: 'This was the hardest bug of all.' },
            ],
            [
              { en: 'UA trap', uk: 'Пастка UA' },
              { en: '«найкращий у команді» → in, not of / from', uk: '«найкращий у команді» → in, а не of / from' },
              { en: '«з усіх» → of all', uk: '«з усіх» → of all' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '“the most people” ≠ “most people”', uk: '«the most people» ≠ «most people»' },
          md: {
            en: 'UA *«більшість людей»* is ***most people*** — no *the*, no *of*: ✓ ***Most** developers use Git.* ✕ *The most developers* · ✕ *Most of developers.* Use ***most of*** only before *the / my / these / them*: ***most of the** team · **most of them***. *the most* is the superlative: *Who made **the most** commits?*',
            uk: 'UA *«більшість людей»* — це ***most people***, без *the* і без *of*: ✓ ***Most** developers use Git.* ✕ *The most developers* · ✕ *Most of developers.* ***most of*** — лише перед *the / my / these / them*: ***most of the** team · **most of them***. *the most* — це superlative: *Who made **the most** commits?*',
          },
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: '“one of the best” + plural', uk: '«one of the best» + множина' },
          md: {
            en: 'One member of a top group: ***one of the** + superlative + **plural noun***: *It’s **one of the best tools** I’ve used* (✕ *one of the best tool*). The verb agrees with *one*: *One of the services **is** down.*',
            uk: 'Один із найкращих: ***one of the** + superlative + **іменник у множині***: *It’s **one of the best tools** I’ve used* (✕ *one of the best tool*). Дієслово узгоджується з *one*: *One of the services **is** down.*',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Superlative + Present Perfect + ever** is the fixed frame for “in my whole experience”: *This is **the worst bug I’ve ever seen** · the best talk **I’ve ever heard***. Present Perfect is the standard choice — your experience reaches up to now (see [m10](#/m/m10-perfect-family)); American speech also uses Past Simple here (*the best meal I ever had*). The opposite direction uses ***less / the least***: *a **less risky** plan · **the least expensive** option*.',
            uk: '**Superlative + Present Perfect + ever** — фіксована рамка для «за весь мій досвід»: *This is **the worst bug I’ve ever seen** · the best talk **I’ve ever heard***. Present Perfect — стандартний вибір: ваш досвід сягає теперішнього моменту (див. [m10](#/m/m10-perfect-family)); в американському мовленні тут трапляється й Past Simple (*the best meal I ever had*). Протилежний напрямок — ***less / the least***: *a **less risky** plan · **the least expensive** option*.',
          },
        },
      ],
    },

    // ── 4. TOO / ENOUGH ────────────────────────────────────────────────────
    {
      id: 'too-enough',
      title: { en: 'too and enough: measured against a need', uk: 'too і enough: виміряно відносно потреби' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: '*too* and *enough* don’t compare two things — they compare a thing with **what is needed**. ***too** + adjective* = more than is OK (a problem): *The image is **too big** to upload.* ***adjective + enough*** = as much as needed: *The server is **fast enough** for now.* Both continue naturally with ***to + V1*** or ***for + someone***: *too big **to upload** · not senior **enough for this role***.',
            uk: '*too* і *enough* порівнюють не дві речі, а річ із **тим, що потрібно**. ***too** + прикметник* = більше, ніж прийнятно (проблема): *The image is **too big** to upload.* ***прикметник + enough*** = стільки, скільки треба: *The server is **fast enough** for now.* Обидва природно продовжуються ***to + V1*** або ***for + хтось***: *too big **to upload** · not senior **enough for this role***.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Pattern', uk: 'Конструкція' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'too + adjective / adverb', uk: 'too + прикметник / прислівник' },
              { en: 'The query is too slow. · He talks too fast.', uk: 'The query is too slow. · He talks too fast.' },
            ],
            [
              { en: 'too much + uncountable · too many + plural', uk: 'too much + незлічуваний · too many + множина' },
              { en: 'too much traffic · too many meetings', uk: 'too much traffic · too many meetings' },
            ],
            [
              { en: 'adjective / adverb + enough', uk: 'прикметник / прислівник + enough' },
              { en: 'The test coverage is good enough. · Not fast enough.', uk: 'The test coverage is good enough. · Not fast enough.' },
            ],
            [
              { en: 'enough + noun', uk: 'enough + іменник' },
              { en: 'We don’t have enough memory. · enough time', uk: 'We don’t have enough memory. · enough time' },
            ],
            [
              { en: '… + to + V1 / for + someone', uk: '… + to + V1 / for + хтось' },
              { en: 'It’s too late to change the scope. · simple enough for a junior', uk: 'It’s too late to change the scope. · simple enough for a junior' },
            ],
          ],
          caption: {
            en: 'Per Cambridge (Too · Enough): enough goes AFTER an adjective but BEFORE a noun. Not ✕ too much slow — too goes straight before the adjective.',
            uk: 'За Cambridge (Too · Enough): enough стоїть ПІСЛЯ прикметника, але ПЕРЕД іменником. Не ✕ too much slow — too ставлять одразу перед прикметником.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'too ≠ very: “It’s too good” is a complaint', uk: 'too ≠ very: «It’s too good» — це скарга' },
          md: {
            en: 'UA *«занадто»* and *«дуже»* are distinct, but learners use *too* as an intensifier: *The demo was **too good*** sounds like *so good that it caused a problem*. Cambridge warns against exactly this: *too* means **more than necessary**. For praise use *very / really / extremely*: *The demo was **really good**.* Same with *too much*: ✕ *I like it too much* (as praise) → ✓ *I like it **a lot** / **very much***.',
            uk: 'UA *«занадто»* і *«дуже»* різні, але учні вживають *too* як підсилювач: *The demo was **too good*** звучить як *настільки добре, що це створило проблему*. Cambridge застерігає саме від цього: *too* означає **більше, ніж потрібно**. Для похвали — *very / really / extremely*: *The demo was **really good**.* Те саме з *too much*: ✕ *I like it too much* (як похвала) → ✓ *I like it **a lot** / **very much***.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '“enough big” → “big enough”', uk: '«enough big» → «big enough»' },
          md: {
            en: 'UA puts *«достатньо»* before everything — *«достатньо великий», «достатньо часу»* — but English splits the position: **after** an adjective, **before** a noun. ✕ *The disk isn’t **enough big*** → ✓ *isn’t **big enough*** · ✓ *We have **enough space***. Both in one sentence: *The disk is**n’t big enough** — we need **more space**.*',
            uk: 'UA ставить *«достатньо»* перед усім — *«достатньо великий», «достатньо часу»*, — а англійська розділяє позицію: **після** прикметника, **перед** іменником. ✕ *The disk isn’t **enough big*** → ✓ *isn’t **big enough*** · ✓ *We have **enough space***. Обидва в одному реченні: *The disk is**n’t big enough** — we need **more space**.*',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**less or fewer?** The traditional rule: ***fewer*** with plural countable nouns, ***less*** with uncountable ones — *fewer **bugs**, fewer **meetings** · less **time**, less **traffic***. Cambridge notes that many people now say *less* with plurals too, and some consider it incorrect — so in writing, exams and reports use ***fewer*** with plurals: *This release has **fewer** open issues and uses **less** memory.*',
            uk: '**less чи fewer?** Традиційне правило: ***fewer*** — з іменниками в множині, які можна полічити, ***less*** — з незлічуваними: *fewer **bugs**, fewer **meetings** · less **time**, less **traffic***. Cambridge зазначає, що багато хто тепер уживає *less* і з множиною, а дехто вважає це помилкою, — тож на письмі, в іспитах і звітах беріть ***fewer*** з множиною: *This release has **fewer** open issues and uses **less** memory.*',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**The more …, the more …** links two changes that move together: ***The more** tests we write, **the fewer** bugs we ship · **The sooner**, **the better**.* Both halves start with *the* + a comparative; the second is often a short fixed phrase.',
            uk: '**The more …, the more …** повʼязує дві зміни, що рухаються разом: ***The more** tests we write, **the fewer** bugs we ship · **The sooner**, **the better**.* Обидві половини починаються з *the* + comparative; друга часто — коротка стала фраза.',
          },
        },
      ],
    },
  ],
  keyPoints: [
    {
      en: 'Two things → comparative + than; equal → as … as; the whole group → the + superlative.',
      uk: 'Дві речі → comparative + than; однаково → as … as; уся група → the + superlative.',
    },
    {
      en: 'Short adjectives take -er / -est (faster, easier), long ones more / most (more reliable) — never both: more better ✕.',
      uk: 'Короткі прикметники беруть -er / -est (faster, easier), довгі — more / most (more reliable), ніколи обидва: more better ✕.',
    },
    {
      en: 'Modify comparatives with much / far / a lot / a bit / slightly — not very: much faster.',
      uk: 'Comparative підсилюють much / far / a lot / a bit / slightly — не very: much faster.',
    },
    {
      en: 'Fixed partners: faster than · as fast as · the same as · similar to · different from. than compares, then is time.',
      uk: 'Фіксовані «партнери»: faster than · as fast as · the same as · similar to · different from. than — порівняння, then — час.',
    },
    {
      en: 'Superlative: the best in the team (place / group) · the busiest day of the week (period / plural); most people = «більшість людей».',
      uk: 'Superlative: the best in the team (місце / група) · the busiest day of the week (період / множина); most people = «більшість людей».',
    },
    {
      en: 'too = more than OK (a problem, not “very”); enough goes after an adjective (big enough) but before a noun (enough time).',
      uk: 'too = більше, ніж прийнятно (проблема, а не «дуже»); enough стоїть після прикметника (big enough), але перед іменником (enough time).',
    },
  ],
  pitfalls: [
    {
      title: { en: '“more better”, “more faster”', uk: '«more better», «more faster»' },
      body: {
        en: 'One marker only: -er OR more. better and worse are already comparatives: The new build is faster · Today is better.',
        uk: 'Лише один маркер: -er АБО more. better і worse — уже comparative: The new build is faster · Today is better.',
      },
    },
    {
      title: { en: '“very faster”', uk: '«very faster»' },
      body: {
        en: 'very doesn’t modify comparatives. Use much / far / a lot (big gap) or a bit / slightly (small gap): much faster.',
        uk: 'very не підсилює comparative. Беріть much / far / a lot (велика різниця) або a bit / slightly (невелика): much faster.',
      },
    },
    {
      title: { en: '“the same like”, “faster as”, “faster then”', uk: '«the same like», «faster as», «faster then»' },
      body: {
        en: 'UA «як» has one form; English has fixed partners: the same as · as fast as · faster than. then means time.',
        uk: 'UA «як» має одну форму; англійська — фіксованих «партнерів»: the same as · as fast as · faster than. then означає час.',
      },
    },
    {
      title: { en: '“the best of the team”', uk: '«the best of the team»' },
      body: {
        en: 'A place or group takes in: the best engineer in the team. of goes with a period or a plural: the busiest day of the week, the best of all.',
        uk: 'Місце чи група беруть in: the best engineer in the team. of — з періодом чи множиною: the busiest day of the week, the best of all.',
      },
    },
    {
      title: { en: '“The most people…”, “Most of people…”', uk: '«The most people…», «Most of people…»' },
      body: {
        en: 'UA «більшість людей» = most people. most of only before the / my / them: most of the team.',
        uk: 'UA «більшість людей» = most people. most of — лише перед the / my / them: most of the team.',
      },
    },
    {
      title: { en: '“enough big”', uk: '«enough big»' },
      body: {
        en: 'enough goes after an adjective but before a noun: big enough · enough space.',
        uk: 'enough стоїть після прикметника, але перед іменником: big enough · enough space.',
      },
    },
    {
      title: { en: 'too as praise: “The demo was too good”', uk: 'too як похвала: «The demo was too good»' },
      body: {
        en: 'too = more than is OK — a problem. For praise use very / really: The demo was really good.',
        uk: 'too = більше, ніж прийнятно, — проблема. Для похвали — very / really: The demo was really good.',
      },
    },
  ],
  exercises: [
    {
      id: 'ex-comparatives-1',
      kind: 'gap',
      sentence: 'The new server is ___ than the old one.',
      answers: ['faster'],
      hint: { en: 'fast', uk: 'fast' },
      explain: {
        en: 'One syllable → -er, then than.',
        uk: 'Один склад → -er, потім than.',
      },
      level: 'b1',
      tags: ['comparatives', 'er-more'],
    },
    {
      id: 'ex-comparatives-2',
      kind: 'gap',
      sentence: 'The new API is ___ than the legacy one.',
      answers: ['more reliable'],
      hint: { en: 'reliable', uk: 'reliable' },
      explain: {
        en: 'A long adjective → more + adjective (never reliabler).',
        uk: 'Довгий прикметник → more + прикметник (ніколи не reliabler).',
      },
      level: 'b1',
      tags: ['comparatives', 'er-more'],
    },
    {
      id: 'ex-comparatives-3',
      kind: 'mcq',
      prompt: { en: 'Today’s build is ___ than yesterday’s.', uk: 'Сьогоднішня збірка ___, ніж учорашня.' },
      options: ['more better', 'better', 'gooder'],
      correct: 1,
      explain: {
        en: 'good → better → the best. better is already a comparative — no more.',
        uk: 'good → better → the best. better — уже comparative, more не потрібне.',
      },
      level: 'b1',
      tags: ['comparatives', 'er-more', 'ua-trap'],
    },
    {
      id: 'ex-comparatives-4',
      kind: 'gap',
      sentence: 'Friday was the ___ day of the sprint.',
      answers: ['busiest'],
      hint: { en: 'busy', uk: 'busy' },
      explain: {
        en: 'Two syllables ending in -y → -iest; the whole sprint is the group → the + superlative.',
        uk: 'Два склади на -y → -iest; увесь спринт — це група → the + superlative.',
      },
      level: 'b1',
      tags: ['comparatives', 'superlatives'],
    },
    {
      id: 'ex-comparatives-5',
      kind: 'mcq',
      prompt: { en: 'Our staging server is ___ production.', uk: 'Наш staging-сервер ___ продакшн (однаково швидкий).' },
      options: ['as fast as', 'as fast than', 'so fast than'],
      correct: 0,
      explain: {
        en: 'Equality → as + adjective + as. than belongs to comparatives only.',
        uk: 'Рівність → as + прикметник + as. than — лише з comparative.',
      },
      level: 'b1',
      tags: ['comparatives', 'as-as', 'ua-trap'],
    },
    {
      id: 'ex-comparatives-6',
      kind: 'mcq',
      prompt: { en: 'This laptop isn’t powerful ___ for video editing.', uk: 'Цей ноутбук недостатньо потужний ___ для відеомонтажу.' },
      options: ['enough', 'too', 'very'],
      correct: 0,
      explain: {
        en: 'adjective + enough = as much as needed; not … enough = less than needed.',
        uk: 'прикметник + enough = стільки, скільки треба; not … enough = менше, ніж треба.',
      },
      level: 'b1',
      tags: ['comparatives', 'too-enough'],
    },
    {
      id: 'ex-comparatives-7',
      kind: 'mcq',
      prompt: { en: 'She’s the best developer ___ the team.', uk: 'Вона найкращий розробник ___ команді.' },
      options: ['of', 'in', 'from'],
      correct: 1,
      explain: {
        en: 'A group or place after a superlative → in. of goes with periods and plurals (of the week, of all).',
        uk: 'Група чи місце після superlative → in. of — з періодами й множиною (of the week, of all).',
      },
      level: 'b1',
      tags: ['comparatives', 'superlatives', 'ua-trap'],
    },
    {
      id: 'ex-comparatives-8',
      kind: 'mcq',
      prompt: { en: 'The new design is ___ the old one.', uk: 'Новий дизайн ___ старий (такий самий).' },
      options: ['the same like', 'the same as', 'same like'],
      correct: 1,
      explain: {
        en: 'the same takes as — UA «такий самий, як» tempts like.',
        uk: 'the same бере as — UA «такий самий, як» підштовхує до like.',
      },
      level: 'b1',
      tags: ['comparatives', 'as-as', 'ua-trap'],
    },
    {
      id: 'ex-comparatives-9',
      kind: 'gap',
      sentence: 'This task is ___ big for one sprint — let’s split it.',
      answers: ['too'],
      hint: { en: 'more than is OK', uk: 'більше, ніж прийнятно' },
      explain: {
        en: 'too + adjective = more than is OK, a problem that needs action.',
        uk: 'too + прикметник = більше, ніж прийнятно, — проблема, що потребує дії.',
      },
      level: 'b1',
      tags: ['comparatives', 'too-enough'],
    },
    {
      id: 'ex-comparatives-10',
      kind: 'mcq',
      prompt: { en: 'We don’t have ___ for another feature this sprint.', uk: 'У нас немає ___ на ще одну фічу в цьому спринті.' },
      options: ['time enough', 'enough time', 'too time'],
      correct: 1,
      explain: {
        en: 'enough goes BEFORE a noun (enough time) but AFTER an adjective (big enough).',
        uk: 'enough стоїть ПЕРЕД іменником (enough time), але ПІСЛЯ прикметника (big enough).',
      },
      level: 'b1',
      tags: ['comparatives', 'too-enough'],
    },
    {
      id: 'ex-comparatives-11',
      kind: 'mcq',
      prompt: { en: 'The fix made the page ___ faster.', uk: 'Виправлення зробило сторінку ___ швидшою.' },
      options: ['very', 'much', 'more'],
      correct: 1,
      explain: {
        en: 'Comparatives take much / far / a lot, not very; more faster doubles the comparative.',
        uk: 'Comparative підсилюють much / far / a lot, а не very; more faster подвоює comparative.',
      },
      level: 'b1',
      tags: ['comparatives', 'er-more'],
    },
    {
      id: 'ex-comparatives-12',
      kind: 'gap',
      sentence: 'This is the ___ bug I’ve ever seen.',
      answers: ['worst'],
      hint: { en: 'bad', uk: 'bad' },
      explain: {
        en: 'bad → worse → the worst; superlative + Present Perfect + ever.',
        uk: 'bad → worse → the worst; superlative + Present Perfect + ever.',
      },
      level: 'b1',
      tags: ['comparatives', 'superlatives'],
    },
    {
      id: 'ex-comparatives-13',
      kind: 'mcq',
      prompt: { en: '___ developers use Git every day.', uk: '___ розробників щодня користуються Git (більшість).' },
      options: ['The most', 'Most of', 'Most'],
      correct: 2,
      explain: {
        en: 'UA «більшість» + a general noun = most + noun, with no the and no of.',
        uk: 'UA «більшість» + загальний іменник = most + іменник, без the і без of.',
      },
      level: 'b1',
      tags: ['comparatives', 'superlatives', 'ua-trap'],
    },
    {
      id: 'ex-comparatives-14',
      kind: 'mcq',
      prompt: { en: 'Version 3 is ___ version 2.', uk: 'Версія 3 ___ версію 2 (удвічі швидша).' },
      options: ['twice as fast as', 'two times more faster than', 'twice faster as'],
      correct: 0,
      explain: {
        en: 'A ratio → twice / three times + as … as. more faster doubles the comparative.',
        uk: 'Пропорція → twice / three times + as … as. more faster подвоює comparative.',
      },
      level: 'b1',
      tags: ['comparatives', 'as-as'],
    },
    {
      id: 'ex-comparatives-15',
      kind: 'mcq',
      prompt: { en: 'Which sentence is correct?', uk: 'Яке речення правильне?' },
      options: [
        'The bug is more easier to reproduce now.',
        'The bug is easier to reproduce now.',
        'The bug is more easy to reproduce now.',
      ],
      correct: 1,
      explain: {
        en: 'Two syllables ending in -y → -ier: easier. more easier doubles the marker.',
        uk: 'Два склади на -y → -ier: easier. more easier подвоює маркер.',
      },
      level: 'b1',
      tags: ['comparatives', 'er-more'],
    },
    {
      id: 'ex-comparatives-16',
      kind: 'mcq',
      prompt: { en: 'We need ___ meetings and more focus time.', uk: 'Нам потрібно ___ зустрічей і більше часу на зосереджену роботу.' },
      options: ['less', 'fewer', 'lesser'],
      correct: 1,
      explain: {
        en: 'meetings is a plural countable noun → fewer (the safe form in writing). less goes with uncountables: less time.',
        uk: 'meetings — злічуваний іменник у множині → fewer (безпечна форма на письмі). less — з незлічуваними: less time.',
      },
      level: 'b1',
      tags: ['comparatives', 'less-fewer'],
    },
  ],
  seeAlso: ['m10-perfect-family', 'm16-gerund-infinitive', 'm22-requests-politeness', 'm34-confusables'],
  sources: [
    {
      title: 'Cambridge Dictionary — Comparison: adjectives (bigger, biggest, more interesting)',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/comparison-adjectives-bigger-biggest-more-interesting',
    },
    {
      title: 'Cambridge Dictionary — As … as',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/as-as',
    },
    {
      title: 'Cambridge Dictionary — Too',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/too',
    },
    {
      title: 'Cambridge Dictionary — Enough',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/enough',
    },
    {
      title: 'Cambridge Dictionary — Less or fewer?',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/less-or-fewer',
    },
    {
      title: 'Cambridge Dictionary — Elder, eldest or older, oldest?',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/elder-eldest-or-older-oldest',
    },
    {
      title: 'British Council LearnEnglish — Comparative and superlative adjectives',
      url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/comparative-superlative-adjectives',
    },
    {
      title: 'British Council LearnEnglish — Modifying comparatives',
      url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/modifying-comparatives',
    },
  ],
};
