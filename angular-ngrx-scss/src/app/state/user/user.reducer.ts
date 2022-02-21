import { Action, createReducer, on } from '@ngrx/store';
import { UserState } from './user.state';
import { fetchUserDataSuccess } from './user.actions';

const initialUserState: UserState = {
  avatar: '',
  username: '',
  fullName: '',
  followers: 0,
  following: 0,
  company: '',
  location: '',
  blog_link: '',
  organizations: '',
};

const userReducer = createReducer(
  initialUserState,

  on(fetchUserDataSuccess, (state, { userData }) => ({
    ...state,
    avatar: userData.avatar,
    username: userData.username,
    fullName: userData.fullName,
    followers: userData.followers,
    following: userData.following,
    stars: userData.stars,
    company_info: userData.company,
    location: userData.location,
    blog_link: userData.blog_link,
    organizations: userData.organizations,
  })),
);

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}
