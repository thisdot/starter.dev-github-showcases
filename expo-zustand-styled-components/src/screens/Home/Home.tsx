import React from 'react';
import { Text, View } from 'react-native';

import { SafeAreaViewStyled } from './Home.styles';
import { AppStackScreenProps } from '../../../types';
import { authStore } from '../../stores/auth';
import Button from '../../components/Button';

const Home = ({ navigation }: AppStackScreenProps<'Home'>) => {
  const { token, logout } = authStore();

  return (
    <SafeAreaViewStyled>
      <View>
        <Text>Hello World</Text>
        <Text>Here is the token{token}</Text>
        <Button title='Logout' onPress={() => logout()} />
      </View>
    </SafeAreaViewStyled>
  );
};

export default Home;
