import type { Repo } from './types';
import Link from 'next/link';
import { StarIcon } from '@heroicons/react/outline';
import PrivacyBadge from '@components/PrivacyBadge';
import RepoMeta from '@components/RepoMeta';
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
          <div
            key={id}
            className={styles.container}
            data-testid="repository list item"
          >
            <div className={styles.content}>
              <h3 className="mb-2">
                <Link href={`/${owner}/${name}`}>
                  <a className={styles.headingLink} data-testid="repository name">{name}</a>
                </Link>
                <PrivacyBadge
                  isPrivate={isPrivate}
                  className="relative bottom-0.5"
                />
              </h3>
              <div className={styles.description} data-testid="repository description">{description}</div>
              <RepoMeta
                language={language}
                languageColor={languageColor}
                forkCount={forkCount}
                stargazerCount={stargazerCount}
                updatedAt={updatedAt}
              />
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
