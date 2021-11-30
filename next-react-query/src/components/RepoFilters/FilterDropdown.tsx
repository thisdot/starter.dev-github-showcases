import cn from 'classnames';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, XIcon, CheckIcon } from '@heroicons/react/solid';

interface Option {
  label: string;
  value: number | string;
}

interface DropdownProps {
  name: string;
  description?: string;
  current: number | string;
  items: Option[];
  onChange: (value: any) => void;
}

function Dropdown({
  name,
  description,
  current,
  items,
  onChange,
}: DropdownProps) {
  return (
    <Menu as="div" className="relative inline-block text-left z-30">
      <div>
        <Menu.Button className="relative inline-flex items-center px-4 py-1.5 rounded-md bg-gray-100 bg-opacity-75 border border-gray-300 text-sm font-medium text-gray-800 hover:bg-gray-200 hover:bg-opacity-50">
          {name}
          <ChevronDownIcon
            className="-mr-1 ml-1 mt-0.5 h-4 w-4"
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
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div>
            {description && (
              <div className="flex justify-between items-center">
                <div className="px-4 py-2.5 text-xs text-gray-800 font-semibold">
                  {description}
                </div>
                <Menu.Button>
                  <XIcon
                    className="mr-2 h-4 w-4 text-gray-600"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
            )}
            {items.map(({ label, value }) => (
              <Menu.Item key={value}>
                <button
                  type="button"
                  className="relative w-full text-left text-xs py-2 px-10 border-t border-gray-300 hover:bg-gray-100 capitalize"
                  onClick={() => {
                    onChange(value);
                  }}
                >
                  {value === current && (
                    <CheckIcon className="inline w-4 h-4 absolute left-4" />
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

export default Dropdown;
