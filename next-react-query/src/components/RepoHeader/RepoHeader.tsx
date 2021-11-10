import RepoHeading from '@components/RepoHeading';
import RepoActionButtons from '@components/RepoActionButtons';
import RepoTabNavigation from '@components/RepoTabNavigation';
import styles from './RepoHeader.module.css';

function RepoHeader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.topRow}>
        <RepoHeading />
        <RepoActionButtons />
      </div>
      <div className={styles.bottomRow}>
        <RepoTabNavigation />
      </div>
    </div>
  );
}

export default RepoHeader;
