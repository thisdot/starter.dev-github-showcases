import type { TabItem } from '../TabNavigation';
import {
  CodeBracketIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline';
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
      Icon: CodeBracketIcon,
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
