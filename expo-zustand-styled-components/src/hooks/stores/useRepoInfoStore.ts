import { create } from 'zustand';

import { Info } from '../../types/repo-info-type';

interface IRepoInfoStore {
  info?: Info;
  error?: string;
  branch?: string;
  isLoading: boolean;
  _cache: Map<string, {
    info: Info;
    branch: string;
  }>;
}

const _cache = new Map();

const initialState: IRepoInfoStore = {
  isLoading: false,
  _cache
};

const useRepoInfoStore = create<IRepoInfoStore>(() => initialState);

export default useRepoInfoStore;
