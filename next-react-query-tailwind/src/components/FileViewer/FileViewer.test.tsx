import { setLogger } from 'react-query';
import { screen, waitFor } from '@testing-library/react';
import { renderWithClient, ErrorBoundaryTestComponent } from '@lib/testUtils';
import { setupMswServer } from '@lib/mswServer';
import FileViewer from './FileViewer.data';
import { RepoProvider } from '@context/RepoContext';

setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {},
});

setupMswServer();

describe('FileViewer', () => {
  test('throws if file is not found at repo path', async () => {
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
          <FileViewer />
        </RepoProvider>
      </ErrorBoundaryTestComponent>
    );

    await waitFor(async () => {
      expect(screen.getByTestId('errorBoundary')).toBeInTheDocument();
    });
    console.error = cerr;
  });

  test('successfully queries and renders text file in text code block', async () => {
    renderWithClient(
      <RepoProvider
        value={{
          name: 'testrepo',
          owner: 'testowner',
          branch: 'main',
          path: '.buckconfig',
        }}
      >
        <FileViewer />
      </RepoProvider>
    );

    expect(await screen.findByTestId('text-block')).toBeInTheDocument();
  });

  test('successfully queries and renders text file in highlighted code block', async () => {
    renderWithClient(
      <RepoProvider
        value={{
          name: 'testrepo',
          owner: 'testowner',
          branch: 'main',
          path: 'package.json',
        }}
      >
        <FileViewer />
      </RepoProvider>
    );
    expect(await screen.findByTestId('code-block')).toBeInTheDocument();
  });

  test('successfully queries and renders file text content for specific path', async () => {
    renderWithClient(
      <RepoProvider
        value={{
          name: 'testrepo',
          owner: 'testowner',
          branch: 'main',
          path: 'src/Navigator.js',
        }}
      >
        <FileViewer />
      </RepoProvider>
    );
    expect(await screen.findByTestId('code-block')).toBeInTheDocument();
  });
});
