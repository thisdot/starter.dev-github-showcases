/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
    interface AuthParamList extends AuthStackParamList {}
    interface AppParamList extends AppStackParamList {}
  }
}

// #region ROOT
export type RootStackParamList = {
  AuthNavigator: NavigatorScreenParams<AuthStackParamList> | undefined;
  AppNavigator: NavigatorScreenParams<AppStackParamList> | undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;
// #endregion

// #region AUTH
export type AuthStackParamList = {
  Login: undefined;
};

export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> = NativeStackScreenProps<
  AuthStackParamList,
  Screen
>;
// #endregion

// #region APP
export type AppStackParamList = {
  Home: undefined;
  Profile: { username: string; afterCursor?: string; beforeCursor?: string };
  Organization: { login: string; afterCursor?: string; beforeCursor?: string };
  RepoNavigator: { name: string; owner: string; params?: { path?: string; branch?: string } };
};

export type AppStackScreenProps<Screen extends keyof AppStackParamList> = NativeStackScreenProps<
  AppStackParamList,
  Screen
>;
// #endregion

// #region REPO
export type RepoStackParamList = {
  Code: undefined;
  Blob: { branch: string; path: string };
  Tree: { branch: string; path: string };
  Issues: { afterCursor?: string; beforeCursor?: string };
  'Pull Requests': { afterCursor?: string; beforeCursor?: string };
};

export type RepoStackScreenProps<Screen extends keyof RepoStackParamList> = NativeStackScreenProps<
  RepoStackParamList,
  Screen
>;
// #endregion
