import { Action, createReducer, on } from '@ngrx/store';
import { UserState } from './user.state';
import {
  fetchUserDataSuccess,
  fetchUserGistsSuccess,
  fetchUserTopReposSuccess,
} from './user.actions';

const initialUserState: UserState = {
  avatar: '',
  bio: '',
  blog: '',
  company: '',
  email: '',
  followers: 0,
  following: 0,
  location: '',
  name: '',
  twitter_username: '',
  username: '',
  type: '',
};

const reducer = createReducer(
  initialUserState,

  on(fetchUserDataSuccess, (state, { userData }) => ({
    ...state,
    ...userData,
  })),
  on(fetchUserGistsSuccess, (state, { gists }) => ({
    ...state,
    gists,
  })),
  on(fetchUserTopReposSuccess, (state, { topRepos }) => ({
    ...state,
    topRepos,
  })),
);

export function userReducer(state: UserState | undefined, action: Action) {
  return reducer(state, action);
}
