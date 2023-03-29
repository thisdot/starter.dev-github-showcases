import PRAndIssueHeader from '../PRAndIssueHeader';
import { ContentContainer, MainContainer, EmptyIssue } from './IssuesTabView.styles';
import IssuePullRequestCard from '../IssuePullRequestCard';
import { Text, useWindowDimensions } from 'react-native';
import { useIssuesStore, usePRAndIssueHeaderStore } from '../../hooks/stores';
import { SORT_OPTIONS } from '../../utils/constants';
import IssuesPRClearFilter from '../IssuesPRClearFilter';
import Pagination from '../Pagination';

const IssuesTabView = () => {
  const { activeTab, label, sortBy } = usePRAndIssueHeaderStore();
  const { width } = useWindowDimensions();
  const { issues, setBefore, setAfter } = useIssuesStore();
  const selectedIssue = issues[activeTab + 'Issues'];
  const selectedIssuePageInfo = selectedIssue.pageInfo;

  const hasPrevPage =
    selectedIssuePageInfo &&
    selectedIssuePageInfo.hasPreviousPage &&
    selectedIssuePageInfo.startCursor;
  const hasNxtPage =
    selectedIssuePageInfo && selectedIssuePageInfo.hasNextPage && selectedIssuePageInfo.endCursor;

  const handleNextPress = () => {
    setAfter(selectedIssuePageInfo.endCursor);
    setBefore(null);
  };
  const handlePreviousPress = () => {
    setBefore(selectedIssuePageInfo.startCursor);
    setAfter(null);
  };

  return (
    <MainContainer screenWidth={width}>
      {label && sortBy !== Object.values(SORT_OPTIONS)[0] && <IssuesPRClearFilter />}
      <ContentContainer>
        <PRAndIssueHeader
          cardType="issue"
          openCount={issues.openIssues.totalCount}
          closedCount={issues.closedIssues.totalCount}
        />
        {issues[activeTab + 'Issues'].issues.map((data, index) => (
          <IssuePullRequestCard {...data} cardType="issue" key={index} />
        ))}

        {selectedIssue.issues.length === 0 && (
          <EmptyIssue>
            <Text style={{ textTransform: 'uppercase' }}>No {activeTab} Issues found.</Text>
          </EmptyIssue>
        )}
      </ContentContainer>
      <Pagination
        hasPrevPage={hasPrevPage ? true : false}
        hasNextPage={hasNxtPage ? true : false}
        goToNext={handleNextPress}
        goToPrev={handlePreviousPress}
      />
    </MainContainer>
  );
};

export default IssuesTabView;
