import { Fragment } from 'react';
import Image from 'next/image';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import { signOut } from 'next-auth/client';
import styles from './NavBar.module.css';

interface UserDropdownProps {
  image?: string | null;
}

function UserDropdown({ image }: UserDropdownProps) {
  return (
    <Menu as="nav" className={styles.dropdown}>
      <Menu.Button className={styles.dropdownBtn}>
        <div className={styles.avatarContainer}>
          {image && (
            <Image src={image} alt="Profile Photo" width={32} height={32} />
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
        <Menu.Items className={styles.menuItems}>
          <div className="py-1">
            <Menu.Item>
              <a className={styles.menuBtn}>Profile</a>
            </Menu.Item>
            <Menu.Item>
              <button onClick={() => signOut()} className={styles.menuBtn}>
                Sign Out
              </button>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default UserDropdown;
