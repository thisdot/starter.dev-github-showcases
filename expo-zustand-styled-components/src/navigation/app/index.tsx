import * as React from 'react';
import { Text, View, useWindowDimensions } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// types
import { AppStackParamList } from '../../../types';

// screens
import HomeScreen from '../../screens/Home';
import ProfileScreen from '../../screens/Profile';
import RepoNavigator from './RepoNavigator';

// components
import Header from '../../components/Header';

const Stack = createNativeStackNavigator<AppStackParamList>();

function AuthNavigator() {
  const { width } = useWindowDimensions();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        title: '',
        headerShown: true,
        headerShadowVisible: false,
        header: (props) => <Header width={width} {...props} />,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
      <Stack.Screen
        name="RepoNavigator"
        component={RepoNavigator}
        options={{
          title: '',
          headerShown: true,
          headerShadowVisible: false,
          header: (props) => (
            <View style={{ backgroundColor: 'rgb(243, 244, 246)' }}>
              <Header width={width} {...props} />
              <Text>RepoHeader</Text>
            </View>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
