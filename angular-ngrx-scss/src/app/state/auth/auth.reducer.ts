import { Action, createReducer, on } from '@ngrx/store';
import { startSignIn, signInSuccess, signInFailure } from './auth.actions';
import { AuthState } from './auth.state';

export const initialState: AuthState = {
  isAuthenticated: false,
};

const reducer = createReducer(
  initialState,

  on(startSignIn, (state) => state),
  on(signInSuccess, (state, action) => ({
    ...state,
    isAuthenticated: true,
  })),
  on(signInFailure, (state, action) => ({
    ...state,
    isAuthenticated: false,
  })),
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
