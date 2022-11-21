import { Show, splitProps } from 'solid-js';
import { CloseIcon } from '../Icons';

const modifyFilterTypeText = (filterText = 'test') => {
  if (filterText.endsWith('s')) {
    if (filterText.match(new RegExp('forks', 'i'))) {
      filterText = filterText.replace('s', 'ed');
    } else {
      filterText = filterText.replace('s', '');
    }
  }
  return filterText;
};

const FilterText = (props) => {
  const [local] = splitProps(props, ['username']);

  return (
    <div class="flex justify-between items-center border-b border-b-gray-300 pb-4">
      <div class="flex-grow">
        <small class="text-sm lowercase flex items-baseline gap-1">
          {/* <length of filtered array */}
          <strong>{/**Filtered repo length */}</strong>
          results for
          {/* <!-- repo type --> */}
          <Show when={true}>
            <strong>{modifyFilterTypeText(/**filter type */)}</strong>
          </Show>
          repositories
          {/* search text */}
          <Show when={true}>
            <span>
              matching <strong> {/**search */} </strong>
            </span>
          </Show>
          {/* Language */}
          <Show when={true}>
            <span>
              written in
              <strong> {/** language */} </strong>
            </span>
          </Show>
          sorted by
          {/*  Sorted text */}
          <strong>{/**Sort by */}</strong>
        </small>
      </div>
      <div>
        <a
          href={'/' + local.username}
          class="flex items-center clear-filter group hover:text-blue-600 transition-colors delay-[60ms] no-underline gap-2 text-sm"
        >
          <span class="text-white rounded-md bg-gray-500 group-hover:bg-blue-600 transition-colors delay-[60ms] w-4 h-4">
            <CloseIcon />
          </span>
          Clear filter
        </a>
      </div>
    </div>
  );
};

export default FilterText;
