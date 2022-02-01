export interface LoginResponse {
  redirectUrl: string;
}

export interface AuthSuccessResponse {
  access_token: string;
  scope: string;
  token_type: string;
}
