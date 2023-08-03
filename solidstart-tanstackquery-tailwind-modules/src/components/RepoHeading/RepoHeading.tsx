import { Link } from '@solidjs/router';
import PrivacyIcon from './PrivacyIcon';
import { PrivacyBadge } from '../PrivacyBadge';
import styles from './RepoHeading.module.css';
import { useParams } from '@solidjs/router';
import { Match, Switch, splitProps } from 'solid-js';

export type RepoHeadingProps = {
  visibility: string;
  isOrg: boolean;
};

function RepoHeading(props: RepoHeadingProps) {
  const [local] = splitProps(props, ['isOrg', 'visibility']);
  const params = useParams();

  return (
    <h1 class={styles.heading}>
      <PrivacyIcon visibility={local.visibility} />
      <span class={styles.navContainer}>
        <Link href={local.isOrg ? `/orgs/${params.owner}` : `/${params.owner}`}>
          <a data-testid="header owner name" class={styles.ownerLink}>
            {params.owner || '...'}
          </a>
        </Link>
        <span class={styles.separator}>/</span>
        <Link href={`/${params.owner}/${params.name}`}>
          <a data-testid="header repo name" class={styles.nameLink}>
            {params.name || '...'}
          </a>
        </Link>
      </span>
      <Switch fallback={<div class={styles.badgePlaceholder} />}>
        <Match when={local.visibility}>
          <PrivacyBadge visibility={local.visibility} />
        </Match>
      </Switch>
    </h1>
  );
}

export default RepoHeading;
