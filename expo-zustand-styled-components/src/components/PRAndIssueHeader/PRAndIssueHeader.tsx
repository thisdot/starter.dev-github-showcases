import FilterDropdown from '../FilterDropdown/FilterDropdown';
import PullRequestIcon from '../Icons/PullRequestIcon';
import { Dropdowns, Tab, TabText, Tabs, Wrapper } from './PRAndIssueHeader.styles';
import { usePRAndIssueHeaderStore } from '../../hooks/stores';
import { PR_ISSUE_TABS, SORT_OPTIONS } from '../../utils/constants';
import IssuesIcon from '../Icons/IssuesIcon';
import { colors } from '../../utils/style-variables';
import { useState } from 'react';

interface PRAndIssueHeaderProps {
  cardType: 'pr' | 'issue';
  openCount: number;
  closedCount: number;
}

const PRAndIssueHeader = ({ cardType, openCount, closedCount }: PRAndIssueHeaderProps) => {
  const { milestones, labels, sortBy, label, milestone, setSortBy, setLabel, setMilestone } =
    usePRAndIssueHeaderStore();
  const { activeTab, setActiveTab } = usePRAndIssueHeaderStore();
  const [showOptions, setShowOptions] = useState(null);
  const sortOptions = Object.values(SORT_OPTIONS);
  const labelOptions = (): string[] => labels.map((label) => label.name);
  const milestoneOptions = (): string[] => milestones.map((label) => label.title);
  const selectSortBy = (value) =>
    setSortBy(sortBy === value ? Object.values(SORT_OPTIONS)[0] : value);
  const selectLabel = (value) => setLabel(label === value ? undefined : value);
  const selectMilestone = (value) => setMilestone(milestone === value ? undefined : value);

  const filterDropdownStyle = {
    borderWidth: 0,
    elevation: 0,
    flexGrow: 0,
  };

  return (
    <Wrapper>
      <Tabs>
        <Tab activeOpacity={0.7} onPress={() => setActiveTab(PR_ISSUE_TABS.open)}>
          {cardType === 'pr' ? (
            <PullRequestIcon color={colors.gray500} style={{ marginRight: 4 }} />
          ) : (
            <IssuesIcon color={colors.gray500} style={{ marginRight: 4 }} />
          )}
          <TabText isActive={activeTab === PR_ISSUE_TABS.open}>{openCount}</TabText>
          <TabText isActive={activeTab === PR_ISSUE_TABS.open}>Open</TabText>
        </Tab>
        <Tab activeOpacity={0.7} onPress={() => setActiveTab(PR_ISSUE_TABS.closed)}>
          <TabText isActive={activeTab === PR_ISSUE_TABS.closed}>{closedCount}</TabText>
          <TabText isActive={activeTab === PR_ISSUE_TABS.closed}>Closed</TabText>
        </Tab>
      </Tabs>
      <Dropdowns>
        <FilterDropdown
          name="Label"
          showOptions={showOptions}
          selected={label}
          items={labelOptions()}
          selectOption={selectLabel}
          setShowOptions={(value) => setShowOptions(value)}
          style={filterDropdownStyle}
        />
        {milestoneOptions() && milestoneOptions().length > 0 && (
          <FilterDropdown
            name="Milestone"
            showOptions={showOptions}
            selected={milestone}
            items={milestoneOptions()}
            selectOption={selectMilestone}
            setShowOptions={(value) => setShowOptions(value)}
            style={filterDropdownStyle}
          />
        )}
        <FilterDropdown
          name="Sort"
          showOptions={showOptions}
          selected={sortBy}
          items={sortOptions}
          selectOption={selectSortBy}
          setShowOptions={(value) => setShowOptions(value)}
          style={filterDropdownStyle}
        />
      </Dropdowns>
    </Wrapper>
  );
};

export default PRAndIssueHeader;
