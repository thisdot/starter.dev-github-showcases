import { defaultLanguage } from '../components/RepoFilter/data';
import { language } from '../components/RepoFilter/RepoFilter.store';
import { Repo } from '~/types/user-repo-type';

const matchText = (target: string, value: string) =>
  target?.match(new RegExp(value, 'i'));

// Function to filter repos by language
export const repoDataFilteredByLanguage = (repos: Repo[]): Repo[] => {
  let response = repos.slice();
  if (repos && language() && language() !== defaultLanguage) {
    response = repos.filter((repo: Repo) =>
      matchText(repo?.primaryLanguage?.name, language())
    );
  } else if (language() === defaultLanguage) {
    response = repos;
  }
  return response;
};
