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
  Profile: undefined;
  RepoNavigator:
    | NavigatorScreenParams<RepoStackParamList>
    | { params: { name: string; owner: string } };
  Organization: { login: string };
};

export type AppStackScreenProps<Screen extends keyof AppStackParamList> = NativeStackScreenProps<
  AppStackParamList,
  Screen
>;
// #endregion

// #region REPO
export type RepoStackParamList = {
  Code: { name: string; owner: string };
  Issues: { name: string; owner: string };
  PullRequests: { name: string; owner: string };
  Blob: { name: string; owner: string };
  Tree: { name: string; owner: string };
};

export type RepoStackScreenProps<Screen extends keyof RepoStackParamList> = NativeStackScreenProps<
  RepoStackParamList,
  Screen
>;
// #endregion
