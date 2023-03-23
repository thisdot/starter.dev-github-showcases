import { Switch, Match } from 'solid-js';
import { useParams } from 'solid-start';
import { RepoHeader } from '~/components/RepoHeader';
import { RepoAbout } from '~/components/RepoAbout';
import { BranchNavigation } from '~/components/BranchNavigation';
import { RepoReadMe } from '~/components/RepoReadMe';
import FileExplorer from '~/components/FileExplorer';
import { LoadingPulseDot } from '~/components/LoadingPulseDot';
import styles from '../style.module.css';
import useGetRepoInfo from '~/hooks/useGetRepoInfo';

const Repository = () => {
  const params = useParams();
  const [info, branch, repoInfo] = useGetRepoInfo();

  return (
    <div class={styles.wrapper}>
      <Switch>
        <Match when={repoInfo.isError}>
          <p>Error</p>
        </Match>
        <Match when={repoInfo.isLoading}>
          <div class="mt-4 ml-4">
            <LoadingPulseDot />
          </div>
        </Match>
        <Match when={repoInfo.isSuccess && !repoInfo.isLoading}>
          <RepoHeader {...info()} />
          <div class="max-w-screen-2xl mx-auto md:py-8 px-4">
            <div class="grid grid-cols-12 gap-8">
              <div class="col-span-12 md:col-span-7 xl:col-span-9">
                <BranchNavigation branch={branch()} />
                <FileExplorer
                  branch={branch()}
                  owner={params.owner}
                  name={params.name}
                />
                <RepoReadMe />
              </div>
              <div class="col-span-12 md:col-span-5 xl:col-span-3">
                <RepoAbout
                  description={info().description}
                  homepageUrl={info().homepageUrl}
                  topics={info().topics || []}
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
