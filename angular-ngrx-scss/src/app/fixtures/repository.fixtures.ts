import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { PullRequest } from '../repository/services/repository.interfaces';
import {
  ISSUE_STATE,
  PullRequestAPIResponse,
  IssueLabel,
} from '../state/repository';

export const generatePullRequestAPIResponseFixture = (
  state: ISSUE_STATE = 'open',
): HttpResponse<PullRequestAPIResponse> => {
  const closedDate = new Date(2022, 2, 1).toISOString();
  const body = {
    incomplete_results: false,
    total_count: 1,
    items: [
      {
        id: 984,
        user: {
          login: 'thisdot',
        },
        title: 'PR title',
        number: 58,
        state: state,
        closed_at: state === 'closed' ? closedDate : null,
        pull_request: {
          url: 'ug5',
          html_url: 'F518xtd',
          diff_url: 'BwCz9qOB',
          patch_url: 'qwj',
          merged_at: state === 'closed' ? closedDate : null,
        },
        created_at: new Date(2022, 1, 1).toISOString(),
        labels: [
          {
            name: 'bugs',
          } as IssueLabel,
        ],
        comments: 305,
      } as unknown as PullRequest,
    ],
  };

  return {
    headers: new HttpHeaders(),
    status: 200,
    statusText: 'OK',
    ok: true,
    type: 4,
    url: 'https://api.github.com/search/issues?q=repo:thisdot/open-source/issues+type:pr+state:open',
    clone: jasmine.createSpy('clone'),
    body,
  };
};
