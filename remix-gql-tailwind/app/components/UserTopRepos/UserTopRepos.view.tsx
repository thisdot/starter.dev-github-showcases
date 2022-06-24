import type { TopRepo } from './types';
import { Link } from "@remix-run/react";
import * as styles from './UserTopRepos.classNames';
import RepoMeta from '../RepoMeta/RepoMeta';
import PrivacyBadge from '../PrivacyBadge/PrivacyBadge';

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
          <div key={id} className={styles.item}>
            <h3 className="mb-2">
              <Link to={`/${owner}/${name}`} className={styles.headingLink}>
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
        <Link to={`/${login}`} className={styles.allRepoLink}>
          View all repositories
        </Link>
      </div>
    </div>
  );
}

export default UserTopReposView;
