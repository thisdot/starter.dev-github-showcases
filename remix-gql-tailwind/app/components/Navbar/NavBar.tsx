import * as styles from './Navbar.classNames';
import UserDropdownView from '../User/UserDropdown/UserDropdown.view';
import { Link } from '@remix-run/react';
import { GitHubLogo } from '../Shared/Icons/GitHubLogo';

type NavBarProps = {
  user: {
    avatarUrl: string;
    login: string;
  };
};

function NavBar({ user }: NavBarProps) {
  return (
    <header className={styles.header}>
      <Link to="/">
        <GitHubLogo />
      </Link>
      <div>
        <div>
          {user ? (
            <UserDropdownView image={user.avatarUrl} username={user.login} />
          ) : (
            <Link to="/api/auth/signin">
              <a className={styles.navLink}>Sign In</a>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default NavBar;
