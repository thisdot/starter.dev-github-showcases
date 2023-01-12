import { useLocation } from '@builder.io/qwik-city';
import { IssuePrCard } from '../issue-pr-card/card';
import { PullRequest } from './types';
import { component$ } from '@builder.io/qwik';

interface PullRequestDataProps {
  pull_request: PullRequest[];
  loading: Boolean;
}
const PullRequestData = component$(({ pull_request, loading }: PullRequestDataProps) => {
  const location = useLocation();

  return (
    <>
      {pull_request.map((issue: PullRequest, index: number) => (
        <IssuePrCard
          key={index}
          type="pr"
          data={{
            url: issue.url,
            title: issue.title,
            number: issue.number,
            isOpen: issue.state === 'OPEN',
            isMerged: issue.state === 'MERGED',
            createdAt: issue.closedAt || issue.createdAt,
            authorName: issue.login,
            commentsCount: issue.commentCount,
            labels: issue.labels,
          }}
        />
      ))}
      {pull_request.length === 0 && !loading && (
        <div class="text-center p-3 flex flex-col items-center justify-center">
          <span class="font-bold mb-4">No results matched your search.</span>
          <a class=" text-blue-600 underline" href={location.pathname}>
            Refresh
          </a>
        </div>
      )}
    </>
  );
});

export default PullRequestData;
