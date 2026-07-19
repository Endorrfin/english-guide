// CHANGED (S1): tiny hash router (no router lib — CLAUDE.md §2), ported pattern from ../database guide.
// Routes: #/map · #/m/<moduleId>[/<topicId>] · #/dictionary[/<id>] · #/practice · #/review · #/irregular
// Hash routing + vite base:'./' = works under any GitHub Pages sub-path.
import { useEffect, useState } from 'react';

export type Route =
  | { name: 'map' }
  | { name: 'module'; moduleId: string; topicId?: string }
  | { name: 'dictionary'; id?: string }
  | { name: 'practice' }
  | { name: 'review' }
  | { name: 'irregular' }
  // CHANGED (S3): Reading section — #/reading (accordion index) · #/reading/<id> (reader).
  | { name: 'reading' }
  | { name: 'reading-text'; id: string };

export function parseHash(raw: string): Route {
  const hash = raw.replace(/^#/, '').replace(/^\/+/, '');
  const parts = hash.split('/').filter(Boolean);
  if (parts.length === 0) return { name: 'map' };
  switch (parts[0]) {
    case 'map':
      return { name: 'map' };
    case 'dictionary':
      return { name: 'dictionary', id: parts[1] ? safeDecode(parts[1]) : undefined };
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
export const hrefModule = (moduleId: string, topicId?: string) =>
  topicId ? `#/m/${moduleId}/${topicId}` : `#/m/${moduleId}`;
export const hrefDictionary = (id?: string) =>
  id ? `#/dictionary/${encodeURIComponent(id)}` : '#/dictionary';
export const hrefPractice = () => '#/practice';
export const hrefReview = () => '#/review';
export const hrefIrregular = () => '#/irregular';
export const hrefReading = () => '#/reading';
export const hrefReadingText = (id: string) => `#/reading/${encodeURIComponent(id)}`;

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
