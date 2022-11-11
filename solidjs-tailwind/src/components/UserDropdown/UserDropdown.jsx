import { NavLink } from '@solidjs/router';
import { createSignal } from 'solid-js';
import { ChevronDownIcon } from '@heroicons/react/solid';
import * as styles from './user-dropdown.classNames';

const UserDropdown = (props) => {
  let elementRef;

  const [expanded, setExpanded] = createSignal(false);
  const toggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setExpanded(!expanded());
  };

  const signOut$ = () => {
    // TODO: sign out
  };

  return (
    <div onClick={(e) => toggle(e)}>
      <div class={styles.dropdown} ref={elementRef}>
        <button
          role="button"
          class={styles.dropdownBtn}
          onClick={(e) => toggle(e)}
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
                <NavLink
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  href={`/${props.username}`}
                  class={styles.menuBtn}
                >
                  Profile
                </NavLink>
              </li>
            )}
            <li data-menu-item>
              <button class={styles.menuBtn}>Sign Out</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default UserDropdown;
