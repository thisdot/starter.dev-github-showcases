import { Link } from '@solidjs/router';
import { LinkIcon } from '../icons';
import styles from './RepoAbout.module.css';

export const HomepageUrl = (props) => {
  return (
    <>
      {props.homepageUrl ? (
        <div class={styles.linkContainer}>
          <LinkIcon class={styles.linkIcon} />
          <Link href={props.homepageUrl} class={styles.link} target="_blank">
            {props.homepageUrl}
          </Link>
        </div>
      ) : null}
    </>
  );
};
