/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from 'react';
import { useWindowDimensions } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import HomeScreen from '../../screens/Home';
import ProfileScreen from '../../screens/Profile';

// components
import Header from '../../components/Header';

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator();

function AuthNavigator() {
  const { width } = useWindowDimensions();

  return (
    <Stack.Navigator
      screenOptions={{
        title: '',
        headerShown: true,
        headerShadowVisible: false,
        header: (props) => <Header width={width} {...props} />,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
