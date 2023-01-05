import { Link } from '@solidjs/router';
import PrivacyIcon from './PrivacyIcon';
import { PrivacyBadge } from '../PrivacyBadge';
import styles from './RepoHeading.module.css';
import { useRepo } from '../../contexts/RepoContext';
import { useParams } from '@solidjs/router';

function RepoHeading() {
  const { info } = useRepo();
  const params = useParams();

  return (
    <h1 class={styles.heading}>
      <PrivacyIcon isPrivate={info().info?.isPrivate} />
      <span class={styles.navContainer}>
        <Link
          href={
            info().info?.isOrg ? `/orgs/${params.owner}` : `/${params.owner}`
          }
        >
          <a data-testid="header owner name" class={styles.ownerLink}>
            {params.owner}
          </a>
        </Link>
        <span class={styles.separator}>/</span>
        <Link href={`/${params.owner}/${params.name}`}>
          <a data-testid="header repo name" class={styles.nameLink}>
            {params.name}
          </a>
        </Link>
      </span>
      {info().info ? (
        <PrivacyBadge
          visibility={info().info?.isPrivate ? 'Private' : 'Public'}
        />
      ) : (
        <div class={styles.badgePlaceholder} />
      )}
    </h1>
  );
}

export default RepoHeading;
