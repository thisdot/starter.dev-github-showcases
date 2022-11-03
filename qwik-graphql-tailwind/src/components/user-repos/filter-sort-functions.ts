import { RepositoryOrderField } from '../repo-filters/types';
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

const getTime = (time: string) => new Date(time).getTime();

// Function to sort filtered repos
export const sortedRepoData = (sortByData: string, repos: UserRepo[]): UserRepo[] => {
  const response = repos.slice(); //need because repos.value is a read only and can't bemodified.
  if (sortByData === RepositoryOrderField.Name) {
    response.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));
  } else if (sortByData === RepositoryOrderField.Stargazers) {
    response.sort((a, b) => (b.stargazerCount > a.stargazerCount ? 1 : -1));
  } else {
    response.sort((a, b) => (getTime(b.updatedAt) - getTime(a.updatedAt) ? 1 : -1));
  }
  return response;
};
