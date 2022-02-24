import styled from 'styled-components';
import { BranchLogo } from '../components/misc/branch-logo';
import { StarLogo } from '../components/misc/star-logo';
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { Subscription, tap } from 'rxjs';
import { SINGLE_USER_REPO } from '../constants/url.constants';
import { Repository } from '../interfaces/repositories.interfaces';
import { fromFetchWithAuth } from '../hooks/auth/from-fetch-with-auth';
import { Readme } from '../components/readme/Readme';

export default function RepoDetails() {
  const [repo, setRepo] = useState<Repository | null>(null);
  const params = useParams();

  useEffect(() => {
    const subscription: Subscription = fromFetchWithAuth<Repository>(SINGLE_USER_REPO(params.username!, params.repo!), {
      selector: (response: Response) => {
        return response.json();
      },
    })
      .pipe(tap(setRepo))
      .subscribe()

    return () => {
      subscription.unsubscribe();
    };
  }, [params.username, params.repo]);


  if (!repo) {
    return <p>...loading</p>
  }

  return (
    <>
      <h2>{repo.full_name}</h2>
      <p>Branch name: {repo.default_branch}</p>
      <p>Visibility: {repo.visibility}</p>
      <p>Watchers Count: {repo.watchers_count}</p>
      <p>Stargazer Count: {repo.stargazers_count}</p><StarLogo />
      <p>Fork count: {repo.forks_count}</p>
      <p>Open Issues: {repo.open_issues_count}</p>
      <p>Description: {repo.description}</p>
      <p>Homepage: {repo.homepage}</p>
      <Readme branch={repo.default_branch} username={params.username!} repository={params.repo!} />
    </>
  );
}
