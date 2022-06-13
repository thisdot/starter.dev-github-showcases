import { useEffect, useState } from 'react';
import { tap, forkJoin } from 'rxjs';
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
  topics: string[];
};

export default function RepoDetails() {
  const repo = useRepo();
  const [repoDetails, setRepoDetails] = useState<RepositoryDetails>({
    rootFileInfo: [],
    topics: [],
  });
  const { rootFileInfo, topics } = repoDetails;
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
    forkJoin([
      request(`${SINGLE_USER_REPO(repo.owner, repo.name)}/contents`),
      request(`${SINGLE_USER_REPO(repo.owner, repo.name)}/topics`),
    ])
      .pipe(
        tap((val) => {
          if (val) {
            setRepoDetails({
              rootFileInfo: val[0],
              topics: val[1].names,
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
              topics={topics}
              description={repo.data?.description}
              websiteLink={repo.data?.homepageUrl}
            />
          </RepoAside>
        </RepoGrid>
      </RepoContainer>
    </>
  );
}
