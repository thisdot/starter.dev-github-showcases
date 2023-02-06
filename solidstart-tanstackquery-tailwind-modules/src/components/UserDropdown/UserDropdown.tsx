import { A } from '@solidjs/router';
import { createSignal } from 'solid-js';
import { ChevronDownIcon } from '../Icons';
import { clickOutside } from '../../utils/onclickOutside';
import styles from './UserDropdown.module.css';
import { useAuth } from '../../auth';
import { SIGN_OUT_URL } from '../../utils/constants';

interface IProps {
  image: string;
  username: string;
}

const UserDropdown = (props: IProps) => {
  const [expanded, setExpanded] = createSignal(false);

  const _clickOutside = clickOutside;

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
    // @ts-ignore
    <div use:_clickOutside={() => setExpanded(false)}>
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
          <ChevronDownIcon class="-mr-1 ml-2 h-3 w-3" aria-hidden="true" />
        </button>
        <nav
          class={
            expanded() ? styles.dropdownMenuBase : styles.dropdownMenuHidden
          }
        >
          <ul class="py-1">
            {props.username && (
              <li data-menu-item>
                <A
                  href={`/${props.username}`}
                  class={styles.menuBtn}
                  onClick={() => setExpanded(false)}
                >
                  Profile
                </A>
              </li>
            )}
            <li data-menu-item>
              <button class={styles.menuBtn} onClick={() => signOut()}>
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
