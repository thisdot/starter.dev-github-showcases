import { NavLink } from '@solidjs/router';
import { Show } from 'solid-js';
import { useAuth } from '../../auth';
import { UserDropdown } from '../UserDropdown';

import { GithubLogo } from './GithubLogo';
import * as styles from './Header.classNames';

const Header = () => {
  const { authStore } = useAuth();

    return (
      <Show when={authStore.user}>
        <header class={styles.header}>
          <NavLink href="/">
            <GithubLogo />
          </NavLink>
          <div>
            {authStore.user ? (
              <UserDropdown
                image={authStore.user.avatarUrl}
                username={authStore.user.login}
              />
            ) : (
              <NavLink href="/api/auth/signin">
                <span class={styles.navLink}>Sign In</span>
              </NavLink>
            )}
          </div>
        </header>
      </Show>
    );
};

export default Header;
