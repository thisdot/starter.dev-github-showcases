import cn from 'classnames';
import {CheckIcon, PullRequestIcon, IssuesIcon } from '../Icons';
import FilterDropdown from '../FilterDropDown/FilterDropdown';
import { SORT_OPTIONS } from '../../utils/constants';
import { createMemo } from 'solid-js';
import { usePrAndIssuesContext } from '../../contexts/PrAndIssuesContext';

const PRAndIssuesHeader = (props) => {
  const {
    type,
    setActiveTab,
    sortBy,
    setSortBy,
    setSelectedLabel,
    labelOpt,
    selectedLabel,
    tabActive
  } = usePrAndIssuesContext();

  console.log(type);

  const sortOptions = Object.values(SORT_OPTIONS);
  const selectSort = (value) =>  setSortBy(value);
  const labelOptions = createMemo(() => Object.values({...labelOpt().map((label) => label.name)}))
  const selectLabel = (value) =>  setSelectedLabel(value)

  return (
    <div class="flex flex-wrap space-x-1 space-y-2 md:space-x-0 md:space-y-0 items-center justify-between p-4 bg-gray-100 border-b rounded-t-lg">
      <div class="flex space-x-4">
        <button class={cn('text-xs flex items-center gap-1 text-gray-600', {
          'font-semibold text-gray-900': tabActive() === 'open',
        })}
          onClick={() => setActiveTab('open')}
        >
          {type === 'pr' ? <PullRequestIcon class='w-4 h-4' /> : <IssuesIcon class='w-4 h-4' />}
          <span>{props.openCount}</span>
          Open
        </button>
        <button class={cn('text-xs flex items-center gap-1 text-gray-600', {
            'font-semibold text-gray-900': tabActive() === 'closed',
          })}
          onClick={() => setActiveTab('closed')}
        >
          <CheckIcon class='w-4 h-4' />
          <span>{props.closedCount}</span>
          Closed
        </button>
      </div>
      <div class="flex items-center space-x-8">
        {labelOptions && <div>
          <FilterDropdown name="Label"
            selected={selectedLabel()}
            items={labelOptions()}
            selectOption={selectLabel}
            class="border-none text-sm inline-flex w-full justify-center items-center gap-2"
          />
        </div>}
        <div>
          <FilterDropdown name="Sort"
            selected={sortBy()}
            items={sortOptions}
            selectOption={selectSort}
            class="border-none text-sm inline-flex w-full justify-center items-center gap-2"
          />
        </div>
      </div>
    </div>
  );
}

export default PRAndIssuesHeader
