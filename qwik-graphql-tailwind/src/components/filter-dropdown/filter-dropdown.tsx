import { $, component$, Slot, useSignal, useStore } from '@builder.io/qwik';
import { XmarkIcon, CarretDropdownIcon } from '../icons';
import * as styles from './filter-dropdown.classNames';
import cn from 'classnames';
import { isParentWithinScope } from '../../utils/isParentWithinScope';

export interface FilterDropdownProps {
  name: string;
  description?: string;
  buttonClassName?: string;
}

export const FilterDropdown = component$(({ name, description, buttonClassName }: FilterDropdownProps) => {
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
            <CarretDropdownIcon className={styles.menuButtonIcon} aria-hidden="true" />
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
                <button onClick$={close$} type="button">
                  <XmarkIcon className={styles.closeButtonIcon} aria-hidden="true" />
                </button>
              </div>
            )}
            <Slot />
          </div>
        </nav>
      </div>
    </div>
  );
});
