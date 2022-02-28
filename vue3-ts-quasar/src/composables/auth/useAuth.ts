import { useToken } from '@/composables';
import { EnvironmentConfig } from '@/config';
import apiHelper from '@/helpers/api';

interface AuthResponse {
  access_token?: string;
  bearer: string;
  scope: string;
}

interface SignoutRepsonse {
  message: string;
}

//
const { getRequest, postRequest } = apiHelper();

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default () => {
  const { saveAuthToken, removeAuthToken } = useToken();

  /**
   * Performs initial sign in to Github to retrieve authentication code.
   */
  const login = () => {
    console.log('logging in');
    removeAuthToken();
    window.location.href = `${EnvironmentConfig.API_URL}/api/auth/signin?redirect_url=${EnvironmentConfig.REDIRECT_URL}`;
  };

  /**
   * Returns the access_token and stores it in a cookie.
   * Once the user accepts Github authentication, front-end will poll
   * for the token.
   */
  const getToken = async () => {
    const apiResponse = await getRequest<AuthResponse>(
      `${EnvironmentConfig.API_URL}/api/auth/token`,
      {
        withCredentials: true,
      },
    );

    if (apiResponse?.access_token) {
      saveAuthToken(apiResponse.access_token);
    }

    return apiResponse;
  };

  const signOut = () => {
    removeAuthToken();
    return postRequest<SignoutRepsonse>(
      `${EnvironmentConfig.API_URL}/api/auth/signout`,
      null,
    );
  };

  return { getToken, login, signOut };
};
