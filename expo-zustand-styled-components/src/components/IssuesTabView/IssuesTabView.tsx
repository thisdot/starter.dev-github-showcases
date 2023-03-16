import PRAndIssueHeader from '../PRAndIssueHeader';
import { Container, Pagination, PaginationBtn } from './IssuesTabView.styles';
import { issues } from './data';
import IssuePullRequestCard from '../IssuePullRequestCard';
import { View, Text } from 'react-native';
import { usePRAndIssueHeaderStore } from '../../hooks/stores';

const IssuesTabView = () => {
  const { activeTab } = usePRAndIssueHeaderStore();

  return (
    <View>
      <Container>
        <PRAndIssueHeader cardType="issue" openCount={3} closedCount={5} />
        {issues[activeTab].map((data, index) => (
          <IssuePullRequestCard {...data} key={index} />
        ))}
      </Container>
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
    </View>
  );
};

export default IssuesTabView;
