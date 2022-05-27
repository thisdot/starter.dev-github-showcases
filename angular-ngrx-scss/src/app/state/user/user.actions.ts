import { createAction, props } from '@ngrx/store';
import { UserGistsState } from '../profile/profile.state';
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

export const getUserGists = createAction(
  '[User API] User gists requested',
  props<{ username: string }>(),
);

export const getUserGistsSuccess = createAction(
  '[User API] User gists successfully received',
  props<{ userData: UserGistsState[] }>(),
);

export const getUserGistsError = createAction(
  '[User API] User gists unsuccessful',
  props<{ error: object }>(),
);
