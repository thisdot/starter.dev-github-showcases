import styles from './RepoFilter.module.css';
import { JSX } from 'solid-js';
import { setSearch } from './RepoFilter.store';

const SearchInput = () => {
  const handleChange: JSX.EventHandler<HTMLInputElement, KeyboardEvent> = (e: KeyboardEvent) => {
    setSearch((e.target as HTMLInputElement).value || '');
  };

  return (
    <input
      data-testid="search-input"
      placeholder="find a repository.."
      role="search"
      type="search"
      onKeyUp={handleChange}
      class={styles.searchInput}
    />
  );
};

export default SearchInput;
