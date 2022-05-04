import * as styles from './NavBar.classNames';
import UserDropdownView from '../UserDropdown/UserDropdown.view';
import { Link } from 'remix';
import { GitHubLogo } from '../Icons/GitHubLogo';

type navBarProps = {
  user: {
    avatarUrl: string;
    login: string;
  };
};

function NavBar({ user }: navBarProps) {
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
