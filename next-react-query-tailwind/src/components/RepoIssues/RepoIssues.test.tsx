import { setLogger } from 'react-query';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithClient } from '@lib/testUtils';
import { setupMswServer } from '@lib/mswServer';
import RepoIssues from './RepoIssues.data';
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

describe('RepoIssues', () => {
  test('successfully queries and renders issue list', async () => {
    renderWithClient(
      <RepoProvider value={mockRepoContext}>
        <RepoIssues />
      </RepoProvider>
    );
    expect(screen.getAllByTestId('skeleton').length).toBeGreaterThan(0);

    const issues = await screen.findAllByTestId('issue');
    expect(issues[0]).toHaveTextContent(
      'Bug: onMouse leave triggered on hidden components if hovered over before hidden'
    );
  });

  test('can navigate to and view closed issues', async () => {
    renderWithClient(
      <RepoProvider value={mockRepoContext}>
        <RepoIssues />
      </RepoProvider>
    );

    expect(screen.getAllByTestId('skeleton').length).toBeGreaterThan(0);

    let openIssues = await screen.findAllByTestId('issue');
    expect(openIssues.at(0)).toHaveTextContent(
      'Bug: onMouse leave triggered on hidden components if hovered over before hidden'
    );

    fireEvent.click(screen.getByTestId('closedIssuesButton'));

    let closedIssues = screen.getAllByTestId('issue');
    expect(closedIssues.at(0)).toHaveTextContent('React 18');
  });

  test('issues filtered to no results show empty component', async () => {
    renderWithClient(
      <RepoProvider value={mockRepoContext}>
        <RepoIssues />
      </RepoProvider>
    );

    expect(screen.getAllByTestId('skeleton').length).toBeGreaterThan(0);

    let openIssues = await screen.findAllByTestId('issue');
    expect(openIssues.at(0)).toHaveTextContent(
      'Bug: onMouse leave triggered on hidden components if hovered over before hidden'
    );

    fireEvent.click(screen.getByText('Milestones'));
    fireEvent.click(screen.getByText('18.0.0'));

    expect(await screen.findByTestId('issues-empty')).toBeVisible();
  });

  test('can navigate to next page of issues and back', async () => {
    renderWithClient(
      <RepoProvider value={mockRepoContext}>
        <RepoIssues />
      </RepoProvider>
    );

    expect(screen.getAllByTestId('skeleton').length).toBeGreaterThan(0);

    let openIssues = await screen.findAllByTestId('issue');
    expect(openIssues.at(0)).toHaveTextContent(
      'Bug: onMouse leave triggered on hidden components if hovered over before hidden'
    );

    fireEvent.click(screen.getByText('Next'));

    let nextPageIssues = await screen.findAllByTestId('issue');
    expect(nextPageIssues.at(0)).toHaveTextContent(
      '[DevTools Bug]: Components without own dimensions not highlighted at all'
    );

    fireEvent.click(screen.getByText('Previous'));
    let firstPageIssues = await screen.findAllByTestId('issue');
    expect(firstPageIssues.at(0)).toHaveTextContent(
      'Bug: onMouse leave triggered on hidden components if hovered over before hidden'
    );
  });

  test('can filter issues by label', async () => {
    renderWithClient(
      <RepoProvider value={mockRepoContext}>
        <RepoIssues />
      </RepoProvider>
    );

    expect(screen.getAllByTestId('skeleton').length).toBeGreaterThan(0);

    let openIssues = await screen.findAllByTestId('issue');
    expect(openIssues.at(0)).toHaveTextContent(
      'Bug: onMouse leave triggered on hidden components if hovered over before hidden'
    );

    fireEvent.click(screen.getByText('Label'));
    fireEvent.click(screen.getByText('React 18', { ignore: '.label' }));

    let filteredIssues = await screen.findAllByTestId('issue');
    filteredIssues.forEach((issue) => {
      expect(issue).toHaveTextContent('React 18');
    });
  });

  test('can sort issues list', async () => {
    renderWithClient(
      <RepoProvider value={mockRepoContext}>
        <RepoIssues />
      </RepoProvider>
    );

    expect(screen.getAllByTestId('skeleton').length).toBeGreaterThan(0);

    let openIssues = await screen.findAllByTestId('issue');
    expect(openIssues.at(0)).toHaveTextContent(
      'Bug: onMouse leave triggered on hidden components if hovered over before hidden'
    );

    fireEvent.click(screen.getByText('Sort'));
    fireEvent.click(screen.getByText('Oldest'));

    let filteredIssues = await screen.findAllByTestId('issue');
    expect(filteredIssues.at(0)).toHaveTextContent(
      'Declarative API for installing global DOM event handlers'
    );
  });
});
