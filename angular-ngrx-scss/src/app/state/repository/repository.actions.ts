import { createAction, props } from '@ngrx/store';

export const fetchRepository = createAction(
  '[Repository API] Fetch Repository',
);

export const fetchRepositorySuccess = createAction(
  '[Repository API] Fetch Repository Success',
  props<{ data: any }>(),
);

export const fetchRepositoryFailure = createAction(
  '[Repository API] Fetch Repository Failure',
  props<{ error: any }>(),
);
