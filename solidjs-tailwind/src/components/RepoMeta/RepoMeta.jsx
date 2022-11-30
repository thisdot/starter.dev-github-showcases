import { formatDistance } from 'date-fns';
import { StarIcon, GitBranchIcon } from '../Icons';
import styles from './RepoMeta.module.css';

const RepoMeta = (props) => {
  return (
    <div class={styles.metadata}>
      {props.language && (
        <div>
          <span
            style={{
              'background-color': props.languageColor || '#ccc',
            }}
            class={styles.languageColor}
          />
          {props.language}
        </div>
      )}
      {(props.stargazerCount > 0 || props.forkCount > 0) && (
        <div class="space-x-4">
          {props.stargazerCount > 0 && (
            <span
              class={styles.socialCount}
              data-testid="repository star count"
            >
              <StarIcon class={styles.socialIcon} /> {props.stargazerCount}
            </span>
          )}
          {props.forkCount > 0 && (
            <span
              class={styles.socialCount}
              data-testid="repository fork count"
            >
              <GitBranchIcon class={styles.socialIcon} /> {props.forkCount}
            </span>
          )}
        </div>
      )}
      <div>
        Updated{' '}
        {formatDistance(new Date(props.updatedAt), Date.now(), {
          addSuffix: true,
        })}
      </div>
    </div>
  );
};

export default RepoMeta;
