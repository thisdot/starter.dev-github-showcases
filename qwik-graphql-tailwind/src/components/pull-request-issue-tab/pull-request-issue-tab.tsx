import { $, component$, useContext } from '@builder.io/qwik';
import { PullRequestIcon, CheckIcon, ClosedIssue } from '../icons';
import cn from 'classnames';
import { TABS } from './data';
import * as styles from './pull-request-issue-tab-classNames';
import { FilterDropdown } from '../filter-dropdown/filter-dropdown';
import issuesPRStore from '../../context/issue-pr-store';

type Dropdowns = {
  label: string;
  value: string;
};

export interface PullRequestIssueTabParams {
  openCount: number;
  closedCount: number;
  tabType: 'pr' | 'issue';
  milestonesOption: Dropdowns[];
  labelOption: Dropdowns[];
  sortOption: Dropdowns[];
}

export const PullRequestIssueTab = component$(
  ({ openCount, closedCount, tabType, milestonesOption, labelOption, sortOption }: PullRequestIssueTabParams) => {
    const tab = useContext(issuesPRStore);

    const openBtnClasses = cn(
      'text-sm  flex items-center gap-1',
      tab.activeTab === TABS.OPEN ? 'font-semibold text-gray-900' : 'text-gray-600'
    );
    const closedBtnClasses = cn(
      'text-sm flex items-center gap-1',
      tab.activeTab === TABS.CLOSED ? 'font-semibold text-gray-900' : 'text-gray-600'
    );
    const iconsClasses = 'w-4 h-4';
    const getIcon = $(() => {
      return tabType === 'pr' ? (
        <PullRequestIcon className={`${iconsClasses} ${tab.activeTab === TABS.OPEN ? '' : 'text-gray-600'}`} />
      ) : (
        <ClosedIssue className={iconsClasses} />
      );
    });

    return (
      <div className="flex flex-wrap space-x-1 space-y-2 md:space-x-0 md:space-y-0 items-center justify-between p-4 bg-gray-100 border-b">
        <div className="flex space-x-4">
          <button className={openBtnClasses} onClick$={() => (tab.activeTab = TABS.OPEN)}>
            {getIcon()}
            <span>{openCount}</span>
            Open
          </button>
          <button className={closedBtnClasses} onClick$={() => (tab.activeTab = TABS.CLOSED)}>
            <CheckIcon className={`${iconsClasses} ${tab.activeTab === TABS.CLOSED ? '' : 'text-gray-600'}`} />
            <span>{closedCount}</span>
            Closed
          </button>
        </div>
        <div class="flex items-center space-x-8">
          <div>
            <FilterDropdown name="Label" description="Filter by label" buttonClassName="border-none text-sm">
              <div class="p-2 border-t border-t-gray-300">
                <input type="text" placeholder="Filter labels" class={styles.filterInput} />
              </div>
              {labelOption.map(({ label, value }) => (
                <div>
                  <button onClick$={() => null} type="button" name={'language'} className={styles.itemButton}>
                    {value === 'tested' && <CheckIcon className={styles.itemActiveIcon} />} {label}
                  </button>
                </div>
              ))}
            </FilterDropdown>
          </div>
          <div>
            <FilterDropdown
              name="Milestones"
              description="Filter by milestone"
              buttonClassName="border-none text-sm items-start"
            >
              <div>
                <input type="text" placeholder="Filter milestones" />
              </div>
              {milestonesOption.map(({ label, value }) => (
                <div>
                  <button onClick$={() => null} type="button" name={'language'} className={styles.itemButton}>
                    {value === 'tested' && <CheckIcon className={styles.itemActiveIcon} />} {label}
                  </button>
                </div>
              ))}
            </FilterDropdown>
          </div>
          <div>
            <FilterDropdown name="Sort" description="Sort by" buttonClassName="border-none text-sm">
              {sortOption.map(({ label, value }) => (
                <div>
                  <button onClick$={() => null} type="button" name={'language'} className={styles.itemButton}>
                    {value === 'tested' && <CheckIcon className={styles.itemActiveIcon} />} {label}
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
