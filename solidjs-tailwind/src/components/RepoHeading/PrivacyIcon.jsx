import { Show } from 'solid-js';
import { Icon } from 'solid-heroicons';
import { lockClosed } from 'solid-heroicons/solid';
import GitRepoIcon from '../Icons/repo.icon';
import styles from './RepoHeading.module.css';

function PrivacyIcon(props) {
  return (
    <Show
      when={typeof props.isPrivate !== 'undefined'}
      fallback={<div class={styles.iconPlaceholder} />}
    >
      {props.isPrivate ? (
        <Icon path={lockClosed} class={styles.privacyIcon} />
      ) : (
        <GitRepoIcon class={styles.privacyIcon} />
      )}
    </Show>
  );
}

export default PrivacyIcon;
