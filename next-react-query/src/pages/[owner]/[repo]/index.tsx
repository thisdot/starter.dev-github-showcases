import { useRouter } from 'next/router';
import FileExplorer from '@components/FileExplorer/FileExplorer.data';

const RepoTree = () => {
  const router = useRouter();
  const { owner, repo } = router.query;

  if (typeof owner !== 'string' || typeof repo !== 'string') {
    return null;
  }

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="my-8">
        <FileExplorer owner={owner} repo={repo} />
      </div>
    </div>
  );
};

export default RepoTree;
