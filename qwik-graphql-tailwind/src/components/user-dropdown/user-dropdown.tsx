import { $, component$, useStore } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { ChevronDownIcon } from '../icons';
import * as styles from './user-dropdown.classNames';

export interface UserDropdownProps {
  image?: string | null;
  username?: string;
}

export const UserDropdown = component$(({ image, username }: UserDropdownProps) => {
  const store = useStore({
    expanded: false,
  });

  const toggle$ = $(() => {
    store.expanded = !store.expanded;
  });

  return (
    <div>
      <div className={styles.dropdown}>
        <button role="button" className={styles.dropdownBtn} onClick$={toggle$}>
          <div className={styles.avatarContainer}>
            {image && <img src={image} alt="Profile Photo" width={32} height={32} />}
          </div>
          <div class="w-4 ml-1">
            <ChevronDownIcon />
          </div>
        </button>
        <nav className={store.expanded ? styles.dropdownMenuBase : styles.dropdownMenuHidden}>
          <ul className="py-1">
            {username && (
              <li>
                <Link href={`/${username}`} className={styles.menuBtn}>
                  Profile
                </Link>
              </li>
            )}
            <li>
              <button className={styles.menuBtn}>Sign Out</button>
            </li>
          </ul>
        </nav>
      </div>
      {store.expanded ? <div className={styles.overlay} onClick$={toggle$}></div> : null}
    </div>
  );
});
