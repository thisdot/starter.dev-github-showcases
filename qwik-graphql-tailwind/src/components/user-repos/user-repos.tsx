import { component$, useClientEffect$, useContext, useStore, useTask$ } from '@builder.io/qwik';
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

  useTask$(({ track }) => {
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
          <div key={id} class={styles.container}>
            <div class={styles.content}>
              <h3 class="mb-2">
                <a href={`/${owner}/${name}`} class={styles.headingLink}>
                  {name}
                </a>
                <PrivacyBadge isPrivate={isPrivate} className="relative bottom-0.5" />
              </h3>
              <div class={styles.description}>{description}</div>
              <RepoMeta
                language={primaryLanguage?.name}
                languageColor={primaryLanguage?.color}
                forkCount={forkCount}
                stargazerCount={stargazerCount}
                updatedAt={updatedAt}
              />
            </div>
            <div class={styles.aside}>
              <button class={styles.starBtn}>
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
