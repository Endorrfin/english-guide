// CHANGED (VA1): the ★ Word Formation Lab engine (m31) — TokenMorph at the level of LETTERS.
// A word is built from a root plus affixes, one step at a time; each step is shown as the parts side by
// side (root + affix) and then welded. At the seam the engine COMPUTES the spelling: a silent e drops or
// stays, a final consonant doubles or not, y turns into i, ie into y, -ble into -bil-, -le + -ly into
// -ly, and the negative prefix in- assimilates to il- / im- / ir- by the first letter of the root. Every
// letter keeps a stable key across frames, so a letter that drops leaves as a ghost and a letter the
// rule adds arrives highlighted.
//
// What is NOT computed, because it is not a rule but a fact of the lexicon, is DECLARED by the scenario:
// which affix a word takes (un- vs in-, -ment vs -ion), where the stress falls (the doubling rule needs
// it, and spelling does not show it: begin → beginning, visit → visiting), and an irregular stem
// (decide → decis-ion, argue → argu-ment). The UI labels those as declared, the rest as computed.
// American English is the base; British English is COMPUTED as a variant where spelling differs
// (unstressed -l doubling, -ise, -our). Golden-tested by scripts/test-word-formation.ts: the word the
// engine assembles equals the word the author wrote, for every step of every scenario.
import type { Localized } from '../data/types';
import type { MorphToken } from './tokenMorph';
import { WF_BUILDS, WF_FAMILIES, WF_TRAPS } from '../data/wordFormation';

export type Variant = 'ame' | 'bre';
export type Stress = 'final' | 'early';
/** One derivation step: a prefix OR a suffix, plus the lexical facts the spelling needs. */
export type WfStep = {
  prefix?: string;
  suffix?: string;
  /** Is the base's LAST syllable stressed in this word? Needed only where doubling could apply. */
  stress?: Stress;
  /** An irregular (lexical) stem the suffix attaches to: decide → decis- (+ion). */
  stem?: string;
};
export type RootFacts = {
  /** The root ends in the suffix -ize (realize, organize) — not size / prize. BrE may spell it -ise. */
  ize?: boolean;
  /** The root ends in -or in AmE and -our in BrE (color / colour, humor / humour). */
  our?: boolean;
};
export type WfGroup = 'prefix' | 'suffix' | 'variant';
export const WF_GROUPS: readonly WfGroup[] = ['prefix', 'suffix', 'variant'];
export type WfTrack = 'build' | 'family' | 'traps';
export const WF_TRACKS: readonly WfTrack[] = ['build', 'family', 'traps'];

export type WfBuild = {
  id: string;
  group: WfGroup;
  title: Localized;
  root: string;
  rootFacts?: RootFacts;
  steps: WfStep[];
  /** The AUTHORED American spelling after each step (the golden test compares the engine to it). */
  forms: string[];
  /** A Ukrainian gloss for the root and for each form: length = steps + 1. */
  uk: string[];
};
export type Pos = 'verb' | 'noun' | 'person' | 'adjective' | 'adverb' | 'opposite';
export type WfMember = { pos: Pos; steps: WfStep[]; form: string; uk: string };
export type WfFamily = { id: string; title: Localized; root: string; rootFacts?: RootFacts; members: WfMember[] };
export type WfTrap = {
  id: string;
  title: Localized;
  /** The typical misspelling. */
  wrong: string;
  root: string;
  rootFacts?: RootFacts;
  steps: WfStep[];
  /** The authored correct form. */
  form: string;
  uk: string;
  /** The diagnosis the AUTHOR expects; the golden test checks the engine finds exactly this one. */
  expect: DiagId;
  why: Localized;
};

export type RuleId =
  | 'join' | 'assimilate' | 'seam' | 'stem' | 'drop-e' | 'merge-e' | 'keep-e' | 'keep-e-soft' | 'keep-e-ee'
  | 'y-to-i' | 'keep-y' | 'ie-to-y' | 'double' | 'no-double' | 'l-bre' | 'le-ly' | 'ble-bil' | 'ise-bre' | 'our-bre';
/** Rules whose letter-change can be "switched off" to model a misspelling (the trap diagnosis). */
const OFFABLE: readonly RuleId[] = ['assimilate', 'seam', 'stem', 'drop-e', 'merge-e', 'keep-e-soft', 'y-to-i', 'ie-to-y', 'double', 'le-ly', 'ble-bil'];
type Force = 'double' | 'y-to-i' | 'drop-e';
const FORCES: readonly Force[] = ['double', 'y-to-i', 'drop-e'];
export type DiagId = `off:${RuleId}` | `force:${Force}` | 'prefix' | 'suffix';

/** A misspelling model: one rule switched off, one forced where it does not apply, or a wrong affix. */
export type Mutation = { off?: RuleId; force?: Force; prefix?: string; suffix?: string };

export type Letter = { k: string; ch: string };
export type Change = { rule: RuleId; note?: string };
export type StepResult = {
  step: WfStep;
  /** The parts frame: base + seam + affix (or affix + seam + base). */
  parts: Letter[];
  /** The welded frame. */
  after: Letter[];
  word: string;
  changes: Change[];
  affixKeys: Set<string>;
  spellKeys: Set<string>;
};
export type Built = { root: Letter[]; steps: StepResult[]; word: string; variantChanges: Change[] };

const VOWELS = 'aeiou';
const isVowel = (ch: string | undefined) => !!ch && VOWELS.includes(ch);
const strOf = (ls: readonly Letter[]) => ls.map((l) => l.ch).join('');
export const SEAM = '+';

/** Single vowel + single consonant (not w / x / y) after a consonant (qu counts as one): stop, begin, quit. */
export function endsCVC(w: string): boolean {
  const n = w.length;
  if (n < 3) return false;
  const c3 = w[n - 1];
  if (isVowel(c3) || 'wxy'.includes(c3)) return false;
  if (!isVowel(w[n - 2])) return false;
  const c1 = w[n - 3];
  return !isVowel(c1) || (c1 === 'u' && w[n - 4] === 'q');
}

/** Spoken syllables ≈ vowel groups (a leading y is a consonant). Only used on words ending in a consonant. */
export function syllables(w: string): number {
  return (w.replace(/^y/, '').match(/[aeiouy]+/g) ?? []).length;
}

/** Suffixes that block BrE -our → the -or- form: humorous, honorary, vigorous. */
const OUR_BLOCKERS = new Set(['ous', 'ary']);
/** Common affix misspellings the trap diagnosis tries. */
const MISSPELT_SUFFIX: Record<string, string> = { ful: 'full', able: 'ible', ible: 'able', ance: 'ence', ence: 'ance' };
const NEGATIVE_PREFIXES = ['un', 'in', 'dis', 'non', 'mis'];

function attachPrefix(base: Letter[], P0: string, i: number, mut: Mutation) {
  if (/^(im|il|ir)$/.test(P0)) throw new Error(`wordFormation: declare in-, not ${P0}- — the engine assimilates`);
  const P = mut.prefix ?? P0;
  const on = (r: RuleId) => mut.off !== r;
  let pfx: Letter[] = [...P].map((ch, j) => ({ k: `p${i}.${j}`, ch }));
  const changes: Change[] = [];
  const spell = new Set<string>();
  const first = base[0].ch;
  if (P === 'in' && on('assimilate')) {
    const to = first === 'l' ? 'l' : first === 'r' ? 'r' : 'bmp'.includes(first) ? 'm' : null;
    if (to) {
      const k = `x${i}.a`;
      pfx = [pfx[0], { k, ch: to }];
      spell.add(k);
      changes.push({ rule: 'assimilate', note: `in- → i${to}-` });
    }
  }
  if (pfx[pfx.length - 1].ch === first) {
    if (on('seam')) changes.push({ rule: 'seam', note: `${first}${first}` });
    else pfx = pfx.slice(0, -1);
  }
  if (changes.length === 0) changes.push({ rule: 'join' });
  const affixKeys = new Set(pfx.map((l) => l.k));
  const raw: Letter[] = [...P].map((ch, j) => ({ k: `p${i}.${j}`, ch }));
  const parts = [...raw, { k: `seam.${i}`, ch: SEAM }, ...base];
  return { parts, after: [...pfx, ...base], changes, spell, affixKeys };
}

function attachSuffix(base: Letter[], step: WfStep, S0: string, i: number, variant: Variant, mut: Mutation) {
  const S = mut.suffix ?? S0;
  const on = (r: RuleId) => mut.off !== r;
  const raw: Letter[] = [...S].map((ch, j) => ({ k: `s${i}.${j}`, ch }));
  let sfx = [...raw];
  let b = [...base];
  const changes: Change[] = [];
  const spell = new Set<string>();
  let n = 0;
  const fresh = (ch: string): Letter => {
    const k = `x${i}.${n++}`;
    spell.add(k);
    return { k, ch };
  };
  const w = strOf(b);
  const vS = /^[aeiouy]/.test(S);
  const last = w[w.length - 1];
  const prev = w[w.length - 2];
  const cvc = endsCVC(w);
  let endChanged = false;

  if (step.stem && on('stem')) {
    let c = 0;
    while (c < w.length && c < step.stem.length && w[c] === step.stem[c]) c++;
    b = [...b.slice(0, c), ...[...step.stem.slice(c)].map(fresh)];
    changes.push({ rule: 'stem', note: `${w} → ${step.stem}-` });
  } else {
    if (w.endsWith('ble') && S === 'ity' && on('ble-bil')) {
      b = [...b.slice(0, -2), fresh('i'), b[b.length - 2]];
      changes.push({ rule: 'ble-bil', note: '-ble → -bil-' });
      endChanged = true;
    } else if (/[^aeiou]le$/.test(w) && S === 'ly' && on('le-ly')) {
      b = b.slice(0, -1);
      sfx = sfx.slice(1);
      changes.push({ rule: 'le-ly', note: '-le + -ly → -ly' });
      endChanged = true;
    } else if (w.endsWith('ie') && S.startsWith('i') && on('ie-to-y')) {
      b = [...b.slice(0, -2), fresh('y')];
      changes.push({ rule: 'ie-to-y', note: 'ie → y' });
      endChanged = true;
    } else if (last === 'y' && prev && !isVowel(prev)) {
      if (S.startsWith('i')) {
        if (mut.force === 'y-to-i') b = [...b.slice(0, -1), fresh('i')];
        else changes.push({ rule: 'keep-y', note: 'y + i…' });
      } else if (on('y-to-i')) {
        b = [...b.slice(0, -1), fresh('i')];
        changes.push({ rule: 'y-to-i', note: 'y → i' });
      }
      endChanged = true;
    } else if (last === 'e') {
      endChanged = true;
      if (S.startsWith('e')) {
        if (on('merge-e')) {
          b = b.slice(0, -1);
          changes.push({ rule: 'merge-e', note: 'e + e…' });
        }
      } else if (/(ee|oe|ye)$/.test(w) && vS) {
        changes.push({ rule: 'keep-e-ee', note: `-${w.slice(-2)}` });
      } else if (/[cg]e$/.test(w) && /^[ao]/.test(S)) {
        if (on('keep-e-soft')) changes.push({ rule: 'keep-e-soft', note: `-${w.slice(-2)} + ${S[0]}` });
        else b = b.slice(0, -1);
      } else if (vS) {
        if (on('drop-e')) {
          b = b.slice(0, -1);
          changes.push({ rule: 'drop-e', note: '-e' });
        }
      } else if (mut.force === 'drop-e') {
        b = b.slice(0, -1);
      } else {
        changes.push({ rule: 'keep-e', note: `-e + ${S[0]}` });
      }
    }

    // Doubling looks at the ORIGINAL base: write → writ-ing must not double (the e dropped, the vowel is long).
    const lastNow = b[b.length - 1];
    if (vS && cvc && !endChanged) {
      const syl = syllables(w);
      if (syl > 1 && !step.stress) throw new Error(`wordFormation: "${w}" + -${S} needs a stress fact`);
      const stressed = syl === 1 || step.stress === 'final';
      if (stressed) {
        if (on('double')) {
          b = [...b, fresh(lastNow.ch)];
          changes.push({ rule: 'double', note: `${lastNow.ch} → ${lastNow.ch}${lastNow.ch}` });
        }
      } else {
        changes.push({ rule: 'no-double', note: `${lastNow.ch}` });
        if (lastNow.ch === 'l' && variant === 'bre') {
          b = [...b, fresh('l')];
          changes.push({ rule: 'l-bre', note: 'l → ll' });
        } else if (mut.force === 'double') {
          b = [...b, fresh(lastNow.ch)];
        }
      }
    } else if (mut.force === 'double' && vS && endsCVC(strOf(b))) {
      b = [...b, fresh(b[b.length - 1].ch)];
    }
  }

  if (b[b.length - 1].ch === sfx[0].ch) {
    if (on('seam')) changes.push({ rule: 'seam', note: `${sfx[0].ch}${sfx[0].ch}` });
    else sfx = sfx.slice(1);
  }
  if (changes.length === 0) changes.push({ rule: 'join' });
  const affixKeys = new Set(sfx.map((l) => l.k));
  const parts = [...base, { k: `seam.${i}`, ch: SEAM }, ...raw];
  return { parts, after: [...b, ...sfx], changes, spell, affixKeys };
}

/** Assemble a word step by step. `mut` models a misspelling (trap diagnosis); `variant` picks AmE / BrE. */
export function build(
  src: { root: string; rootFacts?: RootFacts; steps: readonly WfStep[] },
  variant: Variant = 'ame',
  mut: Mutation = {},
): Built {
  const variantChanges: Change[] = [];
  let root: Letter[] = [...src.root].map((ch, j) => ({ k: `r.${j}`, ch }));
  const suffixes = src.steps.map((s) => s.suffix).filter((s): s is string => !!s);
  if (src.rootFacts?.our) {
    if (!src.root.endsWith('or')) throw new Error(`wordFormation: our-root "${src.root}" must end in -or`);
    if (variant === 'bre') {
      if (suffixes.some((s) => OUR_BLOCKERS.has(s))) variantChanges.push({ rule: 'our-bre', note: 'or' });
      else {
        root = [...root.slice(0, -1), { k: 'r.u', ch: 'u' }, root[root.length - 1]];
        variantChanges.push({ rule: 'our-bre', note: 'our' });
      }
    }
  }
  // Keys of a z that belongs to the suffix -ize (BrE may write s).
  const izeKeys = new Set<string>();
  if (src.rootFacts?.ize) {
    if (!src.root.endsWith('ize')) throw new Error(`wordFormation: ize-root "${src.root}" must end in -ize`);
    izeKeys.add(`r.${src.root.length - 2}`);
  }
  let cur = root;
  const steps: StepResult[] = [];
  src.steps.forEach((step, i) => {
    if (!!step.prefix === !!step.suffix) throw new Error('wordFormation: a step adds exactly one affix');
    const r = step.prefix ? attachPrefix(cur, step.prefix, i, mut) : attachSuffix(cur, step, step.suffix!, i, variant, mut);
    if (step.suffix === 'ize') izeKeys.add(`s${i}.1`);
    cur = r.after;
    steps.push({ step, parts: r.parts, after: r.after, word: strOf(r.after), changes: r.changes, affixKeys: r.affixKeys, spellKeys: r.spell });
  });
  if (variant === 'bre' && izeKeys.size > 0) {
    const swap = (ls: Letter[]) => ls.map((l) => (izeKeys.has(l.k) && l.ch === 'z' ? { k: `${l.k}s`, ch: 's' } : l));
    const before = strOf(cur);
    cur = swap(cur);
    for (const s of steps) {
      s.after = swap(s.after);
      s.word = strOf(s.after);
    }
    if (strOf(cur) !== before) variantChanges.push({ rule: 'ise-bre', note: '-ize → -ise' });
  }
  return { root, steps, word: strOf(cur), variantChanges };
}

/** The word after each step (AmE unless `variant`). */
export const formsOf = (src: Parameters<typeof build>[0], variant: Variant = 'ame') => build(src, variant).steps.map((s) => s.word);

// ── tokens ────────────────────────────────────────────────────────────────────────────────────────

/** Letters → TokenMorph tokens (render them with `joined`). Roles: affix · seam · spell. */
export function lettersToTokens(ls: readonly Letter[], affix: ReadonlySet<string> = new Set(), spell: ReadonlySet<string> = new Set()): MorphToken[] {
  return ls.map((l) => ({
    k: l.k,
    w: l.ch,
    glue: false,
    ...(l.ch === SEAM ? { role: 'seam' as const } : spell.has(l.k) ? { role: 'spell' as const } : affix.has(l.k) ? { role: 'affix' as const } : {}),
  }));
}

export type Frame = { tokens: MorphToken[]; label: Localized; word: string; uk: string };
const cache = new Map<string, Frame[]>();

/** Short chip label of a step's weld: the first letter-changing rule, or "join". */
export function weldLabel(changes: readonly Change[]): Localized {
  const quiet = new Set<RuleId>(['join', 'seam', 'keep-e', 'no-double', 'keep-y']);
  const main = changes.find((c) => !quiet.has(c.rule)) ?? changes[0];
  if (quiet.has(main.rule)) return changes.some((c) => c.rule === 'seam') ? RULE_SHORT.seam : RULE_SHORT[main.rule];
  const noted = main.rule === 'assimilate' || main.rule === 'stem' || main.rule === 'double';
  return noted && main.note ? { en: main.note, uk: main.note } : RULE_SHORT[main.rule];
}
const affixLabel = (s: WfStep): Localized => {
  const a = s.prefix ? `${s.prefix}- +` : `+ -${s.suffix}`;
  return { en: a, uk: a };
};

/** The frames of a build: the root, then per step parts → weld. Referentially stable (cached). */
export function framesOf(id: string, src: Parameters<typeof build>[0], uk: readonly string[]): Frame[] {
  const hit = cache.get(id);
  if (hit) return hit;
  const b = build(src);
  const frames: Frame[] = [{ tokens: lettersToTokens(b.root), label: { en: src.root, uk: src.root }, word: src.root, uk: uk[0] ?? '' }];
  b.steps.forEach((s, i) => {
    const rawAffix = new Set(s.parts.filter((l) => l.k.startsWith(s.step.prefix ? `p${i}.` : `s${i}.`)).map((l) => l.k));
    frames.push({ tokens: lettersToTokens(s.parts, rawAffix), label: affixLabel(s.step), word: strOf(s.parts), uk: uk[i] ?? '' });
    frames.push({ tokens: lettersToTokens(s.after, s.affixKeys, s.spellKeys), label: weldLabel(s.changes), word: s.word, uk: uk[i + 1] ?? '' });
  });
  cache.set(id, frames);
  return frames;
}

/** The step a frame belongs to (frame 0 = the root → -1). */
export const stepOfFrame = (f: number) => (f === 0 ? -1 : Math.floor((f - 1) / 2));

/** Align a misspelling with the correct letters (LCS): shared letters keep the correct keys. */
export function alignTokens(wrong: string, right: readonly Letter[]): { wrong: MorphToken[]; right: MorphToken[] } {
  const r = right.map((l) => l.ch);
  const m = wrong.length;
  const n = r.length;
  const L: number[][] = Array.from({ length: m + 1 }, () => new Array<number>(n + 1).fill(0));
  for (let a = m - 1; a >= 0; a--)
    for (let c = n - 1; c >= 0; c--) L[a][c] = wrong[a] === r[c] ? L[a + 1][c + 1] + 1 : Math.max(L[a + 1][c], L[a][c + 1]);
  const keys: string[] = [];
  const matched = new Set<string>();
  let a = 0;
  let c = 0;
  while (a < m) {
    if (c < n && wrong[a] === r[c]) {
      keys.push(right[c].k);
      matched.add(right[c].k);
      a++;
      c++;
    } else if (c < n && L[a][c + 1] >= L[a + 1][c]) c++;
    else {
      keys.push(`w.${a}`);
      a++;
    }
  }
  const bad = new Set(keys.filter((k) => k.startsWith('w.')));
  const fixed = new Set(right.filter((l) => !matched.has(l.k)).map((l) => l.k));
  return {
    wrong: [...wrong].map((ch, j) => ({ k: keys[j], w: ch, glue: false, ...(bad.has(keys[j]) ? { role: 'spell' as const } : {}) })),
    right: right.map((l) => ({ k: l.k, w: l.ch, glue: false, ...(fixed.has(l.k) ? { role: 'spell' as const } : {}) })),
  };
}

// ── trap diagnosis ────────────────────────────────────────────────────────────────────────────────

/** Every single-change misspelling model that turns the correct derivation into `wrong`. */
export function diagnose(t: Pick<WfTrap, 'wrong' | 'root' | 'rootFacts' | 'steps'>): DiagId[] {
  const out: DiagId[] = [];
  const tryMut = (mut: Mutation, id: DiagId) => {
    try {
      if (build(t, 'ame', mut).word === t.wrong) out.push(id);
    } catch {
      /* a model that does not apply */
    }
  };
  for (const r of OFFABLE) tryMut({ off: r }, `off:${r}`);
  for (const f of FORCES) tryMut({ force: f }, `force:${f}`);
  const pre = t.steps.find((s) => s.prefix)?.prefix;
  if (pre) for (const p of NEGATIVE_PREFIXES) if (p !== pre) tryMut({ prefix: p }, 'prefix');
  for (const s of t.steps) if (s.suffix && MISSPELT_SUFFIX[s.suffix]) tryMut({ suffix: MISSPELT_SUFFIX[s.suffix] }, 'suffix');
  return [...new Set(out)];
}

// ── labels ────────────────────────────────────────────────────────────────────────────────────────

export const RULE_SHORT: Record<RuleId, Localized> = {
  join: { en: 'just join', uk: 'просто злипаються' },
  assimilate: { en: 'in- assimilates', uk: 'in- уподібнюється' },
  seam: { en: 'both letters stay', uk: 'обидві літери лишаються' },
  stem: { en: 'lexical stem', uk: 'лексична основа' },
  'drop-e': { en: 'drop the e', uk: 'e зникає' },
  'merge-e': { en: 'e + e → e', uk: 'e + e → e' },
  'keep-e': { en: 'keep the e', uk: 'e лишається' },
  'keep-e-soft': { en: 'soft c / g keeps e', uk: 'мʼякі c / g тримають e' },
  'keep-e-ee': { en: 'ee keeps e', uk: 'ee тримає e' },
  'y-to-i': { en: 'y → i', uk: 'y → i' },
  'keep-y': { en: 'y stays before i', uk: 'y перед i лишається' },
  'ie-to-y': { en: 'ie → y', uk: 'ie → y' },
  double: { en: 'double', uk: 'подвоєння' },
  'no-double': { en: 'no doubling', uk: 'без подвоєння' },
  'l-bre': { en: 'BrE doubles l', uk: 'BrE подвоює l' },
  'le-ly': { en: '-le + -ly → -ly', uk: '-le + -ly → -ly' },
  'ble-bil': { en: '-ble → -bil-', uk: '-ble → -bil-' },
  'ise-bre': { en: 'BrE -ise', uk: 'BrE -ise' },
  'our-bre': { en: 'BrE -our', uk: 'BrE -our' },
};

export const RULE_TEXT: Record<RuleId, Localized> = {
  join: {
    en: 'Nothing changes at the seam — the letters simply join (un- and most suffixes after a consonant).',
    uk: 'На шві нічого не змінюється — літери просто злипаються (un- і більшість суфіксів після приголосної).',
  },
  assimilate: {
    en: 'in- takes the shape of the next sound: il- before l, im- before b / m / p, ir- before r. Elsewhere it stays in-. un- never changes.',
    uk: 'in- підлаштовується під наступний звук: il- перед l, im- перед b / m / p, ir- перед r. Решта — in-. un- не змінюється ніколи.',
  },
  seam: {
    en: 'When the affix ends with the letter the next part begins with, BOTH letters stay: un+necessary, il+legal, careful+ly.',
    uk: 'Коли афікс закінчується тією літерою, з якої починається наступна частина, лишаються ОБИДВІ: un+necessary, il+legal, careful+ly.',
  },
  stem: {
    en: 'Not a spelling rule: this word family uses a different stem before the suffix (decide → decision). Learn it with the word.',
    uk: 'Це не правило правопису: ця родина слів має іншу основу перед суфіксом (decide → decision). Вчіть разом зі словом.',
  },
  'drop-e': {
    en: 'A silent e drops before a suffix that begins with a vowel (or y): make → making, create → creative.',
    uk: 'Німе e зникає перед суфіксом, що починається з голосної (або y): make → making, create → creative.',
  },
  'merge-e': {
    en: 'A suffix that begins with e absorbs the final e: hope → hoped, agree → agreed.',
    uk: 'Суфікс, що починається з e, поглинає кінцеве e: hope → hoped, agree → agreed.',
  },
  'keep-e': {
    en: 'Before a suffix that begins with a consonant the silent e stays: hope → hopeful, manage → management.',
    uk: 'Перед суфіксом, що починається з приголосної, німе e лишається: hope → hopeful, manage → management.',
  },
  'keep-e-soft': {
    en: 'After c or g the e stays before a or o, so the sound stays soft: noticeable, manageable, courageous.',
    uk: 'Після c чи g літера e лишається перед a або o, щоб звук лишився мʼяким: noticeable, manageable, courageous.',
  },
  'keep-e-ee': {
    en: 'ee, oe and ye keep their e before a vowel suffix: agreeable, seeing.',
    uk: 'ee, oe і ye тримають своє e перед голосним суфіксом: agreeable, seeing.',
  },
  'y-to-i': {
    en: 'After a consonant, y turns into i before a suffix: happy → happiness, rely → reliable.',
    uk: 'Після приголосної y стає i перед суфіксом: happy → happiness, rely → reliable.',
  },
  'keep-y': {
    en: 'Before a suffix that begins with i, the y stays (no "ii"): study → studying.',
    uk: 'Перед суфіксом, що починається з i, y лишається (жодного «ii»): study → studying.',
  },
  'ie-to-y': {
    en: 'ie becomes y before -ing: lie → lying, die → dying.',
    uk: 'ie стає y перед -ing: lie → lying, die → dying.',
  },
  double: {
    en: 'One vowel + one consonant at the end of a STRESSED syllable: the consonant doubles before a vowel suffix (stop → stopping, begin → beginning).',
    uk: 'Одна голосна + одна приголосна в кінці НАГОЛОШЕНОГО складу: приголосна подвоюється перед голосним суфіксом (stop → stopping, begin → beginning).',
  },
  'no-double': {
    en: 'The last syllable is not stressed, so the consonant stays single: visit → visiting, open → opened.',
    uk: 'Останній склад ненаголошений, тож приголосна лишається одна: visit → visiting, open → opened.',
  },
  'l-bre': {
    en: 'British English doubles a final l even in an unstressed syllable: travelled, cancelled, modelling.',
    uk: 'Британська англійська подвоює кінцеве l навіть у ненаголошеному складі: travelled, cancelled, modelling.',
  },
  'le-ly': {
    en: 'An adjective in consonant + -le makes its adverb by changing -le to -ly: possible → possibly, simple → simply.',
    uk: 'Прикметник на приголосна + -le утворює прислівник заміною -le на -ly: possible → possibly, simple → simply.',
  },
  'ble-bil': {
    en: '-ble becomes -bil- before -ity: possible → possibility, reliable → reliability.',
    uk: '-ble стає -bil- перед -ity: possible → possibility, reliable → reliability.',
  },
  'ise-bre': {
    en: 'British English often writes -ise (organisation); -ize is also correct in BrE (the Oxford spelling), so this is a choice, not an error.',
    uk: 'Британська англійська часто пише -ise (organisation); -ize у BrE теж правильне (оксфордський правопис), тож це вибір, а не помилка.',
  },
  'our-bre': {
    en: 'British English writes -our (colour, colourful), but drops the u before -ous and -ary: humorous, honorary.',
    uk: 'Британська англійська пише -our (colour, colourful), але втрачає u перед -ous і -ary: humorous, honorary.',
  },
};

export const POS_LABEL: Record<Pos, Localized> = {
  verb: { en: 'verb', uk: 'дієслово' },
  noun: { en: 'noun', uk: 'іменник' },
  person: { en: 'person', uk: 'особа' },
  adjective: { en: 'adjective', uk: 'прикметник' },
  adverb: { en: 'adverb', uk: 'прислівник' },
  opposite: { en: 'opposite', uk: 'антонім' },
};
export const GROUP_LABEL: Record<WfGroup, Localized> = {
  prefix: { en: 'Negative prefixes', uk: 'Заперечні префікси' },
  suffix: { en: 'Suffixes at the seam', uk: 'Суфікси на шві' },
  variant: { en: 'AmE vs BrE spelling', uk: 'Правопис AmE vs BrE' },
};

/** The diagnosis in words, computed for this trap (which letters, which rule). */
export function diagText(d: DiagId, t: WfTrap): Localized {
  if (d === 'prefix') {
    const p = t.steps.find((s) => s.prefix)?.prefix ?? '';
    return {
      en: `Wrong prefix: this word takes ${p}- (a fact of the lexicon, not a rule) — and then the spelling rules apply.`,
      uk: `Не той префікс: це слово бере ${p}- (факт лексики, а не правило) — а далі діють правила правопису.`,
    };
  }
  if (d === 'suffix') {
    const s = t.steps.find((x) => x.suffix && MISSPELT_SUFFIX[x.suffix])?.suffix ?? '';
    return {
      en: `The suffix is spelled -${s}, not -${MISSPELT_SUFFIX[s]}.`,
      uk: `Суфікс пишеться -${s}, а не -${MISSPELT_SUFFIX[s]}.`,
    };
  }
  const [kind, rule] = d.split(':') as ['off' | 'force', string];
  if (kind === 'off') {
    const r = rule as RuleId;
    return { en: `Missed rule — ${RULE_SHORT[r].en}: ${RULE_TEXT[r].en}`, uk: `Пропущене правило — ${RULE_SHORT[r].uk}: ${RULE_TEXT[r].uk}` };
  }
  const forced: Record<Force, Localized> = {
    double: {
      en: 'Doubled where it must not: only a STRESSED final syllable with one short vowel + one consonant doubles.',
      uk: 'Подвоєно там, де не можна: подвоюється лише НАГОЛОШЕНИЙ кінцевий склад з однією короткою голосною + однією приголосною.',
    },
    'y-to-i': {
      en: 'y → i applied before i: English avoids “ii”, so y stays before -ing.',
      uk: 'y → i застосовано перед i: англійська уникає «ii», тож перед -ing y лишається.',
    },
    'drop-e': {
      en: 'The e was dropped before a consonant suffix — it stays there.',
      uk: 'e викинуто перед приголосним суфіксом — там воно лишається.',
    },
  };
  return forced[rule as Force];
}

// ── data access ───────────────────────────────────────────────────────────────────────────────────

export const listBuilds = (): readonly WfBuild[] => WF_BUILDS;
export const buildsOf = (g: WfGroup): WfBuild[] => WF_BUILDS.filter((b) => b.group === g);
export const listFamilies = (): readonly WfFamily[] => WF_FAMILIES;
export const listTraps = (): readonly WfTrap[] => WF_TRAPS;
