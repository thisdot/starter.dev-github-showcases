import { Show, splitProps } from 'solid-js';

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
          <svg
            class="text-white rounded-md bg-gray-500 group-hover:bg-blue-600 transition-colors delay-[60ms] w-4 h-4"
            aria-hidden="false"
            role="img"
            height="1rem"
            viewBox="0 0 16 16"
            version="1.1"
            width="1rem"
            data-view-component="true"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"
            />
          </svg>
          Clear filter
        </a>
      </div>
    </div>
  );
};

export default FilterText;
