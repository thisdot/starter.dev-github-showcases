import { useEffect, useState } from 'react';
import { tap, forkJoin } from 'rxjs';
import { SINGLE_USER_REPO } from '../../constants/url.constants';
import { fromFetchWithAuth } from '../auth/from-fetch-with-auth';
import { Repository } from '../../interfaces/repositories.interfaces';

type RepositoryDetails = {
  repo: Repository | null;
  rootFileInfo?: any[];
  topics?: string[];
};

export function useRepositoryDetails(
  username: string,
  repo: string,
  branch?: string,
  folder?: string
): RepositoryDetails {
  const [repoDetails, setRepoDetails] = useState<RepositoryDetails>({
    repo: null,
  });

  const request = (url: string) =>
    fromFetchWithAuth(url, {
      selector: (response: Response) => {
        return response.json();
      },
    });

  const path = folder ? `/${folder}` : '';
  const branchRef = branch ? `?ref=${branch}` : '';
  const repoUrl: string = `${SINGLE_USER_REPO(
    username,
    repo
  )}/contents${path}${branchRef}`;

  useEffect(() => {
    const subscription = forkJoin([
      request(SINGLE_USER_REPO(username, repo)),
      request(repoUrl),
      request(`${SINGLE_USER_REPO(username, repo)}/topics`),
    ])
      .pipe(
        tap((val) => {
          if (val) {
            setRepoDetails({
              repo: val[0],
              rootFileInfo: val[1],
              topics: val[2].names,
            });
          }
        })
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [username, repo, repoUrl]);

  return repoDetails;
}
