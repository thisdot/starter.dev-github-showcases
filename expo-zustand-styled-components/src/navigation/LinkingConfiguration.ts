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
        path: 'login',
        screens: {
          Login: '',
        },
      },
      AppNavigator: {
        path: '',
        screens: {
          Home: '',
          Profile: ':username',
          RepoNavigator: {
            path: ':owner/:name',
            screens: {
              Code: '',
              Tree: 'tree/:path*', // * means that it can be anything
              Blob: 'blob/:path*', // * means that it can be anything
              Issues: 'issues',
              PullRequests: 'pulls',
            },
          },
          Organization: 'orgs:org',
        },
      },
    },
  },
};

export default linking;
