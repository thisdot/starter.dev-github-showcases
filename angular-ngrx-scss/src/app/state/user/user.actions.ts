import { createAction, props } from '@ngrx/store';
import { UserApiResponse } from './user.state';

export const fetchUserData = createAction('[User API] User data requested');

export const fetchUserDataSuccess = createAction(
  '[User API] User Data successfully received',
  props<{ userData: UserApiResponse }>(),
);

export const fetchUserDataError = createAction(
  '[User API] User Data fetch unsuccessful',
  props<{ error: object }>(),
);
