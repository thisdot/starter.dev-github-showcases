import { create } from 'zustand';
import { Platform } from 'react-native';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IAppStore {
  error?: string;
  login?: string;
  branch?: string;
  isLoading: boolean;
  file?: {
    byteSize: number;
    text: string;
  };
}

const initialState: IAppStore = {
  login: undefined,
  isLoading: false,
};

const useAppStore = create(
  persist<IAppStore>(() => initialState, {
    name: 'useAppStore',
    storage: createJSONStorage(() =>
      Platform.OS === 'web' ? window.sessionStorage : AsyncStorage
    ),
  })
);

export default useAppStore;
