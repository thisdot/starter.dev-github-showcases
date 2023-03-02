// zustand store for everything related to authentication / user profile
import { create } from 'zustand';
import { persist, createJSONStorage } from "zustand/middleware"
import AsyncStorage from '@react-native-async-storage/async-storage';

import { getToken } from '../services/get-token';
import { UserProfile, ViewerInfo } from '../types/profile';

interface IAuthStore {
  user?: UserProfile;
  viewer?: ViewerInfo;
  token?: string;
  error?: string;
  isLoading: boolean;
  logout: () => void;
  getToken: (code: string) => Promise<void>;
  getViewerInfo: () => Promise<void>;
}

const initialState: IAuthStore = {
  token: undefined,
  isLoading: false,
  getToken: async () => null,
  logout: async () => null,
  getViewerInfo: async () => null,
};

export const authStore = create(persist<IAuthStore>((set) => ({
  ...initialState,
  getToken: async (code) => {
    try {
      set(() => ({ isLoading: true }));
      const response = await getToken(code);
      set(() => ({ isLoading: false, token: response.data.access_token }));
    } catch (err) {
      set(() => ({ isLoading: false, error: err.message }));
    }
  },
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
  name: 'authStore',
  storage: createJSONStorage(() => AsyncStorage),
}));
