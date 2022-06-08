import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, XIcon, CheckIcon } from "@heroicons/react/solid";
import * as styles from "./FilterDropdown.classNames";
import { useSearchParams } from "@remix-run/react";

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
  const [width, setWidth] = useState("0");
  const [searchParams, setSearchParams] = useSearchParams({});

  const handleAppendQuery = (name: string, value: string | number | null) => {
    let str = "";
    const key = searchParams.get(name);

    if (key !== null) {
      if (value !== null && value !== key) {
        searchParams.set(name, value as string);
        str = searchParams.toString();
      } else {
        searchParams.delete(name);
        str = searchParams.toString();
      }
    } else {
      str = searchParams.toString();
      if (value && value !== null) {
        if (str !== "") {
          str = str + `&${name}=${value}`;
        } else {
          str = str + `${name}=${value}`;
        }
      }
    }
    setSearchParams(str);
  };

  useEffect(() => {
    if (window.screen.width > 768) {
      setWidth("inherit");
    } else {
      setWidth("0");
    }
  }, [width]);
  return (
    <Menu as="div" className={styles.container}>
      <div>
        <Menu.Button className={buttonClassName || styles.menuButton}>
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
            left: width,
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
                  name={name}
                  className={styles.itemButton}
                  onClick={(e) => {
                    onChange(value);
                    handleAppendQuery(name, value);
                  }}
                >
                  {value === current && (
                    <CheckIcon className={styles.itemActiveIcon} />
                  )}{" "}
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
