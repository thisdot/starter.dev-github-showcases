import { For, Show, splitProps } from 'solid-js';
import { RepoCard } from '../RepoCard';
import styles from './TopRepos.module.css';
import { TopRepository } from '~/types/top-repos-type';

interface TopReposProps {
  topRepos: TopRepository[];
  login: string;
}

const TopRepos = (props: TopReposProps) => {
  const [local] = splitProps(props, ['topRepos', 'login']);

  return (
    <Show
      when={local.topRepos.length > 0}
      fallback={<div>No repositories found</div>}
    >
      <div class={styles.container}>
        <For each={local.topRepos}>
          {(repo) => <RepoCard {...repo} isProfilePage={false} />}
        </For>
        <div class={styles.linkContainer}>
          <a href={`/${local.login}`} class={styles.allRepoLink}>
            View all repositories
          </a>
        </div>
      </div>
    </Show>
  );
};

export default TopRepos;
