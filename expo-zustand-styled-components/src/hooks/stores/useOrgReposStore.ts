import { create } from 'zustand';
import { persist, createJSONStorage } from "zustand/middleware"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import getOrgRepos, { OrgReposVariable } from '../../services/get-org-repos';
import { PageInfo, Repo } from '../../types/user-repos-type';

interface IOrgReposStore {
  error?: string;
  isLoading: boolean;
  orgRepos: {
    orgInfo: {
      avatarUrl: string;
      name: string;
    };
    pageInfo: PageInfo;
    repos: Repo[]
  };
  getOrgReposData: (p: OrgReposVariable) => Promise<void>
}

const initialState: IOrgReposStore = {
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
  getOrgReposData: () => null
}

const useOrgReposStore = create(persist<IOrgReposStore>((set) => ({
  ...initialState,
  getOrgReposData: async (payload: OrgReposVariable) => {
    try {
      set(() => ({ isLoading: true }));
      const data = await getOrgRepos(payload)
      set(() => ({ isLoading: false, orgRepos: data }));
    } catch (err) {
      set(() => ({ isLoading: false, error: err.message }));
    }
  },
}),
{
  name: 'useOrgReposStore',
  storage: createJSONStorage(() => Platform.OS === 'web' ? window.sessionStorage : AsyncStorage),
}));

export default useOrgReposStore;