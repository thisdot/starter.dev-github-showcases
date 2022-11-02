import { TypeFilter } from '../repo-filters/types';
import { UserRepo } from './types';

// Function to filter repos by search
export const repoDataFilteredBySearch = (search: string, repos: UserRepo[]): UserRepo[] => {
  if (repos.length < 1) {
    return repos;
  }
  return repos.reduce((acc: UserRepo[], repo: UserRepo): UserRepo[] => {
    if (search !== '' && !repo?.name?.match(new RegExp(search, 'ig'))) {
      return acc;
    }

    return [...acc, repo];
  }, []);
};

export const repoDataFilteredByType = (filterType: string, repos: UserRepo[]): UserRepo[] => {
  let response = repos.slice();
  if (filterType === TypeFilter.FORKS) {
    console.log('====================================');
    console.log(response, TypeFilter.FORKS);
    console.log('====================================');
    response = repos.filter((repo) => repo.isFork);
  } else if (filterType === TypeFilter.ARCHIVED) {
    response = repos.filter((repo) => repo.isArchived);
  } else if (filterType === TypeFilter.ALL) {
    response = repos;
  }
  return response;
};
