import { LockClosedIcon, BookmarkAltIcon } from '@heroicons/react/outline';
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
    <BookmarkAltIcon className={styles.privacyIcon} />
  );
}

export default PrivacyIcon;
