import { component$, useClientEffect$, useContext, useStore, useTask$ } from '@builder.io/qwik';
import { StarIcon } from '../icons';
import { UserRepo, UserReposProps } from './types';
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
          <div key={id} class="py-8 border-b border-gray-200 first-of-type:border-t grid grid-cols-12 gap-x-4">
            <div class="col-span-12 md:col-span-7">
              <h3 class="mb-2">
                <a href={`/${owner}/${name}`} class="text-xl text-blue-600 font-semibold hover:underline mr-3">
                  {name}
                </a>
                <PrivacyBadge isPrivate={isPrivate} className="relative bottom-0.5" />
              </h3>
              <div class="text-gray-600 text-sm max-w-prose">{description}</div>
              <RepoMeta
                language={primaryLanguage?.name}
                languageColor={primaryLanguage?.color}
                forkCount={forkCount}
                stargazerCount={stargazerCount}
                updatedAt={updatedAt}
              />
            </div>
            <div class="col-span-12 md:col-span-5 flex items-start justify-end">
              <button class="relative inline-flex items-center px-3 py-1 rounded-md bg-gray-100 bg-opacity-75 border border-gray-300 text-sm font-medium text-gray-800 hover:bg-gray-200 hover:bg-opacity-50">
                <StarIcon className="w-4 h-4 text-gray-600 mr-1" />
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
