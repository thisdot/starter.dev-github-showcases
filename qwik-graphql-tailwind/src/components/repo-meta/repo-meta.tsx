import { component$ } from '@builder.io/qwik';
import { formatDistance } from 'date-fns';
import { GitBranchIcon, StarIcon } from '../icons';
import * as styles from './repo-meta.classNames';

export interface RepoMetaProps {
  language?: string | null;
  languageColor?: string | null;
  stargazerCount: number;
  forkCount: number;
  updatedAt: Date;
}

export const RepoMeta = component$(
  ({ language, languageColor, stargazerCount, forkCount, updatedAt }: RepoMetaProps) => {
    return (
      <div className={styles.metadata}>
        {language && (
          <div data-testid="repository language">
            <span
              style={{
                backgroundColor: languageColor || '#ccc',
              }}
              className={styles.languageColor}
            />
            {language}
          </div>
        )}
        {(stargazerCount > 0 || forkCount > 0) && (
          <div className="space-x-4">
            {stargazerCount > 0 && (
              <span className={styles.socialCount} data-testid="repository star count">
                <StarIcon className={styles.socialIcon} /> {stargazerCount}
              </span>
            )}
            {forkCount > 0 && (
              <span className={styles.socialCount} data-testid="repository fork count">
                <GitBranchIcon className={styles.socialIcon} /> {forkCount}
              </span>
            )}
          </div>
        )}
        <div>
          Updated{' '}
          {formatDistance(new Date(updatedAt), Date.now(), {
            addSuffix: true,
          })}
        </div>
      </div>
    );
  }
);
