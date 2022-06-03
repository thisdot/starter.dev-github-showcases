import RepoHeading from '@components/RepoHeading';
import RepoActionButtons from '@components/RepoActionButtons';
import TabNavigation from '@components/TabNavigation';
import styles from './RepoHeader.module.css';
import { createTabList } from './tabList';
import { useRepo } from '@context/RepoContext';

function RepoHeader() {
  const repo = useRepo();
  return (
    <div className={styles.wrapper}>
      <div className={styles.topRow}>
        <RepoHeading />
        <RepoActionButtons />
      </div>
      <div className={styles.bottomRow}>
        <TabNavigation
          tabs={createTabList({
            issueCount: repo.data?.openIssueCount,
            pullRequestCount: repo.data?.openPullRequestCount,
          })}
          basePath="/[owner]/[name]"
        />
      </div>
    </div>
  );
}

export default RepoHeader;
