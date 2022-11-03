import { TypeFilter, RepositoryOrderField, DefaultLanguage } from '../repo-filters/types';
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
    response.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortByData === RepositoryOrderField.Stargazers) {
    response.sort((a, b) => (b.stargazerCount > a.stargazerCount ? 1 : -1));
  } else {
    response.sort((a, b) => getTime(b.updatedAt) - getTime(a.updatedAt));
  }
  return response;
};

const matchText = (target: any, value: string): boolean => target?.match(new RegExp(value, 'i'));

// Function to filter repos by language
export const repoDataFilteredByLanguage = (language: string, repos: UserRepo[]) => {
  let response = repos.slice();
  if (repos && language && language !== DefaultLanguage.default) {
    response = repos.filter((repo) => matchText(repo?.primaryLanguage?.name, language));
  } else if (language === DefaultLanguage.default) {
    response = repos;
  }
  return response;
};

export const repoDataFilteredByType = (filterType: string, repos: UserRepo[]): UserRepo[] => {
  let response = repos.slice();
  if (filterType === TypeFilter.FORKS) {
    response = repos.filter((repo) => repo.isFork);
  } else if (filterType === TypeFilter.ARCHIVED) {
    response = repos.filter((repo) => repo.isArchived);
  } else if (filterType === TypeFilter.ALL) {
    response = repos;
  }
  return response;
};
