import { createAction, props } from '@ngrx/store';
import { AuthUserData } from './auth.state';

export const signInUser = createAction('[Auth API] Start sign in process');
export const signOutUser = createAction('[Auth API] Start sign out process');

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

export const authUserSaved = createAction(
  '[Auth API] Authenticated user data already saved',
);

export const fetchAuthenticatedUserDataSuccess = createAction(
  '[Auth API] Successfully fetched authenticated user data',
  props<{ userData: AuthUserData }>(),
);

export const fetchAuthenticatedUserDataFailure = createAction(
  '[Auth API] Unable the fetch authenticated user data',
  props<{ error: object }>(),
);
