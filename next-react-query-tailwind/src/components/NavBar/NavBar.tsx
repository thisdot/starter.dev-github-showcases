import { useSession } from 'next-auth/client';
import Link from 'next/link';
import GitHubLogo from '@components/GitHubLogo';
import UserDropdown from '@components/UserDropdown';
import styles from './NavBar.module.css';

function NavBar() {
  const [session] = useSession();
  const user = session?.user;
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <GitHubLogo />
        </a>
      </Link>
      <div>
        <div>
          {user ? (
            <UserDropdown image={user.image} />
          ) : (
            <Link href="/api/auth/signin">
              <a className={styles.navLink}>Sign In</a>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default NavBar;
