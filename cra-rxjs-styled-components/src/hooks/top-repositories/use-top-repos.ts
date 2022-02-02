import { useEffect, useState } from 'react';
import { filter, map, Observable, Subscription, switchMap, tap, zip } from 'rxjs';
import { TOP_REPOS_URL } from '../../constants/url.constants';
import { extractBranchCount, sanitizeBranchesUrl } from '../../helpers/extract-branch-count';
import { Repository, RepositoryWithBranchCount } from '../../interfaces/repositories.interfaces';
import { fromFetchWithAuth } from '../auth/from-fetch-with-auth';

export function useTopRepos(): RepositoryWithBranchCount[] {
  const [state, setState] = useState<RepositoryWithBranchCount[]>([]);

  useEffect(() => {
    const subscription: Subscription = fromFetchWithAuth<Repository[]>(TOP_REPOS_URL, {
      selector: (response: Response) => {
        return response.json();
      },
    })
      .pipe(
        filter((repos) => !!repos.length),
        switchMap((repositories: Repository[]) => {
          const requests = repositories.map(createBranchCountRequest);
          return zip(...requests).pipe(map(mergeRepositoriesWithBranchCount(repositories)));
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
