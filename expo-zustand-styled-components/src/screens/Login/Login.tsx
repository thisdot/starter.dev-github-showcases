import React from 'react';

import { AuthStackScreenProps } from '../../../types';
import { Text, View } from 'react-native';

const Login = ({ navigation }: AuthStackScreenProps<'Login'>) => {
  return (
      <View><Text>Hello World</Text></View>
  );
};

export default Login;
