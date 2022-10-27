import { LanguageFilter } from '../repo-filters/types';
import type { Repo } from './types';

type LanguageMap = { [key: string]: string };

export function getLanguages(repos: Repo[]): LanguageFilter[] {
  const initialValue: LanguageMap = { all: 'All' };

  const languageMap = repos.reduce(
    (acc: LanguageMap, repo: Repo) =>
      repo.primaryLanguage ? { ...acc, [repo.primaryLanguage.name.toLowerCase()]: repo.primaryLanguage.name } : acc,
    initialValue
  );

  return Object.entries(languageMap).map(([key, value]) => ({
    value: key,
    label: value,
  }));
}
