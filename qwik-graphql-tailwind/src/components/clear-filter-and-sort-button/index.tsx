import { QRL, component$ } from '@builder.io/qwik';
import { XmarkIcon } from '../icons';
import cn from 'classnames';

interface ClearFilterAndSortProps {
  clearFn: QRL<() => void>;
}

export const ClearFilterAndSortBtn = component$(({ clearFn }: ClearFilterAndSortProps) => {
  return (
    <div>
      <button class={cn('inline-flex items-center justify-center', 'group')} onclick$={clearFn}>
        <span
          class={cn(
            'p-0.5 rounded bg-gray-500 inline-flex items-center justify-center mr-2 group-hover:bg-blue-500',
            'group-hover:bg-blue-500'
          )}
        >
          <XmarkIcon className="w-3.5 h-3.5 text-white" />
        </span>
        <span class={cn('text-sm text-gray-500 group-hover:text-blue-500', 'group-hover:text-blue-500')}>
          Clear filter
        </span>
      </button>
    </div>
  );
});
