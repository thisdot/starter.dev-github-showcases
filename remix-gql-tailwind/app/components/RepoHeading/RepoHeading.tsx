import { Link } from "@remix-run/react";
import { useRepo } from '../../context/RepoContext';
import PrivacyIcon from './PrivacyIcon';
import PrivacyBadge from '../PrivacyBadge/PrivacyBadge';
import * as styles from './RepoHeading.classNames';

function RepoHeading() {
  const { owner, name, data } = useRepo();
  return (
    <h1 className={styles.heading}>
      <PrivacyIcon isPrivate={data?.isPrivate} />
      <span className={styles.navContainer}>
        <Link to={data?.isOrg ? `/orgs/${owner}` : `/${owner}`} className={styles.ownerLink}>
          {owner}
        </Link>
        <span className={styles.separator}>/</span>
        <Link to={`/${owner}/${name}`} className={styles.nameLink}>
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
