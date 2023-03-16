import FilterDropdown from '../FilterDropdown/FilterDropdown';
import PullRequestIcon from '../Icons/PullRequestIcon';
import { Dropdowns, Tab, TabText, Tabs, Wrapper } from './PRAndIssueHeader.styles';
import { usePRAndIssueHeaderStore } from '../../hooks/stores';
import { PR_ISSUE_TABS } from '../../utils/constants';
import IssuesIcon from '../Icons/IssuesIcon';
import { colors } from '../../utils/style-variables';
import { useState } from 'react';

interface PRAndIssueHeaderProps {
  cardType: 'pr' | 'issue';
  openCount: number;
  closedCount: number;
}

const PRAndIssueHeader = ({ cardType, openCount, closedCount }: PRAndIssueHeaderProps) => {
  const { activeTab, setActiveTab } = usePRAndIssueHeaderStore();
  const [showOptions, setShowOptions] = useState(null);

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
      {/* Dropdownns */}
      <Dropdowns>
        <FilterDropdown
          name="Label"
          showOptions={showOptions}
          selected={''}
          items={[]}
          selectOption={() => null}
          setShowOptions={(value) => setShowOptions(value)}
          style={filterDropdownStyle}
        />
        <FilterDropdown
          name="Milestone"
          showOptions={showOptions}
          selected={''}
          items={[]}
          selectOption={() => null}
          setShowOptions={(value) => setShowOptions(value)}
          style={filterDropdownStyle}
        />
        <FilterDropdown
          name="Sort"
          showOptions={showOptions}
          selected={''}
          items={[]}
          selectOption={() => null}
          setShowOptions={(value) => setShowOptions(value)}
          style={filterDropdownStyle}
        />
      </Dropdowns>
    </Wrapper>
  );
};

export default PRAndIssueHeader;
