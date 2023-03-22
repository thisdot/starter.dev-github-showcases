import { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
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
    useRepoInfoStore.setState({ activeTab: 'Code', path: undefined, isBlob: false });
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
      <Stack.Screen name="Code" component={CodeScreen} options={{ title: '' }} />
      <Stack.Screen name="Issues" component={IssuesScreen} options={{ title: '' }} />
      <Stack.Screen
        name="PullRequests"
        component={PullRequestsScreen}
        options={{ title: '' }}
      />
    </Stack.Navigator>
  );
};

export default RepoNavigator;
