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
