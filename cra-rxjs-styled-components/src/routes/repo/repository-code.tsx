import { useEffect, useState } from 'react';
import { tap } from 'rxjs';
import { SINGLE_USER_REPO } from '../../constants/url.constants';
import { fromFetchWithAuth } from '../../hooks/auth/from-fetch-with-auth';
import RepoAbout from '../../components/repo-about/RepoAbout';
import Readme from '../../components/readme/Readme';
import FileExplorer from '../../components/file-explorer/FileExplorer';
import {
  RepoMain,
  RepoAside,
  RepoContainer,
  RepoGrid,
} from '../../components/layouts/RepoLayoutPage';
import { useRepo } from '../../context/RepoContext';

type RepositoryDetails = {
  rootFileInfo: any[];
};

export default function RepoDetails() {
  const repo = useRepo();
  const [repoDetails, setRepoDetails] = useState<RepositoryDetails>({
    rootFileInfo: [],
  });
  const { rootFileInfo } = repoDetails;
  const listOfDirectoryNames = rootFileInfo
    ?.filter((obj) => obj.type === 'dir')
    .map((obj) => obj.name);
  const listOfFileNames = rootFileInfo
    ?.filter((obj) => obj.type === 'file')
    .map((obj) => obj.name)
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

  const request = (url: string) =>
    fromFetchWithAuth(url, {
      selector: (response: Response) => {
        return response.json();
      },
    });

  useEffect(() => {
      request(`${SINGLE_USER_REPO(repo.owner, repo.name)}/contents`)
      .pipe(
        tap((val) => {
          if (val) {
            setRepoDetails({
              rootFileInfo: val
            });
          }
        })
      )
      .subscribe();
  }, [repo.owner, repo.name]);

  return (
    <>
      <RepoContainer>
        <RepoGrid>
          <RepoMain>
            <FileExplorer
              fileNames={listOfFileNames!}
              dirNames={listOfDirectoryNames!}
              branch={repo.branch}
            />
            <Readme
              branch={repo.branch}
              username={repo.owner}
              repository={repo.name}
            />
          </RepoMain>
          <RepoAside>
            <RepoAbout
              topics={repo.data?.topics}
              description={repo.data?.description}
              websiteLink={repo.data?.homepageUrl}
            />
          </RepoAside>
        </RepoGrid>
      </RepoContainer>
    </>
  );
}
