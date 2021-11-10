import styles from './RepoHeading.module.css';

interface PrivacyBadgeProps {
  isPrivate?: boolean;
}

function PrivacyBadge({ isPrivate }: PrivacyBadgeProps) {
  if (isPrivate === undefined) {
    return <div className={styles.badgePlaceholder} />;
  }

  return isPrivate ? (
    <span className={styles.badge}>Private</span>
  ) : (
    <span className={styles.badge}>Public</span>
  );
}

export default PrivacyBadge;
