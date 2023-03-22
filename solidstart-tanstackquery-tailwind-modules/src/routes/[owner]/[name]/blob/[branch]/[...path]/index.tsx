import { BranchNavigation } from '~/components/BranchNavigation';
import { FileViewer } from '~/components/FileViewer';
import { RepoHeader } from '~/components/RepoHeader';
import styles from '../../../../style.module.css';
import useGetRepoInfo from '~/hooks/useGetRepoInfo';

const RepoBlob = () => {
  const [info, branch] = useGetRepoInfo();

  return (
    <div class={styles.wrapper}>
      <RepoHeader {...info()} />
      <div class="max-w-screen-2xl mx-auto md:py-8 px-4">
        <div class="grid grid-cols-12 gap-8">
          <div class="col-span-12 md:col-span-7 xl:col-span-9">
            <BranchNavigation branch={branch()} />
            <FileViewer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoBlob;
