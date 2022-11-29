import { NavLink } from '@solidjs/router';
import { splitProps } from 'solid-js';
import { UserDropdown } from '../UserDropdown';

import { GithubLogo } from './GithubLogo';
import * as styles from './Header.classNames';

const Header = (props) => {
  const [local] = splitProps(props, ['user'])
    return (
        <header class={styles.header}>
          <NavLink href="/">
            <GithubLogo />
          </NavLink>
          <div>
            {local.user ? (
              <UserDropdown
                image={local.user.avatarUrl}
                username={local.user.login}
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
