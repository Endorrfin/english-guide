// CHANGED (T1): persisted dive-depth state for the DiveSwitcher (S5 mechanic, CLAUDE.md §2).
// One global reading depth (2 🚂 core · 3 🚶 full · 4 🔬 deep), remembered in localStorage —
// spiral learning means re-walking the SECTION at the next depth, so the setting is app-wide,
// not per-module. Default 🚂 (2): the 15-minute backbone pass.
import { useCallback, useState } from 'react';
import type { Block, DiveLevel } from '../data/types';

export const DIVE_KEY = 'englishguide.dive';

/** Generic trigger: any module whose blocks carry dive tags gets the DiveSwitcher. */
export function moduleHasDive(blocks: Block[]): boolean {
  return blocks.some((b) => b.dive !== undefined);
}

export function loadDive(): DiveLevel {
  try {
    const raw = localStorage.getItem(DIVE_KEY);
    if (raw === '3' || raw === '4') return Number(raw) as DiveLevel;
  } catch {
    /* ignore */
  }
  return 2;
}

export function useDive(): { dive: DiveLevel; setDive: (d: DiveLevel) => void } {
  const [dive, setDiveState] = useState<DiveLevel>(loadDive);
  const setDive = useCallback((d: DiveLevel) => {
    setDiveState(d);
    try {
      localStorage.setItem(DIVE_KEY, String(d));
    } catch {
      /* ignore persistence failures */
    }
  }, []);
  return { dive, setDive };
}
