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
        <Link href={data?.isOrg ? `/orgs/${owner}` : `/${owner}`}>
          <a className={styles.ownerLink}>{owner}</a>
        </Link>
        <span className={styles.separator}>/</span>
        <Link href={`/${owner}/${name}`}>
          <a className={styles.nameLink}>{name}</a>
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
