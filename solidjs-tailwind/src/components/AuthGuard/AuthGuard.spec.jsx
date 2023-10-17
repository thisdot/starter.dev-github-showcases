import { Router } from '@solidjs/router';
import { render } from 'solid-testing-library';
import { useAuth } from '../../auth';
import { beforeEach, afterEach, describe, expect, it, vi } from 'vitest';
import 'whatwg-fetch';
import AuthGuard from './AuthGuard';

window.scrollTo = vi.fn();

vi.mock('../../auth', () => {
  return {
    useAuth: vi.fn(),
  };
});

describe('Auth guard', () => {
  beforeEach(async () => {
    useAuth.mockReturnValue({
      authStore: {
        token: null,
        user: null,
        isAuthenticated: false,
      },
      setAuth: vi.fn(),
    });
  });

  // clear mocks afeter each test
  afterEach(() => {
    vi.clearAllMocks();
    vi.resetAllMocks();
  });

  it('should mount', () => {
    const wrapper = render(() => (
      <Router>
        <AuthGuard />
      </Router>
    ));

    expect(wrapper).toBeTruthy();
  });

  it('redirects unauthenticated users to SignIn', async () => {
    const wrapper = render(() => (
      <Router>
        <AuthGuard />
      </Router>
    ));

    expect(await wrapper.queryByTestId('guard')).not.toBeInTheDocument();
  });

  it('should allow access to home page', async () => {
    // mock useAuth hook to return a valid user
    useAuth.mockReturnValue({
      authStore: {
        token: '12345',
        user: {
          avatarUrl: 'https://avatars.githubusercontent.com/u/22839396?v=4',
          login: 'hdjerry',
        },
        isAuthenticated: true,
      },
      setAuth: vi.fn(), // mock setAuth
    });
    const wrapper = render(() => (
      <Router>
        <AuthGuard />
      </Router>
    ));

    expect(await wrapper.queryByTestId('guard')).toBeInTheDocument();
  });
});
