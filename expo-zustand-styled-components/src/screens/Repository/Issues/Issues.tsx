import React, { useEffect, useLayoutEffect } from 'react';

import { RepoStackScreenProps } from '../../../../types';

import { parseSortParams } from '../../../utils/parseSortParams';
import { useIssuesStore, usePRAndIssueHeaderStore, useRepoInfoStore } from '../../../hooks/stores';
import { DEFAULT_PAGE_SIZE, SORT_OPTIONS } from '../../../utils/constants';
import getIssues from '../../../services/get-repo-issues';

import PRAndIssueLoaderSkeleton from '../../../components/PRAndIssueLoaderSkeleton';
import IssuesTabView from '../../../components/IssuesTabView';

import { Wrapper } from './Issues.style';

const Issues = ({ route, navigation }: RepoStackScreenProps<'Issues'>) => {
  const { name, owner, info } = useRepoInfoStore();
  const { error, issues, isLoading } = useIssuesStore();
  const { sortBy, label, milestone, setLabels, setMilestones } = usePRAndIssueHeaderStore();

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
    filterBy: {
      labels: label ? [label] : undefined,
      milestone: milestone ? milestone : undefined,
    },
    before: typeof beforeCursor === 'string' ? beforeCursor : undefined,
    after: typeof afterCursor === 'string' ? afterCursor : undefined,
    first: afterCursor || !beforeCursor ? DEFAULT_PAGE_SIZE : undefined,
    last: beforeCursor ? DEFAULT_PAGE_SIZE : undefined,
  });

  useEffect(() => {
    if (!isLoading && issues) {
      setLabels(issues?.labels);
      setMilestones(issues?.milestones);
    }
  }, [issues, isLoading]);

  useEffect(() => {
    if(name && owner) {
      getIssues(fetchParameters(route.params || {}));
    }
  }, [name, owner, label, sortBy, milestone, route.params]);

  useLayoutEffect(() => {
    useRepoInfoStore.setState({ activeTab: 'Issues' });
    if(info && name && owner){
      navigation.setOptions({ title: `${name}/${owner} . Issues (${info?.openIssueCount}) ` });
    }
  }, [info, name, owner]);

  return (
    <Wrapper>
      {(isLoading || error || !issues) ? (
        <PRAndIssueLoaderSkeleton error={error} cardType="issue" />
      ) : (
        <IssuesTabView navigation={navigation} issues={issues}/>
      )}
    </Wrapper>
  );
};

export default Issues;
