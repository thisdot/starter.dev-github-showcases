import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { parseSortParams } from '../../../utils/parseSortParams';
import { useIssuesStore, usePRAndIssueHeaderStore } from '../../../hooks/stores';
import { DEFAULT_PAGE_SIZE, SORT_OPTIONS } from '../../../utils/constants';
import getIssues from '../../../services/get-repo-issues';

interface UseRoute {
  params?: {
    name?: string;
    owner?: string;
  };
}
const Issues = () => {
  const { params }:UseRoute = useRoute();
  const {after, before, isLoading, issues} = useIssuesStore();
  const { sortBy, label, milestone } = usePRAndIssueHeaderStore();
  
  // const params = usePara
  const fetchParameters = () => ({
    owner: params.owner,
    name: params.name,
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
    if(!isLoading) {
      console.log('====================================');
      console.log(issues);
      console.log('====================================');
    }
  },[isLoading])

  useEffect(() => {
    getIssues(fetchParameters());
  },[before, after, sortBy, milestone, label])
  return (
    <View>
      <Text>{isLoading ? 'Loading...': 'Done'}</Text>
      <Text>Issues</Text>
    </View>
  );
};

export default Issues;
