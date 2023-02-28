import React from 'react';

import { SafeAreaViewStyled } from './Home.styles';
import { AppStackScreenProps } from '../../../types';
import { Text, View } from 'react-native';
import { authStore } from '../../stores/auth';

const Home = ({ navigation }: AppStackScreenProps<'Home'>) => {
  const { token } = authStore.getState();
  return (
    <SafeAreaViewStyled>
      <View>
        <Text>Hello World</Text>
        <Text>Here is the token{token}</Text>
      </View>
    </SafeAreaViewStyled>
  );
};

export default Home;
