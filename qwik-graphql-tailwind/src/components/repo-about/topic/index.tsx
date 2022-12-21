import { component$ } from '@builder.io/qwik';

interface TopicsProps {
  topics?: string[];
}

export const Topics = component$(({ topics }: TopicsProps) => {
  if (!topics) {
    return null;
  }
  return (
    <div class="space-y-1">
      {topics.map((topic) => (
        <span
          key={topic}
          class="inline-block bg-blue-100 text-blue-600 text-xs font-medium py-1 px-2 rounded-xl mr-1.5 hover:text-white hover:bg-blue-600 transition-colors cursor-pointer"
        >
          {topic}
        </span>
      ))}
    </div>
  );
});
