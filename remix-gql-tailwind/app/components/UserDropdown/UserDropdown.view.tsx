import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import * as styles from './UserDropdown.classNames';
import { Form, Link } from "@remix-run/react";

interface UserDropdownViewProps {
  image?: string | null;
  username?: string;
}

function UserDropdownView({ image, username }: UserDropdownViewProps) {
  return (
    <Menu as="nav" className={styles.dropdown}>
      <Menu.Button role="button" className={styles.dropdownBtn}>
        <div className={styles.avatarContainer}>
          {image && (
            <img src={image} alt="Profile Photo" width={32} height={32} />
          )}
        </div>
        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className={styles.menuItems} data-testid="dropdown-menu">
          <div className="py-1">
            {username && (
              <Menu.Item>
                <Link to={`/${username}`} className={styles.menuBtn}>
                  Profile
                </Link>
              </Menu.Item>
            )}
            <Menu.Item>
              <Form method="post" action="/logout">
                <button className={styles.menuBtn}>Sign Out</button>
              </Form>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default UserDropdownView;
