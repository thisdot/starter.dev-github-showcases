
import { Repo } from '../types/user-repos-type';

// Function to filter repos by search
export const repoDataFilteredBySearch = (repos: Repo[], search: string) => {
  if (repos.length < 1) {
    return repos;
  }
  return repos.reduce((acc: Repo[], repo: Repo) => {
    if (search !== '' && !repo?.name?.match(new RegExp(search, 'ig'))) {
      return acc;
    }

    return [...acc, repo];
  }, []);
};
