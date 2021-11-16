import type { TabItem } from '../TabNavigation';
import { BookOpenIcon } from '@heroicons/react/outline';
import { GitRepoIcon } from '@components/Icons';

export const tabList: TabItem[] = [
  {
    title: 'Overview',
    Icon: BookOpenIcon,
  },
  {
    title: 'Repositories',
    path: '',
    Icon: GitRepoIcon,
  },
];
