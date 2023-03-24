import { create } from 'zustand';

import { Info } from '../../types/repo-info-type';
import { TreeProps } from '../../types/repo-tree-type';
import { REPO_TABS } from '../../utils/constants';

interface IRepoInfoStore {
  info?: Info;
  name?: string;
  error?: string;
  isBlob: boolean;
  branch?: string;
  owner?: string;
  readMe?: string;
  activeTab: string;
  isLoading: boolean;
  file?: {
    byteSize: number;
    text: string;
  };
  tree?: TreeProps[];
  _cache: Map<
    string,
    {
      info: Info;
      branch: string;
    }
  >;
  _tree: Map<string, TreeProps[]>;
  _readMe: Map<string, string>;
  _file: Map<string, { byteSize: number; text: string }>;
}

const _cache = new Map();
const _tree = new Map();
const _readMe = new Map();
const _file = new Map();

const initialState: IRepoInfoStore = {
  _file,
  _tree,
  _cache,
  _readMe,
  tree: [],
  isBlob: false,
  isLoading: false,
  activeTab: REPO_TABS.code,
};

const useRepoInfoStore = create<IRepoInfoStore>(() => initialState);

export default useRepoInfoStore;
