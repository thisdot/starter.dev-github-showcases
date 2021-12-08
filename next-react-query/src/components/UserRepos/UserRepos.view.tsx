import type { Repo } from './types';
import Link from 'next/link';
import { formatDistance } from 'date-fns';
import { StarIcon } from '@heroicons/react/outline';
import { GitBranchIcon } from '@components/Icons';
import PrivacyBadge from '@components/PrivacyBadge';
import styles from './UserRepos.module.css';

export interface UserReposViewProps {
  repos: Repo[];
  owner: string;
}

function UserReposView({ repos, owner }: UserReposViewProps) {
  return (
    <div>
      {repos.map(
        ({
          id,
          name,
          description,
          stargazerCount,
          forkCount,
          language,
          languageColor,
          updatedAt,
          isPrivate,
        }) => (
          <div key={id} className={styles.container}>
            <div className={styles.content}>
              <h3 className="mb-2">
                <Link href={`/${owner}/${name}`}>
                  <a className={styles.headingLink}>{name}</a>
                </Link>
                <PrivacyBadge
                  isPrivate={isPrivate}
                  className="relative bottom-0.5"
                />
              </h3>
              <div className={styles.description}>{description}</div>
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
                        <StarIcon className={styles.socialIcon} />{' '}
                        {stargazerCount}
                      </span>
                    )}
                    {forkCount > 0 && (
                      <span className={styles.socialCount}>
                        <GitBranchIcon className={styles.socialIcon} />{' '}
                        {forkCount}
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
            </div>
            <div className={styles.aside}>
              <button className={styles.starBtn}>
                <StarIcon className={styles.starIcon} />
                Star
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default UserReposView;
