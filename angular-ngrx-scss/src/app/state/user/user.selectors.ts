import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.state';

export const userFeatureKey = 'user';
export const selectUserState = createFeatureSelector<UserState>(userFeatureKey);

export const selectUserAvatar = createSelector(
  selectUserState,
  (state: UserState) => state.avatar,
);

export const selectUserLoginName = createSelector(
  selectUserState,
  (state: UserState) => state.username,
);
