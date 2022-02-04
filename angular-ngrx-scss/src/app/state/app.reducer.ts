import {
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
} from '@ngrx/store';
import { AppState } from './app.state';

import * as UserReducer from './user/user.reducer';

export const reducers: ActionReducerMap<AppState> = {
  user: UserReducer.reducer,
};
