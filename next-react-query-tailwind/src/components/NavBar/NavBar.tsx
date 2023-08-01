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
      {user ? (
        <>
          <Link href="/">
            <a>
              <GitHubLogo />
            </a>
          </Link>
          <div>
            <div>
              <UserDropdown image={user.image} />
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </header>
  );
}

export default NavBar;
