import { Repo } from '~/types/user-repo-type';

export function getLanguages(repos: Repo[]) {
  const languages = new Set(['All']);

  repos.forEach((repo: Repo) => {
    if (repo.primaryLanguage && repo.primaryLanguage.name) {
      languages.add(repo.primaryLanguage.name);
    }
  });

  return [...languages].sort();
}
