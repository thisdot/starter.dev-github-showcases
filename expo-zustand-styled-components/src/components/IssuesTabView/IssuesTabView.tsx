import { FlatList, ScrollView, useWindowDimensions } from 'react-native';

import Pagination from '../Pagination';
import PRAndIssueHeader from '../PRAndIssueHeader';
import IssuesPRClearFilter from '../IssuesPRClearFilter';
import IssuePullRequestCard from '../IssuePullRequestCard';
import { ContentContainer, MainContainer } from './IssuesTabView.styles';

import { useIssuesStore, usePRAndIssueHeaderStore } from '../../hooks/stores';
import { SORT_OPTIONS } from '../../utils/constants';

const IssuesTabView = ({ navigation }) => {
  const { width } = useWindowDimensions();
  const { issues } = useIssuesStore();
  const { activeTab, label, sortBy } = usePRAndIssueHeaderStore();
  const selectedIssue = issues[(activeTab + 'Issues') as 'openIssues' | 'closedIssues'];

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
    <MainContainer screenWidth={width}>
      {label && sortBy !== Object.values(SORT_OPTIONS)[0] && <IssuesPRClearFilter />}
      <ContentContainer>
        <ScrollView horizontal scrollEnabled={false} contentContainerStyle={{ flexGrow: 1 }}>
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
            keyExtractor={(item, index) => item.url + index}
            renderItem={({ item }) => <IssuePullRequestCard {...item} cardType="issue" />}
          />
        </ScrollView>
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
