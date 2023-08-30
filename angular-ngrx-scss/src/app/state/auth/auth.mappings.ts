import { UserApiResponse } from '../user';
import { AuthUserData } from './auth.state';

export function userApiToAuthUserData(
  apiResponse: UserApiResponse,
): AuthUserData {
  return {
    avatar: apiResponse.avatar_url,
    email: apiResponse.email,
    username: apiResponse.login,
  };
}
