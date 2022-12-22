import { NavLink } from '@solidjs/router';
import { createSignal } from 'solid-js';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { clickOutside } from '../../utils/onclickOutside';
import styles from './UserDropdown.module.css';
import { useAuth } from '../../auth';
import { SIGN_OUT_URL } from '../../utils/constants';

const UserDropdown = (props) => {
  const [expanded, setExpanded] = createSignal(false);

  const signOut = () => {
    fetch(SIGN_OUT_URL, {
      method: 'POST',
      credentials: 'include',
    }).then(() => {
      useAuth().setAuth({
        token: null,
        user: null,
        isAuthenticated: false,
      });
      sessionStorage.removeItem('token');
    });
  };

  return (
    <div use:clickOutside={() => setExpanded(false)}>
      <div class={styles.dropdown}>
        <button
          role="button"
          class={styles.dropdownBtn}
          onClick={() => setExpanded(!expanded())}
        >
          <div class={styles.avatarContainer}>
            {props.image && (
              <img
                src={props.image}
                alt="Profile Photo"
                width={32}
                height={32}
              />
            )}
          </div>
          <div class="w-4 ml-1">
            <ChevronDownIcon />
          </div>
        </button>
        <nav
          class={
            expanded() ? styles.dropdownMenuBase : styles.dropdownMenuHidden
          }
        >
          <ul class="py-1">
            {props.username && (
              <li data-menu-item>
                <NavLink href={`/${props.username}`} class={styles.menuBtn}>
                  Profile
                </NavLink>
              </li>
            )}
            <li data-menu-item>
              <button class={styles.menuBtn} onClick={[signOut]}>
                Sign Out
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default UserDropdown;
