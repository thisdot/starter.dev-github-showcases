import { Switch, Match, createEffect } from 'solid-js';
import { createQuery } from '@tanstack/solid-query';
import { useParams, useSearchParams } from 'solid-start';
import { LoadingPulseDot } from '../../../components/LoadingPulseDot';
import { RepoHeader } from '../../../components/RepoHeader';
import getIssues from '../../../services/get-issues';
import RepoIssues from '../../../components/RepoIssues';
import { parseSortParams } from '../../../components/RepoIssues/utils';
import { DEFAULT_PAGE_SIZE, SORT_OPTIONS } from '../../../utils/constants';
import { Issue, MilestoneProps, PageInfo } from '~/types/issues-type';
import { Label } from '~/types/label-type';
import styles from '../style.module.css';
import useGetRepoInfo from '~/hooks/useGetRepoInfo';
import {
  milestoneNumber,
  selectedLabel,
  selectedMilestone,
  setIssues,
  sortBy,
} from '~/store';

export type IssuesSignal = {
  openIssues: {
    issues: Issue[];
    totalCount: number;
    pageInfo: PageInfo;
  };
  closedIssues: {
    issues: Issue[];
    totalCount: number;
    pageInfo: PageInfo;
  };
  milestones: MilestoneProps[];
  labels: Label[];
};

const Issues = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const [info, , repoInfo] = useGetRepoInfo();

  const repoIssues = createQuery(
    () => [
      `repository-issues_${params.owner}_${params.name}`,
      searchParams.after,
      searchParams.before,
      sortBy(),
      selectedLabel(),
      milestoneNumber(),
    ],
    () =>
      getIssues({
        owner: params.owner,
        name: params.name,
        orderBy: parseSortParams(SORT_OPTIONS, sortBy(), 0),
        direction: parseSortParams(SORT_OPTIONS, sortBy(), 1),
        filterBy: {
          labels: selectedLabel() ? [selectedLabel()] : undefined,
          milestoneNumber: selectedMilestone() ? milestoneNumber() : undefined,
        },
        before: searchParams.before,
        after: searchParams.after,
        first:
          searchParams.after || !searchParams.before
            ? DEFAULT_PAGE_SIZE
            : undefined,
        last: searchParams.before ? DEFAULT_PAGE_SIZE : undefined,
      })
  );

  createEffect(() => {
    if (repoIssues.isSuccess && !repoIssues.isLoading && repoIssues.data) {
      setIssues(repoIssues.data);
    }
  });

  return (
    <div class={styles.wrapper}>
      <Switch>
        <Match when={repoInfo.isError}>
          <p>Error</p>
        </Match>
        <Match when={repoInfo.isLoading}>
          <div class="mt-2">
            <LoadingPulseDot />
          </div>
        </Match>
        <Match when={repoInfo.isSuccess && !repoInfo.isLoading}>
          <RepoHeader {...info()} />
        </Match>
      </Switch>
      <Switch>
        <Match when={repoIssues.isError}>
          <p>Error</p>
        </Match>
        <Match when={repoIssues.isLoading}>
          <div class="mt-4 ml-4">
            <LoadingPulseDot />
          </div>
        </Match>
        <Match when={repoIssues.isSuccess && !repoIssues.isLoading}>
          <div class="max-w-screen-2xl mx-auto md:py-8 px-4">
            <RepoIssues />
          </div>
        </Match>
      </Switch>
    </div>
  );
};

export default Issues;
