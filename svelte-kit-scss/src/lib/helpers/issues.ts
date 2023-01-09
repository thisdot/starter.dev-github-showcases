import {
  type GithubSearchIssue,
  type Issue,
  type IssueUser,
  type GithubSearchIssueUser,
  IssueState,
} from '$lib/interfaces';
import { remapIssueLabel } from './issue-label';

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
    htmlUrl: issue.html_url,
  };
};
