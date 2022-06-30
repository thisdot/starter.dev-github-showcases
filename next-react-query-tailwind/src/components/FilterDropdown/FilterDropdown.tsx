import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, XIcon, CheckIcon } from '@heroicons/react/solid';
import styles from './FilterDropdown.module.css';

interface Option {
  label: string;
  value: number | string | null;
}

interface FilterDropdownProps {
  name: string;
  description?: string;
  current: number | string | null;
  items: Option[];
  onChange: (value: any) => void;
  buttonClassName?: string;
}

function FilterDropdown({
  name,
  description,
  current,
  items,
  onChange,
  buttonClassName,
}: FilterDropdownProps) {
  return (
    <Menu as="div" className={styles.container}>
      <div>
        <Menu.Button
          className={buttonClassName || styles.menuButton}
          data-testid={'filters dropdown ' + name}
        >
          {name}
          <ChevronDownIcon
            className={styles.menuButtonIcon}
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={styles.menu}
          data-testid="filterDropdown"
          style={{
            left: window.screen.width < 768 ? '0' : 'inherit',
          }}
        >
          <div>
            {description && (
              <div className={styles.menuHeader}>
                <div className={styles.description}>{description}</div>
                <Menu.Button>
                  <XIcon
                    className={styles.closeButtonIcon}
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
            )}
            {items.map(({ label, value }) => (
              <Menu.Item key={value}>
                <button
                  type="button"
                  className={styles.itemButton}
                  onClick={() => {
                    onChange(value);
                  }}
                  data-testid={'filters dropdown item ' + label}
                >
                  {value === current && (
                    <CheckIcon className={styles.itemActiveIcon} />
                  )}{' '}
                  {label}
                </button>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default FilterDropdown;
