import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Platform } from 'react-native';

interface IAuthStore {
  token?: string;
  error?: string;
  isLoading?: boolean;
  logout?: () => void;
}

const initialState: IAuthStore = {
  token: undefined,
  isLoading: false,
  logout: () => null,
};

const useAuthStore = create(
  persist<IAuthStore>(
    (set) => ({
      ...initialState,
      logout: () => {
        Platform.OS !== 'web' && AsyncStorage.clear();
        set(() => ({ ...initialState }));
      },
    }),
    {
      name: 'useAuthStore',
      partialize: (state) => ({ token: state.token }),
      storage: createJSONStorage(() =>
        Platform.OS === 'web' ? window.sessionStorage : AsyncStorage
      ),
    }
  )
);

export default useAuthStore;
