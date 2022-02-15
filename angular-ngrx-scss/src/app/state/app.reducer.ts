import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';

import { reducer } from './user/user.reducer';

export const reducers: ActionReducerMap<AppState> = {
  user: reducer,
};
