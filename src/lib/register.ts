// CHANGED (A4): the ★ Register Dial engine (m29): register as a MEASURABLE property of a sentence. One
// content moves along four stops (chat · email · report · official). Words swap (find out → ascertain),
// structures rebuild (you need to → it is essential that the vendor be notified · If you need → Should you
// require), contractions open up. The engine COUNTS register markers and places the needle from that
// score; the data never states where a sentence belongs.
// Markers (Cambridge: Formal and informal language · Register · Contractions · Phrasal verbs; British
// Council C1: Inversion and conditionals):
//   − computed from the text: contractions (don't · we're · it's) · And / So / But opening a sentence · "!"
//   − from a LEXICON: informal words and phrasal verbs (get · find out · reach out · thanks) and slang
//     (gonna · hey · stuff), which weighs double
//   + from a LEXICON: formal words (require · regarding · prior to · kindly) and official words
//     (hereby · pursuant to · in accordance with), which weigh double
//   + computed: nominalisations (by suffix: -tion · -ment · -ance · -ence · -sion · -ity, ≥ 8 letters) ·
//     the passive (a form of be + a `|part` participle) · a mandative subjunctive (essential / recommend /
//     request … + that + subject + BASE verb; double weight) · should after such a trigger (the BrE form) ·
//     conditional inversion opening the sentence (Should you require · Were it not · Had we known; double)
// Diagnosis: `mixed` (an official marker beside an informal one: no single register) · `indicative` (the
// AmE formal norm wants the base form: that the vendor be notified, not is notified) and, in the traps
// track, a band that does not fit the message's declared context (too formal / too casual).
// American English base; where a mandative subjunctive appears, the engine BUILDS the BrE variant
// (should + base) for a chip. Content: src/data/registerDial.ts. Golden test: scripts/test-register.ts.
import type { Localized } from '../data/types';
import { RD_SCENARIOS } from '../data/registerDial';
import { parseLine, textOf } from './tokenMorph';
import type { MorphToken } from './tokenMorph';

// ── Stops ────────────────────────────────────────────────────────────────

export type Stop = 'chat' | 'email' | 'report' | 'official';
export const STOPS: readonly Stop[] = ['chat', 'email', 'report', 'official'];
export const STOP_LABEL: Record<Stop, Localized> = {
  chat: { en: 'Chat', uk: 'Чат' },
  email: { en: 'Email', uk: 'Лист' },
  report: { en: 'Report', uk: 'Звіт' },
  official: { en: 'Official', uk: 'Офіційний' },
};
export const STOP_NOTE: Record<Stop, Localized> = {
  chat: { en: 'Slack, a DM, a quick message to your team', uk: 'Slack, DM, коротке повідомлення команді' },
  email: { en: 'an email to a colleague or a client you know', uk: 'лист колезі чи знайомому клієнтові' },
  report: { en: 'a postmortem, a proposal, documentation', uk: 'постмортем, пропозиція, документація' },
  official: { en: 'a policy, a contract, a formal notice', uk: 'політика, контракт, офіційне повідомлення' },
};
/** The lowest score of each band (chat has none). */
export const BAND_MIN: Record<Stop, number> = { chat: -Infinity, email: -1, report: 2, official: 4 };

export function bandOf(score: number): Stop {
  let out: Stop = 'chat';
  for (const s of STOPS) if (score >= BAND_MIN[s]) out = s;
  return out;
}

// ── Lexicons ─────────────────────────────────────────────────────────────

/** Informal words and phrasal verbs (−1). Multi-word entries are space-joined. */
export const INFORMAL: readonly string[] = [
  'get', 'gets', 'got', 'getting', 'find out', 'figure out', 'sort out', 'reach out', 'look into', 'check out',
  'thanks', 'hi', 'just', 'ping', 'heads-up', 'fyi', 'okay', 'ok', 'a lot of', 'feel free', 'pushing', 'skipping',
];
/** Slang (−2). */
export const SLANG: readonly string[] = ['hey', 'gonna', 'gotta', 'wanna', 'kinda', 'stuff', 'guys', 'yeah', 'asap', 'super'];
/** Formal words (+1). */
export const FORMAL: readonly string[] = [
  'require', 'requires', 'required', 'regarding', 'prior to', 'commence', 'obtain', 'assist', 'request', 'requested',
  'approximately', 'subsequently', 'additional', 'inform', 'informed', 'ensure', 'kindly', 'upon', 'receipt',
  'further information',
];
/** Official / legal words (+2). */
export const OFFICIAL: readonly string[] = [
  'hereby', 'pursuant to', 'in accordance with', 'notwithstanding', 'whereby', 'herein', 'thereof', 'in the event that', 'shall',
];
/** Words that make a that-clause mandative (Cambridge: suggest · insist · recommend; adjectives of necessity). */
export const MANDATIVE: readonly string[] = [
  'essential', 'vital', 'imperative', 'important', 'crucial', 'necessary', 'recommend', 'recommends', 'recommended',
  'request', 'requests', 'requested', 'require', 'requires', 'required', 'insist', 'insists', 'insisted', 'demand',
  'demands', 'demanded', 'suggest', 'suggests', 'suggested', 'propose', 'proposes', 'proposed',
];

const BE_FORMS = new Set(['am', 'is', 'are', 'was', 'were', 'be', 'been', 'being']);
const NOMINAL = /^[a-z]{4,}(tion|sion|ment|ance|ence|ity)s?$/;
const CONTRACTION = /(n[’']t|[’'](re|ve|ll|m|d))$/i;
const PRONOUN_S = /^(it|that|there|what|he|she|let|here|who)[’']s$/i;
const INVERTERS = new Set(['should', 'were', 'had']);
const PLAIN_SUBJ = new Set(['i', 'you', 'we', 'they']);

// ── Markers ──────────────────────────────────────────────────────────────

export type MarkerKind =
  | 'contraction' | 'informal' | 'slang' | 'opener' | 'exclaim'
  | 'formal' | 'official' | 'nominal' | 'passive' | 'subjunctive' | 'should' | 'inversion';
export const MARKER_WEIGHT: Record<MarkerKind, number> = {
  contraction: -1, informal: -1, slang: -2, opener: -1, exclaim: -1,
  formal: 1, official: 2, nominal: 1, passive: 1, subjunctive: 2, should: 1, inversion: 2,
};
export const MARKER_LABEL: Record<MarkerKind, Localized> = {
  contraction: { en: 'contraction', uk: 'скорочення' },
  informal: { en: 'informal word', uk: 'розмовне слово' },
  slang: { en: 'slang', uk: 'сленг' },
  opener: { en: 'And / So / But opener', uk: 'And / So / But на початку' },
  exclaim: { en: 'exclamation', uk: 'оклик' },
  formal: { en: 'formal word', uk: 'формальне слово' },
  official: { en: 'official word', uk: 'офіційне слово' },
  nominal: { en: 'nominalisation', uk: 'номіналізація' },
  passive: { en: 'passive', uk: 'passive' },
  subjunctive: { en: 'subjunctive', uk: 'subjunctive' },
  should: { en: 'should (BrE mandative)', uk: 'should (BrE mandative)' },
  inversion: { en: 'conditional inversion', uk: 'умовна інверсія' },
};
/** Formal markers that make an informal one beside them a clash. */
const HIGH: ReadonlySet<MarkerKind> = new Set(['official', 'subjunctive', 'should', 'inversion']);

export type Marker = { kind: MarkerKind; text: string };

/** A mandative that-clause: its trigger, subject and verb, and what form the verb is in. */
export type Mandative = { trigger: string; subj: number; verb: number; form: 'subjunctive' | 'should' | 'indicative' | 'unclear' };

const low = (t: MorphToken) => t.w.toLowerCase();

/** Every mandative that-clause in the sentence. */
export function mandativesOf(tokens: readonly MorphToken[]): Mandative[] {
  const out: Mandative[] = [];
  tokens.forEach((t, i) => {
    if (low(t) !== 'that' || i === 0) return;
    const prev = tokens[i - 1];
    if (prev.glue || !MANDATIVE.includes(low(prev))) return;
    const subj = tokens.findIndex((x, j) => j > i && x.role === 'subj');
    const verb = tokens.findIndex((x, j) => j > subj && x.role === 'verb');
    if (subj < 0 || verb < 0) return;
    const between = tokens.slice(subj + 1, verb).map(low);
    const v = low(tokens[verb]);
    const s = low(tokens[subj]);
    const third = !PLAIN_SUBJ.has(s) && !/[^s]s$/.test(s);
    let form: Mandative['form'];
    if (between.includes('should')) form = 'should';
    else if (v === 'be') form = 'subjunctive';
    else if (BE_FORMS.has(v) || v === 'has' || (third && /s$/.test(v))) form = 'indicative';
    else form = third ? 'subjunctive' : 'unclear';
    out.push({ trigger: low(prev), subj, verb, form });
  });
  return out;
}

/** Find lexicon phrases in the word sequence (longest first, no overlaps). */
function matchLexicon(words: string[], lex: readonly string[], used: Set<number>): string[] {
  const hits: string[] = [];
  const phrases = [...lex].sort((a, b) => b.split(' ').length - a.split(' ').length);
  for (const p of phrases) {
    const parts = p.split(' ');
    for (let i = 0; i + parts.length <= words.length; i++) {
      if (parts.every((w, k) => words[i + k] === w && !used.has(i + k))) {
        parts.forEach((_, k) => used.add(i + k));
        hits.push(p);
      }
    }
  }
  return hits;
}

/** Every register marker in the sentence, computed. */
export function markersOf(tokens: readonly MorphToken[]): Marker[] {
  const out: Marker[] = [];
  const words = tokens.filter((t) => !t.glue);
  const lw = words.map(low);
  const used = new Set<number>();
  for (const p of matchLexicon(lw, OFFICIAL, used)) out.push({ kind: 'official', text: p });
  for (const p of matchLexicon(lw, SLANG, used)) out.push({ kind: 'slang', text: p });
  for (const p of matchLexicon(lw, INFORMAL, used)) out.push({ kind: 'informal', text: p });
  // Mandative verbs are counted by the subjunctive marker, not again as a formal word.
  const mands = mandativesOf(tokens);
  const mandTriggers = new Set(mands.map((m) => m.trigger));
  for (const p of matchLexicon(lw, FORMAL.filter((w) => !mandTriggers.has(w)), used)) out.push({ kind: 'formal', text: p });

  for (const w of words) {
    if (CONTRACTION.test(w.w) || PRONOUN_S.test(w.w)) out.push({ kind: 'contraction', text: w.w });
    if (NOMINAL.test(low(w))) out.push({ kind: 'nominal', text: w.w });
  }
  tokens.forEach((t, i) => {
    if (t.glue && t.w.includes('!')) out.push({ kind: 'exclaim', text: '!' });
    const startOfSentence = i === 0 || (tokens[i - 1].glue && /[.!?]/.test(tokens[i - 1].w));
    if (startOfSentence && ['and', 'so', 'but'].includes(low(t))) out.push({ kind: 'opener', text: t.w });
    // Passive: a form of be, then (optionally one adverb / not) a marked participle.
    if (BE_FORMS.has(low(t))) {
      const n1 = tokens[i + 1];
      const n2 = tokens[i + 2];
      if (n1?.role === 'part' || (n1 && !n1.glue && n2?.role === 'part')) out.push({ kind: 'passive', text: `${t.w} ${n1.role === 'part' ? n1.w : n2!.w}` });
    }
  });
  // Conditional inversion: Should / Were / Had + subject opening the sentence.
  if (tokens.length > 1 && INVERTERS.has(low(tokens[0])) && tokens[1].role === 'subj') out.push({ kind: 'inversion', text: `${tokens[0].w} ${tokens[1].w}` });
  for (const m of mands) {
    if (m.form === 'subjunctive') out.push({ kind: 'subjunctive', text: `${m.trigger} that … ${tokens[m.verb].w}` });
    if (m.form === 'should') out.push({ kind: 'should', text: `${m.trigger} that … should ${tokens[m.verb].w}` });
  }
  return out;
}

export function scoreOf(markers: readonly Marker[]): number {
  return markers.reduce((s, m) => s + MARKER_WEIGHT[m.kind], 0);
}

// ── Diagnosis ────────────────────────────────────────────────────────────

export type RdIssue = 'mixed' | 'indicative' | 'too-formal' | 'too-casual';
export const ISSUE_TEXT: Record<RdIssue, Localized> = {
  mixed: {
    en: 'Mixed register: an official form sits next to a casual one, so the sentence has no single voice. Pick one register and stay in it.',
    uk: 'Змішаний регістр: офіційна форма стоїть поруч із розмовною, тож у речення немає єдиного голосу. Оберіть один регістр і тримайтеся його.',
  },
  indicative: {
    en: 'Formal American English uses the base form after essential / recommend / request + that: the vendor be notified, not is notified. (BrE: should be notified.)',
    uk: 'Формальна американська англійська після essential / recommend / request + that уживає базову форму: the vendor be notified, а не is notified. (BrE: should be notified.)',
  },
  'too-formal': {
    en: 'Too formal for where it is going: this reads like a legal notice in a team chat.',
    uk: 'Надто формально для цього каналу: читається як юридичне повідомлення в командному чаті.',
  },
  'too-casual': {
    en: 'Too casual for where it is going: an official text needs formal words and structures.',
    uk: 'Надто розмовно для цього каналу: офіційному тексту потрібні формальні слова й конструкції.',
  },
};

/** Context-free diagnosis (the dial track). */
export function diagnose(tokens: readonly MorphToken[], markers = markersOf(tokens)): RdIssue[] {
  const issues: RdIssue[] = [];
  const high = markers.some((m) => HIGH.has(m.kind));
  const casual = markers.some((m) => MARKER_WEIGHT[m.kind] < 0);
  if (high && casual) issues.push('mixed');
  if (mandativesOf(tokens).some((m) => m.form === 'indicative')) issues.push('indicative');
  return issues;
}

/** Diagnosis against a declared context (the traps track). A mixed sentence has no band to compare. */
export function diagnoseIn(tokens: readonly MorphToken[], context: Stop): RdIssue[] {
  const markers = markersOf(tokens);
  const issues = diagnose(tokens, markers);
  if (issues.includes('mixed')) return issues;
  const band = STOPS.indexOf(bandOf(scoreOf(markers)));
  const want = STOPS.indexOf(context);
  if (band > want) issues.push('too-formal');
  if (band < want) issues.push('too-casual');
  return issues;
}

/** The BrE variant of a mandative subjunctive (should + base), built by the engine; null if none. */
export function breVariant(tokens: readonly MorphToken[]): string | null {
  const m = mandativesOf(tokens).find((x) => x.form === 'subjunctive');
  if (!m) return null;
  const out: MorphToken[] = [...tokens.slice(0, m.verb), { k: 'should~bre', w: 'should', glue: false }, ...tokens.slice(m.verb)];
  return textOf(out);
}

// ── Scenarios ────────────────────────────────────────────────────────────

export type RdTrack = 'dial' | 'traps';
export const RD_TRACKS: readonly RdTrack[] = ['dial', 'traps'];
export type TrapKind = 'error' | 'fix1' | 'fix2';
export const TRAP_KINDS: readonly TrapKind[] = ['error', 'fix1', 'fix2'];
export const TRAP_LABEL: Record<TrapKind, Localized> = {
  error: { en: 'The error', uk: 'Помилка' },
  fix1: { en: 'Fix 1', uk: 'Виправлення 1' },
  fix2: { en: 'Fix 2', uk: 'Виправлення 2' },
};

export type RdFrame = { src: string; uk: string };
export type RdScenario = {
  id: string;
  track: RdTrack;
  title: Localized;
  /** Dial: one frame per stop, in STOPS order. Traps: error, fix 1, fix 2. */
  frames: RdFrame[];
  /** Traps: where the message is going. */
  context?: Stop;
  why?: Localized;
};

export function scenariosOf(track: RdTrack): RdScenario[] {
  return RD_SCENARIOS.filter((s) => s.track === track);
}
export function listScenarios(): readonly RdScenario[] {
  return RD_SCENARIOS;
}

const cache = new Map<string, MorphToken[]>();
export function tokensOf(frame: RdFrame): MorphToken[] {
  let t = cache.get(frame.src);
  if (!t) {
    t = parseLine(frame.src);
    cache.set(frame.src, t);
  }
  return t;
}
