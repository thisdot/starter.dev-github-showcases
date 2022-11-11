import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

export const authFeatureKey = 'auth';

export const selectAuthState = createFeatureSelector<AuthState>(authFeatureKey);

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state) => state.isAuthenticated,
);

export const selectAuthUser = createSelector(
  selectAuthState,
  (state) => state.authUser,
);

export const selectAuthUserAvatar = createSelector(
  selectAuthUser,
  (authUser) => authUser.avatar,
);

export const selectAuthUserName = createSelector(
  selectAuthUser,
  (authUser) => authUser.username,
);
