import React from 'react';

import { SafeAreaViewStyled } from './Home.styles';
import { AppStackScreenProps } from '../../../types';
import { Text, View } from 'react-native';

const Home = ({ navigation }: AppStackScreenProps<'Home'>) => {
  return (
    <SafeAreaViewStyled>
      <View>
        <Text>Hello World</Text>
      </View>
    </SafeAreaViewStyled>
  );
};

export default Home;
