import styles from './RepoActionButtons.module.css';
import CountButtonGroup from './CountButtonGroup';
import { EyeIcon, StarIcon, GitBranchIcon } from '../Icons';
import { splitProps } from 'solid-js';

type RepoActionButtonsProps = {
  watcherCount: number;
  stargazerCount: number;
  forkCount: number;
};

function RepoActionButtons(props: RepoActionButtonsProps) {
  const [local] = splitProps(props, [
    'forkCount',
    'stargazerCount',
    'watcherCount',
  ]);

  return (
    <div class={styles.container}>
      <CountButtonGroup count={local.watcherCount}>
        <EyeIcon class={styles.btnIcon} />
        Watch
      </CountButtonGroup>
      <CountButtonGroup count={local.stargazerCount}>
        <StarIcon class={styles.btnIcon} />
        Star
      </CountButtonGroup>
      <CountButtonGroup count={local.forkCount}>
        <GitBranchIcon class={styles.btnIcon} />
        Fork
      </CountButtonGroup>
    </div>
  );
}

export default RepoActionButtons;
