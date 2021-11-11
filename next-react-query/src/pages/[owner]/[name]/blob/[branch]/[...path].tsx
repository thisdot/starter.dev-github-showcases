import { useRouter } from 'next/router';
import FileViewer from '@components/FileViewer/FileViewer.data';

const RepoBranchBlob = () => {
  const router = useRouter();
  const { owner, repo, branch, path } = router.query;

  if (
    typeof owner !== 'string' ||
    typeof repo !== 'string' ||
    typeof branch !== 'string' ||
    !path
  ) {
    return null;
  }

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="my-8">
        <FileViewer owner={owner} repo={repo} branch={branch} path={path} />
      </div>
    </div>
  );
};

export default RepoBranchBlob;
