// CHANGED (S1): global app state contract (ported pattern from ../database guide; theme system
// deferred — dark editorial is the S1 brand default, a light theme is a later polish session).
import { createContext, useContext } from 'react';
import type { Level } from '../data/types';

export type LevelFilter = Level | 'all';

export const KNOWN_KEY = 'englishguide.known';

export type AppStateValue = {
  levelFilter: LevelFilter;
  setLevelFilter: (l: LevelFilter) => void;
  isKnown: (id: string) => boolean;
  toggleKnown: (id: string) => void;
  sidebarOpen: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
};

export const AppStateCtx = createContext<AppStateValue | null>(null);

export function useAppState(): AppStateValue {
  const ctx = useContext(AppStateCtx);
  if (!ctx) throw new Error('useAppState must be used within <AppStateProvider>');
  return ctx;
}
