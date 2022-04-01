import { setLogger } from 'react-query';
import { screen } from '@testing-library/react';
import { renderWithClient, createRouterProvider } from '@lib/testUtils';
import { setupMswServer } from '@lib/mswServer';
import UserRepos from './UserRepos.data';

setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {},
});

setupMswServer();

describe('UserRepos', () => {
  test('displays an error to user if repos are unable to be fetched', async () => {
    const RouterProvider = createRouterProvider();
    renderWithClient(
      <RouterProvider>
        <UserRepos username="baduser" />
      </RouterProvider>
    );
    expect(await screen.findByTestId('errorMsg')).toBeInTheDocument();
  });

  test('successfully queries and renders a list of users repositories', async () => {
    const RouterProvider = createRouterProvider();
    renderWithClient(
      <RouterProvider>
        <UserRepos username="testuser" />
      </RouterProvider>
    );
    expect(await screen.findByText('jquery.shiptime')).toBeInTheDocument();
    expect(await screen.findByText('hapi-sequelize')).toBeInTheDocument();
    expect(
      await screen.findByText('Hapi plugin for the Sequelize ORM')
    ).toBeInTheDocument();
  });
});
