import { fireEvent, render, screen } from '@testing-library/react-native';
import IssuesPRClearFilter from '.';

const mockClearFilterFn = jest.fn();

jest.mock('../../hooks/stores/usePRAndIssueHeaderStore', () => {
  return jest.fn(() => ({
    clearFilter: mockClearFilterFn,
  }));
});

describe('IssuesPRClearFilter', () => {
  it('The IssuesPRClearFilter component is rendered', () => {
    render(<IssuesPRClearFilter />);
    expect(screen.getByText('Clear Filter')).toBeTruthy();
  });

  it('should fire the clear filter event', () => {
    render(<IssuesPRClearFilter />);
    const ClearFilterText = screen.getByText('Clear Filter');

    fireEvent(ClearFilterText, 'press');
    expect(mockClearFilterFn).toBeCalled();
  });
});
