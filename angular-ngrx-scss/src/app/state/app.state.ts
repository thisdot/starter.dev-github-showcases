import { AuthState } from './auth';
import { ProfileState } from './profile/profile.state';
import { UserState } from './user';
import { RepoState } from './repository';

export interface AppState {
  auth: AuthState;
  user: UserState;
  profile: ProfileState;
  repo: RepoState;
}
