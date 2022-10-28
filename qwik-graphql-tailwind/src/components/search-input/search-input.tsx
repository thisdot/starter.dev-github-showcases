import { component$ } from '@builder.io/qwik';
import cn from 'classnames';
import * as styles from './search-input.classNames';

export interface SearchInputProps {
  placeholder: string;
  className?: string;
}

export const SearchInput = component$(({ placeholder, className }: SearchInputProps) => (
  <input
    role="search"
    type="search"
    name="search"
    id="search"
    className={cn(styles.input, className)}
    placeholder={placeholder}
  />
));
