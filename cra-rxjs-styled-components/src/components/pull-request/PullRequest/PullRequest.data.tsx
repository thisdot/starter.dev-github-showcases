import {
  Observable,
  Subscription,
  filter,
  map,
  switchMap,
  tap,
  zip,
} from 'rxjs';
import { useEffect, useState } from 'react';

import type { PRTabValues } from '../types';
import { PULLS_URL } from '../../../constants/url.constants';
import type { PullRequests } from './PullRequest.type';
import PullRequestView from './PullRequest.view';
import { fromFetchWithAuth } from '../../../hooks/auth/from-fetch-with-auth';
import { useParams } from 'react-router-dom';

export default function PullRequestCtrl() {
  const [activeTab, setActiveTab] = useState<PRTabValues>('open');
  const [openPullRequests, setOpenPullRequests] = useState<PullRequests>();
  const [closedPullRequests, setClosedPullRequests] = useState<PullRequests>();
  const { username, repo } = useParams();

  useEffect(() => {
    if (username && repo) {
      const openPRsSubscription: Subscription = fromFetchWithAuth<PullRequests>(
        PULLS_URL(username, repo, 'open'),
        {
          selector: (response: Response) => {
            return response.json();
          },
        }
      )
        .pipe(
          tap((val) => console.log(val)),
          filter((pulls) => !!pulls.items.length),
          switchMap((pulls: PullRequests) => {
            const requests = pulls.map(createCommentCountRequest);
            return zip(...requests).pipe(
              map(mergePullRequestsWithCommentCount(pulls))
            );
          }),
          tap(setOpenPullRequests)
        )
        .subscribe();

      const closedPRsSubscription: Subscription = fromFetchWithAuth<
        PullRequest[]
      >(PULLS_URL(username, repo, 'closed'), {
        selector: (response: Response) => {
          return response.json();
        },
      })
        .pipe(
          tap((val) => console.log(val)),
          filter((pulls) => !!pulls.length),
          switchMap((pulls: PullRequest[]) => {
            const requests = pulls.map(createCommentCountRequest);
            return zip(...requests).pipe(
              map(mergePullRequestsWithCommentCount(pulls))
            );
          }),
          tap(setClosedPullRequests)
        )
        .subscribe();

      return () => {
        openPRsSubscription.unsubscribe();
        closedPRsSubscription.unsubscribe();
      };
    }
  }, [username, repo]);

  return (
    <PullRequestView
      pullRequests={
        activeTab === 'open'
          ? openPullRequests?.items
          : closedPullRequests?.items
      }
      openPRCount={openPullRequests?.total_count}
      closedPRCount={closedPullRequests?.total_count}
      changeActiveTab={setActiveTab}
    />
  );
}

function createCommentCountRequest(pr: PullRequest): Observable<number> {
  return fromFetchWithAuth<number>(pr.review_comments_url, {
    selector: (response: Response) => {
      return response.json();
    },
  });
}

function mergePullRequestsWithCommentCount(pulls: PullRequest[]) {
  return (counts: number[]): PullRequest[] => {
    return pulls.map((p: PullRequest, index: number) => ({
      ...p,
      comments: counts[index],
    }));
  };
}
