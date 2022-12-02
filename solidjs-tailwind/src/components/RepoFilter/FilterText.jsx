import { useLocation } from '@solidjs/router';
import { Show, splitProps } from 'solid-js';
import { CloseIcon } from '../Icons';
import { defaultFilterType, defaultLanguage } from './data';
import { filterType, language, search, sortBy } from './RepoFilter.store';

const modifyFilterTypeText = (filterText = 'test') => {
  if (filterText.endsWith('s')) {
    if (filterText.match(new RegExp('forks', 'i'))) {
      filterText = filterText.replace('s', 'ed');
    } else {
      filterText = filterText.replace('s', '');
    }
  }
  return filterText;
};

const FilterText = (props) => {
  const [local] = splitProps(props, ['filteredRepoCount']);
  const location = useLocation();

  return (
    <div class="flex justify-between items-center border-b border-b-gray-300 pb-4">
      <div class="flex-grow">
        <small class="text-sm lowercase flex items-baseline gap-1">
          <strong>{local.filteredRepoCount}</strong>
          results for
          <Show when={filterType() && filterType() !== defaultFilterType}>
            <strong>{modifyFilterTypeText(filterType())}</strong>
          </Show>{' '}
          repositories
          <Show when={search()}>
            <span>
              matching <strong> {search()} </strong>
            </span>
          </Show>
          <Show when={language() && language() !== defaultLanguage}>
            <span>
              written in
              <strong> {language()} </strong>
            </span>
          </Show>
          <span>
            sorted by
            <strong>{' ' + sortBy()}</strong>
          </span>
        </small>
      </div>
      <div>
        <a
          href={location.pathname}
          class="flex items-center clear-filter group hover:text-blue-600 transition-colors delay-[60ms] no-underline gap-2 text-sm"
        >
          <span class="text-white rounded-md bg-gray-500 group-hover:bg-blue-600 transition-colors delay-[60ms] w-4 h-4">
            <CloseIcon />
          </span>
          Clear filter
        </a>
      </div>
    </div>
  );
};

export default FilterText;
