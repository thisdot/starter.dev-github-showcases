import styles from './RepoHeading.module.css';

interface PrivacyBadgeProps {
  isPrivate?: boolean;
}

function PrivacyBadge({ isPrivate }: PrivacyBadgeProps) {
  if (isPrivate === undefined) {
    return <div className={styles.badgePlaceholder} />;
  }

  return (
    <span className={styles.badge}>{isPrivate ? 'Private' : 'Public'}</span>
  );
}

export default PrivacyBadge;
