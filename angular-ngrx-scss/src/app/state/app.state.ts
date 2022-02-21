import { AuthState } from './auth';
import { UserState } from './user';

export interface AppState {
  auth: AuthState;
  user: UserState;
}
