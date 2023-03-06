import { create } from 'zustand';
import { Platform } from 'react-native';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { PageInfo, Repo } from '../../types/user-repos-type';
import { TreeProps } from '../../types/repo-tree-type';
import { Info } from '../../types/repo-info-type';
import { TopRepository } from '../../types/top-repos-type';

interface IAppStore {
  info?: Info;
  error?: string;
  login?: string;
  readMe?: string;
  branch?: string;
  userRepos: Repo[];
  tree: TreeProps[];
  isLoading: boolean;
  pageInfo?: PageInfo;
  gists?: {
    name: string;
    url: string
  }[],
  file?: {
    byteSize: number;
    text: string;
  };
  orgRepos: {
    orgInfo: {
      avatarUrl: string;
      name: string;
    };
    pageInfo: PageInfo;
    repos: Repo[];
  };
  topRepos: TopRepository[];
  branches?: { name: string }[];
}

const initialState: IAppStore = {
  tree: [],
  topRepos: [],
  userRepos: [],
  login: undefined,
  isLoading: false,
  orgRepos: {
    orgInfo: {
      avatarUrl: '',
      name: '',
    },
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false,
    },
    repos: [],
  },
};

const useAppStore = create(
  persist<IAppStore>(() => ({ ...initialState }), {
    name: 'useAppStore',
    storage: createJSONStorage(() =>
      Platform.OS === 'web' ? window.sessionStorage : AsyncStorage
    ),
  })
);

export default useAppStore;
