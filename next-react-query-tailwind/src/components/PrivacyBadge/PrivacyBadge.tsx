import cn from 'classnames';
import styles from './PrivacyBadge.module.css';

interface PrivacyBadgeProps {
  isPrivate: boolean;
  className?: string;
}

function PrivacyBadge({ isPrivate, className }: PrivacyBadgeProps) {
  return (
    <span className={cn(styles.badge, className)}>
      {isPrivate ? 'Private' : 'Public'}
    </span>
  );
}

export default PrivacyBadge;
