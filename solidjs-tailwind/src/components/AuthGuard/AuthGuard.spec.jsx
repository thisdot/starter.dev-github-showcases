import { Router } from '@solidjs/router';
import { render } from 'solid-testing-library';
import { beforeEach, describe, expect, it, afterAll, vi } from 'vitest';
import 'whatwg-fetch';
import AuthGuard from './AuthGuard';
import { useAuth } from '../../auth';
const { setAuth } = useAuth();

describe('Auth guard', () => {
  let wrapper;
  beforeEach(async () => {
    window.scrollTo = vi.fn();

    await setAuth({
      token: '12345',
      user: {
        avatarUrl: 'https://avatars.githubusercontent.com/u/22839396?v=4',
        login: 'hdjerry',
      },
    });

    wrapper = await render(() => (
      <Router>
        <AuthGuard />
      </Router>
    ));
  });

  afterAll(async () => {
    setAuth({
      token: null,
      user: null,
    });
  })

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should allow access to home page', async () => {
    expect(await wrapper.queryByTestId('guard')).toBeInTheDocument();
  });

  it('redirects unauthenticated users to SignIn', async () => {
    setAuth({
      token: null,
      user: null,
    });

    const PrivateComponent = () => <>Private!</>;
    const PublicComponent = () => <>Redirected!</>;
    wrapper = await render(() => (
      <Router>
        <Routes>
          <Route component={PublicComponent} path={ROUTES.SIGNIN} />
          <Route component={AuthGuard} path="/">
            <Route component={PrivateComponent} path={ROUTES.HOME} />
          </Route>
        </Routes>
      </Router>
    ));

});
