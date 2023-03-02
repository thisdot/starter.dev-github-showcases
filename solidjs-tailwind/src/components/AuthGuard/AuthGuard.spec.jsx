import { Router } from '@solidjs/router';
import { render } from 'solid-testing-library';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import 'whatwg-fetch';
import AuthGuard from './AuthGuard';

describe('Auth guard', () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = await render(() => (
      <Router>
        <AuthGuard />
      </Router>
    ));
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });

  it('redirects unauthenticated users to SignIn', async () => {
    vi.mock('../../auth', async () => {
      const actual = await vi.importActual('../../auth');
      return {
        ...actual,
        useAuth: () => ({
          authStore: {
            token: null,
            user: null,
            isAuthenticated: false,
          },
          setAuth: vi.fn(),
        }),
      };
    });

    it('should allow access to home page', async () => {
      vi.mock('../../auth', async () => {
        const actual = await vi.importActual('../../auth');
        return {
          ...actual,
          useAuth: () => ({
            authStore: {
              token: '12345',
              user: {
                avatarUrl:
                  'https://avatars.githubusercontent.com/u/22839396?v=4',
                login: 'hdjerry',
              },
              isAuthenticated: true,
            },
            setAuth: vi.fn(),
          }),
        };
      });

      expect(await wrapper.queryByTestId('guard')).toBeInTheDocument();
    });

    expect(await wrapper.queryByTestId('guard')).not.toBeInTheDocument();
  });
});
