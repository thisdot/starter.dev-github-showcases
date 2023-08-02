import {
  createSignal,
  Show,
  splitProps,
  For,
  Switch,
  Match,
  createMemo,
} from 'solid-js';
import { CaretIcon, CloseIcon, CorrectIcon } from '../Icons';
import { clickOutside } from '../../utils/onclickOutside';
import styles from '../RepoFilter/RepoFilter.module.css';

type FilterDropDownProps = {
  name: string;
  title?: string;
  items: string[];
  itemsColors?: string[];
  selected?: string;
  selectOption: (value: string) => void;
  class?: string;
};

const FilterDropdown = (props: FilterDropDownProps) => {
  const [local, others] = splitProps(props, [
    'name',
    'title',
    'items',
    'itemsColors',
    'selected',
    'selectOption',
  ]);
  const [showOptions, setShowOptions] = createSignal(false);
  const toggleOption = () => setShowOptions(!showOptions());
  const _clickOutside = clickOutside;

  const allItems = createMemo(() => {
    if (local.itemsColors && local.itemsColors.length === local.items.length) {
      return local.items.map((item, index) => ({
        name: item,
        color: local.itemsColors && (local.itemsColors[index] || 'ccc'),
      }));
    } else {
      return local.items.map((item) => ({
        name: item,
        color: null,
      }));
    }
  });

  return (
    <div
      data-testid={`filter-dropdown-${local.name}`}
      class={styles.dropDownContainer}
      //@ts-ignore
      use:_clickOutside={() => setShowOptions(false)}
    >
      <div>
        <button
          onClick={toggleOption}
          type="button"
          data-testid={`filter-dropdown-button-${local.name}`}
          class={styles.dropDownButton}
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          {...others}
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
          <For each={allItems()}>
            {({ name, color }, index) => (
              <div
                data-index={index()}
                class={styles.menuItemContainer}
                role="none"
                onClick={() => local.selectOption(name)}
              >
                <span class={styles.menuItem} role="menuitem" tabindex="-1">
                  <Switch fallback={<span class="mr-4" />}>
                    <Match when={name === local.selected}>
                      <CorrectIcon />
                    </Match>
                  </Switch>
                  <span class={styles.menuItemContent}>
                    <Show when={color}>
                      <span
                        class={styles.menuItemContentColor}
                        style={{ 'background-color': `#${color}` }}
                      />
                    </Show>
                    {name}
                  </span>
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
