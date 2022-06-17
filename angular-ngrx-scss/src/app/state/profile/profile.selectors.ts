import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProfileState } from './profile.state';

export const profileFeatureKey = 'profile';
export const selectProfileState =
  createFeatureSelector<ProfileState>(profileFeatureKey);

export const selectProfile = createSelector(
  selectProfileState,
  (state: ProfileState) => state,
);
