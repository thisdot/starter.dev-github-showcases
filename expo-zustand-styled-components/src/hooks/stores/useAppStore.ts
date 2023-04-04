import { create } from 'zustand';
import { UserProfile, ViewerInfo } from '../../types/user-profile-type';

interface IAppStore {
  error?: string;
  user?: UserProfile;
  viewer?: ViewerInfo;
  branch?: string;
  isLoading: boolean;
  isMenuOpen: boolean;
  file?: {
    byteSize: number;
    text: string;
  };
  toggleMenu: (v?: boolean) => void;
}

const initialState: IAppStore = {
  isMenuOpen: false,
  isLoading: false,
  toggleMenu: () => null,
};

const useAppStore = create<IAppStore>((set, get) => ({
  ...initialState,
    toggleMenu: (v) => set(() => ({ isMenuOpen: v ?? !get().isMenuOpen })),
  }));

export default useAppStore;
