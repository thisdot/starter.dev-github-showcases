import { component$, useClientEffect$, useContext, useStore, useTask$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { StarIcon } from '../icons';
import { UserRepo, UserReposProps, Repositories } from './types';
import { RepoMeta } from '../repo-meta/repo-meta';
import { PrivacyBadge } from '../privacy-badge/privacy-badge';
import { Pagination } from '../pagination/pagination';
import { RepoFilters } from '../repo-filters/repo-filters';
import { getLanguages } from './getLanguages';
import { useLocation } from '@builder.io/qwik-city';
import filterStore from '~/context/repo-filter';
import {
  repoDataFilteredByLanguage,
  repoDataFilteredBySearch,
  repoDataFilteredByType,
  sortedRepoData,
} from './filter-sort-functions';
import { isBrowser } from '@builder.io/qwik/build';
import { AUTH_TOKEN, GITHUB_GRAPHQL } from '~/utils/constants';
import { useQuery } from '~/utils/useQuery';
import { REPOS_QUERY } from '~/utils/queries/repos-query';
import { LanguageFilter } from '../repo-filters/types';

interface State {
  searchResponse: UserRepo[];
}

interface RepoStore {
  pageInfo: Repositories['pageInfo'] | null;
  languages: LanguageFilter[];
  isLoading: boolean;
}

interface RepoQueryParams {
  username: string;
  afterCursor?: string;
  beforeCursor?: string;
}

export const UserRepos = component$(({ owner }: UserReposProps) => {
  const state = useStore<State>({
    searchResponse: [],
  });
  const repoData = useStore<RepoStore>({
    pageInfo: null,
    languages: [],
    isLoading: true,
  });
  const filters = useContext(filterStore);
  const location = useLocation();

  useClientEffect$(async () => {
    const abortController = new AbortController();
    const repoResponse = await fetchRepos(
      { afterCursor: location.query.after, beforeCursor: location.query.before, username: location.params.user },
      abortController
    );

    updateRepos(repoData, repoResponse);
    state.searchResponse = repoResponse.data.owner.repositories.nodes;
  });

  useTask$(async ({ track }) => {
    const abortController = new AbortController();
    track(() => filters.search);
    track(() => filters.language);
    track(() => filters.sortBy);
    track(() => filters.type);
    track(() => location.query.after);
    track(() => location.query.before);

    if (isBrowser && location.params.user) {
      const response = await fetchRepos(
        {
          afterCursor: location.query.after,
          beforeCursor: location.query.before,
          username: location.params.user,
        },
        abortController
      );

      updateRepos(repoData, response);
      state.searchResponse = response.data.owner.repositories.nodes;
    }

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

  return (
    <>
      <RepoFilters languages={repoData.languages} resultCount={state.searchResponse.length} />
      {state.searchResponse.length === 0 && <div class="col-span-12 md:col-span-7">There are no repositories here</div>}
      {state.searchResponse.map(
        ({ id, name, description, stargazerCount, forkCount, primaryLanguage, updatedAt, isPrivate }) => (
          <div key={id} class="py-8 border-b border-gray-200 first-of-type:border-t grid grid-cols-12 gap-x-4">
            <div class="col-span-12 md:col-span-7">
              <h3 class="mb-2">
                <Link href={`/${owner}/${name}`} class="text-xl text-blue-600 font-semibold hover:underline mr-3">
                  {name}
                </Link>
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
      {(repoData.pageInfo?.hasNextPage || repoData.pageInfo?.hasPreviousPage) && (
        <Pagination pageInfo={repoData.pageInfo} owner={owner} />
      )}
    </>
  );
});

export function updateRepos(store: RepoStore, response: any) {
  store.isLoading = false;
  store.languages = getLanguages(response.data.owner.repositories.nodes);
  store.pageInfo = response.data.owner.repositories.pageInfo;
}

export async function fetchRepos(
  { username, afterCursor, beforeCursor }: RepoQueryParams,
  abortController?: AbortController
) {
  const { executeQuery$ } = useQuery(REPOS_QUERY);

  const resp = await executeQuery$({
    signal: abortController?.signal,
    url: GITHUB_GRAPHQL,
    variables: {
      username,
      afterCursor,
      beforeCursor,
    },
    headersOpt: {
      Accept: 'application/vnd.github+json',
      authorization: `Bearer ${sessionStorage.getItem(AUTH_TOKEN)}`,
    },
  });

  return await resp.json();
}
