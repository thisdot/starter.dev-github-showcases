import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import styles from './UserDropdown.css';
import { sprinkles } from '@lib/css/sprinkles.css';

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
        <ChevronDownIcon
          className={sprinkles({
            marginRight: '-1',
            marginLeft: 2,
            height: 5,
            width: 5,
          })}
          aria-hidden="true"
        />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter={styles.menuItemsTransitions.enter}
        enterFrom={styles.menuItemsTransitions.enterFrom}
        enterTo={styles.menuItemsTransitions.enterTo}
        leave={styles.menuItemsTransitions.leave}
        leaveFrom={styles.menuItemsTransitions.leaveFrom}
        leaveTo={styles.menuItemsTransitions.leaveTo}
      >
        <Menu.Items className={styles.menuItems} data-testid="dropdown-menu">
          <div className={sprinkles({ paddingY: 1 })}>
            {username && (
              <Menu.Item>
                <Link className={styles.menuBtn} to={`/${username}`}>
                  Profile
                </Link>
              </Menu.Item>
            )}
            <Menu.Item>
              <Link className={styles.menuBtn} to={`/auth/sign-out`}>
                Sign Out
              </Link>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default UserDropdownView;
