import { Show } from 'solid-js';
import { LockClosedIcon } from 'solid-heroicons/outline';
import { GitRepoIcon } from '../Icons/repo.icon';
import styles from './RepoHeading.module.css';

function PrivacyIcon(props) {
  return (
    <Show
      when={typeof props.isPrivate !== 'undefined'}
      fallback={<div class={styles.iconPlaceholder} />}
    >
      {props.isPrivate ? (
        <LockClosedIcon class={styles.icon} />
      ) : (
        <GitRepoIcon class={styles.icon} />
      )}
    </Show>
  );
}

export default PrivacyIcon;
