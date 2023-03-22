import PullRequestIcon from '../Icons/PullRequestIcon';
import IssueIcon from '../Icons/IssueIcon';
import CodeIcon from '../Icons/CodeIcon';
import { REPO_TABS } from '../../utils/constants';

interface createTabListProps {
  issuesCount: number;
  pullRequestsCount: number;
}

export function createTabList({ issuesCount, pullRequestsCount }: createTabListProps) {
  return [
    {
      title: REPO_TABS.code,
      path: 'Code',
      Icon: CodeIcon,
    },
    {
      title: REPO_TABS.issues,
      path: 'Issues',
      Icon: IssueIcon,
      count: issuesCount || 0,
    },
    {
      title: REPO_TABS.pull_requests,
      path: 'PullRequests',
      Icon: PullRequestIcon,
      count: pullRequestsCount || 0,
    },
  ];
}
