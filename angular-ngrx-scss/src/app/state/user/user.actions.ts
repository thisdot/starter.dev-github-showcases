import { createAction, props } from '@ngrx/store';
import { UserGistsState, UserReposState } from '../profile/profile.state';
import { UserState } from './user.state';

export const fetchUserData = createAction('[User API] User data requested');

export const fetchUserDataSuccess = createAction(
  '[User API] User Data successfully received',
  props<{ userData: UserState }>(),
);

export const fetchUserDataError = createAction(
  '[User API] User Data fetch unsuccessful',
  props<{ error: object }>(),
);

export const fetchUserGists = createAction(
  '[User API] User gists requested',
  props<{ username: string }>(),
);

export const fetchUserTopRepos = createAction(
  '[User API] User top repos requested',
  props<{ username: string }>(),
);

export const fetchUserTopReposSuccess = createAction(
  '[User API] User top repos successfully received',
  props<{ topRepos: UserReposState[] }>(),
);

export const fetchUserTopReposError = createAction(
  '[User API] User top repos fetch unsuccessful',
  props<{ error: object }>(),
);

export const fetchUserGistsSuccess = createAction(
  '[User API] User gists successfully received',
  props<{ gists: UserGistsState[] }>(),
);

export const fetchUserGistsError = createAction(
  '[User API] User gists fetch unsuccessful',
  props<{ error: object }>(),
);
