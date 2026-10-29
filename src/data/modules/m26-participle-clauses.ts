import type { Module } from '../types';

/*
 * CHANGED (A2): M26 · Participle clauses — Section V Advanced Grammar, wave A2 (★ clause-compressor with
 * the dangling-participle detector, TokenMorph family). Authored EN first, UA second; grammar terms stay
 * English in both languages; US English with a work/dev lean. Facts verified against British Council
 * LearnEnglish (Participle clauses, C1 — economical; present / past / perfect participles; used when the
 * participle and the main verb have the SAME subject; no tense of their own; also after before, after,
 * on, while; with + noun + participle; mostly written English · Clause structure and verb patterns — the
 * participle takes its subject from the main clause) and Cambridge (Clauses: finite and non-finite ·
 * Relative clauses — non-finite · Cambridge Dictionary, “dangling participle”: Arriving home, the door
 * was open).
 * Spine: a participle clause is a full clause with its subject, conjunction and auxiliary SQUEEZED out.
 * What it loses it borrows from the main clause — its subject and its time. So the one check that
 * matters: is the main-clause subject really the doer?
 */
export const m26: Module = {
  id: 'm26-participle-clauses',
  num: 26,
  section: 's4-advanced-grammar',
  order: 4,
  level: 'c1',
  title: { en: 'Participle clauses', uk: 'Participle clauses' },
  tagline: {
    en: 'Opening the logs, I found the error · Written in Rust, the service is fast · Having tested the build, we deployed it — and why “Having finished the migration, the database was restarted” is broken.',
    uk: 'Opening the logs, I found the error · Written in Rust, the service is fast · Having tested the build, we deployed it — і чому «Having finished the migration, the database was restarted» зламане.',
  },
  readMins: 22,
  mentalModel: {
    en: 'A participle clause is **a full clause, compressed**: *When I opened the logs, I found the error* → ***Opening** the logs, I found the error.* The conjunction, the subject and the auxiliary are squeezed out; one participle is left — **-ing** (active, same time) · **V3** (passive) · **Having + V3** (earlier). What the clause loses, it **borrows from the main clause**: its time from the main verb and — the part that matters — **its subject from the main subject**. So every participle clause carries one test: *who is the subject after the comma — and is that really who did it?* If not, the participle **dangles**: *Walking into the office, the coffee smelled amazing* means the coffee walked in.',
    uk: 'Participle clause — це **повне речення, стиснуте**: *When I opened the logs, I found the error* → ***Opening** the logs, I found the error.* Сполучник, підмет і допоміжне дієслово вичавлено; лишається один participle — **-ing** (активне, одночасно) · **V3** (пасивне) · **Having + V3** (раніше). Те, що речення втратило, воно **позичає в головного речення**: час — у головного дієслова, а — що найважливіше — **підмет — у головного підмета**. Тож кожна participle clause несе одну перевірку: *хто підмет після коми — і чи справді це той, хто діяв?* Якщо ні, participle **«бовтається» (dangles)**: *Walking into the office, the coffee smelled amazing* означає, що в офіс зайшла кава.',
  },
  topics: [
    // ── 1. -ING CLAUSES ────────────────────────────────────────────────────
    {
      id: 'ing-clauses',
      title: { en: '-ing clauses: same time, reason, result', uk: '-ing clauses: одночасність, причина, результат' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'An **-ing** (present participle) clause replaces an active clause whose subject is the same as the main subject. It can mean the same time (*Opening the logs, I found…* = When I opened…), a reason (*Not knowing the password, I called IT* = Because I didn’t know…) or a result when it comes **after** the main clause (*The deploy failed, **leaving** 3% of users offline*). The clause has **no tense of its own** — the main verb sets the time (British Council).',
            uk: '**-ing** (present participle) clause замінює активне речення, підмет якого збігається з головним. Воно може означати одночасність (*Opening the logs, I found…* = When I opened…), причину (*Not knowing the password, I called IT* = Because I didn’t know…) або результат, коли стоїть **після** головного речення (*The deploy failed, **leaving** 3% of users offline*). **Власного часу** в нього немає — час задає головне дієслово (British Council).',
          },
        },
        {
          kind: 'sim',
          sim: 'clause-compressor',
          caption: {
            en: 'Clause Compressor: pick what the clause says and watch it shrink — the conjunction, subject and auxiliary fade out, a participle is left, and the main clause never moves. Under every frame, the doer check shows which subject the participle borrows. The Dangling detector track walks a broken sentence through its two fixes.',
            uk: 'Clause Compressor: оберіть, що каже речення, і подивіться, як воно стискається — сполучник, підмет і допоміжне дієслово зникають, лишається participle, а головне речення не рухається. Під кожним кадром перевірка виконавця показує, який підмет позичає participle. Режим Dangling detector проводить зламане речення через два виправлення.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Meaning', uk: 'Значення' },
            { en: 'Full clause', uk: 'Повне речення' },
            { en: 'Participle clause', uk: 'Participle clause' },
          ],
          rows: [
            [
              { en: 'same time', uk: 'одночасно' },
              { en: 'While I was reviewing the PR, I found a race condition.', uk: 'While I was reviewing the PR, I found a race condition.' },
              { en: '(While) reviewing the PR, I found a race condition.', uk: '(While) reviewing the PR, I found a race condition.' },
            ],
            [
              { en: 'reason', uk: 'причина' },
              { en: 'Because she knew the codebase, she fixed it in an hour.', uk: 'Because she knew the codebase, she fixed it in an hour.' },
              { en: 'Knowing the codebase, she fixed it in an hour.', uk: 'Knowing the codebase, she fixed it in an hour.' },
            ],
            [
              { en: 'negative reason', uk: 'заперечна причина' },
              { en: 'Because I didn’t know the password, I called IT.', uk: 'Because I didn’t know the password, I called IT.' },
              { en: 'Not knowing the password, I called IT.', uk: 'Not knowing the password, I called IT.' },
            ],
            [
              { en: 'result (after the main clause)', uk: 'результат (після головного речення)' },
              { en: 'The deploy failed, and this left 3% of users offline.', uk: 'The deploy failed, and this left 3% of users offline.' },
              { en: 'The deploy failed, leaving 3% of users offline.', uk: 'The deploy failed, leaving 3% of users offline.' },
            ],
          ],
          caption: {
            en: 'British Council (Participle clauses): present participle clauses express the same time, a reason or a result; the participle and the main verb share one subject.',
            uk: 'British Council (Participle clauses): present participle clauses виражають одночасність, причину чи результат; participle і головне дієслово мають один підмет.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'not goes first: “Not knowing…”', uk: 'not іде першим: «Not knowing…»' },
          md: {
            en: 'A negative participle clause puts *not* **before** the participle: ✓ ***Not knowing** the password, I called IT.* Not ✕ *Knowing not…*, and never with do: ✕ *Don’t knowing…* — participles take no auxiliary.',
            uk: 'Заперечна participle clause ставить *not* **перед** participle: ✓ ***Not knowing** the password, I called IT.* Не ✕ *Knowing not…* і ніколи з do: ✕ *Don’t knowing…* — participles не беруть допоміжного дієслова.',
          },
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'Ukrainian already has this: «дієприслівниковий зворот»', uk: 'В українській це вже є: дієприслівниковий зворот' },
          md: {
            en: '*«**Відкриваючи** логи, я знайшов помилку»* · *«**Не знаючи** пароля, я зателефонував в IT»* — the Ukrainian *дієприслівник* works the same way and follows the same rule: its doer must be the subject of the sentence. So the instinct is already there; the trap is only the English **forms** (-ing vs V3 vs Having + V3).',
            uk: '*«**Відкриваючи** логи, я знайшов помилку»* · *«**Не знаючи** пароля, я зателефонував в IT»* — український дієприслівник працює так само й підкоряється тому самому правилу: його виконавець має бути підметом речення. Тож чуття вже є; пастка лише в англійських **формах** (-ing vs V3 vs Having + V3).',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Keeping the conjunction.** *when, while, before, after, since* can stay in front of the -ing form and make the link explicit: ***When** opening a ticket, add the logs* · ***Before** merging, rebase on main* · ***Since** joining the team, she has shipped three features.* This is common in instructions and docs, where a bare -ing could be ambiguous.',
            uk: '**Збережений сполучник.** *when, while, before, after, since* можуть лишатися перед -ing і робити звʼязок явним: ***When** opening a ticket, add the logs* · ***Before** merging, rebase on main* · ***Since** joining the team, she has shipped three features.* Це поширено в інструкціях і документації, де голе -ing могло б бути двозначним.',
          },
        },
        {
          kind: 'prose',
          dive: 4,
          md: {
            en: '**Fine print: register.** Participle clauses are mostly a feature of written English — reports, documentation, journalism (British Council). In a chat or a stand-up, the full clause is more natural: *I reviewed your PR and left some comments* sounds human; *Having reviewed your PR, I left some comments* sounds like a formal email.',
            uk: '**Дрібний шрифт: регістр.** Participle clauses — переважно ознака письмової англійської: звіти, документація, журналістика (British Council). У чаті чи на стендапі природніше повне речення: *I reviewed your PR and left some comments* звучить по-людськи; *Having reviewed your PR, I left some comments* — як формальний лист.',
          },
        },
      ],
    },

    // ── 2. -ED CLAUSES ─────────────────────────────────────────────────────
    {
      id: 'ed-clauses',
      title: { en: '-ed clauses: the passive, compressed', uk: '-ed clauses: стиснутий passive' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'A **past participle (V3)** clause compresses a **passive** clause: *Because it was written in Rust, the service is fast* → ***Written** in Rust, the service is fast.* The main subject is the thing that **undergoes** the action. Typical meanings: a reason (*Written in Rust…*), a condition (***Used** correctly, the tool saves hours* = If it is used correctly) and extra information (*The report, **published** on Monday, …*).',
            uk: '**Past participle (V3)** clause стискає **пасивне** речення: *Because it was written in Rust, the service is fast* → ***Written** in Rust, the service is fast.* Підмет головного речення — те, над чим **виконують** дію. Типові значення: причина (*Written in Rust…*), умова (***Used** correctly, the tool saves hours* = If it is used correctly) і додаткова інформація (*The report, **published** on Monday, …*).',
          },
        },
        {
          kind: 'compare',
          a: { en: '-ing — the subject DOES it', uk: '-ing — підмет РОБИТЬ' },
          b: { en: 'V3 — it is done TO the subject', uk: 'V3 — це роблять З підметом' },
          rows: [
            [
              { en: 'Example', uk: 'Приклад' },
              { en: 'Writing the docs, I found three outdated endpoints.', uk: 'Writing the docs, I found three outdated endpoints.' },
              { en: 'Written in Rust, the service is fast.', uk: 'Written in Rust, the service is fast.' },
            ],
            [
              { en: 'Full clause', uk: 'Повне речення' },
              { en: 'While I was writing the docs, …', uk: 'While I was writing the docs, …' },
              { en: 'Because it was written in Rust, …', uk: 'Because it was written in Rust, …' },
            ],
            [
              { en: 'Wrong swap', uk: 'Хибна заміна' },
              { en: '✕ Written the docs, I found …', uk: '✕ Written the docs, I found …' },
              { en: '✕ Writing in Rust, the service is fast.', uk: '✕ Writing in Rust, the service is fast.' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'Active or passive? Ask who does it', uk: 'Active чи passive? Спитайте, хто це робить' },
          md: {
            en: 'Ukrainian *«написаний на Rust»* (дієприкметник) and *«пишучи»* (дієприслівник) look different, so UA speakers rarely mix the meanings — but they do mix the **English forms**: ✕ *Writing in Rust, the service is fast* says the service writes. If the main subject receives the action → **V3**.',
            uk: 'Українські *«написаний на Rust»* (дієприкметник) і *«пишучи»* (дієприслівник) виглядають по-різному, тож україномовні рідко плутають значення, — але плутають **англійські форми**: ✕ *Writing in Rust, the service is fast* каже, що сервіс пише. Якщо підмет головного речення зазнає дії → **V3**.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Meaning', uk: 'Значення' },
            { en: 'Example', uk: 'Приклад' },
            { en: '= Full clause', uk: '= Повне речення' },
          ],
          rows: [
            [
              { en: 'reason', uk: 'причина' },
              { en: 'Built on open standards, the API is easy to integrate.', uk: 'Built on open standards, the API is easy to integrate.' },
              { en: 'Because it is built on open standards, …', uk: 'Because it is built on open standards, …' },
            ],
            [
              { en: 'condition', uk: 'умова' },
              { en: 'Used correctly, feature flags make releases boring.', uk: 'Used correctly, feature flags make releases boring.' },
              { en: 'If they are used correctly, …', uk: 'If they are used correctly, …' },
            ],
            [
              { en: 'extra information', uk: 'додаткова інформація' },
              { en: 'The postmortem, written by the on-call team, lists six actions.', uk: 'The postmortem, written by the on-call team, lists six actions.' },
              { en: 'The postmortem, which was written by …, …', uk: 'The postmortem, which was written by …, …' },
            ],
          ],
          caption: {
            en: 'British Council (Participle clauses): past participle clauses normally have a passive meaning and can express a condition, a reason or extra information about the subject.',
            uk: 'British Council (Participle clauses): past participle clauses зазвичай мають пасивне значення й можуть виражати умову, причину чи додаткову інформацію про підмет.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**“Being” for a reason.** *Being* + adjective / noun / V3 gives a reason based on a state: ***Being** new to the team, I asked a lot of questions* · ***Being** the only Go developer, she reviews every Go PR.* For a plain passive reason, the bare V3 is enough — ✕ *Being written in Rust, …* adds nothing to *Written in Rust, …*.',
            uk: '**«Being» для причини.** *Being* + прикметник / іменник / V3 дає причину, що спирається на стан: ***Being** new to the team, I asked a lot of questions* · ***Being** the only Go developer, she reviews every Go PR.* Для простої пасивної причини вистачає голого V3 — ✕ *Being written in Rust, …* нічого не додає до *Written in Rust, …*.',
          },
        },
      ],
    },

    // ── 3. HAVING DONE ─────────────────────────────────────────────────────
    {
      id: 'having-done',
      title: { en: 'Having done: first this, then that', uk: 'Having done: спершу одне, потім інше' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'A plain -ing clause sounds **simultaneous**. To say the action was **finished before** the main one, use the perfect participle: ***Having tested** the build, we deployed it* (British Council). The passive version is ***Having been** + V3*: ***Having been tested** on staging, the build was promoted to production.* *After + -ing* says the same as *Having + V3* and is just as common.',
            uk: 'Просте -ing звучить **одночасно**. Щоб сказати, що дію **завершено раніше** за головну, вживайте perfect participle: ***Having tested** the build, we deployed it* (British Council). Пасивна версія — ***Having been** + V3*: ***Having been tested** on staging, the build was promoted to production.* *After + -ing* каже те саме, що *Having + V3*, і вживається так само часто.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Form', uk: 'Форма' },
            { en: 'Meaning', uk: 'Значення' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: '-ing', uk: '-ing' },
              { en: 'at the same time', uk: 'одночасно' },
              { en: 'Monitoring the dashboards, we saw the spike.', uk: 'Monitoring the dashboards, we saw the spike.' },
            ],
            [
              { en: 'Having + V3', uk: 'Having + V3' },
              { en: 'finished before (active)', uk: 'завершено раніше (active)' },
              { en: 'Having tested the build, we deployed it.', uk: 'Having tested the build, we deployed it.' },
            ],
            [
              { en: 'After + -ing', uk: 'After + -ing' },
              { en: 'the same, everyday', uk: 'те саме, повсякденно' },
              { en: 'After testing the build, we deployed it.', uk: 'After testing the build, we deployed it.' },
            ],
            [
              { en: 'Having been + V3', uk: 'Having been + V3' },
              { en: 'finished before (passive)', uk: 'завершено раніше (passive)' },
              { en: 'Having been tested on staging, the build was promoted.', uk: 'Having been tested on staging, the build was promoted.' },
            ],
            [
              { en: 'On + -ing', uk: 'On + -ing' },
              { en: 'immediately after', uk: 'одразу після' },
              { en: 'On receiving the alert, the on-call engineer opened a bridge.', uk: 'On receiving the alert, the on-call engineer opened a bridge.' },
            ],
          ],
          caption: {
            en: 'British Council (Participle clauses): perfect participle clauses show that the action was completed before the main action; participle clauses also follow before, after, on and while.',
            uk: 'British Council (Participle clauses): perfect participle clauses показують, що дію завершено до головної; participle clauses також ідуть після before, after, on і while.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '“Testing the build, we deployed it” — at the same time?', uk: '«Testing the build, we deployed it» — одночасно?' },
          md: {
            en: 'With a plain -ing, the reader hears two actions at once — testing *while* deploying. For a sequence, mark it: ✓ ***Having tested** the build, …* or ✓ ***After testing** the build, …*. And keep active vs passive straight: ✕ *Having **tested** on staging, the build was promoted* says the build did the testing → ✓ *Having **been tested**…*.',
            uk: 'Із простим -ing читач чує дві дії водночас — тестували, *поки* деплоїли. Для послідовності позначте її: ✓ ***Having tested** the build, …* або ✓ ***After testing** the build, …*. І не плутайте active з passive: ✕ *Having **tested** on staging, the build was promoted* каже, що тестувала збірка → ✓ *Having **been tested**…*.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Negative perfect participles.** *not* goes first here too: ***Not having heard** back, I followed up on Friday.* *Having not heard…* also occurs, but *Not having* is the standard order.',
            uk: '**Заперечні perfect participles.** *not* і тут іде першим: ***Not having heard** back, I followed up on Friday.* *Having not heard…* теж трапляється, але стандартний порядок — *Not having*.',
          },
        },
      ],
    },

    // ── 4. DANGLING PARTICIPLES ────────────────────────────────────────────
    {
      id: 'dangling-participles',
      title: { en: 'Dangling participles: who is doing it?', uk: 'Dangling participles: хто це робить?' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'A participle clause has no subject of its own, so the reader takes **the subject of the main clause** as its doer. When that subject cannot be the doer, the participle **dangles**: *Arriving home, the door was open* — as if the door arrived (Cambridge Dictionary). The meaning is usually guessable, but the sentence reads as careless or comic, and in specs and postmortems it can genuinely mislead about **who did what**.',
            uk: 'Participle clause не має власного підмета, тож читач бере **підмет головного речення** за його виконавця. Коли цей підмет не може бути виконавцем, participle **«бовтається» (dangles)**: *Arriving home, the door was open* — ніби додому прибули двері (Cambridge Dictionary). Зміст зазвичай можна вгадати, але речення звучить недбало або комічно, а в специфікаціях і постмортемах може справді ввести в оману щодо того, **хто що зробив**.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Version', uk: 'Версія' },
            { en: 'Sentence', uk: 'Речення' },
            { en: 'The doer check', uk: 'Перевірка виконавця' },
          ],
          rows: [
            [
              { en: '✕ dangling', uk: '✕ dangling' },
              { en: 'Having finished the migration, the database was restarted.', uk: 'Having finished the migration, the database was restarted.' },
              { en: 'finished → the database? No — we did.', uk: 'finished → the database? Ні — ми.' },
            ],
            [
              { en: '✓ fix 1: doer as subject', uk: '✓ виправлення 1: виконавець — підмет' },
              { en: 'Having finished the migration, we restarted the database.', uk: 'Having finished the migration, we restarted the database.' },
              { en: 'finished → we ✓', uk: 'finished → we ✓' },
            ],
            [
              { en: '✓ fix 2: full clause', uk: '✓ виправлення 2: повне речення' },
              { en: 'After we had finished the migration, the database was restarted.', uk: 'After we had finished the migration, the database was restarted.' },
              { en: 'the clause has its own subject (we)', uk: 'речення має власний підмет (we)' },
            ],
          ],
          caption: {
            en: 'British Council (Participle clauses; Clause structure and verb patterns): the participle takes its subject from the main clause, so the two must be the same.',
            uk: 'British Council (Participle clauses; Clause structure and verb patterns): participle бере підмет із головного речення, тож вони мають збігатися.',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          title: { en: 'Why postmortems are full of danglers', uk: 'Чому в постмортемах повно danglers' },
          md: {
            en: 'Incident writing prefers the passive for systems (m24): *the database **was restarted**, the cache **was flushed***. Put an active participle in front — *Having finished the migration, …* — and the passive main clause hands it the wrong subject. The detector question catches it every time: **who is the subject after the comma, and did they do the -ing / Having part?**',
            uk: 'Тексти про інциденти віддають перевагу passive для систем (m24): *the database **was restarted**, the cache **was flushed***. Поставте попереду активний participle — *Having finished the migration, …* — і пасивне головне речення віддасть йому чужий підмет. Питання детектора ловить це щоразу: **хто підмет після коми і чи він виконав частину з -ing / Having?**',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '“there” and “it” do not rescue a participle', uk: '«there» та «it» не рятують participle' },
          md: {
            en: '✕ *Walking into the office, **there** was a smell of coffee* · ✕ *Looking at the logs, **it** was clear that the cache had failed.* An empty subject cannot walk or look. Name the person: ✓ *Looking at the logs, **we** saw that the cache had failed.*',
            uk: '✕ *Walking into the office, **there** was a smell of coffee* · ✕ *Looking at the logs, **it** was clear that the cache had failed.* Порожній підмет не вміє ходити чи дивитися. Назвіть людину: ✓ *Looking at the logs, **we** saw that the cache had failed.*',
          },
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'The same rule as in Ukrainian', uk: 'Те саме правило, що й в українській' },
          md: {
            en: 'Ukrainian style guides flag exactly this error with the *дієприслівник*: ✕ *«Завершивши міграцію, база даних була перезапущена»*. If the Ukrainian version sounds wrong, the English one is wrong too — a useful self-check.',
            uk: 'Українські посібники зі стилістики позначають саме цю помилку з дієприслівником: ✕ *«Завершивши міграцію, база даних була перезапущена»*. Якщо українська версія звучить неправильно, англійська теж неправильна — корисна самоперевірка.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Keeping after/when does not help.** ✕ ***After** finishing the migration, the database was restarted* dangles just as much: *after + -ing* still borrows the main subject. Only a real subject in the clause (*After **we** had finished…*) stops the borrowing.',
            uk: '**Збережені after/when не допомагають.** ✕ ***After** finishing the migration, the database was restarted* «бовтається» так само: *after + -ing* однаково позичає головний підмет. Позичання зупиняє лише справжній підмет у реченні (*After **we** had finished…*).',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: the accepted exceptions', uk: 'Дрібний шрифт: прийнятні винятки' },
          md: {
            en: 'Some participles have become fixed comment phrases about the speaker’s view and never dangle: *Generally speaking, … · Judging by the logs, … · Considering the deadline, … · Given the risk, … · Assuming the tests pass, …*. And an **absolute** clause brings its own subject, so nothing is borrowed: ***Weather permitting**, we’ll deploy on Friday* · ***All things considered**, the launch went well* · ***With the tests passing**, we merged* (British Council: with + noun + participle).',
            uk: 'Деякі participles стали сталими коментарями про погляд мовця й ніколи не «бовтаються»: *Generally speaking, … · Judging by the logs, … · Considering the deadline, … · Given the risk, … · Assuming the tests pass, …*. А **absolute** clause приносить власний підмет, тож нічого не позичається: ***Weather permitting**, we’ll deploy on Friday* · ***All things considered**, the launch went well* · ***With the tests passing**, we merged* (British Council: with + noun + participle).',
          },
        },
      ],
    },
  ],
  keyPoints: [
    {
      en: 'A participle clause = a full clause with its conjunction, subject and auxiliary squeezed out; it is possible only when both clauses share one subject.',
      uk: 'Participle clause = повне речення без сполучника, підмета й допоміжного дієслова; можливе лише тоді, коли обидва речення мають один підмет.',
    },
    {
      en: '-ing = active, same time / reason / result · V3 = passive · Having + V3 = finished earlier · Having been + V3 = earlier, passive.',
      uk: '-ing = active, одночасність / причина / результат · V3 = passive · Having + V3 = завершено раніше · Having been + V3 = раніше, passive.',
    },
    {
      en: 'The clause has no tense of its own: the main verb sets the time.',
      uk: 'Власного часу речення не має: час задає головне дієслово.',
    },
    {
      en: 'Negatives put not first: Not knowing … · Not having heard ….',
      uk: 'У запереченні not іде першим: Not knowing … · Not having heard ….',
    },
    {
      en: 'The doer check: the subject after the comma must be who did (or underwent) the participle — otherwise it dangles.',
      uk: 'Перевірка виконавця: підмет після коми має бути тим, хто виконав (чи зазнав) дії participle, — інакше він «бовтається».',
    },
    {
      en: 'Two fixes: make the doer the main subject, or give the clause its own subject back. Mostly a written style — speech prefers full clauses.',
      uk: 'Два виправлення: зробити виконавця головним підметом або повернути реченню власний підмет. Переважно письмовий стиль — мовлення віддає перевагу повним реченням.',
    },
  ],
  pitfalls: [
    {
      title: { en: '“Having finished the migration, the database was restarted”', uk: '«Having finished the migration, the database was restarted»' },
      body: {
        en: 'The database finished nothing. Make the doer the subject (we restarted …) or write a full clause (After we had finished …).',
        uk: 'База нічого не завершувала. Зробіть виконавця підметом (we restarted …) або напишіть повне речення (After we had finished …).',
      },
    },
    {
      title: { en: '“Writing in Rust, the service is fast”', uk: '«Writing in Rust, the service is fast»' },
      body: { en: 'The service is written, it does not write: Written in Rust, …', uk: 'Сервіс написали, він не пише: Written in Rust, …' },
    },
    {
      title: { en: '“Testing the build, we deployed it” for a sequence', uk: '«Testing the build, we deployed it» для послідовності' },
      body: { en: 'Plain -ing sounds simultaneous; use Having tested or After testing.', uk: 'Просте -ing звучить одночасно; вживайте Having tested або After testing.' },
    },
    {
      title: { en: '“Having tested on staging, the build…”', uk: '«Having tested on staging, the build…»' },
      body: { en: 'The build was tested: Having been tested on staging, ….', uk: 'Збірку тестували: Having been tested on staging, ….' },
    },
    {
      title: { en: '“Knowing not …” · “Don’t knowing …”', uk: '«Knowing not …» · «Don’t knowing …»' },
      body: { en: 'not goes before the participle, with no auxiliary: Not knowing ….', uk: 'not стоїть перед participle, без допоміжного дієслова: Not knowing ….' },
    },
    {
      title: { en: '“Looking at the logs, it was clear…”', uk: '«Looking at the logs, it was clear…»' },
      body: { en: 'it and there cannot look or walk — name the person: we saw that ….', uk: 'it і there не вміють дивитися чи ходити — назвіть людину: we saw that ….' },
    },
    {
      title: { en: 'Participle clauses in chat', uk: 'Participle clauses у чаті' },
      body: {
        en: '“Having reviewed your PR, I left comments” reads like a formal letter; in Slack say “I reviewed your PR and left comments”.',
        uk: '«Having reviewed your PR, I left comments» читається як формальний лист; у Slack кажіть «I reviewed your PR and left comments».',
      },
    },
  ],
  exercises: [
    {
      id: 'ex-participle-clauses-1',
      kind: 'mcq',
      prompt: { en: '___ the logs, I found the error.', uk: 'Відкриваючи логи, я знайшов помилку.' },
      options: ['Opening', 'Opened', 'To open'],
      correct: 0,
      explain: { en: 'I opened them (active, same time) → -ing.', uk: 'Відкривав я (active, одночасно) → -ing.' },
      level: 'c1',
      tags: ['participle-clauses', 'ing'],
    },
    {
      id: 'ex-participle-clauses-2',
      kind: 'gap',
      sentence: '___ (write) in Rust, the service handles 50k requests per second.',
      answers: ['Written'],
      hint: { en: 'the service was …', uk: 'the service was …' },
      explain: { en: 'The service was written → passive → V3: Written.', uk: 'Сервіс написали → passive → V3: Written.' },
      level: 'c1',
      tags: ['participle-clauses', 'ed', 'passive'],
    },
    {
      id: 'ex-participle-clauses-3',
      kind: 'mcq',
      prompt: { en: '___ the build, we deployed it to production.', uk: 'Протестувавши збірку, ми задеплоїли її в продакшн.' },
      options: ['Having tested', 'Having been tested', 'Tested'],
      correct: 0,
      explain: { en: 'We tested first (active, earlier) → Having + V3.', uk: 'Спершу ми тестували (active, раніше) → Having + V3.' },
      level: 'c1',
      tags: ['participle-clauses', 'having'],
    },
    {
      id: 'ex-participle-clauses-4',
      kind: 'mcq',
      prompt: { en: '___ on staging, the build was promoted to production.', uk: 'Протестовану на staging збірку перевели в продакшн.' },
      options: ['Having tested', 'Having been tested', 'Testing'],
      correct: 1,
      explain: { en: 'The build was tested earlier → Having been + V3.', uk: 'Збірку протестували раніше → Having been + V3.' },
      level: 'c1',
      tags: ['participle-clauses', 'having', 'passive'],
    },
    {
      id: 'ex-participle-clauses-5',
      kind: 'gap',
      sentence: '___ (not know) the password, I called IT.',
      answers: ['Not knowing'],
      hint: { en: 'negative reason', uk: 'заперечна причина' },
      explain: { en: 'not goes before the participle: Not knowing.', uk: 'not стоїть перед participle: Not knowing.' },
      level: 'c1',
      tags: ['participle-clauses', 'ing', 'negative'],
    },
    {
      id: 'ex-participle-clauses-6',
      kind: 'mcq',
      prompt: { en: 'Which sentence has a dangling participle?', uk: 'У якому реченні dangling participle?' },
      options: [
        'Walking into the office, I smelled fresh coffee.',
        'Walking into the office, the coffee smelled amazing.',
        'As I walked into the office, the coffee smelled amazing.',
      ],
      correct: 1,
      explain: {
        en: 'Walking borrows the main subject — the coffee. The coffee did not walk in.',
        uk: 'Walking позичає головний підмет — the coffee. Кава в офіс не заходила.',
      },
      level: 'c1',
      tags: ['participle-clauses', 'dangling'],
    },
    {
      id: 'ex-participle-clauses-7',
      kind: 'mcq',
      prompt: {
        en: '“Having finished the migration, the database was restarted.” — The best fix?',
        uk: '«Having finished the migration, the database was restarted.» — Найкраще виправлення?',
      },
      options: [
        'Having finished the migration, we restarted the database.',
        'Having finished the migration, the database restarted.',
        'After finishing the migration, the database was restarted.',
      ],
      correct: 0,
      explain: {
        en: 'Make the real doer (we) the subject. The other two still borrow the database.',
        uk: 'Зробіть справжнього виконавця (we) підметом. Інші два однаково позичають the database.',
      },
      level: 'c1',
      tags: ['participle-clauses', 'dangling'],
    },
    {
      id: 'ex-participle-clauses-8',
      kind: 'mcq',
      prompt: { en: 'When can you turn a clause into a participle clause?', uk: 'Коли речення можна перетворити на participle clause?' },
      options: [
        'Only when both clauses have the same subject.',
        'Always, if the sentence is long.',
        'Only when the main verb is in the past.',
      ],
      correct: 0,
      explain: {
        en: 'The participle borrows the main subject, so the subjects must match (British Council).',
        uk: 'Participle позичає головний підмет, тож підмети мають збігатися (British Council).',
      },
      level: 'c1',
      tags: ['participle-clauses', 'rule'],
    },
    {
      id: 'ex-participle-clauses-9',
      kind: 'mcq',
      prompt: { en: 'After ___ the incident report, she closed the ticket.', uk: 'Прочитавши звіт про інцидент, вона закрила тікет.' },
      options: ['reading', 'read', 'to read'],
      correct: 0,
      explain: { en: 'after + -ing = after she had read.', uk: 'after + -ing = after she had read.' },
      level: 'c1',
      tags: ['participle-clauses', 'having'],
    },
    {
      id: 'ex-participle-clauses-10',
      kind: 'mcq',
      prompt: { en: 'On ___ the alert, the on-call engineer opened a bridge.', uk: 'Отримавши сповіщення, черговий інженер відкрив бридж.' },
      options: ['receiving', 'received', 'receive'],
      correct: 0,
      explain: { en: 'on + -ing = immediately after.', uk: 'on + -ing = одразу після.' },
      level: 'c1',
      tags: ['participle-clauses', 'ing'],
    },
    {
      id: 'ex-participle-clauses-11',
      kind: 'mcq',
      prompt: { en: '“Testing the build, we deployed it.” — What does it suggest?', uk: '«Testing the build, we deployed it.» — Що це означає?' },
      options: [
        'We tested and deployed at the same time.',
        'We tested first, then deployed.',
        'Someone else tested it.',
      ],
      correct: 0,
      explain: {
        en: 'A plain -ing clause is heard as simultaneous. For a sequence: Having tested / After testing.',
        uk: 'Просте -ing сприймається як одночасне. Для послідовності: Having tested / After testing.',
      },
      level: 'c1',
      tags: ['participle-clauses', 'meaning'],
    },
    {
      id: 'ex-participle-clauses-12',
      kind: 'gap',
      sentence: '___ (finish) the review, Anna merged the PR.',
      answers: ['Having finished', 'After finishing'],
      hint: { en: 'earlier action', uk: 'раніша дія' },
      explain: { en: 'Finished before merging → Having + V3 (or After + -ing).', uk: 'Завершила до мерджу → Having + V3 (або After + -ing).' },
      level: 'c1',
      tags: ['participle-clauses', 'having'],
    },
    {
      id: 'ex-participle-clauses-13',
      kind: 'mcq',
      prompt: { en: 'The deploy failed, ___ 3% of users without access.', uk: 'Деплой провалився, і 3% користувачів лишилися без доступу.' },
      options: ['leaving', 'left', 'to leave'],
      correct: 0,
      explain: { en: 'An -ing clause after the main clause gives the result.', uk: '-ing clause після головного речення виражає результат.' },
      level: 'c1',
      tags: ['participle-clauses', 'ing', 'result'],
    },
    {
      id: 'ex-participle-clauses-14',
      kind: 'mcq',
      prompt: { en: 'Which is most natural in a Slack message?', uk: 'Що найприродніше в повідомленні в Slack?' },
      options: [
        'Having reviewed your PR, I left some comments.',
        'I reviewed your PR and left some comments.',
        'Reviewed your PR, I left some comments.',
      ],
      correct: 1,
      explain: {
        en: 'Participle clauses are mostly written style (British Council). The third is also wrong: you reviewed → Reviewing / Having reviewed.',
        uk: 'Participle clauses — переважно письмовий стиль (British Council). Третє ще й неправильне: ви переглядали → Reviewing / Having reviewed.',
      },
      level: 'c1',
      tags: ['participle-clauses', 'register'],
    },
    {
      id: 'ex-participle-clauses-15',
      kind: 'mcq',
      prompt: { en: 'Which sentence is correct?', uk: 'Яке речення правильне?' },
      options: [
        'Looking at the logs, it was clear that the cache had failed.',
        'Looking at the logs, we saw that the cache had failed.',
        'Looking at the logs, the cache had clearly failed.',
      ],
      correct: 1,
      explain: {
        en: 'Only we can look at logs. it and the cache cannot be the doers of looking.',
        uk: 'Дивитися на логи можемо лише ми. it і the cache не можуть бути виконавцями.',
      },
      level: 'c1',
      tags: ['participle-clauses', 'dangling'],
    },
    {
      id: 'ex-participle-clauses-16',
      kind: 'gap',
      sentence: 'Not ___ (have) access to production, I asked the SRE team for help.',
      answers: ['having'],
      hint: { en: 'Not + -ing', uk: 'Not + -ing' },
      explain: { en: 'A negative reason: Not having … (= Because I didn’t have …).', uk: 'Заперечна причина: Not having … (= Because I didn’t have …).' },
      level: 'c1',
      tags: ['participle-clauses', 'ing', 'negative'],
    },
  ],
  seeAlso: ['m25-relative-clauses', 'm24-passive-advanced', 'm16-gerund-infinitive', 'm10-perfect-family', 'm30-linking-discourse', 'm29-subjunctive-formal'],
  sources: [
    {
      title: 'British Council LearnEnglish — Participle clauses (C1)',
      url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/c1/participle-clauses',
    },
    {
      title: 'British Council LearnEnglish — Clause structure and verb patterns',
      url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/clause-structure-verb-patterns',
    },
    {
      title: 'Cambridge Dictionary — Clauses: finite and non-finite',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/clauses-finite-and-non-finite',
    },
    {
      title: 'Cambridge Dictionary — Relative clauses (non-finite relative clauses)',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/relative-clauses_2',
    },
    {
      title: 'Cambridge Dictionary — dangling participle',
      url: 'https://dictionary.cambridge.org/dictionary/english/dangling-participle',
    },
  ],
};
