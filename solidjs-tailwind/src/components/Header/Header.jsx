import { NavLink } from '@solidjs/router';
import { useAuth } from '../../auth';
import { UserDropdown } from '../UserDropdown';

import { GithubLogo } from './GithubLogo';
import styles from './Header.module.css';

const Header = () => {
  const { authStore } = useAuth();

  return (
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
  );
};

export default Header;
