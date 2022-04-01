import { setLogger } from 'react-query';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithClient } from '@lib/testUtils';
import { setupMswServer } from '@lib/mswServer';
import RepoPulls from './RepoPulls.data';
import { RepoProvider } from '@context/RepoContext';

setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {},
});

setupMswServer();

const mockRepoContext = {
  isRepoLoading: false,
  name: 'react',
  owner: 'facebook',
  branch: 'master',
  path: '',
  data: {
    isPrivate: false,
    stargazerCount: 178780,
    watcherCount: 6657,
    forkCount: 36235,
    openIssueCount: 660,
    openPullRequestCount: 229,
    description:
      'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
    topics: [],
    isOrg: true,
  },
};

describe('RepoPulls', () => {
  test('successfully queries and renders pull requests list', async () => {
    renderWithClient(
      <RepoProvider value={mockRepoContext}>
        <RepoPulls />
      </RepoProvider>
    );
    expect(screen.getAllByTestId('skeleton').length).toBeGreaterThan(0);

    const pulls = await screen.findAllByTestId('pr');
    expect(pulls[0]).toHaveTextContent(
      'Fix streaming SSR in `react-dom/server.browser`'
    );
  });

  test('can navigate to and view closed issues', async () => {
    renderWithClient(
      <RepoProvider value={mockRepoContext}>
        <RepoPulls />
      </RepoProvider>
    );

    expect(screen.getAllByTestId('skeleton').length).toBeGreaterThan(0);

    const pulls = await screen.findAllByTestId('pr');
    expect(pulls[0]).toHaveTextContent(
      'Fix streaming SSR in `react-dom/server.browser`'
    );

    fireEvent.click(screen.getByTestId('closedIssuesButton'));

    let closedPulls = screen.getAllByTestId('pr');
    expect(closedPulls.at(0)).toHaveTextContent(
      'Remove unstableAvoidThisFallback from OSS'
    );
  });

  test('can navigate to next page of issues and back', async () => {
    renderWithClient(
      <RepoProvider value={mockRepoContext}>
        <RepoPulls />
      </RepoProvider>
    );

    expect(screen.getAllByTestId('skeleton').length).toBeGreaterThan(0);

    let pulls = await screen.findAllByTestId('pr');
    expect(pulls.at(0)).toHaveTextContent(
      'Fix streaming SSR in `react-dom/server.browser`'
    );

    fireEvent.click(screen.getByText('Next'));

    let nextPagePulls = await screen.findAllByTestId('pr');
    expect(nextPagePulls.at(0)).toHaveTextContent(
      'Fixed else statment for ReactDomServerFormatConfig.js (#22309)'
    );

    fireEvent.click(screen.getByText('Previous'));
    let firstPagePulls = await screen.findAllByTestId('pr');
    expect(firstPagePulls.at(0)).toHaveTextContent(
      'Fix streaming SSR in `react-dom/server.browser`'
    );
  });

  test('can filter issues by label', async () => {
    renderWithClient(
      <RepoProvider value={mockRepoContext}>
        <RepoPulls />
      </RepoProvider>
    );

    expect(screen.getAllByTestId('skeleton').length).toBeGreaterThan(0);

    let pulls = await screen.findAllByTestId('pr');
    expect(pulls.at(0)).toHaveTextContent(
      'Fix streaming SSR in `react-dom/server.browser`'
    );

    fireEvent.click(screen.getByText('Label'));
    fireEvent.click(screen.getByText('React Core Team', { ignore: '.label' }));

    let filteredPulls = await screen.findAllByTestId('pr');
    filteredPulls.forEach((pr) => {
      expect(pr).toHaveTextContent('React Core Team');
    });
  });
});
