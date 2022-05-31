import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { tap, forkJoin } from 'rxjs';
import { SINGLE_USER_REPO } from '../constants/url.constants';
import { Repository } from '../interfaces/repositories.interfaces';
import { fromFetchWithAuth } from '../hooks/auth/from-fetch-with-auth';
import SubHeader from '../components/sub-header/SubHeader';
import { RepoLayout } from '../components/layouts/RepoLayoutPage';
import { Route, Routes } from 'react-router-dom';
import RepoCodeTab from '../components/repo-code-tab';
import IssuesCtrl from '../components/issue/Issue/Issue.data';
import PullRequestCtrl from '../components/pull-request/PullRequest';

type RepositoryDetails = {
  repo: Repository | null;
  openPr?: number;
  closedPr?: Number;
  rootFileInfo?: any[];
  issues?: any[];
  topics?: string[];
};

export default function RepoDetails() {
  const [repoDetails, setRepoDetails] = useState<RepositoryDetails>({
    repo: null,
  });
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const { repo, openPr, rootFileInfo, issues, topics } = repoDetails;
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
      request(SINGLE_USER_REPO(params.username!, params.repo!)),
      request(`${SINGLE_USER_REPO(params.username!, params.repo!)}/pulls`),
      request(
        `${SINGLE_USER_REPO(params.username!, params.repo!)}/pulls?state=closed`
      ),
      request(`${SINGLE_USER_REPO(params.username!, params.repo!)}/contents`),
      request(`${SINGLE_USER_REPO(params.username!, params.repo!)}/issues`),
      request(`${SINGLE_USER_REPO(params.username!, params.repo!)}/topics`),
    ])
      .pipe(
        tap((val) => {
          if (val) {
            setRepoDetails({
              repo: val[0],
              openPr: val[1].length,
              closedPr: val[2].length,
              rootFileInfo: val[3],
              issues: val[4],
              topics: val[5].names,
            });
            setLoading(false);
          }
        })
      )
      .subscribe();
  }, [params.username, params.repo]);

  if (loading) {
    return <p>...Loading</p>;
  }

  return (
    <RepoLayout>
      <SubHeader
        user={repo?.owner.login!}
        repo={repo?.name!}
        privacy={repo?.private!}
        watchCount={repo?.subscribers_count!}
        starCount={repo?.stargazers_count!}
        forkCount={repo?.forks_count!}
        issuesCount={issues?.length!}
        prCount={openPr!}
      />

      <Routes>
        <Route path="issues" element={<IssuesCtrl />} />
        <Route path="pulls" element={<PullRequestCtrl />} />
        <Route
          path="/"
          element={
            <RepoCodeTab
              topics={topics}
              description={repo?.description}
              websiteLink={repo?.homepage}
              fileNames={listOfFileNames!}
              dirNames={listOfDirectoryNames!}
              branch={repo?.default_branch!}
              ownerUsername={repo?.owner.login!}
              repositoryName={repo?.name!}
            />
          }
        />
      </Routes>
    </RepoLayout>
  );
}
