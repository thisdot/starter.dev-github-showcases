import { create } from 'zustand';
import { persist, createJSONStorage } from "zustand/middleware"
import AsyncStorage from '@react-native-async-storage/async-storage';

import { UserProfile, ViewerInfo } from '../../types/user-profile-type';
import { Platform } from 'react-native';

interface IAuthStore {
  user?: UserProfile;
  viewer?: ViewerInfo;
  token?: string;
  error?: string;
  isLoading: boolean;
  logout: () => void;
}

const initialState: IAuthStore = {
  token: undefined,
  isLoading: false,
  logout: async () => null,
};

const useAuthStore = create(persist<IAuthStore>((set) => ({
  ...initialState,
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