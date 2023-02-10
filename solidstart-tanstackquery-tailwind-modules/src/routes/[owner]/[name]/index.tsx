import { Switch, Match } from 'solid-js';
import { createQuery } from '@tanstack/solid-query';
import { useParams } from 'solid-start';
import { RepoAbout } from '~/components/RepoAbout';
import { RepoHeader } from '~/components/RepoHeader/';
import getRepoInfo from '~/services/get-repo-info';
import { LoadingPulseDot } from '~/components/LoadingPulseDot/LoadingPulseDot';
import { Info } from '~/types/repo-info-type';

const Repository = () => {
  const params = useParams();

  const isOwnerAndNameValid =
    typeof params.owner === 'string' && typeof params.name === 'string';

  const repoInfo = createQuery(
    () => ['repository-info', params.owner, params.name],
    () =>
      getRepoInfo(
        isOwnerAndNameValid
          ? { owner: params.owner, name: params.name }
          : { owner: '', name: '' }
      )
  );

  return (
    <div class="bg-white h-screen">
      <Switch>
        <Match when={repoInfo.isError}>
          <p>Error</p>
        </Match>
        <Match when={repoInfo.isLoading}>
          <div class="mt-2">
            <p>loading</p>
            <LoadingPulseDot />
          </div>
        </Match>
        <Match
          when={
            repoInfo.isSuccess && !repoInfo.isLoading && repoInfo.data?.info
          }
        >
          <RepoHeader {...(repoInfo.data?.info as Info)} />
          <div class="max-w-screen-2xl mx-auto md:py-8 px-4">
            <div class="grid grid-cols-12 gap-8">
              <div class="col-span-12 md:col-span-7 xl:col-span-9">
                {/* Conent here */}
              </div>
              <div class="col-span-12 md:col-span-5 xl:col-span-3">
                <RepoAbout
                  description={repoInfo.data?.info.description}
                  homepageUrl={repoInfo.data?.info?.homepageUrl}
                  topics={repoInfo.data?.info?.topics}
                />
              </div>
            </div>
          </div>
        </Match>
      </Switch>
    </div>
  );
};

export default Repository;
