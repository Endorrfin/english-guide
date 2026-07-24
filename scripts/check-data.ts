// scripts/check-data.ts — data-integrity gate (standard §3.8 / §4.6). Run with: tsx scripts/check-data.ts
// CHANGED (S1): extended beyond the template — english-guide validates THREE data families:
//   1. modules/sections (template checks + hard counts 5/34 + per-authored-module golden bar),
//   2. exercises (unique stable ids, gap/mcq shape, bilingual explains, ≥8 per authored module,
//      modal modules ≥15 — PROJECT-BRIEF §3),
//   3. dictionary words (unique ids, the 7-example 4/1/1/1 contract, IPA on single words,
//      bilingual defs/examples, resolvable seeAlso, per-file level/source discipline — BRIEF §6).
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { sections, modules, isAuthored } from '../src/data/concepts';
import { WORDS } from '../src/data/words';
import { a1Words } from '../src/data/words/a1';
import { customWords } from '../src/data/words/custom';
import { READING_CATEGORIES, READING_TEXTS } from '../src/data/reading';
import { IDIOMS } from '../src/data/idioms'; // CHANGED (V2)
import { IRREGULAR } from '../src/data/irregular'; // CHANGED (V3)
import type {
  Exercise, IdiomEntry, IrregularVerb, Level, Localized, Module, ReadingCategory, ReadingQuestion, ReadingText, Section, WordEntry,
} from '../src/data/types';

const here = dirname(fileURLToPath(import.meta.url));
const errors: string[] = [];
const err = (cond: unknown, msg: string) => { if (!cond) errors.push(msg); };

// --- helpers ---------------------------------------------------------------
const isLoc = (v: unknown): v is Localized =>
  !!v && typeof v === 'object' && 'en' in (v as object) && 'uk' in (v as object);
const locOk = (v: Localized | undefined, where: string) => {
  if (!isLoc(v)) { errors.push(`Localized expected at ${where}`); return; }
  err(v.en?.trim(), `empty EN at ${where}`);
  err(v.uk?.trim(), `empty UK at ${where}`);
};
const LEVELS: readonly Level[] = ['a1', 'a2', 'b1', 'b2', 'c1'];
const KEBAB = /^[a-z0-9]+(-[a-z0-9]+)*$/;

// --- registry keys (parsed as text to avoid importing React) ---------------
const registrySrc = readFileSync(resolve(here, '../src/lib/registry.tsx'), 'utf8');
// CHANGED (S1): anchor on the record DECLARATION (`const sims … = { … }`), not the bare word —
// the template's word-split broke as soon as prose comments mentioned "sims" before the record.
const keysIn = (record: 'sims' | 'figures') => {
  const m = registrySrc.match(new RegExp(`\\bconst ${record}\\b[^=]*=\\s*\\{([\\s\\S]*?)\\n\\}`));
  const block = m?.[1] ?? '';
  return new Set([...block.matchAll(/['"]([a-z0-9-]+)['"]\s*:/g)].map((x) => x[1]));
};
const simKeys = keysIn('sims');
const figKeys = keysIn('figures');

// --- structural checks: sections + modules ---------------------------------
const sectionIds = new Set<string>();
for (const s of sections as Section[]) {
  err(!sectionIds.has(s.id), `duplicate section id ${s.id}`); sectionIds.add(s.id);
  locOk(s.title, `section ${s.id}.title`);
}

const moduleIds = new Set<string>();
const nums = new Set<number>();
const exerciseIds = new Set<string>();

function checkExercise(ex: Exercise, m: Module): void {
  err(!exerciseIds.has(ex.id), `duplicate exercise id ${ex.id}`); exerciseIds.add(ex.id);
  err(/^ex-[a-z0-9-]+-\d+$/.test(ex.id), `${m.id}: bad exercise id format '${ex.id}'`);
  err(LEVELS.includes(ex.level), `${ex.id}: bad level '${ex.level}'`);
  err(ex.tags.length > 0, `${ex.id}: no tags`);
  locOk(ex.explain, `${ex.id}.explain`);
  if (ex.kind === 'gap') {
    err(/_{2,}/.test(ex.sentence), `${ex.id}: gap sentence has no ___ blank`);
    err(ex.answers.length > 0 && ex.answers.every((a) => a.trim()), `${ex.id}: empty answers`);
    if (ex.hint) locOk(ex.hint, `${ex.id}.hint`);
  } else {
    locOk(ex.prompt, `${ex.id}.prompt`);
    err(ex.options.length >= 2, `${ex.id}: mcq needs ≥2 options`);
    err(Number.isInteger(ex.correct) && ex.correct >= 0 && ex.correct < ex.options.length,
      `${ex.id}: mcq correct index out of range`);
    err(new Set(ex.options).size === ex.options.length, `${ex.id}: duplicate mcq options`);
  }
}

for (const m of modules as Module[]) {
  err(!moduleIds.has(m.id), `duplicate module id ${m.id}`); moduleIds.add(m.id);
  err(!nums.has(m.num), `duplicate module num ${m.num} (${m.id})`); nums.add(m.num);
  err(sectionIds.has(m.section), `module ${m.id} -> unknown section ${m.section}`);
  err(LEVELS.includes(m.level), `${m.id}: bad level '${m.level}'`);
  locOk(m.title, `${m.id}.title`); locOk(m.tagline, `${m.id}.tagline`); locOk(m.mentalModel, `${m.id}.mentalModel`);
  for (const sa of m.seeAlso) err(sa !== m.id, `${m.id} seeAlso self-reference`);
  for (const src of m.sources) err(/^https?:\/\//.test(src.url), `${m.id} bad source url: ${src.url}`);

  // order unique within section
  const sib = (modules as Module[]).filter((x) => x.section === m.section);
  err(sib.filter((x) => x.order === m.order).length === 1, `${m.id} duplicate order ${m.order} in ${m.section}`);

  for (const t of m.topics) {
    locOk(t.title, `${m.id}/${t.id}.title`);
    for (const [i, b] of t.blocks.entries()) {
      const at = `${m.id}/${t.id}#${i}`;
      if (b.kind === 'prose') locOk(b.md, `${at} prose`);
      if (b.kind === 'figure') err(figKeys.has(b.fig), `${at} unknown figure key '${b.fig}'`);
      if (b.kind === 'sim') err(simKeys.has(b.sim), `${at} unknown sim key '${b.sim}'`);
      if (b.kind === 'callout') { locOk(b.title, `${at} callout.title`); locOk(b.md, `${at} callout.md`); }
      if (b.kind === 'table') {
        for (const row of b.rows) err(row.length === b.head.length, `${at} table row width != head`);
      }
      if (b.kind === 'compare') for (const r of b.rows) err(r.length === 3, `${at} compare row not a 3-tuple`);
      // CHANGED (T1): dive depth tags (S5 mechanic) — if present, must be 2 | 3 | 4.
      if (b.dive !== undefined) err([2, 3, 4].includes(b.dive), `${at} bad dive level '${b.dive}'`);
    }
  }

  for (const ex of m.exercises ?? []) checkExercise(ex, m);

  // Golden bar for AUTHORED modules only (stubs are sanctioned skeleton entries).
  if (isAuthored(m.id)) {
    const isModal = m.section === 's3-modal-verbs';
    // CHANGED (T1): tense modules carry the second-flagship bar (≥12 drills — CURRICULUM §A).
    const isTense = m.section === 's6-tenses';
    const minEx = isModal ? 15 : isTense ? 12 : 8;
    err((m.exercises?.length ?? 0) >= minEx,
      `${m.id}: authored module needs ≥${minEx} exercises, has ${m.exercises?.length ?? 0}`);
    err(m.keyPoints.length >= 3, `${m.id}: authored module needs ≥3 key points`);
    err(m.pitfalls.length >= 3, `${m.id}: authored module needs ≥3 pitfalls`);
    err(m.sources.length >= 2, `${m.id}: authored module needs ≥2 sources`);
    const blocks = m.topics.flatMap((t) => t.blocks);
    err(blocks.some((b) => b.kind === 'figure' || b.kind === 'sim'), `${m.id}: authored module needs a figure or sim`);
    err(blocks.some((b) => b.kind === 'table' || b.kind === 'compare'), `${m.id}: authored module needs a table`);
  }
}

// seeAlso targets exist
for (const m of modules as Module[]) for (const sa of m.seeAlso) err(moduleIds.has(sa), `${m.id} seeAlso -> unknown ${sa}`);

// --- dictionary checks -----------------------------------------------------
const wordIds = new Set<string>();
const headwords = new Set<string>();

function checkWord(w: WordEntry, file: string): void {
  const at = `${file}:${w.id}`;
  err(!wordIds.has(w.id), `duplicate word id ${w.id}`); wordIds.add(w.id);
  err(KEBAB.test(w.id), `${at}: id not kebab-case`);
  err(w.word.trim().length > 0, `${at}: empty headword`);
  const hwKey = `${w.kind}:${w.word.toLowerCase()}`;
  err(!headwords.has(hwKey), `${at}: duplicate headword '${w.word}' (${w.kind})`); headwords.add(hwKey);
  err(LEVELS.includes(w.level), `${at}: bad level '${w.level}'`);
  err(w.pos.length > 0, `${at}: empty pos`);
  err(w.translations.length > 0 && w.translations.every((tr) => tr.trim().length > 0), `${at}: empty translations`);
  locOk(w.def, `${at}.def`);

  const isSingleWord = w.kind === 'word' && !w.word.includes(' ');
  if (isSingleWord) err(!!w.ipa?.trim(), `${at}: single word missing IPA`);
  if (w.ipa) err(!/^\/.*\/$/.test(w.ipa), `${at}: IPA must not include slashes`);

  // The 7-example golden contract (words); phrasals/idioms ≥3 (BRIEF §5).
  if (w.kind === 'word') {
    err(w.examples.length === 7, `${at}: word needs exactly 7 examples, has ${w.examples.length}`);
    const tags = { general: 0, business: 0, office: 0, dev: 0 };
    for (const ex of w.examples) tags[ex.tag]++;
    err(tags.general === 4 && tags.business === 1 && tags.office === 1 && tags.dev === 1,
      `${at}: example tags must be 4×general + 1×business + 1×office + 1×dev (got ${JSON.stringify(tags)})`);
  } else {
    err(w.examples.length >= 3, `${at}: ${w.kind} needs ≥3 examples`);
  }
  w.examples.forEach((ex, i) => locOk(ex.text, `${at}.examples[${i}]`));
}

for (const w of a1Words) {
  checkWord(w, 'a1');
  err(w.level === 'a1', `a1:${w.id}: level must be 'a1', got '${w.level}'`);
  err(w.source === 'oxford', `a1:${w.id}: source must be 'oxford'`);
}
for (const w of customWords) {
  checkWord(w, 'custom');
  err(w.source === 'custom', `custom:${w.id}: source must be 'custom'`);
}
// seeAlso resolution over the FULL dictionary
for (const w of WORDS) {
  for (const sa of w.seeAlso ?? []) {
    err(wordIds.has(sa), `${w.id} seeAlso -> unknown word id '${sa}'`);
    err(sa !== w.id, `${w.id} seeAlso self-reference`);
  }
}

// --- reading checks (S3) ---------------------------------------------------
const readingCatIds = new Set<string>();
for (const c of READING_CATEGORIES as ReadingCategory[]) {
  err(!readingCatIds.has(c.id), `duplicate reading category id ${c.id}`); readingCatIds.add(c.id);
  err(KEBAB.test(c.id), `reading category ${c.id}: id not kebab-case`);
  locOk(c.title, `reading category ${c.id}.title`);
  if (c.blurb) locOk(c.blurb, `reading category ${c.id}.blurb`);
}

const readingIds = new Set<string>();
function checkReadingQuestion(q: ReadingQuestion, at: string): void {
  locOk(q.q, `${at}.q`);
  if (q.kind === 'mcq') {
    err(q.options.length >= 2, `${at}: mcq needs ≥2 options`);
    q.options.forEach((o, i) => locOk(o, `${at}.options[${i}]`));
    err(Number.isInteger(q.correct) && q.correct >= 0 && q.correct < q.options.length,
      `${at}: mcq correct index out of range`);
    err(new Set(q.options.map((o) => o.en)).size === q.options.length, `${at}: duplicate mcq options`);
    if (q.explain) locOk(q.explain, `${at}.explain`);
  } else {
    locOk(q.sample, `${at}.sample`);
  }
}
for (const rt of READING_TEXTS as ReadingText[]) {
  const at = `reading:${rt.id}`;
  err(!readingIds.has(rt.id), `duplicate reading text id ${rt.id}`); readingIds.add(rt.id);
  err(KEBAB.test(rt.id), `${at}: id not kebab-case`);
  err(readingCatIds.has(rt.category), `${at}: unknown category '${rt.category}'`);
  err(LEVELS.includes(rt.level), `${at}: bad level '${rt.level}'`);
  err(Number.isInteger(rt.minutes) && rt.minutes >= 1, `${at}: minutes must be an integer ≥1`);
  locOk(rt.title, `${at}.title`);
  locOk(rt.body, `${at}.body`);
  err(rt.questions.length >= 3 && rt.questions.length <= 5, `${at}: needs 3–5 questions, has ${rt.questions.length}`);
  rt.questions.forEach((q, i) => checkReadingQuestion(q, `${at}.q${i}`));
  if (rt.source) err(!!rt.source.author?.trim(), `${at}: source.author empty`);
}
for (const rt of READING_TEXTS as ReadingText[]) {
  for (const sa of rt.seeAlso ?? []) {
    err(readingIds.has(sa), `${rt.id} seeAlso -> unknown reading id '${sa}'`);
    err(sa !== rt.id, `${rt.id} seeAlso self-reference`);
  }
}

// --- idioms checks (V2 — the Idioms hub, a separate dataset) ----------------
const idiomIds = new Set<string>();
const idiomPhrases = new Set<string>();
const IDIOM_KINDS = new Set(['idiom', 'phrasal', 'collocation']);
const IDIOM_REGISTERS = new Set(['neutral', 'informal', 'formal', 'business']);
for (const e of IDIOMS as IdiomEntry[]) {
  const at = `idiom:${e.id}`;
  err(!idiomIds.has(e.id), `duplicate idiom id ${e.id}`); idiomIds.add(e.id);
  err(KEBAB.test(e.id), `${at}: id not kebab-case`);
  err(e.phrase.trim().length > 0, `${at}: empty phrase`);
  const pk = e.phrase.toLowerCase();
  err(!idiomPhrases.has(pk), `${at}: duplicate phrase '${e.phrase}'`); idiomPhrases.add(pk);
  err(IDIOM_KINDS.has(e.kind), `${at}: bad kind '${e.kind}'`);
  err(IDIOM_REGISTERS.has(e.register), `${at}: bad register '${e.register}'`);
  err(LEVELS.includes(e.level), `${at}: bad level '${e.level}'`);
  locOk(e.meaning, `${at}.meaning`);
  err(e.themes.length > 0, `${at}: needs ≥1 theme`);
  err(e.examples.length >= 2, `${at}: needs ≥2 examples`);
  e.examples.forEach((ex, i) => locOk(ex.text, `${at}.examples[${i}]`));
  if (e.literal) locOk(e.literal, `${at}.literal`);
  if (e.origin) locOk(e.origin, `${at}.origin`);
  if (e.uaEquivalent !== undefined) err(e.uaEquivalent.trim().length > 0, `${at}: empty uaEquivalent`);
  for (const s of e.synonyms ?? []) err(s.trim().length > 0, `${at}: empty synonym`);
}

// --- irregular verbs checks (V3 — the Words-hub Irregular tab) --------------
const irrBases = new Set<string>();
for (const v of IRREGULAR as IrregularVerb[]) {
  const at = `irr:${v.base}`;
  err(v.base.trim().length > 0, `${at}: empty base`);
  err(!irrBases.has(v.base.toLowerCase()), `duplicate irregular base '${v.base}'`); irrBases.add(v.base.toLowerCase());
  err(v.past.trim().length > 0, `${at}: empty past`);
  err(v.pastParticiple.trim().length > 0, `${at}: empty past participle`);
  err(LEVELS.includes(v.level), `${at}: bad level '${v.level}'`);
  err(v.translations.length > 0 && v.translations.every((tr) => tr.trim()), `${at}: empty translations`);
  if (v.note) locOk(v.note, `${at}.note`);
}

// --- COUNTS (locked for S1; sections 5 → 6 in T1 — the S5 Tenses insert) ----
const EXPECTED_SECTIONS = 6;
const EXPECTED_MODULES = 34;
const EXPECTED_A1_WORDS = 150; // dictionary wave W1
err(sections.length === EXPECTED_SECTIONS, `expected ${EXPECTED_SECTIONS} sections, got ${sections.length}`);
err(modules.length === EXPECTED_MODULES, `expected ${EXPECTED_MODULES} modules, got ${modules.length}`);
err(a1Words.length === EXPECTED_A1_WORDS, `expected ${EXPECTED_A1_WORDS} a1 words (W1), got ${a1Words.length}`);

// --- report ----------------------------------------------------------------
if (errors.length) {
  console.error(`✗ check:data — ${errors.length} problem(s):`);
  for (const e of errors) console.error('  - ' + e);
  process.exit(1);
}
console.log(
  `✓ check:data — ${sections.length} sections, ${modules.length} modules ` +
  `(${modules.filter((m) => isAuthored(m.id)).length} authored), ${exerciseIds.size} exercises, ` +
  `${WORDS.length} words (${a1Words.length} a1 + ${customWords.length} custom), ` +
  `${READING_TEXTS.length} reading texts in ${readingCatIds.size} categories, ${IDIOMS.length} idioms, ${IRREGULAR.length} irregular verbs, all bilingual, registry + links resolve.`,
);
