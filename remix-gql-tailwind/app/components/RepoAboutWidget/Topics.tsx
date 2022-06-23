import * as styles from "./RepoAboutWidget.classNames";

interface TopicsProps {
  topics?: string[];
}

function Topics({ topics }: TopicsProps) {
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
}

export default Topics;
