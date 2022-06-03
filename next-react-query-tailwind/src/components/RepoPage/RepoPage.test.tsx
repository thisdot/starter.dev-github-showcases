import { setLogger } from 'react-query';
import { screen, waitFor } from '@testing-library/react';
import { renderWithClient } from '@lib/testUtils';
import { setupMswServer } from '@lib/mswServer';
import RepoPage from './RepoPage.data';
import RenderContextValue from './RenderContextValue';

setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {},
});

setupMswServer();

describe('RepoPage', () => {
  test('renders an error if repository is not found', async () => {
    renderWithClient(
      <RepoPage name="badrepo" owner="satoshi">
        <RenderContextValue />
      </RepoPage>
    );
    expect(await screen.findByText(/error/i)).toBeInTheDocument();
  });

  test('adds repo name, owner, and default branch to repo context', async () => {
    renderWithClient(
      <RepoPage name="testrepo" owner="testowner">
        <RenderContextValue />
      </RepoPage>
    );
    expect(await screen.findByText(/"name": "testrepo"/i)).toBeInTheDocument();
    expect(
      await screen.findByText(/"owner": "testowner"/i)
    ).toBeInTheDocument();
    expect(await screen.findByText(/"branch": "main"/i)).toBeInTheDocument();
  });

  test('properly sets path on context', async () => {
    renderWithClient(
      <RepoPage
        name="testrepo"
        owner="testowner"
        branch="main"
        path={['src', 'components']}
      >
        <RenderContextValue />
      </RepoPage>
    );
    expect(
      await screen.findByText(/"path": "src\/components"/i)
    ).toBeInTheDocument();
  });

  test('starts loading data from repo query onto context', async () => {
    renderWithClient(
      <RepoPage name="testrepo" owner="testowner">
        <RenderContextValue />
      </RepoPage>
    );
    expect(
      await screen.findByText(/"isRepoLoading": true/i)
    ).toBeInTheDocument();
  });

  test('fetches repo data and adds it to the repo page context', async () => {
    renderWithClient(
      <RepoPage name="testrepo" owner="testowner">
        <RenderContextValue />
      </RepoPage>
    );
    await waitFor(() => {
      expect(screen.getByText(/"isRepoLoading": false/i)).toBeInTheDocument();
    });

    expect(await screen.findByText(/"isPrivate": false/i)).toBeInTheDocument();
    expect(await screen.findByText(/"stargazerCount": 5/i)).toBeInTheDocument();
    expect(await screen.findByText(/"forkCount": 3/i)).toBeInTheDocument();
    expect(await screen.findByText(/"watcherCount": 2/i)).toBeInTheDocument();
    expect(
      await screen.findByText(
        /"description": "Demo app for JSMarathon presentation: React Native E2E Testing with Detox"/i
      )
    ).toBeInTheDocument();
  });
});
