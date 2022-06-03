import { RepoMain } from '../layouts/RepoLayoutPage';
import RepoAbout from '../repo-about/RepoAbout';
import FileExplorer from '../file-explorer/FileExplorer';
import Readme from '../readme/Readme';
import { RepoCodeTabContainer } from './repo-code-tab.styles';

type RepoCodeProps = {
  topics?: string[];
  description?: string;
  websiteLink?: string;
  fileNames: string[];
  dirNames: string[];
  branch: string;
  ownerUsername: string;
  repositoryName: string;
};

function RepoCodeTab({
  topics,
  description,
  websiteLink,
  fileNames,
  dirNames,
  branch,
  ownerUsername,
  repositoryName,
}: RepoCodeProps) {
  return (
    <RepoCodeTabContainer>
      <RepoMain>
        <div>
          <FileExplorer
            fileNames={fileNames}
            dirNames={dirNames}
            branch={branch}
          />
          <Readme
            branch={branch}
            username={ownerUsername}
            repository={repositoryName}
          />
        </div>
        <RepoAbout
          topics={topics}
          description={description}
          websiteLink={websiteLink}
        />
      </RepoMain>
    </RepoCodeTabContainer>
  );
}

export default RepoCodeTab;
