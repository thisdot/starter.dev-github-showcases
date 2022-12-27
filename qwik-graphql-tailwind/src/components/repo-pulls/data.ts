import { OrderDirection, PullRequestOrderField } from './types';
import { Tabs } from '../../context/issue-pr-store';

export const getSortOptions = (defaultTab: Tabs, activeTab: Tabs) => [
  {
    value: `${PullRequestOrderField[`${activeTab === defaultTab ? 'CreatedAt' : 'ClosedAt'}`]}^${OrderDirection.Desc}`,
    label: activeTab === defaultTab ? 'Newest' : 'Recently Closed',
  },
  {
    value: `${PullRequestOrderField[`${activeTab === defaultTab ? 'CreatedAt' : 'ClosedAt'}`]}^${OrderDirection.Asc}`,
    label: activeTab === defaultTab ? 'Oldest' : 'Least recently Closed',
  },
  {
    label: 'Most commented',
    value: `${PullRequestOrderField.Comments}^${OrderDirection.Desc}`,
  },
  {
    label: 'Least commented',
    value: `${PullRequestOrderField.Comments}^${OrderDirection.Asc}`,
  },
];

export const labelOptions = [
  {
    value: 'enhancement',
    label: 'enhancement',
    color: '#a2eeef',
    description: 'New feature or request',
  },
  {
    value: 'WIP DO NOT MERGE',
    label: 'WIP DO NOT MERGE',
    color: '#FA3C07',
  },
  {
    value: 'invalid',
    label: 'invalid',
    color: '#e4e669',
    description: "This doesn't seem right",
  },
];
export const milestonesOptions = [
  {
    value: 'Issue With No Milestone',
    label: 'Issue With No Milestone',
  },
];
