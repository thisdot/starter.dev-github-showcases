import PRAndIssueHeader from '../PRAndIssueHeader';
import { ContentContainer, Pagination, PaginationBtn, MainContainer } from './IssuesTabView.styles';
import { issues } from './data';
import IssuePullRequestCard from '../IssuePullRequestCard';
import { Text, useWindowDimensions } from 'react-native';
import { usePRAndIssueHeaderStore } from '../../hooks/stores';

const IssuesTabView = () => {
  const { activeTab } = usePRAndIssueHeaderStore();
  const { width } = useWindowDimensions();

  return (
    <MainContainer screenWidth={width}>
      <ContentContainer>
        <PRAndIssueHeader cardType="issue" openCount={3} closedCount={5} />
        {issues[activeTab].map((data, index) => (
          <IssuePullRequestCard {...data} key={index} />
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
