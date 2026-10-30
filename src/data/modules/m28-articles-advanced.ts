import type { Module } from '../types';

/*
 * CHANGED (A3): M28 · Articles: the hard cases — Section V Advanced Grammar, wave A3, the section's
 * SIGNATURE module (★ article-tree: a decision tree that drops the article into the sentence, TokenMorph
 * family). Not a basics module — m2-articles-basics (Section I) owns a/an vs the at A1; this one starts
 * where the basics stop: abstract and generic nouns, geography and institutions, the idiomatic zero
 * article, and the a-vs-the nuances. Authored EN first, UA second; grammar terms stay English in both
 * languages; American English base (owner decision, A3) with the British differences marked.
 * Facts verified against British Council LearnEnglish (Articles: 'the' or no article — bed / work /
 * home, school / university / prison / hospital, the visiting exception, place names, United, of-
 * universities · The definite article — only one, already mentioned, the kind (the wolf, the heart),
 * instruments, the poor, plural and United/Kingdom/Republic country names, rivers / seas / oceans /
 * ranges / island groups · The indefinite article — a/an by sound, not spelling: a university, an hour)
 * and Cambridge (A/an and the — the activity, not the building · Place names · Learner's Dictionary,
 * hospital: in hospital UK / in the hospital US).
 * Spine: an article answers ONE question for the listener — can you tell which one? Five questions,
 * always in the same order, settle every case; the order is the lesson (a routine phrase or a name
 * decides before "which one?" is even asked).
 */
export const m28: Module = {
  id: 'm28-articles-advanced',
  num: 28,
  section: 's4-advanced-grammar',
  order: 6,
  level: 'b2',
  signature: true,
  title: { en: 'Articles: the hard cases', uk: 'Артиклі: складні випадки' },
  tagline: {
    en: 'Trust is hard to rebuild · the Hudson but Lake Tahoe · in prison but at the prison · the smartphone changed everything — the five questions that decide every article.',
    uk: 'Trust is hard to rebuild · the Hudson, але Lake Tahoe · in prison, але at the prison · the smartphone changed everything — пʼять питань, що вирішують кожен артикль.',
  },
  readMins: 24,
  mentalModel: {
    en: 'Ukrainian has no articles, so the instinct is either to drop them or to add *the* “to be safe”. Both come from treating articles as decoration. They are not: **an article answers one question for the listener — *can you tell which one?*** *the* = yes, you can (it was mentioned, there is only one, a phrase says which, a superlative picks it out). *a / an* = one of many, you can’t yet. **∅** = I mean the stuff or the kind **in general** (*Trust takes years*). Two families skip the question entirely: **routine phrases**, where the place stands for what happens there (*in prison · at school · by train · at lunch*), and **names**, whose article is fixed by their type (*the Hudson*, but *Lake Tahoe*). So ask five questions, **always in this order**: routine phrase? → a name? → does the listener know which one? → one countable thing? → the whole kind? The first “yes” ends the walk.',
    uk: 'В українській артиклів немає, тож інстинкт — або пропускати їх, або додавати *the* «про всяк випадок». Обидва походять від погляду на артиклі як на прикрасу. А це не прикраса: **артикль відповідає слухачеві на одне питання — *чи можете ви сказати, який саме?*** *the* = так, можете (його згадували, він єдиний, фраза каже який, superlative його виділяє). *a / an* = один із багатьох, поки ні. **∅** = я про речовину чи вид **загалом** (*Trust takes years*). Дві родини взагалі оминають це питання: **сталі фрази**, де місце означає те, що там відбувається (*in prison · at school · by train · at lunch*), і **назви**, чий артикль задано їхнім типом (*the Hudson*, але *Lake Tahoe*). Тож ставте пʼять питань **завжди в цьому порядку**: стала фраза? → назва? → слухач знає, який саме? → одна злічувана річ? → увесь вид? Перше «так» завершує шлях.',
  },
  topics: [
    // ── 1. ABSTRACT & GENERIC ──────────────────────────────────────────────
    {
      id: 'abstract-generic',
      title: { en: 'Abstract and generic nouns: in general vs this one', uk: 'Абстрактні й родові іменники: загалом vs саме цей' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Most article errors at B2 are not about *a* vs *the* — they are about **∅ vs *the***. An uncountable or plural noun used **in general** takes no article: ***Trust** is hard to rebuild* · ***Engineers** hate vague tickets* · ***Coffee** keeps the team alive.* The moment the noun means **a particular** one — usually because a phrase after it says which — *the* comes in: ***The** trust our users had in us* · ***The** engineers on this team* · ***The** coffee in our office is awful* (British Council: for general statements, a plural or uncountable noun with no article).',
            uk: 'Більшість помилок з артиклями на B2 — не про *a* vs *the*, а про **∅ vs *the***. Незлічуваний іменник чи іменник у множині **в загальному значенні** — без артикля: ***Trust** is hard to rebuild* · ***Engineers** hate vague tickets* · ***Coffee** keeps the team alive.* Щойно іменник означає **конкретне** — зазвичай тому, що фраза після нього каже, яке саме, — зʼявляється *the*: ***The** trust our users had in us* · ***The** engineers on this team* · ***The** coffee in our office is awful* (British Council: для загальних тверджень — множина чи незлічуваний іменник без артикля).',
          },
        },
        {
          kind: 'sim',
          sim: 'article-tree',
          caption: {
            en: 'Article Tree: pick a case and a sentence (optionally guess first). The five questions light up one by one, each with the reason for its answer; at the leaf the article drops into the slot — or, for ∅, the empty slot fades and the words close the gap. The Same noun, two contexts track morphs one noun between two sentences and names the fact that flipped the article.',
            uk: 'Article Tree: оберіть випадок і речення (можна спершу вгадати). Пʼять питань загоряються по черзі, кожне з причиною відповіді; у листку артикль падає в слот — або, для ∅, порожній слот зникає, і слова змикаються. Режим «Той самий іменник, два контексти» переносить іменник між двома реченнями й називає факт, який змінив артикль.',
          },
        },
        {
          kind: 'compare',
          a: { en: '∅ — in general', uk: '∅ — загалом' },
          b: { en: 'the — this particular one', uk: 'the — саме цей' },
          rows: [
            [
              { en: 'Abstract', uk: 'Абстрактне' },
              { en: 'Life is too short for flaky tests.', uk: 'Life is too short for flaky tests.' },
              { en: 'The life of a freelancer is unpredictable.', uk: 'The life of a freelancer is unpredictable.' },
            ],
            [
              { en: 'Uncountable', uk: 'Незлічуване' },
              { en: 'Documentation saves onboarding time.', uk: 'Documentation saves onboarding time.' },
              { en: 'The documentation for this API is out of date.', uk: 'The documentation for this API is out of date.' },
            ],
            [
              { en: 'Plural', uk: 'Множина' },
              { en: 'Users don’t read release notes.', uk: 'Users don’t read release notes.' },
              { en: 'The users we interviewed loved the dark mode.', uk: 'The users we interviewed loved the dark mode.' },
            ],
            [
              { en: 'The test', uk: 'Перевірка' },
              { en: 'Can you add “in general”? Then ∅.', uk: 'Можна додати «загалом»? Тоді ∅.' },
              { en: 'Can you ask “which?” and answer it? Then the.', uk: 'Можна спитати «який?» і відповісти? Тоді the.' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '“The life is short” — the safety-the trap', uk: '«The life is short» — пастка «the про всяк випадок»' },
          md: {
            en: 'UA speakers who have learned that “English nouns need an article” often over-correct: ✕ *The life is short* · ✕ *The technology changes fast* · ✕ *The security is everyone’s job.* All three mean the thing in general → no article. Ask: *which life? which technology?* If there is no answer in the sentence, there is no *the*.',
            uk: 'Україномовні, які засвоїли, що «англійському іменнику потрібен артикль», часто перевиправляють: ✕ *The life is short* · ✕ *The technology changes fast* · ✕ *The security is everyone’s job.* Усі три — про річ загалом → без артикля. Спитайте: *яке життя? яка технологія?* Якщо в реченні відповіді немає — немає й *the*.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Generic form', uk: 'Родова форма' },
            { en: 'Example', uk: 'Приклад' },
            { en: 'Feel', uk: 'Відтінок' },
          ],
          rows: [
            [
              { en: '∅ + plural', uk: '∅ + множина' },
              { en: 'Smartphones changed how people read the news.', uk: 'Smartphones changed how people read the news.' },
              { en: 'the everyday default', uk: 'звичайний варіант за замовчуванням' },
            ],
            [
              { en: 'the + singular', uk: 'the + однина' },
              { en: 'The smartphone changed how people read the news.', uk: 'The smartphone changed how people read the news.' },
              { en: 'the invention / species as one idea — formal', uk: 'винахід / вид як одне поняття — формально' },
            ],
            [
              { en: 'a / an + singular', uk: 'a / an + однина' },
              { en: 'A smartphone needs a charger.', uk: 'A smartphone needs a charger.' },
              { en: 'any single one — true of each member', uk: 'будь-який один — правда для кожного' },
            ],
          ],
          caption: {
            en: 'British Council (The definite article): all three can carry a generic meaning — the wolf is not really a dangerous animal = wolves are not really dangerous animals.',
            uk: 'British Council (The definite article): усі три можуть мати родове значення — the wolf is not really a dangerous animal = wolves are not really dangerous animals.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Where generic *the* lives.** Inventions and technologies (*the printing press, the smartphone*), species (*the wolf*), body organs (*the heart pumps blood*) and musical instruments (*She plays **the** piano*) — all on the British Council list. Also groups named by an adjective: ***the** poor, **the** elderly, **the** unemployed* — always plural in meaning (*The elderly **are**…*).',
            uk: '**Де живе родове *the*.** Винаходи й технології (*the printing press, the smartphone*), біологічні види (*the wolf*), органи тіла (*the heart pumps blood*) і музичні інструменти (*She plays **the** piano*) — усе це в списку British Council. А ще групи, названі прикметником: ***the** poor, **the** elderly, **the** unemployed* — завжди зі значенням множини (*The elderly **are**…*).',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: the “of” phrase is not automatic', uk: 'Дрібний шрифт: фраза з «of» не діє автоматично' },
          md: {
            en: 'A phrase after the noun usually triggers *the* — but only if it narrows it to one: ***the** history of Unix* (one history) vs *a history of violence* (one of many possible). And a classifying *of* keeps ∅ with abstract nouns in titles and headings: *Principles **of** Software Design*. Test the meaning, not the word *of*.',
            uk: 'Фраза після іменника зазвичай вмикає *the* — але лише якщо звужує його до одного: ***the** history of Unix* (одна історія) vs *a history of violence* (одна з можливих). А класифікаційне *of* зберігає ∅ з абстрактними іменниками в назвах і заголовках: *Principles **of** Software Design*. Перевіряйте зміст, а не слово *of*.',
          },
        },
      ],
    },

    // ── 2. GEOGRAPHY & INSTITUTIONS ────────────────────────────────────────
    {
      id: 'geography-institutions',
      title: { en: 'Geography and institutions: names with and without the', uk: 'Географія й установи: назви з the і без' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Names do not ask “which one?” — a name already identifies. Their article is fixed by **the type of name**, and English splits the types in a way you simply learn: most names take **nothing** (*Ukraine, Seattle, Europe, Lake Tahoe, Mount Rainier, Stanford University*), while a closed set of types takes ***the*** (*the Hudson, the Pacific, the Rockies, the Bahamas, the Netherlands, the United States, the University of Texas*).',
            uk: 'Назви не питають «який саме?» — назва вже ідентифікує. Їхній артикль задано **типом назви**, і англійська ділить типи так, що їх просто треба вивчити: більшість назв — **без артикля** (*Ukraine, Seattle, Europe, Lake Tahoe, Mount Rainier, Stanford University*), а закрита група типів бере ***the*** (*the Hudson, the Pacific, the Rockies, the Bahamas, the Netherlands, the United States, the University of Texas*).',
          },
        },
        {
          kind: 'table',
          head: [
            { en: '∅ — no article', uk: '∅ — без артикля' },
            { en: 'the', uk: 'the' },
          ],
          rows: [
            [
              { en: 'continents: Europe, Asia', uk: 'континенти: Europe, Asia' },
              { en: 'rivers: the Hudson, the Dnipro, the Nile', uk: 'річки: the Hudson, the Dnipro, the Nile' },
            ],
            [
              { en: 'most countries: Ukraine, Poland, Canada', uk: 'більшість країн: Ukraine, Poland, Canada' },
              { en: 'plural names: the Netherlands, the Philippines', uk: 'назви в множині: the Netherlands, the Philippines' },
            ],
            [
              { en: 'cities and states: Kyiv, Seattle, Texas', uk: 'міста й штати: Kyiv, Seattle, Texas' },
              { en: 'United / Kingdom / Republic: the United States, the Czech Republic', uk: 'United / Kingdom / Republic: the United States, the Czech Republic' },
            ],
            [
              { en: 'single lakes and mountains: Lake Tahoe, Mount Rainier', uk: 'окремі озера й гори: Lake Tahoe, Mount Rainier' },
              { en: 'ranges and island groups: the Rockies, the Bahamas', uk: 'хребти й групи островів: the Rockies, the Bahamas' },
            ],
            [
              { en: 'universities named “X University”: Stanford University', uk: 'університети «X University»: Stanford University' },
              { en: 'names built on of: the University of Texas', uk: 'назви з of: the University of Texas' },
            ],
            [
              { en: 'companies and people: Google, Stripe, Anna', uk: 'компанії й люди: Google, Stripe, Anna' },
              { en: 'oceans and seas: the Pacific, the Black Sea', uk: 'океани й моря: the Pacific, the Black Sea' },
            ],
          ],
          caption: {
            en: 'British Council (Articles: \'the\' or no article; The definite article). The left column is the default; the right column is the list to memorize.',
            uk: 'British Council (Articles: \'the\' or no article; The definite article). Ліва колонка — правило за замовчуванням; права — список, який варто запамʼятати.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'Ukraine, not “the Ukraine”', uk: 'Ukraine, а не «the Ukraine»' },
          md: {
            en: '*the Ukraine* is an outdated form from the time the name was treated as a region; for the independent country, the standard name is ***Ukraine*** — a one-word country name with no article, like *Poland* or *Canada*. It is worth getting right in every email signature and slide.',
            uk: '*the Ukraine* — застаріла форма з часів, коли назву сприймали як регіон; для незалежної країни стандартна назва — ***Ukraine***: назва країни з одного слова без артикля, як *Poland* чи *Canada*. Варто писати правильно в кожному підписі й на кожному слайді.',
          },
        },
        {
          kind: 'prose',
          md: {
            en: '**Institutions** behave like a routine phrase when you go there **for their purpose** — as a student, a patient, a prisoner, a worshipper: *at **school**, in **prison**, in **church**, go to **college*** (AmE). Visit the building for another reason and it is just a building: *I went to **the** school to meet his teacher* · *She goes to **the** prison every week to teach coding* (British Council: *the* if someone is just visiting the place).',
            uk: '**Установи** поводяться як стала фраза, коли туди йдуть **за призначенням** — як студент, пацієнт, увʼязнений, вірянин: *at **school**, in **prison**, in **church**, go to **college*** (AmE). Прийдіть у будівлю з іншою метою — і це просто будівля: *I went to **the** school to meet his teacher* · *She goes to **the** prison every week to teach coding* (British Council: *the*, якщо людина лише відвідує місце).',
          },
        },
        {
          kind: 'compare',
          a: { en: 'American English (this guide)', uk: 'Американська англійська (цей посібник)' },
          b: { en: 'British English', uk: 'Британська англійська' },
          rows: [
            [
              { en: 'A patient', uk: 'Пацієнт' },
              { en: 'She spent a week in the hospital.', uk: 'She spent a week in the hospital.' },
              { en: 'She spent a week in hospital.', uk: 'She spent a week in hospital.' },
            ],
            [
              { en: 'Studying', uk: 'Навчання' },
              { en: 'He’s in college. / He goes to college.', uk: 'He’s in college. / He goes to college.' },
              { en: 'He’s at university.', uk: 'He’s at university.' },
            ],
            [
              { en: 'Same in both', uk: 'Однаково в обох' },
              { en: 'at school · in prison · at work · go to bed', uk: 'at school · in prison · at work · go to bed' },
              { en: 'at school · in prison · at work · go to bed', uk: 'at school · in prison · at work · go to bed' },
            ],
          ],
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**The routine family.** The same logic covers **bed, work, home** (*go to bed, be at work, go home* — British Council), **meals** (*at lunch, after dinner, skip breakfast* — but *the lunch with the client*, a particular meal) and **by + transport** (*by train, by car, by bus* — but *on the 8:15 train, in my car*). In each case the noun names an activity, not a thing you could point at.',
            uk: '**Родина сталих фраз.** Та сама логіка діє для **bed, work, home** (*go to bed, be at work, go home* — British Council), **прийомів їжі** (*at lunch, after dinner, skip breakfast* — але *the lunch with the client*, конкретний обід) і **by + транспорт** (*by train, by car, by bus* — але *on the 8:15 train, in my car*). У кожному випадку іменник називає діяльність, а не річ, на яку можна вказати.',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: buildings and organizations', uk: 'Дрібний шрифт: будівлі й організації' },
          md: {
            en: 'Named buildings have no reliable rule — the British Council team says so plainly: *the Pentagon, the Empire State Building* but *Buckingham Palace, Westminster Abbey*. Organizations with a common-noun core take *the* (*the United Nations, the European Union*), acronyms read as words take none (*NASA, UNICEF*). When in doubt, check the organization’s own website.',
            uk: 'Для назв будівель надійного правила немає — команда British Council каже це прямо: *the Pentagon, the Empire State Building*, але *Buckingham Palace, Westminster Abbey*. Організації з загальною назвою в основі беруть *the* (*the United Nations, the European Union*), абревіатури, що читаються як слова, — ні (*NASA, UNICEF*). Якщо сумніваєтеся — перевірте сайт самої організації.',
          },
        },
      ],
    },

    // ── 3. IDIOMATIC ZERO ──────────────────────────────────────────────────
    {
      id: 'idiomatic-zero',
      title: { en: 'The idiomatic zero article', uk: 'Ідіоматичний нульовий артикль' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Beyond institutions, English has fixed phrases where a singular countable noun appears **bare** — the article was worn away long ago, and adding it back sounds foreign: *at **night**, by **mistake**, on **purpose**, in **person**, on **foot**, in **charge** of, at **risk**, out of **date**, in **time**, on **time**, by **hand**, face to **face**, day by **day**.* These are learned as chunks, not reasoned out.',
            uk: 'Окрім установ, в англійській є сталі фрази, де злічуваний іменник в однині стоїть **голий** — артикль стерся давно, і повернути його означає звучати як іноземець: *at **night**, by **mistake**, on **purpose**, in **person**, on **foot**, in **charge** of, at **risk**, out of **date**, in **time**, on **time**, by **hand**, face to **face**, day by **day**.* Їх вивчають цілими блоками, а не виводять логікою.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Family', uk: 'Родина' },
            { en: 'Bare (fixed)', uk: 'Без артикля (стало)' },
            { en: 'With an article — the meaning changes', uk: 'З артиклем — змінюється зміст' },
          ],
          rows: [
            [
              { en: 'by + means', uk: 'by + засіб' },
              { en: 'We sent it by email.', uk: 'We sent it by email.' },
              { en: 'It’s in the email I sent on Monday.', uk: 'It’s in the email I sent on Monday.' },
            ],
            [
              { en: 'meals', uk: 'прийоми їжі' },
              { en: 'Let’s talk at lunch.', uk: 'Let’s talk at lunch.' },
              { en: 'The lunch with the client went well.', uk: 'The lunch with the client went well.' },
            ],
            [
              { en: 'time phrases', uk: 'фрази часу' },
              { en: 'The jobs run at night.', uk: 'The jobs run at night.' },
              { en: 'It crashed during the night of the release.', uk: 'It crashed during the night of the release.' },
            ],
            [
              { en: 'manner', uk: 'спосіб' },
              { en: 'Let’s meet in person.', uk: 'Let’s meet in person.' },
              { en: 'She is the person in charge.', uk: 'She is the person in charge.' },
            ],
            [
              { en: 'state', uk: 'стан' },
              { en: 'The docs are out of date.', uk: 'The docs are out of date.' },
              { en: 'The date of the release moved.', uk: 'The date of the release moved.' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'Two nouns in a pair drop both articles', uk: 'Два іменники в парі втрачають обидва артиклі' },
          md: {
            en: 'Paired nouns work as one fixed unit and lose the article: *from **start** to **finish**, **day** and **night**, **step** by **step**, **side** by **side**, **husband** and **wife**.* The same nouns alone need one: *the start of the sprint*.',
            uk: 'Іменники в парі працюють як одна стала одиниця й втрачають артикль: *from **start** to **finish**, **day** and **night**, **step** by **step**, **side** by **side**, **husband** and **wife**.* Ті самі іменники поодинці його потребують: *the start of the sprint*.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'Headlines, tickets and slides drop articles — emails do not', uk: 'Заголовки, тікети й слайди без артиклів — листи з ними' },
          md: {
            en: '*Fix login bug on mobile* · *Server down in EU region* — headline style deletes articles on purpose. Do not carry it into full sentences: ✕ *Please review PR before release* → ✓ *Please review **the** PR before **the** release.* Ukrainian has nothing to delete, so the slide style leaks easily.',
            uk: '*Fix login bug on mobile* · *Server down in EU region* — стиль заголовків навмисно викидає артиклі. Не переносьте його в повні речення: ✕ *Please review PR before release* → ✓ *Please review **the** PR before **the** release.* В українській викидати нічого, тож стиль слайдів легко просочується.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Jobs and roles.** A role held by one person at a time can go bare after *appoint*, *elect* and *become*: *She was appointed **head** of engineering* · *He was elected **chair** of the committee.* An ordinary job keeps *a*: *She is **an** engineer* · *He works as **a** designer* — never ✕ *She is engineer*, a classic error for speakers of article-less languages like Ukrainian.',
            uk: '**Професії й ролі.** Роль, яку одночасно обіймає одна людина, може бути без артикля після *appoint*, *elect* і *become*: *She was appointed **head** of engineering* · *He was elected **chair** of the committee.* Звичайна професія зберігає *a*: *She is **an** engineer* · *He works as **a** designer* — ніколи ✕ *She is engineer*, класична помилка носіїв мов без артиклів, як-от української.',
          },
        },
      ],
    },

    // ── 4. A VS THE: THE NUANCE ────────────────────────────────────────────
    {
      id: 'a-vs-the-nuance',
      title: { en: 'a vs the: the nuance', uk: 'a vs the: нюанси' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'At B2 the *a / the* choice is rarely about grammar and almost always about **what the listener already knows**. First mention → *a*; every later mention → *the*: *We hired **a** contractor. **The** contractor finished early.* But “known” is wider than “mentioned”: *the* also covers what is unique in the situation (*Can you restart **the** server?* — the one we both mean), what a phrase defines (*the bug **in the login flow***), and what a superlative or *first / only / same / next* picks out (*the fastest build, the only option*).',
            uk: 'На B2 вибір *a / the* рідко стосується граматики й майже завжди — **того, що слухач уже знає**. Перша згадка → *a*; кожна наступна → *the*: *We hired **a** contractor. **The** contractor finished early.* Але «відоме» ширше, ніж «згадане»: *the* охоплює й те, що єдине в ситуації (*Can you restart **the** server?* — той, про який ми обоє думаємо), те, що визначає фраза (*the bug **in the login flow***), і те, що виділяє superlative чи *first / only / same / next* (*the fastest build, the only option*).',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Why the listener knows', uk: 'Чому слухач знає' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'mentioned before', uk: 'згадували раніше' },
              { en: 'We hired a contractor. The contractor finished early.', uk: 'We hired a contractor. The contractor finished early.' },
            ],
            [
              { en: 'unique in the situation', uk: 'єдиний у ситуації' },
              { en: 'Can you restart the server? · The CEO joined the call.', uk: 'Can you restart the server? · The CEO joined the call.' },
            ],
            [
              { en: 'defined by a phrase after it', uk: 'визначений фразою після нього' },
              { en: 'The bug in the login flow is fixed.', uk: 'The bug in the login flow is fixed.' },
            ],
            [
              { en: 'superlative / first / only / same', uk: 'superlative / first / only / same' },
              { en: 'This is the fastest build we’ve had all year.', uk: 'This is the fastest build we’ve had all year.' },
            ],
            [
              { en: 'shared world (systems, services)', uk: 'спільний світ (системи, сервіси)' },
              { en: 'I read it on the internet. · Call the police.', uk: 'I read it on the internet. · Call the police.' },
            ],
          ],
          caption: {
            en: 'British Council (The definite article): only one · already mentioned · the listener knows which · superlatives · systems and services (the train, the radio, the police).',
            uk: 'British Council (The definite article): єдиний · уже згадано · слухач знає, який · superlatives · системи й сервіси (the train, the radio, the police).',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'a / an: listen, don’t look', uk: 'a / an: слухайте, а не дивіться' },
          md: {
            en: 'The choice follows the **sound** of the next word, not its first letter (British Council): ***an** hour, **an** honest estimate* (silent h) · ***a** university, **a** user, **a** European team* (a /j/ sound) · ***an** MVP, **an** SLA, **an** API* (letter names that start with a vowel sound: em, es, ay) · ***a** URL, **a** UX review* (you).',
            uk: 'Вибір іде за **звуком** наступного слова, а не за першою літерою (British Council): ***an** hour, **an** honest estimate* (німе h) · ***a** university, **a** user, **a** European team* (звук /j/) · ***an** MVP, **an** SLA, **an** API* (назви літер, що починаються з голосного: em, es, ay) · ***a** URL, **a** UX review* (you).',
          },
        },
        {
          kind: 'compare',
          a: { en: 'a — one of many', uk: 'a — один із багатьох' },
          b: { en: 'the — the one', uk: 'the — той самий' },
          rows: [
            [
              { en: 'Bug report', uk: 'Звіт про баг' },
              { en: 'I found a bug in checkout. (one of possibly several)', uk: 'I found a bug in checkout. (один із, можливо, кількох)' },
              { en: 'I found the bug in checkout. (the one we were hunting)', uk: 'I found the bug in checkout. (той, який ми шукали)' },
            ],
            [
              { en: 'Meetings', uk: 'Зустрічі' },
              { en: 'Can we set up a call? (any call)', uk: 'Can we set up a call? (якийсь дзвінок)' },
              { en: 'Can we move the call? (the one in the calendar)', uk: 'Can we move the call? (той, що в календарі)' },
            ],
            [
              { en: 'Roles', uk: 'Ролі' },
              { en: 'She is a lead on the project. (one of the leads)', uk: 'She is a lead on the project. (одна з лідів)' },
              { en: 'She is the lead on the project. (the only one)', uk: 'She is the lead on the project. (єдина)' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'senior',
          title: { en: '“I found the bug” is a status update', uk: '«I found the bug» — це статус-апдейт' },
          md: {
            en: 'In a stand-up, *a* and *the* carry real information. *I found **a** bug* opens a new thread; *I found **the** bug* closes one everybody was waiting on. Ukrainian signals this with word order or *той самий*; English does it with one short word — so the wrong article can mislead the team.',
            uk: 'На стендапі *a* і *the* несуть реальну інформацію. *I found **a** bug* відкриває нову тему; *I found **the** bug* закриває ту, на яку всі чекали. Українська передає це порядком слів чи словами «той самий»; англійська — одним коротким словом, тож хибний артикль може ввести команду в оману.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Describing with a: the classifying article.** *a* also classifies something as a member of a type, even when it is specific: *That was **a** brilliant talk* (a talk of the brilliant kind) · *Kyiv is **a** city that never sleeps* · *It’s **a** known issue.* Here *a* does not mean “unknown” — it means “one of this kind”.',
            uk: '**Опис через a: класифікувальний артикль.** *a* також відносить щось до певного типу, навіть коли йдеться про конкретне: *That was **a** brilliant talk* (доповідь блискучого типу) · *Kyiv is **a** city that never sleeps* · *It’s **a** known issue.* Тут *a* означає не «невідоме», а «одне з такого типу».',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: a + name, the + name', uk: 'Дрібний шрифт: a + імʼя, the + імʼя' },
          md: {
            en: 'Names can take articles when they stop being plain names: ***a** Mr. Kowalski called* (someone of that name, I don’t know him) · *That’s not **the** Linus Torvalds, is it?* (the famous one — stressed /ðiː/) · *She’s **a** real Steve Jobs* (a person of that type) · ***the** Kowalskis* (the whole family — British Council: *the Obamas*).',
            uk: 'Імена можуть брати артиклі, коли перестають бути просто іменами: ***a** Mr. Kowalski called* (якийсь чоловік із таким прізвищем, я його не знаю) · *That’s not **the** Linus Torvalds, is it?* (той самий, відомий — наголошене /ðiː/) · *She’s **a** real Steve Jobs* (людина такого типу) · ***the** Kowalskis* (уся родина — British Council: *the Obamas*).',
          },
        },
      ],
    },
  ],
  keyPoints: [
    {
      en: 'An article answers one question for the listener: can you tell which one? the = yes · a / an = one of many, not yet · ∅ = in general.',
      uk: 'Артикль відповідає слухачеві на одне питання: чи можете ви сказати, який саме? the = так · a / an = один із багатьох, поки ні · ∅ = загалом.',
    },
    {
      en: 'Five questions, always in this order: routine phrase? → a name? → which one is known? → one countable thing? → the whole kind?',
      uk: 'Пʼять питань, завжди в цьому порядку: стала фраза? → назва? → відомо, який саме? → одна злічувана річ? → увесь вид?',
    },
    {
      en: 'Abstract, uncountable and plural nouns in a general sense take no article; a phrase that says which one brings the in.',
      uk: 'Абстрактні, незлічувані й множинні іменники в загальному значенні — без артикля; фраза, що каже, який саме, вмикає the.',
    },
    {
      en: 'Names: most take nothing (Ukraine, Lake Tahoe, Stanford University); rivers, oceans, ranges, island groups, plural and United/of names take the.',
      uk: 'Назви: більшість без артикля (Ukraine, Lake Tahoe, Stanford University); річки, океани, хребти, групи островів, назви в множині та з United / of беруть the.',
    },
    {
      en: 'Institutions used for their purpose, bed / work / home, meals and by + transport are bare; AmE says in the hospital, BrE in hospital.',
      uk: 'Установи за призначенням, bed / work / home, прийоми їжі та by + транспорт — без артикля; AmE каже in the hospital, BrE — in hospital.',
    },
    {
      en: 'a / an follows the sound: an hour, an MVP — a university, a URL. Uncountable nouns never take a / an.',
      uk: 'a / an іде за звуком: an hour, an MVP — a university, a URL. Незлічувані іменники ніколи не беруть a / an.',
    },
  ],
  pitfalls: [
    {
      title: { en: '“The life is short” · “The technology changes fast”', uk: '«The life is short» · «The technology changes fast»' },
      body: { en: 'In general → no article: Life is short. Technology changes fast.', uk: 'Загалом → без артикля: Life is short. Technology changes fast.' },
    },
    {
      title: { en: '“She is engineer”', uk: '«She is engineer»' },
      body: { en: 'A job needs a / an: She is an engineer.', uk: 'Професія потребує a / an: She is an engineer.' },
    },
    {
      title: { en: '“the Ukraine”', uk: '«the Ukraine»' },
      body: { en: 'A one-word country name takes no article: Ukraine.', uk: 'Назва країни з одного слова — без артикля: Ukraine.' },
    },
    {
      title: { en: '“a documentation” · “an advice” · “a feedback”', uk: '«a documentation» · «an advice» · «a feedback»' },
      body: {
        en: 'Uncountable — never a / an: the documentation, some advice, a piece of feedback.',
        uk: 'Незлічувані — ніколи a / an: the documentation, some advice, a piece of feedback.',
      },
    },
    {
      title: { en: '“by the train” · “at the lunch”', uk: '«by the train» · «at the lunch»' },
      body: { en: 'Routine phrases are bare: by train, at lunch, at work, go to bed.', uk: 'Сталі фрази без артикля: by train, at lunch, at work, go to bed.' },
    },
    {
      title: { en: '“a MVP” · “an user”', uk: '«a MVP» · «an user»' },
      body: { en: 'Follow the sound: an MVP (em), a user (you).', uk: 'Слухайте звук: an MVP (em), a user (you).' },
    },
    {
      title: { en: '“Please review PR before release”', uk: '«Please review PR before release»' },
      body: {
        en: 'Ticket style deletes articles; full sentences keep them: Please review the PR before the release.',
        uk: 'Стиль тікетів викидає артиклі; повні речення їх зберігають: Please review the PR before the release.',
      },
    },
  ],
  exercises: [
    {
      id: 'ex-articles-advanced-1',
      kind: 'mcq',
      prompt: { en: '___ is hard to rebuild after an outage.', uk: 'Довіру важко відновити після збою.' },
      options: ['Trust', 'The trust', 'A trust'],
      correct: 0,
      explain: { en: 'An abstract noun in a general sense → no article.', uk: 'Абстрактний іменник у загальному значенні → без артикля.' },
      level: 'b2',
      tags: ['articles', 'abstract-generic'],
    },
    {
      id: 'ex-articles-advanced-2',
      kind: 'mcq',
      prompt: { en: '___ documentation for this API is out of date.', uk: 'Документація до цього API застаріла.' },
      options: ['The', 'A', '— (no article)'],
      correct: 0,
      explain: {
        en: 'for this API says which documentation → the. Uncountable, so never a.',
        uk: 'for this API каже, яка саме документація → the. Незлічуваний, тож ніколи a.',
      },
      level: 'b2',
      tags: ['articles', 'abstract-generic'],
    },
    {
      id: 'ex-articles-advanced-3',
      kind: 'mcq',
      prompt: { en: 'Our new office overlooks ___ Hudson.', uk: 'Наш новий офіс виходить вікнами на Гудзон.' },
      options: ['the', '— (no article)', 'a'],
      correct: 0,
      explain: { en: 'Rivers take the: the Hudson, the Dnipro.', uk: 'Річки беруть the: the Hudson, the Dnipro.' },
      level: 'b2',
      tags: ['articles', 'geography'],
    },
    {
      id: 'ex-articles-advanced-4',
      kind: 'mcq',
      prompt: { en: 'This year the offsite is at ___ Lake Tahoe.', uk: 'Цього року виїзна зустріч — на озері Тахо.' },
      options: ['— (no article)', 'the', 'a'],
      correct: 0,
      explain: { en: 'A single lake takes no article: Lake Tahoe (but the Great Lakes).', uk: 'Окреме озеро — без артикля: Lake Tahoe (але the Great Lakes).' },
      level: 'b2',
      tags: ['articles', 'geography'],
    },
    {
      id: 'ex-articles-advanced-5',
      kind: 'gap',
      sentence: 'Half of our customers are in ___ Netherlands.',
      answers: ['the'],
      hint: { en: 'a plural country name', uk: 'назва країни в множині' },
      explain: { en: 'Plural country names take the: the Netherlands, the Philippines.', uk: 'Назви країн у множині беруть the: the Netherlands, the Philippines.' },
      level: 'b2',
      tags: ['articles', 'geography'],
    },
    {
      id: 'ex-articles-advanced-6',
      kind: 'mcq',
      prompt: { en: 'Which is correct?', uk: 'Що правильно?' },
      options: ['Our team is based in Ukraine.', 'Our team is based in the Ukraine.', 'Our team is based in an Ukraine.'],
      correct: 0,
      explain: { en: 'A one-word country name: no article. “the Ukraine” is outdated.', uk: 'Назва країни з одного слова: без артикля. «the Ukraine» застаріло.' },
      level: 'b2',
      tags: ['articles', 'geography'],
    },
    {
      id: 'ex-articles-advanced-7',
      kind: 'mcq',
      prompt: { en: 'The founder spent two years in ___ prison for fraud.', uk: 'Засновник відсидів два роки у вʼязниці за шахрайство.' },
      options: ['— (no article)', 'the', 'a'],
      correct: 0,
      explain: { en: 'Serving a sentence = the institution for its purpose → no article.', uk: 'Відбувати покарання = установа за призначенням → без артикля.' },
      level: 'b2',
      tags: ['articles', 'institutions'],
    },
    {
      id: 'ex-articles-advanced-8',
      kind: 'mcq',
      prompt: { en: 'She goes to ___ prison every week to teach coding.', uk: 'Вона щотижня ходить до вʼязниці викладати програмування.' },
      options: ['the', '— (no article)', 'a'],
      correct: 0,
      explain: {
        en: 'She is only visiting, so it is the building → the (British Council: the if someone is just visiting).',
        uk: 'Вона лише відвідує, тож це будівля → the (British Council: the, якщо людина лише відвідує).',
      },
      level: 'b2',
      tags: ['articles', 'institutions'],
    },
    {
      id: 'ex-articles-advanced-9',
      kind: 'mcq',
      prompt: { en: 'In American English: “After the crash, she spent a week in ___ hospital.”', uk: 'В американській англійській: «Після аварії вона тиждень пролежала в лікарні».' },
      options: ['the', '— (no article)', 'a'],
      correct: 0,
      explain: { en: 'AmE: in the hospital. BrE: in hospital (Cambridge).', uk: 'AmE: in the hospital. BrE: in hospital (Cambridge).' },
      level: 'b2',
      tags: ['articles', 'institutions', 'ame-bre'],
    },
    {
      id: 'ex-articles-advanced-10',
      kind: 'mcq',
      prompt: { en: 'Most of the team commutes by ___ train.', uk: 'Більшість команди їздить на роботу потягом.' },
      options: ['— (no article)', 'the', 'a'],
      correct: 0,
      explain: { en: 'by + transport has no article: by train, by car.', uk: 'by + транспорт — без артикля: by train, by car.' },
      level: 'b2',
      tags: ['articles', 'idiomatic-zero'],
    },
    {
      id: 'ex-articles-advanced-11',
      kind: 'mcq',
      prompt: { en: 'Which sentence uses the article correctly?', uk: 'У якому реченні артикль ужито правильно?' },
      options: ['Let’s go over the roadmap at lunch.', 'Let’s go over the roadmap at the lunch.', 'Let’s go over the roadmap at a lunch.'],
      correct: 0,
      explain: { en: 'Meals in general are bare: at lunch, after dinner.', uk: 'Прийоми їжі загалом — без артикля: at lunch, after dinner.' },
      level: 'b2',
      tags: ['articles', 'idiomatic-zero'],
    },
    {
      id: 'ex-articles-advanced-12',
      kind: 'gap',
      sentence: 'We shipped ___ MVP in six weeks.',
      answers: ['an'],
      hint: { en: 'listen to the first sound', uk: 'прислухайтеся до першого звука' },
      explain: { en: 'MVP is read “em-vee-pee” — a vowel sound → an.', uk: 'MVP читається «ем-ві-пі» — голосний звук → an.' },
      level: 'b2',
      tags: ['articles', 'a-an'],
    },
    {
      id: 'ex-articles-advanced-13',
      kind: 'mcq',
      prompt: { en: 'Pick the correct pair.', uk: 'Оберіть правильну пару.' },
      options: ['a user · an hour', 'an user · a hour', 'an user · an hour'],
      correct: 0,
      explain: { en: 'user starts with /j/ (a consonant sound); hour with a silent h (a vowel sound).', uk: 'user починається з /j/ (приголосний); hour — з німого h (голосний).' },
      level: 'b2',
      tags: ['articles', 'a-an'],
    },
    {
      id: 'ex-articles-advanced-14',
      kind: 'mcq',
      prompt: {
        en: 'At stand-up you say “I found ___ bug” — the one everyone has been hunting all week.',
        uk: 'На стендапі ви кажете «I found ___ bug» — той, який усі шукали цілий тиждень.',
      },
      options: ['the', 'a', '— (no article)'],
      correct: 0,
      explain: { en: 'The listener knows which bug → the. “a bug” would announce a new one.', uk: 'Слухач знає, який баг → the. «a bug» оголосив би новий.' },
      level: 'b2',
      tags: ['articles', 'a-vs-the'],
    },
    {
      id: 'ex-articles-advanced-15',
      kind: 'mcq',
      prompt: { en: '___ smartphone changed how people read the news. (the invention)', uk: 'Смартфон змінив те, як люди читають новини. (винахід)' },
      options: ['The', 'A', '— (no article)'],
      correct: 0,
      explain: {
        en: 'the + singular = the invention as one idea. The plain alternative: Smartphones changed …',
        uk: 'the + однина = винахід як одне поняття. Простіша альтернатива: Smartphones changed …',
      },
      level: 'b2',
      tags: ['articles', 'abstract-generic'],
    },
    {
      id: 'ex-articles-advanced-16',
      kind: 'mcq',
      prompt: { en: 'Which sentence is right for a work email?', uk: 'Яке речення підходить для робочого листа?' },
      options: [
        'Please review the PR before the release.',
        'Please review PR before release.',
        'Please review a PR before a release.',
      ],
      correct: 0,
      explain: {
        en: 'Ticket style drops articles; a full sentence keeps them, and both are known → the.',
        uk: 'Стиль тікетів викидає артиклі; повне речення їх зберігає, і обидва відомі → the.',
      },
      level: 'b2',
      tags: ['articles', 'register'],
    },
  ],
  seeAlso: ['m2-articles-basics', 'm3-nouns-quantifiers', 'm12-comparatives', 'm25-relative-clauses', 'm30-linking-discourse'],
  sources: [
    {
      title: 'British Council LearnEnglish — Articles: \'the\' or no article',
      url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2-grammar/articles-the-or-no-article',
    },
    {
      title: 'British Council LearnEnglish — The definite article: \'the\'',
      url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/definite-article',
    },
    {
      title: 'British Council LearnEnglish — The indefinite article: \'a\' and \'an\'',
      url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/indefinite-article',
    },
    {
      title: 'Cambridge Dictionary — A/an and the',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/a-an-and-the',
    },
    {
      title: 'Cambridge Dictionary — Place names',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/place-names',
    },
    {
      title: 'Cambridge Learner’s Dictionary — hospital (in hospital UK / in the hospital US)',
      url: 'https://dictionary.cambridge.org/dictionary/learner-english/hospital',
    },
  ],
};
