import { createAction, props } from '@ngrx/store';
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
