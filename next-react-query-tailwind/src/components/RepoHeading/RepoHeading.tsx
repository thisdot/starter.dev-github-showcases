import Link from 'next/link';
import { useRepo } from '@context/RepoContext';
import PrivacyIcon from './PrivacyIcon';
import PrivacyBadge from '../PrivacyBadge';
import styles from './RepoHeading.module.css';

function RepoHeading() {
  const { owner, name, data } = useRepo();
  return (
    <h1 className={styles.heading}>
      <PrivacyIcon isPrivate={data?.isPrivate} />
      <span className={styles.navContainer}>
        <Link
          href={data?.isOrg ? `/orgs/${owner}` : `/${owner}`}
          data-testid="header owner name"
          className={styles.ownerLink}
        >
          {owner}
        </Link>
        <span className={styles.separator}>/</span>
        <Link
          href={`/${owner}/${name}`}
          data-testid="header repo name"
          className={styles.nameLink}
        >
          {name}
        </Link>
      </span>
      {data ? (
        <PrivacyBadge isPrivate={data.isPrivate} />
      ) : (
        <div className={styles.badgePlaceholder} />
      )}
    </h1>
  );
}

export default RepoHeading;
