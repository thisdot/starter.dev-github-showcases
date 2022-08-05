import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProfileType } from '../user';
import {
  OrderField,
  ProfileState,
  TypeFilter,
  UserReposState,
} from './profile.state';

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

export const isActiveFilterByType = createSelector(
  selectFilterByType,
  (type) => type !== TypeFilter.All,
);

export const selectFilterByLanguage = createSelector(
  selectProfileState,
  (state: ProfileState) => state.sortAndFilter?.language || TypeFilter.All,
);

export const isActiveFilterByLanguage = createSelector(
  selectFilterByLanguage,
  (language) => language !== TypeFilter.All,
);

export const selectSortFilter = createSelector(
  selectProfileState,
  (state: ProfileState) => state.sortAndFilter?.sort || OrderField.UpdatedAt,
);

export const hasActiveSortAndFilters = createSelector(
  selectFilterBySearch,
  selectFilterByType,
  selectFilterByLanguage,
  selectSortFilter,
  (search, type, language, sort) =>
    !!search ||
    type !== TypeFilter.All ||
    language !== TypeFilter.All ||
    sort !== OrderField.UpdatedAt,
);

export const selectRepos = createSelector(
  selectProfileState,
  selectFilterBySearch,
  selectFilterByType,
  selectFilterByLanguage,
  selectSortFilter,
  (
    state: ProfileState,
    search?: string,
    type?: string,
    language?: string,
    sort?: string,
  ) => {
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
    if (language !== TypeFilter.All) {
      filteredRepos = filteredRepos?.filter(
        (item) => item.language?.toLowerCase() === language,
      );
    }
    if (sort !== OrderField.UpdatedAt) {
      if (sort === OrderField.Name) {
        filteredRepos = filteredRepos
          ?.slice()
          .sort((a, b) => (a.name > b.name ? 1 : -1));
      }
      if (sort === OrderField.Stargazers) {
        filteredRepos = filteredRepos
          ?.slice()
          .sort((a, b) => a.stargazers_count - b.stargazers_count);
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
