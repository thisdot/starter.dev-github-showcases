import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from './user.reducer';
import { UserState } from './user.state';

export const selectUserState = createFeatureSelector<UserState>(
  fromUser.userFeatureKey,
);
