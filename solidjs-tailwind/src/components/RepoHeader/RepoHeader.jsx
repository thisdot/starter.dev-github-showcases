import { useLocation } from '@solidjs/router';

import styles from './RepoHeader.module.css';
import { useRepo } from '../../contexts/RepoContext';
import { createTabList } from './tabList';
import { RepoHeading } from '../RepoHeading';
import { RepoActionButtons } from '../RepoActionButtons';
import { TabNavigation } from '../TabNavigation';

function RepoHeader() {
  const { info } = useRepo();
  const { pathname } = useLocation();
  return (
    <div class={styles.wrapper}>
      <div class={styles.topRow}>
        <RepoHeading />
        <RepoActionButtons />
      </div>
      <div class={styles.bottomRow}>
        <TabNavigation
          tabs={createTabList({
            issueCount: info().info?.openIssueCount,
            pullRequestCount: info().info?.openPullRequestCount,
          })}
          basePath="/[owner]/[name]"
          class="border-none"
          pathname={pathname}
        />
      </div>
    </div>
  );
}

export default RepoHeader;
