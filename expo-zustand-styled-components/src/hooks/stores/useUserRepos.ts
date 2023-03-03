import { create } from 'zustand';
import { Platform } from 'react-native';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import getUserRepos from '../../services/get-user-repos';
import { PageInfo, Repo, UserReposVariables } from '../../types/user-repos-type';

interface IUserReposStore {
  error?: string;
  isLoading: boolean;
  pageInfo?: PageInfo;
  userRepos: Repo[];
  getUserRepos: (payload: UserReposVariables) => Promise<void>;
}

const initialState: IUserReposStore = {
  isLoading: false,
  userRepos: [],
  getUserRepos: (p) => p.first as unknown as Promise<void>,
};

const useUserRepos = create(
  persist<IUserReposStore>(
    (set) => ({
      ...initialState,
      getUserRepos: async (payload) => {
        try {
          set(() => ({ isLoading: true }));
          const data = await getUserRepos(payload);
          set(() => ({ isLoading: false, userRepos: data.repos, pageInfo: data.pageInfo }));
        } catch (err) {
          set(() => ({ isLoading: false, error: err.message }));
        }
      },
    }),
    {
      name: 'useUserRepos',
      storage: createJSONStorage(() =>
        Platform.OS === 'web' ? window.sessionStorage : AsyncStorage
      ),
    }
  )
);

export default useUserRepos;
