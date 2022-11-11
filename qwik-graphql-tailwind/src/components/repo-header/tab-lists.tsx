import { CodeIcon, IssuesIcon, PullRequestIcon } from '../icons';
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
