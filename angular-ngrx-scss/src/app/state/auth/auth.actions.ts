import { createAction, props } from '@ngrx/store';

export const startSignIn = createAction('[Auth API] Start sign in process');
export const signOut = createAction('[Auth API] Sign out Process');

export const saveUserToken = createAction('[Auth API] Save user token');
export const removeUserToken = createAction(
  '[Auth API] Remove user token',
  props<{ isAuthenticated: boolean }>(),
);

export const saveUserTokenSuccess = createAction(
  '[Auth API] User token successfully saved',
  props<{ isAuthenticated: boolean }>(),
);

export const saveUserTokenFailure = createAction(
  '[Auth API] Failed to save user token',
  props<{ error: object }>(),
);

export const userTokenExists = createAction(
  '[Auth API] Verified user token exists',
  props<{ isAuthenticated: boolean }>(),
);
