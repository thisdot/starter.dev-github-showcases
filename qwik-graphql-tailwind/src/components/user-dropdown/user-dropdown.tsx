import { $, component$, useSignal, useStore } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { AUTH_TOKEN, SIGN_OUT_URL } from '../../utils/constants';
import { isParentWithinScope } from '../../utils/isParentWithinScope';
import { ChevronDownIcon } from '../icons';

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
      <div className="relative top-1 inline-block text-left z-30" ref={elementRef}>
        <button role="button" className="inline-flex items-center text-gray-200 fill-current" onClick$={toggle$}>
          <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center bg-gray-200">
            {image && <img src={image} alt="Profile Photo" width={32} height={32} />}
          </div>
          <div className="w-4 ml-1">
            <ChevronDownIcon />
          </div>
        </button>
        <nav
          className={
            store.expanded
              ? 'z-40 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-200'
              : 'z-40 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-200 scale-0 opacity-0'
          }
        >
          <ul className="py-1">
            {username && (
              <li data-menu-item>
                <Link
                  preventdefault:click={false}
                  href={`/${username}`}
                  className="block font-medium px-4 py-2 text-gray-900 hover:text-blue-600"
                >
                  Profile
                </Link>
              </li>
            )}
            <li data-menu-item>
              <button className="block font-medium px-4 py-2 text-gray-900 hover:text-blue-600" onClick$={signOut$}>
                Sign Out
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
});
