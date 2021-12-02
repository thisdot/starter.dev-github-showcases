import { render, screen, fireEvent } from '@testing-library/react';
import { useRepoFilters } from './useRepoFilters';
import RepoFilters from './RepoFilters';

const languages = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Javascript',
    value: 'javascript',
  },
  {
    label: 'TypeScript',
    value: 'typescript',
  },
  {
    label: 'Python',
    value: 'python',
  },
];

function RepoFiltersState() {
  const repoFilters = useRepoFilters();
  return (
    <>
      <RepoFilters {...repoFilters} languages={languages} />
      <div data-testid="query-value">{repoFilters.state.query}</div>
      <div data-testid="type-value">{repoFilters.state.type}</div>
      <div data-testid="language-value">{repoFilters.state.language}</div>
      <div data-testid="sort-value">{repoFilters.state.sort}</div>
    </>
  );
}

describe('RepoFilters', () => {
  it('should keep correct state of filter values when updating inputs', () => {
    render(<RepoFiltersState />);
    expect(screen.getByTestId('query-value')).toHaveTextContent('');
    expect(screen.getByTestId('type-value')).toHaveTextContent('0');
    expect(screen.getByTestId('language-value')).toHaveTextContent('all');
    expect(screen.getByTestId('sort-value')).toHaveTextContent('UPDATED_AT');

    const testQuery = 'test query';
    fireEvent.change(screen.getByRole('search'), {
      target: { value: testQuery },
    });
    expect(screen.getByTestId('query-value')).toHaveTextContent(testQuery);

    fireEvent.click(screen.getByText('Type'));
    fireEvent.click(screen.getByText('Forks'));
    expect(screen.getByTestId('type-value')).toHaveTextContent('1');

    fireEvent.click(screen.getByText('Language'));
    fireEvent.click(screen.getByText('TypeScript'));
    expect(screen.getByTestId('language-value')).toHaveTextContent(
      'typescript'
    );

    fireEvent.click(screen.getByText('Sort'));
    fireEvent.click(screen.getByText('Stars'));
    expect(screen.getByTestId('sort-value')).toHaveTextContent('STARGAZERS');
  });
});
