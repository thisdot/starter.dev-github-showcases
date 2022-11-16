import { IssuePrCard } from '../issue-pr-card/card';
import { Issue } from './type';

interface IssueDataProps {
  issues: Issue[];
}
const IssuesData = ({ issues }: IssueDataProps) => {
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
            authorName: issue.author.login,
            commentsCount: issue.comments.totalCount,
          }}
        />
      ))}
    </>
  );
};

export default IssuesData;
