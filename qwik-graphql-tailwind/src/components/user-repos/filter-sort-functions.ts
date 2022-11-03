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

const matchText = (target: any, value: string): boolean => target?.match(new RegExp(value, 'i'));

// Function to filter repos by language
export const repoDataFilteredByLanguage = (language: string, defaultLanguage: string, repos: UserRepo[]) => {
  let response = repos.slice();
  if (repos && language && language !== defaultLanguage) {
    response = repos.filter((repo) => matchText(repo?.primaryLanguage?.name, language));
  } else if (language === defaultLanguage) {
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
