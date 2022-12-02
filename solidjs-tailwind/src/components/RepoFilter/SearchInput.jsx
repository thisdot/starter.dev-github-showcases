import { setSearch } from './RepoFilter.store';

const SearchInput = () => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <input
      data-testid="search-input"
      placeholder="find a repository.."
      role="search"
      type="search"
      onKeyUp={handleChange}
      class="border p-1.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md outline-none"
    />
  );
};

export default SearchInput;
