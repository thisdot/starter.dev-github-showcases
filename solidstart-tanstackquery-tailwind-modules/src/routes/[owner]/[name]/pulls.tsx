import { Switch, Match, createEffect } from 'solid-js';
import { createQuery } from '@tanstack/solid-query';
import { useParams, useSearchParams } from 'solid-start';
import { LoadingPulseDot } from '../../../components/LoadingPulseDot';
import { RepoHeader } from '../../../components/RepoHeader';
import getRepoPullRequests from '../../../services/get-pull-request';
import { parseSortParams } from '../../../components/RepoIssues/utils';
import { DEFAULT_PAGE_SIZE, SORT_OPTIONS } from '../../../utils/constants';
import RepoPullRequests from '../../../components/RepoPullRequests';
import { PageInfo, PullRequest } from '~/types/pull-request-type';
import { Label } from '~/types/label-type';
import styles from '../style.module.css';
import useGetRepoInfo from '~/hooks/useGetRepoInfo';
import { selectedLabel, setPullRequests, sortBy } from '~/store';

export type PullRequestsSignal = {
  openPullRequests: {
    pullRequests: PullRequest[];
    totalCount: number;
    pageInfo: PageInfo;
  };
  closedPullRequests: {
    pullRequests: PullRequest[];
    totalCount: number;
    pageInfo: PageInfo;
  };
  labels: Label[];
};

const PullRequests = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const [info, ,repoInfo] = useGetRepoInfo();

  const repoPullrequests = createQuery(
    () => [
      `repository-prs_${params.owner}_${params.name}`,
      searchParams.after,
      searchParams.before,
      sortBy(),
      selectedLabel(),
    ],
    () =>
      getRepoPullRequests({
        owner: params.owner,
        name: params.name,
        orderBy: parseSortParams(SORT_OPTIONS, sortBy(), 0),
        direction: parseSortParams(SORT_OPTIONS, sortBy(), 1),
        labels: selectedLabel() ? [selectedLabel()] : undefined,
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
    if (
      repoPullrequests.isSuccess &&
      !repoPullrequests.isLoading &&
      repoPullrequests.data
    ) {
      setPullRequests(repoPullrequests.data as PullRequestsSignal);
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
        <Match when={repoPullrequests.isError}>
          <p>Error</p>
        </Match>
        <Match when={repoPullrequests.isLoading}>
          <div class="mt-4 ml-4">
            <LoadingPulseDot />
          </div>
        </Match>
        <Match when={repoPullrequests.isSuccess && !repoPullrequests.isLoading}>
          <div class="max-w-screen-2xl mx-auto md:py-8 px-4">
            <RepoPullRequests />
          </div>
        </Match>
      </Switch>
    </div>
  );
};

export default PullRequests;
