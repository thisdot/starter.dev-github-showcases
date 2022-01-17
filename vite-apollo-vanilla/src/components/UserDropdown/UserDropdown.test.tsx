import { fireEvent, render, waitFor, screen } from '@lib/testUtils';
import UserDropdown from '.';

const FAKE_AVATAR_URL = '/profile.png';

describe('UserDropdown', () => {
  test('dropdown opens when clicked and includes a Profile & Signout link', async () => {
    render(<UserDropdown image={FAKE_AVATAR_URL} username="testusername" />);
    fireEvent.click(
      screen.getByRole('button'),
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );
    await waitFor(() => {
      expect(screen.getByTestId('dropdown-menu')).toBeVisible();
    });

    expect(screen.getByText('Sign Out')).toBeVisible();
    expect(screen.getByText('Profile')).toBeVisible();
  });
});
