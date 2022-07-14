import { createFeatureSelector, createSelector } from '@ngrx/store';
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
  (state: ProfileState) => state.sortAndFilter?.type,
);

export const hasActiveSortAndFilters = createSelector(
  selectFilterBySearch,
  selectFilterByType,
  (search, type) => !!search || !!type,
);

export const selectRepos = createSelector(
  selectProfileState,
  selectFilterBySearch,
  selectFilterByType,
  (state: ProfileState, search?: string, type?: string) => {
    const repos = state.repos;
    console.log(search);
    console.log(type);
    if (search) {
      repos?.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }
    if (type !== TypeFilter.All) {
      if (type === TypeFilter.Archived) {
        console.log('si');
        return repos?.filter((item) => item.archived);
      }
      if (type === TypeFilter.Forked) {
        repos?.filter((item) => item.fork);
      }
    }
    return repos ?? [];
  },
);

export const selectReposCount = createSelector(
  selectRepos,
  (repos?: UserReposState[]) => repos?.length ?? 0,
);
