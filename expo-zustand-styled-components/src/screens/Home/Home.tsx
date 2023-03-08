import React from 'react';
import { Text, View } from 'react-native';

import { SafeAreaViewStyled } from './Home.styles';
import { AppStackScreenProps } from '../../../types';
import { useAuthStore } from '../../hooks/stores';

import Header from '../../components/Header/Header';

const Home = ({ navigation }: AppStackScreenProps<'Home'>) => {
  const { token } = useAuthStore();

  return (
    <SafeAreaViewStyled>
      <Header />
      <View>
        <Text>Hello World</Text>
        <Text>Here is the token{token}</Text>
      </View>
    </SafeAreaViewStyled>
  );
};

export default Home;
