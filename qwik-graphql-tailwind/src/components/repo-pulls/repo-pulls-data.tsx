import { IssuePrCard } from '../issue-pr-card/card';
import { PullRequest } from './types';

interface PullRequestDataProps {
  pull_request: PullRequest[];
}
const PullRequestData = ({ pull_request }: PullRequestDataProps) => {
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
            authorName: issue.author.login,
            commentsCount: issue.comments.totalCount,
          }}
        />
      ))}
    </>
  );
};

export default PullRequestData;
