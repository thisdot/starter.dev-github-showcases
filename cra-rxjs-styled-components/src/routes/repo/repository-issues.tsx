import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { forkJoin, tap } from 'rxjs';
import { ISSUE_PR_SEARCH } from '../../constants/url.constants';
import { fromFetchWithAuth } from '../../hooks/auth/from-fetch-with-auth';
import IssueCtrl from '../../components/repo-issues/Issues';
import { IssueTypes } from '../../types/types';

export default function RepoIssues() {
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

  const [loading, setLoading] = useState(true);
  const params = useParams();
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
          params.username!,
          params.repo!,
          'issue',
          'open',
          20,
          1
        )}`
      ),
      request(
        `${ISSUE_PR_SEARCH(
          params.username!,
          params.repo!,
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
            setLoading(false);
          }
        })
      )
      .subscribe();
  }, [params.username, params.repo]);

  if (loading) {
    return <p>...Loading</p>;
  }

  return <IssueCtrl issues={issues!} />;
}
