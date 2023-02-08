import { useLocation } from '@builder.io/qwik-city';
import { IssuePrCard } from '../issue-pr-card/card';
import { Issue } from './type';
import { component$ } from '@builder.io/qwik';

interface IssueDataProps {
  issues: Issue[];
  loading: Boolean;
}
const IssuesData = component$(({ issues, loading }: IssueDataProps) => {
  const location = useLocation();

  return (
    <>
      {issues.map((issue: Issue, index: number) => (
        <IssuePrCard
          key={index}
          type="issue"
          data={{
            url: issue.url,
            title: issue.title,
            number: issue.number,
            isOpen: issue.state === 'OPEN',
            isResolved: issue.state === 'CLOSED',
            createdAt: issue.closedAt || issue.createdAt,
            authorName: issue.login,
            commentsCount: issue.commentCount,
            labels: issue.labels,
          }}
        />
      ))}

      {issues.length === 0 && !loading && (
        <div class="text-center p-3 flex flex-col items-center justify-center">
          <span class="font-bold mb-4">No results matched your search.</span>{' '}
          <a class=" text-blue-600 underline" href={location.pathname}>
            Refresh
          </a>
        </div>
      )}
    </>
  );
});

export default IssuesData;
