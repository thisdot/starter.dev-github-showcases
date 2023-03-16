import FilterDropdown from '../FilterDropdown/FilterDropdown';
import IssueIcon from '../Icons/IssueIcon';
import PullRequestIcon from '../Icons/PullRequestIcon';
import { Dropdowns, Tab, TabText, Tabs, Wrapper } from './PRAndIssueHeader.styles';
import { usePRAndIssueHeaderStore } from '../../hooks/stores';
import { PR_ISSUE_TABS } from '../../utils/constants';

interface PRAndIssueHeaderProps {
  cardType: 'pr' | 'issue';
  openCount: number;
  closedCount: number;
}

const PRAndIssueHeader = ({ cardType, openCount, closedCount }: PRAndIssueHeaderProps) => {
  const { activeTab, setActiveTab } = usePRAndIssueHeaderStore();
  const filterDropdownStyle = {
    borderWidth: 0,
    elevation: 0,
    flexGrow: 0,
  };
  return (
    <Wrapper>
      <Tabs>
        <Tab activeOpacity={0.7} onPress={() => setActiveTab(PR_ISSUE_TABS.open)}>
          {cardType === 'pr' ? <PullRequestIcon /> : <IssueIcon />}
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
          selected={''}
          items={[]}
          selectOption={() => null}
          style={filterDropdownStyle}
        />
        <FilterDropdown
          name="Milestone"
          selected={''}
          items={[]}
          selectOption={() => null}
          style={filterDropdownStyle}
        />
        <FilterDropdown
          name="Sort"
          selected={''}
          items={[]}
          selectOption={() => null}
          style={filterDropdownStyle}
        />
      </Dropdowns>
    </Wrapper>
  );
};

export default PRAndIssueHeader;
