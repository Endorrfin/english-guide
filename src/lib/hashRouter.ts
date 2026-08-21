// CHANGED (S1): tiny hash router (no router lib — CLAUDE.md §2), ported pattern from ../database guide.
// Routes: #/map · #/m/<moduleId>[/<topicId>] · #/definitions[/<id>] · #/dictionary[/<id>] · #/practice
//         · #/idioms · #/collocations (V12)
//         · #/review · #/irregular
// CHANGED (D1): + #/definitions[/<id>] — the word STUDY page (front door for words; see search.ts).
// CHANGED (TM1+TM2): + #/tenses[/<time>/<aspect>] — ★ The Tense Machine. The hash may carry a
// share-URL query segment (#/tenses/present/perfect?v=write&s=she&p=neg) — parseHash strips it
// for ALL routes (the page reads it itself), the Compass-spec pattern.
// Hash routing + vite base:'./' = works under any GitHub Pages sub-path.
import { useEffect, useState } from 'react';
import type { Aspect, TenseTime } from './tenses';

// CHANGED (TM1+TM2): local literals instead of importing TENSE_TIMES/ASPECTS — the router is in
// the EAGER shell, and a runtime import of lib/tenses would drag the whole tense SSOT (matrix
// data included) into it. Types above are type-only (erased); these two arrays are the price of
// keeping the eager graph clean (check:bundle discipline, M1/M2).
const TENSE_TIME_IDS: readonly TenseTime[] = ['past', 'present', 'future'];
const ASPECT_IDS: readonly Aspect[] = ['simple', 'continuous', 'perfect', 'perfect-continuous'];

export type Route =
  | { name: 'map' }
  // CHANGED (TM1+TM2): ★ The Tense Machine — optional deep-link cell coordinates.
  | { name: 'tenses'; time?: TenseTime; aspect?: Aspect }
  | { name: 'module'; moduleId: string; topicId?: string }
  | { name: 'definitions'; id?: string } // CHANGED (D1)
  | { name: 'dictionary'; id?: string }
  | { name: 'idioms'; id?: string } // CHANGED (V1): the Words-hub Idioms tab
  // CHANGED (V12): the Words-hub Collocations tab — its own route, dataset and lazy chunk.
  | { name: 'collocations'; id?: string }
  | { name: 'practice' }
  | { name: 'review' }
  | { name: 'irregular' }
  // CHANGED (S3): Reading section — #/reading (accordion index) · #/reading/<id> (reader).
  | { name: 'reading' }
  | { name: 'reading-text'; id: string };

export function parseHash(raw: string): Route {
  // CHANGED (TM1+TM2): strip a query segment before splitting — routes stay clean while pages
  // (today: #/tenses) read their own share-params from the hash.
  const hash = raw.replace(/^#/, '').split('?')[0].replace(/^\/+/, '');
  const parts = hash.split('/').filter(Boolean);
  if (parts.length === 0) return { name: 'map' };
  switch (parts[0]) {
    case 'map':
      return { name: 'map' };
    // CHANGED (TM1+TM2): ★ The Tense Machine — invalid coordinates fall back to undefined
    // (the page then keeps its own state / defaults) instead of 404-ing to the map.
    case 'tenses': {
      const time = TENSE_TIME_IDS.find((v) => v === parts[1]);
      const aspect = ASPECT_IDS.find((v) => v === parts[2]);
      return { name: 'tenses', time, aspect };
    }
    case 'definitions': // CHANGED (D1)
      return { name: 'definitions', id: parts[1] ? safeDecode(parts[1]) : undefined };
    case 'dictionary':
      return { name: 'dictionary', id: parts[1] ? safeDecode(parts[1]) : undefined };
    case 'idioms': // CHANGED (V1)
      return { name: 'idioms', id: parts[1] ? safeDecode(parts[1]) : undefined };
    case 'collocations': // CHANGED (V12)
      return { name: 'collocations', id: parts[1] ? safeDecode(parts[1]) : undefined };
    case 'practice':
      return { name: 'practice' };
    case 'review':
      return { name: 'review' };
    case 'irregular':
      return { name: 'irregular' };
    case 'reading':
      return parts[1] ? { name: 'reading-text', id: safeDecode(parts[1]) } : { name: 'reading' };
    case 'm':
      if (parts[1]) return { name: 'module', moduleId: parts[1], topicId: parts[2] };
      return { name: 'map' };
    default:
      return { name: 'map' };
  }
}

function safeDecode(s: string): string {
  try {
    return decodeURIComponent(s);
  } catch {
    return s;
  }
}

export const hrefMap = () => '#/map';
// CHANGED (TM1+TM2): ★ The Tense Machine.
export const hrefTenses = (time?: TenseTime, aspect?: Aspect) =>
  time && aspect ? `#/tenses/${time}/${aspect}` : '#/tenses';
export const hrefModule = (moduleId: string, topicId?: string) =>
  topicId ? `#/m/${moduleId}/${topicId}` : `#/m/${moduleId}`;
export const hrefDefinitions = (id?: string) => // CHANGED (D1)
  id ? `#/definitions/${encodeURIComponent(id)}` : '#/definitions';
export const hrefDictionary = (id?: string) =>
  id ? `#/dictionary/${encodeURIComponent(id)}` : '#/dictionary';
export const hrefIdioms = (id?: string) => // CHANGED (V1)
  id ? `#/idioms/${encodeURIComponent(id)}` : '#/idioms';
export const hrefCollocations = (id?: string) => // CHANGED (V12)
  id ? `#/collocations/${encodeURIComponent(id)}` : '#/collocations';
export const hrefPractice = () => '#/practice';
export const hrefReview = () => '#/review';
export const hrefIrregular = () => '#/irregular';
export const hrefReading = () => '#/reading';
export const hrefReadingText = (id: string) => `#/reading/${encodeURIComponent(id)}`;

// CHANGED (V1): the three tabs of the Words hub — lets TopBar/Sidebar light one nav entry for all.
export function isWordsRoute(name: Route['name']): boolean {
  // CHANGED (V2): Irregular verbs is now a Words-hub tab too.
  // CHANGED (V12): + Collocations (five tabs).
  return (
    name === 'dictionary' ||
    name === 'definitions' ||
    name === 'idioms' ||
    name === 'collocations' ||
    name === 'irregular'
  );
}

export function navigate(href: string): void {
  window.location.hash = href.replace(/^#/, '');
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parseHash(window.location.hash));
  useEffect(() => {
    const onChange = () => setRoute(parseHash(window.location.hash));
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return route;
}
