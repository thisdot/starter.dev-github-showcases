import { For } from 'solid-js';
import styles from './RepoAbout.module.css';

export const Topics = (props) => {
  return (
    <>
      {props.topics.length === 0 ? null : (
        <div class="space-y-1">
          <For each={props.topics}>
            {(topic) => <span class={styles.topic}>{topic}</span>}
          </For>
        </div>
      )}
    </>
  );
};
