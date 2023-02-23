/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Splash: 'splash',
      AuthNavigator: {
        screens: {
          Login: {
            screens: {
              LoginScreen: 'login',
            },
          },
        },
      },
      AppNavigator: {
        screens: {
          Home: {
            screens: {
              HomeScreen: 'home',
            },
          },
        },
      },
    },
  },
};

export default linking;
