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
      <RepoFilters {...repoFilters} languages={languages} resultCount={0} />
    </>
  );
}

describe('RepoFilters', () => {
  it('should keep correct state of filter values when updating inputs', async () => {
    render(<RepoFiltersState />);
    expect(screen.queryByTestId('filterText')).not.toBeInTheDocument();

    const testQuery = 'test query';
    fireEvent.change(screen.getByRole('search'), {
      target: { value: testQuery },
    });

    expect(screen.getByText(/matching/i)).toBeInTheDocument();
    expect(screen.getByText(testQuery)).toBeInTheDocument();

    fireEvent.click(screen.getByText('Type'));
    fireEvent.click(screen.getByText('Forks'));

    expect(screen.getByText(/forked/i)).toBeInTheDocument();

    fireEvent.click(screen.getByText('Language'));
    fireEvent.click(screen.getByText('TypeScript'));

    expect(screen.getByText(/written in/i)).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Sort'));
    fireEvent.click(screen.getByText('Stars'));

    expect(screen.getByText(/sorted by/i)).toBeInTheDocument();
    expect(screen.getByText('stargazers')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Clear filter'));

    expect(screen.queryByTestId('filterText')).not.toBeInTheDocument();
  });
});
