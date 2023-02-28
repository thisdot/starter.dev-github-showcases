/* eslint-disable no-console */
import { useEffect } from 'react';
import { useURL, openURL } from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import { REDIRECT_URL } from '@env';

import { RootStackScreenProps } from '../../../types';
import { SIGN_IN_BASE_URL, GET_TOKEN_URL } from '../../utils/constants';
import { authStore } from '../../stores/auth';

import { ButtonStyled, ButtonTextStyled, SafeAreaViewStyled } from './Login.styles';

WebBrowser.maybeCompleteAuthSession();

const Login = ({ navigation }: RootStackScreenProps<'AuthNavigator'>) => {
  const url = useURL();

  const handleSignIn = async () => openURL(`${SIGN_IN_BASE_URL}?redirect_url=${REDIRECT_URL}`);

  useEffect(() => {
    if (url !== null) {
      const urlCallback = new URL(url);
      const code = urlCallback.searchParams.get('code');


      const resp = async () => {
        const response = await fetch(GET_TOKEN_URL, {
          headers: {
            'Content-Type': 'application/json; charset=UTF-8',
          },
          credentials: 'include',
        });

        const data = await response.json();

        const token = await data.access_token;

        if (token) {
          console.log('token', token);
          authStore.setState({ token });
          // store the token in the async storage
          // redirect to the home screen
          navigation.navigate('AppNavigator', { screen: 'Home' });
        }
      };

      if (code) {
        resp();
      }
    }
  }, [url]);

  return (
    <SafeAreaViewStyled>
      <ButtonStyled onPress={handleSignIn}>
        <ButtonTextStyled>Sign in with GitHub</ButtonTextStyled>
      </ButtonStyled>
    </SafeAreaViewStyled>
  );
};

export default Login;
