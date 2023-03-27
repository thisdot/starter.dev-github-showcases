/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Platform, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import AuthNavigator from './auth';
import AppNavigator from './app';

import { RootStackParamList } from '../../types';
import LinkingConfiguration from './LinkingConfiguration';
import { useAuthStore } from '../hooks/stores';

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration} fallback={<Text>Loading...</Text>}>
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
  const token = useAuthStore((state) => state.token);
  const navigation = useNavigation();

  useEffect(() => {
    if (!token) {
      navigation.navigate('AuthNavigator', { screen: 'Login', path: 'login' });
    }
  }, [token]);

  const isWeb = Platform.OS === 'web';

  const AppStack = <Stack.Screen name="AppNavigator" component={AppNavigator} />

  return (
    <>
      <StatusBar style="light" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
        {isWeb && token && AppStack}
        {!isWeb && AppStack}
      </Stack.Navigator>
    </>
  );
}
