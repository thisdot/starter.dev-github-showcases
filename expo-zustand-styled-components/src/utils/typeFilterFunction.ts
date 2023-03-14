import { FILTER_TYPE_OPTIONS } from '../components/RepoFilter/data';
import { FilterType } from '../hooks/stores/useRepoFilterStore';
import { Repo } from '../types/user-repos-type';

export const repoDataFilteredByType = (repos: Repo[], filterType: FilterType): Repo[] => {
  let response = repos.slice();
  if (filterType === FILTER_TYPE_OPTIONS.forks) {
    response = repos.filter((repo: Repo) => repo.isFork);
  } else if (filterType === FILTER_TYPE_OPTIONS.archived) {
    response = repos.filter((repo: Repo) => repo.isArchived);
  } else if (filterType === FILTER_TYPE_OPTIONS.default) {
    response = repos;
  }
  return response;
};
