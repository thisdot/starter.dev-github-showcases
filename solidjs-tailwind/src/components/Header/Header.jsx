import { NavLink } from '@solidjs/router';
import { UserDropdown } from '../UserDropdown';

import { GithubLogo } from './GithubLogo';
import * as styles from './Header.classNames';

const Header = (props) => {
  return (
    <header class={styles.header}>
      <NavLink href="/">
        <GithubLogo />
      </NavLink>
      <div>
        {props.user ? (
          <UserDropdown image={props.user.avatarUrl} username={props.user.login} />
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
