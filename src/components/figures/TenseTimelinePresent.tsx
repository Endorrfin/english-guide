// CHANGED (T2): the Present zone of the parametric TenseTimeline figure — Present Simple ● (habit /
// general truth, spread across the line) vs Present Continuous 〜 (a process wrapped around NOW).
// Registry key 'timeline-present' (m7). One export per file keeps smoke's files===keys invariant;
// the parametric core lives in ../tense/TenseTimeline (outside the scanned figures/ dir).
import { TenseTimeline } from '../tense/TenseTimeline';

export function TenseTimelinePresent() {
  return <TenseTimeline zone="present" />;
}
