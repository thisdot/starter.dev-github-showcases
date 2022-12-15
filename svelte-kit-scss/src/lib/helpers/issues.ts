import {
  type GithubSearchIssueLabel,
  type GithubSearchIssue,
  type Issue,
  type IssueLabel,
  type IssueUser,
  type GithubSearchIssueUser,
  IssueState,
} from '$lib/interfaces';

const remapIssueLabel = (label: GithubSearchIssueLabel): IssueLabel => ({
  id: label.id,
  url: label.url,
  name: label.name,
  color: label.color,
});

const remapIssueUser = (user: GithubSearchIssueUser): IssueUser => ({
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
    assignees: issue.assignees.map(remapIssueUser),
    closedAt: issue.closed_at,
    commentsCount: issue.comments,
    createdAt: issue.created_at,
    id: issue.id,
    labels: issue.labels.map(remapIssueLabel),
    number: issue.number,
    state: remapIssueState(issue.state),
    title: issue.title,
    user: remapIssueUser(issue.user),
  };
};
