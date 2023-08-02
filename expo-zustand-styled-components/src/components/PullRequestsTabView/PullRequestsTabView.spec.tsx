import { render, within } from '@testing-library/react-native';

import PullRequestsTabView from './PullRequestsTabView';
import { usePRAndIssueHeaderStore } from '../../hooks/stores';

// Mocking the usePRAndIssueHeaderStore hook
jest.mock('../../hooks/stores', () => ({
  usePRAndIssueHeaderStore: jest.fn(),
}));

describe('PullRequestsTabView', () => {
  const samplePullRequests = {
    openPullRequests: {
      pullRequests: [
        {
          login: 'user1',
          commentCount: 2,
          labelCount: 1,
          labels: [],
          title: 'PR 1',
          number: 1,
          createdAt: '2023-03-31T23:27:02Z',
          closedAt: null,
          state: 'OPEN',
          url: 'gh/pull/1',
        },
        {
          login: 'user2',
          commentCount: 2,
          labelCount: 0,
          labels: [],
          title: 'PR 2',
          number: 2,
          createdAt: '2023-03-31T22:18:30Z',
          closedAt: null,
          state: 'OPEN',
          url: 'gh/pull/2',
        },
      ],
      totalCount: 2,
    },
    closedPullRequests: {
      pullRequests: [
        {
          login: 'user3',
          commentCount: 2,
          labelCount: 0,
          labels: [],
          title: 'PR 3',
          number: 3,
          createdAt: '2023-03-24T21:56:37Z',
          closedAt: '2023-03-31T17:49:10Z',
          state: 'MERGED',
          url: 'gh/pull/3',
        },
        {
          login: 'user4',
          commentCount: 2,
          labelCount: 0,
          labels: [],
          title: 'PR 4',
          number: 4,
          createdAt: '2023-03-24T20:39:05Z',
          closedAt: '2023-03-27T20:34:10Z',
          state: 'MERGED',
          url: 'gh/pull/4',
        },
        {
          login: 'user5',
          commentCount: 2,
          labelCount: 0,
          labels: [],
          title: 'PR 5',
          number: 5,
          createdAt: '2023-03-24T20:39:05Z',
          closedAt: '2023-03-27T20:34:10Z',
          state: 'MERGED',
          url: 'gh/pull/5',
        },
      ],
      totalCount: 3,
    },
    labels: [],
  };

  const mockHookReturn = {
    activeTab: 'open',
    label: 'bug',
    sortBy: 'newest',
    milestones: [],
    labels: [],
    setActiveTab: jest.fn(),
    setSortBy: jest.fn(),
    setLabel: jest.fn(),
    setMilestone: jest.fn(),
    setMilestones: jest.fn(),
    setLabels: jest.fn(),
    clearFilter: jest.fn(),
  };

  // Helper function to find a text that is divided across two elements
  const findSiblingText = (container, text1, text2) => {
    const elementsWithText1 = within(container).getAllByText(text1);
    const elementsWithText2 = within(container).getAllByText(text2);

    return elementsWithText1.some((el1) =>
      elementsWithText2.some((el2) => el1.parentNode === el2.parentNode)
    );
  };

  it('renders correctly', () => {
    (usePRAndIssueHeaderStore as any as jest.Mock).mockReturnValue(mockHookReturn);

    const { container, getByText } = render(
      <PullRequestsTabView navigation={{}} pullRequests={samplePullRequests} />
    );

    const showsTwoOpen = findSiblingText(container, '2', 'Open');
    expect(showsTwoOpen).toBeTruthy();
    const showsThreeClosed = findSiblingText(container, '3', 'Closed');
    expect(showsThreeClosed).toBeTruthy();
    expect(getByText('PR 1')).toBeTruthy();
    expect(getByText('PR 2')).toBeTruthy();
  });

  it('renders empty list message correctly', () => {
    (usePRAndIssueHeaderStore as any as jest.Mock).mockReturnValue({
      ...mockHookReturn,
      activeTab: 'closed',
    });

    const { getByText, queryByText } = render(
      <PullRequestsTabView
        navigation={{}}
        pullRequests={{
          ...samplePullRequests,
          closedPullRequests: { ...samplePullRequests.closedPullRequests, pullRequests: [] },
        }}
      />
    );

    expect(getByText('No closed Pull Request found.')).toBeTruthy();
    expect(queryByText('PR 3')).toBeNull();
    expect(queryByText('PR 4')).toBeNull();
    expect(queryByText('PR 5')).toBeNull();
  });

  it('renders closed PRs correctly', () => {
    (usePRAndIssueHeaderStore as any as jest.Mock).mockReturnValue({
      ...mockHookReturn,
      activeTab: 'closed',
    });

    const { getByText } = render(
      <PullRequestsTabView navigation={{}} pullRequests={samplePullRequests} />
    );

    expect(getByText('PR 3')).toBeTruthy();
    expect(getByText('PR 4')).toBeTruthy();
    expect(getByText('PR 5')).toBeTruthy();
  });
});
