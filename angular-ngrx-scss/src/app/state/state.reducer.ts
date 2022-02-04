import { Action, createReducer, on } from '@ngrx/store';
import * as StateActions from './state.actions';

export const stateFeatureKey = 'state';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(StateActions.loadStates, state => state),
  on(StateActions.loadStatesSuccess, (state, action) => state),
  on(StateActions.loadStatesFailure, (state, action) => state),

);
