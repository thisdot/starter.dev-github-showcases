import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import CodeScreen from '../../../screens/Repository/Code';
import IssuesScreen from '../../../screens/Repository/Issues';
import PullRequestsScreen from '../../../screens/Repository/Pull-Requests';

// types
import { RepoStackParamList } from '../../../../types';

const Stack = createNativeStackNavigator<RepoStackParamList>();

const RepoNavigator = () => {
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
