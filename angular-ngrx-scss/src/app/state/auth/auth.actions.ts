import { createAction, props } from '@ngrx/store';

export const startSignIn = createAction('[Auth API] Start sign in process');
export const signOut = createAction('[Auth API] Sign out Process');

export const loadUserToken = createAction('[Auth API] Load user token');
export const removeUserToken = createAction(
  '[Auth API] Remove user token',
  props<{ isAuthenticated: boolean }>(),
);

export const loadUserTokenSuccess = createAction(
  '[Auth API] User token successfully loaded',
  props<{ isAuthenticated: boolean }>(),
);

export const loadUserTokenFailure = createAction(
  '[Auth API] Failed to load user token',
  props<{ error: object }>(),
);
