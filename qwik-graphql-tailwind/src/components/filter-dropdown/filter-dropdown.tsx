import { $, component$, useSignal, useStore } from '@builder.io/qwik';
import { CheckIcon, ChevronDownIcon, XmarkIcon } from '../icons';
import * as styles from './filter-dropdown.classNames';
import cn from 'classnames';
import { isParentWithinScope } from '../../utils/isParentWithinScope';

interface Option {
  label: string;
  value: number | string | null;
}

interface FilterDropdownProps {
  name: string;
  description?: string;
  current: number | string | null;
  items: Option[];
  buttonClassName?: string;
}

export const FilterDropdown = component$(
  ({ name, description, current, items, buttonClassName }: FilterDropdownProps) => {
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

    return (
      <div
        document:onClick$={(event) => {
          if (!isParentWithinScope(event.target as HTMLElement, elementRef.value)) {
            close$();
          }
        }}
      >
        <div className={styles.container} ref={elementRef}>
          <div>
            <button type="button" className={buttonClassName || styles.menuButton} onClick$={toggle$}>
              {name}
              <ChevronDownIcon className={styles.menuButtonIcon} aria-hidden="true" />
            </button>
          </div>

          <nav
            className={cn(styles.dropdownMenuBase, !store.expanded ? styles.dropdownMenuHidden : '')}
            data-testid="filterDropdown"
          >
            <div>
              {description && (
                <div className={styles.menuHeader}>
                  <div className={styles.description}>{description}</div>
                  <button type="button">
                    <XmarkIcon className={styles.closeButtonIcon} aria-hidden="true" />
                  </button>
                </div>
              )}
              {items.map(({ label, value }) => (
                <div>
                  <button type="button" name={name} className={styles.itemButton}>
                    {value === current && <CheckIcon className={styles.itemActiveIcon} />} {label}
                  </button>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    );
  }
);
