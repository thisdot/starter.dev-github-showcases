import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

import { SafeAreaViewStyled } from './Home.styles';
import { useAuthStore } from '../../hooks/stores';

import LoaderErrorView from '../../components/LoaderErrorView';

import getViewerProfile from '../../services/get-viewer-info';

const Home = () => {
  const { error, viewer, isLoading } = useAuthStore();

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
        </View>
      )}
    </SafeAreaViewStyled>
  );
};

export default Home;
