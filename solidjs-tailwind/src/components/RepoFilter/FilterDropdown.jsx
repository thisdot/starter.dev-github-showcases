import {
  createSignal,
  Show,
  onCleanup,
  splitProps,
  For,
  Switch,
  Match,
} from 'solid-js';
import { CaretIcon, CloseIcon, CorrectIcon } from '../Icons';

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
          <CaretIcon />
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
              <CloseIcon />
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
                      <CorrectIcon />
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
