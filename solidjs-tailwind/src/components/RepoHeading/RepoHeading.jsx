import { Link } from '@solidjs/router';
import PrivacyIcon from './PrivacyIcon';
import { PrivacyBadge } from '../PrivacyBadge';
import styles from './RepoHeading.module.css';

function RepoHeading(props) {
  return (
    <h1 class={styles.heading}>
      <PrivacyIcon isPrivate={props.data?.isPrivate} />
      <span class={styles.navContainer}>
        <Link
          href={props.data?.isOrg ? `/orgs/${props.owner}` : `/${props.owner}`}
        >
          <a data-testid="header owner name" class={styles.ownerLink}>
            {props.owner}
          </a>
        </Link>
        <span class={styles.separator}>/</span>
        <Link href={`/${props.owner}/${name}`}>
          <a data-testid="header repo name" class={styles.nameLink}>
            {name}
          </a>
        </Link>
      </span>
      {props.data ? (
        <PrivacyBadge isPrivate={props.data.isPrivate} />
      ) : (
        <div class={styles.badgePlaceholder} />
      )}
    </h1>
  );
}

export default RepoHeading;
