import { AuthState } from './auth';
import { ProfileState } from './profile';
import { RepositoryState } from './repository';
import { UserState } from './user';

export interface AppState {
  auth: AuthState;
  profile: ProfileState;
  repository: RepositoryState;
  user: UserState;
}
