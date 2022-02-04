import { Action, createReducer, on } from '@ngrx/store';
import * as NavActions from './nav.actions';

export const navFeatureKey = 'nav';

export interface State {

}

export const initialState: State = {

};

export const reducer = createReducer(
  initialState,

  on(NavActions.loadNavs, state => state),

);
