import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';

import getTopRepos from '../../services/get-top-tepos';
import { TopRepository } from '../../types/top-repos-type';

interface ITopReposStore {
  error?: string;
  login?: string;
  isLoading: boolean;
  topRepos: TopRepository[];
  getTopRepos: () => Promise<void>;
}

const initialState: ITopReposStore = {
  login: undefined,
  topRepos: [],
  isLoading: false,
  getTopRepos: () => null,
};

const useTopReposStore = create(
  persist<ITopReposStore>(
    (set) => ({
      ...initialState,
      getTopRepos: async () => {
        try {
          set(() => ({ isLoading: true }));
          const data = await getTopRepos();
          set(() => ({ isLoading: false, topRepos: data.repos, login: data.login }));
        } catch (err) {
          set(() => ({ isLoading: false, error: err.message }));
        }
      },
    }),
    {
      name: 'useTopReposStore',
      storage: createJSONStorage(() =>
        Platform.OS === 'web' ? window.sessionStorage : AsyncStorage
      ),
    }
  )
);

export default useTopReposStore;
