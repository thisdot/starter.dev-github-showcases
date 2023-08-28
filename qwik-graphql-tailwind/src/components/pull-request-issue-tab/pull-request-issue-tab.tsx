import { $, component$, useContext } from '@builder.io/qwik';
import { PullRequestIcon, CheckIcon, IssuesIcon } from '../icons';
import cn from 'classnames';
import { FilterDropdown } from '../filter-dropdown/filter-dropdown';
import IssuesPRContext from '~/context/issue-pr-store';
import DropdownStores from '~/context/issue-tab-header-dropdown';
import PullRequestContext, { Label } from '~/context/pull-request-store';
import { Milestone } from '../issue-tab-view/type';
import { getSelectedMilestoneNumber } from '~/utils/getMilestoneNumber';

type Dropdowns = {
  label: string;
  value: string;
  color?: string;
  description?: string;
};

export interface PullRequestIssueTabParams {
  openCount: number;
  closedCount: number;
  tabType: 'pr' | 'issue';
  milestonesOption?: Milestone[];
  labelOption?: Label[];
  sortOption: Dropdowns[];
}

export enum TABS {
  OPEN = 'open',
  CLOSED = 'closed',
}

export const PullRequestIssueTab = component$(
  ({ openCount, closedCount, tabType, milestonesOption, labelOption, sortOption }: PullRequestIssueTabParams) => {
    const tab = tabType === 'issue' ? useContext(IssuesPRContext) : useContext(PullRequestContext);
    const dropdown = useContext(DropdownStores);

    const openBtnClasses = cn('text-xs flex items-center gap-1 text-gray-600', {
      'font-semibold text-gray-900': tab.activeTab === TABS.OPEN,
    });
    const closedBtnClasses = cn('text-xs flex items-center gap-1 text-gray-600', {
      'font-semibold text-gray-900': tab.activeTab === TABS.CLOSED,
    });
    const iconsClasses = 'w-4 h-4';
    const getIcon = $(() =>
      tabType === 'pr' ? <PullRequestIcon className={iconsClasses} /> : <IssuesIcon className={iconsClasses} />
    );

    const toggleTab = $((value: TABS) => {
      tab.activeTab = value;
    });

    return (
      <div class="flex flex-wrap space-x-1 space-y-2 md:space-x-0 md:space-y-0 items-center justify-between p-4 bg-gray-100 border-b rounded-t-lg">
        <div class="flex space-x-4">
          <button class={openBtnClasses} onClick$={() => toggleTab(TABS.OPEN)}>
            {getIcon()}
            <span>{openCount}</span>
            Open
          </button>
          <button class={closedBtnClasses} onClick$={() => toggleTab(TABS.CLOSED)}>
            <CheckIcon className={iconsClasses} />
            <span>{closedCount}</span>
            Closed
          </button>
        </div>
        <div class="flex items-center space-x-8">
          {labelOption && labelOption.length !== 0 && (
            <div>
              <FilterDropdown name="Label" description="Filter by label" buttonClassName="border-none text-sm">
                {labelOption.map(({ name, color, description }) => (
                  <div>
                    <button
                      onClick$={() => (dropdown.selectedLabel = dropdown.selectedLabel === name ? undefined : name)}
                      type="button"
                      name="language"
                      class="relative w-full text-left text-xs py-2 px-10 border-t border-gray-300 hover:bg-gray-100 capitalize"
                    >
                      {name === dropdown.selectedLabel && <CheckIcon className="inline w-4 h-4 absolute left-4" />}
                      <div class="flex gap-2">
                        {color && (
                          <span
                            class="w-3.5 h-3.5 rounded-full border border-gray-200 translate-y-0.5"
                            style={{ backgroundColor: `#${color}` }}
                          ></span>
                        )}
                        <div class="normal-case">
                          <div>{name}</div>
                          {description && <div class="text-gray-400 text-xs">{description}</div>}
                        </div>
                      </div>
                    </button>
                  </div>
                ))}
              </FilterDropdown>
            </div>
          )}
          {milestonesOption && milestonesOption.length !== 0 && (
            <div>
              <FilterDropdown
                name="Milestones"
                description="Filter by milestone"
                buttonClassName="border-none text-sm items-start"
              >
                {milestonesOption.map(({ title, id }) => (
                  <div key={id}>
                    <button
                      onClick$={() => {
                        dropdown.selectedMilestones = dropdown.selectedMilestones === title ? undefined : title;
                        dropdown.selectedMilestoneNumber = getSelectedMilestoneNumber(
                          milestonesOption,
                          dropdown.selectedMilestones
                        );
                      }}
                      type="button"
                      name={'language'}
                      class="relative w-full text-left text-xs py-2 px-10 border-t border-gray-300 hover:bg-gray-100 capitalize"
                    >
                      {title === dropdown.selectedMilestones && (
                        <CheckIcon className="inline w-4 h-4 absolute left-4" />
                      )}
                      {title}
                    </button>
                  </div>
                ))}
              </FilterDropdown>
            </div>
          )}
          <div>
            <FilterDropdown name="Sort" description="Sort by" buttonClassName="border-none text-sm">
              {sortOption.map(({ label, value }) => (
                <div>
                  <button
                    onClick$={() => (dropdown.selectedSort = value)}
                    type="button"
                    name={'language'}
                    class="relative w-full text-left text-xs py-2 px-10 border-t border-gray-300 hover:bg-gray-100 capitalize"
                  >
                    {value === dropdown.selectedSort && <CheckIcon className="inline w-4 h-4 absolute left-4" />}{' '}
                    {label}
                  </button>
                </div>
              ))}
            </FilterDropdown>
          </div>
        </div>
      </div>
    );
  }
);
