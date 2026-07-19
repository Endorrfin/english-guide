import type { Module } from '../types';

/*
 * M6 · The Tense System — the GOLDEN module of Section II ★ Tenses (T1, per the S5 plan).
 * The ✈️ porthole view: all 12 tenses as ONE 3 × 4 time × aspect matrix, aspect-as-meaning
 * (4 ideas instead of ~50 rules), the shared timeline notation, and the corpus finding that
 * 5 forms cover ≈96% of speech — plus the routes through the section (sims, figures, dive levels).
 * Authored EN first, UA second; grammar terms stay English in both languages; examples are
 * US English. Facts verified against Cambridge Dictionary grammar, British Council LearnEnglish
 * and the Krámský 1969 / Alzuhairy 2016 corpus studies (via Ginseng English) — see `sources`.
 * Dive tags piloted here: untagged = 2 🚂 core · 3 🚶 connections/contrasts · 4 🔬 fine print.
 */
export const m6: Module = {
  id: 'm6-tense-system',
  num: 6,
  section: 's6-tenses',
  order: 1,
  level: 'a2',
  signature: true,
  title: { en: 'The Tense System', uk: 'Система tenses' },
  tagline: {
    en: 'Twelve tenses are not twelve rules to memorize — they are one small table: 3 times × 4 aspects. See the whole system once, and every tense becomes a cell you can find, not a rule you must recall.',
    uk: 'Дванадцять tenses — це не дванадцять правил для зубріння, а одна маленька таблиця: 3 часи × 4 aspects. Побачте систему цілком один раз — і кожен tense стане клітинкою, яку ви знаходите, а не правилом, яке мусите згадати.',
  },
  readMins: 20,
  mentalModel: {
    en: 'Every English verb form answers exactly two questions: WHEN is it anchored (past · present · future) and WHAT KIND of statement is it (● fact · 〜 process · ⤺ link-back · 〜⤺ process-up-to). Answer both — the matrix hands you the tense.',
    uk: 'Кожна дієслівна форма англійської відповідає рівно на два питання: КОЛИ вона закріплена (past · present · future) і ЯКИЙ ТИП твердження це (● факт · 〜 процес · ⤺ звʼязок назад · 〜⤺ процес-до-точки). Дайте обидві відповіді — матриця видасть вам tense.',
  },
  topics: [
    // ── 1. THE TIME × ASPECT MATRIX ─────────────────────────────────────────
    {
      id: 'time-x-aspect-matrix',
      title: { en: 'The 3 × 4 matrix: one table instead of twelve rules', uk: 'Матриця 3 × 4: одна таблиця замість дванадцяти правил' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'School courses usually serve tenses one at a time, each with its own list of uses and exceptions — and the lists blur together within a week. The system view is smaller and sturdier: English builds every tense by **combining two independent choices**. **TIME** anchors the statement on the timeline — *past*, *present* or *future*. **ASPECT** says what kind of claim you are making about it — a whole **fact** (Simple), an unfolding **process** (Continuous), a **link back** from a reference point (Perfect), or a **process running up to** that point (Perfect Continuous). 3 × 4 = the full set of 12. There is no thirteenth tense hiding anywhere.',
            uk: 'Шкільні курси зазвичай подають tenses по одному, кожен зі своїм списком вживань і винятків — і за тиждень ці списки зливаються. Системний погляд менший і міцніший: англійська будує кожен tense, **комбінуючи два незалежні вибори**. **TIME** закріплює твердження на осі часу — *past*, *present* або *future*. **ASPECT** каже, ЯКОГО ТИПУ це твердження — цілий **факт** (Simple), розгорнутий **процес** (Continuous), **звʼязок назад** від точки відліку (Perfect) чи **процес аж до** цієї точки (Perfect Continuous). 3 × 4 = усі 12. Тринадцятого tense ніде не заховано.',
          },
        },
        {
          kind: 'sim',
          sim: 'tense-navigator',
          caption: {
            en: '★ Tense Navigator — walk the matrix: pick a time and an aspect, get the tense with meaning, forms, timeline, examples and the traps next door.',
            uk: '★ Tense Navigator — пройдіться матрицею: оберіть час і aspect, отримайте tense зі змістом, формами, таймлайном, прикладами і сусідніми пастками.',
          },
        },
        {
          kind: 'table',
          caption: {
            en: 'The whole English tense system in one view. Rows = ASPECT (what kind of statement), columns = TIME (where it is anchored).',
            uk: 'Уся система англійських tenses в одному погляді. Рядки = ASPECT (тип твердження), колонки = TIME (де закріплено).',
          },
          head: [
            { en: 'Aspect ↓ · Time →', uk: 'Aspect ↓ · Time →' },
            { en: 'Past 🌸', uk: 'Past 🌸' },
            { en: 'Present 🌊', uk: 'Present 🌊' },
            { en: 'Future 🔮', uk: 'Future 🔮' },
          ],
          rows: [
            [
              { en: '● Simple — fact', uk: '● Simple — факт' },
              { en: 'worked', uk: 'worked' },
              { en: 'work / works', uk: 'work / works' },
              { en: 'will work', uk: 'will work' },
            ],
            [
              { en: '〜 Continuous — process', uk: '〜 Continuous — процес' },
              { en: 'was/were working', uk: 'was/were working' },
              { en: 'am/is/are working', uk: 'am/is/are working' },
              { en: 'will be working', uk: 'will be working' },
            ],
            [
              { en: '⤺ Perfect — link-back', uk: '⤺ Perfect — звʼязок назад' },
              { en: 'had worked', uk: 'had worked' },
              { en: 'have/has worked', uk: 'have/has worked' },
              { en: 'will have worked', uk: 'will have worked' },
            ],
            [
              { en: '〜⤺ Perfect Continuous — process up to', uk: '〜⤺ Perfect Continuous — процес до точки' },
              { en: 'had been working', uk: 'had been working' },
              { en: 'have/has been working', uk: 'have/has been working' },
              { en: 'will have been working', uk: 'will have been working' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'Choosing a tense = answering two questions', uk: 'Вибір tense = відповідь на два питання' },
          md: {
            en: 'Stop asking *“which of the twelve tenses is this?”* Ask the two system questions instead: **(1) WHEN?** past / present / future. **(2) WHAT KIND?** fact ● / process 〜 / link-back ⤺ / process-up-to 〜⤺. Two answers → one cell. The Navigator above trains exactly this move.',
            uk: 'Перестаньте питати *«який із дванадцяти tenses тут?»*. Ставте два системні питання: **(1) КОЛИ?** past / present / future. **(2) ЯКИЙ ТИП?** факт ● / процес 〜 / звʼязок назад ⤺ / процес-до-точки 〜⤺. Дві відповіді → одна клітинка. Navigator вище тренує саме цей хід.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: 'Notice what the matrix quietly teaches: the columns share **auxiliaries**, the rows share **machinery**. Every Continuous is *be + V-ing* — only *be* changes its time. Every Perfect is *have + V3* — only *have* changes its time. So you do not learn “was working” and “will be working” as separate facts: you learn 〜 = *be + V-ing* once, then slide it along the time axis. Four aspect mechanisms + three settings of the auxiliary = the entire conjugation system of English.',
            uk: 'Зверніть увагу, чого матриця вчить непомітно: колонки ділять **допоміжні дієслова**, рядки ділять **механіку**. Кожен Continuous — це *be + V-ing*, лише *be* змінює час. Кожен Perfect — це *have + V3*, лише *have* змінює час. Тож «was working» і «will be working» — не окремі факти: ви один раз вивчаєте 〜 = *be + V-ing*, а потім пересуваєте його вздовж осі часу. Чотири механізми aspect + три налаштування допоміжного = уся система дієвідмінювання англійської.',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Where “going to” and the other futures live', uk: 'Де живуть «going to» та інші майбутні' },
          md: {
            en: 'Linguists will tell you English has no future *tense* at all — *will* is historically a modal (see m17), and the future column borrows it. That is why the future is a crowded place: *will*, *be going to*, Present Continuous for arrangements, Present Simple for timetables. The matrix keeps **will** in the future column as the neutral default; m9 sorts out the rivals, and m11 teaches when each wins.',
            uk: 'Лінгвісти скажуть, що в англійській взагалі немає майбутнього *tense* — *will* історично modal (див. m17), і колонка future його позичає. Тому майбутнє — місце людне: *will*, *be going to*, Present Continuous для домовленостей, Present Simple для розкладів. Матриця тримає **will** у колонці future як нейтральний дефолт; m9 розбирає суперників, а m11 вчить, коли який перемагає.',
          },
        },
      ],
    },

    // ── 2. THE FOUR ASPECT MEANINGS ─────────────────────────────────────────
    {
      id: 'four-aspect-meanings',
      title: { en: 'Four aspect meanings — the idea that replaces ~50 rules', uk: 'Чотири значення aspect — ідея, що замінює ~50 правил' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Rule-list courses accumulate about fifty separate “uses” across the twelve tenses. Research on principle-based tense teaching shows the same ground is covered by a handful of **aspect meanings** that recombine everywhere. Learn these four ideas once — they are the rows of the matrix — and most “uses” become predictions you can make yourself, not items to memorize.',
            uk: 'Курси-списки накопичують близько пʼятдесяти окремих «вживань» на дванадцять tenses. Дослідження принципового навчання tenses показують: те саме поле покривають кілька **значень aspect**, які всюди рекомбінуються. Вивчіть ці чотири ідеї один раз — це рядки матриці — і більшість «вживань» стануть передбаченнями, які ви робите самі, а не пунктами для зубріння.',
          },
        },
        {
          kind: 'table',
          caption: {
            en: 'The four aspects: glyph, core meaning, grammatical signature, and the feel of the claim.',
            uk: 'Чотири aspects: гліф, ядро значення, граматичний підпис і відчуття твердження.',
          },
          head: [
            { en: 'Aspect', uk: 'Aspect' },
            { en: 'Meaning', uk: 'Значення' },
            { en: 'Signature', uk: 'Підпис' },
            { en: 'The claim feels like…', uk: 'Твердження звучить як…' },
          ],
          rows: [
            [
              { en: '● Simple', uk: '● Simple' },
              { en: 'a fact / a whole event', uk: 'факт / ціла подія' },
              { en: 'bare verb (V1 / V2 / will + V1)', uk: 'голе дієслово (V1 / V2 / will + V1)' },
              { en: '“It happens. It happened. It will happen.”', uk: '«Це відбувається. Відбулося. Відбудеться.»' },
            ],
            [
              { en: '〜 Continuous', uk: '〜 Continuous' },
              { en: 'a process in progress', uk: 'процес у розгортанні' },
              { en: 'be + V-ing', uk: 'be + V-ing' },
              { en: '“I am in the middle of it.”', uk: '«Я всередині цього.»' },
            ],
            [
              { en: '⤺ Perfect', uk: '⤺ Perfect' },
              { en: 'a link back from a reference point', uk: 'звʼязок назад від точки відліку' },
              { en: 'have + V3', uk: 'have + V3' },
              { en: '“By this point — already done / experienced.”', uk: '«До цієї точки — вже зроблено / пережито.»' },
            ],
            [
              { en: '〜⤺ Perfect Continuous', uk: '〜⤺ Perfect Continuous' },
              { en: 'a process running up to that point', uk: 'процес аж до цієї точки' },
              { en: 'have been + V-ing', uk: 'have been + V-ing' },
              { en: '“…and it has been going on for a while.”', uk: '«…і воно тривало вже якийсь час.»' },
            ],
          ],
        },
        {
          kind: 'compare',
          a: { en: '● Simple — the whole event', uk: '● Simple — ціла подія' },
          b: { en: '〜 Continuous — inside the event', uk: '〜 Continuous — всередині події' },
          rows: [
            [
              { en: 'Camera', uk: 'Камера' },
              { en: 'a photo of the finished thing', uk: 'фото завершеної речі' },
              { en: 'a video paused mid-action', uk: 'відео, поставлене на паузу посеред дії' },
            ],
            [
              { en: 'Typical claim', uk: 'Типове твердження' },
              { en: 'I deploy on Fridays. (habit, fact)', uk: 'I deploy on Fridays. (звичка, факт)' },
              { en: "I'm deploying right now. (in progress)", uk: "I'm deploying right now. (у процесі)" },
            ],
            [
              { en: 'Time span', uk: 'Часовий обсяг' },
              { en: 'complete or repeated — edges included', uk: 'завершене або повторюване — з краями' },
              { en: 'temporary, unfinished — edges out of frame', uk: 'тимчасове, незавершене — краї поза кадром' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'Why Perfect feels alien: Ukrainian does not have it', uk: 'Чому Perfect здається чужим: в українській його немає' },
          md: {
            en: 'Ukrainian verbs mark **вид** (доконаний/недоконаний), which roughly covers the Simple↔Continuous contrast — but Ukrainian has **no grammatical link-back**. «Я зробив це» is one form whether you mean *I did it yesterday* (Past Simple) or *I have done it — it is ready now* (Present Perfect). English forces you to choose. That is why the ⤺ row is THE hardest for UA speakers, why «I have finished it yesterday» is our classic error, and why m10 attacks the whole Perfect family in one dedicated module.',
            uk: 'Українське дієслово маркує **вид** (доконаний/недоконаний), що приблизно покриває контраст Simple↔Continuous — але граматичного **звʼязку назад** в українській немає. «Я зробив це» — одна форма і для *I did it yesterday* (Past Simple), і для *I have done it — уже готово* (Present Perfect). Англійська змушує обирати. Саме тому рядок ⤺ — НАЙважчий для україномовних, тому «I have finished it yesterday» — наша класична помилка, і тому m10 атакує всю родину Perfect одним окремим модулем.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**State verbs** are the one systematic exception to 〜. Verbs of knowing, feeling, owning and being — *know, want, need, believe, agree, like, own, seem* — describe states, not processes, so they resist Continuous even when the meaning is “right now”: *I **know** the answer* (never “I am knowing”). The UA trap inside this trap: «я згоден» is a short adjective in Ukrainian, so it calques into *“I am agree”* — but *agree* is a verb: **I agree**. When a state verb does appear in 〜, the meaning has shifted to an activity: *I **am thinking** about the offer* (= considering) vs *I **think** it is fine* (= my opinion).',
            uk: '**Дієслова стану** — єдиний системний виняток для 〜. Дієслова знання, відчуття, володіння і буття — *know, want, need, believe, agree, like, own, seem* — описують стани, а не процеси, тому опираються Continuous навіть коли зміст «просто зараз»: *I **know** the answer* (ніколи "I am knowing"). Пастка всередині пастки для UA: «я згоден» — короткий прикметник, тому калькується в *"I am agree"* — але *agree* це дієслово: **I agree**. Коли ж дієслово стану таки зʼявляється в 〜, значення зсунулося до діяльності: *I **am thinking** about the offer* (= обмірковую) vs *I **think** it is fine* (= моя думка).',
          },
        },
        {
          kind: 'prose',
          dive: 4,
          md: {
            en: 'Fine print on the ⤺〜 row: Perfect Continuous is picky about which verbs it accepts — the same state verbs resist it (*I **have known** her for years*, not “have been knowing”), and it prefers activities with duration (*wait, work, rain, debug*). It also carries a pragmatic flavor Perfect lacks: visible **side effects** (*Why are your eyes red? — I have been staring at logs*) and sometimes **incompleteness** (*I have been reading your RFC* — not finished; *I have read it* — done). These nuances get their own dive in m10.',
            uk: 'Дрібний шрифт про рядок ⤺〜: Perfect Continuous перебірливий до дієслів — ті самі дієслова стану його не приймають (*I **have known** her for years*, а не "have been knowing"), він любить діяльності з тривалістю (*wait, work, rain, debug*). А ще він несе прагматичний відтінок, якого немає в Perfect: видимі **сліди** (*Why are your eyes red? — I have been staring at logs*) і часом **незавершеність** (*I have been reading your RFC* — ще не дочитав; *I have read it* — готово). Ці нюанси отримають власне занурення в m10.',
          },
        },
      ],
    },

    // ── 3. TIMELINE NOTATION ────────────────────────────────────────────────
    {
      id: 'timeline-notation',
      title: { en: 'One timeline notation for every tense picture', uk: 'Одна нотація таймлайну для всіх картинок tenses' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Every tense diagram in this section — the Navigator above, the timeline figures in m7–m10, the tables — speaks one visual language, so you never re-learn the pictures. **TIME is color**: past is rose, present is cyan, future is violet. **The axis** runs left → right with a vertical **NOW** line in the middle. **ASPECT is a mark on the axis**: ● a dot for a whole fact, 〜 a wave for a process, ⤺ an arc bending back for a link-back, 〜⤺ wave + arc for a process running up to a point. **X marks the reference point** a Perfect form looks back from.',
            uk: 'Кожна діаграма tense у цьому розділі — Navigator вище, таймлайн-фігури в m7–m10, таблиці — говорить однією візуальною мовою, тож картинки не доведеться перевчати. **TIME — це колір**: минуле рожеве, теперішнє блакитне, майбутнє фіолетове. **Вісь** іде зліва → направо з вертикальною лінією **NOW** посередині. **ASPECT — позначка на осі**: ● крапка для цілого факту, 〜 хвиля для процесу, ⤺ дуга, що згинається назад, для звʼязку, 〜⤺ хвиля + дуга для процесу до точки. **X позначає точку відліку**, з якої Perfect дивиться назад.',
          },
        },
        {
          kind: 'table',
          caption: {
            en: 'The legend. Read any tense picture in the section with these five symbols.',
            uk: 'Легенда. Будь-яку картинку tense у розділі читайте цими пʼятьма символами.',
          },
          head: [
            { en: 'Symbol', uk: 'Символ' },
            { en: 'Means', uk: 'Означає' },
            { en: 'Example picture', uk: 'Приклад картинки' },
          ],
          rows: [
            [
              { en: 'NOW (vertical line)', uk: 'NOW (вертикальна лінія)' },
              { en: 'the moment of speaking', uk: 'момент мовлення' },
              { en: 'everything is placed relative to it', uk: 'усе розташовується відносно неї' },
            ],
            [
              { en: '● dot', uk: '● крапка' },
              { en: 'a whole event / fact', uk: 'ціла подія / факт' },
              { en: 'Past Simple: ● left of NOW', uk: 'Past Simple: ● ліворуч від NOW' },
            ],
            [
              { en: '〜 wave', uk: '〜 хвиля' },
              { en: 'a process with open edges', uk: 'процес із відкритими краями' },
              { en: 'Present Continuous: 〜 across NOW', uk: 'Present Continuous: 〜 через NOW' },
            ],
            [
              { en: '⤺ arc', uk: '⤺ дуга' },
              { en: 'a link back to something earlier', uk: 'звʼязок назад до ранішого' },
              { en: 'Present Perfect: ⤺ from NOW to a past ●', uk: 'Present Perfect: ⤺ від NOW до минулої ●' },
            ],
            [
              { en: 'X mark', uk: 'Позначка X' },
              { en: 'the reference point of a Perfect form', uk: 'точка відліку Perfect-форми' },
              { en: 'Past Perfect: X in the past, ● before it', uk: 'Past Perfect: X у минулому, ● перед нею' },
            ],
          ],
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: 'The notation is a friendly version of a classic idea from logic — **Reichenbach’s reference points**. Every tense relates three moments: **S** (speech = our NOW line), **E** (the event = our ●/〜), and **R** (the reference point = our X). Past Simple: E = R, both before S. Present Perfect: E before R, and R = S — the event is past but you *stand at now* looking back, which is why yesterday-words break it. Past Perfect: E before R before S — “before-before-now”, the earlier of two past events. Once you can place S, E and R, no tense contrast is mysterious again.',
            uk: 'Ця нотація — дружня версія класичної ідеї з логіки — **точок відліку Райхенбаха**. Кожен tense співвідносить три моменти: **S** (мовлення = наша лінія NOW), **E** (подія = наші ●/〜) і **R** (точка відліку = наш X). Past Simple: E = R, обидва до S. Present Perfect: E до R, а R = S — подія минула, але ви *стоїте в тепер* і дивитеся назад, тому слова-«вчора» її ламають. Past Perfect: E до R до S — «до того, що до тепер», раніша з двох минулих подій. Щойно ви вмієте розставити S, E та R — жоден контраст tenses більше не загадка.',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'The same machinery runs backwards: future-in-the-past', uk: 'Та сама механіка навпаки: future-in-the-past' },
          md: {
            en: 'Move the reference point into the past and point the arrow FORWARD from it and you get English’s mirror forms: *would* as the past of *will* (*He said he **would** deploy on Friday*), *was going to* for doomed plans (*I **was going to** refactor it, but…*). Same axis, same X — the arrow just flips. m11 (Choosing & narrative) and m15 (Reported speech) put these to work.',
            uk: 'Пересуньте точку відліку в минуле і спрямуйте стрілку від неї ВПЕРЕД — отримаєте дзеркальні форми: *would* як минуле від *will* (*He said he **would** deploy on Friday*), *was going to* для планів, що не збулися (*I **was going to** refactor it, but…*). Та сама вісь, той самий X — стрілка просто перевертається. m11 (вибір і нарація) та m15 (Reported speech) пускають їх у роботу.',
          },
        },
      ],
    },

    // ── 4. FREQUENCY & ROUTES ───────────────────────────────────────────────
    {
      id: 'frequency-and-routes',
      title: { en: 'What actually gets used — and your routes through the section', uk: 'Що реально вживається — і ваші маршрути розділом' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'The matrix has 12 cells, but speech does not use them evenly — not even close. Corpus counts of spoken English (Krámský 1969; Alzuhairy 2016) agree on a striking picture: **five forms carry ≈96% of everything said**. Present Simple alone is more than half. This is the best study-planning fact in English grammar: master five cells to near-automatic level and you cover 24 of every 25 sentences you will hear — then buy the remaining seven cells for recognition, cheaply, because you already own the machinery (be + V-ing, have + V3) they are built from.',
            uk: 'У матриці 12 клітинок, але мовлення вживає їх дуже нерівно. Корпусні підрахунки усної англійської (Krámský 1969; Alzuhairy 2016) сходяться на вражаючій картині: **пʼять форм несуть ≈96% усього сказаного**. Сам Present Simple — більше половини. Це найкорисніший факт для планування навчання в усій граматиці: доведіть пʼять клітинок до майже-автоматизму — і покриєте 24 з кожних 25 речень, які почуєте; а решту сім клітинок «докупите» для розпізнавання дешево, бо механіка (be + V-ing, have + V3), з якої вони зібрані, вже ваша.',
          },
        },
        {
          kind: 'table',
          caption: {
            en: 'Share of spoken English by verb form (Krámský 1969 / Alzuhairy 2016, via Ginseng English). The big five ≈ 96%; the other seven forms together ≈ 4%.',
            uk: 'Частка усної англійської за формами дієслова (Krámský 1969 / Alzuhairy 2016, за Ginseng English). Велика пʼятірка ≈ 96%; решта сім форм разом ≈ 4%.',
          },
          head: [
            { en: '#', uk: '#' },
            { en: 'Form', uk: 'Форма' },
            { en: 'Share of speech', uk: 'Частка мовлення' },
            { en: 'Where it lives', uk: 'Де живе' },
          ],
          rows: [
            [
              { en: '1', uk: '1' },
              { en: 'Present Simple ●', uk: 'Present Simple ●' },
              { en: '57.5%', uk: '57.5%' },
              { en: 'm7 — facts, habits, states', uk: 'm7 — факти, звички, стани' },
            ],
            [
              { en: '2', uk: '2' },
              { en: 'Past Simple ●', uk: 'Past Simple ●' },
              { en: '19.7%', uk: '19.7%' },
              { en: 'm8 — finished events, stories', uk: 'm8 — завершені події, оповідь' },
            ],
            [
              { en: '3', uk: '3' },
              { en: 'Future (will) ●', uk: 'Future (will) ●' },
              { en: '8.5%', uk: '8.5%' },
              { en: 'm9 — predictions, promises, decisions', uk: 'm9 — прогнози, обіцянки, рішення' },
            ],
            [
              { en: '4', uk: '4' },
              { en: 'Present Perfect ⤺', uk: 'Present Perfect ⤺' },
              { en: '6.0%', uk: '6.0%' },
              { en: 'm10 — result-now, experience', uk: 'm10 — результат-зараз, досвід' },
            ],
            [
              { en: '5', uk: '5' },
              { en: 'Present Continuous 〜', uk: 'Present Continuous 〜' },
              { en: '5.1%', uk: '5.1%' },
              { en: 'm7 — happening now, arrangements', uk: 'm7 — просто зараз, домовленості' },
            ],
            [
              { en: '6–12', uk: '6–12' },
              { en: 'the remaining seven forms', uk: 'решта сім форм' },
              { en: '≈4% combined', uk: '≈4% разом' },
              { en: 'm8–m11 — learn to RECOGNIZE first', uk: 'm8–m11 — спершу вчіться РОЗПІЗНАВАТИ' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'Effort follows frequency', uk: 'Зусилля йдуть за частотою' },
          md: {
            en: 'Drill to automatic: the big five. Learn to recognize confidently: Past Continuous, Past Perfect, Future forms of 〜 and ⤺. Do NOT grind Future Perfect Continuous to production-level — you will meet it a few times a year. The exercises across m6–m11 are weighted exactly this way.',
            uk: 'Тренуйте до автоматизму: велику пʼятірку. Вчіться впевнено розпізнавати: Past Continuous, Past Perfect, майбутні форми 〜 і ⤺. НЕ шліфуйте Future Perfect Continuous до рівня продукування — ви зустрінете його кілька разів на рік. Вправи в m6–m11 зважені саме так.',
          },
        },
        {
          kind: 'prose',
          md: {
            en: 'Section II gives you **four different tools** — deliberately different, so you can pick what clicks: the **★ Tense Navigator** (this page) for walking the matrix cell by cell; the **Sentence Morpher** (arrives with a later session on this page) for watching ONE sentence morph through all 12 cells; the **parametric timeline figure** inside m7–m10 for each tense’s picture in the shared notation; and the **★ Tense Chooser** (m11) that asks you three meaning questions and hands you the tense. Use one, use all — they teach the same matrix from four angles.',
            uk: 'Розділ II дає вам **чотири різні інструменти** — навмисно різні, щоб ви обрали той, що «клацне»: **★ Tense Navigator** (ця сторінка) — ходити матрицею клітинка за клітинкою; **Sentence Morpher** (зʼявиться на цій сторінці в пізнішій сесії) — дивитися, як ОДНЕ речення трансформується через усі 12 клітинок; **параметрична таймлайн-фігура** всередині m7–m10 — картинка кожного tense у спільній нотації; і **★ Tense Chooser** (m11), що ставить три питання про зміст і видає tense. Користуйтеся одним або всіма — вони вчать ту саму матрицю з чотирьох боків.',
          },
        },
        {
          kind: 'prose',
          md: {
            en: 'And the section reads at **four depths** — the switcher at the top of every tense module remembers your choice. ✈️ *Porthole* = this overview page: the whole system, no detail. 🚂 *Core* = the backbone blocks of every module (~15 minutes for the entire section). 🚶 *Full* adds connections, contrasts and argumentation. 🔬 *Deep* opens the fine print and exceptions. Spiral learning: finish the whole section at 🚂 before you deepen — the second pass at 🚶 will land on a map you already own. Collapsed blocks stay visible as thin stubs, so you always see where more depth is waiting.',
            uk: 'І розділ читається на **чотирьох глибинах** — перемикач угорі кожного tense-модуля памʼятає ваш вибір. ✈️ *Ілюмінатор* = ця оглядова сторінка: вся система без деталей. 🚂 *Основа* = кістякові блоки кожного модуля (~15 хвилин на весь розділ). 🚶 *Повний* додає звʼязки, контрасти й аргументацію. 🔬 *Глибоко* відкриває дрібний шрифт і винятки. Спіральне навчання: пройдіть увесь розділ на 🚂, перш ніж заглиблюватися — другий прохід на 🚶 ляже на карту, якою ви вже володієте. Згорнуті блоки лишаються видимими тонкими смужками, тож ви завжди бачите, де чекає глибина.',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 3,
          title: { en: 'How solid are those percentages?', uk: 'Наскільки надійні ці відсотки?' },
          md: {
            en: 'Corpus numbers vary with genre — academic prose uses more Present Simple and passives; conversation uses more Continuous; fiction runs on Past Simple. Krámský (1969) and Alzuhairy (2016) sampled different corpora decades apart and still agree on the shape: a huge Simple head, a thin Perfect/Continuous tail. Treat 57.5% as “more than half”, not as physics — the planning conclusion (master five cells first) survives any reasonable corpus.',
            uk: 'Корпусні числа коливаються за жанром — академічна проза має більше Present Simple і пасивів; розмова — більше Continuous; художня література їде на Past Simple. Krámský (1969) і Alzuhairy (2016) міряли різні корпуси з різницею в десятиліття — і форма та сама: величезна голова Simple, тонкий хвіст Perfect/Continuous. Сприймайте 57.5% як «більше половини», а не як фізику — висновок для планування (спершу пʼять клітинок) переживе будь-який розумний корпус.',
          },
        },
      ],
    },
  ],

  keyPoints: [
    {
      en: 'Every tense = TIME (past/present/future) × ASPECT (● fact · 〜 process · ⤺ link-back · 〜⤺ process-up-to). 3 × 4 = 12 — the whole system.',
      uk: 'Кожен tense = TIME (past/present/future) × ASPECT (● факт · 〜 процес · ⤺ звʼязок назад · 〜⤺ процес-до-точки). 3 × 4 = 12 — уся система.',
    },
    {
      en: 'Aspects share machinery across times: every Continuous is be + V-ing, every Perfect is have + V3 — only the auxiliary changes its time.',
      uk: 'Aspects ділять механіку між часами: кожен Continuous — be + V-ing, кожен Perfect — have + V3; час змінює лише допоміжне дієслово.',
    },
    {
      en: 'Five forms ≈ 96% of speech (Present Simple 57.5 · Past Simple 19.7 · will-future 8.5 · Present Perfect 6 · Present Continuous 5.1) — drill those first, recognize the rest.',
      uk: 'Пʼять форм ≈ 96% мовлення (Present Simple 57.5 · Past Simple 19.7 · will-future 8.5 · Present Perfect 6 · Present Continuous 5.1) — спершу тренуйте їх, решту — розпізнавайте.',
    },
    {
      en: 'Perfect is a LINK BACK from a reference point (X), not “a past action” — Ukrainian has no such form, so the ⤺ row needs the most deliberate practice.',
      uk: 'Perfect — це ЗВʼЯЗОК НАЗАД від точки відліку (X), а не «минула дія» — в українській такої форми немає, тому рядок ⤺ вимагає найсвідомішої практики.',
    },
    {
      en: 'One shared picture language everywhere: time = hue (rose/cyan/violet), aspect = mark (● 〜 ⤺ 〜⤺), NOW axis, X reference point.',
      uk: 'Одна спільна мова картинок усюди: час = відтінок (рожевий/блакитний/фіолетовий), aspect = позначка (● 〜 ⤺ 〜⤺), вісь NOW, точка відліку X.',
    },
    {
      en: 'Read the section in spirals: all six modules at 🚂 Core first (~15 min), then again at 🚶 Full, then 🔬 Deep — the switcher remembers your depth.',
      uk: 'Читайте розділ спіралями: спершу всі шість модулів на 🚂 Основі (~15 хв), потім знову на 🚶 Повному, потім 🔬 Глибоко — перемикач памʼятає вашу глибину.',
    },
  ],
  pitfalls: [
    {
      title: { en: '“I have finished it yesterday”', uk: '«I have finished it yesterday»' },
      body: {
        en: 'A finished-time word (yesterday, last week, in 2020) pins the event to a closed past → Past Simple: I finished it yesterday. Present Perfect looks back FROM NOW and refuses dated time. The single most common UA-speaker tense error.',
        uk: 'Слово завершеного часу (yesterday, last week, in 2020) прикріплює подію до закритого минулого → Past Simple: I finished it yesterday. Present Perfect дивиться назад ВІД ЗАРАЗ і не терпить датованого часу. Найчастіша tense-помилка україномовних.',
      },
    },
    {
      title: { en: '“I work on it right now”', uk: '«I work on it right now»' },
      body: {
        en: 'Ukrainian uses one present for both; English splits it. Happening at this moment → Present Continuous: I am working on it right now. Simple states the general fact: I work on this project (it is my job).',
        uk: 'Українська має один теперішній на обидва випадки; англійська його розщеплює. Відбувається цієї миті → Present Continuous: I am working on it right now. Simple констатує загальний факт: I work on this project (це моя робота).',
      },
    },
    {
      title: { en: '“I am agree” / “I am knowing”', uk: '«I am agree» / «I am knowing»' },
      body: {
        en: 'Agree is a verb, not an adjective: I agree. And state verbs (know, want, need, believe, like) resist Continuous even about now: I know the answer, never “I am knowing”.',
        uk: 'Agree — дієслово, а не прикметник: I agree. А дієслова стану (know, want, need, believe, like) опираються Continuous навіть про «зараз»: I know the answer, ніколи «I am knowing».',
      },
    },
    {
      title: { en: '“When the build will finish…”', uk: '«When the build will finish…»' },
      body: {
        en: 'After when / if / until / as soon as / before, English uses the PRESENT for future time: When the build finishes, I will deploy. If it fails, we will roll back. Will stays in the main clause only.',
        uk: 'Після when / if / until / as soon as / before англійська вживає PRESENT для майбутнього: When the build finishes, I will deploy. If it fails, we will roll back. Will лишається тільки в головному реченні.',
      },
    },
    {
      title: { en: '“I work here since 2022”', uk: '«I work here since 2022»' },
      body: {
        en: 'A period that started in the past and touches now is Perfect territory: I have worked (or have been working) here since 2022. Plain Present Simple loses the link; Past Simple (worked … since) breaks it completely.',
        uk: 'Період, що почався в минулому і торкається «зараз», — територія Perfect: I have worked (або have been working) here since 2022. Просте Present Simple губить звʼязок; Past Simple (worked … since) розриває його зовсім.',
      },
    },
    {
      title: { en: 'Hunting for the “correct tense” instead of the meaning', uk: 'Полювання на «правильний tense» замість змісту' },
      body: {
        en: 'There is often more than one grammatical option — the choice CHANGES the meaning: I read your RFC (done, whole) vs I have read it (and now I have opinions) vs I have been reading it (still in progress). Ask the two questions (when? what kind?) — do not search a rule list.',
        uk: 'Граматично правильних варіантів часто кілька — вибір ЗМІНЮЄ зміст: I read your RFC (готово, цілком) vs I have read it (і тепер маю думки) vs I have been reading it (ще в процесі). Ставте два питання (коли? який тип?) — не шукайте в списку правил.',
      },
    },
  ],
  exercises: [
    {
      id: 'ex-tense-system-1',
      kind: 'mcq',
      prompt: {
        en: 'The tense system is best described as…',
        uk: 'Систему tenses найкраще описати як…',
      },
      options: [
        '12 independent rules to memorize',
        '3 times × 4 aspects — one combining matrix',
        '5 basic tenses plus 7 exceptions',
      ],
      correct: 1,
      explain: {
        en: 'Every tense is a combination: WHEN (past/present/future) × WHAT KIND (simple/continuous/perfect/perfect continuous).',
        uk: 'Кожен tense — комбінація: КОЛИ (past/present/future) × ЯКИЙ ТИП (simple/continuous/perfect/perfect continuous).',
      },
      level: 'a2',
      tags: ['tenses', 'system'],
    },
    {
      id: 'ex-tense-system-2',
      kind: 'mcq',
      prompt: {
        en: 'Which aspect means “a link back from a reference point”?',
        uk: 'Який aspect означає «звʼязок назад від точки відліку»?',
      },
      options: ['Simple ●', 'Continuous 〜', 'Perfect ⤺'],
      correct: 2,
      explain: {
        en: 'Perfect (have + V3) connects an earlier event to a reference point: already done / experienced by then.',
        uk: 'Perfect (have + V3) звʼязує ранішу подію з точкою відліку: на той момент уже зроблено / пережито.',
      },
      level: 'a2',
      tags: ['tenses', 'aspect'],
    },
    {
      id: 'ex-tense-system-3',
      kind: 'gap',
      sentence: 'Every Continuous form is built from be + ___ .',
      answers: ['V-ing', 'ving', 'v-ing', 'verb-ing', '-ing'],
      hint: { en: 'the shared machinery of the 〜 row', uk: 'спільна механіка рядка 〜' },
      explain: {
        en: 'The 〜 row shares one mechanism: be + V-ing; only be changes its time (was/am/will be).',
        uk: 'Рядок 〜 ділить один механізм: be + V-ing; час змінює лише be (was/am/will be).',
      },
      level: 'a2',
      tags: ['tenses', 'form'],
    },
    {
      id: 'ex-tense-system-4',
      kind: 'gap',
      sentence: 'Every Perfect form is built from have + ___ .',
      answers: ['V3', 'v3', 'past participle', 'the past participle'],
      hint: { en: 'the shared machinery of the ⤺ row', uk: 'спільна механіка рядка ⤺' },
      explain: {
        en: 'The ⤺ row shares have + V3; only have changes its time (had/have/will have).',
        uk: 'Рядок ⤺ ділить have + V3; час змінює лише have (had/have/will have).',
      },
      level: 'a2',
      tags: ['tenses', 'form'],
    },
    {
      id: 'ex-tense-system-5',
      kind: 'mcq',
      prompt: {
        en: 'Name the cell: “will have been working”.',
        uk: 'Назвіть клітинку: «will have been working».',
      },
      options: ['Future Perfect', 'Future Perfect Continuous', 'Future Continuous'],
      correct: 1,
      explain: {
        en: 'will (future) + have been + V-ing (perfect continuous) = Future Perfect Continuous: a process running up to a future point.',
        uk: 'will (future) + have been + V-ing (perfect continuous) = Future Perfect Continuous: процес аж до майбутньої точки.',
      },
      level: 'b1',
      tags: ['tenses', 'system'],
    },
    {
      id: 'ex-tense-system-6',
      kind: 'gap',
      sentence: 'I ___ (fix) the bug — you can redeploy now.',
      answers: ['have fixed', "'ve fixed", 'has fixed'],
      hint: { en: 'result relevant NOW → the ⤺ aspect', uk: 'результат актуальний ЗАРАЗ → aspect ⤺' },
      explain: {
        en: 'The result matters at the moment of speaking and no past time is named → Present Perfect: have fixed.',
        uk: 'Результат важливий у момент мовлення, минулий час не названо → Present Perfect: have fixed.',
      },
      level: 'b1',
      tags: ['tenses', 'perfect'],
    },
    {
      id: 'ex-tense-system-7',
      kind: 'mcq',
      prompt: {
        en: '“I ___ the report yesterday.”',
        uk: '«I ___ the report yesterday.»',
      },
      options: ['have finished', 'finished', 'have been finishing'],
      correct: 1,
      explain: {
        en: 'Yesterday closes the time frame → Past Simple. Present Perfect cannot combine with finished-time words.',
        uk: 'Yesterday закриває часову рамку → Past Simple. Present Perfect не поєднується зі словами завершеного часу.',
      },
      level: 'a2',
      tags: ['tenses', 'perfect', 'past'],
    },
    {
      id: 'ex-tense-system-8',
      kind: 'gap',
      sentence: "Don't call me at nine — I ___ (interview) a candidate.",
      answers: ['will be interviewing', "'ll be interviewing"],
      hint: { en: 'inside a process at a future moment', uk: 'всередині процесу в майбутній момент' },
      explain: {
        en: 'A process in progress at a chosen future moment → Future Continuous: will be interviewing.',
        uk: 'Процес, що триватиме в обраний майбутній момент → Future Continuous: will be interviewing.',
      },
      level: 'b1',
      tags: ['tenses', 'future', 'continuous'],
    },
    {
      id: 'ex-tense-system-9',
      kind: 'mcq',
      prompt: {
        en: 'Which sentence is correct?',
        uk: 'Яке речення правильне?',
      },
      options: [
        'I am agree with your review.',
        'I am agreeing with your review.',
        'I agree with your review.',
      ],
      correct: 2,
      explain: {
        en: 'Agree is a verb (not an adjective) AND a state verb — plain Present Simple: I agree.',
        uk: 'Agree — дієслово (не прикметник) І дієслово стану — просте Present Simple: I agree.',
      },
      level: 'a2',
      tags: ['tenses', 'state-verbs'],
    },
    {
      id: 'ex-tense-system-10',
      kind: 'gap',
      sentence: 'When the build ___ (finish), I will deploy the fix.',
      answers: ['finishes', 'is finished', 'has finished'],
      hint: { en: 'time clause — no will inside', uk: 'підрядне часу — без will усередині' },
      explain: {
        en: 'After when/if/until/as soon as, English uses the present for future time: When the build finishes… Will stays in the main clause.',
        uk: 'Після when/if/until/as soon as англійська вживає теперішній для майбутнього: When the build finishes… Will лишається в головному реченні.',
      },
      level: 'b1',
      tags: ['tenses', 'future', 'time-clauses'],
    },
    {
      id: 'ex-tense-system-11',
      kind: 'gap',
      sentence: 'She ___ (work) here since 2022.',
      answers: ['has worked', 'has been working'],
      hint: { en: 'since + a period touching now', uk: 'since + період, що торкається «зараз»' },
      explain: {
        en: 'A period from a past start up to now → Present Perfect (or Perfect Continuous): has worked / has been working. Since kills Past Simple here.',
        uk: 'Період від минулого старту до «зараз» → Present Perfect (або Perfect Continuous): has worked / has been working. Since виключає Past Simple.',
      },
      level: 'b1',
      tags: ['tenses', 'perfect', 'since'],
    },
    {
      id: 'ex-tense-system-12',
      kind: 'mcq',
      prompt: {
        en: 'Which five forms cover ≈96% of spoken English?',
        uk: 'Які пʼять форм покривають ≈96% усної англійської?',
      },
      options: [
        'Present Simple, Past Simple, will-future, Present Perfect, Present Continuous',
        'Present Simple, Present Continuous, Past Continuous, Past Perfect, Future Perfect',
        'All four Present forms plus Past Simple',
      ],
      correct: 0,
      explain: {
        en: 'The corpus big five: Present Simple 57.5% · Past Simple 19.7% · will 8.5% · Present Perfect 6% · Present Continuous 5.1%.',
        uk: 'Корпусна велика пʼятірка: Present Simple 57.5% · Past Simple 19.7% · will 8.5% · Present Perfect 6% · Present Continuous 5.1%.',
      },
      level: 'a2',
      tags: ['tenses', 'frequency'],
    },
    {
      id: 'ex-tense-system-13',
      kind: 'mcq',
      prompt: {
        en: '“The service ___ when we opened the dashboard.” (the crash happened FIRST)',
        uk: '«The service ___ when we opened the dashboard.» (падіння сталося ПЕРШИМ)',
      },
      options: ['already crashed', 'had already crashed', 'has already crashed'],
      correct: 1,
      explain: {
        en: 'The earlier of two past events links back from a past reference point → Past Perfect: had already crashed (“before-before-now”).',
        uk: 'Раніша з двох минулих подій звʼязується назад від минулої точки відліку → Past Perfect: had already crashed («до того, що до тепер»).',
      },
      level: 'b1',
      tags: ['tenses', 'perfect', 'past'],
    },
    {
      id: 'ex-tense-system-14',
      kind: 'gap',
      sentence: 'Why are your eyes red? — I ___ (debug) this flaky test all morning.',
      answers: ['have been debugging', "'ve been debugging"],
      hint: { en: 'duration up to now + visible side effects', uk: 'тривалість до «зараз» + видимі сліди' },
      explain: {
        en: 'A process running up to now with visible traces → Present Perfect Continuous: have been debugging.',
        uk: 'Процес аж до «зараз» із видимими слідами → Present Perfect Continuous: have been debugging.',
      },
      level: 'b1',
      tags: ['tenses', 'perfect-continuous'],
    },
  ],
  seeAlso: [
    'm7-present-simple-continuous',
    'm8-past-simple-continuous',
    'm9-future-forms',
    'm10-perfect-family',
    'm11-choosing-narrative',
    'm17-modal-system',
  ],
  sources: [
    { title: 'Cambridge Dictionary — Tenses and time (English Grammar Today)', url: 'https://dictionary.cambridge.org/grammar/british-grammar/tenses-and-time' },
    { title: 'Cambridge Dictionary — Present perfect simple (I have worked)', url: 'https://dictionary.cambridge.org/grammar/british-grammar/present-perfect-simple-i-have-worked' },
    { title: 'British Council LearnEnglish — Talking about the present', url: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/talking-about-present' },
    { title: 'British Council LearnEnglish — Talking about the past', url: 'https://learnenglish.britishcouncil.org/grammar/english-grammar-reference/talking-about-past' },
    { title: 'Ginseng English — English Verb Tense Frequency (Krámský 1969; Alzuhairy 2016)', url: 'https://ginsengenglish.com/blog/english-verb-tense-frequency' },
  ],
};
