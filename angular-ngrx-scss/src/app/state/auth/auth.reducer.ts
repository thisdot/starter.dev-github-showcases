import { Action, createReducer, on } from '@ngrx/store';
import { loadUserToken } from '.';
import { loadUserTokenFailure, loadUserTokenSuccess } from './auth.actions';
import { AuthState } from './auth.state';

export const initialState: AuthState = {
  isAuthenticated: false,
  loading: false,
};

const reducer = createReducer(
  initialState,

  on(loadUserToken, (state) => ({
    ...state,
    loading: true,
  })),
  on(loadUserTokenSuccess, (state) => ({
    ...state,
    isAuthenticated: true,
    loading: false,
  })),
  on(loadUserTokenFailure, (state) => ({
    ...state,
    isAuthenticated: false,
    loading: false,
  })),
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
