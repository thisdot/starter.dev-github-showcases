import { EyeIcon, GitBranchIcon } from '@components/Icons';
import { StarIcon } from '@heroicons/react/outline';
import { useRepo } from '@context/RepoContext';
import styles from './RepoActionButtons.module.css';

function RepoActionButtons() {
  const { data } = useRepo();
  return (
    <div className={styles.container}>
      <span className={styles.btnGroup}>
        <button type="button" className={styles.btnMain}>
          <EyeIcon className={styles.btnIcon} />
          Watch
        </button>
        <button type="button" className={styles.btnSide}>
          {data?.watcherCount}
        </button>
      </span>
      <span className={styles.btnGroup}>
        <button type="button" className={styles.btnMain}>
          <StarIcon className={styles.btnIcon} />
          Star
        </button>
        <button type="button" className={styles.btnSide}>
          {data?.stargazerCount}
        </button>
      </span>
      <span className={styles.btnGroup}>
        <button type="button" className={styles.btnMain}>
          <GitBranchIcon className={styles.btnIcon} />
          Fork
        </button>
        <button type="button" className={styles.btnSide}>
          {data?.forkCount}
        </button>
      </span>
    </div>
  );
}

export default RepoActionButtons;
