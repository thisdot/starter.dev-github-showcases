import { FormatDistance } from '../../../helpers/format-distance';
import { Issue } from '../Issues/Issue.type';

interface Props {
  issue: Issue;
}

export default function IssueCardIssueInfo({ issue }: Props) {
  const baseDate = new Date();
  const formatDistance = FormatDistance;

  return (
    <div className="info">
      <div className="heading">{issue.title}</div>
      <div className="sub_heading">
        <span className="opened_num">#{issue.number}</span>
        {issue.state === 'open' ? (
          <span className="opened_day">
            opened{' '}
            {formatDistance({
              date: issue.created_at,
              dateToCompare: baseDate,
            })}{' '}
            ago
          </span>
        ) : (
          <span className="opened_day">closed {issue.closed_at} ago</span>
        )}
        <span className="opened_by">by {issue.user.login}</span>
      </div>
    </div>
  );
}
