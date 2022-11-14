import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';
import { authReducer } from './auth/auth.reducer';
import { profileReducer } from './profile/profile.reducer';
import { repositoryReducer } from './repository/repository.reducer';
import { userReducer } from './user/user.reducer';

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  profile: profileReducer,
  repository: repositoryReducer,
  user: userReducer,
};
