// src/data/concepts.ts — the SSOT thin aggregator (standard §4.4).
//
// CHANGED (M2 — the module meta-split): this file used to import all 12 authored module files, which
// put every topic body, exercise, pitfall and source into the EAGER entry chunk (it is imported by
// TopBar, Sidebar, Footer, the landing map and global search). Measured cost at 12/34 authored:
// 450 kB of content the shell never reads, against 19 kB of nav meta it actually uses — and it would
// have tripled as the remaining 22 modules got authored.
//
// Now: `sections` stays hand-written here (tiny, and display order matters), module NAV META comes
// from the generated `meta.generated.ts`, and a module BODY is fetched one lazy chunk at a time via
// `loadModule()`. The full eager list still exists for Node — `data/modules/all.ts` — as the
// generator's input; application code must never import it (`npm run check:bundle` enforces that).
import type { Level, Module, Section } from './types';
import { MODULE_COUNTS, MODULE_META } from './meta.generated';
import type { ModuleMeta } from './meta.generated';
import { moduleLoaders } from './moduleLoaders.generated';
// CHANGED (M1): the SLIM generated count, not the corpus — see words/index.generated.ts for why.
import { WORD_COUNTS } from './words/index.generated';

export type { ModuleMeta, TopicMeta } from './meta.generated';

export const LEVELS: readonly Level[] = ['a1', 'a2', 'b1', 'b2', 'c1'];

// CHANGED (T1): the S5 TIMES restructure — ALL tenses consolidated into the new Section II
// (`s6-tenses`, roman II). Romans are display-only and shift downstream (Core III · Modals IV ·
// Advanced V · Vocab VI · Reading VII on the map); section IDS never change. Array order = display
// order on the map and in the sidebar.
export const sections: Section[] = [
  { id: 's1-foundations', roman: 'I', title: { en: 'Foundations', uk: 'Основи' }, accent: 'var(--sec-foundations)' },
  { id: 's6-tenses', roman: 'II', title: { en: 'Tenses ★', uk: 'Tenses ★' }, accent: 'var(--sec-tenses)' },
  { id: 's2-core-grammar', roman: 'III', title: { en: 'Core Grammar', uk: 'Ядро граматики' }, accent: 'var(--sec-core)' },
  { id: 's3-modal-verbs', roman: 'IV', title: { en: 'Modal Verbs ★', uk: 'Modal Verbs ★' }, accent: 'var(--sec-modals)' },
  { id: 's4-advanced-grammar', roman: 'V', title: { en: 'Advanced Grammar', uk: 'Поглиблена граматика' }, accent: 'var(--sec-advanced)' },
  { id: 's5-vocabulary-in-action', roman: 'VI', title: { en: 'Vocabulary in Action', uk: 'Лексика в дії' }, accent: 'var(--sec-vocab)' },
];

/**
 * All 34 modules as NAV META (no bodies): everything the sidebar, landing map, global search and a
 * module header/TOC need. For a module's content, use `loadModule(id)`.
 */
export const modules: readonly ModuleMeta[] = MODULE_META;

/** Canonical alias the SSR smoke consumes (template smoke.ts contract). */
export const MODULES: readonly ModuleMeta[] = modules;

const moduleById = new Map(modules.map((m) => [m.id, m]));
const sectionById = new Map(sections.map((s) => [s.id, s]));

export function getModule(id: string): ModuleMeta | undefined {
  return moduleById.get(id);
}

export function getSection(id: string): Section | undefined {
  return sectionById.get(id);
}

/** A module counts as AUTHORED when it has topics; stubs render their header + a ComingSoon card. */
export function isAuthored(id: string): boolean {
  return moduleById.get(id)?.authored ?? false;
}

export function modulesBySection(sectionId: string): ModuleMeta[] {
  return modules.filter((m) => m.section === sectionId).sort((a, b) => a.order - b.order);
}

/** Prev/next by global num — powers the module page footer navigation. */
export function adjacentModules(id: string): { prev?: ModuleMeta; next?: ModuleMeta } {
  const m = moduleById.get(id);
  if (!m) return {};
  const sorted = [...modules].sort((a, b) => a.num - b.num);
  const i = sorted.findIndex((x) => x.id === id);
  return { prev: sorted[i - 1], next: sorted[i + 1] };
}

const bodyCache = new Map<string, Promise<Module | undefined>>();

/**
 * CHANGED (M2): fetch one module BODY from its own lazy chunk.
 * Resolves to undefined for a stub (nothing authored yet) or an unknown id — both of which the
 * module page already renders as ComingSoon, so even a failed chunk fetch degrades to the stub view
 * instead of crashing the route. Memoized, so navigating back to a module does not re-fetch it.
 */
export function loadModule(id: string): Promise<Module | undefined> {
  const cached = bodyCache.get(id);
  if (cached) return cached;
  const loader = moduleLoaders[id];
  if (!loader) return Promise.resolve(undefined);
  const p = loader().catch(() => undefined);
  bodyCache.set(id, p);
  return p;
}

export const COUNTS = {
  sections: sections.length,
  modules: MODULE_COUNTS.total,
  authoredModules: MODULE_COUNTS.authored,
  words: WORD_COUNTS.total, // CHANGED (M1): from the generated index — see the import note above
} as const;
