import { component$ } from '@builder.io/qwik';
import * as styles from '../repo-about.className';

interface TopicsProps {
  topics?: string[];
}

export const Topics = component$(({ topics }: TopicsProps) => {
  if (!topics) {
    return null;
  }
  return (
    <div className="space-y-1">
      {topics.map((topic) => (
        <span key={topic} className={styles.topic}>
          {topic}
        </span>
      ))}
    </div>
  );
});
