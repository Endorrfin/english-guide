// CHANGED (S1): global search over modules AND dictionary words (CURRICULUM §B), ported tiered
// ranking from ../database guide (whole-word > prefix > word-boundary > substring × field weights).
// S1 indexes the full word cards eagerly (W1 ≈ 150); S4's dictionary v2 swaps this to the slim
// generated index without changing this API.
import { getSection, modules } from '../data/concepts';
import { WORDS } from '../data/words';
import type { Lang, Localized } from '../data/types';

export type SearchKind = 'module' | 'topic' | 'word';

export type SearchResult = {
  kind: SearchKind;
  href: string; // ready-to-navigate hash (module/topic deep link, or #/dictionary/<id>)
  title: string; // display title in the current language (headword for words)
  context: string; // section (module) · module title (topic) · translations (word)
  score: number;
  /** [start,end) into `title` of the best token hit, for highlighting. Omitted if not in the title. */
  match?: [number, number];
};

type Field = { en: string; uk: string; weight: number };
type Entry = {
  kind: SearchKind;
  href: string;
  title: Localized;
  context: Localized;
  fields: Field[]; // the primary (highest-weight) field is fields[0]
};

// Field weights — headwords and titles beat taglines beat definitions.
const W = { title: 6, tagline: 3, mental: 2, topic: 5, word: 6, translation: 4, def: 1 } as const;

const KIND_RANK: Record<SearchKind, number> = { word: 0, module: 1, topic: 2 };

let INDEX: Entry[] | null = null;

function buildIndex(): Entry[] {
  const entries: Entry[] = [];
  for (const m of modules) {
    const section = getSection(m.section);
    const ctx: Localized = section ? section.title : { en: '', uk: '' };
    entries.push({
      kind: 'module',
      href: `#/m/${m.id}`,
      title: m.title,
      context: ctx,
      fields: [
        { en: m.title.en, uk: m.title.uk, weight: W.title },
        { en: m.tagline.en, uk: m.tagline.uk, weight: W.tagline },
        { en: m.mentalModel.en, uk: m.mentalModel.uk, weight: W.mental },
      ],
    });
    for (const topic of m.topics) {
      entries.push({
        kind: 'topic',
        href: `#/m/${m.id}/${topic.id}`,
        title: topic.title,
        context: m.title,
        fields: [{ en: topic.title.en, uk: topic.title.uk, weight: W.topic }],
      });
    }
  }
  for (const w of WORDS) {
    const translations = w.translations.join(', ');
    entries.push({
      kind: 'word',
      href: `#/dictionary/${encodeURIComponent(w.id)}`,
      title: { en: w.word, uk: w.word },
      context: { en: translations, uk: translations },
      fields: [
        { en: w.word, uk: w.word, weight: W.word },
        { en: '', uk: translations, weight: W.translation },
        { en: w.def.en, uk: w.def.uk, weight: W.def },
      ],
    });
  }
  return entries;
}

const isWordChar = (c: string): boolean => /[\p{L}\p{N}]/u.test(c);

/**
 * Tiered match of a single (lowercased) token against a (lowercased) field:
 * exact whole-field 10 · whole-word 8 · word-prefix 5 · word-suffix 2 · mid-word substring 1 · miss 0.
 */
function tier(field: string, tok: string): number {
  const idx = field.indexOf(tok);
  if (idx === -1) return 0;
  if (field === tok) return 10;
  const before = idx === 0 ? '' : field[idx - 1];
  const after = field[idx + tok.length] ?? '';
  const bBefore = idx === 0 || !isWordChar(before);
  const bAfter = after === '' || !isWordChar(after);
  if (bBefore && bAfter) return 8;
  if (bBefore) return 5;
  if (bAfter) return 2;
  return 1;
}

/** Earliest index of any token within the (current-language) title, for a single highlight span. */
function bestMatch(title: string, tokens: string[]): [number, number] | undefined {
  const lower = title.toLowerCase();
  let best: [number, number] | undefined;
  for (const tok of tokens) {
    const idx = lower.indexOf(tok);
    if (idx !== -1 && (!best || idx < best[0])) best = [idx, idx + tok.length];
  }
  return best;
}

export function search(query: string, lang: Lang, limit = 12): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  INDEX ??= buildIndex();
  const tokens = q.split(/\s+/).filter(Boolean);

  type Scored = SearchResult & { _rank: number; _len: number };
  const scored: Scored[] = [];

  for (const e of INDEX) {
    let total = 0;
    let matchedAll = true;
    for (const tok of tokens) {
      let bestTok = 0;
      for (const f of e.fields) {
        const s = Math.max(tier(f.en.toLowerCase(), tok), tier(f.uk.toLowerCase(), tok)) * f.weight;
        if (s > bestTok) bestTok = s;
      }
      if (bestTok === 0) {
        matchedAll = false;
        break;
      }
      total += bestTok;
    }
    if (!matchedAll || total === 0) continue;

    const title = e.title[lang] || e.title.en;
    scored.push({
      kind: e.kind,
      href: e.href,
      title,
      context: e.context[lang] || e.context.en,
      score: total,
      match: bestMatch(title, tokens),
      _rank: KIND_RANK[e.kind],
      _len: (e.fields[0][lang] || e.fields[0].en).length,
    });
  }

  // score desc → kind (word < module < topic) → shorter primary field (more specific) → title.
  scored.sort(
    (a, b) => b.score - a.score || a._rank - b._rank || a._len - b._len || a.title.localeCompare(b.title),
  );

  return scored.slice(0, limit).map((s) => ({
    kind: s.kind,
    href: s.href,
    title: s.title,
    context: s.context,
    score: s.score,
    match: s.match,
  }));
}

/** Test hook: drop the memoized index (content is static in production). */
export function __resetSearchIndex(): void {
  INDEX = null;
}
