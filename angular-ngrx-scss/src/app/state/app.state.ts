import { AuthState } from './auth';
// import { DashboardState } from './dashboard';
import { ProfileState } from './profile';
import { RepositoryState } from './repository';
import { UserState } from './user';

export interface AppState {
  auth: AuthState;
  // dashboard: DashboardState;
  profile: ProfileState;
  repository: RepositoryState;
  user: UserState;
}
