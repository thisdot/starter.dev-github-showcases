import { component$, useContext } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { StarIcon } from '../icons';
import { UserRepo, UserReposProps } from './types';
import * as styles from './user-repos.classNames';
import { RepoMeta } from '../repo-meta/repo-meta';
import { PrivacyBadge } from '../privacy-badge/privacy-badge';
import { Pagination } from '../pagination/pagination';
import { RepoFilters } from '../repo-filters/repo-filters';
import { getLanguages } from './getLanguages';
import filterStore from '~/context/repo-filter';
import { repoDataFilteredBySearch } from './filter-sort-functions';

export const UserRepos = component$(({ repos, owner }: UserReposProps) => {
  const languages = getLanguages(repos.nodes);

  const searchValue = useContext(filterStore);

  const filteredAndSortedRepos = ((): UserRepo[] => {
    const searchResponse = repoDataFilteredBySearch(searchValue?.search || '', repos.nodes);
    return searchResponse;
  })();

  return (
    <>
      <RepoFilters languages={languages} resultCount={repos.nodes.length} />
      {filteredAndSortedRepos.map(
        ({ id, name, description, stargazerCount, forkCount, primaryLanguage, updatedAt, isPrivate }) => (
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
                language={primaryLanguage?.name}
                languageColor={primaryLanguage?.color}
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
