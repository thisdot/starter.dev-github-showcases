import { A } from '@solidjs/router';
import { Show } from 'solid-js';
import { LinkIcon } from '../Icons';
import styles from './RepoAbout.module.css';

interface HomepageUrlProps {
  homepageUrl?: string;
}

export const HomepageUrl = (props: HomepageUrlProps) => {
  return (
    <Show when={props.homepageUrl}>
      <div class={styles.linkContainer}>
        <LinkIcon class={styles.linkIcon} />
        <A href={props.homepageUrl ?? ''} class={styles.link} target="_blank">
          {props.homepageUrl}
        </A>
      </div>
    </Show>
  );
};
