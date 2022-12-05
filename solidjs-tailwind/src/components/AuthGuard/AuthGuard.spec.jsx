import { Router, Route } from '@solidjs/router';
import { render } from 'solid-testing-library';
import { beforeEach, describe, expect, it, afterAll } from 'vitest';
import ROUTES from '../../routes';
import AuthGuard from './AuthGuard';
import { useAuth } from '../../auth';
import { Routes } from '@solidjs/router';

describe('Auth guard', () => {
  const { setAuth } = useAuth();
  let wrapper;
  beforeEach(async () => {
    window.scrollTo = (x, y) => {
      document.documentElement.scrollTop = y;
    };

    window.fetch = () => {
      return new Promise((resolve) => {
        resolve({
          json: () => {
            return new Promise((resolve) => {
              resolve({
                login: 'test',
                avatarUrl: 'test',
              });
            });
          },
        });
      });
    };

    setAuth({
      token: '12345',
      user: {
        avatarUrl: 'https://avatars.githubusercontent.com/u/22839396?v=4',
        login: 'hdjerry',
      },
    });

    wrapper = await render(() => (
      <Router>
        <Route component={AuthGuard} path="/">
          <div>Hello World!</div>
        </Route>
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

  it('should allow access to home page', async () => {
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
    expect(wrapper.queryByText('Private!')).toBeInTheDocument();
    expect(wrapper.queryByText('Redirected!')).not.toBeInTheDocument();
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

    expect(wrapper.queryByText('Private!')).not.toBeInTheDocument();
    expect(wrapper.queryByText('Redirected!')).toBeInTheDocument();
  });
});
