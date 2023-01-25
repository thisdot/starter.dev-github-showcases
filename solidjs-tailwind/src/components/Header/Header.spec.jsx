import { Router } from '@solidjs/router';
import { render } from 'solid-testing-library';
import { afterAll, beforeEach, describe, expect, it } from 'vitest';
import { useAuth } from '../../auth';
import Header from './Header.jsx';

describe('Header', () => {
  const { setAuth } = useAuth();
  let wrapper;
  beforeEach(async () => {
    wrapper = await render(() => (
      <Router>
        <Header />
      </Router>
    ));
  });

  afterAll(async () => {
    setAuth({
      token: null,
      user: null,
    });
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should show sign in', async () => {
    const signinText = await wrapper.getByText('Sign In');
    expect(signinText).toBeVisible();
  });

  it('should show user dropdown', async () => {
    setAuth({
      token: '',
      user: {
        avatarUrl: 'https://avatars.githubusercontent.com/u/22839396?v=4',
        login: 'hdjerry',
      },
    });
    const profileText = await wrapper.getByText('Profile');
    expect(profileText).toBeVisible();
  });
});
