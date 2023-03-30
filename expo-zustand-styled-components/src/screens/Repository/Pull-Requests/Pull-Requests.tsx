import React, { useEffect, useLayoutEffect } from 'react';

import { Wrapper } from './Pull-Requests.style';
import {
  usePRAndIssueHeaderStore,
  usePullRequestsStore,
  useRepoInfoStore,
} from '../../../hooks/stores';
import { DEFAULT_PAGE_SIZE, SORT_OPTIONS } from '../../../utils/constants';
import { parseSortParams } from '../../../utils/parseSortParams';

import getRepoPullRequests from '../../../services/get-repo-pull-requests';

import PRAndIssueLoaderSkeleton from '../../../components/PRAndIssueLoaderSkeleton';
import PullRequestsTabView from '../../../components/PullRequestsTabView';

import { RepoStackScreenProps } from '../../../../types';

const PullRequests = ({ route, navigation }: RepoStackScreenProps<'Pull Requests'>) => {
  const { error, isLoading, pullRequests } = usePullRequestsStore();
  const { sortBy, label, setLabels } = usePRAndIssueHeaderStore();
  const { name, owner, info } = useRepoInfoStore();

  const fetchParameters = ({
    afterCursor,
    beforeCursor,
  }: {
    afterCursor?: string;
    beforeCursor?: string;
  }) => ({
    name,
    owner,
    orderBy: parseSortParams(SORT_OPTIONS, sortBy, 0),
    direction: parseSortParams(SORT_OPTIONS, sortBy, 1),
    labels: label ? [label] : undefined,
    before: typeof beforeCursor === 'string' ? beforeCursor : undefined,
    after: typeof afterCursor === 'string' ? afterCursor : undefined,
    first: afterCursor || !beforeCursor ? DEFAULT_PAGE_SIZE : undefined,
    last: beforeCursor ? DEFAULT_PAGE_SIZE : undefined,
  });

  useEffect(() => {
    if (!isLoading) {
      setLabels(pullRequests.labels);
    }
  }, [isLoading]);

  useEffect(() => {
    if (name && owner) {
      getRepoPullRequests(fetchParameters(route.params || {}));
    }
  }, [name, owner, label, sortBy, route.params]);

  useLayoutEffect(() => {
    useRepoInfoStore.setState({ activeTab: 'Pull Requests' });
    if(info && name && owner){
      navigation.setOptions({ title: `${name}/${owner} . PRs (${info?.openPullRequestCount}) ` });
    }
  }, [info, name, owner]);

  return (
    <Wrapper>
      {isLoading || error || !pullRequests ? (
        <PRAndIssueLoaderSkeleton error={error} cardType="pr" />
      ) : (
        <PullRequestsTabView navigation={navigation} pullRequests={pullRequests} />
      )}
    </Wrapper>
  );
};

export default PullRequests;
