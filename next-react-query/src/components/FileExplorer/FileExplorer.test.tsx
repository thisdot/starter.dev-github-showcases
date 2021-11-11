import { setLogger } from 'react-query';
import { screen, waitFor } from '@testing-library/react';
import { renderWithClient, ErrorBoundaryTestComponent } from '@lib/testUtils';
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
  test('throws if tree is not found at repo path', async () => {
    const cerr = console.error;
    console.error = jest.fn();
    renderWithClient(
      <ErrorBoundaryTestComponent>
        <RepoProvider
          value={{
            name: 'testrepo',
            owner: 'testowner',
            branch: 'main',
            path: 'badpath',
          }}
        >
          <FileExplorer />
        </RepoProvider>
      </ErrorBoundaryTestComponent>
    );

    await waitFor(async () => {
      expect(screen.getByTestId('errorBoundary')).toBeInTheDocument();
    });
    console.error = cerr;
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
