import { Switch, Match, createSignal, createEffect } from 'solid-js';
import { createQuery } from '@tanstack/solid-query';
import { useParams } from 'solid-start';
import getRepoInfo from '~/services/get-repo-info';
import { LoadingPulseDot } from '~/components/LoadingPulseDot/LoadingPulseDot';
import { Info } from '~/types/repo-info-type';
import { RepoHeader } from '~/components/RepoHeader';
import getIssues from '~/services/get-issues';
import { setIssuesStore } from '~/stores/issues-store';
import RepoIssues from '~/components/RepoIssues';

const Issues = () => {
  const params = useParams();
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
    () => [`repository-issues_${params.owner}_${params.name}`],
    () =>
      getIssues({
        owner: params.owner,
        name: params.name,
      })
  );

  createEffect(() => {
    if (repoInfo.isSuccess && !repoInfo.isLoading && repoInfo.data) {
      setInfo(repoInfo.data.info);
    }
    if (repoIssues.isSuccess && !repoIssues.isLoading && repoIssues.data) {
      setIssuesStore(repoIssues.data);
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