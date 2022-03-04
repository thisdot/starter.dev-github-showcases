import { Action, createReducer, on } from '@ngrx/store';
import { UserState } from './user.state';
import { fetchUserDataSuccess } from './user.actions';

const initialUserState: UserState = {
  avatar: '',
  username: '',
};

const reducer = createReducer(
  initialUserState,

  on(fetchUserDataSuccess, (state, { userData }) => ({
    ...state,
    avatar: userData.avatar,
    username: userData.username,
  })),
);

export function userReducer(state: UserState | undefined, action: Action) {
  return reducer(state, action);
}
