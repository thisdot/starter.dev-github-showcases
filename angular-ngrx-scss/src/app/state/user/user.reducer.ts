import { Action, createReducer, on } from '@ngrx/store';
import { UserState } from './user.state';
import * as UserActions from './user.actions';

export const userFeatureKey = 'user';

const initialUserState: UserState = {
  isLoggedIn: false,
};

const userReducer = createReducer(
  initialUserState,

  on(UserActions.userAuthenticated, (state) => ({
    ...state,
    isLoggedIn: true,
  })),
);

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}
