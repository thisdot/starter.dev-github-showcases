import type { ReactNode } from 'react';
import { createContext, useContext } from 'react';

export interface RepoContextInterface {
  name: string;
  owner: string;
  branch: string;
  path: string;
  isRepoLoading?: boolean;
  basePath: string;
  data?: {
    isPrivate: boolean;
    stargazerCount: number;
    forkCount: number;
    watcherCount: number;
    openIssueCount: number;
    openPullRequestCount: number;
    description?: string | null;
    homepageUrl?: string | null;
    topics: string[];
    isOrg: boolean;
  };
}

interface RepoProviderProps {
  children: ReactNode;
  value: RepoContextInterface;
}

export const RepoContext = createContext<RepoContextInterface | undefined>(
  undefined
);

export function RepoProvider({ children, value }: RepoProviderProps) {
  return (
    <RepoContext.Provider
      value={{
        isRepoLoading: false,
        ...value,
      }}
    >
      {children}
    </RepoContext.Provider>
  );
}

export function useRepo() {
  const context = useContext(RepoContext);
  if (context === undefined) {
    throw new Error('useRepo must be used within a RepoPage');
  }
  return context;
}
