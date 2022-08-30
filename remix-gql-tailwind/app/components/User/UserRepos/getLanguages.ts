import type { Repo } from './types';

type LanguageMap = { [key: string]: string };

export function getLanguages(repos: Repo[]) {
  const initialValue: LanguageMap = { all: 'All' };

  const languageMap = repos.reduce(
    (acc: LanguageMap, repo: Repo) =>
      repo.language
        ? { ...acc, [repo.language.toLowerCase()]: repo.language }
        : acc,
    initialValue
  );

  return Object.entries(languageMap).map(([key, value]) => ({
    value: key,
    label: value,
  }));
}
