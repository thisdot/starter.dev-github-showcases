import { Action, createReducer, on } from '@ngrx/store';
import { fetchProfileSuccess } from './profile.actions';
import { ProfileState } from './profile.state';

export const initialState: ProfileState = {};

const reducer = createReducer(
  initialState,

  on(fetchProfileSuccess, (state, { data }) => ({
    ...state,
    ...data,
  })),
);

export function profileReducer(
  state: ProfileState | undefined,
  action: Action,
) {
  return reducer(state, action);
}
