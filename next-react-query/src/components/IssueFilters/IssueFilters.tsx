import type { IssueFilterAPI } from './useIssueFilters';
import type { Label } from '@components/RepoIssues';
import type { Milestone } from './types';
import cn from 'classnames';
import { CheckIcon, MinusCircleIcon } from '@heroicons/react/outline';
import { PullRequestIcon } from '@components/Icons';
import { IssueState, IssueOrderField, OrderDirection } from '@lib/github';
import FilterDropdown from '@components/FilterDropdown';
import { IssueType } from './useIssueFilters';
import styles from './IssueFilters.module.css';

type IssueFiltersProps = {
  type?: IssueType;
  openCount?: number;
  closedCount?: number;
  className?: string;
  milestones?: Milestone[];
  labels?: Label[];
} & IssueFilterAPI;

function IssueFilters({
  openCount = 0,
  closedCount = 0,
  className,
  type = IssueType.Issue,
  milestones,
  labels = [],
  state,
  changeState,
  setLabel,
  setMilestone,
  setSort,
}: IssueFiltersProps) {
  return (
    <div className={cn(className, styles.container)}>
      <div className="space-x-4">
        <button
          data-testid="openIssuesButton"
          className={cn(
            'text-sm',
            state.state === IssueState.Open
              ? 'font-semibold text-gray-900'
              : 'text-gray-600'
          )}
          onClick={() => changeState(IssueState.Open)}
        >
          {type === IssueType.Issue ? (
            <MinusCircleIcon className={styles.typeIcon} />
          ) : (
            <PullRequestIcon className={styles.typeIcon} />
          )}
          {openCount} Open
        </button>
        <button
          data-testid="closedIssuesButton"
          className={cn(
            'text-sm',
            state.state === IssueState.Closed
              ? 'font-semibold text-gray-900'
              : 'text-gray-600'
          )}
          onClick={() => changeState(IssueState.Closed)}
        >
          <CheckIcon className={styles.typeIcon} />
          {closedCount} Closed
        </button>
      </div>
      <div className="space-x-8">
        <FilterDropdown
          name="Label"
          description="Filter by label"
          current={state.label}
          items={[
            ...labels.map((label) => ({
              label: label.name,
              value: label.name,
            })),
          ]}
          onChange={(label) => setLabel(label)}
          buttonClassName={styles.filterButton}
        />
        {milestones && (
          <FilterDropdown
            name="Milestones"
            description="Filter by milestone"
            current={state.milestone}
            items={[
              { label: 'Issue with no milestone', value: null },
              ...milestones.map((milestone) => ({
                label: milestone.title,
                value: milestone.id,
              })),
            ]}
            onChange={(milestone) => setMilestone(milestone)}
            buttonClassName={styles.filterButton}
          />
        )}
        <FilterDropdown
          name="Sort"
          description="Sort by"
          current={`${state.sort.field}^${state.sort.direction}`}
          items={[
            {
              label: 'Newest',
              value: `${IssueOrderField.CreatedAt}^${OrderDirection.Desc}`,
            },
            {
              label: 'Oldest',
              value: `${IssueOrderField.CreatedAt}^${OrderDirection.Asc}`,
            },
            {
              label: 'Most commented',
              value: `${IssueOrderField.Comments}^${OrderDirection.Desc}`,
            },
            {
              label: 'Least commented',
              value: `${IssueOrderField.Comments}^${OrderDirection.Asc}`,
            },
            {
              label: 'Recently updated',
              value: `${IssueOrderField.UpdatedAt}^${OrderDirection.Desc}`,
            },
            {
              label: 'Least recently updated',
              value: `${IssueOrderField.UpdatedAt}^${OrderDirection.Asc}`,
            },
          ]}
          onChange={(sort) => setSort(sort)}
          buttonClassName={styles.filterButton}
        />
      </div>
    </div>
  );
}

export default IssueFilters;
