import type { UserReposApiResponse, UserReposState } from '$lib/interfaces';
import type { FilterDropdownOption } from '../components/shared/FilterDropdown/filter-option';
import { LanguageFilters, SortFilters, TypeFilters } from '../enums';

export const mapUserReposToTopRepos = (repos: UserReposApiResponse): UserReposState[] => {
  if (repos) {
    return repos.map((repo) => ({
      name: repo.name,
      description: repo.description,
      language: repo.language,
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      private: repo.private,
      updated_at: repo.updated_at,
      fork: repo.fork,
      archived: repo.archived,
      license: repo.license
        ? {
            key: repo.license.key,
            name: repo.license.name,
            spdx_id: repo.license.spdx_id,
            url: repo.license.url,
            node_id: repo.license.node_id,
          }
        : null,
      owner: {
        login: repo.owner.login,
      },
    }));
  }
  return [];
};

export function filterReposUtil(
  filteredRepos: UserReposState[],
  search?: string,
  type?: string,
  language?: string,
  sort?: string
) {
  if (search) {
    filteredRepos = filteredRepos?.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (type !== TypeFilters.ALL) {
    if (type === TypeFilters.ARCHIVED) {
      filteredRepos = filteredRepos?.filter((item) => Boolean(item.archived));
    }
    if (type === TypeFilters.FORKED) {
      filteredRepos = filteredRepos?.filter((item) => Boolean(item.fork));
    }
  }
  if (language !== LanguageFilters.ALL) {
    filteredRepos = filteredRepos?.filter(
      (item) => item.language?.toLowerCase() === language?.toLowerCase()
    );
  }
  if (sort !== SortFilters.UPDATED) {
    if (sort === SortFilters.NAME) {
      filteredRepos = filteredRepos?.slice().sort((a, b) => (a.name > b.name ? 1 : -1));
    }
    if (sort === SortFilters.STARS) {
      filteredRepos = filteredRepos
        ?.slice()
        .sort((a, b) => a.stargazers_count - b.stargazers_count);
    }
  }
  return filteredRepos ?? [];
}

export function createLanguageMap(repos: UserReposState[]): FilterDropdownOption[] {
  const uniqueLanguages = new Set();
  const langFilterList: FilterDropdownOption[] = [];
  repos.forEach((repo) => {
    if (repo.language && !uniqueLanguages.has(repo.language)) {
      uniqueLanguages.add(repo.language);
      langFilterList.push({ label: repo.language, value: repo.language });
    }
  });
  return langFilterList;
}
