import { $, component$, useSignal, useStore } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { AUTH_TOKEN, SIGN_OUT_URL } from '../../utils/constants';
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

  const signOut$ = $(async () => {
    sessionStorage.removeItem(AUTH_TOKEN);
    fetch(SIGN_OUT_URL, {
      method: 'POST',
    })
      .then(() => {
        sessionStorage.removeItem('user');
        window.location.href = '/auth/signin';
      })
      .catch((err) => {
        console.error(err);
      });
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
      <div class={styles.dropdown} ref={elementRef}>
        <button role="button" class={styles.dropdownBtn} onClick$={toggle$}>
          <div class={styles.avatarContainer}>
            {image && <img src={image} alt="Profile Photo" width={32} height={32} />}
          </div>
          <div class="w-4 ml-1">
            <ChevronDownIcon />
          </div>
        </button>
        <nav class={store.expanded ? styles.dropdownMenuBase : styles.dropdownMenuHidden}>
          <ul class="py-1">
            {username && (
              <li data-menu-item>
                <Link preventdefault:click={false} href={`/${username}`} class={styles.menuBtn}>
                  Profile
                </Link>
              </li>
            )}
            <li data-menu-item>
              <button class={styles.menuBtn} onClick$={signOut$}>
                Sign Out
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
});
