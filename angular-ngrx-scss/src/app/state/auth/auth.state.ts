export interface AuthState {
  isAuthenticated: boolean;
  loading: boolean;
  authUser: AuthUserData;
}

export interface AuthUserData {
  avatar: string;
  email: string;
  username: string;
}
