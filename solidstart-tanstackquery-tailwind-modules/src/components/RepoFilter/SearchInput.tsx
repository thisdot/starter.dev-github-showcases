import styles from './RepoFilter.module.css';
import { JSX } from 'solid-js';

const SearchInput = () => {
  const handleChange: JSX.EventHandler<HTMLInputElement, InputEvent> = (e) => {
    // Serch functionality
  };
  return (
    <input
      data-testid="search-input"
      placeholder="find a repository.."
      role="search"
      type="search"
      onInput={handleChange}
      class={styles.searchInput}
    />
  );
};

export default SearchInput;
