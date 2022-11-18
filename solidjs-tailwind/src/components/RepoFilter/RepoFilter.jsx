import { mergeProps, Show } from 'solid-js';
import { RepoBookIcon } from '../Icons';
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
            <RepoBookIcon />
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
