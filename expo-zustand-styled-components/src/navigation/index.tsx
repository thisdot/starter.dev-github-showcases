/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { StatusBar } from 'expo-status-bar';

import AuthNavigator from './auth';
import AppNavigator from './app';

import { RootStackParamList } from '../../types';
import LinkingConfiguration from './LinkingConfiguration';
import { useAuthStore } from '../stores';

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { token } = useAuthStore();
  const navigation = useNavigation();

  React.useEffect(() => {
    if (!token) {
      navigation.navigate('AuthNavigator', { screen: 'Login' });
    }
  }, [token]);

  return (
    <>
      <StatusBar style="auto" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
        <Stack.Screen name="AppNavigator" component={AppNavigator} />
      </Stack.Navigator>
    </>
  );
}
