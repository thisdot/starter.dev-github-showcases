import { FILTER_TYPE_OPTIONS } from '../components/RepoFilter/data';
import { filterType } from '../components/RepoFilter/RepoFilter.store';

export const repoDataFilteredByType = (repos) => {
  let response = repos.slice();
  if (filterType() === FILTER_TYPE_OPTIONS.forks) {
    response = repos.filter((repo) => repo.isFork);
  } else if (filterType() === FILTER_TYPE_OPTIONS.archived) {
    response = repos.filter((repo) => repo.isArchived);
  } else if (filterType() === FILTER_TYPE_OPTIONS.default) {
    response = repos;
  }
  return response;
};
