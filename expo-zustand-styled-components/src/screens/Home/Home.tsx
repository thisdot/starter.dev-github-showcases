import React from 'react';
import { Text, View } from 'react-native';

import { SafeAreaViewStyled } from './Home.styles';
import { AppStackScreenProps } from '../../../types';
import { useAuthStore } from '../../hooks/stores';

import Button from '../../components/Button';
import Header from '../../components/Header/Header';

const Home = ({ navigation }: AppStackScreenProps<'Home'>) => {
  const { token, logout } = useAuthStore();

  return (
    <SafeAreaViewStyled>
      <View>
        <Header />
        <Text>Hello World</Text>
        <Text>Here is the token{token}</Text>
        <Button title="Logout" onPress={() => logout()} />
      </View>
    </SafeAreaViewStyled>
  );
};

export default Home;
