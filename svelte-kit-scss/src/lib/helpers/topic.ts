import type { TopicReference } from '$lib/interfaces';

export const remapTopicReference = (topic: string): TopicReference => ({
  name: topic,
  url: `https://github.com/topics/${topic}`,
});
