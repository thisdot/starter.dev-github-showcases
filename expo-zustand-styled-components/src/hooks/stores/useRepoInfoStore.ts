import { create } from 'zustand';

import { Info } from '../../types/repo-info-type';
import { TreeProps } from '../../types/repo-tree-type';
import { REPO_TABS } from '../../utils/constants';

interface IRepoInfoStore {
  info?: Info;
  name?: string
  error?: string;
  path?: string;
  branch?: string;
  owner?: string;
  readMe?: string;
  activeTab: string;
  isLoading: boolean;
  tree?: TreeProps[];
  _cache: Map<string, {
    info: Info;
    branch: string;
  }>;
  _treeCache: Map<string, TreeProps[]>;
  _readMe: Map<string, string>;
}

const _cache = new Map();
const _treeCache = new Map();
const _readMe = new Map();

const initialState: IRepoInfoStore = {
  isLoading: false,
  tree: [],
  activeTab: REPO_TABS.code,
  _cache,
  _treeCache,
  _readMe,
};

const useRepoInfoStore = create<IRepoInfoStore>(() => initialState);

export default useRepoInfoStore;
