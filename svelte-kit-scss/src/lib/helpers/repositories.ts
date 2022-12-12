import type { Repository } from '$lib/interfaces';
import type { FilterDropdownOption } from '../components/shared/FilterDropdown/filter-option';
import { LanguageFilters, RepositorySortFilters, TypeFilters } from '../enums';

// todo: refactor
export function filterReposUtil<T extends Repository>(
  filteredRepos: T[],
  search?: string,
  type?: string,
  language?: string,
  sort?: string
): T[] {
  if (search) {
    filteredRepos = filteredRepos?.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (type !== TypeFilters.ALL) {
    if (type === TypeFilters.ARCHIVED) {
      filteredRepos = filteredRepos?.filter((item) => item.archived);
    }
    if (type === TypeFilters.FORKED) {
      filteredRepos = filteredRepos?.filter((item) => item.fork);
    }
  }

  if (language !== LanguageFilters.ALL) {
    filteredRepos = filteredRepos?.filter(
      (item) => item.language?.toLowerCase() === language?.toLowerCase()
    );
  }

  if (sort !== RepositorySortFilters.UPDATED) {
    if (sort === RepositorySortFilters.NAME) {
      filteredRepos = filteredRepos?.slice().sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sort === RepositorySortFilters.STARS) {
      filteredRepos = filteredRepos?.slice().sort((a, b) => a.stargazersCount - b.stargazersCount);
    }
  }
  return filteredRepos ?? [];
}

export function createLanguageMap(repos: Repository[]): FilterDropdownOption[] {
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
