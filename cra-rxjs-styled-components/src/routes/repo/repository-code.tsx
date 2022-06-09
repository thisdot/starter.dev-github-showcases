import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { tap, forkJoin } from 'rxjs';
import { SINGLE_USER_REPO } from '../../constants/url.constants';
import { Repository } from '../../interfaces/repositories.interfaces';
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
import { useRepositoryDetails } from '../../hooks/repository-code/use-repository-details';

type RepositoryDetails = {
  repo: Repository | null;
  rootFileInfo?: any[];
  topics?: string[];
};

export default function RepoDetails() {
  const params = useParams();
  const repoDetails: RepositoryDetails = useRepositoryDetails(params.username!, params.repo!);
  const { repo, rootFileInfo, topics } = repoDetails;
  const listOfDirectoryNames = rootFileInfo
    ?.filter((obj) => obj.type === 'dir')
    .map((obj) => obj.name);
  const listOfFileNames = rootFileInfo
    ?.filter((obj) => obj.type === 'file')
    .map((obj) => obj.name)
    .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));


  return (
    <>
      <RepoContainer>
        <RepoGrid>
          <RepoMain>
            <FileExplorer
              fileNames={listOfFileNames!}
              dirNames={listOfDirectoryNames!}
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
        </RepoGrid>
      </RepoContainer>
    </>
  );
}
