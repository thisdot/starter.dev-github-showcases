import { A } from '@solidjs/router';
import { useAuth } from '../../auth';
import { GitHubLogo } from './github-logo';
import styles from './Header.module.css';
import { SIGN_IN_BASE_URL } from '../../utils/constants';
import { UserDropdown } from '../UserDropdown';
import { createQuery } from '@tanstack/solid-query';
import { Match, Switch, createEffect } from 'solid-js';
import getViewerProfile from '~/services/get-viewer-profile';

const Header = () => {
  const { authStore, setAuth } = useAuth();

  const query = createQuery(() => ['viewer'], getViewerProfile);

  createEffect(() => {
    if (query.isSuccess && !query.isLoading) {
      setAuth({ ...authStore, user: query.data });
    }
  });

  return (
    <header class={styles.header}>
      <A href="/">
        <GitHubLogo />
      </A>

      <div>
        <Switch>
          <Match when={query.isLoading}>
            <UserDropdown image={''} username={''} />
          </Match>
          <Match when={query.isError}>
            <span class={styles.navLink}>error</span>
          </Match>
          <Match when={query.isSuccess && authStore.user}>
            <UserDropdown
              image={authStore.user?.avatarUrl || ''}
              username={authStore.user?.login || ''}
            />
          </Match>
          <Match when={!authStore.token}>
            <A
              href={`${SIGN_IN_BASE_URL}?redirect_url=${window.location.href}`}
            >
              <span class={styles.navLink}>Sign In</span>
            </A>
          </Match>
        </Switch>
      </div>
    </header>
  );
};

export default Header;
