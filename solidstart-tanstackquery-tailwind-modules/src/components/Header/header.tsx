import { A } from '@solidjs/router';
import { useAuth } from '../../auth';
import { GitHubLogo } from './github-logo';
import styles from './Header.module.css';
import { SIGN_IN_BASE_URL } from '../../utils/constants';
import { UserDropdown } from '../UserDropdown';

const Header = () => {
  const { authStore } = useAuth();

  return (
    <header class={styles.header}>
      <A href="/">
        <GitHubLogo />
      </A>

      <div>
        {authStore.user ? (
          <UserDropdown
            image={authStore.user.avatarUrl}
            username={authStore.user.login}
          />
        ) : (
          <A href={`${SIGN_IN_BASE_URL}?redirect_url=${window.location.href}`}>
            <span class={styles.navLink}>Sign In</span>
          </A>
        )}
      </div>
    </header>
  );
};

export default Header;
