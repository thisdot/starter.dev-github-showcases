import { create } from 'zustand';

import { PageInfo, Repo } from '../../types/user-repos-type';

const _cache = new Map();

interface IData {
  orgInfo: {
    avatarUrl: string;
    name: string;
  };
  pageInfo: PageInfo;
  repos: Repo[];
}

export interface IOrgStore {
  data: IData;
  afterCursor?: string;
  beforeCursor?: string;
  isLoading: boolean;
  error?: string;
  _cache: Map<string, IData>;
}

const useOrgStore = create<IOrgStore>(() => ({
  isLoading: true,
  data: {
    orgInfo: {
      avatarUrl: '',
      name: '',
    },
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false,
    },
    repos: [],
  },
  _cache,
}));

export default useOrgStore;
