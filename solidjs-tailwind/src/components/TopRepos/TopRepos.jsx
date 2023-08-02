import { For } from 'solid-js';
import { RepoCard } from '../RepoCard';
import styles from './TopRepos.module.css';

const TopRepos = (props) => {
  return (
    <>
      {props.repos.length > 0 ? (
        <div class={styles.container}>
          <For each={props.repos}>
            {(repo) => <RepoCard {...repo()} styles={styles} />}
          </For>
          <div class={styles.linkContainer}>
            <a href={`/${props.login}`} class={styles.allRepoLink}>
              View all repositories
            </a>
          </div>
        </div>
      ) : (
        <div>No repositories found</div>
      )}
    </>
  );
};

export default TopRepos;
