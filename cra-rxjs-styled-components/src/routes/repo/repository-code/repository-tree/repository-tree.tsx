import { useLocation, useParams } from 'react-router-dom';
import { Repository } from '../../../../interfaces/repositories.interfaces';
import Readme from '../../../../components/readme/Readme';
import FileExplorer from '../../../../components/file-explorer/FileExplorer';
import {
  RepoContainer,
} from '../../../../components/layouts/RepoLayoutPage';
import { useRepositoryDetails } from '../../../../hooks/repository-code/use-repository-details';

type RepositoryDetails = {
  repo: Repository | null;
  rootFileInfo?: any[];
  topics?: string[];
};

export default function RepoTree() {
  const params = useParams();
  const location = useLocation();

  const branch = params.branch!;
  const basePath: string = `${params.username!}/${params.repo!}`;
  const repoPath: string = location.pathname.split(`${basePath}/tree/${branch}/`).pop()!;
  
  const repoDetails: RepositoryDetails = useRepositoryDetails(
    params.username!,
    params.repo!,
    branch,
    repoPath
  );
  const { repo, rootFileInfo } = repoDetails;
  const listOfDirectories = rootFileInfo
    ?.filter((obj) => obj.type === 'dir')
    .map((obj) => {
      return {
        name: obj.name,
        path: obj.path
      }
    });
  const listOfFiles = rootFileInfo
    ?.filter((obj) => obj.type === 'file')
    .map((obj) => {
      return {
        name: obj.name,
        path: obj.path
      }})
    .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));


  return (
    <>
      <RepoContainer>
        {
          repoDetails.rootFileInfo && (
            <>
              <FileExplorer
                basePath={basePath}
                repoPath={repoPath}
                files={listOfFiles!}
                directories={listOfDirectories!}
                branch={branch}
                ifTree={true}
              />
              <Readme
                branch={params.branch!}
                username={repo?.owner.login!}
                repository={repo?.name!}
              />
            </>
          )
        }
      </RepoContainer>
    </>
  );
}
