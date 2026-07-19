// CHANGED (T3): the Future zone of the parametric TenseTimeline figure — ● will / going to (a whole
// future event) vs 〜 Future Continuous (a process running at a chosen future moment). NOW sits on
// the left; everything is still to come. Registry key 'timeline-future' (m9). One export per file
// keeps smoke's files===keys invariant; the parametric core lives in ../tense/TenseTimeline.
import { TenseTimeline } from '../tense/TenseTimeline';

export function TenseTimelineFuture() {
  return <TenseTimeline zone="future" />;
}
