import React from 'react';
import { Text, View } from 'react-native';

import { AuthStackScreenProps } from '../../../types';
import { SafeAreaViewStyled } from './Login.styles';

const Login = ({ navigation }: AuthStackScreenProps<'Login'>) => {
  return (
    <SafeAreaViewStyled>
      <View>
        <Text>Login Page 2</Text>
      </View>
    </SafeAreaViewStyled>
  );
};

export default Login;
