import {
  Observable,
  Subscription,
  filter,
  map,
  switchMap,
  tap,
  zip,
} from 'rxjs';
import {
  Repository,
  RepositoryWithBranchCount,
} from '../../interfaces/repositories.interfaces';
import {
  extractBranchCount,
  sanitizeBranchesUrl,
} from '../../helpers/extract-branch-count';
import { useEffect, useState } from 'react';

import { REPOS_URL } from '../../constants/url.constants';
import { fromFetchWithAuth } from '../auth/from-fetch-with-auth';

export function useRepos(): RepositoryWithBranchCount[] {
  const [state, setState] = useState<RepositoryWithBranchCount[]>([]);
  const [repoPage, setRepoPage] = useState<number>(1);

  useEffect(() => {
    const subscription: Subscription = fromFetchWithAuth<Repository[]>(
      REPOS_URL(),
      {
        selector: (response: Response) => {
          return response.json();
        },
      }
    )
      .pipe(
        filter((repos) => !!repos.length),
        switchMap((repositories: Repository[]) => {
          const requests = repositories.map(createBranchCountRequest);
          return zip(...requests).pipe(
            map(mergeRepositoriesWithBranchCount(repositories))
          );
        }),
        tap(setState)
      )
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return state;
}

function createBranchCountRequest(repo: Repository): Observable<number> {
  return fromFetchWithAuth<number>(sanitizeBranchesUrl(repo.branches_url), {
    method: 'HEAD',
    selector: extractBranchCount,
  });
}

function mergeRepositoriesWithBranchCount(repositories: Repository[]) {
  return (counts: number[]): RepositoryWithBranchCount[] =>
    repositories.map((r: Repository, index: number) => ({
      ...r,
      branches_count: counts[index],
    }));
}
