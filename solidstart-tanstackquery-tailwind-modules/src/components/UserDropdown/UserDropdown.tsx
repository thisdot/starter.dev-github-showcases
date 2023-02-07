import { A } from '@solidjs/router';
import { createSignal, Show } from 'solid-js';
import { ChevronDownIcon } from '../Icons';
import { clickOutside } from '../../utils/onclickOutside';
import styles from './UserDropdown.module.css';

interface IProps {
  image: string;
  username: string;
}

const UserDropdown = (props: IProps) => {
  const [expanded, setExpanded] = createSignal(false);

  const _clickOutside = clickOutside;

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
              <button class={styles.menuBtn}>
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
