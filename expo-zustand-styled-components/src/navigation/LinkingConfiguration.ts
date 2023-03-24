/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { getStateFromPath, LinkingOptions } from '@react-navigation/native';
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
          Organization: 'orgs/:login',
          RepoNavigator: {
            path: ':owner/:name',
            screens: {
              Code: '',
              Tree: 'tree/:branch/:path',
              Blob: 'blob/:branch/:path',
              Issues: 'issues',
              'Pull Requests': 'pulls',
            },
          },
        },
      },
    },
  },
  getStateFromPath: (path, options) => {
    let state = getStateFromPath(path, options);
    // if the state is undefined, it means that the path doesn't match any route, we handle it here
    if (!state) {
      const [, owner, name, , branch, ...rest] = path.split('/');
      const isTree = path.includes('tree');
      const isBlob = path.includes('blob');

      // if the path contains 'tree' or 'blob', we modify our state and return it.
      if (isTree || isBlob) {
        state = {
          routes: [
            {
              name: 'AppNavigator',
              state: {
                routes: [
                  {
                    name: 'RepoNavigator',
                    params: {
                      owner,
                      name,
                    },
                    state: {
                      routes: [
                        {
                          path,
                          params: {
                            branch,
                            path: rest.join('/'),
                          },
                          name: isTree ? 'Tree' : 'Blob',
                        },
                      ],
                    },
                  },
                ],
              },
            },
          ],
        };
      }
    }
    return state;
  },
};

export default linking;
