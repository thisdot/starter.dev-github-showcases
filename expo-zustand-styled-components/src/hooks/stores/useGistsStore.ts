import { create } from 'zustand';

export interface IGistsStore {
  gists?: {
    name: string;
    url: string;
  }[];
  isLoading: boolean;
  error?: string;
}

export const useGistsStore = create<IGistsStore>(() => ({
  gists: undefined,
  isLoading: true,
}));
