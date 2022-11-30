import { $, component$, useContext } from '@builder.io/qwik';
import { PullRequestIcon, CheckIcon, IssuesIcon } from '../icons';
import cn from 'classnames';
import { TABS } from './data';
import * as styles from './pull-request-issue-tab-classNames';
import { FilterDropdown } from '../filter-dropdown/filter-dropdown';
import issuesPRStore from '../../context/issue-pr-store';
import DropdownStores from '../../context/issue-tab-header-dropdown';

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
  milestonesOption: Dropdowns[];
  labelOption: Dropdowns[];
  sortOption: Dropdowns[];
}

export const PullRequestIssueTab = component$(
  ({ openCount, closedCount, tabType, milestonesOption, labelOption, sortOption }: PullRequestIssueTabParams) => {
    const tab = useContext(issuesPRStore);
    const dropdown = useContext(DropdownStores);

    const openBtnClasses = cn(styles.btnClasses, {
      'font-semibold text-gray-900': tab.activeTab === TABS.OPEN,
    });
    const closedBtnClasses = cn(styles.btnClasses, {
      'font-semibold text-gray-900': tab.activeTab === TABS.CLOSED,
    });
    const iconsClasses = 'w-4 h-4';
    const getIcon = $(() =>
      tabType === 'pr' ? <PullRequestIcon className={iconsClasses} /> : <IssuesIcon className={iconsClasses} />
    );

    const toggleTab = $((value: TABS) => {
      tab.activeTab = value;
      dropdown.selectedLabel = labelOption[0].value;
      dropdown.selectedSort = sortOption[0].value;
      dropdown.selectedMilestones = milestonesOption[0].value;
    });

    return (
      <div className="flex flex-wrap space-x-1 space-y-2 md:space-x-0 md:space-y-0 items-center justify-between p-4 bg-gray-100 border-b rounded-t-lg">
        <div className="flex space-x-4">
          <button className={openBtnClasses} onClick$={() => toggleTab(TABS.OPEN)}>
            {getIcon()}
            <span>{openCount}</span>
            Open
          </button>
          <button className={closedBtnClasses} onClick$={() => toggleTab(TABS.CLOSED)}>
            <CheckIcon className={iconsClasses} />
            <span>{closedCount}</span>
            Closed
          </button>
        </div>
        <div className="flex items-center space-x-8">
          <div>
            <FilterDropdown name="Label" description="Filter by label" buttonClassName="border-none text-sm">
              <div className="p-2 border-t border-t-gray-300">
                <input type="text" placeholder="Filter labels" className={styles.filterInput} />
              </div>
              {labelOption.map(({ label, value, color, description }) => (
                <div>
                  <button
                    onClick$={() => (dropdown.selectedLabel = value)}
                    type="button"
                    name={'language'}
                    className={styles.itemButton}
                  >
                    {value === dropdown.selectedLabel && <CheckIcon className={styles.itemActiveIcon} />}
                    <div className="flex gap-2">
                      {color && (
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-gray-200 translate-y-0.5"
                          style={{ backgroundColor: color }}
                        ></span>
                      )}
                      <div className="normal-case">
                        <div>{label}</div>
                        {description && <div className="text-gray-400 text-xs">{description}</div>}
                      </div>
                    </div>
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
              <div className="p-2 border-t border-t-gray-300">
                <input type="text" placeholder="Filter milestones" className={styles.filterInput} />
              </div>
              {milestonesOption.map(({ label, value }) => (
                <div>
                  <button
                    onClick$={() => {
                      dropdown.selectedMilestones = value;
                    }}
                    type="button"
                    name={'language'}
                    className={styles.itemButton}
                  >
                    {value === dropdown.selectedMilestones && <CheckIcon className={styles.itemActiveIcon} />} {label}
                  </button>
                </div>
              ))}
            </FilterDropdown>
          </div>
          <div>
            <FilterDropdown name="Sort" description="Sort by" buttonClassName="border-none text-sm">
              {sortOption.map(({ label, value }) => (
                <div>
                  <button
                    onClick$={() => (dropdown.selectedSort = value)}
                    type="button"
                    name={'language'}
                    className={styles.itemButton}
                  >
                    {value === dropdown.selectedSort && <CheckIcon className={styles.itemActiveIcon} />} {label}
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
