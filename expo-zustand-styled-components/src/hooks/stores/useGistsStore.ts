import { create } from 'zustand';
import { persist, createJSONStorage } from "zustand/middleware"
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import getGists from '../../services/getGists';

interface IGistsStore {
  error?: string;
  isLoading: boolean;
  gists: {
    name: string;
    url: string
  }[],
  getGistsData: () => Promise<void>
}

const initialState: IGistsStore = {
  isLoading: false,
  gists: [],
  getGistsData: () => null
}

const useGistsStore = create(persist<IGistsStore>((set) => ({
  ...initialState,
  getGistsData: async () => {
    try {
      set(() => ({ isLoading: true }));
      const data = await getGists()
      set(() => ({ isLoading: false, gists: data }));
    } catch (err) {
      set(() => ({ isLoading: false, error: err.message }));
    }
  },
}),
{
  name: 'useGistsStore',
  storage: createJSONStorage(() => Platform.OS === 'web' ? window.sessionStorage : AsyncStorage),
}));

export default useGistsStore;