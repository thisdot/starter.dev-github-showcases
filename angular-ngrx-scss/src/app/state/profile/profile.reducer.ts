import { Action, createReducer, on } from '@ngrx/store';
import { getUserGistsSuccess } from '../user/user.actions';
import { fetchProfileSuccess } from './profile.actions';
import { ProfileState } from './profile.state';

export const initialState: ProfileState = {};

const reducer = createReducer(
  initialState,

  on(fetchProfileSuccess, (state, { data }) => ({
    ...state,
    ...data,
  })),
  on(getUserGistsSuccess, (state, { userData }) => ({
    ...state,
    gists: userData,
  })),
);

export function profileReducer(
  state: ProfileState | undefined,
  action: Action,
) {
  return reducer(state, action);
}
