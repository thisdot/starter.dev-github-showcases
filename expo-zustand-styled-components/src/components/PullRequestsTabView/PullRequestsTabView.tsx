import { FlatList, ScrollView, useWindowDimensions } from 'react-native';

import Pagination from '../Pagination';
import PRAndIssueHeader from '../PRAndIssueHeader';
import IssuesPRClearFilter from '../IssuesPRClearFilter';
import IssuePullRequestCard from '../IssuePullRequestCard';
import { ContentContainer, MainContainer } from './PullRequestsTabView.styles';

import { usePRAndIssueHeaderStore, usePullRequestsStore } from '../../hooks/stores';
import { SORT_OPTIONS } from '../../utils/constants';

const PullRequestsTabView = ({ navigation }) => {
  const { activeTab, label, sortBy } = usePRAndIssueHeaderStore();
  const { pullRequests } = usePullRequestsStore();
  const { width } = useWindowDimensions();

  const selectedPullRequests =
    pullRequests[(activeTab + 'PullRequests') as 'openPullRequests' | 'closedPullRequests'];
  const pageInfo = selectedPullRequests.pageInfo;

  const hasNxtPage = Boolean(pageInfo?.hasNextPage && pageInfo?.endCursor);
  const hasPrevPage = Boolean(pageInfo?.hasPreviousPage && pageInfo?.startCursor);

  const goToNext = () => {
    navigation.navigate('Pull Requests', { afterCursor: pageInfo.endCursor });
  };

  const goToPrev = () => {
    navigation.navigate('Pull Requests', { beforeCursor: pageInfo.startCursor });
  };

  return (
    <MainContainer screenWidth={width}>
      {label && sortBy !== Object.values(SORT_OPTIONS)[0] && <IssuesPRClearFilter />}
      <ContentContainer>
        <ScrollView horizontal scrollEnabled={false} contentContainerStyle={{ flexGrow: 1 }}>
          <FlatList
            ListHeaderComponent={
              <PRAndIssueHeader
              cardType="pr"
              openCount={pullRequests.openPullRequests.totalCount}
              closedCount={pullRequests.closedPullRequests.totalCount}
            />
            }
            scrollEnabled={false}
            data={selectedPullRequests.pullRequests}
            keyExtractor={(item, index) => item.url + index}
            renderItem={({ item }) => <IssuePullRequestCard {...item} cardType="pr" />}
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

export default PullRequestsTabView;
