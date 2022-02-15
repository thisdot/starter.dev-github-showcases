import { createAction, props } from '@ngrx/store';
import { ProfileState } from './profile.state';

export const fetchProfile = createAction(
  '[Profile] Fetch Profile',
  props<{ username: string }>(),
);

export const fetchProfileSuccess = createAction(
  '[Profile] Fetch Profile Success',
  props<{ data: ProfileState }>(),
);

export const fetchProfileFailure = createAction(
  '[Profile] Fetch Profile Failure',
  props<{ error: object }>(),
);
