import { Action, createReducer, on } from '@ngrx/store';
import {
  fetchProfileSuccess,
  setSortAndFilterProperties,
} from './profile.actions';
import { ProfileState } from './profile.state';

export const initialState: ProfileState = {};

const reducer = createReducer(
  initialState,

  on(fetchProfileSuccess, (state, { data }) => ({
    ...state,
    ...data,
  })),
  on(setSortAndFilterProperties, (state, { filters: { search } }) => ({
    ...state,
    sortAndFilter: {
      search,
    },
  })),
);

export function profileReducer(
  state: ProfileState | undefined,
  action: Action,
) {
  return reducer(state, action);
}
