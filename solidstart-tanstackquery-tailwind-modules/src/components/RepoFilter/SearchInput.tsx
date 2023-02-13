import styles from './RepoFilter.module.css';
import { JSX } from 'solid-js';
import { search, setSearch } from './RepoFilter.store';

const SearchInput = () => {
  const handleChange: JSX.EventHandler<HTMLInputElement, InputEvent> = (
    e: InputEvent
  ) => {
    setSearch((e.target as HTMLInputElement).value);
  };

  return (
    <input
      data-testid="search-input"
      placeholder="find a repository.."
      role="search"
      type="search"
      value={search()}
      onInput={handleChange}
      class={styles.searchInput}
    />
  );
};

export default SearchInput;
