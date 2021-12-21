import Link from 'next/link';
import { LinkIcon } from '@heroicons/react/outline';
import styles from './RepoAboutWidget.module.css';

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
      <Link href={homepageUrl}>
        <a className={styles.link} target="_blank">
          {homepageUrl}
        </a>
      </Link>
    </div>
  );
}

export default HomepageUrl;
