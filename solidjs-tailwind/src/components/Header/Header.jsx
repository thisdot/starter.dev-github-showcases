import { NavLink } from '@solidjs/router';
import { useAuth } from '../../auth';
import { UserDropdown } from '../UserDropdown';
import { SIGN_IN_BASE_URL } from '../../helper/constants';

import { GithubLogo } from './GithubLogo';
import * as styles from './Header.classNames';

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
          <NavLink
            href={`${SIGN_IN_BASE_URL}?redirect_url=${window.location.href}`}
          >
            <span class={styles.navLink}>Sign In</span>
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
