import { createFeatureSelector, createSelector } from '@ngrx/store';
import { filter, pipe, scan } from 'rxjs';
import { ProfileType } from '../user';
import { ProfileState, TypeFilter, UserReposState } from './profile.state';

export const profileFeatureKey = 'profile';
export const selectProfileState =
  createFeatureSelector<ProfileState>(profileFeatureKey);

export const selectProfile = createSelector(
  selectProfileState,
  (state: ProfileState) => state,
);

export const isOrgProfile = createSelector(
  selectProfile,
  (state: ProfileState) => state?.user?.type === ProfileType.Organization,
);

export const selectSortAndFilter = createSelector(
  selectProfileState,
  (state: ProfileState) => state.sortAndFilter,
);

export const selectFilterBySearch = createSelector(
  selectProfileState,
  (state: ProfileState) => state.sortAndFilter?.search,
);

export const selectFilterByType = createSelector(
  selectProfileState,
  (state: ProfileState) => state.sortAndFilter?.type || TypeFilter.All,
);

export const selectFilterByLanguage = createSelector(
  selectProfileState,
  (state: ProfileState) => state.sortAndFilter?.language || TypeFilter.All,
);

export const hasActiveSortAndFilters = createSelector(
  selectFilterBySearch,
  selectFilterByType,
  (search, type) => !!search || type !== TypeFilter.All,
);

export const selectRepos = createSelector(
  selectProfileState,
  selectFilterBySearch,
  selectFilterByType,
  (state: ProfileState, search?: string, type?: string) => {
    let filteredRepos = state.repos;
    if (search) {
      filteredRepos = filteredRepos?.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }
    if (type !== TypeFilter.All) {
      if (type === TypeFilter.Archived) {
        filteredRepos = filteredRepos?.filter((item) => Boolean(item.archived));
      }
      if (type === TypeFilter.Forked) {
        filteredRepos = filteredRepos?.filter((item) => Boolean(item.fork));
      }
    }
    return filteredRepos ?? [];
  },
);

export const selectReposCount = createSelector(
  selectRepos,
  (repos?: UserReposState[]) => repos?.length,
);

type LanguageMap = { [key: string]: string };

export const filteredLanguages = createSelector(
  selectRepos,
  (repos?: UserReposState[]) => {
    const initialValue: LanguageMap = { all: 'All' };

    if (repos) {
      const languageMap = repos.reduce(
        (acc: LanguageMap, repo: UserReposState) =>
          repo.language
            ? { ...acc, [repo.language.toLowerCase()]: repo.language }
            : acc,
        initialValue,
      );

      return Object.entries(languageMap).map(([key, value]) => ({
        value: key,
        label: value,
      }));
    } else return [{ value: 'All', label: 'All' }];
  },
);
