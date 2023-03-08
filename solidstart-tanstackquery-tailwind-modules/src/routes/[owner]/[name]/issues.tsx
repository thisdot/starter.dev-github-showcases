import { Switch, Match, createSignal, createEffect } from 'solid-js';
import { createQuery } from '@tanstack/solid-query';
import { useParams, useSearchParams } from 'solid-start';
import getRepoInfo from '../../../services/get-repo-info';
import { LoadingPulseDot } from '../../../components/LoadingPulseDot/LoadingPulseDot';
import { Info } from '~/types/repo-info-type';
import { RepoHeader } from '../../../components/RepoHeader';
import getIssues from '../../../services/get-issues';
import RepoIssues from '../../../components/RepoIssues';
import {
  milestoneId,
  selectedLabel,
  selectedMilestone,
  sortBy,
} from '../../../components/PRAndIssuesHeader';
import { parseSortParams } from '../../../components/RepoIssues/utils';
import { DEFAULT_PAGE_SIZE, SORT_OPTIONS } from '../../../utils/constants';
import {
  Issue,
  MilestoneProps,
  PageInfo,
} from '~/types/issues-type';
import { Label } from '~/types/label-type';

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

const [issues, setIssues] = createSignal<IssuesSignal>({
  openIssues: {
    issues: [],
    totalCount: 0,
    pageInfo: { hasNextPage: false, hasPreviousPage: false },
  },
  closedIssues: {
    issues: [],
    totalCount: 0,
    pageInfo: { hasNextPage: false, hasPreviousPage: false },
  },
  milestones: [],
  labels: [],
});

export { issues, setIssues };

const Issues = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const [info, setInfo] = createSignal<Info>({
    isPrivate: false,
    visibility: '',
    forkCount: 0,
    description: '',
    homepageUrl: '',
    stargazerCount: 0,
    watcherCount: 0,
    openIssueCount: 0,
    topics: [],
    isOrg: false,
    openPullRequestCount: 0,
  });

  const isOwnerAndNameValid =
    typeof params.owner === 'string' && typeof params.name === 'string';

  const repoInfo = createQuery(
    () => [`repository-info_${params.owner}_${params.name}`],
    () =>
      getRepoInfo(
        isOwnerAndNameValid
          ? { owner: params.owner, name: params.name }
          : { owner: '', name: '' }
      )
  );

  const repoIssues = createQuery(
    () => [
      `repository-issues_${params.owner}_${params.name}`,
      searchParams.after,
      searchParams.before,
      sortBy(),
      selectedLabel(),
      milestoneId(),
    ],
    () =>
      getIssues({
        owner: params.owner,
        name: params.name,
        orderBy: parseSortParams(SORT_OPTIONS, sortBy(), 0),
        direction: parseSortParams(SORT_OPTIONS, sortBy(), 1),
        filterBy: {
          labels: selectedLabel() ? [selectedLabel()] : undefined,
          milestone: selectedMilestone() ? milestoneId() : undefined,
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
    if (repoInfo.isSuccess && !repoInfo.isLoading && repoInfo.data) {
      setInfo(repoInfo.data.info);
    }
    if (repoIssues.isSuccess && !repoIssues.isLoading && repoIssues.data) {
      setIssues(repoIssues.data);
    }
  });

  return (
    <div class="bg-white h-screen">
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
          <div class="mt-2">
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
