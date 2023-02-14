import { Switch, Match, createSignal, createEffect } from 'solid-js';
import { createQuery } from '@tanstack/solid-query';
import { useParams } from 'solid-start';
import getRepoInfo from '~/services/get-repo-info';
import { LoadingPulseDot } from '~/components/LoadingPulseDot/LoadingPulseDot';
import { Info } from '~/types/repo-info-type';
import { RepoHeader } from '~/components/RepoHeader';
import { RepoAbout } from '~/components/RepoAbout';
import { BranchNavigation } from '~/components/BranchNavigation';
import { RepoReadMe } from '~/components/RepoReadMe';
import FileExplorer from '~/components/FileExplorer';
import RepoIssues from '~/components/RepoIssues/RepoIssues';

const Repository = () => {
  const params = useParams();
  const [branch, setBranch] = createSignal(params.branch);
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

  createEffect(() => {
    if (repoInfo.isSuccess && !repoInfo.isLoading && repoInfo.data) {
      setInfo(repoInfo.data.info);
      setBranch(repoInfo.data.branch || params.branch);
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
          <div class="max-w-screen-xl mx-auto md:py-8 px-4">
            <RepoIssues />
          </div>
        </Match>
      </Switch>
    </div>
  );
};

export default Repository;
