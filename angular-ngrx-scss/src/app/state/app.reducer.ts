import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';

import { userReducer } from './user/user.reducer';
import { authReducer } from './auth/auth.reducer';

import { reducer as profileReducer } from './profile/profile.reducer';

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  user: userReducer,
  profile: profileReducer,
};
