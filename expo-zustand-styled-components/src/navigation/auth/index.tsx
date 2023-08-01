import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import LoginScreen from '../../screens/Login';

const Stack = createNativeStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
