import { createAction, props } from '@ngrx/store';

export const loadStates = createAction(
  '[State] Load States'
);

export const loadStatesSuccess = createAction(
  '[State] Load States Success',
  props<{ data: any }>()
);

export const loadStatesFailure = createAction(
  '[State] Load States Failure',
  props<{ error: any }>()
);
