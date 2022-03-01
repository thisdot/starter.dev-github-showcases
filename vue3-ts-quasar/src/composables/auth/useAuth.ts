import { useToken } from '@/composables';
import { EnvironmentConfig } from '@/config';
import { useApi } from '@/helpers/useApi';

interface AuthResponse {
  access_token?: string;
  bearer: string;
  scope: string;
}

interface SignoutResponse {
  message: string;
}

//
const { getRequest, postRequest } = useApi();

interface UseAuth {
  getToken: () => Promise<AuthResponse>;
  login: () => void;
  signOut: () => Promise<SignoutResponse>;
}

export const useAuth = (): UseAuth => {
  const { saveAuthToken, removeAuthToken } = useToken();

  /**
   * Performs initial sign in to Github to retrieve authentication code.
   */
  const login = () => {
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
    return postRequest<SignoutResponse>(
      `${EnvironmentConfig.API_URL}/api/auth/signout`,
      null,
      {
        withCredentials: true,
      },
    );
  };

  return { getToken, login, signOut };
};
