import React from 'react';
import { AuthStackScreenProps } from '../../../types';
import {
  SafeAreaViewStyled,
  LoginContainerStyled,
  LoginButtonStyled,
  LoginButtonTextStyled,
} from './Login.styles';
import * as WebBrowser from 'expo-web-browser';
import { useTokenStore } from '../../stores/token';

WebBrowser.maybeCompleteAuthSession();
const Login = ({ navigation }: AuthStackScreenProps<'Login'>) => {
  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openAuthSessionAsync(
      'http://localhost:9999/.netlify/functions/signin?redirect_url=http://localhost:19006'
    );

    if (result.type === 'success') {
      const url = new URL(result.url);
      const access_token = url.searchParams.get('access_token');
      useTokenStore.setState({ access_token });
    }
  };

  return (
    <SafeAreaViewStyled>
      <LoginButtonStyled onPress={_handlePressButtonAsync}>
        <LoginButtonTextStyled>Sign in with Gitub</LoginButtonTextStyled>
      </LoginButtonStyled>
    </SafeAreaViewStyled>
  );
};

export default Login;
