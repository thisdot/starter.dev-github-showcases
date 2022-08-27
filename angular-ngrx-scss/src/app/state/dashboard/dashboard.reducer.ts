import { Action, createReducer } from '@ngrx/store';
import { DashboardState } from './dashboard.state';

export const initialState: DashboardState = {
  temp: '',
};

const reducer = createReducer(initialState);

export function dashboardReducer(
  state: DashboardState | undefined,
  action: Action,
) {
  return reducer(state, action);
}
