import { setLogger } from 'react-query';
import { screen } from '@testing-library/react';
import { renderWithClient } from '@lib/testUtils';
import { setupMswServer } from '@lib/mswServer';
import FileExplorer from './FileExplorer.data';

setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {},
});

setupMswServer();

describe('FileExplorer', () => {
  test('renders an error if repository is not found', async () => {
    renderWithClient(<FileExplorer repo="badrepo" owner="satoshi" />);
    expect(await screen.findByText(/error/i)).toBeInTheDocument();
  });

  test('successfully queries and renders root repository contents', async () => {
    renderWithClient(<FileExplorer repo="testrepo" owner="testowner" />);
    expect(await screen.findByText('App.js')).toBeInTheDocument();
  });

  test('successfully queries and renders repository contents for specific path', async () => {
    renderWithClient(
      <FileExplorer
        repo="testrepo"
        owner="testowner"
        branch="main"
        path="src"
      />
    );
    expect(await screen.findByText('Navigator.js')).toBeInTheDocument();
  });
});
