import type { TabItem } from '../TabNavigation';
import { CodeIcon, InformationCircleIcon } from '@heroicons/react/outline';
import { PullRequestIcon } from '@components/Icons';

export const tabList: TabItem[] = [
  {
    title: 'Code',
    path: '',
    Icon: CodeIcon,
  },
  {
    title: 'Issues',
    path: 'issues',
    Icon: InformationCircleIcon,
  },
  {
    title: 'Pull Requests',
    path: 'pulls',
    Icon: PullRequestIcon,
  },
];
