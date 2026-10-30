import type { Module } from '../types';

/*
 * CHANGED (A3): M30 · Linking & discourse markers — Section V Advanced Grammar, wave A3 (★ connector-bridge,
 * TokenMorph family). Authored EN first, UA second; grammar terms stay English in both languages; US
 * English with a work/dev lean. Facts verified against Cambridge (Conjunctions and linking words —
 * however is a linking adverb between sentences; but, not however, joins two clauses in one sentence ·
 * Conjunctions: contrasting · Although or though? · In spite of and despite — + noun or -ing, no
 * that-clause · Because, because of — because of is a two-word preposition + noun phrase · Adverbs:
 * types — linking adjuncts (however, therefore, as a result) go where adverbs go · Discourse markers
 * (so, right, okay) — markers connect, organize and manage what we say or express attitude) and
 * British Council (Contrasting ideas: although, despite and others — although / even though + subject
 * + verb; despite / in spite of + noun, gerund or pronoun; despite the fact that + clause; even though
 * is stronger; end-position though is most common in speech).
 * Spine: a linker has a MEANING (contrast · cause · addition · sequence) and a GRAMMAR CLASS
 * (coordinator · subordinator · linking adverb · preposition). Learners pick by meaning; the errors
 * come from the class — the comma splice, «хоча …, але», despite + clause.
 */
export const m30: Module = {
  id: 'm30-linking-discourse',
  num: 30,
  section: 's4-advanced-grammar',
  order: 8,
  level: 'b2',
  title: { en: 'Linking & discourse markers', uk: 'Звʼязки і discourse markers' },
  tagline: {
    en: 'but · although · However, · despite — one meaning, four grammars; why “, however the deploy failed” and “Although …, but …” are broken; and the spoken markers that make you sound fluent.',
    uk: 'but · although · However, · despite — один зміст, чотири граматики; чому «, however the deploy failed» і «Although …, but …» зламані; і усні маркери, з якими ви звучите вільно.',
  },
  readMins: 22,
  mentalModel: {
    en: 'Every linker has **two** properties. Its **meaning** — contrast, cause → result, addition, sequence — is what learners study. Its **grammar class** is what decides the sentence, and that is where the errors live. A **coordinator** (*but, so, and*) joins two clauses in ONE sentence, after a comma. A **subordinator** (*although, because, while*) makes its clause depend on the other — still ONE sentence. A **linking adverb** (*However, Therefore, In addition*) opens a NEW sentence (or follows a semicolon) and takes a comma. A **preposition** (*despite, because of, in addition to*) takes a NOUN or an -ING form — never a subject + verb. So *The tests passed, **but** the deploy failed* · ***Although** the tests passed, the deploy failed* · *The tests passed. **However,** the deploy failed* · ***Despite** passing the tests, the build failed* say the same thing four ways.',
    uk: 'Кожна звʼязка має **дві** властивості. Її **зміст** — протиставлення, причина → наслідок, додавання, послідовність — саме його й вивчають. А її **граматичний клас** вирішує, як будується речення, — і саме там живуть помилки. **Coordinator** (*but, so, and*) зʼєднує дві клаузи в ОДНОМУ реченні, після коми. **Subordinator** (*although, because, while*) робить свою клаузу залежною від іншої — однаково ОДНЕ речення. **Linking adverb** (*However, Therefore, In addition*) відкриває НОВЕ речення (або стоїть після крапки з комою) і бере кому. **Preposition** (*despite, because of, in addition to*) бере ІМЕННИК або -ING — ніколи підмет із дієсловом. Тож *The tests passed, **but** the deploy failed* · ***Although** the tests passed, the deploy failed* · *The tests passed. **However,** the deploy failed* · ***Despite** passing the tests, the build failed* — це одне й те саме чотирма способами.',
  },
  topics: [
    // ── 1. CONTRAST ────────────────────────────────────────────────────────
    {
      id: 'contrast',
      title: { en: 'Contrast: but · although · however · despite', uk: 'Протиставлення: but · although · however · despite' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Contrast is where all four classes meet, so it is the best place to learn them. *but* (coordinator) sits between two clauses after a comma. *although / even though / though* (subordinators) introduce a clause with its own subject and verb — the clause can come first, closed by a comma. *However / Nevertheless* (linking adverbs) start the second sentence. *despite / in spite of* (prepositions) take a noun, an -ing form or a pronoun (British Council; Cambridge).',
            uk: 'У протиставленні зустрічаються всі чотири класи, тож тут їх найзручніше вивчати. *but* (coordinator) стоїть між двома клаузами після коми. *although / even though / though* (subordinators) вводять клаузу з власним підметом і дієсловом — вона може стояти першою й закриватися комою. *However / Nevertheless* (linking adverbs) починають друге речення. *despite / in spite of* (prepositions) беруть іменник, -ing чи займенник (British Council; Cambridge).',
          },
        },
        {
          kind: 'sim',
          sim: 'connector-bridge',
          caption: {
            en: 'Connector Bridge: pick a meaning and step through the four linker classes — the linker flies to its slot, the punctuation changes, and with a preposition the first clause loses its finite verb (dotted). The scene counts the finite verbs and states the class rule; the verdict is computed. The Fix the classic errors track walks the comma splice, «хоча …, але», despite + clause and despite of to two fixes each.',
            uk: 'Connector Bridge: оберіть зміст і пройдіть чотири класи звʼязок — звʼязка перелітає на своє місце, змінюється пунктуація, а з прийменником перша клауза втрачає особове дієслово (підкреслене пунктиром). Сцена рахує особові дієслова й називає правило класу; вердикт обчислюється. Режим «Виправити класичні помилки» проводить comma splice, «хоча …, але», despite + клаузу і despite of через два виправлення.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Class', uk: 'Клас' },
            { en: 'Linkers', uk: 'Звʼязки' },
            { en: 'Pattern', uk: 'Схема' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'coordinator', uk: 'coordinator' },
              { en: 'but · yet', uk: 'but · yet' },
              { en: 'clause, but clause.', uk: 'clause, but clause.' },
              { en: 'The build passed all the tests, but it failed in production.', uk: 'The build passed all the tests, but it failed in production.' },
            ],
            [
              { en: 'subordinator', uk: 'subordinator' },
              { en: 'although · even though · though · while · whereas', uk: 'although · even though · though · while · whereas' },
              { en: 'Although clause, clause.', uk: 'Although clause, clause.' },
              { en: 'Although the build passed all the tests, it failed in production.', uk: 'Although the build passed all the tests, it failed in production.' },
            ],
            [
              { en: 'linking adverb', uk: 'linking adverb' },
              { en: 'However · Nevertheless · On the other hand', uk: 'However · Nevertheless · On the other hand' },
              { en: 'Clause. However, clause.', uk: 'Clause. However, clause.' },
              { en: 'The build passed all the tests. However, it failed in production.', uk: 'The build passed all the tests. However, it failed in production.' },
            ],
            [
              { en: 'preposition', uk: 'preposition' },
              { en: 'despite · in spite of', uk: 'despite · in spite of' },
              { en: 'Despite noun / -ing, clause.', uk: 'Despite noun / -ing, clause.' },
              { en: 'Despite passing all the tests, the build failed in production.', uk: 'Despite passing all the tests, the build failed in production.' },
            ],
          ],
          caption: {
            en: 'Cambridge (Conjunctions and linking words; In spite of and despite) and British Council (Contrasting ideas). Same meaning, four sentence shapes.',
            uk: 'Cambridge (Conjunctions and linking words; In spite of and despite) і British Council (Contrasting ideas). Один зміст, чотири форми речення.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '“, however the deploy failed” — the comma splice', uk: '«, however the deploy failed» — comma splice' },
          md: {
            en: 'Ukrainian *однак* can follow a comma inside one sentence, so ✕ *The tests passed, however the deploy failed* feels natural. But *however* is an adverb, not a conjunction — Cambridge: use *but*, not *however*, to join two clauses in one sentence. Three fixes: ✓ *The tests passed. **However,** the deploy failed.* · ✓ *The tests passed; **however,** the deploy failed.* · ✓ *The tests passed, **but** the deploy failed.*',
            uk: 'Українське *однак* може стояти після коми в одному реченні, тож ✕ *The tests passed, however the deploy failed* здається природним. Але *however* — прислівник, а не сполучник; Cambridge: щоб зʼєднати дві клаузи в одному реченні, вживайте *but*, а не *however*. Три виправлення: ✓ *The tests passed. **However,** the deploy failed.* · ✓ *The tests passed; **however,** the deploy failed.* · ✓ *The tests passed, **but** the deploy failed.*',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '«Хоча …, але …» → Although …, but … ✕', uk: '«Хоча …, але …» → Although …, but … ✕' },
          md: {
            en: 'Ukrainian marks a contrast twice; English marks it once. ✕ *Although the tests passed, **but** the deploy failed* → keep ONE linker: ✓ *Although the tests passed, the deploy failed* or ✓ *The tests passed, but the deploy failed.* The same goes for cause: ✕ *Because it rained, **so** we stayed* («оскільки …, тому …»).',
            uk: 'Українська позначає протиставлення двічі; англійська — один раз. ✕ *Although the tests passed, **but** the deploy failed* → лишіть ОДНУ звʼязку: ✓ *Although the tests passed, the deploy failed* або ✓ *The tests passed, but the deploy failed.* Так само з причиною: ✕ *Because it rained, **so** we stayed* («оскільки …, тому …»).',
          },
        },
        {
          kind: 'compare',
          a: { en: 'although / even though + clause', uk: 'although / even though + клауза' },
          b: { en: 'despite / in spite of + noun / -ing', uk: 'despite / in spite of + іменник / -ing' },
          rows: [
            [
              { en: 'Example', uk: 'Приклад' },
              { en: 'Although the release was late, users loved it.', uk: 'Although the release was late, users loved it.' },
              { en: 'Despite the late release, users loved it.', uk: 'Despite the late release, users loved it.' },
            ],
            [
              { en: 'With a clause', uk: 'З клаузою' },
              { en: '✓ although + subject + verb', uk: '✓ although + підмет + дієслово' },
              { en: '✓ despite the fact that + subject + verb', uk: '✓ despite the fact that + підмет + дієслово' },
            ],
            [
              { en: 'Wrong', uk: 'Хибно' },
              { en: '✕ Although the late release, …', uk: '✕ Although the late release, …' },
              { en: '✕ Despite the release was late, … · ✕ Despite of …', uk: '✕ Despite the release was late, … · ✕ Despite of …' },
            ],
          ],
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Strength and position.** *even though* is stronger and more emphatic than *although* (British Council). *though* works like *although* and, in speech, also at the **end** of a sentence as an adverb: *The demo crashed. The client loved it, **though**.* *while / whereas* contrast two facts side by side, often in comparisons: ***While** iOS users updated within a week, Android users took a month.*',
            uk: '**Сила й позиція.** *even though* сильніше й емфатичніше за *although* (British Council). *though* працює як *although*, а в мовленні — ще й **у кінці** речення як прислівник: *The demo crashed. The client loved it, **though**.* *while / whereas* протиставляють два факти поруч, часто в порівняннях: ***While** iOS users updated within a week, Android users took a month.*',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: however inside the sentence', uk: 'Дрібний шрифт: however всередині речення' },
          md: {
            en: 'Linking adverbs go where adverbs can go (Cambridge, Adverbs: types), so *however* can also sit **inside** the second sentence, fenced by commas: *The tests passed. The deploy, **however,** failed.* That moves the focus to *the deploy* — a common move in incident reports. What it can never do is replace *but* after a single comma.',
            uk: 'Linking adverbs стоять там, де можуть стояти прислівники (Cambridge, Adverbs: types), тож *however* може бути й **всередині** другого речення, між комами: *The tests passed. The deploy, **however,** failed.* Так фокус переходить на *the deploy* — поширений прийом у звітах про інциденти. Чого він ніколи не може — замінити *but* після однієї коми.',
          },
        },
      ],
    },

    // ── 2. CAUSE → RESULT ──────────────────────────────────────────────────
    {
      id: 'cause-result',
      title: { en: 'Cause and result: because · so · therefore · because of', uk: 'Причина й наслідок: because · so · therefore · because of' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'The same four classes carry cause → result. *so* (coordinator) introduces the **result** after a comma. *because / since / as* (subordinators) introduce the **cause** with its own clause. *Therefore / As a result / Consequently* (linking adverbs) open the result sentence. *because of / due to* (prepositions) take a noun phrase — Cambridge: *because of* is a two-word preposition, so a clause cannot follow it.',
            uk: 'Ті самі чотири класи передають причину → наслідок. *so* (coordinator) вводить **наслідок** після коми. *because / since / as* (subordinators) вводять **причину** з власною клаузою. *Therefore / As a result / Consequently* (linking adverbs) відкривають речення з наслідком. *because of / due to* (prepositions) беруть іменникову фразу — Cambridge: *because of* — прийменник із двох слів, тож клауза після нього стояти не може.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Class', uk: 'Клас' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'coordinator: , so', uk: 'coordinator: , so' },
              { en: 'The config was wrong, so the deploy failed.', uk: 'The config was wrong, so the deploy failed.' },
            ],
            [
              { en: 'subordinator: because / since', uk: 'subordinator: because / since' },
              { en: 'Because the config was wrong, the deploy failed.', uk: 'Because the config was wrong, the deploy failed.' },
            ],
            [
              { en: 'linking adverb: . As a result, / . Therefore,', uk: 'linking adverb: . As a result, / . Therefore,' },
              { en: 'The config was wrong. As a result, the deploy failed.', uk: 'The config was wrong. As a result, the deploy failed.' },
            ],
            [
              { en: 'preposition: because of / due to', uk: 'preposition: because of / due to' },
              { en: 'Because of the wrong config, the deploy failed.', uk: 'Because of the wrong config, the deploy failed.' },
            ],
          ],
          caption: {
            en: 'Cambridge (Because, because of; Adverbs: types — linking adjuncts show cause and effect; therefore = as a result).',
            uk: 'Cambridge (Because, because of; Adverbs: types — linking adjuncts показують причину й наслідок; therefore = as a result).',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '«тому що» vs «тому»: because ≠ so', uk: '«тому що» vs «тому»: because ≠ so' },
          md: {
            en: 'Ukrainian *тому що* (cause) and *тому* (result) differ by one word; English uses two different linkers pointing in opposite directions. *because* → the **cause** follows: *We rolled back **because** error rates spiked.* *so* → the **result** follows: *Error rates spiked, **so** we rolled back.* Swapping them reverses the story.',
            uk: 'Українські *тому що* (причина) і *тому* (наслідок) різняться одним словом; англійська має дві різні звʼязки, що вказують у протилежні боки. *because* → далі **причина**: *We rolled back **because** error rates spiked.* *so* → далі **наслідок**: *Error rates spiked, **so** we rolled back.* Якщо їх переплутати, історія піде навпаки.',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          title: { en: 'Postmortems run on cause → result', uk: 'Постмортеми тримаються на причині → наслідку' },
          md: {
            en: 'A timeline reads best as a chain of linking adverbs: *A config change disabled the cache. **As a result,** database load tripled. **Consequently,** p99 latency exceeded the SLO.* In a Slack thread the same chain sounds natural with *so*: *the cache was off, so the DB got hammered.*',
            uk: 'Хронологію найкраще читати як ланцюжок linking adverbs: *A config change disabled the cache. **As a result,** database load tripled. **Consequently,** p99 latency exceeded the SLO.* У треді в Slack той самий ланцюжок природно звучить через *so*: *the cache was off, so the DB got hammered.*',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**since and as for a known cause.** *since* and *as* introduce a cause the listener already knows or accepts, so they often come first: ***Since** the budget was cut, we postponed the launch.* *because* puts the cause in focus, typically after the main clause: *We postponed the launch **because** the budget was cut.*',
            uk: '**since і as для відомої причини.** *since* і *as* вводять причину, яку слухач уже знає чи приймає, тож часто стоять першими: ***Since** the budget was cut, we postponed the launch.* *because* ставить причину у фокус, зазвичай після головної клаузи: *We postponed the launch **because** the budget was cut.*',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: due to after be', uk: 'Дрібний шрифт: due to після be' },
          md: {
            en: '*due to* started as an adjective phrase after *be*: *The delay was **due to** a vendor outage.* Fronted use (*Due to the outage, we…*) is now standard in business English, though some style guides still prefer *because of* there. In a formal report, *owing to* is a safe alternative.',
            uk: '*due to* починалося як прикметникова фраза після *be*: *The delay was **due to** a vendor outage.* Ужиток на початку речення (*Due to the outage, we…*) тепер стандартний у діловій англійській, хоча деякі посібники стилю досі радять там *because of*. У формальному звіті безпечна альтернатива — *owing to*.',
          },
        },
      ],
    },

    // ── 3. ADDITION & SEQUENCE ─────────────────────────────────────────────
    {
      id: 'addition-sequence',
      title: { en: 'Addition and sequence: and · in addition · first · then', uk: 'Додавання й послідовність: and · in addition · first · then' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'Addition follows the same classes minus the subordinator: *and* (coordinator) · *In addition, / Moreover, / Furthermore,* (linking adverbs) · *in addition to / besides* + noun or -ing (prepositions). **Sequence** linkers are mostly adverbs that open a step: *First, … Then, … After that, … Finally, …* — and the preposition *after* + noun / -ing: ***After** merging the PR, delete the branch.*',
            uk: 'Додавання має ті самі класи, крім subordinator: *and* (coordinator) · *In addition, / Moreover, / Furthermore,* (linking adverbs) · *in addition to / besides* + іменник чи -ing (prepositions). Звʼязки **послідовності** — здебільшого прислівники, що відкривають крок: *First, … Then, … After that, … Finally, …* — і прийменник *after* + іменник / -ing: ***After** merging the PR, delete the branch.*',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Linker', uk: 'Звʼязка' },
            { en: 'Register', uk: 'Регістр' },
            { en: 'Example', uk: 'Приклад' },
          ],
          rows: [
            [
              { en: 'and · also · too', uk: 'and · also · too' },
              { en: 'neutral, everyday', uk: 'нейтральний, повсякденний' },
              { en: 'The new API is faster, and it is cheaper to run.', uk: 'The new API is faster, and it is cheaper to run.' },
            ],
            [
              { en: 'In addition, · Also,', uk: 'In addition, · Also,' },
              { en: 'neutral, written', uk: 'нейтральний, письмовий' },
              { en: 'The new API is faster. In addition, it is cheaper to run.', uk: 'The new API is faster. In addition, it is cheaper to run.' },
            ],
            [
              { en: 'Moreover, · Furthermore,', uk: 'Moreover, · Furthermore,' },
              { en: 'formal — an argument that builds', uk: 'формальний — аргумент, що наростає' },
              { en: 'The vendor missed two deadlines. Moreover, it breached the SLA.', uk: 'The vendor missed two deadlines. Moreover, it breached the SLA.' },
            ],
            [
              { en: 'in addition to + -ing / noun', uk: 'in addition to + -ing / іменник' },
              { en: 'neutral, written', uk: 'нейтральний, письмовий' },
              { en: 'In addition to being faster, the new API is cheaper to run.', uk: 'In addition to being faster, the new API is cheaper to run.' },
            ],
          ],
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: '“In addition to be faster” — to is a preposition here', uk: '«In addition to be faster» — тут to є прийменником' },
          md: {
            en: 'The *to* in *in addition to* is a preposition, not the infinitive marker, so the verb takes **-ing**: ✓ *In addition to **being** faster…* · ✕ *In addition to be faster…* — the same trap as *look forward to **hearing*** (m16).',
            uk: '*to* в *in addition to* — прийменник, а не частка інфінітива, тож дієслово бере **-ing**: ✓ *In addition to **being** faster…* · ✕ *In addition to be faster…* — та сама пастка, що й *look forward to **hearing*** (m16).',
          },
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'Moreover is not a fancier “also”', uk: 'Moreover — не вишуканіше «also»' },
          md: {
            en: '*Moreover / Furthermore* add a point that **strengthens an argument** — they belong in a proposal or a vendor review, not in a friendly update. ✕ *We had a great offsite. Moreover, the food was nice.* sounds like a legal brief. In everyday writing *also* and *plus* do the job.',
            uk: '*Moreover / Furthermore* додають пункт, що **посилює аргумент**, — їм місце в пропозиції чи огляді постачальника, а не в дружньому апдейті. ✕ *We had a great offsite. Moreover, the food was nice.* звучить як судовий документ. У повсякденному письмі вистачає *also* і *plus*.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Sequence in instructions vs narrative.** Instructions use *First, … Next, … Then, … Finally, …* — and imperatives: *First, pull the latest main. Then, run the migrations.* A narrative of what happened prefers time clauses and *after / before + -ing*: *After we rolled back, the error rate dropped.* Note *Finally* (the last step) vs *At last* (after a long wait — relief): *At last, the build is green.*',
            uk: '**Послідовність в інструкціях vs у розповіді.** Інструкції вживають *First, … Next, … Then, … Finally, …* — і наказовий спосіб: *First, pull the latest main. Then, run the migrations.* Розповідь про події воліє часові клаузи й *after / before + -ing*: *After we rolled back, the error rate dropped.* Зверніть увагу: *Finally* (останній крок) vs *At last* (після довгого очікування — полегшення): *At last, the build is green.*',
          },
        },
      ],
    },

    // ── 4. SPOKEN DISCOURSE ────────────────────────────────────────────────
    {
      id: 'spoken-discourse',
      title: { en: 'Spoken discourse markers: well · so · anyway · I mean', uk: 'Усні discourse markers: well · so · anyway · I mean' },
      blocks: [
        {
          kind: 'prose',
          md: {
            en: 'In speech, a second family of small words does not link clauses at all — it **manages the conversation**: opening and closing topics, buying time, softening, correcting yourself, showing your attitude (Cambridge: discourse markers connect, organize and manage what we say). They carry no content, which is exactly why non-native speech without them sounds abrupt — and why overusing one of them (*like, you know*) sounds nervous.',
            uk: 'У мовленні є друга родина маленьких слів, що взагалі не зʼєднують клаузи, — вони **керують розмовою**: відкривають і закривають теми, дають час подумати, помʼякшують, виправляють сказане, показують ставлення (Cambridge: discourse markers зʼєднують, організовують і керують тим, що ми кажемо). Змісту вони не несуть — саме тому мовлення без них звучить різко, а надуживання одним із них (*like, you know*) — нервово.',
          },
        },
        {
          kind: 'table',
          head: [
            { en: 'Marker', uk: 'Маркер' },
            { en: 'Job', uk: 'Функція' },
            { en: 'In a meeting', uk: 'На зустрічі' },
          ],
          rows: [
            [
              { en: 'So, …', uk: 'So, …' },
              { en: 'open or move to the point', uk: 'відкрити тему або перейти до суті' },
              { en: 'So, where are we with the migration?', uk: 'So, where are we with the migration?' },
            ],
            [
              { en: 'Well, …', uk: 'Well, …' },
              { en: 'buy time · soften a “no”', uk: 'виграти час · помʼякшити «ні»' },
              { en: 'Well, it depends on the vendor.', uk: 'Well, it depends on the vendor.' },
            ],
            [
              { en: 'Right / Okay', uk: 'Right / Okay' },
              { en: 'close one part, start the next', uk: 'закрити одну частину, почати наступну' },
              { en: 'Right, let’s move on to the roadmap.', uk: 'Right, let’s move on to the roadmap.' },
            ],
            [
              { en: 'Anyway, …', uk: 'Anyway, …' },
              { en: 'return to the main topic after a side track', uk: 'повернутися до головної теми після відступу' },
              { en: 'Anyway, back to the release date.', uk: 'Anyway, back to the release date.' },
            ],
            [
              { en: 'I mean, …', uk: 'I mean, …' },
              { en: 'correct or clarify yourself', uk: 'виправити чи уточнити себе' },
              { en: 'It’s fast — I mean, faster than the old one.', uk: 'It’s fast — I mean, faster than the old one.' },
            ],
            [
              { en: 'Actually, …', uk: 'Actually, …' },
              { en: 'a correction or a surprise', uk: 'виправлення чи несподіванка' },
              { en: 'Actually, the bug was in the client.', uk: 'Actually, the bug was in the client.' },
            ],
            [
              { en: 'By the way, …', uk: 'By the way, …' },
              { en: 'a side topic', uk: 'побічна тема' },
              { en: 'By the way, Anna is out on Friday.', uk: 'By the way, Anna is out on Friday.' },
            ],
          ],
          caption: {
            en: 'Cambridge (Discourse markers: so, right, okay): markers organize and manage spoken and written discourse.',
            uk: 'Cambridge (Discourse markers: so, right, okay): маркери організовують і керують усним і письмовим мовленням.',
          },
        },
        {
          kind: 'callout',
          tone: 'warn',
          title: { en: 'actually ≠ «актуально»', uk: 'actually ≠ «актуально»' },
          md: {
            en: '*actually* means *in fact* — it corrects or surprises: *Actually, it was my fault.* It never means *current / relevant*: ✕ *This task is actually* → ✓ *This task is **still relevant** / **current**.* Same for *eventually* = *in the end* (not *можливо*).',
            uk: '*actually* означає *насправді* — виправляє чи дивує: *Actually, it was my fault.* Воно ніколи не означає *актуальний*: ✕ *This task is actually* → ✓ *This task is **still relevant** / **current**.* Так само *eventually* = *зрештою* (а не *можливо*).',
          },
        },
        {
          kind: 'callout',
          tone: 'tip',
          title: { en: 'Two markers that make a “no” sound professional', uk: 'Два маркери, з якими «ні» звучить професійно' },
          md: {
            en: '*Well, …* and *To be honest, …* signal that a soft disagreement is coming, so the listener is not surprised: ***Well,** I’m not sure Friday is realistic.* · ***To be honest,** I’d rather not ship without tests.* Compare the bare *Friday is not realistic*, which can read as blunt in English — even when the Ukrainian equivalent would be perfectly normal.',
            uk: '*Well, …* і *To be honest, …* сигналізують, що далі буде мʼяка незгода, тож співрозмовник не здивований: ***Well,** I’m not sure Friday is realistic.* · ***To be honest,** I’d rather not ship without tests.* Порівняйте голе *Friday is not realistic*, що англійською може прозвучати різко, — навіть коли український відповідник цілком нормальний.',
          },
        },
        {
          kind: 'prose',
          dive: 3,
          md: {
            en: '**Spoken vs written.** Most of these markers belong to speech, chat and informal email; in a report they are replaced by linking adverbs: *So, …* → *Therefore, …* · *Anyway, …* → *To return to …* · *Actually, …* → *In fact, …*. Mixing the registers — *Moreover, we should, like, ship it* — is what makes writing sound off.',
            uk: '**Усне vs письмове.** Більшість цих маркерів належить мовленню, чату й неформальним листам; у звіті їх замінюють linking adverbs: *So, …* → *Therefore, …* · *Anyway, …* → *To return to …* · *Actually, …* → *In fact, …*. Змішування регістрів — *Moreover, we should, like, ship it* — от що робить текст дивним.',
          },
        },
        {
          kind: 'callout',
          tone: 'senior',
          dive: 4,
          title: { en: 'Fine print: so as a filler', uk: 'Дрібний шрифт: so як заповнювач' },
          md: {
            en: 'Starting every answer with *So, …* has become a recognizable tech-talk habit; one is fine, but at the start of every reply it reads like a verbal tic. Vary it with *Well, …*, *Good question — …* or simply start with the answer.',
            uk: 'Починати кожну відповідь із *So, …* стало впізнаваною звичкою tech-доповідей; один раз — нормально, але на початку кожної відповіді це читається як мовний тик. Чергуйте з *Well, …*, *Good question — …* або просто починайте з відповіді.',
          },
        },
      ],
    },
  ],
  keyPoints: [
    {
      en: 'Every linker has a meaning (contrast · cause · addition · sequence) and a grammar class — the class decides the sentence.',
      uk: 'Кожна звʼязка має зміст (протиставлення · причина · додавання · послідовність) і граматичний клас — клас вирішує, як будується речення.',
    },
    {
      en: 'Coordinator (but, so, and): one sentence, after a comma. Subordinator (although, because): one sentence, its clause can come first.',
      uk: 'Coordinator (but, so, and): одне речення, після коми. Subordinator (although, because): одне речення, його клауза може стояти першою.',
    },
    {
      en: 'Linking adverb (However, Therefore, In addition): a new sentence or a semicolon before it, a comma after. Never “, however” instead of “, but”.',
      uk: 'Linking adverb (However, Therefore, In addition): перед ним нове речення або крапка з комою, після — кома. Ніколи «, however» замість «, but».',
    },
    {
      en: 'Preposition (despite, because of, in addition to): + noun or -ing; with a clause → although / because or despite the fact that.',
      uk: 'Preposition (despite, because of, in addition to): + іменник чи -ing; з клаузою → although / because або despite the fact that.',
    },
    {
      en: 'One link, one linker: no “Although …, but …”, no “Because …, so …”.',
      uk: 'Один звʼязок — одна звʼязка: жодних «Although …, but …» чи «Because …, so …».',
    },
    {
      en: 'Spoken markers (so, well, right, anyway, I mean, actually) manage the conversation; in reports they give way to linking adverbs.',
      uk: 'Усні маркери (so, well, right, anyway, I mean, actually) керують розмовою; у звітах їх змінюють linking adverbs.',
    },
  ],
  pitfalls: [
    {
      title: { en: '“The tests passed, however the deploy failed.”', uk: '«The tests passed, however the deploy failed.»' },
      body: { en: 'A comma splice: . However, / ; however, / , but.', uk: 'Comma splice: . However, / ; however, / , but.' },
    },
    {
      title: { en: '“Although the tests passed, but …”', uk: '«Although the tests passed, but …»' },
      body: { en: 'One linker only: Although …, … or …, but ….', uk: 'Лише одна звʼязка: Although …, … або …, but ….' },
    },
    {
      title: { en: '“Despite the release was late …”', uk: '«Despite the release was late …»' },
      body: { en: 'despite + noun / -ing: Despite the late release … · or Although the release was late ….', uk: 'despite + іменник / -ing: Despite the late release … · або Although the release was late ….' },
    },
    {
      title: { en: '“Despite of the delay …”', uk: '«Despite of the delay …»' },
      body: { en: 'despite never takes of; in spite of does.', uk: 'despite ніколи не бере of; in spite of — бере.' },
    },
    {
      title: { en: '“Because of it rained …”', uk: '«Because of it rained …»' },
      body: { en: 'because + clause, because of + noun: because it rained / because of the rain.', uk: 'because + клауза, because of + іменник: because it rained / because of the rain.' },
    },
    {
      title: { en: '“In addition to be faster …”', uk: '«In addition to be faster …»' },
      body: { en: 'to is a preposition here: In addition to being faster ….', uk: 'to тут прийменник: In addition to being faster ….' },
    },
    {
      title: { en: '“This task is actually”', uk: '«This task is actually»' },
      body: { en: 'actually = in fact. For «актуальний» say relevant / current.', uk: 'actually = насправді. Для «актуальний» кажіть relevant / current.' },
    },
  ],
  exercises: [
    {
      id: 'ex-linking-discourse-1',
      kind: 'mcq',
      prompt: { en: 'The tests passed. ___, the deploy failed.', uk: 'Тести пройшли. Однак деплой провалився.' },
      options: ['However', 'But', 'Although'],
      correct: 0,
      explain: { en: 'A new sentence opens with a linking adverb + comma: However,.', uk: 'Нове речення відкриває linking adverb + кома: However,.' },
      level: 'b2',
      tags: ['linking', 'contrast'],
    },
    {
      id: 'ex-linking-discourse-2',
      kind: 'mcq',
      prompt: { en: '___ the tests passed, the deploy failed.', uk: 'Хоча тести пройшли, деплой провалився.' },
      options: ['Although', 'Despite', 'However'],
      correct: 0,
      explain: { en: 'A clause (the tests passed) follows → a subordinator: Although.', uk: 'Далі клауза (the tests passed) → subordinator: Although.' },
      level: 'b2',
      tags: ['linking', 'contrast'],
    },
    {
      id: 'ex-linking-discourse-3',
      kind: 'mcq',
      prompt: { en: '___ the delay, we shipped on Friday.', uk: 'Попри затримку, ми випустили реліз у пʼятницю.' },
      options: ['Despite', 'Although', 'Despite of'],
      correct: 0,
      explain: { en: 'A noun (the delay) follows → a preposition: Despite. Never “despite of”.', uk: 'Далі іменник (the delay) → прийменник: Despite. Ніколи «despite of».' },
      level: 'b2',
      tags: ['linking', 'contrast'],
    },
    {
      id: 'ex-linking-discourse-4',
      kind: 'mcq',
      prompt: { en: 'Which sentence is correct?', uk: 'Яке речення правильне?' },
      options: [
        'The tests passed, but the deploy failed.',
        'The tests passed, however the deploy failed.',
        'Although the tests passed, but the deploy failed.',
      ],
      correct: 0,
      explain: {
        en: '2 is a comma splice; 3 uses two linkers for one contrast («хоча …, але»).',
        uk: '2 — comma splice; 3 вживає дві звʼязки для одного протиставлення («хоча …, але»).',
      },
      level: 'b2',
      tags: ['linking', 'contrast', 'punctuation'],
    },
    {
      id: 'ex-linking-discourse-5',
      kind: 'gap',
      sentence: 'Despite ___ (pass) all the tests, the build failed in production.',
      answers: ['passing'],
      hint: { en: 'despite + -ing', uk: 'despite + -ing' },
      explain: { en: 'A preposition takes -ing: despite passing.', uk: 'Прийменник бере -ing: despite passing.' },
      level: 'b2',
      tags: ['linking', 'contrast'],
    },
    {
      id: 'ex-linking-discourse-6',
      kind: 'gap',
      sentence: 'Despite the ___ that the release was late, users loved it.',
      answers: ['fact'],
      hint: { en: 'despite + … that + clause', uk: 'despite + … that + клауза' },
      explain: { en: 'despite the fact that lets a clause follow despite (British Council).', uk: 'despite the fact that дозволяє клаузі йти після despite (British Council).' },
      level: 'b2',
      tags: ['linking', 'contrast'],
    },
    {
      id: 'ex-linking-discourse-7',
      kind: 'mcq',
      prompt: { en: 'The config was wrong, ___ the deploy failed.', uk: 'Конфіг був хибний, тож деплой провалився.' },
      options: ['so', 'because', 'therefore'],
      correct: 0,
      explain: {
        en: 'The result follows after a comma → so. because would introduce the cause; therefore needs a new sentence.',
        uk: 'Після коми йде наслідок → so. because вводив би причину; therefore потребує нового речення.',
      },
      level: 'b2',
      tags: ['linking', 'cause-result'],
    },
    {
      id: 'ex-linking-discourse-8',
      kind: 'mcq',
      prompt: { en: 'We rolled back ___ error rates spiked.', uk: 'Ми відкотилися, бо кількість помилок різко зросла.' },
      options: ['because', 'so', 'because of'],
      correct: 0,
      explain: { en: 'The cause follows, as a clause → because.', uk: 'Далі причина у вигляді клаузи → because.' },
      level: 'b2',
      tags: ['linking', 'cause-result'],
    },
    {
      id: 'ex-linking-discourse-9',
      kind: 'mcq',
      prompt: { en: '___ the wrong config, the deploy failed.', uk: 'Через хибний конфіг деплой провалився.' },
      options: ['Because of', 'Because', 'So'],
      correct: 0,
      explain: { en: 'A noun phrase follows → the preposition because of (Cambridge).', uk: 'Далі іменникова фраза → прийменник because of (Cambridge).' },
      level: 'b2',
      tags: ['linking', 'cause-result'],
    },
    {
      id: 'ex-linking-discourse-10',
      kind: 'mcq',
      prompt: { en: 'The config was wrong. ___, the deploy failed.', uk: 'Конфіг був хибний. Як наслідок, деплой провалився.' },
      options: ['As a result', 'Because of', 'So that'],
      correct: 0,
      explain: { en: 'A linking adverb opens the result sentence: As a result,.', uk: 'Linking adverb відкриває речення з наслідком: As a result,.' },
      level: 'b2',
      tags: ['linking', 'cause-result'],
    },
    {
      id: 'ex-linking-discourse-11',
      kind: 'gap',
      sentence: 'In addition to ___ (be) faster, the new API is cheaper to run.',
      answers: ['being'],
      hint: { en: 'to is a preposition here', uk: 'to тут прийменник' },
      explain: { en: 'in addition to + -ing: being.', uk: 'in addition to + -ing: being.' },
      level: 'b2',
      tags: ['linking', 'addition'],
    },
    {
      id: 'ex-linking-discourse-12',
      kind: 'mcq',
      prompt: { en: 'Which fits a friendly team update best?', uk: 'Що найкраще пасує до дружнього апдейту для команди?' },
      options: [
        'We had a great offsite, and the food was great too.',
        'We had a great offsite. Moreover, the food was great.',
        'We had a great offsite. Furthermore, the food was great.',
      ],
      correct: 0,
      explain: {
        en: 'Moreover / Furthermore build a formal argument; in a friendly update and / too / also sound natural.',
        uk: 'Moreover / Furthermore будують формальний аргумент; у дружньому апдейті природно звучать and / too / also.',
      },
      level: 'b2',
      tags: ['linking', 'addition', 'register'],
    },
    {
      id: 'ex-linking-discourse-13',
      kind: 'mcq',
      prompt: { en: 'After a side discussion, you want to return to the main topic. You say:', uk: 'Після відступу ви хочете повернутися до головної теми. Ви кажете:' },
      options: ['Anyway, back to the release date.', 'Actually, back to the release date.', 'Moreover, back to the release date.'],
      correct: 0,
      explain: { en: 'Anyway returns to the main topic.', uk: 'Anyway повертає до головної теми.' },
      level: 'b2',
      tags: ['discourse-markers', 'spoken'],
    },
    {
      id: 'ex-linking-discourse-14',
      kind: 'mcq',
      prompt: { en: 'What does “Actually, the bug was in the client” mean?', uk: 'Що означає «Actually, the bug was in the client»?' },
      options: [
        'In fact the bug was in the client (correcting an assumption).',
        'The bug in the client is still current.',
        'The bug was in the client at the moment.',
      ],
      correct: 0,
      explain: { en: 'actually = in fact: a correction. It never means «актуальний».', uk: 'actually = насправді: виправлення. Воно ніколи не означає «актуальний».' },
      level: 'b2',
      tags: ['discourse-markers', 'false-friends'],
    },
    {
      id: 'ex-linking-discourse-15',
      kind: 'mcq',
      prompt: { en: 'You disagree politely with a Friday deadline:', uk: 'Ви ввічливо не погоджуєтеся з дедлайном у пʼятницю:' },
      options: ['Well, I’m not sure Friday is realistic.', 'Friday is not realistic.', 'So, Friday is not realistic, like.'],
      correct: 0,
      explain: { en: 'Well signals a soft disagreement and makes the “no” sound professional.', uk: 'Well сигналізує мʼяку незгоду, і «ні» звучить професійно.' },
      level: 'b2',
      tags: ['discourse-markers', 'spoken', 'register'],
    },
    {
      id: 'ex-linking-discourse-16',
      kind: 'mcq',
      prompt: { en: 'Which sentence is correct?', uk: 'Яке речення правильне?' },
      options: [
        'Because it rained, we stayed in.',
        'Because it rained, so we stayed in.',
        'Because of it rained, we stayed in.',
      ],
      correct: 0,
      explain: {
        en: '2 doubles the linker («оскільки …, тому …»); 3 puts a clause after the preposition because of.',
        uk: '2 подвоює звʼязку («оскільки …, тому …»); 3 ставить клаузу після прийменника because of.',
      },
      level: 'b2',
      tags: ['linking', 'cause-result'],
    },
  ],
  seeAlso: ['m25-relative-clauses', 'm26-participle-clauses', 'm16-gerund-infinitive', 'm13-conditionals-0-1-2', 'm28-articles-advanced', 'm29-subjunctive-formal'],
  sources: [
    {
      title: 'Cambridge Dictionary — Conjunctions and linking words',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/conjunctions-and-linking-words',
    },
    {
      title: 'Cambridge Dictionary — Conjunctions: contrasting',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/conjunctions-contrasting',
    },
    {
      title: 'Cambridge Dictionary — In spite of and despite',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/in-spite-of-and-despite',
    },
    {
      title: 'Cambridge Dictionary — Although or though?',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/although',
    },
    {
      title: 'Cambridge Dictionary — Because, because of',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/because-because-of-',
    },
    {
      title: 'Cambridge Dictionary — Adverbs: types (linking adjuncts)',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/adverbs-types',
    },
    {
      title: 'Cambridge Dictionary — Discourse markers (so, right, okay)',
      url: 'https://dictionary.cambridge.org/grammar/british-grammar/discourse-markers-so-right-okay',
    },
    {
      title: 'British Council LearnEnglish — Contrasting ideas: although, despite and others',
      url: 'https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/contrasting-ideas-although-despite-others',
    },
  ],
};
