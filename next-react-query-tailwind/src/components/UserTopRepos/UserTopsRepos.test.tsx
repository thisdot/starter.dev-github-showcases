import { setLogger } from 'react-query';
import { screen } from '@testing-library/react';
import { renderWithClient } from '@lib/testUtils';
import { setupMswServer } from '@lib/mswServer';
import UserTopRepos from './UserTopRepos.data';

setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {},
});

setupMswServer();

describe('UserTopRepos', () => {
  test('successfully queries and renders a list of users top repositories', async () => {
    renderWithClient(<UserTopRepos />);
    expect(await screen.findByText('gh-users')).toBeInTheDocument();
    expect(await screen.findByText('stock-sniper')).toBeInTheDocument();
    expect(
      await screen.findByText(
        'Implementation of the GitHub user search in React'
      )
    ).toBeInTheDocument();
  });
});
