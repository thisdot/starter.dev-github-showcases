import { useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';
import { CLIENT_ID, REDIRECT_URL } from '@env';

import { RootStackScreenProps } from '../../../types';

import { AUTH_PAYLOAD } from '../../utils/constants';
import { authStore } from '../../stores/auth';

import { SafeAreaViewStyled } from './Login.styles';
import Button from '../../components/Button';

WebBrowser.maybeCompleteAuthSession();

const Login = ({ navigation }: RootStackScreenProps<'AuthNavigator'>) => {
  const { token, isLoading, getToken } = authStore();
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: CLIENT_ID,
      scopes: ['identity', 'repo', 'gist'],
      redirectUri: makeRedirectUri({
        scheme: REDIRECT_URL,
      }),
    },
    AUTH_PAYLOAD
  );

  useEffect(() => {
    const call = async (code: string) => await getToken(code);
    if (response?.type === 'success') {
      call(response.params.code);
    }
  }, [response]);

  useEffect(() => {
    if (token) {
      navigation.navigate('AppNavigator', { screen: 'Home' });
    }
  }, [token]);

  return (
    <SafeAreaViewStyled>
      <Button
        primary
        disabled={!request}
        loadingText="Loging in..."
        isLoading={isLoading}
        title="Sign in with GitHub"
        onPress={() => promptAsync()}
      />
    </SafeAreaViewStyled>
  );
};

export default Login;
