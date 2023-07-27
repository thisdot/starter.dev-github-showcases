import { useLocation, useParams } from '@solidjs/router';
import styles from './RepoHeader.module.css';
import { createTabList } from './tabList';
import { RepoHeading } from '../RepoHeading';
import { RepoActionButtons } from '../RepoActionButtons';
import { TabNavigation } from '../TabNavigation';
import { splitProps } from 'solid-js';
import { Info } from '~/types/repo-info-type';

function RepoHeader(props: Info) {
  const [local] = splitProps(props, [
    'openIssueCount',
    'openPullRequestCount',
    'forkCount',
    'isOrg',
    'stargazerCount',
    'watcherCount',
    'visibility',
  ]);
  const { pathname } = useLocation();
  const params = useParams();

  return (
    <div class={styles.wrapper}>
      <div class={styles.topRow}>
        <RepoHeading visibility={local.visibility} isOrg={local.isOrg} />
        <RepoActionButtons
          forkCount={local.forkCount}
          stargazerCount={local.stargazerCount}
          watcherCount={local.watcherCount}
        />
      </div>
      <div class={styles.bottomRow}>
        <TabNavigation
          tabs={createTabList({
            issueCount: local.openIssueCount,
            pullRequestCount: local.openPullRequestCount,
          })}
          basePath={`${params.owner}/${params.name}`}
          class="border-none"
          pathname={pathname}
        />
      </div>
    </div>
  );
}

export default RepoHeader;
