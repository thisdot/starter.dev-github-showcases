import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProfileType } from '../user';
import { ProfileState, UserReposState } from './profile.state';

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

export const hasActiveSortAndFilters = createSelector(
  selectFilterBySearch,
  Boolean,
);

export const selectRepos = createSelector(
  selectProfileState,
  selectFilterBySearch,
  (state: ProfileState, search?: string) => {
    if (search) {
      return state.repos?.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    }
    return state.repos ?? [];
  },
);

export const selectReposCount = createSelector(
  selectRepos,
  (repos?: UserReposState[]) => repos?.length ?? 0,
);
