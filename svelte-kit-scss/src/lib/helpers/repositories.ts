import type { UserReposApiResponse, UserReposState } from '../interfaces';
import type { FilterDropdownOption } from '../components/shared/FilterDropdown/filter-option';
import { LanguageFilters, TypeFilters } from '../enums';

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

export function filterRepoUtil(
  searchInput: string,
  type: FilterDropdownOption<string>,
  language: FilterDropdownOption<string>
) {
  return (repo: UserReposState) => {
    const searchTermCondition = searchInput
      ? repo.name.toLowerCase().includes(searchInput.toLowerCase())
      : true;
    let typeCondition = false;
    let languageCondition: boolean;

    if (type?.value === TypeFilters.ALL) {
      typeCondition = true;
    } else if (type?.value === TypeFilters.ARCHIVED) {
      typeCondition = Boolean(repo.archived);
    } else if (type?.value === TypeFilters.FORKED) {
      typeCondition = Boolean(repo.fork);
    }

    if (language?.value === LanguageFilters.ALL) {
      languageCondition = true;
    } else {
      languageCondition = repo.language?.toLowerCase() === language?.value.toLowerCase();
    }

    return searchTermCondition && typeCondition && languageCondition;
  };
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
