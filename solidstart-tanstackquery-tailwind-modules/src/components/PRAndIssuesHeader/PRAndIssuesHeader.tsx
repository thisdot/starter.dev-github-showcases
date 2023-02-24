import cn from 'classnames';
import { CheckIcon, PullRequestIcon, IssuesIcon } from '../Icons';
import FilterDropdown from '../FilterDropDown/FilterDropdown';
import { SORT_OPTIONS } from '../../utils/constants';
import { createMemo, createSignal } from 'solid-js';
import { getSelectedMilestoneId } from './utils';
import { issuesStore } from '~/stores/issues-store';

const [type, setType] = createSignal<'pr' | 'issue'>('pr');
const [activeTab, setActiveTab] = createSignal<'OPEN' | 'CLOSED'>('OPEN');
const [sortBy, setSortBy] = createSignal('Newest');
const [selectedLabel, setSelectedLabel] = createSignal<string>();
const [selectedMilestone, setSelectedMilestone] = createSignal<string>();
const [milestoneId, setMilestoneId] = createSignal<string>();

export {
  type,
  setType,
  activeTab,
  setActiveTab,
  sortBy,
  setSortBy,
  selectedLabel,
  setSelectedLabel,
  selectedMilestone,
  setSelectedMilestone,
  milestoneId,
  setMilestoneId,
};

const PRAndIssuesHeader = () => {
  const sortOptions = Object.values(SORT_OPTIONS);
  const selectSort = (value: string) =>
    setSortBy(sortBy() === value ? 'Newest' : value);
  const labelOptions = createMemo<string[]>(
    () => issuesStore().labels?.map((label) => label.name) || []
  );
  const milestoneOptions = createMemo<string[]>(
    () => issuesStore().milestones?.map((milestone) => milestone.title) || []
  );
  const selectLabel = (value: string) =>
    setSelectedLabel(selectedLabel() !== value ? value : undefined);
  const selectMilestone = (value: string) => {
    setSelectedMilestone(selectedMilestone() !== value ? value : undefined);
    setMilestoneId(
      getSelectedMilestoneId(
        issuesStore().milestones || [],
        selectedMilestone()
      )
    );
  };

  return (
    <div class="flex flex-wrap space-x-1 space-y-2 md:space-x-0 md:space-y-0 items-center justify-between p-4 bg-gray-100 border-b rounded-t-lg">
      <div class="flex space-x-4">
        <button
          class={cn('text-xs flex items-center gap-1 text-gray-600', {
            'font-semibold text-gray-900': activeTab() === 'OPEN',
          })}
          onClick={() => setActiveTab('OPEN')}
        >
          {type() === 'pr' ? (
            <PullRequestIcon class="w-4 h-4" />
          ) : (
            <IssuesIcon class="w-4 h-4" />
          )}
          <span>{issuesStore().openIssues?.totalCount || 0}</span>
          Open
        </button>
        <button
          class={cn('text-xs flex items-center gap-1 text-gray-600', {
            'font-semibold text-gray-900': activeTab() === 'CLOSED',
          })}
          onClick={() => setActiveTab('CLOSED')}
        >
          <CheckIcon class="w-4 h-4" />
          <span>{issuesStore().closedIssues?.totalCount || 0}</span>
          Closed
        </button>
      </div>
      <div class="flex items-center space-x-8">
        {labelOptions && labelOptions()?.length !== 0 && (
          <div>
            <FilterDropdown
              name="Label"
              selected={selectedLabel()}
              items={labelOptions()}
              selectOption={selectLabel}
              class="border-none text-sm inline-flex w-full justify-center items-center gap-2"
            />
          </div>
        )}
        {milestoneOptions && milestoneOptions()?.length !== 0 && (
          <div>
            <FilterDropdown
              name="Milestone"
              selected={selectedMilestone()}
              items={milestoneOptions()}
              selectOption={selectMilestone}
              class="border-none text-sm inline-flex w-full justify-center items-center gap-2"
            />
          </div>
        )}
        <div>
          <FilterDropdown
            name="Sort"
            selected={sortBy()}
            items={sortOptions}
            selectOption={selectSort}
            class="border-none text-sm inline-flex w-full justify-center items-center gap-2"
          />
        </div>
      </div>
    </div>
  );
};

export default PRAndIssuesHeader;
