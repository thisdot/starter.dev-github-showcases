import { FILTER_TYPE_OPTIONS } from '../components/RepoFilter/data';
import { filterType } from '../components/RepoFilter/RepoFilter.store';
import { Repo } from '~/types/user-repo-type';

export const repoDataFilteredByType = (repos: Repo[]): Repo[] => {
  let response = repos.slice();
  if (filterType() === FILTER_TYPE_OPTIONS.forks) {
    response = repos.filter((repo: Repo) => repo.isFork);
  } else if (filterType() === FILTER_TYPE_OPTIONS.archived) {
    response = repos.filter((repo: Repo) => repo.isArchived);
  } else if (filterType() === FILTER_TYPE_OPTIONS.default) {
    response = repos;
  }
  return response;
};
