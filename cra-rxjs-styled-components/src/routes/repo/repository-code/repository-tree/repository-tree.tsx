import Readme from '../../../../components/readme/Readme';
import FileExplorer from '../../../../components/file-explorer/FileExplorer';
import {
  RepoMain,
  RepoContainer,
  RepoGrid,
} from '../../../../components/layouts/RepoLayoutPage';
import { useRepo } from '../../../../context/RepoContext';
import { useRepoExplorer } from '../../../../hooks/repo-explorer/use-repo-explorer';

export default function RepoBranchTreePath() {
  const { owner, name, branch, path, basePath } = useRepo();
  const { files, directories } = useRepoExplorer();

  return (
    <>
      <RepoContainer>
        <RepoGrid>
          <RepoMain>
            <FileExplorer
              branch={branch}
              path={path}
              basePath={basePath}
              directories={directories}
              files={files}
            />
            <Readme branch={branch} username={owner} repository={name} />
          </RepoMain>
        </RepoGrid>
      </RepoContainer>
    </>
  );
}
