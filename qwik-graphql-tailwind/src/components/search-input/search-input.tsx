import { $, component$, useContext } from '@builder.io/qwik';
import cn from 'classnames';
import filterStore from '~/context/repo-filter';

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
      class={cn(
        'border p-1.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block sm:text-sm border-gray-300 rounded-md outline-none',
        className
      )}
      placeholder={placeholder}
      onInput$={handleInput$}
    />
  );
});
