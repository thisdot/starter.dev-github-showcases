import { createQuery } from '@tanstack/solid-query';
import { createEffect, createSignal } from 'solid-js';
import { useParams } from 'solid-start';
import { BranchNavigation } from '~/components/BranchNavigation';
import FileExplorer from '~/components/FileExplorer';
import { RepoHeader } from '~/components/RepoHeader';
import getRepoInfo from '~/services/get-repo-info';
import { Info } from '~/types/repo-info-type';
import styles from '../../../../style.module.css';

const RepoTree = () => {
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
    <div class={styles.wrapper}>
      <RepoHeader {...info()} />
      <div class="max-w-screen-2xl mx-auto md:py-8 px-4">
        <div class="grid grid-cols-12 gap-8">
          <div class="col-span-12 md:col-span-7 xl:col-span-9">
            <BranchNavigation branch={branch()} />
            <FileExplorer
              path={params.path}
              branch={branch()}
              owner={params.owner}
              name={params.name}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoTree;
