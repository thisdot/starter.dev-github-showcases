import { useState } from 'react';
import { StyleProp, ViewProps } from 'react-native';

import IssuesIcon from '../Icons/IssuesIcon';
import PullRequestIcon from '../Icons/PullRequestIcon';

import FilterDropdown from '../FilterDropdown/FilterDropdown';
import { Dropdowns, Tab, TabText, Tabs, Wrapper } from './PRAndIssueHeader.styles';

import { usePRAndIssueHeaderStore} from '../../hooks/stores';

import { PR_ISSUE_TABS, SORT_OPTIONS } from '../../utils/constants';
import { colors } from '../../utils/style-variables';
interface PRAndIssueHeaderProps {
  cardType: 'pr' | 'issue';
  openCount: number;
  closedCount: number;
}

const PRAndIssueHeader = ({ cardType, openCount, closedCount }: PRAndIssueHeaderProps) => {
  const [showOptions, setShowOptions] = useState(null);
  const sortOptions = Object.values(SORT_OPTIONS);
  const {
    label,
    labels,
    sortBy,
    setLabel,
    milestone,
    activeTab,
    setSortBy,
    milestones,
    setActiveTab,
    setMilestone,
  } = usePRAndIssueHeaderStore();

  const labelOptions = (): string[] => labels.map((label) => label.name);
  const labelOptionsColors = (): string[] => labels.map((label) => label.color);
  const milestoneOptions = (): string[] => milestones.map((label) => label.title);
  const selectSortBy = (value) =>
    setSortBy(sortBy === value ? Object.values(SORT_OPTIONS)[0] : value);
  const selectLabel = (value: string) => setLabel(label === value ? undefined : value);
  const selectMilestone = (value: string) => setMilestone(milestone === value ? undefined : value);
  const handleTabPress = (value: string) => setActiveTab(value);

  const filterDropdownStyle = {
    borderWidth: 0,
    elevation: 0,
    flexGrow: 0,
  } as StyleProp<ViewProps>;

  return (
    <Wrapper>
      <Tabs>
        <Tab activeOpacity={0.7} onPress={() => handleTabPress(PR_ISSUE_TABS.open)}>
          {cardType === 'pr' ? (
            <PullRequestIcon color={colors.gray500} style={{ marginRight: 4 }} />
          ) : (
            <IssuesIcon color={colors.gray500} style={{ marginRight: 4 }} />
          )}
          <TabText isActive={activeTab === PR_ISSUE_TABS.open}>{openCount}</TabText>
          <TabText isActive={activeTab === PR_ISSUE_TABS.open}>Open</TabText>
        </Tab>
        <Tab activeOpacity={0.7} onPress={() => handleTabPress(PR_ISSUE_TABS.closed)}>
          <TabText isActive={activeTab === PR_ISSUE_TABS.closed}>{closedCount}</TabText>
          <TabText isActive={activeTab === PR_ISSUE_TABS.closed}>Closed</TabText>
        </Tab>
      </Tabs>
      <Dropdowns>
        <FilterDropdown
          name="Label"
          selected={label}
          items={labelOptions()}
          showOptions={showOptions}
          selectOption={selectLabel}
          style={filterDropdownStyle}
          itemsColors={labelOptionsColors()}
          setShowOptions={(value) => setShowOptions(value)}
        />
        {milestoneOptions() && milestoneOptions().length > 0 && (
          <FilterDropdown
            name="Milestone"
            selected={milestone}
            showOptions={showOptions}
            items={milestoneOptions()}
            style={filterDropdownStyle}
            selectOption={selectMilestone}
            setShowOptions={(value) => setShowOptions(value)}
          />
        )}
        <FilterDropdown
          name="Sort"
          selected={sortBy}
          items={sortOptions}
          showOptions={showOptions}
          selectOption={selectSortBy}
          style={filterDropdownStyle}
          setShowOptions={(value) => setShowOptions(value)}
        />
      </Dropdowns>
    </Wrapper>
  );
};

export default PRAndIssueHeader;
