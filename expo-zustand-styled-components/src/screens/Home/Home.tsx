import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

import { SafeAreaViewStyled } from './Home.styles';
import { AppStackScreenProps } from '../../../types';
import { useAuthStore, useRepoStore } from '../../hooks/stores';

import Button from '../../components/Button';

const Home = ({ navigation }: AppStackScreenProps<'Home'>) => {
  const { token, logout, viewer, getViewerInfo } = useAuthStore();
  const { readMe, getRepoReadMe } = useRepoStore();

  //TODO: to be removed
  useEffect(() => {
    getViewerInfo();
  }, []);

  useEffect(() => {
    if (viewer?.login) {
      getRepoReadMe({
        expression: 'HEAD:README.md',
        name: 'starter.dev-github-showcases',
        owner: 'thisdot',
      });
    }
  }, [viewer]);

  //TODO: to be removed
  // eslint-disable-next-line no-console
  console.log('readMe', readMe);

  return (
    <SafeAreaViewStyled>
      <View>
        <Text>Hello World</Text>
        <Text>Here is the token{token}</Text>
        <Button title="Logout" onPress={() => logout()} />
      </View>
    </SafeAreaViewStyled>
  );
};

export default Home;
