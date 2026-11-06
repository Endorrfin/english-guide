// CHANGED (VA2): content of ★ Particle Hinge (m32). A sense declares its FACTS (class, words) and its frames
// are AUTHORED; src/lib/phrasalVerbs.ts computes the order and the verdict, and scripts/test-phrasal-hinge.ts
// requires engine == authored for every cell. Every `hub` is a real card at #/idioms/<hub>. AmE base.
import type { PhSense, PhTrap } from '../lib/phrasalVerbs';

export const PH_SENSES: readonly PhSense[] = [
  // ── separable ─────────────────────────────────────────────────────────
  {
    id: 'turn-off', hub: 'turn-off', title: 'turn off', cls: 'separable',
    gloss: { en: 'stop a device working', uk: 'вимкнути' },
    subject: 'Please', verb: 'turn', particles: ['off'],
    objects: { pronoun: 'them', noun: 'the lights', long: 'all the lights in the building' },
    uk: { pronoun: 'Будь ласка, вимкни їх.', noun: 'Будь ласка, вимкни світло.', long: 'Будь ласка, вимкни все світло в будівлі.' },
    lines: {
      'pronoun:split': 'Please turn|verb them|obj off|ptcl.',
      'pronoun:after': 'Please turn|verb off|ptcl them|obj.',
      'noun:split': 'Please turn|verb the|obj lights|obj off|ptcl.',
      'noun:after': 'Please turn|verb off|ptcl the|obj lights|obj.',
      'long:split': 'Please turn|verb all|obj the|obj lights|obj in|obj the|obj building|obj off|ptcl.',
      'long:after': 'Please turn|verb off|ptcl all|obj the|obj lights|obj in|obj the|obj building|obj.',
    },
  },
  {
    id: 'set-up', hub: 'set-up', title: 'set up', cls: 'separable',
    gloss: { en: 'configure, arrange', uk: 'налаштувати, організувати' },
    subject: 'We', verb: 'set', particles: ['up'],
    objects: { pronoun: 'it', noun: 'the server', long: 'a new server for the demo' },
    uk: { pronoun: 'Ми його налаштували.', noun: 'Ми налаштували сервер.', long: 'Ми налаштували новий сервер для демо.' },
    lines: {
      'pronoun:split': 'We set|verb it|obj up|ptcl.',
      'pronoun:after': 'We set|verb up|ptcl it|obj.',
      'noun:split': 'We set|verb the|obj server|obj up|ptcl.',
      'noun:after': 'We set|verb up|ptcl the|obj server|obj.',
      'long:split': 'We set|verb a|obj new|obj server|obj for|obj the|obj demo|obj up|ptcl.',
      'long:after': 'We set|verb up|ptcl a|obj new|obj server|obj for|obj the|obj demo|obj.',
    },
  },
  {
    id: 'roll-back', hub: 'roll-back', title: 'roll back', cls: 'separable',
    gloss: { en: 'return to an earlier version', uk: 'відкотити' },
    subject: 'They', verb: 'rolled', particles: ['back'],
    objects: { pronoun: 'it', noun: 'the release', long: 'the release from last Friday' },
    uk: { pronoun: 'Вони його відкотили.', noun: 'Вони відкотили реліз.', long: 'Вони відкотили реліз минулої пʼятниці.' },
    lines: {
      'pronoun:split': 'They rolled|verb it|obj back|ptcl.',
      'pronoun:after': 'They rolled|verb back|ptcl it|obj.',
      'noun:split': 'They rolled|verb the|obj release|obj back|ptcl.',
      'noun:after': 'They rolled|verb back|ptcl the|obj release|obj.',
      'long:split': 'They rolled|verb the|obj release|obj from|obj last|obj Friday|obj back|ptcl.',
      'long:after': 'They rolled|verb back|ptcl the|obj release|obj from|obj last|obj Friday|obj.',
    },
  },
  {
    id: 'take-off-jacket', hub: 'take-off', title: 'take off (a jacket)', cls: 'separable',
    gloss: { en: 'remove clothing', uk: 'зняти одяг' },
    subject: 'She', verb: 'took', particles: ['off'],
    objects: { pronoun: 'it', noun: 'her jacket', long: 'the jacket she had borrowed' },
    uk: { pronoun: 'Вона її зняла.', noun: 'Вона зняла куртку.', long: 'Вона зняла куртку, яку позичила.' },
    lines: {
      'pronoun:split': 'She took|verb it|obj off|ptcl.',
      'pronoun:after': 'She took|verb off|ptcl it|obj.',
      'noun:split': 'She took|verb her|obj jacket|obj off|ptcl.',
      'noun:after': 'She took|verb off|ptcl her|obj jacket|obj.',
      'long:split': 'She took|verb the|obj jacket|obj she|obj had|obj borrowed|obj off|ptcl.',
      'long:after': 'She took|verb off|ptcl the|obj jacket|obj she|obj had|obj borrowed|obj.',
    },
  },
  {
    id: 'break-down-numbers', hub: 'break-down', title: 'break down (the numbers)', cls: 'separable',
    gloss: { en: 'split into smaller parts', uk: 'розбити на частини' },
    subject: 'She', verb: 'broke', particles: ['down'],
    objects: { pronoun: 'them', noun: 'the numbers', long: 'all the numbers in the report' },
    uk: { pronoun: 'Вона їх розбила на частини.', noun: 'Вона деталізувала цифри.', long: 'Вона деталізувала всі цифри у звіті.' },
    lines: {
      'pronoun:split': 'She broke|verb them|obj down|ptcl.',
      'pronoun:after': 'She broke|verb down|ptcl them|obj.',
      'noun:split': 'She broke|verb the|obj numbers|obj down|ptcl.',
      'noun:after': 'She broke|verb down|ptcl the|obj numbers|obj.',
      'long:split': 'She broke|verb all|obj the|obj numbers|obj in|obj the|obj report|obj down|ptcl.',
      'long:after': 'She broke|verb down|ptcl all|obj the|obj numbers|obj in|obj the|obj report|obj.',
    },
  },
  // ── inseparable ───────────────────────────────────────────────────────
  {
    id: 'look-after', hub: 'look-after', title: 'look after', cls: 'inseparable',
    gloss: { en: 'take care of', uk: 'доглядати, опікуватися' },
    subject: 'Who', verb: 'looks', particles: ['after'], end: '?',
    objects: { pronoun: 'them', noun: 'the servers', long: 'all the servers in the office' },
    uk: { pronoun: 'Хто ними опікується?', noun: 'Хто опікується серверами?', long: 'Хто опікується всіма серверами в офісі?' },
    lines: {
      'pronoun:split': 'Who looks|verb them|obj after|ptcl?',
      'pronoun:after': 'Who looks|verb after|ptcl them|obj?',
      'noun:split': 'Who looks|verb the|obj servers|obj after|ptcl?',
      'noun:after': 'Who looks|verb after|ptcl the|obj servers|obj?',
      'long:split': 'Who looks|verb all|obj the|obj servers|obj in|obj the|obj office|obj after|ptcl?',
      'long:after': 'Who looks|verb after|ptcl all|obj the|obj servers|obj in|obj the|obj office|obj?',
    },
  },
  {
    id: 'look-into', hub: 'look-into', title: 'look into', cls: 'inseparable',
    gloss: { en: 'investigate', uk: 'розслідувати, розібратися' },
    subject: 'We are', verb: 'looking', particles: ['into'],
    objects: { pronoun: 'it', noun: 'the outage', long: 'the outage from last Friday night' },
    uk: { pronoun: 'Ми з цим розбираємося.', noun: 'Ми розбираємося зі збоєм.', long: 'Ми розбираємося зі збоєм минулої пʼятниці ввечері.' },
    lines: {
      'pronoun:split': 'We are looking|verb it|obj into|ptcl.',
      'pronoun:after': 'We are looking|verb into|ptcl it|obj.',
      'noun:split': 'We are looking|verb the|obj outage|obj into|ptcl.',
      'noun:after': 'We are looking|verb into|ptcl the|obj outage|obj.',
      'long:split': 'We are looking|verb the|obj outage|obj from|obj last|obj Friday|obj night|obj into|ptcl.',
      'long:after': 'We are looking|verb into|ptcl the|obj outage|obj from|obj last|obj Friday|obj night|obj.',
    },
  },
  {
    id: 'look-for', hub: 'look-for', title: 'look for', cls: 'inseparable',
    gloss: { en: 'try to find', uk: 'шукати' },
    subject: 'I am', verb: 'looking', particles: ['for'],
    objects: { pronoun: 'it', noun: 'the bug', long: 'the bug from the last release' },
    uk: { pronoun: 'Я його шукаю.', noun: 'Я шукаю баг.', long: 'Я шукаю баг з останнього релізу.' },
    lines: {
      'pronoun:split': 'I am looking|verb it|obj for|ptcl.',
      'pronoun:after': 'I am looking|verb for|ptcl it|obj.',
      'noun:split': 'I am looking|verb the|obj bug|obj for|ptcl.',
      'noun:after': 'I am looking|verb for|ptcl the|obj bug|obj.',
      'long:split': 'I am looking|verb the|obj bug|obj from|obj the|obj last|obj release|obj for|ptcl.',
      'long:after': 'I am looking|verb for|ptcl the|obj bug|obj from|obj the|obj last|obj release|obj.',
    },
  },
  // ── three-part ────────────────────────────────────────────────────────
  {
    id: 'come-up-with', hub: 'come-up-with', title: 'come up with', cls: 'three-part',
    gloss: { en: 'produce an idea or a plan', uk: 'придумати, запропонувати' },
    subject: 'We', verb: 'came', particles: ['up', 'with'],
    objects: { pronoun: 'it', noun: 'a plan', long: 'a plan for the next release' },
    uk: { pronoun: 'Ми це придумали.', noun: 'Ми придумали план.', long: 'Ми придумали план для наступного релізу.' },
    lines: {
      'pronoun:split': 'We came|verb up|ptcl it|obj with|ptcl.',
      'pronoun:after': 'We came|verb up|ptcl with|ptcl it|obj.',
      'noun:split': 'We came|verb up|ptcl a|obj plan|obj with|ptcl.',
      'noun:after': 'We came|verb up|ptcl with|ptcl a|obj plan|obj.',
      'long:split': 'We came|verb up|ptcl a|obj plan|obj for|obj the|obj next|obj release|obj with|ptcl.',
      'long:after': 'We came|verb up|ptcl with|ptcl a|obj plan|obj for|obj the|obj next|obj release|obj.',
    },
  },
  {
    id: 'run-out-of', hub: 'run-out-of', title: 'run out of', cls: 'three-part',
    gloss: { en: 'have none left', uk: 'вичерпати, залишитися без' },
    subject: 'We', verb: 'ran', particles: ['out', 'of'],
    objects: { pronoun: 'it', noun: 'disk space', long: 'space on the main disk' },
    uk: { pronoun: 'Воно в нас закінчилося.', noun: 'У нас закінчилося місце на диску.', long: 'У нас закінчилося місце на основному диску.' },
    lines: {
      'pronoun:split': 'We ran|verb out|ptcl it|obj of|ptcl.',
      'pronoun:after': 'We ran|verb out|ptcl of|ptcl it|obj.',
      'noun:split': 'We ran|verb out|ptcl disk|obj space|obj of|ptcl.',
      'noun:after': 'We ran|verb out|ptcl of|ptcl disk|obj space|obj.',
      'long:split': 'We ran|verb out|ptcl space|obj on|obj the|obj main|obj disk|obj of|ptcl.',
      'long:after': 'We ran|verb out|ptcl of|ptcl space|obj on|obj the|obj main|obj disk|obj.',
    },
  },
  // ── no object (the same verbs as above, in another sense) ─────────────
  {
    id: 'take-off-plane', hub: 'take-off', title: 'take off (a plane)', cls: 'intransitive',
    gloss: { en: 'leave the ground', uk: 'злетіти' },
    subject: 'The plane', verb: 'took', particles: ['off'], tail: 'at noon',
    uk: { bare: 'Літак злетів опівдні.' },
    lines: {
      object: 'The plane took|verb it|obj off|ptcl at noon.',
      bare: 'The plane took|verb off|ptcl at noon.',
    },
  },
  {
    id: 'break-down-server', hub: 'break-down', title: 'break down (a server)', cls: 'intransitive',
    gloss: { en: 'stop working', uk: 'зламатися' },
    subject: 'The server', verb: 'broke', particles: ['down'], tail: 'last night',
    uk: { bare: 'Сервер зламався минулої ночі.' },
    lines: {
      object: 'The server broke|verb it|obj down|ptcl last night.',
      bare: 'The server broke|verb down|ptcl last night.',
    },
  },
  {
    id: 'fall-through', hub: 'fall-through', title: 'fall through', cls: 'intransitive',
    gloss: { en: 'fail to happen', uk: 'зірватися, не відбутися' },
    subject: 'The deal', verb: 'fell', particles: ['through'],
    uk: { bare: 'Угода зірвалася.' },
    lines: {
      object: 'The deal fell|verb it|obj through|ptcl.',
      bare: 'The deal fell|verb through|ptcl.',
    },
  },
];

export const PH_TRAPS: readonly PhTrap[] = [
  {
    id: 'turn-off-it', label: 'turn off it', hub: 'turn-off', cls: 'separable', expect: 'pronoun-after',
    wrong: 'Please turn|verb off|ptcl it|obj.', right: 'Please turn|verb it|obj off|ptcl.',
    uk: 'Будь ласка, вимкни це.',
  },
  {
    id: 'pick-up-me', label: 'pick up me', hub: 'pick-up', cls: 'separable', expect: 'pronoun-after',
    wrong: 'Can you pick|verb up|ptcl me|obj at eight?', right: 'Can you pick|verb me|obj up|ptcl at eight?',
    uk: 'Можеш забрати мене о восьмій?',
  },
  {
    id: 'look-it-after', label: 'look it after', hub: 'look-after', cls: 'inseparable', expect: 'split-inseparable',
    wrong: 'Can you look|verb it|obj after|ptcl?', right: 'Can you look|verb after|ptcl it|obj?',
    uk: 'Можеш за цим наглянути?',
  },
  {
    id: 'look-the-bug-for', label: 'look the bug for', hub: 'look-for', cls: 'inseparable', expect: 'split-inseparable',
    wrong: 'I looked|verb the|obj bug|obj for|ptcl all day.', right: 'I looked|verb for|ptcl the|obj bug|obj all day.',
    uk: 'Я шукав цей баг цілий день.',
  },
  {
    id: 'come-up-it-with', label: 'came up it with', hub: 'come-up-with', cls: 'three-part', expect: 'split-three-part',
    wrong: 'Who came|verb up|ptcl it|obj with|ptcl?', right: 'Who came|verb up|ptcl with|ptcl it|obj?',
    uk: 'Хто це придумав?',
  },
  {
    id: 'fell-it-through', label: 'fell it through', hub: 'fall-through', cls: 'intransitive', expect: 'object-intransitive',
    wrong: 'The deal fell|verb it|obj through|ptcl.', right: 'The deal fell|verb through|ptcl.',
    uk: 'Угода зірвалася.',
  },
  {
    id: 'long-between', label: 'rolled all … back', hub: 'roll-back', cls: 'separable', expect: 'long-split',
    wrong: 'They rolled|verb all|obj the|obj changes|obj from|obj last|obj week|obj back|ptcl.', right: 'They rolled|verb back|ptcl all|obj the|obj changes|obj from|obj last|obj week|obj.',
    uk: 'Вони відкотили всі зміни минулого тижня.',
  },
];
