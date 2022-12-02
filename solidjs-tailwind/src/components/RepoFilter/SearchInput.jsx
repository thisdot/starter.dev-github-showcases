import { setSearch } from './RepoFilter.store';
import styles from './RepoFilter.module.css';

const SearchInput = () => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <input
      placeholder="find a repository.."
      role="search"
      type="search"
      onKeyUp={handleChange}
      class={styles.searchInput}
    />
  );
};

export default SearchInput;
