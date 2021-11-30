import { formatDistance } from 'date-fns';
import { StarIcon } from '@heroicons/react/outline';
import { GitBranchIcon } from '@components/Icons';
import styles from './RepoMeta.module.css';

interface RepoMetaProps {
  language?: string | null;
  languageColor?: string | null;
  stargazerCount: number;
  forkCount: number;
  updatedAt: Date;
}

function RepoMeta({
  language,
  languageColor,
  stargazerCount,
  forkCount,
  updatedAt,
}: RepoMetaProps) {
  return (
    <div className={styles.metadata}>
      {language && (
        <div>
          <span
            style={{
              backgroundColor: languageColor ? languageColor : '#ccc',
            }}
            className={styles.languageColor}
          />
          {language}
        </div>
      )}
      {(stargazerCount > 0 || forkCount > 0) && (
        <div className="space-x-4">
          {stargazerCount > 0 && (
            <span className={styles.socialCount}>
              <StarIcon className={styles.socialIcon} /> {stargazerCount}
            </span>
          )}
          {forkCount > 0 && (
            <span className={styles.socialCount}>
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

export default RepoMeta;
