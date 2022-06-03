import { Link } from 'react-router-dom';
import GitHubLogo from '@components/GitHubLogo';
import UserDropdown from '@components/UserDropdown';
import styles from './NavBar.css';
import { NavBarUserFragment, NavBarUserFragmentDoc } from '@lib/github';

type NavBarProps = {
  user: NavBarUserFragment;
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
            <UserDropdown image={user.avatarUrl} username={user.login} />
          ) : (
            <Link to="/auth/signin" className={styles.navLink}>
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
NavBar.fragments = {
  user: NavBarUserFragmentDoc,
};

export default NavBar;
