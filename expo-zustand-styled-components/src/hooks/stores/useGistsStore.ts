import { create } from 'zustand';

export interface IGistsStore {
  gists?: {
    name: string;
    url: string;
  }[];
  isLoading: boolean;
  error?: string;
}

const useGistsStore = create<IGistsStore>(() => ({
  gists: undefined,
  isLoading: true,
}));

export default useGistsStore;
