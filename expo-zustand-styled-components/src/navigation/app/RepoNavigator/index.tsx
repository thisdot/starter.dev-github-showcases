import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import TreeScreen from '../../../screens/Repository/Tree';
import BlobScreen from '../../../screens/Repository/Blob';
import CodeScreen from '../../../screens/Repository/Code';
import IssuesScreen from '../../../screens/Repository/Issues';
import PullRequestsScreen from '../../../screens/Repository/Pull-Requests';

// types
import { RepoStackParamList } from '../../../../types';

const Stack = createNativeStackNavigator<RepoStackParamList>();

const RepoNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Code">
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
