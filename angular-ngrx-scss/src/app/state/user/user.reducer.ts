import { Action, createReducer, on } from '@ngrx/store';
import { UserState } from './user.state';
import * as UserActions from './user.actions';

export const userFeatureKey = 'user';

const initialUserState: UserState = {
  avatar: '',
  username: '',
};

const userReducer = createReducer(
  initialUserState,

  on(UserActions.fetchUserDataSuccess, (state, { userData }) => ({
    ...state,
    avatar: userData.avatar_url,
    username: userData.login,
  })),
);

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}
