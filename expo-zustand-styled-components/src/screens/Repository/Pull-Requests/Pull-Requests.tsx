import React, { useEffect } from 'react';
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

const PullRequests = () => {
  const { after, before, isLoading, pullRequests } = usePullRequestsStore();
  const { sortBy, label, setLabels } = usePRAndIssueHeaderStore();
  const { name, owner } = useRepoInfoStore();

  const fetchParameters = () => ({
    owner,
    name,
    orderBy: parseSortParams(SORT_OPTIONS, sortBy, 0),
    direction: parseSortParams(SORT_OPTIONS, sortBy, 1),
    labels: label ? [label] : undefined,
    before: typeof before === 'string' ? before : undefined,
    after: typeof after === 'string' ? after : undefined,
    first: after || !before ? DEFAULT_PAGE_SIZE : undefined,
    last: before ? DEFAULT_PAGE_SIZE : undefined,
  });

  useEffect(() => {
    if (!isLoading) {
      setLabels(pullRequests.labels);
    }
  }, [isLoading]);

  useEffect(() => {
    getRepoPullRequests(fetchParameters());
  }, [before, sortBy, label, after]);
  return (
    <Wrapper>
      {isLoading ? <PRAndIssueLoaderSkeleton cardType="pr" /> : <PullRequestsTabView />}
    </Wrapper>
  );
};

export default PullRequests;

