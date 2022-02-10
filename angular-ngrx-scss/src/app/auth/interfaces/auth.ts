export interface SignInResponse {
  redirectUrl: string;
}
export interface AuthResponse {
  access_token: string;
  bearer: string;
  scope: string;
}

export interface SignOutResponse {
  message: string;
}
