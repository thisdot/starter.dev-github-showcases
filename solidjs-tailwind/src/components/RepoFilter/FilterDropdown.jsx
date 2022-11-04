import {
  createSignal,
  Show,
  onCleanup,
  splitProps,
  For,
  Switch,
  Match,
} from 'solid-js';

function clickOutside(el, accessor) {
  const onClick = (e) => {
    !el.contains(e.target) && accessor()?.();
  };
  document.body.addEventListener('click', onClick);

  onCleanup(() => document.body.removeEventListener('click', onClick));
}

const FilterDropdown = (props) => {
  const [local] = splitProps(props, ['name', 'title', 'items', 'selectOption']);
  const [showOptions, setShowOptions] = createSignal(false);
  const toggleOption = () => setShowOptions(!showOptions());

  return (
    <div
      class="relative inline-block text-left"
      use:clickOutside={() => setShowOptions(false)}
    >
      <div>
        <button
          onClick={toggleOption}
          type="button"
          class="inline-flex w-full justify-center items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          {local.name}
          <svg
            aria-hidden="true"
            height="1rem"
            viewBox="0 0 16 16"
            version="1.1"
            width="1rem"
            data-view-component="true"
            fill="currentColor"
          >
            <path d="M4.427 7.427l3.396 3.396a.25.25 0 00.354 0l3.396-3.396A.25.25 0 0011.396 7H4.604a.25.25 0 00-.177.427z" />
          </svg>
        </button>
      </div>
      <Show when={showOptions()}>
        <div
          class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div class="flex justify-between items-center text-sm text-gray-600 px-3 py-1">
            <strong class="capitalize text-xs">Select {local.name}</strong>
            <button onClick={() => setShowOptions(false)}>
              <svg
                aria-label="Close menu"
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
            </button>
          </div>
          <For each={local.items}>
            {(item, index) => (
              <div
                data-index={index()}
                class="py-1 transition delay-[50ms] hover:bg-gray-300 cursor-pointer"
                role="none"
                onClick={() => local.selectOption(item)}
              >
                <span
                  class="text-gray-700 px-4 py-2 text-sm flex items-center gap-3"
                  role="menuitem"
                  tabindex="-1"
                >
                  <Switch fallback={<span class="mr-4" />}>
                    <Match when={item === 'All'}>
                      <svg
                        height="1rem"
                        viewBox="0 0 16 16"
                        version="1.1"
                        width="1rem"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        id="correct"
                      >
                        <path
                          fill="currentColor"
                          d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
                        />
                      </svg>
                    </Match>
                  </Switch>
                  {item}
                </span>
              </div>
            )}
          </For>
        </div>
      </Show>
    </div>
  );
};

export default FilterDropdown;
