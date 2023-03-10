import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { UserProfile, ViewerInfo } from '../../types/user-profile-type';
import { Platform } from 'react-native';

interface IAuthStore {
  user?: UserProfile;
  viewer?: ViewerInfo;
  token?: string;
  error?: string;
  isMenuOpen: boolean;
  isLoading: boolean;
  logout: () => void;
  toggleMenu: (v?: boolean) => void;
}

const initialState: IAuthStore = {
  token: undefined,
  isLoading: false,
  isMenuOpen: false,
  logout: () => null,
  toggleMenu: () => null,
};

const useAuthStore = create(
  persist<IAuthStore>(
    (set, get) => ({
      ...initialState,
      toggleMenu: (v) => set(() => ({ isMenuOpen: v ?? !get().isMenuOpen })),
      logout: () => {
        AsyncStorage.clear();
        set(() => ({ ...initialState }));
      },
    }),
    {
      name: 'useAuthStore',
      storage: createJSONStorage(() =>
        Platform.OS === 'web' ? window.sessionStorage : AsyncStorage
      ),
    }
  )
);

export default useAuthStore;
