// CHANGED (T2): the Past zone of the parametric TenseTimeline figure — Past Simple ● (one finished
// event) vs Past Continuous 〜 (the background process a shorter event interrupts, when / while).
// Registry key 'timeline-past' (m8). One export per file keeps smoke's files===keys invariant;
// the parametric core lives in ../tense/TenseTimeline (outside the scanned figures/ dir).
import { TenseTimeline } from '../tense/TenseTimeline';

export function TenseTimelinePast() {
  return <TenseTimeline zone="past" />;
}
