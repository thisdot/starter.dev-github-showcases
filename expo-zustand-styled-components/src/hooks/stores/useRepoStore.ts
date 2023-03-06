import { create } from 'zustand';
import { Platform } from 'react-native';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import getRepoReadMe from '../../services/get-repo-readme';
import getUserRepos from '../../services/get-user-repos';
import getOrgRepos from '../../services/get-org-repos';
import getTopRepos from '../../services/get-top-repos';
import getRepoTree from '../../services/get-repo-tree';
import getRepoInfo from '../../services/get-repo-info';
import getRepoFile from '../../services/get-repo-file';

import { PageInfo, Repo, UserReposVariables } from '../../types/user-repos-type';
import { RepoTreeVariables, TreeProps } from '../../types/repo-tree-type';
import { Info, RepoInfoVariables } from '../../types/repo-info-type';
import { RepoReadmeVariables } from '../../types/repo-readme-type';
import { TopRepository } from '../../types/top-repos-type';
import { OrgReposVariable } from '../../types/org-repos';

interface IRepoStore {
  info?: Info;
  error?: string;
  login?: string;
  readMe?: string;
  branch?: string;
  userRepos: Repo[];
  tree: TreeProps[];
  isLoading: boolean;
  pageInfo?: PageInfo;
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
    repos: Repo[]
  };
  topRepos: TopRepository[];
  branches?: { name: string }[];
  getTopRepos: () => Promise<void>;
  getOrgRepos: (p: OrgReposVariable) => Promise<void>;
  getRepoInfo: (p: RepoInfoVariables) => Promise<void>;
  getRepoTree: (p: RepoTreeVariables) => Promise<void>;
  getUserRepos: (p: UserReposVariables) => Promise<void>;
  getRepoReadMe: (p: RepoReadmeVariables) => Promise<void>;
}

const initialState: IRepoStore = {
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
    repos: []
  },
  getOrgRepos: () => null,
  getTopRepos: () => null,
  getUserRepos: () => Promise.resolve(),
  getRepoInfo: () => Promise.resolve(),
  getRepoTree: () => Promise.resolve(),
  getRepoReadMe: () => Promise.resolve(),
};

const useRepoStore = create(
  persist<IRepoStore>(
    (set) => ({
      ...initialState,
      getTopRepos: async () => {
        try {
          set(() => ({ isLoading: true }));
          const { repos, login } = await getTopRepos();
          set(() => ({ isLoading: false, topRepos: repos, login: login }));
        } catch (err) {
          set(() => ({ isLoading: false, error: err.message }));
        }
      },
      getUserRepos: async (payload) => {
        try {
          set(() => ({ isLoading: true }));
          const { repos, pageInfo } = await getUserRepos(payload);
          set(() => ({ isLoading: false, userRepos: repos, pageInfo }));
        } catch (err) {
          set(() => ({ isLoading: false, error: err.message }));
        }
      },
      getRepoInfo: async (payload) => {
        try {
          set(() => ({ isLoading: true }));
          const { info, branch } = await getRepoInfo(payload);
          set(() => ({ isLoading: false, info, branch }));
        } catch (err) {
          set(() => ({ isLoading: false, error: err.message }));
        }
      },
      getRepoTree: async (payload) => {
        try {
          set(() => ({ isLoading: true }));
          const { tree, branches } = await getRepoTree(payload);
          set(() => ({ isLoading: false, tree, branches }));
        } catch (err) {
          set(() => ({ isLoading: false, error: err.message }));
        }
      },
      getRepoReadMe: async (payload) => {
        try {
          set(() => ({ isLoading: true }));
          const readMe = await getRepoReadMe(payload);
          set(() => ({ isLoading: false, readMe }));
        } catch (err) {
          set(() => ({ isLoading: false, error: err.message }));
        }
      },
      getRepoFile: async (payload) => {
        try {
          set(() => ({ isLoading: true }));
          const file = await getRepoFile(payload);
          set(() => ({ isLoading: false, file }));
        } catch (err) {
          set(() => ({ isLoading: false, error: err.message }));
        }
      },
      getOrgRepos: async (payload) => {
        try {
          set(() => ({ isLoading: true }));
          const orgRepos = await getOrgRepos(payload)
          set(() => ({ isLoading: false, orgRepos }));
        } catch (err) {
          set(() => ({ isLoading: false, error: err.message }));
        }
      },
    }),
    {
      name: 'useRepoStore',
      storage: createJSONStorage(() =>
        Platform.OS === 'web' ? window.sessionStorage : AsyncStorage
      ),
    }
  )
);

export default useRepoStore;
