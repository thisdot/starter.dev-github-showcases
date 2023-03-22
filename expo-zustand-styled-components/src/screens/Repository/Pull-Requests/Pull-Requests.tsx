import  { useLayoutEffect } from 'react';
import { View, Text } from 'react-native';

import { RepoStackScreenProps } from '../../../../types';

import { useRepoInfoStore } from '../../../hooks/stores';

const PullRequests = ({ navigation }: RepoStackScreenProps<'PullRequests'>) => {
  const { name, owner } = useRepoInfoStore();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Pull Requests - ${owner}/${name}`,
    });
  }, [navigation, owner, name]);

  return (
    <View>
      <Text>PullRequests</Text>
    </View>
  );
};

export default PullRequests;

