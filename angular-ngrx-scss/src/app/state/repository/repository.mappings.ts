import {
  IssueLabel,
  Milestone,
  ReadmeApiResponse,
  RepoApiResponse,
  RepoContentsApiResponse,
  RepositoryState,
} from './repository.state';

export function reposApiToRepoStateMapping(data: {
  info: RepoApiResponse;
  prCount: number;
  contents: RepoContentsApiResponse[];
  readme: ReadmeApiResponse | null;
  milestones: Milestone[];
  labels: IssueLabel[];
  owner: string;
  path?: string;
  branch?: string;
}): RepositoryState {
  return {
    path: data.path ?? '',
    description: data.info.description,
    forkCount: data.info.forks_count,
    issueCount: data.info.open_issues_count,
    ownerName: data.owner,
    prCount: data.prCount,
    repoName: data.info.name,
    starCount: data.info.stargazers_count,
    tags: data.info.topics,
    tree: data.contents,
    activeBranch: data.branch ?? data.info.default_branch,
    selectedFile: null,
    openPullRequests: null,
    closedPullRequests: null,
    openIssues: null,
    closedIssues: null,
    visibility: data.info.visibility,
    watchCount: data.info.watchers_count,
    website: data.info.homepage,
    readme: data.readme?.content ?? '',
    milestones: data.milestones || [],
    labels: data.labels || [],
    pullsFilterParams: null,
    issuesFilterParams: null,
  };
}
