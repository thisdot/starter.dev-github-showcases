import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { UserDropdown } from '../user-dropdown/user-dropdown';
import { GitHubLogo } from './github-logo';

import * as styles from './header.classNames';

type HeaderProps = {
  user: {
    avatarUrl: string;
    login: string;
  } | null;
};

export default component$(({ user }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <Link preventdefault:click={false} href="/">
        <GitHubLogo />
      </Link>
      <div>
        {user ? (
          <UserDropdown image={user.avatarUrl} username={user.login} />
        ) : (
          <Link href="/api/auth/signin">
            <span className={styles.navLink}>Sign In</span>
          </Link>
        )}
      </div>
    </header>
  );
});
