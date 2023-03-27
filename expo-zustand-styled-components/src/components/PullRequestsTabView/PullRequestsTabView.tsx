import PRAndIssueHeader from '../PRAndIssueHeader';
import { ContentContainer, MainContainer } from './PullRequestsTabView.styles';
import IssuePullRequestCard from '../IssuePullRequestCard';
import { useWindowDimensions } from 'react-native';
import { usePRAndIssueHeaderStore, usePullRequestsStore } from '../../hooks/stores';
import { SORT_OPTIONS } from '../../utils/constants';
import IssuesPRClearFilter from '../IssuesPRClearFilter';
import Pagination from '../Pagination';

const PullRequestsTabView = () => {
  const { activeTab, label, sortBy } = usePRAndIssueHeaderStore();
  const { width } = useWindowDimensions();
  const { pullRequests, setAfter, setBefore } = usePullRequestsStore();

  const selectedPullRequests = pullRequests[activeTab + 'PullRequests'];
  const selectedPullRequestsPageInfo = selectedPullRequests.pageInfo;

  const hasPrevPage =
    selectedPullRequestsPageInfo &&
    selectedPullRequestsPageInfo.hasPreviousPage &&
    selectedPullRequestsPageInfo.startCursor;
  const hasNxtPage =
    selectedPullRequestsPageInfo &&
    selectedPullRequestsPageInfo.hasNextPage &&
    selectedPullRequestsPageInfo.endCursor;

  const handleNextPress = () => {
    setAfter(selectedPullRequestsPageInfo.endCursor);
    setBefore(null);
  };
  const handlePreviousPress = () => {
    setBefore(selectedPullRequestsPageInfo.startCursor);
    setAfter(null);
  };

  return (
    <MainContainer screenWidth={width}>
      {label && sortBy !== Object.values(SORT_OPTIONS)[0] && <IssuesPRClearFilter />}
      <ContentContainer>
        <PRAndIssueHeader
          cardType="pr"
          openCount={pullRequests.openPullRequests.totalCount}
          closedCount={pullRequests.closedPullRequests.totalCount}
        />
        {pullRequests[activeTab + 'PullRequests'].pullRequests.map((data, index) => (
          <IssuePullRequestCard {...data} cardType="pr" key={index} />
        ))}
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

export default PullRequestsTabView;
