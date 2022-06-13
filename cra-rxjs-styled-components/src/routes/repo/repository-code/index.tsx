import { useLocation, useParams } from 'react-router-dom';
import { Repository } from '../../../interfaces/repositories.interfaces';
import RepoAbout from '../../../components/repo-about/RepoAbout';
import Readme from '../../../components/readme/Readme';
import FileExplorer from '../../../components/file-explorer/FileExplorer';
import {
  RepoMain,
  RepoAside,
  RepoContainer,
  RepoGrid,
} from '../../../components/layouts/RepoLayoutPage';
import { useRepositoryDetails } from '../../../hooks/repository-code/use-repository-details';

type RepositoryDetails = {
  repo: Repository | null;
  rootFileInfo?: any[];
  topics?: string[];
};

export default function RepoDetails() {
  const params = useParams();
  const repoDetails: RepositoryDetails = useRepositoryDetails(
    params.username!,
    params.repo!
  );
  const { repo, rootFileInfo, topics } = repoDetails;
  const listOfDirectories = rootFileInfo
    ?.filter((obj) => obj.type === 'dir')
    .map((obj) => {
      return {
        name: obj.name,
        path: obj.path,
      };
    });
  const listOfFiles = rootFileInfo
    ?.filter((obj) => obj.type === 'file')
    .map((obj) => {
      return {
        name: obj.name,
        path: obj.path,
      };
    })
    .sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()));

  const location = useLocation();
  const repoPath = location.pathname;
  const basePath = `${params.username!}/${params.repo!}`;

  return (
    <>
      <RepoContainer>
        <RepoGrid>
          {repoDetails.rootFileInfo && (
            <>
              <RepoMain>
                <FileExplorer
                  basePath={basePath}
                  repoPath={repoPath}
                  files={listOfFiles!}
                  directories={listOfDirectories!}
                  branch={repo?.default_branch!}
                />
                <Readme
                  branch={repo?.default_branch!}
                  username={repo?.owner.login!}
                  repository={repo?.name!}
                />
              </RepoMain>
              <RepoAside>
                <RepoAbout
                  topics={topics}
                  description={repo?.description}
                  websiteLink={repo?.homepage}
                />
              </RepoAside>
            </>
          )}
        </RepoGrid>
      </RepoContainer>
    </>
  );
}
