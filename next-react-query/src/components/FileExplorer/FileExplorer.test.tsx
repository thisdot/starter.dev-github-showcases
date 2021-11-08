import { setLogger } from 'react-query';
import { screen } from '@testing-library/react';
import { renderWithClient } from '@lib/testUtils';
import { setupMswServer } from '@lib/mswServer';
import FileExplorer from './FileExplorer.data';
import { RepoProvider } from '@context/RepoContext';

setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {},
});

setupMswServer();

describe('FileExplorer', () => {
  test('renders an error if repository is not found', async () => {
    renderWithClient(
      <RepoProvider
        value={{
          name: 'badrepo',
          owner: 'satoshi',
          branch: 'main',
          path: '',
        }}
      >
        <FileExplorer />
      </RepoProvider>
    );
    expect(await screen.findByText(/error/i)).toBeInTheDocument();
  });

  test('successfully queries and renders root repository contents', async () => {
    renderWithClient(
      <RepoProvider
        value={{
          name: 'testrepo',
          owner: 'testowner',
          branch: 'main',
          path: '',
        }}
      >
        <FileExplorer />
      </RepoProvider>
    );
    expect(await screen.findByText('App.js')).toBeInTheDocument();
  });

  test('successfully queries and renders repository contents for specific path', async () => {
    renderWithClient(
      <RepoProvider
        value={{
          name: 'testrepo',
          owner: 'testowner',
          branch: 'main',
          path: 'src',
        }}
      >
        <FileExplorer />
      </RepoProvider>
    );
    expect(await screen.findByText('Navigator.js')).toBeInTheDocument();
  });
});
