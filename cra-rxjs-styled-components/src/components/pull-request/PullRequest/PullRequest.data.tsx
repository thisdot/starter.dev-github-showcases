import React, { useEffect, useState } from 'react';
import { Subscription, filter, tap } from 'rxjs';

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
