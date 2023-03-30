import { FlatList, Text, useWindowDimensions } from 'react-native';

import Pagination from '../Pagination';
import PRAndIssueHeader from '../PRAndIssueHeader';
import IssuesPRClearFilter from '../IssuesPRClearFilter';
import IssuePullRequestCard from '../IssuePullRequestCard';

import { usePRAndIssueHeaderStore } from '../../hooks/stores';
import { SORT_OPTIONS } from '../../utils/constants';

import { ContentContainer, MainContainer, EmptyIssue } from './IssuesTabView.styles';

const IssuesTabView = ({ issues, navigation }) => {
  const { width } = useWindowDimensions();
  const { activeTab, label, sortBy } = usePRAndIssueHeaderStore();
  const selectedIssue = issues?.[(activeTab + 'Issues') as 'openIssues' | 'closedIssues'];

  const pageInfo = selectedIssue.pageInfo;

  const hasPrevPage = Boolean(pageInfo?.hasPreviousPage && pageInfo?.startCursor);
  const hasNxtPage = Boolean(pageInfo?.hasNextPage && pageInfo?.endCursor);

  const goToNext = () => {
    navigation.navigate('Issues', { afterCursor: pageInfo.endCursor });
  };

  const goToPrev = () => {
    navigation.navigate('Issues', { beforeCursor: pageInfo.startCursor });
  };

  return (
    <MainContainer
      screenWidth={width}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingTop: 40, paddingBottom: 10 }}>
      {label && sortBy !== Object.values(SORT_OPTIONS)[0] && <IssuesPRClearFilter />}
      <ContentContainer
        horizontal
        scrollEnabled={false}
        contentContainerStyle={{ flexGrow: 1, flexShrink: 1 }}>
        <FlatList
          ListHeaderComponent={
            <PRAndIssueHeader
              cardType="issue"
              openCount={issues.openIssues.totalCount}
              closedCount={issues.closedIssues.totalCount}
            />
          }
          scrollEnabled={false}
          data={selectedIssue.issues}
          ListEmptyComponent={
            <EmptyIssue>
              <Text style={{ textTransform: 'uppercase' }}>No {activeTab} Issues found.</Text>
            </EmptyIssue>
          }
          keyExtractor={(item, index) => item.url + index}
          renderItem={({ item }) => <IssuePullRequestCard {...item} cardType="issue" />}
        />
      </ContentContainer>
      <Pagination
        goToNext={goToNext}
        goToPrev={goToPrev}
        hasNextPage={hasNxtPage}
        hasPrevPage={hasPrevPage}
      />
    </MainContainer>
  );
};

export default IssuesTabView;
