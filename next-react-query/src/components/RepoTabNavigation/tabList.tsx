import type { ComponentType } from 'react';
import { CodeIcon, InformationCircleIcon } from '@heroicons/react/outline';
import { PullRequestIcon } from '@components/Icons';

export interface TabItem {
  title: string;
  path?: string;
  Icon: ComponentType<{ className?: string }>;
}
export const tabList: TabItem[] = [
  {
    title: 'Code',
    path: '',
    Icon: CodeIcon,
  },
  {
    title: 'Issues',
    Icon: InformationCircleIcon,
  },
  {
    title: 'Pull Requests',
    Icon: PullRequestIcon,
  },
];
