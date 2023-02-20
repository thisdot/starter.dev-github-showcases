import { createSignal, Show, For, Switch, Match } from 'solid-js';
import { CaretIcon, CloseIcon, CorrectIcon } from '../Icons';
import { clickOutside } from '../../utils/onclickOutside';
import styles from '../RepoFilter/RepoFilter.module.css';
import classNames from 'classnames';
import { SortOption } from '../PRAndIssuesHeader';

type FilterDropDownProps = {
  name: string;
  title?: string;
  // items: string[];
  selected?: string;
  selectOption: (value: SortOption) => void;
  class?: string;
};

const FilterDropdown = (props: FilterDropDownProps) => {
  const [showOptions, setShowOptions] = createSignal(false);
  const toggleOption = () => setShowOptions(!showOptions());
  const _clickOutside = clickOutside;

  return (
    <div
      data-testid={`filter-dropdown-${props.name}`}
      class={classNames(styles.dropDownContainer, props.class)}
      //@ts-ignore
      use:_clickOutside={() => setShowOptions(false)}
    >
      <div>
        <button
          onClick={toggleOption}
          type="button"
          data-testid={`filter-dropdown-button-${props.name}`}
          class={styles.dropDownButton}
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          {...props}
        >
          {props.name}
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
            <strong class="capitalize text-xs">Select {props.name}</strong>
            <button onClick={() => setShowOptions(false)}>
              <CloseIcon />
            </button>
          </div>
          {/* <For each={props.items}>
            {(item, index) => (
              <div
                data-index={index()}
                class={styles.menuItemContainer}
                role="none"
                onClick={() => props.selectOption(item)}
              >
                <span class={styles.menuItem} role="menuitem" tabindex="-1">
                  <Switch fallback={<span class="mr-4" />}>
                    <Match when={item === props.selected}>
                      <CorrectIcon />
                    </Match>
                  </Switch>
                  {item}
                </span>
              </div>
            )}
          </For> */}
        </div>
      </Show>
    </div>
  );
};

export default FilterDropdown;
