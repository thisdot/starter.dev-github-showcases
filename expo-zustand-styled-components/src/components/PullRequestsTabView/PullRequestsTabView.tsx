import { Text, FlatList, useWindowDimensions } from 'react-native';

import Pagination from '../Pagination';
import PRAndIssueHeader from '../PRAndIssueHeader';
import IssuesPRClearFilter from '../IssuesPRClearFilter';
import { ContentContainer, MainContainer, EmptyPullRequest } from './PullRequestsTabView.styles';
import IssuePullRequestCard from '../IssuePullRequestCard';

import { usePRAndIssueHeaderStore } from '../../hooks/stores';
import { SORT_OPTIONS } from '../../utils/constants';

const PullRequestsTabView = ({ navigation, pullRequests }) => {
  const { width } = useWindowDimensions();
  const { activeTab, label, sortBy } = usePRAndIssueHeaderStore();

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
    <MainContainer screenWidth={width} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingTop: 40, paddingBottom: 10 }}>
      {label && sortBy !== Object.values(SORT_OPTIONS)[0] && <IssuesPRClearFilter />}
      <ContentContainer horizontal scrollEnabled={false} contentContainerStyle={{ flexGrow: 1, flexShrink: 1 }}>
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
          ListEmptyComponent={
            <EmptyPullRequest>
              <Text style={{ textTransform: 'uppercase' }}>No {activeTab} Pull Request found.</Text>
            </EmptyPullRequest>
          }
        />
        {selectedPullRequests.pullRequests.map((data, index) => (
          <IssuePullRequestCard {...data} cardType="pr" key={index} />
        ))}
        {selectedPullRequests.pullRequests.length === 0 && (
          <EmptyPullRequest>
            <Text style={{ textTransform: 'uppercase' }}>No {activeTab} Pull Request found.</Text>
          </EmptyPullRequest>
        )}
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
