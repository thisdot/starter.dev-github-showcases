import PRAndIssueHeader from '../PRAndIssueHeader';
import { ContentContainer, Pagination, PaginationBtn, MainContainer } from './IssuesTabView.styles';
import IssuePullRequestCard from '../IssuePullRequestCard';
import { Text, useWindowDimensions } from 'react-native';
import { useIssuesStore, usePRAndIssueHeaderStore } from '../../hooks/stores';

const IssuesTabView = () => {
  const { activeTab } = usePRAndIssueHeaderStore();
  const { width } = useWindowDimensions();
  const { issues } = useIssuesStore();

  return (
    <MainContainer screenWidth={width}>
      <ContentContainer>
        <PRAndIssueHeader
          cardType="issue"
          openCount={issues.openIssues.totalCount}
          closedCount={issues.closedIssues.totalCount}
        />
        {issues[activeTab + 'Issues'].issues.map((data, index) => (
          <IssuePullRequestCard {...data} cardType="issue" key={index} />
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

export default IssuesTabView;
