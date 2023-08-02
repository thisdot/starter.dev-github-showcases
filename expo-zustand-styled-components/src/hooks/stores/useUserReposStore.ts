import { create } from 'zustand';
import { PageInfo, Repo } from '../../types/user-repos-type';

export interface IUserReposStore {
  userRepos: Repo[];
  pageInfo?: PageInfo;
  isLoading: boolean;
  error?: string;
}

const useUserReposStore = create<IUserReposStore>(() => ({
  userRepos: [],
  isLoading: true,
}));

export default useUserReposStore;
