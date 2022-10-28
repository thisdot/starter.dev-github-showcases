import { LanguageFilter } from '../repo-filters/types';
import type { UserRepo } from './types';

type LanguageMap = { [key: string]: string };

export function getLanguages(repos: UserRepo[]): LanguageFilter[] {
  const initialValue: LanguageMap = { all: 'All' };

  const languageMap = repos.reduce(
    (acc: LanguageMap, repo: UserRepo) =>
      repo.primaryLanguage ? { ...acc, [repo.primaryLanguage.name.toLowerCase()]: repo.primaryLanguage.name } : acc,
    initialValue
  );

  return Object.entries(languageMap).map(([key, value]) => ({
    value: key,
    label: value,
  }));
}
