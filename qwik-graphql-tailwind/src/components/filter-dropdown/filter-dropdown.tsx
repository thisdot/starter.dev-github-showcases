import { $, component$, Slot, useSignal, useStore } from '@builder.io/qwik';
import { XmarkIcon, CarretDropdownIcon } from '../icons';
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
      <div class="relative inline-block text-left z-30" ref={elementRef}>
        <div>
          <button
            type="button"
            class={
              buttonClassName ||
              'relative inline-flex items-center px-4 py-1.5 rounded-md bg-gray-100 bg-opacity-75 border border-gray-300 text-sm font-medium text-gray-800 hover:bg-gray-200 hover:bg-opacity-50'
            }
            onClick$={toggle$}
          >
            {name}
            <CarretDropdownIcon className="-mr-1 ml-1 h-4 w-4 -mt-1" aria-hidden="true" />
          </button>
        </div>
        {/* TODO: update class to reduce class repetition */}
        <nav
          class={cn(
            'origin-top-right border border-gray-300 absolute right-0 mt-2 w-72 rounded-md shadow-sm bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-200',
            !store.expanded
              ? 'origin-top-right border border-gray-300 absolute right-0 mt-2 w-72 rounded-md shadow-sm bg-white ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-200 scale-0 opacity-0'
              : ''
          )}
          data-testid="filterDropdown"
        >
          <div>
            {description && (
              <div class="flex justify-between items-center">
                <div class="px-4 py-2.5 text-xs text-gray-800 font-semibold">{description}</div>
                <button onClick$={close$} type="button">
                  <XmarkIcon className="mr-2 h-4 w-4 text-gray-600" aria-hidden="true" />
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
