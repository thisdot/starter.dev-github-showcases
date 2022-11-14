import { Action, createReducer, on } from '@ngrx/store';
import {
  saveUserToken,
  saveUserTokenFailure,
  saveUserTokenSuccess,
  removeUserToken,
  userTokenExists,
  fetchAuthenticatedUserDataSuccess,
} from './auth.actions';
import { AuthState } from './auth.state';

export const initialState: AuthState = {
  isAuthenticated: false,
  loading: false,
  authUser: {
    avatar: '',
    email: '',
    username: '',
  },
};

const reducer = createReducer(
  initialState,

  on(saveUserToken, (state) => ({
    ...state,
    loading: true,
  })),
  on(saveUserTokenSuccess, (state) => ({
    ...state,
    isAuthenticated: true,
    loading: false,
  })),
  on(saveUserTokenFailure, (state) => ({
    ...state,
    isAuthenticated: false,
    loading: false,
  })),
  on(removeUserToken, (state) => ({
    ...state,
    isAuthenticated: false,
    loading: false,
  })),
  on(userTokenExists, (state) => ({
    ...state,
    isAuthenticated: true,
  })),
  on(
    fetchAuthenticatedUserDataSuccess,
    (state, { userData: { avatar, email, username } }) => ({
      ...state,
      authUser: {
        avatar,
        email,
        username,
      },
    }),
  ),
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return reducer(state, action);
}
