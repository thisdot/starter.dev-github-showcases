import { $, component$, useSignal, useStore } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { isParentWithinScope } from '../../utils/isParentWithinScope';
import { ChevronDownIcon } from '../icons';
import * as styles from './user-dropdown.classNames';

export interface UserDropdownProps {
  image?: string | null;
  username?: string;
}

export const UserDropdown = component$(({ image, username }: UserDropdownProps) => {
  const elementRef = useSignal<HTMLElement | undefined>(undefined);

  const store = useStore({
    expanded: false,
  });

  const toggle$ = $(() => {
    store.expanded = !store.expanded;
  });

  const close$ = $(() => {
    store.expanded = false;
  });

  const signOut$ = $(() => {
    // TODO: sign out
  });

  return (
    <div
      document:onClick$={(event) => {
        if (
          (event.target as HTMLElement).parentElement?.hasAttribute('data-menu-item') ||
          !isParentWithinScope(event.target as HTMLElement, elementRef.value)
        ) {
          close$();
        }
      }}
    >
      <div className={styles.dropdown} ref={elementRef}>
        <button role="button" className={styles.dropdownBtn} onClick$={toggle$}>
          <div className={styles.avatarContainer}>
            {image && <img src={image} alt="Profile Photo" width={32} height={32} />}
          </div>
          <div className="w-4 ml-1">
            <ChevronDownIcon />
          </div>
        </button>
        <nav className={store.expanded ? styles.dropdownMenuBase : styles.dropdownMenuHidden}>
          <ul className="py-1">
            {username && (
              <li data-menu-item>
                <Link preventdefault:click={false} href={`/${username}`} className={styles.menuBtn}>
                  Profile
                </Link>
              </li>
            )}
            <li data-menu-item>
              <button className={styles.menuBtn} onClick$={signOut$}>
                Sign Out
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
});
