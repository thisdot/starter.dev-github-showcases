export type ExplorerContent = {
  isDirectory: boolean;
  name: string;
  latestCommitMessage: string;
  lastUpdated: string;
  to: string;
};

export type Templates = {
  bind: (arg: unknown) => {
    args: unknown;
  };
};
