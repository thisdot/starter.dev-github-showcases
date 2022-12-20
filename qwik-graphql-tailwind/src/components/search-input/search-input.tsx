import { $, component$, useContext } from '@builder.io/qwik';
import cn from 'classnames';
import filterStore from '~/context/repo-filter';
import * as styles from './search-input.classNames';

export interface SearchInputProps {
  placeholder: string;
  className?: string;
}

export const SearchInput = component$(({ placeholder, className }: SearchInputProps) => {
  const searchValue = useContext(filterStore);
  const handleInput$ = $((e: any) => (searchValue.search = e.target.value));
  return (
    <input
      role="search"
      type="search"
      name="search"
      id="search"
      value={searchValue.search}
      class={cn(styles.input, className)}
      placeholder={placeholder}
      onInput$={handleInput$}
    />
  );
});
