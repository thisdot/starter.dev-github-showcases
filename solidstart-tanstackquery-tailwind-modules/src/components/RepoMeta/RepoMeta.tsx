import { formatDistance } from 'date-fns';
import { GitBranchIcon, StarIcon } from '../Icons';
import styles from './RepoMeta.module.css';
import { splitProps } from 'solid-js';

interface RepoMetaProps {
  language: string;
  languageColor: string;
  stargazerCount: number;
  forkCount: number;
  updatedAt: string;
}

const RepoMeta = (props: RepoMetaProps) => {
  const [local] = splitProps(props, [
    'language',
    'languageColor',
    'stargazerCount',
    'forkCount',
    'updatedAt',
  ]);

  return (
    <div class={styles.metadata}>
      {local.language && (
        <div>
          <span
            style={{
              'background-color': local.languageColor || '#ccc',
            }}
            class={styles.languageColor}
          />
          {local.language}
        </div>
      )}
      {(local.stargazerCount > 0 || local.forkCount > 0) && (
        <div class="space-x-4">
          {local.stargazerCount > 0 && (
            <span
              class={styles.socialCount}
              data-testid="repository star count"
            >
              <StarIcon class={styles.socialIcon} /> {local.stargazerCount}
            </span>
          )}
          {local.forkCount > 0 && (
            <span
              class={styles.socialCount}
              data-testid="repository fork count"
            >
              <GitBranchIcon class={styles.socialIcon} /> {local.forkCount}
            </span>
          )}
        </div>
      )}
      <div>
        Updated{' '}
        {formatDistance(new Date(local.updatedAt), Date.now(), {
          addSuffix: true,
        })}
      </div>
    </div>
  );
};

export default RepoMeta;
