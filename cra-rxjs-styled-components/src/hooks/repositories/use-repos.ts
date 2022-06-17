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
  PaginationPages,
  ParsedHeaderLinks,
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
import parse from 'parse-link-header';

export function useRepos(): {
  repositories: RepositoryWithBranchCount[];
  prevPage: () => void;
  nextPage: () => void;
  paginationPages: any;
} {
  const [state, setState] = useState<RepositoryWithBranchCount[]>([]);
  const [paginationPages, setPaginationPages] = useState<{
    prevPage: string | undefined;
    nextPage: string | undefined;
  }>({
    prevPage: '',
    nextPage: '1',
  });
  const [currentPage, setCurrentPage] = useState<string | undefined>('1');

  useEffect(() => {
    const subscription: Subscription = fromFetchWithAuth<Repository[]>(
      REPOS_URL(currentPage),
      {
        selector: (response: Response) => {
          const links = parse(response.headers.get('Link'));

          // @ts-ignore
          setPaginationPages({
            prevPage: links?.prev?.page,
            nextPage: links?.next?.page,
          });

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
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage(paginationPages.nextPage);
  };

  const prevPage = () => {
    setCurrentPage(paginationPages.prevPage);
  };

  return {
    repositories: state,
    prevPage,
    nextPage,
    paginationPages,
  };
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
