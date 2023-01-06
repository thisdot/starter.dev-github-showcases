import { beforeEach } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import NavBar from './NavBar.svelte';
import userEvent from '@testing-library/user-event';

const MOCK_NAVBAR = {
  username: 'thisdot',
  userAvatar: 'https://avatars.githubusercontent.com/u/22839396?v=4',
};

describe('Navbar Component', () => {
  beforeEach(() => {
    render(NavBar, {
      username: MOCK_NAVBAR.username,
      userAvatar: MOCK_NAVBAR.userAvatar,
    });
  });

  it('should render avatar of user', async () => {
    const image = screen.getByAltText(`${MOCK_NAVBAR.username} avatar`);
    expect(image.getAttribute('src')).toBe(MOCK_NAVBAR.userAvatar);
  });

  it('should render profile link', async () => {
    const navDropdownBtn = screen.getByTestId('nav-dropdown');
    await userEvent.click(navDropdownBtn);

    const link = screen.getByRole('link', { name: 'Profile' });
    expect(link.getAttribute('href')).toBe(`/${MOCK_NAVBAR.username}`);
  });

  it('should render sign out', async () => {
    const navDropdownBtn = screen.getByTestId('nav-dropdown');
    await userEvent.click(navDropdownBtn);

    const signOutBtn = screen.getByTestId('sign-out-btn');
    await userEvent.click(signOutBtn);

    expect(document.location.href).toEqual('http://localhost:3000/');
  });
});
