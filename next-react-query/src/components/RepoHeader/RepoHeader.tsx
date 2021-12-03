import RepoHeading from '@components/RepoHeading';
import RepoActionButtons from '@components/RepoActionButtons';
import TabNavigation from '@components/TabNavigation';
import styles from './RepoHeader.module.css';
import { tabList } from './tabList';

function RepoHeader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topRow}>
        <RepoHeading />
        <RepoActionButtons />
      </div>
      <div className={styles.bottomRow}>
        <TabNavigation tabs={tabList} basePath="/[owner]/[name]" />
      </div>
    </div>
  );
}

export default RepoHeader;
