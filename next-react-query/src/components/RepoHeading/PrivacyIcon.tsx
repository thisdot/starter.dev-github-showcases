import { LockClosedIcon } from '@heroicons/react/outline';
import { GitRepoIcon } from '@components/Icons';
import styles from './RepoHeading.module.css';

interface PrivacyIconProps {
  isPrivate?: boolean;
}

function PrivacyIcon({ isPrivate }: PrivacyIconProps) {
  if (isPrivate === undefined) {
    return <div className={styles.iconPlaceholder} />;
  }

  return isPrivate ? (
    <LockClosedIcon className={styles.privacyIcon} />
  ) : (
    <GitRepoIcon className={styles.privacyIcon} />
  );
}

export default PrivacyIcon;
