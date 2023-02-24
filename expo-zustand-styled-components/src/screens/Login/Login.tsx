import {useEffect } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';

import { ButtonStyled, ButtonTextStyled, SafeAreaViewStyled } from './Login.styles';
import { RootStackScreenProps } from '../../../types';
import { AUTH_RESOURCE } from '../../utils/constants';
import { authStore } from '../../stores/auth';

WebBrowser.maybeCompleteAuthSession();

const Login = ({ navigation }: RootStackScreenProps<'AuthNavigator'>) => {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: 'CLIENT_ID',
      scopes: ['identity'],
      redirectUri: makeRedirectUri({
        scheme: 'com.starter.dev'
      }),
    },
    AUTH_RESOURCE
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
      authStore.setState({ token: code });
      navigation.navigate("AppNavigator", {screen: "Home"});
    }
  }, [response]);

  return (
    <SafeAreaViewStyled>
      <ButtonStyled disabled={!request} onPress={() => promptAsync()}>
        <ButtonTextStyled>Sign in with GitHub</ButtonTextStyled>
      </ButtonStyled>
    </SafeAreaViewStyled>
  );
};

export default Login;
