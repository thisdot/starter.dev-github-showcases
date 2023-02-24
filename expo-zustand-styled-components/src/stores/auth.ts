// zustand store for everything related to authentication / user profile
import { create } from 'zustand';
import { UserProfile, ViewerInfo } from '../types/profile';
// import services

interface IAuthStore {
  user?: UserProfile;
  viewer?: ViewerInfo;
  token?: string;
  error?: string;
  isLoading: boolean;
  getViewerInfo: () => Promise<void>;
}

const initialState: IAuthStore = {
  isLoading: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  getViewerInfo: async () => {},
};

export const authStore = create<IAuthStore>((set) => ({
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
}));
