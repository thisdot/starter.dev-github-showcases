import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { authReducer } from './auth/auth.reducer';
import { profileReducer } from './profile/profile.reducer';
import { userReducer } from './user/user.reducer';

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  user: userReducer,
  profile: profileReducer,
};
