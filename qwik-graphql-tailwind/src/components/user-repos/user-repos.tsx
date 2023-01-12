import { component$, useContext, useTask$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { StarIcon } from '../icons';
import { UserReposProps } from './types';
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

export const UserRepos = component$(({ repos, owner }: UserReposProps) => {
  const location = useLocation();
  const filters = useContext(filterStore);
  const languages = getLanguages(repos.nodes);

  useTask$(({ track }) => {
    track(() => filters.search);
    track(() => filters.language);
    track(() => filters.sortBy);
    track(() => filters.type);
    track(() => location.query.after);
    track(() => location.query.before);

    if (filters.search) {
      repos.nodes = repoDataFilteredBySearch(filters?.search || '', repos.nodes);
    }

    if (filters.language) {
      repos.nodes = repoDataFilteredByLanguage(filters?.language, repos.nodes);
    }

    if (filters.type) {
      repos.nodes = repoDataFilteredByType(filters.type, repos.nodes);
    }

    if (filters.sortBy) {
      repos.nodes = sortedRepoData(filters.sortBy, repos.nodes);
    }
  });

  return (
    <>
      <RepoFilters languages={languages} resultCount={repos.nodes.length} />
      {repos.nodes.map(
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
      {(repos.pageInfo?.hasNextPage || repos.pageInfo?.hasPreviousPage) && (
        <Pagination pageInfo={repos.pageInfo} owner={owner} />
      )}
    </>
  );
});
