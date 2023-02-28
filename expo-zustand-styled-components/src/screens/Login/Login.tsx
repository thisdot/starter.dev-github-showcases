import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { AuthStackScreenProps } from '../../../types';
import { SafeAreaViewStyled, LoginButtonStyled, LoginButtonTextStyled } from './Login.styles';
import * as WebBrowser from 'expo-web-browser';
import { A } from '@expo/html-elements';

WebBrowser.maybeCompleteAuthSession();
const Login = ({ navigation }: AuthStackScreenProps<'Login'>) => {
  const [result, setResult] = useState(null);
  const _handlePressButtonAsync = async () => {
    let result = await WebBrowser.openAuthSessionAsync(
      'https://api.starter.dev/.netlify/functions/server/api/auth/signin?redirect_url=http://localhost:19006'
    );
    let token = await WebBrowser.openAuthSessionAsync(
      'https://api.starter.dev/.netlify/functions/server/api/auth/token'
    );
    console.log('token', token);
    setResult(result);
  };

  useEffect(() => {
    console.log('result');
  }, [result]);

  return (
    <SafeAreaViewStyled>
      <View>
        {/* <LoginButtonStyled onPress={_handlePressButtonAsync}>
          <LoginButtonTextStyled>Sign in with Gitub</LoginButtonTextStyled>
        </LoginButtonStyled> */}
        <A href="https://api.starter.dev/.netlify/functions/server/api/auth/signin?redirect_url=http://localhost:19006">
          <LoginButtonStyled>
            <LoginButtonTextStyled>Sign in with Gitub</LoginButtonTextStyled>
          </LoginButtonStyled>
        </A>
      </View>
    </SafeAreaViewStyled>
  );
};

export default Login;
