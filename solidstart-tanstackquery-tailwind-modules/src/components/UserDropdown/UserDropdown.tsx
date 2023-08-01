import { A } from '@solidjs/router';
import { createSignal, Show } from 'solid-js';
import { ChevronDownIcon } from '../Icons';
import { clickOutside } from '../../utils/onclickOutside';
import styles from './UserDropdown.module.css';
import { SIGN_OUT_URL } from '~/utils/constants';
import { isServer } from 'solid-js/web';
import { useAuth } from '~/auth';

interface IProps {
  image: string;
  username: string;
}

const UserDropdown = (props: IProps) => {
  const [expanded, setExpanded] = createSignal(false);
  const { setAuth } = useAuth();

  const _clickOutside = clickOutside;

  const logOutUser = async () => {
    const response = await fetch(SIGN_OUT_URL, {
      method: 'POST',
      credentials: 'include',
    });
    const status = await response.status;

    if (status === 200 && !isServer) {
      setAuth({
        token: null,
        user: null,
        isAuthenticated: false,
      });
      window.sessionStorage.removeItem('token');
    }
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
            <Show when={props.image}>
              <img
                src={props.image}
                alt="Profile Photo"
                width={32}
                height={32}
              />
            </Show>
          </div>
          <ChevronDownIcon class="-mr-1 ml-2 h-3 w-3" aria-hidden="true" />
        </button>
        <nav
          class={
            expanded() ? styles.dropdownMenuBase : styles.dropdownMenuHidden
          }
        >
          <ul class="py-1">
            <Show when={props.username}>
              <li data-menu-item>
                <A
                  href={`/${props.username}`}
                  class={styles.menuBtn}
                  onClick={() => setExpanded(false)}
                >
                  Profile
                </A>
              </li>
            </Show>
            <li data-menu-item>
              <button class={styles.menuBtn} onClick={logOutUser}>
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
