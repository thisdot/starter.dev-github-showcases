import PRAndIssueHeader from '../PRAndIssueHeader';
import {
  ContentContainer,
  Pagination,
  PaginationBtn,
  MainContainer,
} from './PullRequestsTabView.styles';
import IssuePullRequestCard from '../IssuePullRequestCard';
import { Text, useWindowDimensions } from 'react-native';
import { usePRAndIssueHeaderStore, usePullRequestsStore } from '../../hooks/stores';
import { SORT_OPTIONS } from '../../utils/constants';
import IssuesPRClearFilter from '../IssuesPRClearFilter';

const PullRequestsTabView = () => {
  const { activeTab, label, sortBy } = usePRAndIssueHeaderStore();
  const { width } = useWindowDimensions();
  const { pullRequests } = usePullRequestsStore();

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
