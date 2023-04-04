import { fireEvent, render, screen } from '@testing-library/react-native';
import TabNavigation from '.';
import { createTabList } from '../RepoSubHeader/tabList';

const mockOnchangeFn = jest.fn();

const tabNavigationProps = {
  tabs: createTabList({ issuesCount: 10, pullRequestsCount: 10 }),
  activeTab: 'Code',
  onChange: mockOnchangeFn,
};

describe('TabNavigation', () => {
  it('The TabNavigation component is rendered', () => {
    render(<TabNavigation {...tabNavigationProps} />);
    expect(screen.getByText('Code')).toBeTruthy();
    expect(screen.getByText('Issues')).toBeTruthy();
    expect(screen.getByText('Pull Requests')).toBeTruthy();
  });

  it('should fire an event when a tab is clicked', () => {
    render(<TabNavigation {...tabNavigationProps} />);
    const IssuesTab = screen.getByText('Issues');

    fireEvent(IssuesTab, 'press');
    expect(mockOnchangeFn).toBeCalled();
  });
});
