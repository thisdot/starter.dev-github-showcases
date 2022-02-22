import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

export const authFeatureKey = 'auth';

export const selectAuthState = createFeatureSelector<AuthState>(authFeatureKey);

export const selectIsAuthenticated = createSelector(
  selectAuthState,
  (state: AuthState) => state.isAuthenticated,
);
