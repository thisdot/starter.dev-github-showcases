import React, { useEffect } from 'react';
import { parseSortParams } from '../../../utils/parseSortParams';
import { useIssuesStore, usePRAndIssueHeaderStore, useRepoInfoStore } from '../../../hooks/stores';
import { DEFAULT_PAGE_SIZE, SORT_OPTIONS } from '../../../utils/constants';
import getIssues from '../../../services/get-repo-issues';
import PRAndIssueLoaderSkeleton from '../../../components/PRAndIssueLoaderSkeleton';
import IssuesTabView from '../../../components/IssuesTabView';
import { Wrapper } from './Issues.style';

const Issues = () => {
  const { after, before, isLoading, issues } = useIssuesStore();
  const { sortBy, label, milestone, setLabels, setMilestones } = usePRAndIssueHeaderStore();
  const { name, owner } = useRepoInfoStore();

  const fetchParameters = () => ({
    owner,
    name,
    orderBy: parseSortParams(SORT_OPTIONS, sortBy, 0),
    direction: parseSortParams(SORT_OPTIONS, sortBy, 1),
    filterBy: {
      labels: label ? [label] : undefined,
      milestone: milestone ? milestone : undefined,
    },
    before: typeof before === 'string' ? before : undefined,
    after: typeof after === 'string' ? after : undefined,
    first: after || !before ? DEFAULT_PAGE_SIZE : undefined,
    last: before ? DEFAULT_PAGE_SIZE : undefined,
  });

  useEffect(() => {
    if (!isLoading) {
      setLabels(issues.labels);
      setMilestones(issues.milestones);
    }
  }, [isLoading]);

  useEffect(() => {
    getIssues(fetchParameters());
  }, [before, after, sortBy, milestone, label]);
  return (
    <Wrapper>
      {isLoading ? <PRAndIssueLoaderSkeleton cardType="issue" /> : <IssuesTabView />}
    </Wrapper>
  );
};

export default Issues;
