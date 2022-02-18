import { Action, createReducer, on } from '@ngrx/store';
import { fetchProfileSuccess } from './profile.actions';
import { ProfileState } from './profile.state';

export const initialState: ProfileState = {};

const profileReducer = createReducer(
  initialState,

  on(fetchProfileSuccess, (state, { data }) => ({
    ...state,
    ...data,
  })),
);

export function reducer(state: ProfileState | undefined, action: Action) {
  return profileReducer(state, action);
}
