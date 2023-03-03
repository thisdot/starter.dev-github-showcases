// zustand store for everything related to authentication / user profile
import { create } from 'zustand';
import { persist, createJSONStorage } from "zustand/middleware"
import AsyncStorage from '@react-native-async-storage/async-storage';

import { UserProfile, ViewerInfo } from '../../types/user-profile-type';
import { Platform } from 'react-native';
import getUserProfile from '../../services/get-user-profile';
import getViewerProfile from '../../services/get-viewer-info';

interface IAuthStore {
  user?: UserProfile;
  viewer?: ViewerInfo;
  token?: string;
  error?: string;
  isLoading: boolean;
  logout: () => void;
  getViewerInfo: () => Promise<void>;
  getUserProfileData: () => Promise<void>
}

const initialState: IAuthStore = {
  token: undefined,
  isLoading: false,
  logout: async () => null,
  getViewerInfo: async () => null,
  getUserProfileData: async () => null,
};

const useAuthStore = create(persist<IAuthStore>((set, get) => ({
  ...initialState,
  getViewerInfo: async () => {
    try {
      set(() => ({ isLoading: true }));
      const data = await getViewerProfile();
      set(() => ({ isLoading: false, viewer: data }));
    } catch (err) {
      set(() => ({ isLoading: false, error: err.message }));
    }
  },
  getUserProfileData: async () => {
    try {
      set(() => ({ isLoading: true }));
      const data = await getUserProfile({
        username: get().viewer.login
      })
      set(() => ({ isLoading: false, user: data }));
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