import PRAndIssueHeader from '../PRAndIssueHeader';
import { ContentContainer, Pagination, PaginationBtn, MainContainer } from './IssuesTabView.styles';
import IssuePullRequestCard from '../IssuePullRequestCard';
import { Text, useWindowDimensions } from 'react-native';
import { useIssuesStore, usePRAndIssueHeaderStore } from '../../hooks/stores';
import { SORT_OPTIONS } from '../../utils/constants';
import IssuesPRClearFilter from '../IssuesPRClearFilter';

const IssuesTabView = () => {
  const { activeTab, label, sortBy } = usePRAndIssueHeaderStore();
  const { width } = useWindowDimensions();
  const { issues } = useIssuesStore();

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
