import { Switch, Match, createSignal, createEffect } from 'solid-js';
import { createQuery } from '@tanstack/solid-query';
import { useParams, useSearchParams } from 'solid-start';
import getRepoInfo from '~/services/get-repo-info';
import { LoadingPulseDot } from '~/components/LoadingPulseDot/LoadingPulseDot';
import { Info } from '~/types/repo-info-type';
import { RepoHeader } from '~/components/RepoHeader';
import getRepoPullRequests from '~/services/get-pull-request';
import {
  PullRequestsStore,
  pullRequestsStore,
  setPullRequestsStore,
} from '~/stores/pull-requests-store';
import { selectedLabel, sortBy } from '~/components/PRAndIssuesHeader';
import { parseSortParams } from '~/components/RepoIssues/utils';
import { DEFAULT_PAGE_SIZE, SORT_OPTIONS } from '~/utils/constants';
import RepoPullRequests from '~/components/RepoPullRequests';

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
        filterBy: {
          // @ts-ignore
          labels: selectedLabel() ? [selectedLabel()] : undefined,
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
    if (
      repoPullrequests.isSuccess &&
      !repoPullrequests.isLoading &&
      repoPullrequests.data
    ) {
      setPullRequestsStore(repoPullrequests.data as PullRequestsStore);
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
        <Match when={repoPullrequests.isError}>
          <p>Error</p>
        </Match>
        <Match when={repoPullrequests.isLoading}>
          <div class="mt-2">
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

export default Issues;
