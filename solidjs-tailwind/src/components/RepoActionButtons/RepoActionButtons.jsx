import styles from './RepoActionButtons.module.css';
import CountButtonGroup from './CountButtonGroup';
import { useRepo } from '../../contexts/RepoContext';
import { EyeIcon, StarIcon, GitBranchIcon } from '../Icons';

function RepoActionButtons() {
  const { info } = useRepo();

  return (
    <div class={styles.container}>
      <CountButtonGroup count={info().info?.watcherCount}>
        <EyeIcon class={styles.btnIcon} />
        Watch
      </CountButtonGroup>
      <CountButtonGroup count={info().info?.stargazerCount}>
        <StarIcon class={styles.btnIcon} />
        Star
      </CountButtonGroup>
      <CountButtonGroup count={info().info?.forkCount}>
        <GitBranchIcon class={styles.btnIcon} />
        Fork
      </CountButtonGroup>
    </div>
  );
}

export default RepoActionButtons;
