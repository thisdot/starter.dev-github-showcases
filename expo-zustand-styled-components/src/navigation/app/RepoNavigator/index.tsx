import { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import TreeScreen from '../../../screens/Repository/Tree';
import BlobScreen from '../../../screens/Repository/Blob';
import CodeScreen from '../../../screens/Repository/Code';
import IssuesScreen from '../../../screens/Repository/Issues';
import PullRequestsScreen from '../../../screens/Repository/Pull-Requests';

// types
import { AppStackScreenProps, RepoStackParamList } from '../../../../types';

// services
import getRepoInfo from '../../../services/get-repo-info';

// hooks
import { useRepoInfoStore } from '../../../hooks/stores';

const Stack = createNativeStackNavigator<RepoStackParamList>();

const RepoNavigator = ({ navigation }: AppStackScreenProps<'RepoNavigator'>) => {
  const { name, owner } = useRepoInfoStore();

  useEffect(() => {
    useRepoInfoStore.setState({ activeTab: 'Code' });
  }, []);

  useEffect(() => {
    if (name && owner) {
      getRepoInfo({ name, owner });
    } else {
      navigation.goBack();
    }
  }, [name, owner, navigation]);

  return (
    <Stack.Navigator initialRouteName="Code" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Code" component={CodeScreen} options={{ title: 'Code' }} />
      <Stack.Screen name="Tree" component={TreeScreen} options={{ title: 'Tree' }} />
      <Stack.Screen name="Blob" component={BlobScreen} options={{ title: 'Blob' }} />
      <Stack.Screen name="Issues" component={IssuesScreen} options={{ title: 'Issues' }} />
      <Stack.Screen
        name="PullRequests"
        component={PullRequestsScreen}
        options={{ title: 'Pull Requests' }}
      />
    </Stack.Navigator>
  );
};

export default RepoNavigator;
