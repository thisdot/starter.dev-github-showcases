// zustand store for everything related to authentication / user profile
import { create } from 'zustand';
import { persist, createJSONStorage } from "zustand/middleware"
import AsyncStorage from '@react-native-async-storage/async-storage';

import { UserProfile, ViewerInfo } from '../types/profile';
import { Platform } from 'react-native';

interface IAuthStore {
  user?: UserProfile;
  viewer?: ViewerInfo;
  token?: string;
  error?: string;
  isLoading: boolean;
  logout: () => void;
  getViewerInfo: () => Promise<void>;
}

const initialState: IAuthStore = {
  token: undefined,
  isLoading: false,
  logout: async () => null,
  getViewerInfo: async () => null,
};

const useAuthStore = create(persist<IAuthStore>((set) => ({
  ...initialState,
  getViewerInfo: async () => {
    try {
      set(() => ({ isLoading: true }));
      //   call getViewerProfile service
      //   set(() => ({ isLoading: false, viewer: data }));
    } catch (err) {
      set(() => ({ isLoading: false, error: err.message }));
    }
  },
  logout: () => {
    AsyncStorage.clear()
    set(() => ({ ...initialState }));
  }
}),
{
  name: 'useAuthStore',
  storage: createJSONStorage(() => Platform.OS === 'web' ? window.sessionStorage : AsyncStorage),
}));

export default useAuthStore;