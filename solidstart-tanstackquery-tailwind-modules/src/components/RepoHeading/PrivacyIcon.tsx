import { Match, Switch, splitProps } from 'solid-js';
import { Icon } from 'solid-heroicons';
import { lockClosed } from 'solid-heroicons/solid';
import { RepoIcon } from '../Icons';
import styles from './RepoHeading.module.css';
import { visibilityTypes } from './data';

function PrivacyIcon(props: { visibility: string }) {
  const [local] = splitProps(props, ['visibility']);
  return (
    <Switch fallback={<div class={styles.iconPlaceholder} />}>
      <Match when={local.visibility === visibilityTypes.private}>
        <Icon path={lockClosed} class={styles.privacyIcon} />
      </Match>
      <Match when={local.visibility !== visibilityTypes.private}>
        <RepoIcon class={styles.privacyIcon} />
      </Match>
    </Switch>
  );
}

export default PrivacyIcon;
