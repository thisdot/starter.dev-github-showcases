import { component$, useClientEffect$, useContext, useStore, useWatch$ } from '@builder.io/qwik';
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
import {
  repoDataFilteredByLanguage,
  repoDataFilteredBySearch,
  repoDataFilteredByType,
  sortedRepoData,
} from './filter-sort-functions';

interface State {
  searchResponse: UserRepo[];
}
export const UserRepos = component$(({ repos, owner }: UserReposProps) => {
  const state = useStore<State>({
    searchResponse: [],
  });
  const filters = useContext(filterStore);
  const languages = getLanguages(repos.nodes);

  useWatch$(({ track }) => {
    track(() => filters.search);
    track(() => filters.language);
    track(() => filters.sortBy);
    track(() => filters.type);
    state.searchResponse = repos.nodes;
    if (filters.search) {
      state.searchResponse = repoDataFilteredBySearch(filters?.search || '', state.searchResponse);
    }

    if (filters.language) {
      state.searchResponse = repoDataFilteredByLanguage(filters?.language, state.searchResponse);
    }

    if (filters.type) {
      state.searchResponse = repoDataFilteredByType(filters.type, state.searchResponse);
    }

    if (filters.sortBy) {
      state.searchResponse = sortedRepoData(filters.sortBy, state.searchResponse);
    }
  });

  useClientEffect$(() => {
    state.searchResponse = repos.nodes;
  });

  return (
    <>
      <RepoFilters languages={languages} resultCount={state.searchResponse.length} />
      {state.searchResponse.map(
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
