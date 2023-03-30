import { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import CodeScreen from '../../../screens/Repository/Code';
import TreeScreen from '../../../screens/Repository/Tree';
import BlobScreen from '../../../screens/Repository/Blob';
import IssuesScreen from '../../../screens/Repository/Issues';
import PullRequestsScreen from '../../../screens/Repository/Pull-Requests';

// types
import { AppStackScreenProps, RepoStackParamList } from '../../../../types';

// services
import getRepoInfo from '../../../services/get-repo-info';

// hooks
import { useRepoInfoStore } from '../../../hooks/stores';

const Stack = createNativeStackNavigator<RepoStackParamList>();

const RepoNavigator = ({ route, navigation }: AppStackScreenProps<'RepoNavigator'>) => {
  const { name, owner } = useRepoInfoStore();

  useEffect(() => {
    // check if root route params have name and owner
    if (route.params) {
      const { name, owner } = route.params;
      useRepoInfoStore.setState({ name, owner });
    }else{
      navigation.navigate('Home');
    }
  }, [route.params, navigation]);

  useEffect(() => {
    if (name && owner) {
      getRepoInfo({ name, owner });
    }
  }, [name, owner, navigation]);

  const title = `${name}/${owner}`;

  return (
    <Stack.Navigator initialRouteName="Code" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Code" component={CodeScreen} options={{ title: `${title} . Code` }}  />
      <Stack.Screen name="Tree" component={TreeScreen} options={{ title: `${title} . Tree`  }} />
      <Stack.Screen name="Blob" component={BlobScreen} options={{ title: `${title} . Blob`  }} />
      <Stack.Screen name="Issues" component={IssuesScreen} options={{ title: '' }} />
      <Stack.Screen name="Pull Requests" component={PullRequestsScreen} options={{ title: '' }} />
    </Stack.Navigator>
  );
};

export default RepoNavigator;
