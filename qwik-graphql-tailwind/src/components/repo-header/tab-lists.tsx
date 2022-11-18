import { CodeIcon, InformationCircleIcon, IssuesIcon, PullRequestIcon } from '../icons';
import { TabItem } from '../tab-navigation/types';

export const tabList: TabItem[] = [
  {
    title: 'Code',
    path: '',
    Icon: CodeIcon,
  },
  {
    title: 'Issues',
    path: 'issues',
    Icon: IssuesIcon,
  },
  {
    title: 'Pull Requests',
    path: 'pulls',
    Icon: PullRequestIcon,
  },
];

export function createTabList({
  issueCount = 0,
  pullRequestCount = 0,
}: {
  issueCount?: number;
  pullRequestCount?: number;
}): TabItem[] {
  return [
    {
      title: 'Code',
      path: '',
      Icon: CodeIcon,
    },
    {
      title: 'Issues',
      path: 'issues',
      Icon: InformationCircleIcon,
      count: issueCount,
    },
    {
      title: 'Pull Requests',
      path: 'pulls',
      Icon: PullRequestIcon,
      count: pullRequestCount,
    },
  ];
}
