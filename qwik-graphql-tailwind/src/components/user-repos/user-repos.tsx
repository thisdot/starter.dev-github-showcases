import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { StarIcon } from '../icons';
import { Repo } from './types';
import * as styles from './user-repos.classNames';
import { RepoMeta } from '../repo-meta/repo-meta';
import { PrivacyBadge } from '../privacy-badge/privacy-badge';
import { Pagination } from '../pagination/pagination';
import RepoFilters from '../repo-filters/repo-filters';
import { getLanguages } from './getLanguages';

export interface UserReposViewProps {
  repos: Repositories;
  owner: string;
}

export interface Repositories {
  nodes: Repo[];
  pageInfo:
    | {
        __typename?: 'PageInfo' | undefined;
        endCursor?: string | null | undefined;
        startCursor?: string | null | undefined;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
      }
    | undefined;
}

export const UserRepos = component$(({ repos, owner }: UserReposViewProps) => {
  console.log(repos);
  const repoFilters = {
    state: {
      query: '',
    },
  };
  const languages = getLanguages(repos.nodes);

  return (
    <>
      <RepoFilters {...repoFilters} languages={languages} resultCount={repos.nodes.length} />
      {repos.nodes.map(
        ({ id, name, description, stargazerCount, forkCount, language, languageColor, updatedAt, isPrivate }) => (
          <div key={id} className={styles.container}>
            <div className={styles.content}>
              <h3 className="mb-2">
                <Link href={`/${owner}/${name}`} className={styles.headingLink}>
                  {name}
                </Link>
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
            <div className={styles.aside}>
              <button className={styles.starBtn}>
                <StarIcon className={styles.starIcon} />
                Star
              </button>
            </div>
          </div>
        )
      )}
      {(repos.pageInfo?.hasNextPage || repos.pageInfo?.hasPreviousPage) && (
        <Pagination pageInfo={repos.pageInfo} owner={owner} />
      )}
    </>
  );
});
