import { create } from 'zustand';
import { Platform } from 'react-native';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { PageInfo } from '../../types/user-repos-type';
import { Issue, MilestoneProps } from '../../types/issues-type';
import { Label } from '../../types/label-type';
import { PullRequest } from '../../types/pull-requests-type';

interface IAppStore {
  error?: string;
  login?: string;
  branch?: string;
  isLoading: boolean;
  file?: {
    byteSize: number;
    text: string;
  };
  issues: {
    openIssues: {
      issues: Issue[];
      totalCount: number;
      pageInfo: PageInfo;
    };
    closedIssues: {
      issues: Issue[];
      totalCount: number;
      pageInfo: PageInfo;
    };
    milestones: MilestoneProps[];
    labels: Label[];
  };
  pullRequests: {
    openPullRequests: {
      pullRequests: PullRequest[];
      totalCount: number;
      pageInfo: PageInfo;
    };
    closedPullRequests: {
      pullRequests: PullRequest[];
      totalCount: number;
      pageInfo: PageInfo;
    };
    labels: Label[];
  };
}

const initialState: IAppStore = {
  login: undefined,
  isLoading: false,
  issues: {
    openIssues: {
      issues: [],
      totalCount: 0,
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
      },
    },
    closedIssues: {
      issues: [],
      totalCount: 0,
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
      },
    },
    milestones: [],
    labels: [],
  },
  pullRequests: {
    openPullRequests: {
      pullRequests: [],
      totalCount: 0,
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
      },
    },
    closedPullRequests: {
      pullRequests: [],
      totalCount: 0,
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
      },
    },
    labels: [],
  },
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
