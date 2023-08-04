import type { TopRepo } from './types';
import Link from 'next/link';
import PrivacyBadge from '../PrivacyBadge';
import RepoMeta from '@components/RepoMeta';
import styles from './UserTopRepos.module.css';

interface UserTopReposViewProps {
  login: string;
  repos: TopRepo[];
}

function UserTopReposView({ repos, login }: UserTopReposViewProps) {
  return (
    <div className={styles.container}>
      {repos.map(
        ({
          id,
          name,
          owner,
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
            className={styles.item}
            data-testid={`user top repos ${name} list item`}
          >
            <h3 className="mb-2">
              <Link
                href={`/${owner}/${name}`}
                data-testid={`user top repos ${name} link`}
                className={styles.headingLink}
              >
                {name}
              </Link>
              <PrivacyBadge
                isPrivate={isPrivate}
                className="relative bottom-0.5"
              />
            </h3>
            <div className={styles.description}>{description}</div>
            <RepoMeta
              language={language}
              languageColor={languageColor}
              forkCount={forkCount}
              stargazerCount={stargazerCount}
              updatedAt={updatedAt}
            />
          </div>
        )
      )}
      <div className={styles.linkContainer}>
        <Link href={`/${login}`} className={styles.allRepoLink}>
          View all repositories
        </Link>
      </div>
    </div>
  );
}

export default UserTopReposView;
