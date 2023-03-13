import { defaultLanguage } from '../components/RepoFilter/data';
import { Repo } from '../types/user-repos-type';

const matchText = (target: string, value: string) =>
  target?.match(new RegExp(value, 'i'));

// Function to filter repos by language
export const repoDataFilteredByLanguage = (repos: Repo[], language: string): Repo[] => {
  let response = repos.slice();
  if (repos && language && language !== defaultLanguage) {
    response = repos.filter((repo: Repo) =>
      matchText(repo?.primaryLanguage?.name, language)
    );
  } else if (language === defaultLanguage) {
    response = repos;
  }
  return response;
};
