import type { Module } from '../types';

/*
 * M11 · Choosing Tenses & Narrative — the b2 capstone of Section II ★ Tenses (T4, per the S5 plan).
 * m7–m10 taught the CELLS; this module teaches the CHOICE: the three meaning questions (+ the ★
 * tense-chooser sim), the signal-word traps, the narrative engine (● plot · 〜 scene · ⤺ flashback),
 * the two places English bends its own tense logic on purpose (historic present, headlines), and
 * the future seen from the past (was going to / would / was about to). Authored EN first, UA
 * second; grammar terms stay English in both languages; examples are US English. Facts verified
 * against Cambridge Dictionary grammar, British Council pages and the Cambridge ELT blog (AmE
 * just/already) — see `sources`. Dive tags: untagged = 2 🚂 core · 3 🚶 connections/contrasts ·
 * 4 🔬 fine print.
 */
export const m11: Module = {
  id: 'm11-choosing-narrative',
  num: 11,
  section: 's6-tenses',
  order: 6,
  level: 'b2',
  signature: true,
  title: { en: 'Choosing Tenses & Narrative', uk: 'Вибір tense і нарація' },
  tagline: {
    en: 'Twelve cells are only half the skill — the other half is choosing between them. Three meaning questions, the signal-word traps, the storytelling engine, and the strange places where English bends its own tense logic on purpose.',
    uk: 'Дванадцять клітинок — лише половина навички; друга половина — вибір між ними. Три питання про зміст, пастки слів-сигналів, двигун оповіді та дивні місця, де англійська навмисно згинає власну логіку tenses.',
  },
  readMins: 22,
  mentalModel: {
    en: 'Ask three questions — WHEN is it anchored? WHAT KIND of claim is it? WHICH signals are in the sentence? — and let a finished-time word override everything. In stories, run the past row of the matrix: ● drives the plot, 〜 paints the scene, ⤺ reaches further back.',
    uk: 'Ставте три питання — КОЛИ закріплено? ЯКИЙ ТИП твердження? ЯКІ сигнали в реченні? — і дозвольте слову завершеного часу перекрити все. В оповіді запускайте минулий ряд матриці: ● веде сюжет, 〜 малює сцену, ⤺ сягає далі назад.',
  },
  topics: [
    // ── 1. THE CONTRAST MAP + THE 3 QUESTIONS ───────────────────────────────
    {
      id: 'contrast-map',
      title: { en: 'The contrast map: three questions instead of twelve doubts', uk: 'Карта контрастів: три питання замість дванадцяти сумнівів' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'After m7–m10 you can BUILD every cell. The b2 skill is different: standing between two grammatical options and picking the one that says what you mean. That is not a rule lookup — it is three meaning questions asked in order. **(1) WHEN is the sentence anchored** — past, present or future? **(2) WHAT KIND of claim is it** — a whole fact ●, a process 〜, a link-back ⤺, a process-up-to 〜⤺? **(3) WHICH context signals are present** — a dated time word, an arrangement with people, visible evidence, a state verb? The third question matters because it can OVERRIDE the first two — that override is where most real mistakes live.',
            uk: 'Після m7–m10 ви вмієте ПОБУДУВАТИ кожну клітинку. Навичка рівня b2 інша: стояти між двома граматично правильними варіантами і взяти той, що каже саме те, що ви маєте на увазі. Це не пошук правила — це три питання про зміст, поставлені по черзі. **(1) КОЛИ закріплене речення** — past, present чи future? **(2) ЯКИЙ ТИП твердження** — цілий факт ●, процес 〜, звʼязок назад ⤺, процес-до-точки 〜⤺? **(3) ЯКІ сигнали контексту присутні** — датоване слово часу, домовленість із людьми, видимий доказ, дієслово стану? Третє питання важливе тим, що може ПЕРЕКРИТИ перші два — саме в цьому перекритті живе більшість реальних помилок.',
          },
        },
        {
          kind: 'sim',
          sim: 'tense-chooser',
          caption: {
            en: '★ Tense Chooser — answer the three questions and get the tense, with the near-miss traps. Watch the hue: sometimes the right form lives in a DIFFERENT time column than your first answer — that jump is the lesson.',
            uk: '★ Tense Chooser — дайте відповіді на три питання й отримайте tense із сусідніми пастками. Стежте за відтінком: іноді правильна форма живе в ІНШІЙ колонці часу, ніж ваша перша відповідь — цей стрибок і є уроком.',
          },
        },
        {
          kind: 'table',
          caption: {
            en: 'The five contrasts that do the real damage — and the single question that splits each pair.',
            uk: 'Пʼять контрастів, що завдають реальної шкоди — і єдине питання, яке розділяє кожну пару.',
          },
          head: [
            { en: 'Contrast', uk: 'Контраст' },
            { en: 'The splitting question', uk: 'Питання-розділювач' },
            { en: 'Choose the first when…', uk: 'Беріть перше, коли…' },
            { en: 'Choose the second when…', uk: 'Беріть друге, коли…' },
          ],
          rows: [
            [
              { en: 'Past Simple vs Present Perfect', uk: 'Past Simple vs Present Perfect' },
              { en: 'Is the time frame closed — or does it touch now?', uk: 'Часова рамка закрита — чи торкається «зараз»?' },
              { en: 'yesterday, in 2020, last week — dated and done', uk: 'yesterday, in 2020, last week — датовано й закрито' },
              { en: 'result / news / experience, no dated time', uk: 'результат / новина / досвід, без датованого часу' },
            ],
            [
              { en: 'Present Simple vs Present Continuous', uk: 'Present Simple vs Present Continuous' },
              { en: 'Generally true — or in progress around now?', uk: 'Чинне загалом — чи в розгортанні довкола «зараз»?' },
              { en: 'habit, fact, routine', uk: 'звичка, факт, рутина' },
              { en: 'live process, temporary phase', uk: 'живий процес, тимчасова фаза' },
            ],
            [
              { en: 'Past Simple vs Past Continuous', uk: 'Past Simple vs Past Continuous' },
              { en: 'A plot step — or the scene it cuts into?', uk: 'Крок сюжету — чи сцена, в яку він врізається?' },
              { en: 'the event that moves the story', uk: 'подія, що рухає оповідь' },
              { en: 'the background already in progress', uk: 'тло, що вже тривало' },
            ],
            [
              { en: 'Present Perfect vs Perfect Continuous', uk: 'Present Perfect vs Perfect Continuous' },
              { en: 'The tally/result — or the ongoing grind?', uk: 'Підсумок/результат — чи тривале зусилля?' },
              { en: 'three bugs fixed, done, counted', uk: 'три баги полагоджено, готово, пораховано' },
              { en: 'all morning, still at it, visible traces', uk: 'цілий ранок, досі в процесі, видимі сліди' },
            ],
            [
              { en: 'will vs going to vs Present Continuous', uk: 'will vs going to vs Present Continuous' },
              { en: 'Decided when — and how fixed is it?', uk: 'Коли вирішено — і наскільки зафіксовано?' },
              { en: 'on the spot → will; premeditated → going to', uk: 'у момент мовлення → will; заздалегідь → going to' },
              { en: 'arranged with people → Present Continuous', uk: 'домовлено з людьми → Present Continuous' },
            ],
          ],
        },
        {
          kind: 'compare',
          a: { en: 'I read your RFC. (Past Simple)', uk: 'I read your RFC. (Past Simple)' },
          b: { en: "I've read your RFC. (Present Perfect)", uk: "I've read your RFC. (Present Perfect)" },
          rows: [
            [
              { en: 'What it claims', uk: 'Що стверджує' },
              { en: 'a closed event — back then, story over', uk: 'закрита подія — тоді; історія завершена' },
              { en: 'the reading is DONE and matters right now', uk: 'прочитання ЗРОБЛЕНО — і це важить просто зараз' },
            ],
            [
              { en: 'Natural follow-up', uk: 'Природне продовження' },
              { en: '…and back then we decided to wait.', uk: '…і тоді ми вирішили зачекати.' },
              { en: "…so let's discuss the open questions today.", uk: '…тож обговорімо відкриті питання сьогодні.' },
            ],
            [
              { en: 'The UA feel', uk: 'Українське відчуття' },
              { en: '«прочитав (колись, у минулому)»', uk: '«прочитав (колись, у минулому)»' },
              { en: '«прочитав (і це зараз актуально)»', uk: '«прочитав (і це зараз актуально)»' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'The three-question algorithm', uk: 'Алгоритм трьох питань' },
          md: {
            en: '**WHEN → WHAT KIND → WHICH SIGNALS.** Run them in order, and give the third the veto: a finished-time word (yesterday, in 2020) forces Past Simple no matter what; an arrangement with people pulls the future into Present Continuous; a state verb kills any 〜. The Chooser above drills exactly this order.',
            uk: '**КОЛИ → ЯКИЙ ТИП → ЯКІ СИГНАЛИ.** Проходьте по черзі, а третьому дайте право вето: слово завершеного часу (yesterday, in 2020) вимагає Past Simple попри все; домовленість із людьми тягне майбутнє в Present Continuous; дієслово стану вбиває будь-який 〜. Chooser вище тренує саме цей порядок.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: 'Notice a quiet upgrade in how to think: at a2 the question was *“which tense is correct?”*; at b2 it becomes *“which meaning do I want?”* Often SEVERAL cells are grammatical — *I read / have read / have been reading your RFC* — and each says something different (m6 made this point; now you own the machinery). When a learner asks “can I say X here?”, the honest b2 answer is usually “yes — and it will mean Y”. The chooser’s job is to make that meaning-first reflex automatic before the narrative topics scale it up to whole stories.',
            uk: 'Зауважте тихе оновлення способу думати: на a2 питання звучало *«який tense правильний?»*; на b2 воно стає *«який зміст я хочу?»*. Часто КІЛЬКА клітинок граматичні — *I read / have read / have been reading your RFC* — і кожна каже своє (m6 це зазначав; тепер механіка ваша). Коли учень питає «чи можна тут сказати X?», чесна відповідь рівня b2 зазвичай: «так — і це означатиме Y». Завдання chooser — зробити цей рефлекс «спершу зміст» автоматичним, перш ніж нараційні топіки масштабують його до цілих історій.',
          },
        },
      ],
    },

    // ── 2. SIGNAL WORDS AND THEIR TRAPS ─────────────────────────────────────
    {
      id: 'signal-words-and-traps',
      title: { en: 'Signal words — and the traps they set', uk: 'Слова-сигнали — і пастки, які вони ставлять' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Signal words (already · just · ever · for · since · yesterday) are the training wheels of tense choice: they point to the right cell about 90% of the time. The remaining 10% is where exams and real conversations catch you — because a signal word is a HINT about meaning, not a law about form. This topic is the map of exactly where each hint betrays you.',
            uk: 'Слова-сигнали (already · just · ever · for · since · yesterday) — тренувальні коліщатка вибору tense: вони вказують на правильну клітинку приблизно в 90% випадків. Решта 10% — саме там, де вас ловлять іспити й реальні розмови, бо слово-сигнал — це ПІДКАЗКА про зміст, а не закон про форму. Цей топік — карта місць, де кожна підказка зраджує.',
          },
        },
        {
          kind: 'table',
          caption: {
            en: 'Each signal’s default cell — and the documented trap where the default fails.',
            uk: 'Клітинка за замовчуванням для кожного сигналу — і задокументована пастка, де замовчування не працює.',
          },
          head: [
            { en: 'Signal', uk: 'Сигнал' },
            { en: 'Default cell', uk: 'Клітинка за замовчуванням' },
            { en: 'The trap', uk: 'Пастка' },
          ],
          rows: [
            [
              { en: 'yesterday · ago · in 2020', uk: 'yesterday · ago · in 2020' },
              { en: 'Past Simple — always', uk: 'Past Simple — завжди' },
              { en: 'none: dated time is the ONE absolute signal, and it overrides all others', uk: 'немає: датований час — ЄДИНИЙ абсолютний сигнал, і він перекриває всі інші' },
            ],
            [
              { en: 'already · just', uk: 'already · just' },
              { en: 'Present Perfect', uk: 'Present Perfect' },
              { en: 'AmE happily says I just saw it / I already ate — Past Simple, standard there', uk: 'AmE спокійно каже I just saw it / I already ate — Past Simple, там це норма' },
            ],
            [
              { en: 'ever · never', uk: 'ever · never' },
              { en: 'Present Perfect (life experience)', uk: 'Present Perfect (життєвий досвід)' },
              { en: 'a CLOSED period takes Past Simple: Did you ever pair with her while you worked there?', uk: 'ЗАКРИТИЙ період бере Past Simple: Did you ever pair with her while you worked there?' },
            ],
            [
              { en: 'for', uk: 'for' },
              { en: 'Present Perfect (+ Continuous)', uk: 'Present Perfect (+ Continuous)' },
              { en: 'a finished period takes Past Simple: I worked there for five years (I left)', uk: 'завершений період бере Past Simple: I worked there for five years (я пішов)' },
            ],
            [
              { en: 'since', uk: 'since' },
              { en: 'Present Perfect', uk: 'Present Perfect' },
              { en: 'the CLAUSE after since holds Past Simple: I’ve known her since we worked at the bank', uk: 'ПІДРЯДНЕ після since тримає Past Simple: I’ve known her since we worked at the bank' },
            ],
            [
              { en: 'when', uk: 'when' },
              { en: 'Past Simple', uk: 'Past Simple' },
              { en: 'add ⤺ to mark the EARLIER event: the service had crashed when we opened the dashboard', uk: 'додайте ⤺, щоб позначити РАНІШУ подію: the service had crashed when we opened the dashboard' },
            ],
            [
              { en: 'always', uk: 'always' },
              { en: 'Present Simple (habit)', uk: 'Present Simple (звичка)' },
              { en: 'with 〜 it becomes a complaint: He’s always breaking the build', uk: 'із 〜 стає скаргою: He’s always breaking the build' },
            ],
          ],
        },
        {
          kind: 'compare',
          a: { en: "I've worked there for five years.", uk: "I've worked there for five years." },
          b: { en: 'I worked there for five years.', uk: 'I worked there for five years.' },
          rows: [
            [
              { en: 'What it says', uk: 'Що каже' },
              { en: 'the five years reach NOW — I still work there', uk: 'ці пʼять років сягають ЗАРАЗ — я досі там працюю' },
              { en: 'a closed five-year block — I left', uk: 'закритий пʼятирічний блок — я звідти пішов' },
            ],
            [
              { en: 'Does the frame touch now?', uk: 'Рамка торкається «зараз»?' },
              { en: 'yes → ⤺ Present Perfect', uk: 'так → ⤺ Present Perfect' },
              { en: 'no — finished → ● Past Simple', uk: 'ні — завершено → ● Past Simple' },
            ],
            [
              { en: 'The UA feel', uk: 'Українське відчуття' },
              { en: '«працюю там уже пʼять років»', uk: '«працюю там уже пʼять років»' },
              { en: '«пропрацював там пʼять років (колись)»', uk: '«пропрацював там пʼять років (колись)»' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'The override rule', uk: 'Правило-перекриття' },
          md: {
            en: 'When signals conflict, **dated time wins**. *I have already finished it yesterday* ✗ — the *yesterday* beats the *already* and forces **Past Simple**: *I already finished it yesterday* (or drop the time word and keep the Perfect). One sentence, one time frame: closed OR touching now — never both.',
            uk: 'Коли сигнали конфліктують, **датований час перемагає**. *I have already finished it yesterday* ✗ — *yesterday* бʼє *already* і вимагає **Past Simple**: *I already finished it yesterday* (або приберіть слово часу й лишіть Perfect). Одне речення — одна часова рамка: закрита АБО дотична до «зараз», ніколи обидві.',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 3,
          title: { en: 'The American softening', uk: 'Американське помʼякшення' },
          md: {
            en: 'With *just*, *already* and *yet*, American English routinely uses Past Simple where British English insists on the Present Perfect: *Did you eat yet? I just saw him. I already told you.* Both varieties understand both forms; exams and formal writing expect the BrE default (*Have you eaten yet?*). Treat the AmE pattern as register knowledge — recognize it in shows and stand-ups, and know your audience before producing it.',
            uk: 'Із *just*, *already* та *yet* американська англійська звично вживає Past Simple там, де британська наполягає на Present Perfect: *Did you eat yet? I just saw him. I already told you.* Обидва варіанти розуміють обидві форми; іспити й формальне письмо очікують дефолт BrE (*Have you eaten yet?*). Сприймайте патерн AmE як знання реєстру — впізнавайте його в серіалах і стендапах, і знайте свою авдиторію, перш ніж продукувати.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: 'The *since*-clause nuance deserves one careful look, because it splits a single sentence into two frames. In *I’ve known her since we worked at the bank together*, the MAIN clause looks back from now (⤺ Present Perfect), while the *since*-clause names a closed past anchor (● Past Simple). UA speakers, already fighting the no-Perfect instinct, tend to flatten both halves one way or the other. The test: the part after *since* answers “counting from WHEN?” — a dated anchor, so Simple; the part before it answers “what is true NOW?” — so Perfect.',
            uk: 'Нюанс підрядного зі *since* вартий окремого погляду, бо він розщеплює одне речення на дві рамки. В *I’ve known her since we worked at the bank together* ГОЛОВНЕ речення дивиться назад від «зараз» (⤺ Present Perfect), а підрядне зі *since* називає закритий минулий якір (● Past Simple). Україномовні, які й так борються з інстинктом «немає Perfect», схильні вирівнювати обидві половини в один бік. Тест: частина після *since* відповідає «відлік від КОЛИ?» — датований якір, тому Simple; частина перед ним відповідає «що правда ЗАРАЗ?» — тому Perfect.',
          },
        },
      ],
    },

    // ── 3. NARRATIVE TENSES ─────────────────────────────────────────────────
    {
      id: 'narrative-tenses',
      title: { en: 'Narrative tenses: the storytelling engine', uk: 'Narrative tenses: двигун оповіді' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Every story you tell — an incident postmortem, a vacation anecdote, an interview answer about a past project — runs on the past row of the matrix, with the four cells playing fixed ROLES. **● Past Simple drives the plot**: event after event, in order. **〜 Past Continuous paints the scene**: what was already in progress when the plot arrived. **⤺ Past Perfect reaches further back**: the flashback that explains how things got this way. **〜⤺ Past Perfect Continuous stretches the lead-up**: how long the pressure had been building. Master the roles and stories assemble themselves.',
            uk: 'Кожна історія, яку ви розповідаєте — postmortem інциденту, анекдот із відпустки, відповідь на співбесіді про минулий проєкт — їде на минулому ряду матриці, де чотири клітинки грають фіксовані РОЛІ. **● Past Simple веде сюжет**: подія за подією, по порядку. **〜 Past Continuous малює сцену**: що вже тривало, коли прийшов сюжет. **⤺ Past Perfect сягає далі назад**: флешбек, що пояснює, як усе до цього дійшло. **〜⤺ Past Perfect Continuous розтягує підводку**: як довго накопичувався тиск. Опануйте ролі — й історії складатимуться самі.',
          },
        },
        {
          kind: 'table',
          caption: {
            en: 'The four narrative roles on one incident story.',
            uk: 'Чотири нараційні ролі на одній історії інциденту.',
          },
          head: [
            { en: 'Role', uk: 'Роль' },
            { en: 'Tense', uk: 'Tense' },
            { en: 'Does what', uk: 'Що робить' },
            { en: 'In the story', uk: 'В історії' },
          ],
          rows: [
            [
              { en: '● the plot', uk: '● сюжет' },
              { en: 'Past Simple', uk: 'Past Simple' },
              { en: 'moves events forward, one by one', uk: 'рухає події вперед, одну за одною' },
              { en: 'The alert fired. I opened the runbook.', uk: 'The alert fired. I opened the runbook.' },
            ],
            [
              { en: '〜 the scene', uk: '〜 сцена' },
              { en: 'Past Continuous', uk: 'Past Continuous' },
              { en: 'paints what was already happening', uk: 'малює те, що вже відбувалося' },
              { en: 'Half the team was sleeping; rain was hammering the windows.', uk: 'Half the team was sleeping; rain was hammering the windows.' },
            ],
            [
              { en: '⤺ the flashback', uk: '⤺ флешбек' },
              { en: 'Past Perfect', uk: 'Past Perfect' },
              { en: 'steps further back to explain', uk: 'відступає далі назад, щоб пояснити' },
              { en: 'Someone had disabled the alerts a week earlier.', uk: 'Someone had disabled the alerts a week earlier.' },
            ],
            [
              { en: '〜⤺ the lead-up', uk: '〜⤺ підводка' },
              { en: 'Past Perfect Continuous', uk: 'Past Perfect Continuous' },
              { en: 'stretches the build-up before the story', uk: 'розтягує накопичення перед історією' },
              { en: 'The error queue had been growing for hours.', uk: 'The error queue had been growing for hours.' },
            ],
          ],
        },
        {
          kind: 'compare',
          a: { en: 'The flat version (all ●)', uk: 'Пласка версія (суцільний ●)' },
          b: { en: 'The textured version (● + 〜 + ⤺)', uk: 'Фактурна версія (● + 〜 + ⤺)' },
          rows: [
            [
              { en: 'The story', uk: 'Історія' },
              { en: 'The alert fired. I read the logs. Someone disabled the alerts. We missed the window.', uk: 'The alert fired. I read the logs. Someone disabled the alerts. We missed the window.' },
              { en: 'The alert fired while I was reading the logs. Someone had disabled the alerts a week earlier — we had been flying blind for days.', uk: 'The alert fired while I was reading the logs. Someone had disabled the alerts a week earlier — we had been flying blind for days.' },
            ],
            [
              { en: 'What the listener gets', uk: 'Що отримує слухач' },
              { en: 'the order of events — nothing else', uk: 'порядок подій — і більше нічого' },
              { en: 'order + scene + cause: a story, not a list', uk: 'порядок + сцена + причина: історія, а не список' },
            ],
            [
              { en: 'Verdict', uk: 'Вердикт' },
              { en: 'grammatical, but the sequence lies: “disabled” reads as happening AFTER the reading', uk: 'граматично, але послідовність бреше: “disabled” читається як подія ПІСЛЯ читання логів' },
              { en: 'the same facts, correctly ordered and alive', uk: 'ті самі факти — правильно впорядковані й живі' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 3,
          title: { en: 'Anchor the flashback, then come back', uk: 'Закріпіть флешбек — і повертайтеся' },
          md: {
            en: 'Past Perfect is a DOOR into earlier time, not a room to live in. Use it once or twice to anchor the flashback (*Someone had disabled the alerts…*), then continue the earlier episode in plain Past Simple (*…they pushed the change on Friday and nobody reviewed it*). Chaining *had* onto every verb of the flashback is grammatical but heavy — published prose pops back to Past Simple as soon as the time shift is established (m10, dive 3).',
            uk: 'Past Perfect — ДВЕРІ в раніший час, а не кімната для життя. Вжийте його раз чи двічі, щоб закріпити флешбек (*Someone had disabled the alerts…*), а далі ведіть раніший епізод звичайним Past Simple (*…they pushed the change on Friday and nobody reviewed it*). Чіпляти *had* до кожного дієслова флешбеку граматично, але важко — друкована проза повертається до Past Simple, щойно зсув часу встановлено (m10, dive 3).',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: 'Spoken anecdotes add one more trick the next topic covers in full: mid-story, speakers often jump into the PRESENT (*…so I’m reading the logs and this alert just pops up*) to drag the listener into the moment. In writing, keep the narrative past; in speech, the jump is a legitimate stylistic gear — you will hear it constantly in stand-ups and war stories.',
            uk: 'Усні анекдоти додають ще один прийом, який наступний топік розбирає повністю: посеред історії мовці часто стрибають у ТЕПЕРІШНІЙ (*…so I’m reading the logs and this alert just pops up*), щоб затягнути слухача в момент. На письмі тримайте нараційне минуле; в мовленні цей стрибок — легітимна стилістична передача, ви постійно чутимете її в стендапах і «бойових» історіях.',
          },
        },
      ],
    },

    // ── 4. HISTORIC PRESENT + HEADLINES ─────────────────────────────────────
    {
      id: 'historic-present-headlines',
      title: { en: 'The historic present & headline grammar', uk: 'Історичний present і граматика заголовків' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Two places English talks about the PAST with PRESENT forms — on purpose. The **historic (dramatic) present** powers jokes (*A man walks into a bar…*), spoken anecdotes (*So yesterday I’m sitting at my desk and this guy walks in…*), plot summaries (*The hero discovers the truth and escapes*) and live commentary (*He shoots — he scores!*). The effect is immediacy: the listener stands inside the scene instead of hearing a report about it. And **newspaper headlines** compress even harder: their grammar is a dialect of its own.',
            uk: 'Два місця, де англійська говорить про МИНУЛЕ формами ТЕПЕРІШНЬОГО — навмисно. **Історичний (драматичний) present** живить жарти (*A man walks into a bar…*), усні анекдоти (*So yesterday I’m sitting at my desk and this guy walks in…*), перекази сюжетів (*The hero discovers the truth and escapes*) і живі коментарі (*He shoots — he scores!*). Ефект — присутність: слухач стоїть усередині сцени, а не слухає звіт про неї. А **газетні заголовки** стискають ще сильніше: їхня граматика — окремий діалект.',
          },
        },
        {
          kind: 'table',
          caption: {
            en: 'The headline decoder: four compressed patterns and their full-sentence meanings.',
            uk: 'Декодер заголовків: чотири стиснені патерни та їхні повні значення.',
          },
          head: [
            { en: 'Headline', uk: 'Заголовок' },
            { en: 'It means', uk: 'Означає' },
            { en: 'Full English', uk: 'Повна англійська' },
          ],
          rows: [
            [
              { en: 'Government resigns', uk: 'Government resigns' },
              { en: 'a PAST event (Present Simple = it happened)', uk: 'МИНУЛА подія (Present Simple = це сталося)' },
              { en: 'The government has resigned.', uk: 'The government has resigned.' },
            ],
            [
              { en: 'PM to visit Kyiv', uk: 'PM to visit Kyiv' },
              { en: 'the FUTURE (to-infinitive = will happen)', uk: 'МАЙБУТНЄ (to-infinitive = станеться)' },
              { en: 'The prime minister is going to visit Kyiv.', uk: 'The prime minister is going to visit Kyiv.' },
            ],
            [
              { en: 'Markets falling as rates rise', uk: 'Markets falling as rates rise' },
              { en: 'in progress (-ing with be dropped)', uk: 'у розгортанні (-ing з опущеним be)' },
              { en: 'Markets are falling as rates rise.', uk: 'Markets are falling as rates rise.' },
            ],
            [
              { en: 'New policy approved', uk: 'New policy approved' },
              { en: 'passive (V3 with be dropped)', uk: 'пасив (V3 з опущеним be)' },
              { en: 'A new policy has been approved.', uk: 'A new policy has been approved.' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'Reading the news without translating it', uk: 'Читати новини без перекладу' },
          md: {
            en: 'The whole headline dialect in one line: **articles and *be* are dropped; Present Simple = it happened; to-infinitive = it will happen; V-ing = it is happening; V3 = it was done.** Decode *“Parliament to debate budget as protests grow”* → the debate is future, the protests are happening now.',
            uk: 'Увесь діалект заголовків одним рядком: **артиклі та *be* опущено; Present Simple = сталося; to-infinitive = станеться; V-ing = відбувається; V3 = зроблено.** Розкодуйте *“Parliament to debate budget as protests grow”* → дебати в майбутньому, протести відбуваються зараз.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          dive: 3,
          title: { en: 'Do not export headline grammar', uk: 'Не експортуйте граматику заголовків' },
          md: {
            en: 'Headline compression is CONTAINED: it lives in headlines, commit-message subjects and ticket titles — nowhere else. *“Government resigns yesterday”* mixes the dialects (present headline form + dated time) and is wrong in both. In normal prose, restore the articles, the auxiliaries and the real tense: *The government resigned yesterday.*',
            uk: 'Стиснення заголовків ЛОКАЛІЗОВАНЕ: воно живе в заголовках, темах комітів і назвах тікетів — більше ніде. *“Government resigns yesterday”* змішує діалекти (заголовкова present-форма + датований час) і неправильне в обох. У звичайній прозі поверніть артиклі, допоміжні дієслова і справжній tense: *The government resigned yesterday.*',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: 'The plot-summary convention is worth owning as a WRITING skill, because engineers use it weekly without noticing: README walkthroughs (*the request hits the gateway, the service validates the token…*), design-doc scenarios, test descriptions (*returns 404 when the user does not exist*) — all present simple about events that technically happened, will happen, or happen hypothetically. English defaults timeless system behavior to the Present Simple — the same instinct as film summaries (*the hero discovers…*). If you already write docs this way, you have been using the historic-present family all along.',
            uk: 'Конвенцію переказу сюжету варто привласнити як навичку ПИСЬМА, бо інженери користуються нею щотижня, не помічаючи: покрокові README (*the request hits the gateway, the service validates the token…*), сценарії в design-док-ах, описи тестів (*returns 404 when the user does not exist*) — усе це present simple про події, що технічно сталися, стануться чи відбуваються гіпотетично. Позачасову поведінку системи англійська за замовчуванням кладе в Present Simple — той самий інстинкт, що й у кінопереказах (*the hero discovers…*). Якщо ви вже так пишете доки — ви весь час користувалися родиною історичного present.',
          },
        },
      ],
    },

    // ── 5. FUTURE IN THE PAST + SEQUENCE ────────────────────────────────────
    {
      id: 'future-in-the-past-sequence',
      title: { en: 'Future in the past: the view from back then', uk: 'Future in the past: погляд звідти, з минулого' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'm6 planted this idea at dive 4; here it becomes a tool. Put your viewpoint at a PAST moment and look forward from there: everything future-flavored shifts one step back. *will* → **would**, *am going to* → **was going to**, *am about to* → **was about to**. English uses these constantly in stories (*Nobody knew the outage would last a week*) and in explanations of plans that died (*I was going to call you, but the meeting ran long*) — a meaning UA renders with «збирався / мав намір».',
            uk: 'm6 посадив цю ідею на dive 4; тут вона стає інструментом. Поставте свою точку огляду в МИНУЛИЙ момент і подивіться звідти вперед: усе «майбутнє» зсувається на крок назад. *will* → **would**, *am going to* → **was going to**, *am about to* → **was about to**. Англійська постійно вживає це в історіях (*Nobody knew the outage would last a week*) і в поясненнях планів, що померли (*I was going to call you, but the meeting ran long*) — зміст, який українська передає через «збирався / мав намір».',
          },
        },
        {
          kind: 'table',
          caption: {
            en: 'The future-in-the-past toolkit: three working forms (+ one formal relic in the deep note below).',
            uk: 'Інструментарій future in the past: три робочі форми (+ один формальний релікт у глибокій нотатці нижче).',
          },
          head: [
            { en: 'Form', uk: 'Форма' },
            { en: 'Means', uk: 'Означає' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'was / were going to + V1', uk: 'was / were going to + V1' },
              { en: 'a plan at that past moment — often unfulfilled', uk: 'план у той минулий момент — часто нездійснений' },
              { en: 'I was going to call you, but the meeting ran long.', uk: 'Я збирався тобі подзвонити, але нарада затяглася.' },
            ],
            [
              { en: 'would + V1', uk: 'would + V1' },
              { en: 'the outcome as anticipated from the past viewpoint', uk: 'результат, як його бачили з минулої точки огляду' },
              { en: 'I knew the deploy would fail.', uk: 'Я знав, що деплой провалиться.' },
            ],
            [
              { en: 'was / were about to + V1', uk: 'was / were about to + V1' },
              { en: 'on the verge of happening — then something cut in', uk: 'на межі здійснення — і тут щось врізалося' },
              { en: 'We were about to merge when QA found the regression.', uk: 'Ми вже були готові мержити, коли QA знайшло регресію.' },
            ],
          ],
        },
        {
          kind: 'compare',
          a: { en: 'Viewpoint: NOW', uk: 'Точка огляду: ЗАРАЗ' },
          b: { en: 'Viewpoint: BACK THEN', uk: 'Точка огляду: ТОДІ' },
          rows: [
            [
              { en: 'the prediction', uk: 'прогноз' },
              { en: 'This will work.', uk: 'This will work.' },
              { en: 'I was sure it would work.', uk: 'I was sure it would work.' },
            ],
            [
              { en: 'the plan', uk: 'план' },
              { en: "I'm going to refactor it.", uk: "I'm going to refactor it." },
              { en: 'I was going to refactor it (but…).', uk: 'I was going to refactor it (but…).' },
            ],
            [
              { en: 'the verge', uk: 'межа' },
              { en: "I'm about to push.", uk: "I'm about to push." },
              { en: 'I was about to push when CI went red.', uk: 'I was about to push when CI went red.' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'The bridge to reported speech', uk: 'Міст до reported speech' },
          md: {
            en: 'This one shift — the viewpoint stepping into the past and every form stepping back with it — is the entire engine of **reported speech** (m15): *“I will fix it”* → *she said she **would** fix it*. If future-in-the-past feels natural, backshift will cost you nothing; you have already learned it.',
            uk: 'Цей один зсув — точка огляду ступає в минуле, і кожна форма відступає разом із нею — і є всім двигуном **reported speech** (m15): *“I will fix it”* → *she said she **would** fix it*. Якщо future in the past відчувається природно, backshift не коштуватиме вам нічого — ви його вже вивчили.',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'was to + V1 — destiny’s tense', uk: 'was to + V1 — tense приречення' },
          md: {
            en: 'Formal narrative keeps one more relic: **was/were to + V1** for what was scheduled or destined — *He was to become CTO within a year* («йому судилося / за планом він мав»). You will meet it in biographies and histories; you almost never need to produce it. Its negative with the perfect infinitive (*was to have opened*) marks a destiny that failed — pure 🔬 territory.',
            uk: 'Формальна нарація тримає ще один релікт: **was/were to + V1** для запланованого чи судженого — *He was to become CTO within a year* («йому судилося / за планом він мав»). Ви зустрінете це в біографіях та історичних текстах; продукувати майже ніколи не доведеться. Заперечення з perfect-інфінітивом (*was to have opened*) позначає долю, що не збулася — чиста територія 🔬.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: 'Two disambiguations close the section. First: *was going to* ≠ *went* — «я збирався подзвонити» is a statement about an INTENTION, not the call; English keeps that distinction hard (*I was going to call ≠ I called*). Second: this narrative *would* (anticipated future) is a different citizen from the habit *would* of m8 (*On Fridays we would deploy at noon*) and from the polite *would* of m22 — same word, three jobs; the context always tells you which one clocked in. You now hold the whole Section II toolkit: the matrix (m6), the cells (m7–m10) and the choice (this module). Re-walk the six modules at 🚶 Full — the second spiral lands on a map you own.',
            uk: 'Два розмежування закривають розділ. Перше: *was going to* ≠ *went* — «я збирався подзвонити» — це твердження про НАМІР, а не про дзвінок; англійська тримає цю різницю жорстко (*I was going to call ≠ I called*). Друге: нараційний *would* (очікуване майбутнє) — інший громадянин, ніж would-звичка з m8 (*On Fridays we would deploy at noon*) і ввічливий would з m22 — одне слово, три роботи; контекст завжди підкаже, котра з них на зміні. Тепер у вас увесь інструментарій Розділу II: матриця (m6), клітинки (m7–m10) і вибір (цей модуль). Пройдіть шість модулів знову на 🚶 Full — друга спіраль ляже на карту, якою ви володієте.',
          },
        },
      ],
    },
  ],

  keyPoints: [
    {
      en: 'Tense choice = three meaning questions in order: WHEN is it anchored · WHAT KIND of claim is it · WHICH signals are present — and the third can override the first two.',
      uk: 'Вибір tense = три питання про зміст по черзі: КОЛИ закріплено · ЯКИЙ ТИП твердження · ЯКІ сигнали присутні — і третє може перекрити перші два.',
    },
    {
      en: 'Signal words are hints, not laws — but a finished-time word (yesterday, in 2020) is absolute: it forces Past Simple over every other signal.',
      uk: 'Слова-сигнали — підказки, а не закони; але слово завершеного часу (yesterday, in 2020) абсолютне: воно вимагає Past Simple попри всі інші сигнали.',
    },
    {
      en: 'The narrative engine: ● Past Simple drives the plot, 〜 Past Continuous paints the scene, ⤺ Past Perfect anchors the flashback, 〜⤺ stretches the lead-up.',
      uk: 'Двигун оповіді: ● Past Simple веде сюжет, 〜 Past Continuous малює сцену, ⤺ Past Perfect закріплює флешбек, 〜⤺ розтягує підводку.',
    },
    {
      en: 'The historic present drags the listener INTO a story (jokes, anecdotes, plot summaries, commentary) — a stylistic gear of speech and summaries, not an error.',
      uk: 'Історичний present затягує слухача ВСЕРЕДИНУ історії (жарти, анекдоти, перекази сюжетів, коментарі) — стилістична передача мовлення й переказів, а не помилка.',
    },
    {
      en: 'Headlines are a dialect: articles and be dropped, Present Simple = a past event, to-infinitive = future, V-ing = in progress, V3 = passive. Decode them; never export them.',
      uk: 'Заголовки — діалект: артиклі й be опущено, Present Simple = минула подія, to-infinitive = майбутнє, V-ing = у розгортанні, V3 = пасив. Розкодовуйте їх — і не експортуйте.',
    },
    {
      en: 'Future in the past: was going to (a plan back then, often unfulfilled) · would (the anticipated outcome) · was about to (on the verge) — the same shift that powers reported speech (m15).',
      uk: 'Future in the past: was going to (тодішній план, часто нездійснений) · would (очікуваний результат) · was about to (на межі) — той самий зсув, що живить reported speech (m15).',
    },
  ],
  pitfalls: [
    {
      title: { en: 'Mapping UA aspect onto English 1:1', uk: 'Накладання українського виду на англійську 1:1' },
      body: {
        en: 'Недоконаний вид ≠ always Continuous, and доконаний ≠ always Perfect. «Я прочитав звіт учора» is доконаний — yet English demands plain Past Simple (I read the report yesterday), because the frame is dated. Choose by the three questions, never by translating the UA aspect.',
        uk: 'Недоконаний вид ≠ завжди Continuous, а доконаний ≠ завжди Perfect. «Я прочитав звіт учора» — доконаний, але англійська вимагає простого Past Simple (I read the report yesterday), бо рамка датована. Обирайте за трьома питаннями, а не перекладом українського виду.',
      },
    },
    {
      title: { en: 'Signal-word autopilot', uk: 'Автопілот слів-сигналів' },
      body: {
        en: 'Seeing for and reflex-writing Present Perfect: I worked there for five years (I left in 2020) is Past Simple — the period is closed. The signal points at the default; only the time-frame question decides.',
        uk: 'Побачити for і рефлекторно писати Present Perfect: I worked there for five years (я пішов у 2020-му) — це Past Simple, період закритий. Сигнал вказує на замовчування; вирішує лише питання про часову рамку.',
      },
    },
    {
      title: { en: 'The flat all-● story', uk: 'Пласка історія суцільним ●' },
      body: {
        en: 'Telling every story purely in Past Simple is grammatical — and lossy: “I read the logs. Someone disabled the alerts” silently reorders reality. Background needs 〜, the earlier cause needs ⤺, or your sequence lies to the listener.',
        uk: 'Розповідати кожну історію суцільним Past Simple граматично — і з втратами: “I read the logs. Someone disabled the alerts” мовчки переставляє реальність. Тло вимагає 〜, раніша причина — ⤺, інакше ваша послідовність бреше слухачеві.',
      },
    },
    {
      title: { en: 'Past Perfect everywhere', uk: 'Past Perfect усюди' },
      body: {
        en: 'The opposite failure: once learners discover ⤺, whole paragraphs turn into had + had + had. Anchor the flashback with one or two Past Perfects, then return to Past Simple — the shift is already established.',
        uk: 'Протилежний провал: відкривши ⤺, учні перетворюють цілі абзаци на had + had + had. Закріпіть флешбек одним-двома Past Perfect і повертайтеся до Past Simple — зсув уже встановлено.',
      },
    },
    {
      title: { en: '“Government resigns yesterday”', uk: '«Government resigns yesterday»' },
      body: {
        en: 'Headline grammar leaking into prose — or dated time leaking into a headline. The headline dialect (present = past, dropped articles/be) lives ONLY in headlines and titles; normal sentences restore the real tense: The government resigned yesterday.',
        uk: 'Граматика заголовків протікає в прозу — або датований час протікає в заголовок. Діалект заголовків (present = минуле, опущені артиклі/be) живе ЛИШЕ в заголовках і назвах; звичайні речення повертають справжній tense: The government resigned yesterday.',
      },
    },
    {
      title: { en: 'was going to = went', uk: 'was going to = went' },
      body: {
        en: 'Reading (or telling) I was going to call you as if the call happened. It did not — was going to asserts only the past INTENTION, and usually hints it died: …but the meeting ran long. If the action happened, say I called you.',
        uk: 'Читати (чи розповідати) I was going to call you так, ніби дзвінок відбувся. Ні — was going to стверджує лише минулий НАМІР і зазвичай натякає, що він помер: …but the meeting ran long. Якщо дія сталася — кажіть I called you.',
      },
    },
  ],
  exercises: [
    {
      id: 'ex-choosing-narrative-1',
      kind: 'mcq',
      prompt: {
        en: 'The three questions that choose a tense, in order:',
        uk: 'Три питання, що обирають tense, по порядку:',
      },
      options: [
        'WHEN is it anchored · WHAT KIND of claim · WHICH signals',
        'WHO acts · WHERE it happens · WHEN it happens',
        'Is it formal · Is it written · Is it long',
      ],
      correct: 0,
      explain: {
        en: 'WHEN (time) → WHAT KIND (aspect meaning) → WHICH SIGNALS (the context check, with veto power).',
        uk: 'КОЛИ (час) → ЯКИЙ ТИП (значення aspect) → ЯКІ СИГНАЛИ (перевірка контексту з правом вето).',
      },
      level: 'b1',
      tags: ['tenses', 'choosing'],
    },
    {
      id: 'ex-choosing-narrative-2',
      kind: 'mcq',
      prompt: {
        en: '“I ___ in Lviv for six years.” (I moved away in 2020.)',
        uk: '«I ___ in Lviv for six years.» (Я виїхав у 2020-му.)',
      },
      options: ['have lived', 'lived', 'have been living'],
      correct: 1,
      explain: {
        en: 'The period is CLOSED (you left), so for + Past Simple: I lived there for six years. For does not force the Perfect.',
        uk: 'Період ЗАКРИТИЙ (ви поїхали), тому for + Past Simple: I lived there for six years. For не вимагає Perfect.',
      },
      level: 'b2',
      tags: ['tenses', 'choosing', 'signal-words'],
    },
    {
      id: 'ex-choosing-narrative-3',
      kind: 'gap',
      sentence: 'I already ___ (finish) it yesterday, so stop worrying.',
      answers: ['finished'],
      hint: { en: 'dated time beats already', uk: 'датований час бʼє already' },
      explain: {
        en: 'The override rule: yesterday closes the frame and forces Past Simple — already cannot rescue the Perfect here.',
        uk: 'Правило-перекриття: yesterday закриває рамку й вимагає Past Simple — already тут не врятує Perfect.',
      },
      level: 'b1',
      tags: ['tenses', 'choosing', 'signal-words'],
    },
    {
      id: 'ex-choosing-narrative-4',
      kind: 'mcq',
      prompt: {
        en: 'In a story, the plot events and the background scene take, respectively:',
        uk: 'В історії події сюжету і фонова сцена беруть відповідно:',
      },
      options: [
        'Past Simple · Past Continuous',
        'Past Continuous · Past Simple',
        'Present Perfect · Past Perfect',
      ],
      correct: 0,
      explain: {
        en: '● Past Simple moves the plot; 〜 Past Continuous paints what was already in progress around it.',
        uk: '● Past Simple рухає сюжет; 〜 Past Continuous малює те, що вже тривало довкола нього.',
      },
      level: 'b1',
      tags: ['tenses', 'narrative'],
    },
    {
      id: 'ex-choosing-narrative-5',
      kind: 'gap',
      sentence: 'The alert fired while I ___ (read) the logs.',
      answers: ['was reading'],
      hint: { en: 'the scene the event cut into', uk: 'сцена, в яку врізалася подія' },
      explain: {
        en: 'The reading is the background in progress → Past Continuous; the alert is the ● plot event.',
        uk: 'Читання — тло в розгортанні → Past Continuous; алерт — подія сюжету ●.',
      },
      level: 'b1',
      tags: ['tenses', 'narrative'],
    },
    {
      id: 'ex-choosing-narrative-6',
      kind: 'gap',
      sentence: 'When we finally opened the incident channel, the service ___ (already / crash).',
      answers: ['had already crashed'],
      hint: { en: 'the flashback — earlier than the opening', uk: 'флешбек — раніше за відкриття' },
      explain: {
        en: 'The crash predates the past reference point (opening the channel) → Past Perfect: had already crashed.',
        uk: 'Падіння передує минулій точці відліку (відкриттю каналу) → Past Perfect: had already crashed.',
      },
      level: 'b2',
      tags: ['tenses', 'narrative', 'perfect'],
    },
    {
      id: 'ex-choosing-narrative-7',
      kind: 'mcq',
      prompt: {
        en: '“A man ___ into a bar…” — a joke normally opens in:',
        uk: '«A man ___ into a bar…» — жарт зазвичай починається в:',
      },
      options: ['walks (the historic present)', 'walked', 'will walk'],
      correct: 0,
      explain: {
        en: 'Jokes and anecdotes run on the historic present — it puts the listener inside the scene.',
        uk: 'Жарти й анекдоти їдуть на історичному present — він ставить слухача всередину сцени.',
      },
      level: 'b2',
      tags: ['tenses', 'historic-present'],
    },
    {
      id: 'ex-choosing-narrative-8',
      kind: 'mcq',
      prompt: {
        en: 'Headline: “PM to visit Kyiv”. The visit is…',
        uk: 'Заголовок: «PM to visit Kyiv». Візит…',
      },
      options: ['in the future', 'in the past', 'happening right now'],
      correct: 0,
      explain: {
        en: 'Headline dialect: the to-infinitive marks the future — The PM is going to visit Kyiv.',
        uk: 'Діалект заголовків: to-infinitive позначає майбутнє — The PM is going to visit Kyiv.',
      },
      level: 'b1',
      tags: ['tenses', 'headlines'],
    },
    {
      id: 'ex-choosing-narrative-9',
      kind: 'mcq',
      prompt: {
        en: 'Headline: “Government resigns”. It reports…',
        uk: 'Заголовок: «Government resigns». Він повідомляє…',
      },
      options: [
        'a past event, in the headline Present Simple',
        'a daily habit of the government',
        'a future plan',
      ],
      correct: 0,
      explain: {
        en: 'In headlines Present Simple = it happened: The government has resigned. Quick, current — and only for headlines.',
        uk: 'У заголовках Present Simple = це сталося: The government has resigned. Швидко, актуально — і лише для заголовків.',
      },
      level: 'b1',
      tags: ['tenses', 'headlines'],
    },
    {
      id: 'ex-choosing-narrative-10',
      kind: 'gap',
      sentence: "Sorry — I ___ (go / call) you, but the meeting ran long.",
      answers: ['was going to call'],
      hint: { en: 'the plan existed back then — and died', uk: 'план існував тоді — і помер' },
      explain: {
        en: 'A past intention, unfulfilled → was going to call. Saying I called would claim the action happened.',
        uk: 'Минулий намір, нездійснений → was going to call. Сказати I called означало б, що дія відбулася.',
      },
      level: 'b2',
      tags: ['tenses', 'future-in-the-past'],
    },
    {
      id: 'ex-choosing-narrative-11',
      kind: 'gap',
      sentence: 'Everyone knew the deploy ___ (fail) — the tests had been red all week.',
      answers: ['would fail'],
      hint: { en: 'the future, seen from the past', uk: 'майбутнє, побачене з минулого' },
      explain: {
        en: 'The outcome anticipated from a past viewpoint → would fail: will steps back to would.',
        uk: 'Результат, очікуваний з минулої точки огляду → would fail: will відступає до would.',
      },
      level: 'b2',
      tags: ['tenses', 'future-in-the-past'],
    },
    {
      id: 'ex-choosing-narrative-12',
      kind: 'gap',
      sentence: 'We ___ (be about / merge) when QA found the regression.',
      answers: ['were about to merge'],
      hint: { en: 'on the verge — then it cut in', uk: 'на межі — і тут воно врізалося' },
      explain: {
        en: 'On the verge of the action at a past moment → were about to merge.',
        uk: 'На межі дії в минулий момент → were about to merge.',
      },
      level: 'b2',
      tags: ['tenses', 'future-in-the-past'],
    },
    {
      id: 'ex-choosing-narrative-13',
      kind: 'mcq',
      prompt: {
        en: 'Which is standard casual AMERICAN English?',
        uk: 'Що є нормальною розмовною АМЕРИКАНСЬКОЮ англійською?',
      },
      options: ['I just saw your message.', 'I have seen him yesterday.', 'I am agree with you.'],
      correct: 0,
      explain: {
        en: 'AmE uses just + Past Simple freely (BrE prefers I’ve just seen). The other two are errors in every variety.',
        uk: 'AmE вільно вживає just + Past Simple (BrE воліє I’ve just seen). Два інші — помилки в усіх варіантах.',
      },
      level: 'b2',
      tags: ['tenses', 'choosing', 'signal-words'],
    },
    {
      id: 'ex-choosing-narrative-14',
      kind: 'gap',
      sentence: 'He ___ (always / forget) to update the ticket — it drives me crazy!',
      answers: ['is always forgetting', "'s always forgetting"],
      hint: { en: 'the complaint pattern', uk: 'патерн скарги' },
      explain: {
        en: 'always + Present Continuous = the exasperated complaint about a repeated habit: He is always forgetting…',
        uk: 'always + Present Continuous = роздратована скарга на повторювану звичку: He is always forgetting…',
      },
      level: 'b2',
      tags: ['tenses', 'choosing'],
    },
  ],
  seeAlso: [
    'm6-tense-system',
    'm7-present-simple-continuous',
    'm8-past-simple-continuous',
    'm9-future-forms',
    'm10-perfect-family',
    'm15-reported-speech',
    'm17-modal-system',
  ],
  sources: [
    { title: 'Cambridge Dictionary — Future in the past (English Grammar Today)', url: 'https://dictionary.cambridge.org/grammar/british-grammar/future-in-the-past' },
    { title: 'Cambridge Dictionary — Present verb forms referring to the past (historic present)', url: 'https://dictionary.cambridge.org/grammar/british-grammar/present-verb-forms-referring-to-the-past' },
    { title: 'Cambridge Dictionary — Newspaper headlines (English Grammar Today)', url: 'https://dictionary.cambridge.org/grammar/british-grammar/newspaper-headlines' },
    { title: 'Cambridge Dictionary — Past simple or present perfect?', url: 'https://dictionary.cambridge.org/grammar/british-grammar/past-simple-or-present-perfect' },
    { title: 'British Council TeachingEnglish — Narrative tenses', url: 'https://www.teachingenglish.org.uk/professional-development/teachers/teaching-knowledge-database/n-p/narrative-tenses' },
    { title: 'British Council LearnEnglish — Present perfect: just, yet, still, already (incl. the AmE note)', url: 'https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/present-perfect-just-yet-still-already' },
  ],
};
