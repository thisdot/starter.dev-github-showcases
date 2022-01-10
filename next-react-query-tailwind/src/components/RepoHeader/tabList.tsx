import type { TabItem } from '../TabNavigation';
import { CodeIcon, InformationCircleIcon } from '@heroicons/react/outline';
import { PullRequestIcon } from '@components/Icons';

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
