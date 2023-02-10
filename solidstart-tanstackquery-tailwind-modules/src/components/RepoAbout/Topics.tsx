import { For, Show } from 'solid-js';
import styles from './RepoAbout.module.css';

interface TopicsProps {
  topics: string[];
}

export const Topics = (props: TopicsProps) => {
  return (
    <Show when={props.topics.length > 0}>
      <div class="space-y-1">
        <For each={props.topics}>
          {(topic) => <span class={styles.topic}>{topic}</span>}
        </For>
      </div>
    </Show>
  );
};
