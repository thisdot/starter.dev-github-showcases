import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProfileType } from '../user';
import { ProfileState } from './profile.state';

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
