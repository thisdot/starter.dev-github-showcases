import { create } from 'zustand';
import { persist, createJSONStorage } from "zustand/middleware"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import { Profile } from '../../types/user-profile-type';
import getUserProfile from '../../services/get-user-profile';
import useAuthStore from './useAuthStore';

interface IUserProfileStore {
  error?: string;
  isLoading: boolean;
  profile: Profile,
  getUserProfileData: () => Promise<void>
}

const initialState: IUserProfileStore = {
  isLoading: false,
  profile: {
    avatarUrl: '',
    name: '',
    username: '',
    bio: '',
    login: '',
    followers: { totalCount: 0 },
    following: { totalCount: 0 },
    starredRepositories: { totalCount: 0 },
    company: '',
    location: '',
    websiteUrl: '',
    twitterUsername: '',
    organizations: {
      nodes: []
    },
  },
  getUserProfileData: () => null
}

const useUserProfileStore = create(persist<IUserProfileStore>((set) => ({
  ...initialState,
  getUserProfileData: async () => {
    try {
      set(() => ({ isLoading: true }));
      const data = await getUserProfile(useAuthStore.getState().user)
      set(() => ({ isLoading: false, profile: data }));
    } catch (err) {
      set(() => ({ isLoading: false, error: err.message }));
    }
  },
}),
{
  name: 'useUserProfileStore',
  storage: createJSONStorage(() => Platform.OS === 'web' ? window.sessionStorage : AsyncStorage),
}));

export default useUserProfileStore;