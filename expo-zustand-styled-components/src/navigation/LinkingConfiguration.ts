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
      AuthNavigator: {
        initialRouteName: 'Login',
        screens: {
          Login: 'login',
        },
      },
      AppNavigator: {
        initialRouteName: 'Home',
        screens: {
          Home: '',
          Profile: ':username',
          RepoNavigator: {
            screens: {
              Code: ':owner/:name',
              Tree: ':owner/:name/tree/:path*', // * means that it can be anything
              Blob: ':owner/:name/blob/:path*', // * means that it can be anything
              Issues: ':owner/:name/issues',
              PullRequests: ':owner/:name/pulls',
            },
          },
          Organization: 'orgs:org',
        },
      },
    },
  },
};

export default linking;
