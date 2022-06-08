import { useEffect, useState } from 'react';
import { forkJoin, tap } from 'rxjs';
import { ISSUE_PR_SEARCH } from '../../constants/url.constants';
import { IssueTypes } from '../../types/types';
import { fromFetchWithAuth } from '../auth/from-fetch-with-auth';

export function useRepositoryIssues(username: string, repo: string): IssueTypes {
  const [issues, setIssues] = useState<IssueTypes>({
    closed: {
      total_count: 0,
      incomplete_results: true,
      items: [],
    },
    open: {
      total_count: 0,
      incomplete_results: true,
      items: [],
    },
  });

  const request = (url: string) =>
    fromFetchWithAuth(url, {
      selector: (response: Response) => {
        return response.json();
      },
    });

  
  useEffect(() => {
    forkJoin([
      request(
        `${ISSUE_PR_SEARCH(
          username,
          repo,
          'issue',
          'open',
          20,
          1
        )}`
      ),
      request(
        `${ISSUE_PR_SEARCH(
          username,
          repo,
          'issue',
          'closed',
          20,
          1
        )}`
      ),
    ])
      .pipe(
        tap((val) => {
          if (val) {
            setIssues({
              open: val[0],
              closed: val[1],
            });
          }
        })
      )
      .subscribe();
  }, [username, repo]);

  return issues;
}
