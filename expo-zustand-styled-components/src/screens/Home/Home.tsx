import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

import { SafeAreaViewStyled } from './Home.styles';
import { AppStackScreenProps } from '../../../types';
import { useAuthStore } from '../../hooks/stores';

import Button from '../../components/Button';
import LoaderErrorView from '../../components/LoaderErrorView';

import getViewerProfile from '../../services/get-viewer-info';

const Home = ({ navigation }: AppStackScreenProps<'Home'>) => {
  const { error, token, viewer, isLoading } = useAuthStore();

  useEffect(() => {
    if (!viewer) {
      getViewerProfile();
    }
  }, [viewer]);

  return (
    <SafeAreaViewStyled>
      {(isLoading || error) ? (
        <LoaderErrorView error={error} />
      ) : (
        <View>
          <Text>Hello World</Text>
          <Text>Here is the token{token}</Text>
          <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
        </View>
      )}
    </SafeAreaViewStyled>
  );
};

export default Home;
