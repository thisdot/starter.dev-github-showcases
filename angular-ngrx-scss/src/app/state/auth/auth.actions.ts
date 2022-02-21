import { createAction, props } from '@ngrx/store';

export const startSignIn = createAction('[Auth] Start sign in process');

export const signInSuccess = createAction(
  '[Auth] Sign in Success',
  props<{ loggedIn: boolean }>(),
);

export const signInFailure = createAction(
  '[Auth] Sign in Failure',
  props<{ error: any }>(),
);
