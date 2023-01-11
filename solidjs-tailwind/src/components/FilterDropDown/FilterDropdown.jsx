import { createSignal, Show, splitProps, For, Switch, Match } from 'solid-js';
import { CaretIcon, CloseIcon, CorrectIcon } from '../Icons';
import { clickOutside } from '../../utils/onclickOutside';
import styles from "../RepoFilter/RepoFilter.module.css"

const FilterDropdown = (props) => {
  const [local] = splitProps(props, [
    'name',
    'title',
    'items',
    'selected',
    'selectOption',
    'class'
  ]);
  const [showOptions, setShowOptions] = createSignal(false);
  const toggleOption = () => setShowOptions(!showOptions());

  return (
    <div
      data-testid="filter-dropdown"
      class={styles.dropDownContainer}
      use:clickOutside={() => setShowOptions(false)}
    >
      <div>
        <button
          onClick={toggleOption}
          type="button"
          data-testid="filter-dropdown-button"
          class={props.class || styles.dropDownButton}
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
          class={styles.menu}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabindex="-1"
        >
          <div class={styles.close}>
            <strong class="capitalize text-xs">Select {local.name}</strong>
            <button onClick={() => setShowOptions(false)}>
              <CloseIcon />
            </button>
          </div>
          <For each={local.items}>
            {(item, index) => (
              <div
                data-index={index()}
                class={styles.menuItemContainer}
                role="none"
                onClick={() => local.selectOption(item)}
              >
                <span class={styles.menuItem} role="menuitem" tabindex="-1">
                  <Switch fallback={<span class="mr-4" />}>
                    <Match when={item === local.selected}>
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
