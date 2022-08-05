import {
  Observable,
  Subscription,
  filter,
  map,
  switchMap,
  tap,
  zip,
} from 'rxjs';
import React, { useEffect, useState } from 'react';

import type { PRTabValues } from '../types';
import { PULLS_URL } from '../../../constants/url.constants';
import type { PullRequest } from './PullRequest.type';
import PullRequestView from './PullRequest.view';
import { fromFetchWithAuth } from '../../../hooks/auth/from-fetch-with-auth';
import { useParams } from 'react-router-dom';

export default function PullRequestCtrl() {
  const [activeTab, setActiveTab] = useState<PRTabValues>('open');
  const [pullRequests, setPullRequests] = useState<PullRequest[]>([]);
  const { username, repo } = useParams();

  useEffect(() => {
    if (username && repo) {
      const subscription: Subscription = fromFetchWithAuth<PullRequest[]>(
        PULLS_URL(username, repo),
        {
          selector: (response: Response) => {
            return response.json();
          },
        }
      )
        .pipe(
          filter((pulls) => !!pulls.length),
          switchMap((pulls: PullRequest[]) => {
            const requests = pulls.map(createCommentCountRequest);
            return zip(...requests).pipe(
              map(mergePullRequestsWithCommentCount(pulls))
            );
          }),
          tap(setPullRequests)
        )
        .subscribe();

      return () => {
        subscription.unsubscribe();
      };
    }
  }, [username, repo]);

  const OPEN_PRS: PullRequest[] = pullRequests?.filter(
    (pr) => pr.state === 'open'
  );
  const CLOSED_PRS: PullRequest[] = pullRequests?.filter(
    (pr) => pr.state === 'closed'
  );

  return (
    <PullRequestView
      pullRequests={activeTab === 'open' ? OPEN_PRS : CLOSED_PRS}
      openPRCount={OPEN_PRS?.length}
      closedPRCount={CLOSED_PRS?.length}
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
