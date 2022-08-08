import { Link } from '@remix-run/react';
import { LinkIcon } from '@heroicons/react/outline';
import * as styles from './RepoAboutWidget.classNames';

interface HomepageUrlProps {
  homepageUrl?: string | null;
}

function HomepageUrl({ homepageUrl }: HomepageUrlProps) {
  if (!homepageUrl) {
    return null;
  }

  return (
    <div className={styles.linkContainer}>
      <LinkIcon className={styles.linkIcon} />
      <a href={homepageUrl} className={styles.link} target="_blank">
        {homepageUrl}
      </a>
    </div>
  );
}

export default HomepageUrl;
