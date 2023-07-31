import { useParams } from 'solid-start';
import { BranchNavigation } from '~/components/BranchNavigation';
import FileExplorer from '~/components/FileExplorer';
import { RepoHeader } from '~/components/RepoHeader';
import styles from '../../../../style.module.css';
import useGetRepoInfo from '~/hooks/useGetRepoInfo';

const RepoTree = () => {
  const params = useParams();
  const [info, branch] = useGetRepoInfo();
  const path = params.path || params['path/'];

  return (
    <div class={styles.wrapper}>
      <RepoHeader {...info()} />
      <div class="max-w-screen-2xl mx-auto md:py-8 px-4">
        <div class="grid grid-cols-12 gap-8">
          <div class="col-span-12 md:col-span-7 xl:col-span-9">
            <BranchNavigation branch={branch()} />
            <FileExplorer
              path={path}
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
