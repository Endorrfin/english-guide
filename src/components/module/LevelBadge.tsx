// CHANGED (S1): CEFR level badge (A1…C1 ramp — the label is the CEFR code, same in both langs).
import type { Level } from '../../data/types';

export function LevelBadge({ level }: { level: Level }) {
  return (
    <span className="chip badge-level" data-level={level}>
      {level.toUpperCase()}
    </span>
  );
}
