import { EyeIcon, GitBranchIcon } from '../../Shared/Icons';
import { StarIcon } from '@heroicons/react/outline';
import { useRepo } from '../../../context/RepoContext';
import CountButtonGroup from './CountButtonGroup';
import * as styles from './RepoActionButtons.classNames';

function RepoActionButtons() {
  const { data } = useRepo();
  return (
    <div className={styles.container}>
      <CountButtonGroup count={data?.watcherCount}>
        <EyeIcon className={styles.btnIcon} />
        Watch
      </CountButtonGroup>
      <CountButtonGroup count={data?.stargazerCount}>
        <StarIcon className={styles.btnIcon} />
        Star
      </CountButtonGroup>
      <CountButtonGroup count={data?.forkCount}>
        <GitBranchIcon className={styles.btnIcon} />
        Fork
      </CountButtonGroup>
    </div>
  );
}

export default RepoActionButtons;
