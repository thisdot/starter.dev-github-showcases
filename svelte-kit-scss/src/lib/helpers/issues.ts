import {
  type GithubSearchIssueLabel,
  type GithubSearchIssue,
  type GithubSearchIssueApiResponse,
  type Issue,
  type IssueCollection,
  type IssueLabel,
  type IssueUser,
  type GithubSearchIssueUser,
  type GithubSearchIssueAssignee,
  type IssueAssignee,
  IssueState,
} from '$lib/interfaces';

const remapIssueLabel = (label: GithubSearchIssueLabel): IssueLabel => ({
  id: label.id,
  nodeId: label.node_id,
  url: label.url,
  name: label.name,
  color: label.color,
});

const remapIssueUser = (user: GithubSearchIssueUser): IssueUser => ({
  login: user.login,
  avatarUrl: user.avatar_url,
});

const remapIssueAssignee = (user: GithubSearchIssueAssignee): IssueAssignee => ({
  login: user.login,
  avatarUrl: user.avatar_url,
});

const remapIssueState = (state: string): IssueState => {
  if (!Object.values(IssueState).map(String).includes(state)) {
    throw new Error(`Unsupported IssueState: ${state}`);
  }
  return <IssueState>state;
};

export const remapIssue = (issue: GithubSearchIssue): Issue => {
  return {
    id: issue.id,
    user: remapIssueUser(issue.user),
    title: issue.title,
    number: issue.number,
    state: remapIssueState(issue.state),
    closedAt: issue.closed_at,
    createdAt: issue.created_at,
    labels: issue.labels.map(remapIssueLabel),
    commentsCount: issue.comments,
    labelCount: issue.labels?.length || 0,
    assignees: issue.assignees.map(remapIssueAssignee),
  };
};

export const remapRepoIssueCollection = (
  responseBody: GithubSearchIssueApiResponse
): IssueCollection => {
  return {
    totalCount: responseBody.total_count,
    issues: responseBody.items.map(remapIssue).filter(Boolean) as Issue[],
  };
};
