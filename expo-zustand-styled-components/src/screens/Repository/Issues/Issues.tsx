import  { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';

import { RepoStackScreenProps } from '../../../../types';

import { useRepoInfoStore } from '../../../hooks/stores';

const Issues = ({ navigation }: RepoStackScreenProps<'Issues'>) => {
  const { name, owner } = useRepoInfoStore();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Issues - ${owner}/${name}`,
    });
  }, [navigation, owner, name]);

  return (
    <View>
      <Text>Issues</Text>
    </View>
  );
};

export default Issues;
