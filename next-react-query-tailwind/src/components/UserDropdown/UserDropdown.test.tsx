import { setLogger } from 'react-query';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithClient, createRouterProvider } from '@lib/testUtils';
import { setupMswServer } from '@lib/mswServer';
import UserDropdown from './UserDropdown.data';

setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {},
});

setupMswServer();

const FAKE_AVATAR_URL = '/profile.png';

describe('UserDropdown', () => {
  test('dropdown opens when clicked and includes a Profile & Signout link', async () => {
    const RouterProvider = createRouterProvider();
    renderWithClient(
      <RouterProvider>
        <UserDropdown image={FAKE_AVATAR_URL} />
      </RouterProvider>
    );
    fireEvent.click(
      screen.getByRole('button'),
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );
    expect(screen.getByTestId('dropdown-menu')).toBeVisible();
    expect(screen.getByText('Sign Out')).toBeVisible();
    // gets loaded async by current user query
    expect(await screen.findByText('Profile')).toBeVisible();
  });
});
