import { mergeProps, Show } from 'solid-js';
import { FILTER_TYPE_OPTIONS, SORT_OPTIONS } from './data';
import FilterDropdown from './FilterDropdown';
import FilterText from './FilterText';
import SearchInput from './SearchInput';

const RepoFilter = (props) => {
  const typeOptions = Object.values(FILTER_TYPE_OPTIONS);
  const sortOptions = Object.values(SORT_OPTIONS);
  const languageOptions = ['All', 'HTML', 'CSS', 'PHP'];

  const merged = mergeProps({ repoBtnText: 'New' }, props);

  const selectLanguage = (value) => console.log(value);
  const selectType = (value) => console.log(value);
  const selectSort = (value) => console.log(value);
  const isOnlySorted = true;

  return (
    <>
      <div class="flex relative mb-4 space-x-4 border-b border-b-gray-300 pb-4">
        <div class="flex space-x-4 flex-1">
          <div class="flex-grow">
            <SearchInput />
          </div>
          <div class="flex items-center space-x-1.5">
            <FilterDropdown
              name="Type"
              items={typeOptions}
              selectOption={selectType}
            />
            <FilterDropdown
              name="Language"
              items={languageOptions}
              selectOption={selectLanguage}
            />
            <FilterDropdown
              name="Sort"
              items={sortOptions}
              selectOption={selectSort}
            />
          </div>
        </div>
        <div>
          <a
            href="https://github.com/new"
            class="flex items-center text-white gap-2 bg-green-600 rounded-md px-3 py-1.5 text-sm font-semibold"
          >
            <svg
              height="1rem"
              viewBox="0 0 16 16"
              version="1.1"
              width="1rem"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="book"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
              />
            </svg>
            <span> {merged.repoBtnText} </span>
          </a>
        </div>
      </div>
      <Show when={!isOnlySorted}>
        <FilterText username="hdjerry" />
      </Show>
    </>
  );
};

export default RepoFilter;
