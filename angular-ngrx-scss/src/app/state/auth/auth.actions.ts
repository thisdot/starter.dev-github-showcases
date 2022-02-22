import { createAction, props } from '@ngrx/store';

export const startSignIn = createAction('[Auth API] Start sign in process');

export const loadUserToken = createAction('[Auth API] Load user token');

export const loadUserTokenSuccess = createAction(
  '[Auth API] User token successfully loaded',
  props<{ isAuthenticated: boolean }>(),
);

export const loadUserTokenFailure = createAction(
  '[Auth API] Failed to load user token',
  props<{ error: any }>(),
);
