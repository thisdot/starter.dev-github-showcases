import type { Repo } from './types';
import { Link } from 'remix';
import { StarIcon } from '@heroicons/react/outline';
import PrivacyBadge from '../PrivacyBadge/PrivacyBadge';
import RepoMeta from '../RepoMeta/RepoMeta';
import * as styles from './UserRepos.classNames';

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
                <Link to={`/${owner}/${name}`}>
                  <a className={styles.headingLink}>{name}</a>
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
