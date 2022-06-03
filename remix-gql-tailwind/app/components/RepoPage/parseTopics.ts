type TopicNodes =
  | (
      | {
          __typename?: 'RepositoryTopic' | undefined;
          id: string;
          topic: {
            __typename?: 'Topic' | undefined;
            name: string;
          };
        }
      | null
      | undefined
    )[]
  | null
  | undefined;

export function parseTopics(topics: TopicNodes): string[] {
  if (!topics) {
    return [];
  }

  return topics.reduce((acc: string[], topic) => {
    if (topic?.topic) {
      acc.push(topic.topic.name);
    }
    return acc;
  }, []);
}
