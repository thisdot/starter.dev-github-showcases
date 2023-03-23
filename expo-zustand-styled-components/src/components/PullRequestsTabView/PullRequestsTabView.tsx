import PRAndIssueHeader from '../PRAndIssueHeader';
import { ContentContainer, Pagination, PaginationBtn, MainContainer } from './PullRequestsTabView.styles';
import IssuePullRequestCard from '../IssuePullRequestCard';
import { Text, useWindowDimensions } from 'react-native';
import { usePRAndIssueHeaderStore, usePullRequestsStore } from '../../hooks/stores';

const PullRequestsTabView = () => {
  const { activeTab } = usePRAndIssueHeaderStore();
  const { width } = useWindowDimensions();
  const { pullRequests } = usePullRequestsStore();

  return (
    <MainContainer screenWidth={width}>
      <ContentContainer>
        <PRAndIssueHeader
          cardType="issue"
          openCount={pullRequests.openPullRequests.totalCount}
          closedCount={pullRequests.closedPullRequests.totalCount}
        />
        {pullRequests[activeTab + 'PullRequests'].pullRequests.map((data, index) => (
          <IssuePullRequestCard {...data} cardType="pr" key={index} />
        ))}
      </ContentContainer>
      <Pagination>
        <PaginationBtn>
          <Text>{'<'}</Text>
          <Text>Prev</Text>
        </PaginationBtn>
        <PaginationBtn>
          <Text>Next</Text>
          <Text>{'>'}</Text>
        </PaginationBtn>
      </Pagination>
    </MainContainer>
  );
};

export default PullRequestsTabView;
