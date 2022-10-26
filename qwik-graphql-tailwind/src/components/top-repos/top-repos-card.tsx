import { component$ } from '@builder.io/qwik';

import PrivacyBadge from '../privacy-badge';
import RepoMeta from '../repo-meta';

import type { TopRepo } from './types';

import * as styles from './top-repos.className';

interface UserTopReposViewProps {
  login: string;
  repos: TopRepo[];
}
export default component$(({ repos, login }: UserTopReposViewProps) => {
  if (repos.length === 0) {
    return <div>No repositories found</div>;
  }

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
          <div key={id} className={styles.item} data-testid={`user top repos ${name} list item`}>
            <h3 className="mb-2">
              <a href={`/${owner}/${name}`} data-testid={`user top repos ${name} link`} className={styles.headingLink}>
                {name}
              </a>
              <PrivacyBadge isPrivate={isPrivate} className="relative bottom-0.5" />
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
        <a href={`/${login}`} className={styles.allRepoLink}>
          View all repositories
        </a>
      </div>
    </div>
  );
});
