import { defaultLanguage } from '../components/RepoFilter/data';
import { language } from '../components/RepoFilter/RepoFilter.store';

const matchText = (target, value) => target?.match(new RegExp(value, 'i'));

// Function to filter repos by language
export const repoDataFilteredByLanguage = (repos) => {
  let response = repos.slice();
  if (repos && language() && language() !== defaultLanguage) {
    response = repos.filter((repo) =>
      matchText(repo?.primaryLanguage?.name, language())
    );
  } else if (language() === defaultLanguage) {
    response = repos;
  }
  return response;
};
